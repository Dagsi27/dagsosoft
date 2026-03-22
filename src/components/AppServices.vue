<template>
  <section id="services" class="py-[100px] px-[5%] bg-(--gray)">
    <div class="flex items-center gap-[.7rem] font-mono text-[.68rem] text-(--yellow) tracking-[.2em] uppercase mb-[1.2rem] before:content-[''] before:w-7 before:h-[1.5px] before:bg-(--yellow)">
      {{ $t('services.badge') }}
    </div>
    <h2 class="font-display text-[clamp(2.2rem,5vw,4rem)] text-white leading-[1.05] tracking-[.03em]">
      {{ $t('services.title_1') }} <span class="text-(--yellow)">{{ $t('services.title_2') }}</span><br>{{ $t('services.title_3') }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[1.5px] mt-16 bg-(--gray-lt) border border-(--gray-lt)">
      <div
        v-for="service in services"
        :key="service.title"
        class="service-card reveal bg-(--gray-mid) p-10 relative overflow-hidden transition-[background] duration-[.25s] group hover:bg-[#262626] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-(--yellow) after:w-0 after:transition-all after:duration-[.35s] after:ease-out hover:after:w-full"
      >
        <span class="text-[2rem] mb-5 block">{{ service.icon }}</span>
        <h3 class="font-display text-[1.5rem] text-white tracking-[.05em] mb-3">{{ service.title }}</h3>
        <p class="text-[.88rem] text-(--text-dim) leading-[1.7]">{{ service.desc }}</p>
        <div class="flex flex-wrap gap-[.4rem] mt-5">
          <span
            v-for="tag in service.tags"
            :key="tag"
            class="font-mono text-[.62rem] bg-[rgba(245,196,0,.08)] border border-[rgba(245,196,0,.2)] text-(--yellow) px-[.55rem] py-[.2rem] tracking-[.08em]"
          >{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services = computed(() => [
  {
    icon: '⚡',
    title: t('services.items.wp.title'),
    desc: t('services.items.wp.desc'),
    tags: ['WordPress', 'WooCommerce', 'ACF', 'REST API'],
  },
  {
    icon: '🔧',
    title: t('services.items.php.title'),
    desc: t('services.items.php.desc'),
    tags: ['PHP 8', 'MySQL', 'REST API', 'Composer'],
  },
  {
    icon: '🚀',
    title: t('services.items.laravel.title'),
    desc: t('services.items.laravel.desc'),
    tags: ['Laravel 11', 'Livewire', 'Filament', 'Queues'],
  },
  {
    icon: '⚛️',
    title: t('services.items.frontend.title'),
    desc: t('services.items.frontend.desc'),
    tags: ['React 18', 'Vue 3', 'Inertia.js', 'TypeScript'],
  },
])
</script>
