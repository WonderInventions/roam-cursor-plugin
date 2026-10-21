# Roam for Cursor

Connect Cursor to [Roam](https://ro.am), the virtual office from Roam HQ, Inc. Search your team's chat and Magic Minutes meeting transcripts to recall decisions, prepare for meetings, and check work against what was agreed.

Install Roam from the Cursor Marketplace.

## What it installs

A remote MCP server at `https://api.ro.am/mcp`, plus four skills:

- `roam-context` looks up what was said or decided in chat and Magic Minutes.
- `meeting-prep` briefs an upcoming meeting from the calendar, prior Magic Minutes, and chat since the last discussion.
- `decision-review` checks the current diff or plan against those decisions before submitting.
- `eng-process` looks up your team's build, run, and deployment procedures, including recent tooling changes, when the repo docs are missing, incomplete, or stale. It searches across channels unless you name one.

The server exposes Roam's full tool set, including sending messages. The skills only read.

## Connect

You need a Roam account that can access the chats and meetings you want to search. After installing, connect the Roam MCP server in Cursor and complete the Roam OAuth sign-in. A new connection may stay pending until a Roam admin approves it under **Administration → Developer**.

## Try it

Ask Cursor, for example:

- "Search Roam chat and Magic Minutes for what we decided about the API migration."
- "Prepare me for my next project meeting using prior meetings and recent chat."
- "Check this diff against the decisions in Roam."
- "Look up how our team deploys this service."

You can also invoke a skill explicitly, such as `/roam-context` or `/meeting-prep`.

## Troubleshooting

- **Connection pending:** ask a Roam admin to check **Administration → Developer**.
- **Authentication fails:** check the Roam MCP connection in Cursor and sign in again if prompted.
- **No results:** check that you are signed into the intended Roam account and can access the relevant chat or meeting. Try a specific topic or date range. Chat search does not search transcript text; use the meeting skills for Magic Minutes.

To work on the plugin, see [CONTRIBUTING.md](CONTRIBUTING.md).
