---
name: eng-process
description: >
  Backup lookup for a team's build, run, and deployment procedures in Roam
  chat and Magic Minutes when repository docs are missing, incomplete, or
  stale, including recent tooling or infrastructure changes. Use when a local
  build breaks, someone asks how to build or run a service, or wants to know
  whether build tools, CI, or infrastructure were updated, and the repo docs
  do not already answer it. When those docs cover the question, skip the
  search — it spends time and tokens. Search when the docs look stale.
---

# Engineering process

Look up the team's procedures and announcements in Roam when the repository docs are missing, incomplete, or stale. If the docs already answer the question, stop. Searching chat then spends time and tokens without adding much.

## When to use

- Repo docs do not say how to build, run, test, or deploy something, or they look out of date
- A local build or tool stopped working, and the question is whether someone changed it
- A recent infrastructure or developer-environment announcement

## Search

1. Call `chat_search` with a short query for the tool or system. If the user named a channel, use it in `in`; otherwise leave `in` unset. Use `sort: "recent"` when the question is whether something changed lately. Use `sort: "relevant"` when the question is how something works.
2. If bots dominate the first page, call `chat_search` again with those `chatId` values in `excludeChatIds` or those sender `userId` values in `excludeUserIds`.
3. If chat does not answer it, call `meeting_search` for the same topic, then `meeting_info` on the best hit.
4. Call `meeting_transcript` only when the summary does not contain the step or the exact command. `search` is an alias of `chat_search` and does not search transcript text.

When two announcements conflict, prefer the newer one and say that the older one is superseded.

## Answer

Cite the channel and message time, or the meeting name and date. Give the current procedure in a few steps. Do not paste a transcript.
