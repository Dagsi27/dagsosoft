<template>
  <section id="about" class="py-[100px] px-[5%] bg-(--gray) grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
    <div class="reveal">
      <div class="flex items-center gap-[.7rem] font-mono text-[.68rem] text-(--yellow) tracking-[.2em] uppercase mb-[1.2rem] before:content-[''] before:w-7 before:h-[1.5px] before:bg-(--yellow)">
        {{ $t('about.badge') }}
      </div>
      <h2 class="font-display text-[clamp(2.2rem,5vw,4rem)] text-white leading-[1.05] tracking-[.03em] mb-6">
        {{ $t('about.title_1') }}<br>{{ $t('about.title_2') }} <span class="text-(--yellow)">{{ $t('about.title_3') }}</span>
      </h2>
      <p class="text-(--text-dim) leading-[1.8] mb-4 text-[.95rem]">
        {{ $t('about.desc_1') }}
      </p>
      <p class="text-(--text-dim) leading-[1.8] mb-4 text-[.95rem]">
        {{ $t('about.desc_2') }}
      </p>
      <div class="flex flex-col gap-3 mt-8">
        <div
          v-for="perk in perks"
          :key="perk"
          class="flex items-center gap-3 text-[.88rem] text-(--text) before:content-['▸'] before:text-(--yellow) before:text-base before:shrink-0"
        >
          {{ perk }}
        </div>
      </div>
    </div>

    <div class="reveal flex flex-col gap-5">
      <div class="bg-(--gray-mid) border border-(--gray-lt) p-7">
        <h4 class="text-[.78rem] text-(--text-dim) uppercase tracking-[.12em] mb-4 font-mono">{{ $t('about.tech_stack') }}</h4>
        <div v-for="(bar, i) in techBars" :key="bar.label" class="mb-[.9rem] last:mb-0">
          <div class="flex justify-between text-[.82rem] text-(--text) mb-[.4rem]">
            <span>{{ bar.label }}</span>
            <span class="text-(--yellow) font-mono text-[.75rem]">{{ bar.pct }}</span>
          </div>
          <div class="h-[3px] bg-(--gray-lt)">
            <div
              class="bar-fill"
              :class="`bar-fill-d${i}`"
              :style="`width: ${bar.pct}`"
            ></div>
          </div>
        </div>
      </div>

      <div class="bg-(--gray-mid) border border-(--gray-lt) p-7">
        <h4 class="text-[.78rem] text-(--text-dim) uppercase tracking-[.12em] mb-4 font-mono">{{ $t('about.availability_title') }}</h4>
        <div v-for="(bar, i) in availBars" :key="bar.label" class="mb-[.9rem] last:mb-0">
          <div class="flex justify-between text-[.82rem] text-(--text) mb-[.4rem]">
            <span>{{ bar.label }}</span>
            <span class="text-(--yellow) font-mono text-[.75rem]">{{ bar.pct }}</span>
          </div>
          <div class="h-[3px] bg-(--gray-lt)">
            <div
              class="bar-fill"
              :class="`bar-fill-d${i + 1}`"
              :style="`width: ${bar.pct}`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

// Use tm/rt for arrays from locales
const perks = computed(() => tm('about.perks').map(p => rt(p)))

const techBars = [
  { label: 'PHP / Laravel',             pct: '95%' },
  { label: 'WordPress / WooCommerce',   pct: '98%' },
  { label: 'React / Vue',               pct: '80%' },
  { label: 'MySQL / PostgreSQL',         pct: '88%' },
]

const availBars = computed(() => [
  { label: t('about.avail_full'), pct: '100%' },
  { label: t('about.avail_once'), pct: '100%' },
])
</script>
