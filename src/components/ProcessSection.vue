<script setup>
import { site } from "../content/site.js";
</script>

<template>
  <section class="process" aria-label="How an idea moves forward">
    <ol class="shell process-list">
      <li v-for="item in site.process" :key="item.title">
        <img :src="item.icon" alt="" width="64" height="64" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
      </li>
    </ol>
  </section>
</template>
