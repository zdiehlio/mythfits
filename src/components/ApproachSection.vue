<script setup>
import { site } from "../content/site.js";

const approach = site.approach;
</script>

<template>
  <section :id="approach.id" class="approach">
    <div class="shell">
      <p class="eyebrow">{{ approach.eyebrow }}</p>
      <h2>{{ approach.title }}</h2>
      <p class="section-intro">{{ approach.intro }}</p>

      <ol class="approach-steps">
        <li v-for="(step, index) in approach.steps" :key="step.title">
          <img :src="step.icon" alt="" width="64" height="64" />
          <div>
            <p class="step-index">0{{ index + 1 }}</p>
            <h3>{{ step.title }}</h3>
            <p class="step-summary">{{ step.summary }}</p>
            <p>{{ step.text }}</p>
          </div>
        </li>
      </ol>

      <div class="commitments">
        <h3>{{ approach.commitmentsTitle }}</h3>
        <ul>
          <li v-for="item in approach.commitments" :key="item.title">
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
