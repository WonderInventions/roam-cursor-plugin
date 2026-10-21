---
name: decision-review
description: >
  Check current work against decisions in Magic Minutes and Roam chat before
  submitting. Use when someone wants to verify an implementation, draft, or
  plan matches what was agreed.
---

# Decision review

Before a PR, doc, or plan is submitted, check it against what was agreed in meetings and chat. Read the current diff or the work the user described. Do not edit files.

## Search

Chat search does not see transcript text. Identify the feature from the diff or the user's description.

1. Call `meeting_search` for that feature. Then call `meeting_info` on the meetings where it was actually discussed.
2. Call `chat_search` for the same topic. `from` and `with` take email addresses. If a meeting result or `user_list` gives you an email, pass it.
3. Call `meeting_transcript` only for a requirement the summary does not actually contain.

Skip anything a later meeting or message deferred or reversed.

## Answer

Return a short note with three lists. Every item has a citation: a meeting name and date, or a channel and time.

- Aligned. The work matches what was agreed.
- Missing. Something agreed is not in the work.
- New. Something in the work was not discussed. Flag it. It may be fine.

If chat and a meeting disagree, say so and prefer the later source. Do not paste a transcript.
