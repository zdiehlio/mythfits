<script setup>
import { site } from "../content/site.js";

const fit = site.fit;
</script>

<template>
  <section :id="fit.id" class="fit">
    <div class="shell">
      <p class="eyebrow">{{ fit.eyebrow }}</p>
      <h2>{{ fit.title }}</h2>
      <p v-for="(paragraph, index) in fit.paragraphs" :key="index">{{ paragraph }}</p>
      <p>{{ fit.intro }}</p>
      <ul class="fit-themes">
        <li v-for="point in fit.points" :key="point">{{ point }}</li>
      </ul>
      <p>{{ fit.closing }}</p>
    </div>
  </section>
</template>
