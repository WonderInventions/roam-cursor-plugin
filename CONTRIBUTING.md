# Contributing

This repository is an [Agent Plugin](https://agent-plugins.org). Cursor loads that format alongside its own. See [Cursor plugins](https://cursor.com/docs/plugins) and the [plugins reference](https://cursor.com/docs/reference/plugins).

Agent Plugins keep `plugin.json` at the repository root and package skills and MCP servers. Cursor Plugins use `.cursor-plugin/plugin.json` and can also include rules, agents, commands, hooks, and variables. This package is four skills and the Roam MCP server, so it uses the Agent Plugin format.

## Load it locally

Cursor reads local plugins from `~/.cursor/plugins/local`. From the root of this checkout, copy the plugin files. The destination must not already exist, so an older copy is not mixed with this one.

```bash
mkdir -p ~/.cursor/plugins/local
(set -e
  mkdir ~/.cursor/plugins/local/roam
  cp -R plugin.json skills mcp.json README.md LICENSE ~/.cursor/plugins/local/roam/
)
```

Restart Cursor or run **Developer: Reload Window**. In **Customize**, confirm the Roam plugin, its MCP server, and the four skills, then connect the server as described in the README.

If a Marketplace plugin with the same name is installed, that copy takes precedence over this local one.

To test an update, remove `~/.cursor/plugins/local/roam`, repeat the copy, and reload Cursor. Editing this checkout does not update the installed copy.
