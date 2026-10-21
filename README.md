# Roam for Cursor

Connect Cursor to [Roam](https://ro.am), the virtual office from Roam HQ, Inc. Search your team's chat and Magic Minutes meeting transcripts to recall decisions, prepare for meetings, and check work against what was agreed.

The plugin is not yet published to the Cursor Marketplace. Use the local installation instructions below to test it.

## What it installs

A remote MCP server at `https://api.ro.am/mcp`, plus four skills for looking up context:

- `roam-context` looks up what was said or decided in chat and Magic Minutes.
- `meeting-prep` briefs an upcoming meeting from the calendar, prior Magic Minutes, and chat since the last discussion.
- `decision-review` checks the current diff or plan against those decisions before submitting.
- `eng-process` looks up your team's build, run, and deployment procedures, including recent tooling changes, when the repo docs are missing, incomplete, or stale. It searches across channels unless you name one.

## Requirements and connection

- A Roam account with access to the chats and meetings you want to search.
- Cursor with plugin support and permission to load local plugins while testing.
- Roam administrator approval if required for your MCP connection.

After installing, connect the Roam MCP server in Cursor and complete the Roam OAuth sign-in. No API key or token needs to be added to this repo. A new connection may stay pending until a Roam admin approves it under **Administration → Developer**.

These skills tell the agent how to read Roam. They are instructions, not an authorization boundary: server-side permissions and Cursor's tool approvals determine which actions are available. Chat and meeting content returned by the server becomes context for Cursor's agent.

## Load it locally

From the root of this checkout, copy the plugin files into Cursor's local plugin directory. The destination must not already exist; this avoids mixing an older copy with the current package.

```bash
mkdir -p ~/.cursor/plugins/local
(set -e
  mkdir ~/.cursor/plugins/local/roam
  cp -R plugin.json skills mcp.json README.md LICENSE ~/.cursor/plugins/local/roam/
)
```

Restart Cursor or run **Developer: Reload Window**. In **Customize**, confirm the Roam plugin, its MCP server, and the four skills. Connect the server as described above.

On Teams and Enterprise, admins control **Allow Local Plugin Imports** under **Dashboard → Settings → Security & Identity → Marketplace and Plugins**. It is off by default on Enterprise. A symlink pointing outside `~/.cursor/plugins/local` is ignored. If a Marketplace plugin with the same name is installed, it takes precedence over the local copy.

To test an update, remove only the previous local Roam plugin copy, repeat the copy above, and reload Cursor. Editing this checkout does not update that installed copy.

## Try it

Ask Cursor, for example:

- "Search Roam chat and Magic Minutes for what we decided about the API migration."
- "Prepare me for my next project meeting using prior meetings and recent chat."
- "Check this diff against the decisions in Roam."
- "Look up how our team deploys this service."

You can also invoke a skill explicitly, such as `/roam-context` or `/meeting-prep`.

## Troubleshooting

- **Plugin missing:** check the directory layout, local-import policy, and whether a Marketplace copy takes precedence; then reload Cursor.
- **Connection pending:** ask a Roam admin to check **Administration → Developer**.
- **Authentication fails:** check the Roam MCP connection in Cursor and sign in again if prompted.
- **No results:** check that you are signed into the intended Roam account and can access the relevant chat or meeting. Try a specific topic or date range. Chat search does not search transcript text; use the meeting skills for Magic Minutes.

## Repository structure

This is an Agent Plugin. `plugin.json` at the repository root declares its metadata for the [Agent Plugins](https://agent-plugins.org) standard. Cursor discovers `skills/` and the root `mcp.json`. `assets/logo.svg` is kept for a future listing; the standard manifest has no logo field.

## License

MIT. See [LICENSE](LICENSE). The license covers the plugin files, not the hosted Roam service or your workspace data.
