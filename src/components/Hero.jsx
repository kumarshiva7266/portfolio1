import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BLUR_BG_URL = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80'
const PROFILE_IMG = '/ii.jpg'

const headlinePhrases = [
  "Web Developer",
  "Frontend Developer",
  "UI Designer"
]

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shiv-prasad-99a524346/', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.59 1.36-1.22 2.5-1.22 2.07 0 3.5 1.68 3.5 3.5v5.5z"/></svg>
  ) },
  { name: 'GitHub', url: 'https://github.com/kumarshiva7266', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  ) },
  { name: 'Instagram', url: 'https://www.instagram.com/_s.h.i.v.a1/', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
  ) },
  { name: 'Facebook', url: 'https://www.facebook.com/07Shivakumar', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.592 1.322-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z"/></svg>
  ) },
]

const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '5+', label: 'Technologies Mastered' },
  { value: '10+', label: 'Satisfied Clients' },
]

function useTypewriter(words, delay = 1800) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout
    if (typing) {
      if (displayed.length < words[index].length) {
        timeout = setTimeout(() => setDisplayed(words[index].slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), delay)
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true)
        setDisplayed('')
        setIndex((index + 1) % words.length)
      }, 600)
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, index, words, delay])

  return displayed
}

export default function Hero() {
  const animatedHeadline = useTypewriter(headlinePhrases)
  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        hidden: { scale: 0.97, opacity: 0, y: 40 },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            duration: 0.9,
            ease: 'easeInOut',
            staggerChildren: 0.12,
          },
        },
      }}
      style={{
        minHeight: 'auto',
        height: 'auto',
        width: '100vw',
        margin: 0,
        padding: 0,
        paddingTop: '60px',
        paddingBottom: '40px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row', // change to row for left/right layout
        alignItems: 'center',
        justifyContent: 'flex-start', // move content to the right
        fontFamily: 'Poppins, Inter, Arial, sans-serif',
        position: 'relative',
        textAlign: 'left', // left align text
        overflow: 'hidden',
        paddingLeft: '14vw', // increase left padding to move content further right
      }}
    >
      {/* Blurred background image overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: `url(${BLUR_BG_URL}) center/cover no-repeat`,
          filter: 'blur(18px) saturate(1.2)',
          opacity: 0.38,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(24,24,27,0.72)',
          zIndex: 1,
        }}
      />
      {/* Left: Profile Image */}
      <div style={{ position: 'relative', zIndex: 2, flex: '0 0 260px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.7, rotate: -10 },
            visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, type: 'spring', ease: 'easeInOut' } },
          }}
          style={{ position: 'relative', margin: '0', zIndex: 2, width: 210, height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Rotating RGB blurred circle */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 260,
              height: 260,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              zIndex: 0,
              pointerEvents: 'none',
              background: 'conic-gradient(from 0deg, #ff005a, #00c6fb, #00ffae, #fffb00, #ff005a)',
              filter: 'blur(32px)',
              opacity: 0.55,
            }}
          />
          <img
            src={PROFILE_IMG}
            alt="Profile"
            style={{
              width: 210,
              height: 210,
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              background: '#23232a',
              border: '6px solid #23232a',
              zIndex: 2,
              position: 'relative',
            }}
          />
          {/* Glowing animated outline */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 210,
              height: 210,
              borderRadius: '50%',
              zIndex: 1,
              pointerEvents: 'none',
              background: 'conic-gradient(from 0deg, #00c6fb, #005bea, #d414c6, #ff9900, #00c6fb)',
              filter: 'blur(8px)',
              opacity: 0.7,
            }}
          />
        </motion.div>
      </div>
      {/* Right: Content */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, paddingLeft: 40, minWidth: 0 }}>
        {/* Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7, ease: 'easeInOut' } },
          }}
          style={{
            fontSize: '2.7rem',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: '1.2rem',
            zIndex: 2,
            textAlign: 'left',
          }}
        >
          Hello, I'm <span style={{ color: '#fff', fontWeight: 700 }}>Shiv Prasad</span>
          <br />
          <span style={{ fontWeight: 400, fontSize: '1.5rem', color: '#bdbdbd' }}>And I'm a <span style={{ color: '#00c6fb', fontWeight: 700 }}>{animatedHeadline}</span><span className="type-cursor">|</span></span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7, ease: 'easeInOut' } },
          }}
          style={{
            color: '#bdbdbd',
            fontSize: '1.1rem',
            maxWidth: 600,
            margin: '0 0 2.2rem 0',
            zIndex: 2,
            textAlign: 'left',
          }}
        >
          Learn more about my skills, experience, and projects by exploring this site. Excellent team leader, passionate web developer, quick researcher, and a problem solver.
        </motion.p>
        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.97 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
          }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: '1.5rem', zIndex: 2 }}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '0.85rem 2.2rem',
              borderRadius: '2rem',
              boxShadow: '0 2px 12px rgba(0,198,251,0.08)',
              textDecoration: 'none',
              border: 'none',
              transition: 'background 0.2s',
            }}
          >
            Hire Me
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '0.85rem 2.2rem',
              borderRadius: '2rem',
              border: '2px solid #00c6fb',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>
        {/* Social icons with real brand colors */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.97 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
          }}
          style={{ display: 'flex', gap: '1.2rem', justifyContent: 'flex-start', marginBottom: '2.5rem', zIndex: 2 }}>
          {socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background:
                  social.name === 'LinkedIn' ? '#0077B5' :
                  social.name === 'GitHub' ? '#181717' :
                  social.name === 'Instagram' ? 'none' :
                  social.name === 'Facebook' ? '#1877F3' : 'rgba(0,198,251,0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'background 0.2s, transform 0.2s',
                padding: social.name === 'Instagram' ? 0 : undefined,
              }}
              onMouseOver={e => {
                if (social.name === 'LinkedIn') e.currentTarget.style.background = '#005582';
                else if (social.name === 'GitHub') e.currentTarget.style.background = '#333';
                else if (social.name === 'Instagram') e.currentTarget.style.background = 'rgba(221,42,123,0.12)';
                else if (social.name === 'Facebook') e.currentTarget.style.background = '#0a5ad5';
              }}
              onMouseOut={e => {
                if (social.name === 'LinkedIn') e.currentTarget.style.background = '#0077B5';
                else if (social.name === 'GitHub') e.currentTarget.style.background = '#181717';
                else if (social.name === 'Instagram') e.currentTarget.style.background = 'none';
                else if (social.name === 'Facebook') e.currentTarget.style.background = '#1877F3';
              }}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
        {/* Stats Bar */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.97 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.5, ease: 'easeInOut' } },
          }}
          style={{
            display: 'flex',
            gap: '3.5vw',
            width: '100%',
            maxWidth: 900,
            justifyContent: 'flex-start',
            margin: '2rem 0 0 0',
            borderTop: '1px solid #1a2a3a',
            paddingTop: 32,
            zIndex: 2,
          }}
        >
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <span style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#00c6fb',
                display: 'block',
              }}>{stat.value}</span>
              <span style={{ color: '#bdbdbd', fontWeight: 500, fontSize: '1rem', letterSpacing: '0.01em' }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #home {
            width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
            left: 0 !important;
            margin: 0 !important;
            overflow-x: hidden !important;
            flex-direction: column !important;
            align-items: center !important;
            padding-top: 80px !important;
            padding-bottom: 24px !important;
          }
          #home > div[style*='flex: 0 0 260px'] {
            margin-bottom: 2.2rem !important;
            width: 180px !important;
            height: 180px !important;
          }
          #home img {
            width: 150px !important;
            height: 150px !important;
          }
          #home h1 {
            font-size: 2rem !important;
          }
          #home > div[style*='padding-left: 40px'] {
            padding-left: 0 !important;
          }
          #home .stats-bar {
            justify-content: center !important;
          }
        }
        @media (max-width: 600px) {
          #home {
            padding: 1.2rem 0.5rem 1rem !important;
          }
          #home h1 {
            font-size: 1.3rem !important;
          }
          #home p {
            font-size: 1rem !important;
          }
          #home > div[style*='flex: 0 0 260px'] {
            width: 120px !important;
            height: 120px !important;
          }
          #home img {
            width: 90px !important;
            height: 90px !important;
          }
          #home .type-cursor {
            font-size: 1.1rem !important;
          }
          #home > div[style*='border-top'] {
            gap: 2rem !important;
            padding-top: 18px !important;
          }
        }
        @media (max-width: 400px) {
          #home {
            padding: 0.5rem 0.1rem 0.5rem !important;
          }
          #home h1 {
            font-size: 1.05rem !important;
          }
          #home p {
            font-size: 0.95rem !important;
          }
        }
        @media (max-width: 900px) {
          .contact-flex {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 2rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .contact-flex > div {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 400px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 600px) {
          .contact-flex > div {
            max-width: 100% !important;
          }
        }
        @media (max-width: 900px) {
          #home {
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
          }
        }
        @media (max-width: 600px) {
          #home {
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
          }
        }
      `}</style>
    </motion.section>
  )
} 