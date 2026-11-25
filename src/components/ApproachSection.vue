<script setup>
import { site } from "../content/site.js";

const approach = site.approach;
</script>

<template>
  <section :id="approach.id" class="approach" tabindex="-1">
    <div class="shell">
      <p class="eyebrow">{{ approach.eyebrow }}</p>
      <h2>{{ approach.title }}</h2>
      <p class="section-intro">{{ approach.intro }}</p>

      <ol class="approach-steps" role="list">
        <li v-for="step in approach.steps" :key="step.title">
          <img :src="step.icon" alt="" width="64" height="64" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>

      <div class="commitments">
        <h3>{{ approach.commitmentsHeadline }}</h3>
        <ul role="list">
          <li v-for="item in approach.commitments" :key="item.title">
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </li>
        </ul>
        <div class="approach-next">
          <p>{{ approach.nextStep }}</p>
          <a class="button button-dark" :href="site.hero.primaryCta.href">
            {{ site.hero.primaryCta.label }} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
