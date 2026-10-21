---
name: roam-context
description: >
  Look up what was said or decided in Roam chat and Magic Minutes.
  Use when someone asks for context from Roam, wants to recall a discussion,
  or names people they talked with about the work.
---

# Roam context

Someone is mid-work and wants what Roam already knows. They may be implementing a change, writing a doc, or trying to remember whether something was decided or only mentioned. Example: "What did we decide about the API migration? Look at our chats and transcripts."

This skill only reads Roam.

## Search

Chat search does not see transcript text. Search both.

1. Call `meeting_search` with a natural-language query that includes the topic and any people the user named, such as "meetings about the API migration". Then call `meeting_info` for the summary and chapters of the relevant hits.
2. Call `chat_search` for the same topic. `from` and `with` take email addresses, not display names. If a meeting result or `user_list` gives you an email, pass it. Otherwise search by the topic words and read the `addresses` map for the people the user named.
3. Call `meeting_transcript` only for a point the summary does not actually contain, or when the user wants the exact wording.

## Answer

Return a short answer. Cite each point with a channel and time, or a meeting name and date, and name who was involved.

If they asked what was decided, include what was rejected and what is still open. If the same point came up more than once, say whether it changed. If chat and a meeting disagree, say so and prefer the later source. Do not paste a transcript.
