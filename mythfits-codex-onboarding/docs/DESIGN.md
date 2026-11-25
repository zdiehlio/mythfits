# Website experience | The Awakening

## Scope and reference
Reference: `prototypes/mythfits-awakening-v3.html`. Open directly in a browser; it is self-contained. The existing website (https://mythfits.io/) is the baseline for routes, content, form behavior and branding. Only the hero redesign is in scope for the first implementation.

The website should invite people into a world where ideas become real. The visitor participates in the metaphor by igniting an ember that grows into the phoenix. Never make the animation a gate to information or contact.

## Experience sequence
| Stage | Visual and interaction |
|---|---|
| Idle | Dark stage, restrained drifting sparks, a single accessible pulsing ember button; copy: "Every idea starts as an ember." with a short invitation to ignite. Navigation and skip remain available. |
| Ignition | On click/tap/keyboard activation, the ember fades into a brief warm glow and a burst of sparks. Avoid harsh strobing. |
| Formation | Central molten body emerges from the ember, scaffold wing materializes, finished wing follows, coals emerge beneath. Phoenix grows and rises as the composition develops. |
| Reveal | Full detailed phoenix settles into place; headline "Together, we bring it to life." and supporting copy appear with a CTA into the existing site. Replay is available. |
| Explore | Normal scrolling and navigation lead to the original approach, vision and contact experience. |

### Timing reference (seconds after activation)
The v3 canvas uses overlapping soft masks rather than literal wing articulation. Body: 0.19–1.48; left wing: 0.68–2.22; right wing: 1.04–2.65; coals: 1.37–2.75; whole-image completion: 2.59–3.15. Growth: 0.12–2.48. Post-copy fades in beginning at 2.15. Use these as visual tuning anchors, not rigid timing requirements. Keep the total transition roughly three seconds. Preserve the detailed artwork, not a simplified replacement SVG.

The current artifact is a single transparent raster with procedural masks, not a skeletal character rig. Don't imply physical wing flapping is already implemented. Layer separation or a custom animation pipeline is optional future exploration, not needed for this phase.

## Production design requirements
- Integrate with the existing framework and component/style conventions. Use static asset imports/URLs rather than embedding a large base64 string in production source. Preserve source art separately and serve an appropriately optimized, transparent image.
- Implement clear idle, igniting and revealed states, replay and skip. Protect against double activation, stale timers and animation loops after unmount; handle asset loading/error states and reduced-motion changes. The site must remain usable if canvas, images or JS fail. Provide a static hero fallback.
- Maintain semantic heading structure and meaningful copy in the DOM, including a useful no-JS/SSR state if the stack supports it. Ensure keyboard focus remains sensible, controls are labeled, focus indicators are visible, and hidden controls aren't tabbable. Don't trap focus or announce decorative canvas/particles.
- For `prefers-reduced-motion`, render a static full phoenix or instant transition with no particle motion or flash. Keep controls and content accessible.
- Maintain original nav destinations, sections, form submission, validation, privacy and existing spam handling. Prototype placeholder links back to the live homepage must be replaced with correct existing routes/anchors. Do not replace the real form with a mock.
- Keep the phoenix visually dominant without clipping important features, colliding with nav or covering the headline. Test narrow, short and wide viewports and larger text sizes. Maintain clear reading order and sufficient contrast.
- Keep assets and animation lightweight. Limit particle counts, avoid unnecessary full-screen compositing when idle, pause offscreen/background animation, cancel frames on cleanup. Respect battery and CPU constraints. Measure before adding WebGL or libraries.
- Preserve the existing SEO/social metadata and check layout shift, image loading and performance. Measure rather than promising a score. Keep the main content indexable and discoverable without completing the animation.

## Existing content to preserve
The live site includes the approach (explore, prototype, test & refine), collaboration and partnership model, future vision, example idea domains, FAQs and idea submission/contact. The handoff prototype contains only a short approach placeholder; it is deliberately not a complete page. Audit actual repository content before changing it.

## Acceptance checklist
- Idle ember pulses; activation works via mouse, touch, Enter and Space.
- A visually coherent, staged reveal ends with the full supplied phoenix and readable copy/CTA. Replay reliably resets the experience.
- Navigation, scroll, skip and contact are accessible before and after ignition; no forced introduction.
- No unwanted clipping, overflow or text overlap at representative sizes (e.g., 390×844, 768×1024, 1440×900 and a short landscape viewport). Check zoom and larger text as well.
- Reduced-motion and no-animation/error fallback provide immediate access to content.
- Existing links, form behavior, metadata and unrelated sections still work.
- Build, applicable repo checks and browser verification are reported, with before/after screenshots or a local preview URL.

## Decisions still open
Whether returning visitors should see the idle ember or a revealed hero; exact production typography and spacing; whether to further articulate the wings; future redesign of the lower sections. For first implementation, match the prototype's idle-on-load and optional replay, subject to founder review. Do not add tracking or persistent storage just to implement the animation.
