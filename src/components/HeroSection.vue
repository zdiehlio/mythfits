<script setup>
import { site } from "../content/site.js";

const hero = site.hero;
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-copy shell">
      <h1>{{ hero.title }}</h1>
      <p class="lede">{{ hero.lede }}</p>
      <p class="support">{{ hero.support }}</p>
      <div class="hero-actions">
        <a class="button" :href="hero.primaryCta.href">
          {{ hero.primaryCta.label }}
          <span aria-hidden="true">→</span>
        </a>
        <a class="text-link" :href="hero.secondaryCta.href">{{ hero.secondaryCta.label }}</a>
      </div>
    </div>
    <picture class="hero-media">
      <source srcset="/hero/phoenix-hero-desktop.webp" type="image/webp" />
      <img
        :src="hero.image"
        alt=""
        width="1774"
        height="887"
        fetchpriority="high"
        decoding="async"
      />
    </picture>
  </section>
</template>
