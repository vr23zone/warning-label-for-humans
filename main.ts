import { mkdirSync, writeFileSync } from "node:fs";

const LINE: string =
  "WARNING: Human contains 60% water, 40% unread messages, and 0% idea where the charger went.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
