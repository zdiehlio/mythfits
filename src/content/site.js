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
    title: "Give the idea somewhere to grow.",
    intro: [
      "You don't need a finished plan or all the right skills to begin. You need something you care about and a willingness to work on it.",
      "We start by listening. Together, we ask questions, explore possibilities, and build something we can learn from. Your experience helps shape the work at every step.",
    ],
    steps: [
      {
        icon: "/icons/explore.svg",
        title: "Explore",
        paragraphs: [
          "Every idea has a reason behind it. What have you noticed? Who could it help? What have you tried?",
          "We work through those questions together and find a practical first step.",
        ],
      },
      {
        icon: "/icons/prototype.svg",
        title: "Prototype",
        paragraphs: [
          "We turn what we've imagined into something you can hold, click, or try in the world.",
          "The first version gives us something to work with. We discover what's possible, what's difficult, and what needs another look.",
        ],
      },
      {
        icon: "/icons/refine.svg",
        title: "Test & refine",
        paragraphs: [
          "We try it with the people it's meant to help and listen to what happens.",
          "Some things will work. Others will surprise us. We use what we learn to decide what to improve, rethink, or leave behind.",
        ],
      },
    ],
    commitmentsTitle: "How we partner",
    commitmentsHeadline: "We build with you.",
    commitments: [
      {
        title: "Bring what you know.",
        text: "Your experience with the problem, your relationships, and the questions you've been asking all matter. You don't need technical skills to make a meaningful contribution.",
      },
      {
        title: "Be part of the work.",
        text: "Bringing an idea to life takes participation. We agree on what each of us can contribute and stay involved as the idea develops.",
      },
      {
        title: "Make the arrangement clear.",
        text: "Depending on the project, we may work through paid engagements, shared ownership, or another agreed exchange of contributions. We discuss responsibilities, scope, and ownership before we start.",
      },
      {
        title: "Start within reach.",
        text: "We choose a first step that fits the time, resources, and skills available. What we learn helps us decide where to go next.",
      },
    ],
  },
  vision: {
    id: "vision",
    eyebrow: "The vision",
    title: "Good ideas deserve a way into the world.",
    paragraphs: [
      "Someone notices a need. Imagines a different approach. Wonders whether a small change could make life better.",
      "Too often, that's where it stops. The person with the idea doesn't have the technical skills, resources, or connections to take it further.",
      "Mythfits exists to help open that door.",
      "Today, we start with engineering and prototyping. We work alongside people who care about an idea, turning possibilities into something we can build, test, and improve. Something that helps us live more intentionally, connect with one another, or care for the world around us.",
      "Over time, we're building toward a shared gathering place where different skills and perspectives meet. Engineers alongside artists. Scientists alongside gardeners. People making, moving, studying, and exchanging ideas around a common hearth.",
      "A place where you can bring a question, find people willing to work on it, and contribute what you know. Where worthwhile ideas gain momentum through shared effort and ownership.",
      "That place grows from the work we begin together today.",
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
          "You don't need funding to get started with Mythfits. Our focus is bringing together people who care about an idea and are willing to contribute their skills, time, and effort to build it. Shared ownership, including equity where appropriate, is our preferred foundation for that work. We agree on contributions, responsibilities, and any project costs together, then find a first step within reach. We want to explore how far committed people can take a worthwhile idea without making fundraising the starting line.",
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
    submit: "Bring your ember",
    sending: "Sending…",
    successTitle: "We have your ember.",
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
