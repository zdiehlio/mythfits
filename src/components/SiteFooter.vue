<script setup>
import { site } from "../content/site.js";
</script>

<template>
  <footer class="site-footer">
    <div class="shell footer-inner">
      <picture>
        <source srcset="/brand/logo-dark-background-stacked.webp" type="image/webp" />
        <img :src="site.stackedLogo" alt="Mythfits" width="1774" height="887" />
      </picture>
      <p>{{ site.footer.text }}</p>
      <nav aria-label="Footer">
        <a v-for="item in site.nav" :key="item.id" :href="`#${item.id}`">{{ item.label }}</a>
      </nav>
    </div>
  </footer>
</template>
