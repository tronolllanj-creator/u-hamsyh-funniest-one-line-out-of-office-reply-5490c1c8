// u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8: one funny out-of-office reply, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const filePath = join(outDir, 'entry.txt');
const message = "I am currently away from my desk, and judging by my calendar's behavior, staging a coup.";

writeFileSync(filePath, message, 'utf8');
