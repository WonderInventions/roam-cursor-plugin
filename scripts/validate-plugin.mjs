import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

function fail(message) {
  errors.push(message);
}

const manifestPath = join(root, ".cursor-plugin/plugin.json");
if (!existsSync(manifestPath)) {
  fail("missing .cursor-plugin/plugin.json");
} else {
  const schema = JSON.parse(readFileSync(join(root, "schemas/plugin.schema.json"), "utf8"));
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  if (!validate(manifest)) {
    for (const error of validate.errors) {
      const detail =
        error.keyword === "additionalProperties"
          ? `${error.message}: ${error.params.additionalProperty}`
          : error.message;
      fail(`plugin.json ${error.instancePath || "/"}: ${detail}`);
    }
  }
}

if (existsSync(join(root, "plugin.json"))) {
  fail("root plugin.json is the Agent Plugin manifest; this package uses .cursor-plugin/plugin.json");
}

const skillsDir = join(root, "skills");
if (!existsSync(skillsDir)) {
  fail("missing skills/");
} else {
  for (const entry of readdirSync(skillsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }
    const skillPath = join(skillsDir, entry.name, "SKILL.md");
    if (!existsSync(skillPath)) {
      fail(`${entry.name}: missing SKILL.md`);
      continue;
    }
    const text = readFileSync(skillPath, "utf8");
    if (!text.startsWith("---\n")) {
      fail(`${entry.name}: SKILL.md is missing frontmatter`);
      continue;
    }
    const end = text.indexOf("\n---\n", 4);
    const frontmatter = end === -1 ? "" : text.slice(4, end);
    if (!/^name:\s*\S/m.test(frontmatter)) {
      fail(`${entry.name}: SKILL.md frontmatter is missing name`);
    }
    if (!/^description:\s*\S/m.test(frontmatter)) {
      fail(`${entry.name}: SKILL.md frontmatter is missing description`);
    }
  }
}

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Validation passed.");
