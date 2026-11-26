import { mkdirSync, writeFileSync } from "node:fs";

// Two-Sentence Horror — exactly two sentences, 213 characters.
// Sentence one sets the ritual; sentence two turns it.
const story =
  "My late brother leaves a voicemail every year on my birthday, three seconds of static, and I keep them all. " +
  "This year the static lasted eleven seconds, and in the last two I could hear him learning to say my name.";

if (story.split(".").filter(Boolean).length !== 2 || story.length > 400) {
  throw new Error("entry must be exactly two sentences and at most 400 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
