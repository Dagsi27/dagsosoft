<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMobileMenu } from '../composables/useMobileMenu'

const { t, locale } = useI18n()
const { isOpen, toggle, close } = useMobileMenu()

const navLinks = computed(() => [
  { href: 'services', label: t('nav.services') },
  { href: 'process',  label: t('nav.process') },
  { href: 'about',    label: t('nav.about') },
  { href: 'pricing',  label: t('nav.pricing') },
  { href: 'contact',  label: t('nav.contact') },
])

function setLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}

function scrollTo(id) {
  close()
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, 320)
}

onMounted(() => {
  const nav = document.getElementById('mainNav')
  const onScroll = () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(10,10,10,1)'
      : 'rgba(10,10,10,.96)'
  }
  window.addEventListener('scroll', onScroll)
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <nav
    id="mainNav"
    class="fixed top-0 w-full z-[900] border-b border-(--gray-lt) flex items-center justify-between px-[5%] h-(--nav-h) backdrop-blur-[14px]"
    style="background: rgba(10,10,10,.96);"
  >
    <div class="font-display text-[1.7rem] tracking-[.12em] text-white z-[1001] shrink-0">
      DAGS<span class="text-(--yellow)">O</span>SOFT
    </div>

    <ul class="hidden lg:flex gap-[2.2rem] list-none items-center">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="`#${link.href}`" class="text-(--text-dim) no-underline text-[.82rem] tracking-[.12em] uppercase transition-colors duration-200 hover:text-(--yellow)">
          {{ link.label }}
        </a>
      </li>
    </ul>

    <div class="hidden lg:flex items-center gap-6">
      <div class="flex gap-3 border-r border-(--gray-lt) pr-6">
        <button 
          v-for="lang in ['pl', 'en', 'de']" 
          :key="lang"
          @click="setLanguage(lang)"
          class="bg-transparent border-none text-[.7rem] font-mono tracking-widest uppercase cursor-pointer transition-colors duration-200 p-1"
          :class="locale === lang ? 'text-(--yellow)' : 'text-(--text-dim) hover:text-white'"
        >
          {{ lang }}
        </button>
      </div>

      <button
        class="bg-(--yellow) text-(--black) border-none px-[1.3rem] py-[.55rem] font-body font-semibold text-[.82rem] tracking-[.1em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#ffd62e] hover:-translate-y-px shrink-0"
        @click="scrollTo('contact')"
      >
        {{ $t('nav.cta') }}
      </button>
    </div>

    <button
      class="lg:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 bg-transparent border border-(--gray-lt) cursor-pointer z-[1001] p-2 transition-[border-color] duration-200 hover:border-(--yellow)"
      :class="{ 'border-(--yellow)': isOpen }"
      :aria-expanded="isOpen"
      :aria-label="$t('nav.open_menu')"
      @click="toggle"
    >
      <span
        class="block w-[22px] h-[2px] rounded-sm transition-all duration-[.32s] ease-in-out"
        :class="isOpen ? 'translate-y-[7px] rotate-45 bg-(--yellow)' : 'bg-(--text)'"
      ></span>
      <span
        class="block w-[22px] h-[2px] rounded-sm transition-all duration-[.32s] ease-in-out"
        :class="isOpen ? 'opacity-0 scale-x-0 bg-(--yellow)' : 'bg-(--text)'"
      ></span>
      <span
        class="block w-[22px] h-[2px] rounded-sm transition-all duration-[.32s] ease-in-out"
        :class="isOpen ? '-translate-y-[7px] -rotate-45 bg-(--yellow)' : 'bg-(--text)'"
      ></span>
    </button>
  </nav>

  <div
    role="dialog"
    :aria-label="$t('nav.nav_aria_label')"
    class="fixed inset-0 bg-(--black) z-[1000] flex-col items-stretch justify-center lg:hidden transition-all duration-[.38s]"
    :class="isOpen ? 'flex opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-full'"
  >
    <button
      class="absolute top-[calc(var(--nav-h)/2-18px)] right-[5%] w-9 h-9 bg-transparent border border-(--gray-lt) text-(--text) text-[1.1rem] cursor-pointer flex items-center justify-center transition-all duration-200 hover:border-(--yellow) hover:text-(--yellow) z-[1002]"
      :class="isOpen ? 'opacity-100 rotate-0 pointer-events-auto' : 'opacity-0 -rotate-90 pointer-events-none'"
      :aria-label="$t('nav.close_menu')"
      @click="close"
    >
      &#x2715;
    </button>

    <div class="flex flex-col h-full justify-center pt-(--nav-h)">
      <ul class="list-none">
        <li
          v-for="(link, i) in navLinks"
          :key="link.href"
          class="border-b border-(--gray-lt) transition-all duration-300"
          :class="isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30px]'"
          :style="`transition-delay: ${0.06 * (i + 1)}s`"
        >
          <a
            :href="`#${link.href}`"
            class="flex items-center justify-between px-[6%] py-[1.15rem] text-(--text) no-underline text-[1.1rem] font-medium tracking-[.06em] uppercase transition-all duration-200 hover:text-(--yellow) after:content-['→'] after:text-(--yellow) after:text-[.9rem] after:shrink-0"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="px-[6%] pt-8 flex flex-col gap-4 transition-all duration-300" :class="isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'" style="transition-delay: 0.34s">
        <button
          class="w-full text-center p-4 text-[.95rem] bg-(--yellow) text-(--black) border-none font-body font-bold tracking-[.08em] uppercase cursor-pointer"
          @click="scrollTo('contact')"
        >
          {{ $t('nav.cta') }} →
        </button>

        <div class="flex justify-center gap-6 py-4 border-y border-(--gray-lt)">
          <button 
            v-for="lang in ['pl', 'en', 'de']" 
            :key="lang"
            @click="setLanguage(lang)"
            class="bg-transparent border-none text-[.95rem] font-mono tracking-widest uppercase cursor-pointer transition-colors duration-200"
            :class="locale === lang ? 'text-(--yellow)' : 'text-(--text-dim)'"
          >
            {{ lang }}
          </button>
        </div>
        <div class="font-mono text-[.62rem] text-(--text-dim) tracking-[.15em] text-center">
          PHP · LARAVEL · WORDPRESS · REACT · VUE
        </div>
      </div>
    </div>
  </div>
</template>
