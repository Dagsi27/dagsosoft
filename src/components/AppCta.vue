<script setup>
import { ref, reactive } from 'vue'

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'
const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle')

async function submitForm() {
  status.value = 'sending'
  try {
    const res = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })
    status.value = res.ok ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section
    id="contact"
    class="py-[100px] px-[5%] bg-(--black) text-center relative overflow-hidden"
  >
    <div
      class="absolute font-display text-[clamp(4rem,12vw,14rem)] text-white/[.02] tracking-[.05em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
    >
      DAGSOSOFT
    </div>

    <h2 class="font-display text-[clamp(2.2rem,6vw,5rem)] text-white leading-[1.05] tracking-[.03em] mb-4 relative">
      {{ $t('contact.title_1') }}<br><span class="text-(--yellow)">{{ $t('contact.title_2') }}</span>
    </h2>
    <p class="text-(--text-dim) max-w-[540px] mx-auto mb-10 leading-[1.8] relative">
      {{ $t('contact.description') }}
    </p>

    <a
      href="mailto:kontakt@dagsosoft.pl"
      class="inline-block font-mono text-[clamp(.72rem,2.5vw,.9rem)] text-(--yellow) no-underline border-b border-[rgba(245,196,0,.3)] pb-[.2rem] transition-[border-color] duration-200 hover:border-(--yellow) mb-10 relative break-all"
    >
      📧 kontakt@dagsosoft.pl
    </a>

    <form class="max-w-xl mx-auto relative flex flex-col gap-4 text-left" @submit.prevent="submitForm">
      <input
        v-model="form.name"
        type="text"
        :placeholder="$t('contact.form.name')"
        required
        class="bg-(--gray-mid) border border-(--gray-lt) text-(--text) outline-none p-4 w-full font-body transition-[border-color] duration-200 focus:border-(--yellow)"
      >
      <input
        v-model="form.email"
        type="email"
        :placeholder="$t('contact.form.email')"
        required
        class="bg-(--gray-mid) border border-(--gray-lt) text-(--text) outline-none p-4 w-full font-body transition-[border-color] duration-200 focus:border-(--yellow)"
      >
      <textarea
        v-model="form.message"
        :placeholder="$t('contact.form.message')"
        rows="5"
        required
        class="bg-(--gray-mid) border border-(--gray-lt) text-(--text) outline-none p-4 w-full font-body resize-y transition-[border-color] duration-200 focus:border-(--yellow)"
      ></textarea>

      <div v-if="status === 'success'" class="text-(--yellow) font-mono text-sm tracking-wider text-center py-2">
        {{ $t('contact.form.success') }}
      </div>
      <div v-else-if="status === 'error'" class="text-[#ff5f56] font-mono text-sm tracking-wider text-center py-2">
        {{ $t('contact.form.error') }}
      </div>

      <button
        type="submit"
        :disabled="status === 'sending'"
        class="bg-(--yellow) text-(--black) border-none w-full py-4 font-body font-bold text-[1rem] tracking-[.08em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#ffd62e] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {{ status === 'sending' ? $t('contact.form.sending') : $t('contact.form.send') }}
      </button>
    </form>

    <div class="flex gap-4 justify-center flex-wrap mt-6 relative">
      <button
        class="bg-transparent text-(--text) border border-(--gray-lt) px-10 py-4 font-body font-medium text-[1rem] tracking-[.08em] uppercase cursor-pointer transition-all duration-200 hover:border-(--yellow) hover:text-(--yellow) hover:-translate-y-0.5"
        @click="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })"
      >
        {{ $t('contact.call') }}
      </button>
    </div>
  </section>
</template>
