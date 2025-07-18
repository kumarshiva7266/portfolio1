import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const gradient = 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)'

const contactIcons = [
  { icon: '✉️', label: 'Email', value: 'shiva.cloudray0303@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 726-699-0591' },
  { icon: '📍', label: 'Location', value: 'India-Hyderabad' },
]

export default function Contact() {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setSent(false)
    const formData = new FormData(form.current)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      if (res.ok) {
        setSent(true)
        form.current.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.97, y: 40 },
        visible: {
          opacity: 1,
          scale: 1,
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
        position: 'relative',
        background: 'rgba(24,24,27,0.85)',
        color: '#fff',
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        paddingTop: '110px', // ensure content is below navbar
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, Inter, Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Blurred blue background image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'url(https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
        filter: 'blur(18px) saturate(1.2)',
        opacity: 0.38,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(24,24,27,0.72)',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
      {/* Headline with swoosh underline */}
      <SectionHeading>Get in touch</SectionHeading>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '3rem',
          width: '100%',
          maxWidth: 1100,
        }}
      >
        {/* Left: Contact Info with animated icons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -60, rotate: -8 },
            visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, type: 'spring', ease: 'easeInOut' } },
          }}
          style={{ flex: 1, minWidth: 260 }}
        >
          <h3 style={{
            fontSize: '2.1rem',
            fontWeight: 700,
            marginBottom: 12,
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}>Let's talk</h3>
          <p style={{ color: '#fff', fontSize: '1.08rem', marginBottom: 18 }}>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div style={{ color: '#fff', fontSize: '1.08rem', marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {contactIcons.map((item, idx) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: -30, rotate: -10 },
                  visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.7 + idx * 0.1, ease: 'easeInOut' } },
                }}
                style={{ display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 + idx * 0.3, ease: 'easeInOut' }}
                  style={{ fontSize: '1.6rem', display: 'inline-block' }}
                >{item.icon}</motion.span>
                <span>{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Right: Contact Form with advanced effects */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 60, rotate: 8 },
            visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, type: 'spring', ease: 'easeInOut' } },
          }}
          whileHover={{ scale: 1.04, rotate: -2, boxShadow: '0 8px 32px #00c6fb55' }}
          style={{ flex: 1, minWidth: 260, position: 'relative', zIndex: 2 }}
        >
          {/* Glowing animated border */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: -8,
              left: -8,
              right: -8,
              bottom: -8,
              borderRadius: 18,
              background: 'conic-gradient(from 0deg, #00c6fb, #005bea, #d414c6, #ff9900, #00c6fb)',
              filter: 'blur(8px)',
              opacity: 0.5,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%', background: 'rgba(24,24,27,0.92)', borderRadius: 16, padding: '2rem 1.2rem', position: 'relative', zIndex: 2, boxShadow: '0 4px 24px #00c6fb22' }}>
            <input type="hidden" name="access_key" value="8ff712a7-7db5-41c9-b086-9c290782575e" />
            <div>
              <label htmlFor="user_name" style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Your Name</label>
              <input type="text" name="name" id="user_name" placeholder="Enter your name" required style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: 'none', background: '#23232a', color: '#fff', fontSize: '1.08rem', marginTop: 4, boxShadow: '0 2px 8px #00c6fb22' }} />
            </div>
            <div>
              <label htmlFor="user_email" style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Your Email</label>
              <input type="email" name="email" id="user_email" placeholder="Enter your email" required style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: 'none', background: '#23232a', color: '#fff', fontSize: '1.08rem', marginTop: 4, boxShadow: '0 2px 8px #00c6fb22' }} />
            </div>
            <div>
              <label htmlFor="message" style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Write your message here</label>
              <textarea name="message" id="message" placeholder="Enter your message" required style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: 'none', background: '#23232a', color: '#fff', fontSize: '1.08rem', minHeight: 120, marginTop: 4, boxShadow: '0 2px 8px #00c6fb22' }} />
            </div>
            <motion.button
              whileHover={{ scale: 1.08, background: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)', color: '#fff', boxShadow: '0 4px 16px #00c6fb55' }}
              type="submit"
              disabled={loading}
              style={{ padding: '0.9rem', background: gradient, color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '1.08rem', cursor: loading ? 'not-allowed' : 'pointer', marginTop: 8, transition: 'background 0.2s, color 0.2s', boxShadow: '0 2px 8px #00c6fb22' }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            {sent && <span style={{ color: 'lime', marginTop: '0.5rem' }}>Message sent!</span>}
            {error && <span style={{ color: 'red', marginTop: '0.5rem' }}>Something went wrong. Please try again.</span>}
          </form>
        </motion.div>
      </motion.div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #contact {
            width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
            left: 0 !important;
            margin: 0 !important;
            overflow-x: hidden !important;
            padding: 2rem 1rem 1rem !important;
          }
          #contact > div {
            flex-direction: column !important;
            gap: 2rem !important;
            align-items: center !important;
            width: 100% !important;
          }
          #contact form {
            width: 100% !important;
            max-width: 400px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 1rem !important;
          }
          #contact input, #contact textarea {
            width: 100% !important;
            font-size: 1rem !important;
            padding: 0.9rem 1rem !important;
            box-sizing: border-box !important;
          }
          #contact button {
            width: 100% !important;
            font-size: 1.1rem !important;
            padding: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          #contact {
            padding: 1.2rem 0.5rem 1rem !important;
          }
          #contact h2 {
            font-size: 1.1rem !important;
          }
          #contact form {
            max-width: 100% !important;
          }
          #contact input, #contact textarea {
            font-size: 0.98rem !important;
            padding: 0.7rem 0.7rem !important;
          }
          #contact button {
            font-size: 1rem !important;
            padding: 0.8rem !important;
          }
        }
        @media (max-width: 400px) {
          #contact {
            padding: 0.7rem 0.1rem 0.5rem !important;
          }
          #contact h2 {
            font-size: 0.95rem !important;
          }
          #contact form {
            gap: 0.7rem !important;
          }
          #contact input, #contact textarea {
            font-size: 0.95rem !important;
            padding: 0.5rem 0.5rem !important;
          }
          #contact button {
            font-size: 0.95rem !important;
            padding: 0.6rem !important;
          }
        }
      `}</style>
    </motion.section>
  )
} 