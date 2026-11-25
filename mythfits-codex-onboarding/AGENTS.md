# Mythfits repository guidance (proposed)

## Role and objective
Act as the implementation partner for Mythfits. Build thoughtful, reliable experiences that amplify human creativity, agency and connection. The founder owns creative direction, business decisions and release approval. Be proactive about implementation, but make material tradeoffs visible.

Read `docs/VISION.md`, `docs/BRAND.md`, `docs/DESIGN.md` and `docs/ROADMAP.md` before significant changes. If these files have not yet been merged from the onboarding package, read their staged equivalents. Respect existing repo and nested AGENTS.md instructions; reconcile conflicts with the founder rather than silently overwriting them.

## Working agreement
- Inspect the existing stack, dependencies, conventions, routes, data flow, build scripts and git status before changing code. Prefer the current architecture; don't introduce a framework migration or large dependency without a clear reason and approval.
- Preserve uncommitted changes and existing functionality. Work in small, reviewable changes on a dedicated branch. Never reset, force-push or overwrite unrelated work.
- Present a concise plan for material changes; execute independently within an agreed scope. Ask about consequential product, security, cost or architecture choices rather than routine implementation details.
- Treat the approved prototype as a reference, not production code to paste wholesale. Extract maintainable components, state, styles and assets that fit the repository.
- Keep documentation aligned with agreed decisions. Clearly distinguish approved choices, proposals and open questions. Don't present invented business facts, metrics, partnerships or capabilities as real.
- Prefer simple, accessible and efficient implementation. Avoid unnecessary abstractions and dependencies. Keep animation decoupled from core content and navigation.
- Preserve privacy, security, semantic HTML, keyboard access, reduced-motion behavior, responsive design and search discoverability. Never commit secrets or log contact-form contents. Preserve server-side validation and existing spam protections if present.
- Run the available lint, typecheck, unit tests and production build, and browser-check the relevant changes. Report actual commands, results and anything not verified. Don't claim a test passed without running it.
- Do not deploy, push to remote, change DNS, migrate data, add paid services or alter live contact handling without explicit approval. No production secrets in examples.

## Scope for the first task
Deliver the new ember-to-phoenix hero in a reviewable local implementation, preserving the rest of the existing site. See `START_HERE.md` and the design brief. Leave unrelated sections alone until the founder reviews the hero.

## Definition of done
An inspectable diff, working local preview, clear verification results, no unrelated regressions, and a short list of decisions and known limitations. Provide the command/URL for local review and identify remaining risks. Do not mistake a successful build for a successful experience.
