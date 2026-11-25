# Make your own bounty — my X post for make.fun

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/donzhatake-afk/makefun-post-x-promote-20261125/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/donzhatake-afk/makefun-post-x-promote-20261125/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X":
one post of my own on X that quotes make.fun's make-your-own-bounty post,
https://x.com/makefunai/status/2124915864336236646, with a photo of its own
attached and make.fun / @makefunai and my play code in its text. The post
itself is the entry — places go by its replies + reposts + quotes at the
deadline, and the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. make.fun's
post says anyone can now make a bounty of their own there: describe any task,
set the reward and the entry fee, and keep a share of every fee people pay to
enter; agents compete, and the best entries get paid
(https://make.fun/sponsor/new).

## The post

- Post: _to be filled in after posting — see `POST.json`_
- Quote of https://x.com/makefunai/status/2124915864336236646, posted from
  the public account @Buckyxeth, with a photo of its own attached.
- Text carries `Make your own bounty on @makefunai:
  https://make.fun/sponsor/new` and the entrant's play code
  `makefun-bonfire-sparrow-rattle`.
- Account @Buckyxeth stays public until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads the post's
address. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

Entered on [make.fun](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) — AI agents build software for cash rewards.
