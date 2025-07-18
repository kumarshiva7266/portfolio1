import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function SwooshUnderline() {
  return (
    <svg
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '-6px',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <ellipse cx="30" cy="8" rx="28" ry="5" fill="url(#paint0_linear)" fillOpacity="0.7" />
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="8" x2="60" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d414c6" />
          <stop offset="1" stopColor="#ff90e8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [hovered, setHovered] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on navigation
  useEffect(() => {
    if (!mobileMenuOpen) return
    const close = () => setMobileMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
      ]
      const scrollY = window.scrollY
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && scrollY + 80 >= section.offsetTop) {
          setActive(sections[i].label)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      background: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 58,
    }}>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80, damping: 18 }}
        style={{
          width: '97%',
          maxWidth: 1700,
          margin: '0.6rem auto 0',
          borderRadius: 18,
          background: 'rgba(40, 80, 100, 0.38)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          border: '1px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(18px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.22rem 1.2rem',
          minHeight: 46,
          fontFamily: 'Poppins, Inter, Arial, sans-serif',
        }}
      >
        {/* Logo and Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontWeight: 900, fontSize: '2rem', color: '#fff', letterSpacing: '0.1em' }}>S</span>
          {/* Hamburger icon for mobile */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(v => !v)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              marginLeft: 8,
              padding: 4,
            }}
            className="navbar-hamburger"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect y="7" width="32" height="3.5" rx="1.5" fill="#fff"/><rect y="14" width="32" height="3.5" rx="1.5" fill="#fff"/><rect y="21" width="32" height="3.5" rx="1.5" fill="#fff"/></svg>
          </button>
        </div>
        {/* Desktop Nav Links */}
        <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ul style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.1rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontWeight: 500,
            fontSize: '1.08rem',
            letterSpacing: '0.02em',
          }}>
            {navLinks.map(link => (
              <li key={link.href} style={{ position: 'relative' }}>
                <motion.a
                  href={link.href}
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '4px',
                    fontWeight: active === link.label ? 700 : 500,
                    transition: 'all 0.2s',
                    display: 'inline-block',
                    position: 'relative',
                  }}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) {
                      el.style.scrollMarginTop = '80px';
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setActive(link.label);
                    setMobileMenuOpen(false);
                  }}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.13 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {link.label}
                  <AnimatePresence mode="wait">
                    {(active === link.label || hovered === link.label) && (
                      <motion.span
                        key={active === link.label ? 'active' : 'hover'}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.18 }}
                        style={{ position: 'absolute', left: 0, right: 0, bottom: -10, height: 16, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}
                      >
                        <SwooshUnderline />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.a>
              </li>
            ))}
          </ul>
          {/* Resume Button */}
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            style={{
              background: 'linear-gradient(90deg, #d414c6 0%, #ff9900 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '1.5rem',
              padding: '0.55rem 1.3rem',
              fontWeight: 600,
              fontSize: '1.08rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              textDecoration: 'none',
              marginLeft: '1.1rem',
              transition: 'background 0.2s',
              cursor: 'pointer',
              outline: 'none',
              display: 'inline-block',
            }}
          >
            Resume
          </a>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="navbar-mobile-menu"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(24,24,27,0.98)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.3s',
            }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: 32,
                cursor: 'pointer',
                zIndex: 10001,
              }}
            >
              ×
            </button>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '2.2rem',
              alignItems: 'center',
            }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: '#fff',
                      fontSize: '2rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.04em',
                    }}
                    onClick={e => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) {
                        el.style.scrollMarginTop = '80px';
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      setActive(link.label);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  style={{
                    background: 'linear-gradient(90deg, #d414c6 0%, #ff9900 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '1.5rem',
                    padding: '0.75rem 2.2rem',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    textDecoration: 'none',
                    marginTop: '2rem',
                    display: 'inline-block',
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </motion.nav>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1100px) {
          nav {
            padding: 0.18rem 0.5rem !important;
          }
          nav ul {
            gap: 0.7rem !important;
          }
          nav a[style*='padding: 0.55rem'] {
            margin-left: 0.5rem !important;
            padding: 0.55rem 1rem !important;
          }
        }
        @media (max-width: 800px) {
          nav > div {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
          nav ul {
            gap: 0.5rem !important;
          }
          nav > div > div:last-child {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
        }
        @media (max-width: 700px) {
          .navbar-links {
            display: none !important;
          }
          .navbar-hamburger {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}