export const MAX_BODY = 20_000;
export const FIELD_LIMITS = {
  name: 120,
  email: 200,
  idea: 4000,
  helps: 2000,
  tried: 2000,
  contribute: 2000,
};

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
    name: clean(input.name, FIELD_LIMITS.name),
    email: clean(input.email, FIELD_LIMITS.email),
    idea: cleanBlock(input.idea, FIELD_LIMITS.idea),
    helps: cleanBlock(input.helps, FIELD_LIMITS.helps),
    tried: cleanBlock(input.tried, FIELD_LIMITS.tried),
    contribute: cleanBlock(input.contribute, FIELD_LIMITS.contribute),
  };
  const errors = {};

  if (!idea.name) errors.name = "Tell us your name.";
  if (!idea.email) errors.email = "Add an email so we can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(idea.email)) {
    errors.email = "That email does not look complete.";
  }
  if (idea.idea.length < 10) {
    errors.idea = "Share a little more about the idea or the problem.";
  }
  if (idea.helps.length < 10) {
    errors.helps = "Tell us who it could help, even in a sentence.";
  }
  if (idea.contribute.length < 10) {
    errors.contribute = "Tell us what you would bring, or where you need help.";
  }

  return { idea, errors };
}
