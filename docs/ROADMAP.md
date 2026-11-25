# Roadmap | Mythfits website

This is a proposed sequence for founder review, not a schedule or authorization to implement all phases at once.

| Phase | Goal | Review gate |
|---|---|---|
| 0. Repository discovery | Inspect architecture, current content, integrations and baseline checks; reconcile onboarding docs. | Confirm implementation approach and any conflicts. |
| 1. The Awakening | Build the production ember-to-phoenix hero using the v3 reference and optimized art. Preserve other sections. | Local interactive review, accessibility, responsive checks, regression checks. |
| 2. Experience continuity | Refine transition into the original page and ensure navigation/CTA flow is coherent. | Founder approves overall page flow. |
| 3. Approach and partnership | Clarify the process and how people collaborate with Mythfits; avoid generic agency framing. | Review copy and partnership claims. |
| 4. The vision | Explore immersive storytelling for the future multidisciplinary lab and central hearth. Distinguish present vs future. | Approve creative direction and implementation scope. |
| 5. Bring your ember | Improve idea submission UX while preserving or explicitly reviewing backend handling, consent and privacy. | Test end-to-end safely with non-production data. |
| 6. Release readiness | Audit accessibility, performance, search metadata, responsive behavior and release plan. | Explicit founder authorization before deployment. |

## Near-term priorities
Finish the hero first. Don't rebuild the site from scratch, adopt a new framework or invent backend features solely because the visual reference is a standalone HTML file. Track follow-up opportunities separately. The long-term lab and more elaborate phoenix rig are creative possibilities, not blockers to launch.

## Review status

- Phase 1 was approved after the floating sparks were verified in the local preview.
- Phase 2 was approved after the hero copy and controls were aligned throughout the reveal. The hero leads into the process overview, which links to the detailed approach. The header and footer provide direct links to Approach, Vision, and Contact. In-page links jump directly to their targets so focus and scroll position update together.
- Phase 3 was approved after the responsive alignment guidelines were applied. The Approach section describes what we do together in each step, how we agree on contributions and ownership, and how to start a conversation. The funding FAQ distinguishes reaching out from agreeing to build.
- Phase 4 was approved after local review of the hearth illustration and proposed spaces. The Vision section identifies the current prototyping studio and presents the future lab as a concept through the existing hearth illustration and expandable descriptions of the proposed spaces.
- Phase 5 was approved after local review of the idea submission flow. The idea form explains how submissions are used, guides visitors to field errors, preserves answers when a request fails, and confirms receipt on success. The local file and production email delivery paths use the existing submission contract.

- Phase 6 was approved after local review. The release candidate is ready for pull request review.

## Phase 6 local release checks

- **Accessibility.** Axe 4.14.1 reported zero automated WCAG 2.0/2.1 A/AA violations at 390px and 1440px in the idle hero, revealed hero, and form validation states. Axe left some contrast checks for manual review. The revised orange button has 6.01:1 contrast with white text, and the revised eyebrow color has 7.64:1 contrast on ivory. The mobile no-JavaScript path exposes the navigation and static phoenix and disables submission.
- **Responsive behavior.** The hero copy and controls retained their positions through ignition and replay at 320px, 390px, 768px, and 1440px, and at 844×390 in landscape after fonts loaded. Actual 200% and 400% browser zoom showed no horizontal overflow, hero overlap, or clipped form fields.
- **Performance.** The hero preload now requests the artwork used by the page, and the footer logo loads lazily. The Vision illustration went from about 2.28 MB to 381 kB while keeping its dimensions and transparency. One cold local browser run per viewport measured about 403 kB of same-origin subresources, 312 ms LCP, and CLS of 0.0006 on mobile and 0.0022 on desktop. The mobile baseline transferred about 663 kB of same-origin subresources. These unthrottled loopback readings are local estimates.
- **Search and sharing.** The built HTML contains the static hero, section anchors, canonical URL, social metadata, and structured data. The social image, robots file, sitemap, and configured preview-domain noindex rule were checked in the build and configuration.
- **Idea submission.** An isolated preview with synthetic data verified validation, retained answers after failure, duplicate-submit protection, one local save, and a clean reset. Production email delivery remains unverified.

### After release authorization

1. Review the candidate and confirm public artwork rights and any attribution requirements.
2. Verify the authorized Vercel preview’s indexing headers and confirm the Resend configuration. Send a synthetic idea to a designated test recipient and confirm delivery and reply-to.
3. On approval to deploy, use the reviewed revision and keep the previous deployment available for rollback. After deployment, smoke-test the production page, form, canonical URL, robots file, and sitemap.
