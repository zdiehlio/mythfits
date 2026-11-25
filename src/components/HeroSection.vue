<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { site } from "../content/site.js";
import { createPhoenixReveal, revealDuration } from "./phoenix-reveal.js";
import "../styles/awakening.css";

const hero = site.hero;
const sparks = Array.from({ length: 20 }, (_, index) => ({
  left: `${8 + (index * 37) % 85}%`,
  top: `${66 + (index * 11) % 29}%`,
  "--spark-size": `${[1.5, 2, 2.5, 3][index % 4]}px`,
  "--spark-drift": `${(index * 13) % 51 - 25}px`,
  "--spark-duration": `${4.8 + (index % 6) * 0.65}s`,
  animationDelay: `${-((index * 0.73) % 5.2)}s`,
}));
const state = ref("static");
const showRevealCopy = ref(false);
const showDiscover = computed(() => state.value === "static" || showRevealCopy.value);
const visible = ref(false);
const stage = ref(null);
const image = ref(null);
const canvas = ref(null);
const ember = ref(null);
const title = ref(null);
const replayButton = ref(null);

let motion;
let observer;
let frame = 0;
let painter;
let start;
let inView = true;

const copySwapProgress = 0.4;
const emberFadeProgress = 0.16;

function syncVisibility(inView) {
  visible.value = inView && !document.hidden;
  if (!visible.value && state.value === "igniting") reveal();
}

function onVisibilityChange() {
  syncVisibility(inView);
}

function stopReveal() {
  cancelAnimationFrame(frame);
  frame = 0;
  painter = null;
  stage.value?.style.removeProperty("--copy-opacity");
  stage.value?.style.removeProperty("--ember-opacity");
}

function reveal() {
  stopReveal();
  showRevealCopy.value = true;
  state.value = "revealed";
}

function draw(now) {
  start ??= now;
  const elapsed = now - start;
  if (elapsed >= revealDuration) {
    reveal();
    return;
  }

  const progress = elapsed / revealDuration;
  const showIncoming = progress >= copySwapProgress;
  const opacity = showIncoming
    ? (progress - copySwapProgress) / (1 - copySwapProgress)
    : 1 - progress / copySwapProgress;

  stage.value.style.setProperty("--copy-opacity", opacity);
  stage.value.style.setProperty("--ember-opacity", Math.max(0, 1 - progress / emberFadeProgress));
  showRevealCopy.value = showIncoming;
  painter(progress);
  frame = requestAnimationFrame(draw);
}

function ignite() {
  if (state.value !== "idle") return;

  if (document.activeElement === ember.value) title.value.focus({ preventScroll: true });
  if (!visible.value || !image.value.naturalWidth || !painter) {
    reveal();
    return;
  }

  start = undefined;
  state.value = "igniting";
  frame = requestAnimationFrame(draw);
}

function prepare() {
  if (motion.matches || !image.value.naturalWidth) {
    state.value = "static";
    return;
  }

  painter = createPhoenixReveal(canvas.value, image.value);
  state.value = painter ? "idle" : "static";
}

async function replay() {
  stopReveal();
  showRevealCopy.value = false;
  prepare();
  await nextTick();
  ember.value?.focus({ preventScroll: true });
}

function onMotionChange() {
  if (!motion.matches) return;
  if (document.activeElement === ember.value || document.activeElement === replayButton.value) {
    title.value.focus({ preventScroll: true });
  }
  stopReveal();
  showRevealCopy.value = false;
  state.value = "static";
}

onMounted(() => {
  motion = matchMedia("(prefers-reduced-motion: reduce)");
  motion.addEventListener("change", onMotionChange);
  document.addEventListener("visibilitychange", onVisibilityChange);
  onVisibilityChange();

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncVisibility(inView);
    });
    observer.observe(stage.value);
  }

  // Hydrate the static version first, and offer ignition once the artwork is ready.
  image.value.decode().then(() => {
    if (image.value) prepare();
  }).catch(() => {});
});

onBeforeUnmount(() => {
  stopReveal();
  observer?.disconnect();
  motion?.removeEventListener("change", onMotionChange);
  document.removeEventListener("visibilitychange", onVisibilityChange);
});
</script>

<template>
  <section id="top" ref="stage" class="awakening" tabindex="-1" :data-state="state" :class="{ visible }">
    <div class="awakening-art">
      <img ref="image" :src="hero.image" alt="" width="1100" height="825" fetchpriority="high" />
      <canvas ref="canvas" width="880" height="660" aria-hidden="true"></canvas>
      <div v-if="state === 'igniting'" class="awakening-glow" aria-hidden="true"></div>
      <button
        v-if="state === 'idle' || state === 'igniting'"
        ref="ember"
        class="awakening-ember"
        type="button"
        :disabled="state !== 'idle'"
        aria-label="Ignite the ember"
        @click="ignite"
      >
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div v-if="state !== 'static'" class="awakening-sparks" aria-hidden="true">
      <span v-for="spark in sparks" :key="spark.left" :style="spark"></span>
    </div>

    <div class="awakening-copy">
      <h1 ref="title" class="awakening-swap" tabindex="-1" aria-live="polite">
        <span :aria-hidden="showRevealCopy || undefined">{{ hero.title }}</span>
        <span :aria-hidden="!showRevealCopy || undefined">{{ hero.revealTitle }}</span>
      </h1>
      <p>{{ hero.paragraphs[0] }}</p>
      <p class="awakening-swap awakening-support">
        <span class="awakening-prompt" :aria-hidden="showDiscover || undefined">Ignite the ember</span>
        <span class="awakening-lead" :aria-hidden="!showRevealCopy || undefined">{{ hero.revealLead }}</span>
      </p>
      <div class="awakening-actions">
        <a class="awakening-swap" :class="{ 'awakening-cta': showDiscover }" href="#process">
          <span :aria-hidden="showDiscover || undefined">Skip intro&nbsp;<span aria-hidden="true">→</span></span>
          <span :aria-hidden="!showDiscover || undefined">Discover Mythfits&nbsp;<span aria-hidden="true">↓</span></span>
        </a>
        <a :href="hero.primaryCta.href">{{ hero.primaryCta.label }}</a>
        <button ref="replayButton" type="button" :disabled="!showRevealCopy" @click="replay">
          <span>Replay&nbsp;<span aria-hidden="true">↻</span></span>
        </button>
      </div>
      <div class="awakening-description">
        <p v-for="paragraph in hero.paragraphs.slice(1)" :key="paragraph">{{ paragraph }}</p>
      </div>
    </div>
  </section>
</template>
