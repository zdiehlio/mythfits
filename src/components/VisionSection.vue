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
        <picture>
          <source srcset="/brand/phoenix-emblem.webp" type="image/webp" />
          <img :src="site.emblem" alt="" width="1536" height="1024" />
        </picture>
        <h3>{{ vision.asideTitle }}</h3>
        <ul>
          <li v-for="line in vision.aside" :key="line">{{ line }}</li>
        </ul>
      </aside>
    </div>
  </section>
</template>
