import { onMounted, onUnmounted } from 'vue'

export function useCursor() {
  onMounted(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cur     = document.getElementById('cur')
    const curRing = document.getElementById('curRing')
    if (!cur || !curRing) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      cur.style.transform = `translate(${mx - 5}px, ${my - 5}px)`
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      curRing.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      requestAnimationFrame(animate)
    }
    animate()

    document.querySelectorAll('button, a, .service-card, .price-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cur.style.width = '20px'
        cur.style.height = '20px'
        curRing.style.opacity = '1'
      })
      el.addEventListener('mouseleave', () => {
        cur.style.width = '10px'
        cur.style.height = '10px'
        curRing.style.opacity = '.55'
      })
    })

    onUnmounted(() => document.removeEventListener('mousemove', onMove))
  })
}
