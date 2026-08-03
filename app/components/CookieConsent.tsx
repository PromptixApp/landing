'use client'

import Cookies from 'js-cookie'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useTranslation } from '../../lib/i18n'

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true'
const USER_CONSENT_COOKIE_EXPIRE_DATE =
  new Date().getTime() + 365 * 24 * 60 * 60

const CookieConsent = () => {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true'
    if (consentIsTrue) {
      return
    }

    setMounted(true)

    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setVisible(true)
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      if (exitTimeoutRef.current !== null) {
        clearTimeout(exitTimeoutRef.current)
      }
    }
  }, [])

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!mounted || !visible) {
      return
    }

    Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
      expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
    })
    setVisible(false)

    if (exitTimeoutRef.current !== null) {
      clearTimeout(exitTimeoutRef.current)
    }
    exitTimeoutRef.current = setTimeout(() => {
      setMounted(false)
      exitTimeoutRef.current = null
    }, 200)
  }

  if (!mounted) {
    return null
  }

  return (
    <section className="fixed bottom-4 left-0 z-50 w-full px-4">
      <div className="mx-auto max-w-xl">
        <div
          className={[
            'flex items-center gap-4 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 shadow-lg',
            'transition-[opacity,transform] duration-200 ease-[var(--ease-out)]',
            'motion-reduce:transition-[opacity] motion-reduce:duration-150 motion-reduce:transform-none',
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none',
          ].join(' ')}
        >
          <p className="flex-grow text-sm text-[var(--muted)]">
            {t.cookieConsent.message}
          </p>
          <button
            className="pressable rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-text)] hover:opacity-90"
            onClick={onClick}
          >
            {t.cookieConsent.accept}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CookieConsent
