<script setup>
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center bg-(--black) px-[5%] py-[80px] relative overflow-hidden"
    style="background-image: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,196,0,.06) 0%, transparent 70%), repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,.025) 49px, rgba(255,255,255,.025) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,.025) 49px, rgba(255,255,255,.025) 50px);"
  >
    <div class="relative z-[2] max-w-[860px] mx-auto w-full">
      <div class="anim-fade-up inline-flex items-center gap-2 bg-[rgba(245,196,0,.1)] border border-[rgba(245,196,0,.3)] text-(--yellow) font-mono text-[.7rem] tracking-[.15em] uppercase px-[.9rem] py-[.4rem] mb-8 before:content-['▶'] before:text-[.5rem]">
        {{ $t('hero.badge') }}
      </div>

      <h1 class="anim-fade-up-1 font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[.95] text-white tracking-[.03em]">
        {{ $t('hero.title_1') }}<br>
        <span class="text-(--yellow)">{{ $t('hero.title_2') }}</span><br>
        <span style="-webkit-text-stroke: 1.5px rgba(255,255,255,.3); color: transparent;">{{ $t('hero.title_3') }}</span>
      </h1>

      <p class="anim-fade-up-2 mt-[1.6rem] text-[1.05rem] text-(--text-dim) max-w-[480px] mx-auto leading-[1.75]">
        {{ $t('hero.description') }}
      </p>

      <div class="anim-fade-up-3 mt-[2.4rem] flex gap-4 flex-wrap justify-center">
        <button
          class="bg-(--yellow) text-(--black) border-none px-8 py-[.85rem] font-body font-bold text-[.9rem] tracking-[.08em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#ffd62e] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,196,0,.25)]"
          @click="scrollTo('contact')"
        >
          {{ $t('hero.cta_talk') }}
        </button>
        <button
          class="bg-transparent text-(--text) border border-(--gray-lt) px-8 py-[.85rem] font-body font-medium text-[.9rem] tracking-[.08em] uppercase cursor-pointer transition-all duration-200 hover:border-(--yellow) hover:text-(--yellow) hover:-translate-y-0.5"
          @click="scrollTo('services')"
        >
          {{ $t('hero.cta_services') }}
        </button>
      </div>
    </div>
  </section>
</template>
