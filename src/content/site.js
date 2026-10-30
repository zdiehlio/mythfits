/**
 * Public copy for the Mythfits site.
 * Edit this file to change headings, paragraphs, navigation, and form labels.
 * Images are copied from mythfits-assets into public/ when you run the preview.
 */

export const site = {
  name: "Mythfits",
  description:
    "Mythfits partners with people who have ideas worth building — engineering, AI, and prototypes for stronger communities and a healthier planet.",
  logo: "/brand/logo-light-background.png",
  emblem: "/brand/phoenix-emblem.png",
  stackedLogo: "/brand/logo-dark-background-stacked.png",
  nav: [
    { id: "approach", label: "Our approach" },
    { id: "vision", label: "The vision" },
    { id: "talk", label: "Let's talk", cta: true },
  ],
  hero: {
    title: "Bring impactful ideas to life.",
    lede: "Engineering, AI, and prototypes for stronger communities and a healthier planet.",
    support: "For people with potential who need a way to build.",
    primaryCta: { label: "Tell us your idea", href: "#talk" },
    secondaryCta: { label: "Explore the vision", href: "#vision" },
    image: "/hero/phoenix-hero-desktop.png",
  },
  process: [
    {
      icon: "/icons/explore.svg",
      title: "Explore",
      text: "Find a way forward.",
    },
    {
      icon: "/icons/prototype.svg",
      title: "Prototype",
      text: "Make the idea tangible.",
    },
    {
      icon: "/icons/refine.svg",
      title: "Test & refine",
      text: "Learn. Tinker. Repeat.",
    },
  ],
  approach: {
    id: "approach",
    eyebrow: "Our approach",
    title: "A partnership for people who need a way to build.",
    intro:
      "You bring the idea and the reason it matters. Mythfits brings engineering, AI, and prototyping. We stay in it together, from the first conversation through a version you can actually test.",
    steps: [
      {
        icon: "/icons/explore.svg",
        title: "Explore",
        summary: "Find a way forward.",
        text: "We start by understanding the idea, who it is for, and what would count as working. Then we name a small first step — and say honestly if Mythfits is the right partner.",
      },
      {
        icon: "/icons/prototype.svg",
        title: "Prototype",
        summary: "Make the idea tangible.",
        text: "We design and build a version you can hold, click, or try in the field. The point is to learn from something real, not to polish a plan that has never met the world.",
      },
      {
        icon: "/icons/refine.svg",
        title: "Test & refine",
        summary: "Learn. Tinker. Repeat.",
        text: "You try it with the people it is meant to help. We pay attention to what breaks, what matters, and what to change, then we build the next version.",
      },
    ],
    commitmentsTitle: "How we partner",
    commitments: [
      {
        title: "You keep the purpose",
        text: "The idea stays yours. We do not take the brief and disappear with it.",
      },
      {
        title: "Decisions stay shared",
        text: "What we build, what we skip, and when we stop are choices we make together.",
      },
      {
        title: "We start small enough to learn",
        text: "A narrow prototype first. The work widens only when the idea earns it.",
      },
    ],
  },
  vision: {
    id: "vision",
    eyebrow: "The vision",
    title: "Potential needs a path into the world.",
    paragraphs: [
      "Mythfits is for people who can already see a better version of something — a community system, a tool, a practice, a place — and do not yet have a way to build it.",
      "The work we take on should strengthen communities or leave the planet healthier. Those are the tests we use when we decide where to spend engineering time.",
      "Impact, here, is practical. Someone can use the thing. A group can carry it forward. The next person with potential has proof that a way to build exists.",
    ],
    asideTitle: "What we build toward",
    aside: ["Stronger communities", "A healthier planet", "A way for potential to become real"],
  },
  form: {
    id: "talk",
    eyebrow: "Let's talk",
    title: "Tell us your idea.",
    intro:
      "Share enough for us to understand what you want to build and who it helps. We read every note. If there is a fit, we write back about a first conversation.",
    submit: "Send the idea",
    sending: "Sending…",
    successTitle: "We have your idea.",
    successBody:
      "Thank you. If there is a way to build this together, we will reply at the email you gave us.",
    another: "Send another idea",
    fields: {
      name: "Your name",
      email: "Email",
      idea: "What do you want to build?",
      helps: "Who does it help, and how?",
      stage: "Where do you need a partner?",
    },
    stages: [
      { value: "explore", label: "Explore — help me find a way forward" },
      { value: "prototype", label: "Prototype — help me make it tangible" },
      { value: "refine", label: "Test & refine — I have something to learn from" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  footer: {
    text: "Engineering, AI, and prototypes for stronger communities and a healthier planet.",
  },
};
