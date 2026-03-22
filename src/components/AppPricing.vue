<template>
  <section id="pricing" class="py-[100px] px-[5%] bg-(--black) text-center">
    <div class="flex items-center justify-center gap-[.7rem] font-mono text-[.68rem] text-(--yellow) tracking-[.2em] uppercase mb-[1.2rem] before:content-[''] before:w-7 before:h-[1.5px] before:bg-(--yellow)">
      {{ $t('pricing.badge') }}
    </div>
    <h2 class="font-display text-[clamp(2.2rem,5vw,4rem)] text-white leading-[1.05] tracking-[.03em]">
      {{ $t('pricing.title_1') }}<br><span class="text-(--yellow)">{{ $t('pricing.title_2') }}</span>
    </h2>
    <p class="text-(--text-dim) text-[.95rem] mb-14">
      {{ $t('pricing.description') }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div
        v-for="card in cards"
        :key="card.title"
        class="price-card reveal bg-(--gray-mid) border px-8 py-10 text-left relative transition-all duration-[.25s]"
        :class="card.featured
          ? 'border-(--yellow) bg-[#222]'
          : 'border-(--gray-lt) hover:border-(--yellow) hover:-translate-y-1'"
      >
        <div
          v-if="card.badge"
          class="absolute -top-px right-6 bg-(--yellow) text-(--black) font-mono text-[.65rem] font-bold tracking-[.1em] px-[.7rem] py-[.3rem] uppercase"
        >
          {{ card.badge }}
        </div>
        <h3 class="font-display text-[1.4rem] text-white tracking-[.06em] mb-2">{{ card.title }}</h3>
        <div class="font-display text-[3.2rem] text-(--yellow) leading-none mt-3 mb-1">
          {{ card.amount }}<sub class="text-base text-(--text-dim) font-body font-normal align-baseline">{{ card.unit }}</sub>
        </div>
        <div class="text-[.78rem] text-(--text-dim) mb-7">{{ card.period }}</div>
        <ul class="list-none flex flex-col gap-3">
          <li
            v-for="feat in card.features"
            :key="feat"
            class="flex items-start gap-[.6rem] text-[.86rem] text-(--text) before:content-['✓'] before:text-(--yellow) before:font-bold before:shrink-0"
          >
            {{ feat }}
          </li>
        </ul>
        <button
          class="w-full mt-8 text-center px-8 py-[.85rem] font-body font-bold text-[.9rem] tracking-[.08em] uppercase cursor-pointer transition-all duration-200"
          :class="card.featured
            ? 'bg-(--yellow) text-(--black) border-none hover:bg-[#ffd62e] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,196,0,.25)]'
            : 'bg-transparent text-(--text) border border-(--gray-lt) hover:border-(--yellow) hover:text-(--yellow) hover:-translate-y-0.5'"
          @click="scrollTo('contact')"
        >
          {{ card.cta }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const cards = computed(() => [
  {
    title: t('pricing.cards.hourly.title'),
    amount: t('pricing.cards.hourly.amount'),
    unit: t('pricing.cards.hourly.unit'),
    period: t('pricing.cards.hourly.period'),
    features: tm('pricing.cards.hourly.features').map(f => rt(f)),
    cta: t('pricing.cards.hourly.cta'),
    featured: false,
    badge: null,
  },
  {
    title: t('pricing.cards.fixed.title'),
    amount: t('pricing.cards.fixed.amount'),
    unit: t('pricing.cards.fixed.unit'),
    period: t('pricing.cards.fixed.period'),
    features: tm('pricing.cards.fixed.features').map(f => rt(f)),
    cta: t('pricing.cards.fixed.cta'),
    featured: true,
    badge: t('pricing.cards.fixed.badge'),
  },
  {
    title: t('pricing.cards.audit.title'),
    amount: t('pricing.cards.audit.amount'),
    unit: t('pricing.cards.audit.unit'),
    period: t('pricing.cards.audit.period'),
    features: tm('pricing.cards.audit.features').map(f => rt(f)),
    cta: t('pricing.cards.audit.cta'),
    featured: false,
    badge: null,
  },
])
</script>
