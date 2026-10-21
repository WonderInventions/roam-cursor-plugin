# Contributing

This is a Cursor plugin. The manifest is `.cursor-plugin/plugin.json`. Cursor discovers `skills/` and the root `mcp.json`. See [Cursor plugins](https://cursor.com/docs/plugins) and the [plugins reference](https://cursor.com/docs/reference/plugins).

A logo is optional. If you add one, commit it under `assets/` and set `logo` in the manifest to that relative path, for example `assets/logo.png`.

## Load it locally

Cursor reads local plugins from `~/.cursor/plugins/local`. From the root of this checkout, copy the plugin files. The destination must not already exist, so an older copy is not mixed with this one.

```bash
mkdir -p ~/.cursor/plugins/local
(set -e
  mkdir ~/.cursor/plugins/local/roam
  cp -R .cursor-plugin skills mcp.json README.md LICENSE ~/.cursor/plugins/local/roam/
)
```

Restart Cursor or run **Developer: Reload Window**. In **Customize**, confirm the Roam plugin, its MCP server, and the four skills, then connect the server as described in the README.

If a Marketplace plugin with the same name is installed, that copy takes precedence over this local one.

To test an update, remove `~/.cursor/plugins/local/roam`, repeat the copy, and reload Cursor. Editing this checkout does not update the installed copy.

## Checks

`npm run validate` checks `.cursor-plugin/plugin.json` against the Cursor plugin schema and checks that each skill has a name and a description. GitHub runs the same check on pull requests.

The validators in [cursor/plugin-template](https://github.com/cursor/plugin-template) and [cursor/plugins](https://github.com/cursor/plugins) require `.cursor-plugin/marketplace.json`. This repository is one plugin, so it does not use that file. The schema in `schemas/plugin.schema.json` is the same manifest schema those validators use.
