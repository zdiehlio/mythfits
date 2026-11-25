<script setup>
import { nextTick, onMounted, reactive, ref } from "vue";
import { FIELD_LIMITS, MAX_BODY, validateIdea } from "../../server/validate-idea.js";
import { site } from "../content/site.js";

const form = site.form;
const initialValues = {
  name: "",
  email: "",
  idea: "",
  helps: "",
  tried: "",
  contribute: "",
  company: "",
};
const values = reactive({ ...initialValues });
const errors = ref({});
const status = ref("idle");
const formError = ref("");
const ready = ref(false);
const formElement = ref(null);
const errorMessage = ref(null);
const successTitle = ref(null);

onMounted(() => {
  ready.value = true;
});

async function showFieldErrors(next) {
  errors.value = next;
  status.value = "idle";
  await nextTick();
  formElement.value?.querySelector('[aria-invalid="true"]')?.focus();
}

async function onSubmit() {
  if (!ready.value || status.value === "sending" || status.value === "success") return;

  formError.value = "";
  const { errors: validationErrors } = validateIdea(values);
  if (Object.keys(validationErrors).length) {
    await showFieldErrors(validationErrors);
    return;
  }

  errors.value = {};
  status.value = "sending";
  try {
    const body = JSON.stringify(values);
    if (new TextEncoder().encode(body).byteLength > MAX_BODY) {
      throw new Error("Your note is too long to send. Shorten your answers and try again.");
    }
    const response = await fetch("/api/ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) {
      if (data.errors) {
        await showFieldErrors(data.errors);
        return;
      }
      throw new Error(data.error || "We couldn’t send your idea. Try again in a moment.");
    }
    Object.assign(values, initialValues);
    status.value = "success";
    await nextTick();
    successTitle.value?.focus();
  } catch (error) {
    status.value = "idle";
    formError.value = error instanceof TypeError
      ? "We couldn’t reach Mythfits. Check your connection and try again."
      : error.message;
    await nextTick();
    errorMessage.value?.focus();
  }
}

function touch(field) {
  delete errors.value[field];
}

async function reset() {
  status.value = "idle";
  await nextTick();
  formElement.value?.elements.namedItem("name")?.focus();
}
</script>

<template>
  <section :id="form.id" class="talk" tabindex="-1">
    <div class="shell talk-grid">
      <div class="talk-intro">
        <p class="eyebrow">{{ form.eyebrow }}</p>
        <h2>{{ form.title }}</h2>
        <p v-for="(paragraph, index) in form.intro" :key="index">{{ paragraph }}</p>
      </div>

      <div class="form-card">
        <div v-if="status === 'success'" class="form-success">
          <h3 ref="successTitle" tabindex="-1">{{ form.successTitle }}</h3>
          <p>{{ form.successBody }}</p>
          <button class="button button-dark" type="button" @click="reset">{{ form.another }}</button>
        </div>

        <form
          v-else
          ref="formElement"
          method="post"
          :aria-busy="status === 'sending'"
          novalidate
          @submit.prevent="onSubmit"
        >
          <p class="form-note">{{ form.requiredNote }}</p>
          <noscript><p class="form-note">Enable JavaScript to send your idea.</p></noscript>
          <fieldset :disabled="!ready || status === 'sending'">
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
                :maxlength="FIELD_LIMITS.name"
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
                :maxlength="FIELD_LIMITS.email"
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
                :maxlength="FIELD_LIMITS.idea"
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
                :maxlength="FIELD_LIMITS.helps"
                required
                rows="4"
                :aria-invalid="Boolean(errors.helps)"
                :aria-describedby="errors.helps ? 'helps-error' : undefined"
              ></textarea>
              <p v-if="errors.helps" id="helps-error" class="field-error">{{ errors.helps }}</p>
            </div>

            <div class="field">
              <label for="tried">
                {{ form.fields.tried }}
                <span class="optional">(Optional)</span>
              </label>
              <textarea
                id="tried"
                v-model="values.tried"
                name="tried"
                :maxlength="FIELD_LIMITS.tried"
                rows="3"
              ></textarea>
            </div>

            <div class="field" :class="{ invalid: errors.contribute }">
              <label for="contribute">{{ form.fields.contribute }}</label>
              <textarea
                id="contribute"
                v-model="values.contribute"
                @input="touch('contribute')"
                name="contribute"
                :maxlength="FIELD_LIMITS.contribute"
                required
                rows="4"
                :aria-invalid="Boolean(errors.contribute)"
                :aria-describedby="errors.contribute ? 'contribute-error' : undefined"
              ></textarea>
              <p v-if="errors.contribute" id="contribute-error" class="field-error">{{ errors.contribute }}</p>
            </div>

            <p id="idea-privacy" class="form-note">{{ form.privacyNote }}</p>
            <p v-if="formError" ref="errorMessage" class="form-error" tabindex="-1">{{ formError }}</p>
            <button class="button" type="submit" aria-describedby="idea-privacy">
              {{ status === "sending" ? form.sending : form.submit }}
            </button>
          </fieldset>
        </form>
        <p class="sr-only" role="status">{{ status === "sending" ? form.sending : "" }}</p>
      </div>
    </div>
  </section>
</template>
