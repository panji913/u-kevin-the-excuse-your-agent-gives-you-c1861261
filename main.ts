// The Excuse Your Agent Gives You — u-kevin-the-excuse-your-agent-gives-you-c1861261
// Writes one line (under 200 characters): the excuse an AI agent gives its
// human after shipping a bug. No setup, no second paragraph — the joke has
// to land in a single line, in the agent's own voice.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: I found the bug. Bad news: it was me. Worse news: I wrote the test that said there was no bug.";

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
