<script setup>
import { computed, ref } from 'vue'

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
const hasFormId = computed(() => Boolean(formId && String(formId).trim()))

const status = ref('idle')
const errorMessage = ref('')

async function onSubmit(event) {
  event.preventDefault()
  if (!hasFormId.value) {
    errorMessage.value =
      'Ustaw VITE_FORMSPREE_FORM_ID w pliku .env (ID formularza z Formspree).'
    status.value = 'error'
    return
  }

  const form = event.target
  status.value = 'submitting'
  errorMessage.value = ''

  const body = new FormData(form)

  try {
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      body,
      headers: { Accept: 'application/json' },
    })
    const data = await res.json().catch(() => ({}))

    if (res.ok) {
      status.value = 'success'
      form.reset()
      return
    }

    errorMessage.value =
      data.error || 'Nie udało się wysłać wiadomości. Spróbuj ponownie.'
    status.value = 'error'
  } catch {
    errorMessage.value = 'Brak połączenia z siecią.'
    status.value = 'error'
  }
}
</script>

<template>
  <form
    class="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
    novalidate
    @submit="onSubmit"
  >
    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

    <div>
      <label for="contact-name" class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Imię
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        required
        autocomplete="name"
        class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-500/30 transition focus:border-sky-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
        placeholder="Jan Kowalski"
      />
    </div>

    <div>
      <label for="contact-email" class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        E-mail
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        required
        autocomplete="email"
        class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-500/30 transition focus:border-sky-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
        placeholder="jan@firma.pl"
      />
    </div>

    <div>
      <label for="contact-message" class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Wiadomość
      </label>
      <textarea
        id="contact-message"
        name="message"
        required
        rows="4"
        class="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-500/30 transition focus:border-sky-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
        placeholder="Opisz krótko, w czym możemy pomóc…"
      />
    </div>

    <button
      type="submit"
      :disabled="status === 'submitting'"
      class="inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {{ status === 'submitting' ? 'Wysyłanie…' : 'Wyślij' }}
    </button>

    <p v-if="status === 'success'" class="text-sm font-medium text-emerald-600 dark:text-emerald-400" role="status">
      Dziękujemy — wiadomość została wysłana.
    </p>
    <p v-if="status === 'error' && errorMessage" class="text-sm text-red-600 dark:text-red-400" role="alert">
      {{ errorMessage }}
    </p>
  </form>
</template>
