<template>
  <section class="py-[100px] px-[5%] bg-(--gray)">
    <div class="flex items-center gap-[.7rem] font-mono text-[.68rem] text-(--yellow) tracking-[.2em] uppercase mb-[1.2rem] before:content-[''] before:w-7 before:h-[1.5px] before:bg-(--yellow)">
      {{ $t('testimonials.badge') }}
    </div>
    <h2 class="font-display text-[clamp(2.2rem,5vw,4rem)] text-white leading-[1.05] tracking-[.03em]">
      {{ $t('testimonials.title_1') }}<br><span class="text-(--yellow)">{{ $t('testimonials.title_2') }}</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="reveal bg-(--gray-mid) border border-(--gray-lt) border-l-[3px] border-l-(--yellow) p-8"
      >
        <div class="testi-quote text-[.92rem] text-(--text-dim) leading-[1.8] mb-6 italic">
          {{ t.quote }}
        </div>
        <div class="flex items-center gap-3">
          <div class="w-[38px] h-[38px] rounded-full bg-(--gray-lt) border-2 border-(--yellow) flex items-center justify-center font-display text-(--yellow) text-base shrink-0">
            {{ t.initials }}
          </div>
          <div>
            <div class="font-semibold text-[.88rem] text-white">{{ t.name }}</div>
            <div class="text-[.75rem] text-(--text-dim) font-mono">{{ t.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testimonials = computed(() => [
  {
    quote: t('testimonials.items.marek.quote'),
    name: 'Marek Kowalski',
    role: t('testimonials.items.marek.role'),
    initials: 'MK',
  },
  {
    quote: t('testimonials.items.anna.quote'),
    name: 'Anna Wiśniewska',
    role: t('testimonials.items.anna.role'),
    initials: 'AW',
  },
  {
    quote: t('testimonials.items.piotr.quote'),
    name: 'Piotr Zając',
    role: t('testimonials.items.piotr.role'),
    initials: 'PZ',
  },
])
</script>
