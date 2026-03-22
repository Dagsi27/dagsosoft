<script setup>
import AppNav          from './components/AppNav.vue'
import AppHero         from './components/AppHero.vue'
import AppStats        from './components/AppStats.vue'
import AppServices     from './components/AppServices.vue'
import AppProcess      from './components/AppProcess.vue'
import AppAbout        from './components/AppAbout.vue'
import AppPricing      from './components/AppPricing.vue'
import AppTestimonials from './components/AppTestimonials.vue'
import AppCta          from './components/AppCta.vue'
import AppFooter       from './components/AppFooter.vue'
import { useCursor }      from './composables/useCursor'
import { useScrollReveal } from './composables/useScrollReveal'

useCursor()
useScrollReveal()
</script>

<template>
  <div class="cursor" id="cur"></div>
  <div class="cursor-ring" id="curRing"></div>

  <AppNav />
  <main>
    <AppHero />
    <AppStats />
    <AppServices />
    <AppProcess />
    <!-- <AppAbout /> -->
    <!-- <AppPricing /> -->
    <AppTestimonials />
    <AppCta />
  </main>
  <AppFooter />
</template>
