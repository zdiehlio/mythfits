<script setup>
import { site } from "../content/site.js";
</script>

<template>
  <section class="process" aria-labelledby="process-title">
    <h2 id="process-title" class="sr-only">The process</h2>
    <ol class="shell process-list">
      <li v-for="item in site.process" :key="item.title">
        <img :src="item.icon" alt="" width="64" height="64" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </li>
    </ol>
  </section>
</template>
