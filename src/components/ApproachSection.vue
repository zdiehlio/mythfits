<script setup>
import { site } from "../content/site.js";

const approach = site.approach;
</script>

<template>
  <section :id="approach.id" class="approach">
    <div class="shell">
      <p class="eyebrow">{{ approach.eyebrow }}</p>
      <h2>{{ approach.title }}</h2>
      <p v-for="(paragraph, index) in approach.intro" :key="index" class="section-intro">
        {{ paragraph }}
      </p>

      <ol class="approach-steps">
        <li v-for="(step, index) in approach.steps" :key="step.title">
          <img :src="step.icon" alt="" width="64" height="64" />
          <div>
            <p class="step-index">0{{ index + 1 }}</p>
            <h3>{{ step.title }}</h3>
            <p v-for="(paragraph, paragraphIndex) in step.paragraphs" :key="paragraphIndex">
              {{ paragraph }}
            </p>
          </div>
        </li>
      </ol>

      <div class="commitments">
        <div class="commitments-head">
          <p class="eyebrow">{{ approach.commitmentsTitle }}</p>
          <h3>{{ approach.commitmentsHeadline }}</h3>
        </div>
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
