import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import './Preloader.css'

gsap.registerPlugin(CustomEase, SplitText)

export const Preloader = ({ onComplete }) => {
  const hasCompleted = useRef(false)

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'

    const mainEl = document.querySelector('.main-content')
    if (mainEl) {
      mainEl.style.clipPath = 'polygon(0 50%, 0 50%, 0 50%, 0 50%)'
    }

    CustomEase.create('hop', '0.8,0,.3,1')

    const splitTitle = new SplitText('.pl-preloader .pl-title h1', {
      type: 'words,chars',
      wordsClass: 'pl-word',
      charsClass: 'pl-char',
    })

    splitTitle.chars.forEach((char) => {
      const text = char.textContent
      char.innerHTML = `<span>${text}</span>`
    })

    const splitTags = []
    document.querySelectorAll('.pl-tags-overlay .pl-tag p').forEach((el) => {
      splitTags.push(new SplitText(el, { type: 'words', wordsClass: 'pl-word' }))
    })

    const isMobile = window.innerWidth <= 1000
    const tl = gsap.timeline({ defaults: { ease: 'hop' } })
    const tags = gsap.utils.toArray('.pl-tag')

    tags.forEach((tag, index) => {
      tl.to(
        tag.querySelectorAll('p .pl-word'),
        { y: '0%', duration: 0.75 },
        0.5 + index * 0.1
      )
    })

    tl.to(
      '.pl-preloader .pl-char span',
      { y: '0%', duration: 0.75, stagger: 0.04 },
      0.5
    )

    tl.to(
      '.pl-line',
      { width: isMobile ? '120px' : '200px', duration: 2, ease: 'power2.inOut' },
      0.5
    )

    tl.to(
      '.pl-preloader .pl-char span',
      { y: '100%', duration: 0.75, stagger: 0.025 },
      2.8
    )

    tags.forEach((tag, index) => {
      tl.to(
        tag.querySelectorAll('p .pl-word'),
        { y: '100%', duration: 0.75 },
        2.8 + index * 0.1
      )
    })

    tl.to(
      '.pl-line',
      { width: 0, opacity: 0, duration: 0.5 },
      2.8
    )

    tl.add(() => {
      gsap.set('.pl-preloader', {
        clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0% 50%)',
      })
      gsap.set('.pl-split-overlay', {
        clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)',
      })
    }, 3.8)

    tl.to(
      '.main-content',
      {
        clipPath: 'polygon(0 48%, 100% 48%, 100% 52%, 0% 52%)',
        duration: 0.5,
      },
      3.8
    )

    tl.to(
      ['.pl-preloader', '.pl-split-overlay'],
      {
        y: (i) => (i === 0 ? '-50%' : '50%'),
        duration: 1,
      },
      4.3
    )

    tl.to(
      '.main-content',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        onComplete: () => {
          hasCompleted.current = true
          document.body.style.overflow = ''
          if (mainEl) mainEl.style.clipPath = ''
          onComplete?.()
        },
      },
      4.3
    )

    return () => {
      tl.kill()
      document.body.style.overflow = ''
      if (!hasCompleted.current && mainEl) {
        mainEl.style.clipPath = ''
      }
      splitTitle.revert()
      splitTags.forEach((s) => s.revert())
    }
  }, [onComplete])

  return (
    <>
      <div className="pl-preloader">
        <div className="pl-title">
          <h1>Plantorium</h1>
        </div>
        <div className="pl-line" />
      </div>
      <div className="pl-split-overlay" />
      <div className="pl-tags-overlay">
        <div className="pl-tag pl-tag-1">
          <p>Landscape Design</p>
        </div>
        <div className="pl-tag pl-tag-2">
          <p>Planting Execution</p>
        </div>
        <div className="pl-tag pl-tag-3">
          <p>Garden Architecture</p>
        </div>
      </div>
    </>
  )
}
