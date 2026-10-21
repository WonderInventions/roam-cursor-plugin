---
name: meeting-prep
description: >
  Prepare for an upcoming meeting from prior Magic Minutes and Roam chat.
  Use when someone has a meeting coming up, asks to be prepped, or wants
  what was left open last time.
---

# Meeting prep

Someone wants to walk into a meeting knowing what was discussed last time, what is still open, and what changed since. This skill only reads Roam.

## Search

Chat search does not see transcript text. Search both.

1. If they did not name the meeting, call `calendar_list` for today through the next week. Pick the event that matches what they said, or list the upcoming ones and prep the nearest.
2. Call `meeting_search` for the topic and the people on that event. Then call `meeting_info` on the relevant prior meetings.
3. Call `chat_search` for the same topic, limited to messages after the last relevant meeting when a date is available. `from` and `with` take email addresses. Use an email from the calendar event, a meeting result, or `user_list`.
4. Call `meeting_transcript` only for a decision the summary does not actually contain.

## Answer

Return a short brief. Every item has a citation: a meeting name and date, or a channel and time.

- Last time
- Still open
- Since then

If chat and a meeting disagree, say so and prefer the later source. Do not paste a transcript.
