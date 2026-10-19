# NAMIMA — public site

Play: https://namima-play.github.io/

This repository publishes the reviewed static NAMIMA game at the name-free organization hostname. The current release is **v5.4.0**, with the approved 2026-10-19 mobile layout and result-grade update, and 10 interface languages.

## Source of truth

Development, tests, and existing feedback remain in [Masashi-Nakadaira/namima](https://github.com/Masashi-Nakadaira/namima).

Deployed game files match the user-reviewed Sites source commit `94cf6aeba17b19b7e3408ccc5a9529638d4f94df`, directory `dist/comparison-20261018/candidate/`. Its GitHub source baseline is `a142a1fd436cf20d03bd1225e64314e1e0fa55e6`; this approved update is published directly here, and has not yet been synchronized to the development repository.

The mobile play screen has reduced top spacing and a bottom judgment button with safe-area spacing. Results show S at 450+, A at 400+, B at 300+, and C below 300 out of 500. Existing retry actions appear before the round breakdown. Scoring, challenge generation, and sharing content are unchanged. Grade explanatory text is Japanese in Japanese mode and English in other languages.

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

The reviewed release passes 116 automated checks, including 3,000 deterministic seeds, strict challenge validation, first-score locking, score privacy, sharing fallbacks, existing language/UI regressions, grade boundaries, and both retry paths. Real mobile-device share sheets remain unverified.

Previous release: public commit `6ead3e1c7421993f10e5771c83017b3a1e15065e` and GitHub source commit `a142a1fd436cf20d03bd1225e64314e1e0fa55e6`. If restoration is required, restore the prior static file contents via a new commit; do not rewrite history. Added grade assets can remain unreferenced.
