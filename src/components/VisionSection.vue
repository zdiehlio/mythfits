<script setup>
import { site } from "../content/site.js";
import "../styles/vision.css";

const vision = site.vision;
</script>

<template>
  <section :id="vision.id" class="vision" aria-labelledby="vision-title" tabindex="-1">
    <div class="shell">
      <header class="vision-heading">
        <p class="eyebrow">{{ vision.eyebrow }}</p>
        <h2 id="vision-title">{{ vision.title }}</h2>
      </header>

      <div class="vision-studio">
        <h3>{{ vision.studioTitle }}</h3>
        <p>{{ vision.studio }}</p>
        <a class="vision-link" :href="`#${site.approach.id}`">See how we work <span aria-hidden="true">→</span></a>
      </div>

      <div class="vision-hearth">
        <h3>{{ vision.hearthTitle }}</h3>
        <p>{{ vision.hearth }}</p>
        <figure class="vision-illustration">
          <img
            src="/brand/vision-mythfits.webp"
            alt="People gather around a central hearth ringed by workshops, gardens, and other spaces for learning and making."
            width="1295"
            height="941"
            loading="lazy"
            decoding="async"
          />
          <figcaption>{{ vision.caption }}</figcaption>
        </figure>
      </div>

      <div class="vision-spaces">
        <h3>{{ vision.spacesTitle }}</h3>
        <ul role="list">
          <li v-for="space in vision.spaces" :key="space.name">
            <details>
              <summary>{{ space.name }} <span class="vision-disclosure" aria-hidden="true"></span></summary>
              <p>{{ space.purpose }}</p>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
