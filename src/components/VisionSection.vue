<script setup>
import { site } from "../content/site.js";

const vision = site.vision;
</script>

<template>
  <section :id="vision.id" class="vision">
    <div class="shell vision-grid">
      <div class="vision-copy">
        <p class="eyebrow">{{ vision.eyebrow }}</p>
        <h2>{{ vision.title }}</h2>
        <p v-for="(paragraph, index) in vision.paragraphs" :key="index">{{ paragraph }}</p>
      </div>
      <aside>
        <img src="/brand/vision-mythfits.png" alt="" width="1295" height="941" />
      </aside>
    </div>
  </section>
</template>
