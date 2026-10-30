<script setup>
import { reactive, ref } from "vue";
import { site } from "../content/site.js";

const form = site.form;
const values = reactive({
  name: "",
  email: "",
  idea: "",
  helps: "",
  stage: "explore",
  company: "",
});
const errors = reactive({
  name: "",
  email: "",
  idea: "",
  helps: "",
  stage: "",
});
const status = ref("idle");
const formError = ref("");

function clearErrors() {
  for (const key of Object.keys(errors)) errors[key] = "";
}

function applyErrors(next) {
  clearErrors();
  Object.assign(errors, next);
}

function validate() {
  const next = {
    name: values.name.trim() ? "" : "Tell us your name.",
    email: !values.email.trim()
      ? "Add an email so we can reply."
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
        ? ""
        : "That email does not look complete.",
    idea: values.idea.trim().length >= 10 ? "" : "Share a little more about what you want to build.",
    helps: values.helps.trim().length >= 10 ? "" : "Tell us who it helps, even in a sentence.",
    stage: form.stages.some((stage) => stage.value === values.stage)
      ? ""
      : "Choose the kind of partnership you need.",
  };
  applyErrors(next);
  return Object.values(next).every((message) => !message);
}

async function onSubmit() {
  formError.value = "";
  if (!validate()) return;

  status.value = "sending";
  try {
    const response = await fetch("/api/ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        idea: values.idea,
        helps: values.helps,
        stage: values.stage,
        company: values.company,
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) {
      if (data.errors) {
        applyErrors(data.errors);
        status.value = "idle";
        return;
      }
      throw new Error(data.error || "We could not send your idea. Please try again.");
    }
    status.value = "success";
  } catch (error) {
    status.value = "error";
    formError.value = error.message || "We could not send your idea. Please try again.";
  }
}

function touch(field) {
  errors[field] = "";
}

function reset() {
  values.name = "";
  values.email = "";
  values.idea = "";
  values.helps = "";
  values.stage = "explore";
  values.company = "";
  clearErrors();
  formError.value = "";
  status.value = "idle";
}
</script>

<template>
  <section :id="form.id" class="talk">
    <div class="shell talk-grid">
      <div class="talk-intro">
        <p class="eyebrow">{{ form.eyebrow }}</p>
        <h2>{{ form.title }}</h2>
        <p>{{ form.intro }}</p>
      </div>

      <div class="form-card">
        <div v-if="status === 'success'" class="form-success" role="status">
          <h3>{{ form.successTitle }}</h3>
          <p>{{ form.successBody }}</p>
          <button class="button button-dark" type="button" @click="reset">{{ form.another }}</button>
        </div>

        <form v-else novalidate @submit.prevent="onSubmit">
          <div class="honeypot" aria-hidden="true">
            <label for="company">Company website</label>
            <input id="company" v-model="values.company" type="text" tabindex="-1" autocomplete="off" />
          </div>

          <div class="field" :class="{ invalid: errors.name }">
            <label for="name">{{ form.fields.name }}</label>
            <input
              id="name"
              v-model="values.name"
              @input="touch('name')"
              name="name"
              type="text"
              autocomplete="name"
              required
              :aria-invalid="Boolean(errors.name)"
              :aria-describedby="errors.name ? 'name-error' : undefined"
            />
            <p v-if="errors.name" id="name-error" class="field-error">{{ errors.name }}</p>
          </div>

          <div class="field" :class="{ invalid: errors.email }">
            <label for="email">{{ form.fields.email }}</label>
            <input
              id="email"
              v-model="values.email"
              @input="touch('email')"
              name="email"
              type="email"
              autocomplete="email"
              inputmode="email"
              required
              :aria-invalid="Boolean(errors.email)"
              :aria-describedby="errors.email ? 'email-error' : undefined"
            />
            <p v-if="errors.email" id="email-error" class="field-error">{{ errors.email }}</p>
          </div>

          <div class="field" :class="{ invalid: errors.idea }">
            <label for="idea">{{ form.fields.idea }}</label>
            <textarea
              id="idea"
              v-model="values.idea"
              @input="touch('idea')"
              name="idea"
              required
              rows="5"
              :aria-invalid="Boolean(errors.idea)"
              :aria-describedby="errors.idea ? 'idea-error' : undefined"
            ></textarea>
            <p v-if="errors.idea" id="idea-error" class="field-error">{{ errors.idea }}</p>
          </div>

          <div class="field" :class="{ invalid: errors.helps }">
            <label for="helps">{{ form.fields.helps }}</label>
            <textarea
              id="helps"
              v-model="values.helps"
              @input="touch('helps')"
              name="helps"
              required
              rows="4"
              :aria-invalid="Boolean(errors.helps)"
              :aria-describedby="errors.helps ? 'helps-error' : undefined"
            ></textarea>
            <p v-if="errors.helps" id="helps-error" class="field-error">{{ errors.helps }}</p>
          </div>

          <div class="field" :class="{ invalid: errors.stage }">
            <label for="stage">{{ form.fields.stage }}</label>
            <select
              id="stage"
              v-model="values.stage"
              name="stage"
              required
              :aria-invalid="Boolean(errors.stage)"
              :aria-describedby="errors.stage ? 'stage-error' : undefined"
            >
              <option v-for="stage in form.stages" :key="stage.value" :value="stage.value">
                {{ stage.label }}
              </option>
            </select>
            <p v-if="errors.stage" id="stage-error" class="field-error">{{ errors.stage }}</p>
          </div>

          <p v-if="formError" class="form-error" role="alert">{{ formError }}</p>

          <button class="button" type="submit" :disabled="status === 'sending'">
            {{ status === "sending" ? form.sending : form.submit }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
