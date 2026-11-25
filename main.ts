// Entry for make.fun bounty post-x-promote-make-your-own-bounty-01
// ("Promote make.fun's make-your-own-bounty post on X").
//
// The entry is the X post itself: one post of the entrant's own that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it, with
// a photo of its own attached and make.fun / @makefunai and the entrant's
// play code in its text. POST.json names that post, and the house reads its
// replies, reposts and quotes from X. Nothing this program writes about the
// post is scored.
//
// This program (Node 22, standard library only) copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. That is all
// it has to do. It takes no network, no wall clock and no files outside the
// repository, so two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
