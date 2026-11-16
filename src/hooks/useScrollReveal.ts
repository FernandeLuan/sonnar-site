import { useEffect } from 'react'

const REVEAL_SELECTOR = [
  '.hero-grid > div', '.light .container > .eyebrow', '.heading',
  '.services article', '.service-contact', '.diagnosis-grid > *',
  '.steps article', '.repair', '.about-grid > *', '.coverage-grid > *',
  '.contact-grid > *',
].join(', ')

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05, rootMargin: '0px' })

    elements.forEach((element) => {
      element.classList.add('scroll-reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])
}
