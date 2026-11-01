<script setup>
import ApproachSection from "./components/ApproachSection.vue";
import FaqSection from "./components/FaqSection.vue";
import HeroSection from "./components/HeroSection.vue";
import IdeaForm from "./components/IdeaForm.vue";
import ProcessSection from "./components/ProcessSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import VisionSection from "./components/VisionSection.vue";
</script>

<template>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <HeroSection />
    <ProcessSection />
    <ApproachSection />
    <VisionSection />
    <FaqSection />
    <IdeaForm />
  </main>
  <SiteFooter />
</template>
