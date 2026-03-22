import { ref, onMounted, onUnmounted } from 'vue'

export function useMobileMenu() {
  const isOpen = ref(false)

  function open() {
    isOpen.value = true
    document.body.classList.add('overflow-hidden')
  }

  function close() {
    isOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }

  function toggle() {
    isOpen.value ? close() : open()
  }

  function onKey(e) {
    if (e.key === 'Escape') close()
  }

  onMounted(() => document.addEventListener('keydown', onKey))
  onUnmounted(() => document.removeEventListener('keydown', onKey))

  return { isOpen, open, close, toggle }
}
