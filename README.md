# NAMIMA — public site

Play: https://namima-play.github.io/

This repository publishes the reviewed static NAMIMA game at the name-free organization hostname. The current release is **v5.4.0** with 10 interface languages.

## Source of truth

Development, tests, and existing feedback remain in [Masashi-Nakadaira/namima](https://github.com/Masashi-Nakadaira/namima).

Deployed game source commit: `3a7c4713daaa716058037df6306f7b0a64e300b3`.

## Publish an update

1. Make and review changes in the source repository, and run its full test suite.
2. Copy **all** files from the reviewed source commit's `docs/` directory into this repository's root, including `.nojekyll`. Keep relative paths unchanged. Do not copy an experimental branch or only individual translated files.
3. Update the source commit and release above, then commit the synchronized files together to `main`.
4. GitHub Pages publishes from `main` / `(root)`. Wait for the `pages build and deployment` workflow to succeed and verify https://namima-play.github.io/ before reporting a release.
5. Verify loading, language selection, all five rounds, and that shared results contain the new hostname.

Do not treat an update to the old personal-account Pages site as completion: this organization URL is the public destination. Deployment synchronization is currently manual; no cross-account credentials or automatic synchronization have been configured.

The existing source repository and feedback issue are retained. The public game URL does not contain the personal account name; public source history and feedback can still identify the author.


## Shared challenges

After five rounds, share a result link so the recipient can play the exact same five questions. A score-free invitation is also available. Scores are self-reported and unverified; no identity, tracking, account, or leaderboard is added. All ten languages and existing play instructions remain available.

The source release passes 101 automated checks, including 3,000 deterministic seeds, strict challenge validation, first-score locking, score privacy, sharing fallbacks, and existing language/UI regressions. Real mobile-device share sheets remain unverified.

Rollback: restore all static files from public commit `794f12bca4bdcbfd833cea23614833119403f846` and source commit `3766d5dc0fc502a8da25c33e36c9c65b4f28a125` together via a new commit; do not rewrite history.
