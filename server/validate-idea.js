export const MAX_BODY = 20_000;

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
    tried: cleanBlock(input.tried, 2000),
    contribute: cleanBlock(input.contribute, 2000),
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
