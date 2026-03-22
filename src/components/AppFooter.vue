<template>
  <footer class="bg-(--black) border-t border-(--gray-lt) flex flex-wrap justify-between items-center gap-6 px-[5%] py-12">
    <div class="font-display text-[1.4rem] tracking-[.1em] text-white">
      DAGS<span class="text-(--yellow)">O</span>SOFT
    </div>
    <div class="text-[.78rem] text-(--text-dim)">
      {{ $t('footer.description') }}
    </div>
    <ul class="flex gap-6 list-none flex-wrap">
      <li><a href="#services" class="text-[.78rem] text-(--text-dim) no-underline transition-colors duration-200 tracking-[.08em] hover:text-(--yellow)">{{ $t('nav.services') }}</a></li>
      <li><a href="#about"    class="text-[.78rem] text-(--text-dim) no-underline transition-colors duration-200 tracking-[.08em] hover:text-(--yellow)">{{ $t('nav.about') }}</a></li>
      <li><a href="#contact"  class="text-[.78rem] text-(--text-dim) no-underline transition-colors duration-200 tracking-[.08em] hover:text-(--yellow)">{{ $t('nav.contact') }}</a></li>
      <li><a href="#"         class="text-[.78rem] text-(--text-dim) no-underline transition-colors duration-200 tracking-[.08em] hover:text-(--yellow)">{{ $t('footer.privacy') }}</a></li>
    </ul>
  </footer>
</template>
