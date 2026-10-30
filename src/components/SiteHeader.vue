<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { site } from "../content/site.js";

const open = ref(false);

function close() {
  open.value = false;
}

function onKeydown(event) {
  if (event.key === "Escape") close();
}

onMounted(() => document.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => document.removeEventListener("keydown", onKeydown));
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="shell header-bar">
      <a class="brand" href="#top" @click="close">
        <picture>
          <source srcset="/brand/logo-light-background.webp" type="image/webp" />
          <img :src="site.logo" alt="Mythfits" width="1983" height="793" />
        </picture>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        <span class="sr-only">{{ open ? "Close menu" : "Open menu" }}</span>
        <span class="menu-bars" aria-hidden="true"></span>
      </button>

      <nav :id="'site-nav'" class="site-nav" :class="{ open }" :aria-label="site.name">
        <a
          v-for="item in site.nav"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ cta: item.cta }"
          @click="close"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
