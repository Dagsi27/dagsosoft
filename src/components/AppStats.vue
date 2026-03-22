<template>
  <div class="bg-(--black) border-t border-b border-(--gray-lt) flex flex-wrap justify-center py-[2.2rem] px-[5%]">
    <div
      v-for="stat in stats"
      :key="stat.num"
      class="reveal flex-1 text-center py-2 px-6 border-r border-(--gray-lt) last:border-r-0 min-w-[45%]"
    >
      <div class="font-display text-[clamp(2rem,5vw,3rem)] text-(--yellow) leading-none">{{ stat.num }}</div>
      <div class="text-[.75rem] text-(--text-dim) tracking-[.1em] uppercase mt-[.3rem]">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = computed(() => [
  { num: '8+',   label: t('stats.experience') },
  { num: '120+', label: t('stats.projects') },
  { num: '98%',  label: t('stats.clients') },
  { num: 'B2B',  label: t('stats.b2b') },
])
</script>
