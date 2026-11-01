<script setup>
import { site } from "../content/site.js";

const faq = site.faq;
</script>

<template>
  <section :id="faq.id" class="faq">
    <div class="shell">
      <p class="eyebrow">{{ faq.eyebrow }}</p>
      <h2>{{ faq.title }}</h2>
      <dl class="faq-list">
        <div v-for="item in faq.items" :key="item.question">
          <dt>{{ item.question }}</dt>
          <dd>{{ item.answer }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
