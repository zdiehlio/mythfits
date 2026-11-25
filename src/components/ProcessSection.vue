<script setup>
import { site } from "../content/site.js";
</script>

<template>
  <section id="process" class="process" aria-labelledby="process-title" tabindex="-1">
    <div class="shell">
      <h2 id="process-title">How we work</h2>
      <ol class="process-list">
        <li v-for="item in site.process" :key="item.title">
          <img :src="item.icon" alt="" width="64" height="64" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ol>
      <a class="text-link process-next" href="#approach">
        Explore our approach <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
</template>
