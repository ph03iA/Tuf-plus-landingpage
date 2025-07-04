import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef()

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
            if (triggerOnce) {
              setHasAnimated(true)
            }
          }, delay)
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated])

  return [ref, isVisible]
}

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return [ref, offset]
}

export const useSmoothScroll = () => {
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const targetPosition = element.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return { scrollToElement, scrollToTop }
} 