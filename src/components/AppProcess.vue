<template>
  <section id="process" class="py-[100px] px-[5%] bg-(--black)">
    <div class="flex items-center gap-[.7rem] font-mono text-[.68rem] text-(--yellow) tracking-[.2em] uppercase mb-[1.2rem] before:content-[''] before:w-7 before:h-[1.5px] before:bg-(--yellow)">
      {{ $t('process.badge') }}
    </div>
    <h2 class="font-display text-[clamp(2.2rem,5vw,4rem)] text-white leading-[1.05] tracking-[.03em]">
      {{ $t('process.title_1') }} <span class="text-(--yellow)">{{ $t('process.title_2') }}</span><br>{{ $t('process.title_3') }}
    </h2>

    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="step in steps"
        :key="step.num"
        class="reveal relative pt-6 border-t-2 border-(--gray-lt) transition-[border-color] duration-200 hover:border-(--yellow) group"
      >
        <div class="font-display text-[4rem] text-[rgba(245,196,0,.12)] leading-none absolute top-1 right-0 transition-[color] duration-200 group-hover:text-[rgba(245,196,0,.22)]">
          {{ step.num }}
        </div>
        <h4 class="font-display text-[1.25rem] text-white tracking-[.05em] mb-2">{{ step.title }}</h4>
        <p class="text-[.84rem] text-(--text-dim) leading-[1.65]">{{ step.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  {
    num: '01',
    title: t('process.steps.brief.title'),
    desc: t('process.steps.brief.desc'),
  },
  {
    num: '02',
    title: t('process.steps.contract.title'),
    desc: t('process.steps.contract.desc'),
  },
  {
    num: '03',
    title: t('process.steps.dev.title'),
    desc: t('process.steps.dev.desc'),
  },
  {
    num: '04',
    title: t('process.steps.launch.title'),
    desc: t('process.steps.launch.desc'),
  },
])
</script>
