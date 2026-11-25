/**
 * Public copy for the Mythfits site.
 * Edit this file to change headings, paragraphs, navigation, and form labels.
 * Images are copied from mythfits-assets into public/ when you run the preview.
 */

export const site = {
  name: "Mythfits",
  url: "https://mythfits.io/",
  description:
    "At Mythfits, we bring engineering, open minds, and experimentation to ideas that help people live more fully, strengthen communities, and care for the planet.",
  seo: {
    knowsAbout: [
      "Software engineering",
      "Artificial intelligence",
      "Rapid prototyping",
      "Product discovery",
      "Social impact technology",
      "Community technology",
      "Climate and environmental technology",
    ],
    serviceTypes: [
      "Engineering partnership",
      "AI development",
      "Prototype development",
      "User testing and iteration",
    ],
  },
  shareImage: "/hero/og-image.jpg",
  logo: "/brand/logo-light-background.png",
  emblem: "/brand/phoenix-emblem.png",
  stackedLogo: "/brand/logo-dark-background-stacked.png",
  nav: [
    { id: "approach", label: "Our approach" },
    { id: "vision", label: "The vision" },
    { id: "talk", label: "Let's talk", cta: true },
  ],
  hero: {
    title: "Every idea starts\nas an ember.",
    paragraphs: [
      "Something you notice. Something you wish existed. A possibility that stays with you.",
      "It takes care, work, and people willing to build to turn that ember into a flame.",
      "At Mythfits, we bring engineering, open minds, and experimentation to ideas that help people live more fully, strengthen communities, and care for the planet.",
    ],
    primaryCta: { label: "Bring your ember", href: "#talk" },
    image: "/hero/phoenix-awakening.webp",
    revealTitle: "Together, we bring it to life.",
    revealLead: "Engineering, creativity and experimentation for a more human world.",
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
    title: "Give the idea somewhere to grow.",
    intro:
      "Start with something you've noticed, a sketch, or an early prototype. You bring what you know about the problem. We bring engineering and prototyping. Together we choose a small first step that can teach us something.",
    steps: [
      {
        icon: "/icons/explore.svg",
        title: "Explore",
        text: "Tell us who runs into the problem, what they do today, and what you've already tried. Together we decide what we need to learn first.",
      },
      {
        icon: "/icons/prototype.svg",
        title: "Prototype",
        text: "We build the simplest version we can try, such as a mockup, a small tool, or a device prototype. You help us check it against the way people would actually use it.",
      },
      {
        icon: "/icons/refine.svg",
        title: "Test & refine",
        text: "We try the prototype with the people it could help. What they do and tell us guides what we change, what we test next, and whether the idea is worth pursuing.",
      },
    ],
    commitmentsHeadline: "How we work together",
    commitments: [
      {
        title: "Bring what you know.",
        text: "Your firsthand experience, community relationships, or ability to try something in a real setting can shape the work. You can contribute from the start with the skills you already have.",
      },
      {
        title: "Agree on a first step.",
        text: "We compare how much time each of us can give, what skills the project needs, and what it might cost. Together we choose a first step we can realistically take.",
      },
      {
        title: "Choose a partnership arrangement.",
        text: "We prefer shared ownership when it fits the project, including equity where appropriate. Paid engagements and other arrangements are also possible by mutual agreement.",
      },
      {
        title: "Set the terms before building.",
        text: "We agree on what each person will do, what costs are involved, who owns what we create, and how it can be used.",
      },
    ],
    nextStep: "Tell us what you've noticed and where you'd like help.",
  },
  vision: {
    id: "vision",
    eyebrow: "The vision",
    title: "Good ideas deserve a way into the world.",
    studioTitle: "What we do today",
    studio:
      "Mythfits is an engineering and prototyping studio. We work alongside people who care about an idea, building small versions they can try with the people it could help.",
    hearthTitle: "A place to gather around a shared hearth",
    hearth:
      "Our long-term vision is a gathering place where people can bring a question and find collaborators with different skills. Around the hearth, a gardener might bring a growing problem to an engineer. A maker could sketch a tool with them and bring it back to the group to try.",
    caption: "Concept illustration of the future Mythfits lab.",
    spacesTitle: "Spaces we imagine around the hearth",
    spaces: [
      {
        name: "Tinker Town",
        purpose: "A workshop for engineering, making, and prototyping where people could turn sketches into things they can try.",
      },
      {
        name: "Druid’s Grove",
        purpose: "A place to work with plants, observe living systems, and explore questions about how we care for the natural world.",
      },
      {
        name: "Serenity Peak",
        purpose: "A quiet space for reflection, mindfulness, and exploring what helps people make room for mental well-being.",
      },
      {
        name: "Proving Grounds",
        purpose: "A space for movement, physical exploration, and finding ways to stretch what we can do.",
      },
      {
        name: "Science Lab",
        purpose: "A place to ask questions, run experiments, and share what we discover.",
      },
      {
        name: "Art and craft space",
        purpose: "A studio for making, designing, and telling stories that give ideas a form other people can experience.",
      },
      {
        name: "Tower of Knowledge",
        purpose: "A place to read, study, and share knowledge so each project can build on what others have learned.",
      },
    ],
  },
  fit: {
    id: "fit",
    eyebrow: "What belongs here",
    title: "What do you wish existed?",
    paragraphs: [
      "A quiet signal that helps someone care for their plants. A tool that helps parents stay aware while children explore. A better way for neighbors to share resources or spend time together.",
    ],
    intro: "We're interested in ideas that help people:",
    points: [
      "Live with more intention and awareness.",
      "Explore, learn, and participate in the world.",
      "Build stronger relationships and communities.",
      "Care for living things and the planet we share.",
    ],
    closing:
      "An idea doesn't have to change everyone's life to matter. Tell us whose life it could improve, and how.",
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    title: "A few things you might be wondering.",
    items: [
      {
        question: "How developed does my idea need to be?",
        answer:
          "You can come with a sketch, an early prototype, or a problem you haven't figured out yet. Help us understand what you've noticed, why you care, and what you hope could be different.",
      },
      {
        question: "Do I need technical experience?",
        answer:
          "No. You might bring firsthand experience, community relationships, research, creative skills, or the ability to test something in a real setting. We work out how our contributions fit together.",
      },
      {
        question: "What can Mythfits help build?",
        answer:
          "Our starting point is engineering and prototyping, including software, connected devices, and tools people can use in everyday life. We explore what a project needs and are honest about what we can take on and where other expertise is needed.",
      },
      {
        question: "How do you choose projects?",
        answer:
          "We look at who the idea could help, the commitment behind it, and whether we have the capacity and skills to make a useful contribution. Together, we need to be able to identify a practical first step.",
      },
      {
        question: "What if I don't have funding?",
        answer:
          "You can reach out before you have funding. If there's a fit, we talk through what each person can contribute, any project costs, and whether there's a first step within reach. Shared ownership is our preference when it fits the project. We agree on the arrangement together before building.",
      },
      {
        question: "Who owns what we create?",
        answer:
          "We agree on ownership and how the work can be used before building begins. The arrangement depends on the project and the partnership, and should be clear to everyone involved.",
      },
      {
        question: "What happens after I reach out?",
        answer:
          "We review what you share for fit and capacity. If there's a promising way to work together, we'll arrange a conversation to explore the idea and a possible first step.",
      },
    ],
  },
  form: {
    id: "talk",
    eyebrow: "Let's talk",
    title: "Tell us what's been on your mind.",
    intro: [
      "You don't need a polished pitch. Share the idea, the problem behind it, and why it matters to you.",
      "Tell us where you're stuck and what you'd like to contribute. We'll see whether there's a way to move it forward together.",
    ],
    requiredNote: "All fields are required unless marked optional.",
    privacyNote: "We use what you share to review your idea and reply if there’s a fit. Leave out confidential details and other people’s personal information.",
    submit: "Send your idea",
    sending: "Sending your idea…",
    successTitle: "Your idea was received.",
    successBody:
      "Thank you. We'll review it for fit and capacity. If there's a promising way to move it forward together, we'll reply at the email you gave us.",
    another: "Send another idea",
    fields: {
      name: "Your name",
      email: "Your email",
      idea: "What's your idea, or the problem you want to solve?",
      helps: "Who could it help, and how?",
      tried: "What have you tried or learned so far?",
      contribute: "What would you bring to the work, and where do you need help?",
    },
  },
  footer: {
    text: "Engineering, open minds, and experimentation.\nIdeas into reality.",
  },
};
