export const MAX_BODY = 20_000;
const STAGES = new Set(["explore", "prototype", "refine", "unsure"]);

function clean(value, max) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function cleanBlock(value, max) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, max);
}

export function validateIdea(input) {
  const idea = {
    name: clean(input.name, 120),
    email: clean(input.email, 200),
    idea: cleanBlock(input.idea, 4000),
    helps: cleanBlock(input.helps, 2000),
    stage: clean(input.stage, 40),
  };
  const errors = {};

  if (!idea.name) errors.name = "Tell us your name.";
  if (!idea.email) errors.email = "Add an email so we can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(idea.email)) {
    errors.email = "That email does not look complete.";
  }
  if (idea.idea.length < 10) {
    errors.idea = "Share a little more about what you want to build.";
  }
  if (idea.helps.length < 10) {
    errors.helps = "Tell us who it helps, even in a sentence.";
  }
  if (!STAGES.has(idea.stage)) errors.stage = "Choose the kind of partnership you need.";

  return { idea, errors };
}
