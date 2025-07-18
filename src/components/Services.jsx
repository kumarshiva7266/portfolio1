import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const titleColors = [
  'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
  'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
  'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
  'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
  'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
  'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
]
const hoverBg = [
  'rgba(0,198,251,0.10)',
  'rgba(0,198,251,0.10)',
  'rgba(0,198,251,0.10)',
  'rgba(0,198,251,0.10)',
  'rgba(0,198,251,0.10)',
  'rgba(0,198,251,0.10)',
]

const services = [
  {
    title: 'Web Design',
    desc: 'Web design involves creating visually appealing and user-friendly layouts for websites. I specialize in crafting responsive, accessible, and engaging designs using HTML, CSS, and design tools like Figma and Adobe XD.',
    short: 'Crafting beautiful, responsive, and user-friendly websites.'
  },
  {
    title: 'Graphics Design',
    desc: 'Graphics design focuses on creating visual content to communicate messages. I am skilled in designing logos, banners, posters, and branding materials using tools like Adobe Photoshop and Illustrator.',
    short: 'Designing logos, banners, and branding materials.'
  },
  {
    title: 'Python Programming',
    desc: 'Python is a versatile programming language widely used in AI and data science. I use Python for building web applications, automating tasks, and developing machine learning models efficiently.',
    short: 'Building apps, automations, and ML models with Python.'
  },
  {
    title: 'App Design',
    desc: 'App design involves creating intuitive and interactive user interfaces for mobile or web applications. I excel at designing seamless user journeys and UI components using modern design principles and prototyping tools.',
    short: 'Designing intuitive and interactive app interfaces.'
  },
  {
    title: 'Machine Learning',
    desc: 'Machine Learning focuses on building models that can learn from data and make predictions. I work with Python, scikit-learn, and TensorFlow to develop ML solutions for real-world problems.',
    short: 'Building models that learn from data and predict.'
  },
  {
    title: 'Data Analysis',
    desc: 'Data Analysis involves extracting meaningful insights from data. I use tools like Python (Pandas, NumPy), Jupyter, and visualization libraries to analyze datasets and support data-driven decisions.',
    short: 'Extracting insights from data using Python tools.'
  }
]

// Add keywords for each service for typewriter animation
const serviceKeywords = [
  ['HTML', 'CSS', 'Figma', 'Adobe XD', 'Responsive'],
  ['Photoshop', 'Illustrator', 'Branding', 'Logos', 'Banners'],
  ['Python', 'Automation', 'Flask', 'AI', 'ML'],
  ['UI', 'UX', 'Prototyping', 'Wireframes', 'Mobile'],
  ['scikit-learn', 'TensorFlow', 'Prediction', 'Data', 'AI'],
  ['Pandas', 'NumPy', 'Jupyter', 'Visualization', 'Insights']
]

// Typewriter animation hook (copied from Hero)
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

export default function Services() {
  const [expanded, setExpanded] = useState(null)
  const skillPhrases = useMemo(() => services.map(s => `Specialized in ${s.title}`), [])
  const animatedSkill = useTypewriter(skillPhrases)
  return (
    <motion.section
      id="services"
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
            staggerChildren: 0.12, // restore faster stagger
          },
        },
      }}
      style={{
        position: 'relative',
        background: 'rgba(24,24,27,0.85)',
        color: '#fff',
        minHeight: 'auto', // allow section to grow
        height: 'auto', // allow section to grow
        width: '100vw',
        margin: 0,
        padding: 0,
        paddingTop: '80px', // smaller top padding
        paddingBottom: '40px', // add bottom padding
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, Inter, Arial, sans-serif',
        overflow: 'hidden',
      }}
      exit={{ opacity: 0, y: 40, transition: { duration: 0.6, ease: 'easeInOut' } }}
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
        background: 'rgba(72, 72, 85, 0.72)',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
      {/* Headline with swoosh underline */}
      <SectionHeading>My Services</SectionHeading>
      <div style={{ textAlign: 'center', marginBottom: 18, fontSize: '1.25rem', fontWeight: 600, color: '#00c6fb', letterSpacing: '0.01em', minHeight: 32 }}>
        <span style={{ color: '#fff', fontWeight: 700 }}>{animatedSkill}</span>
        <span className="type-cursor">|</span>
      </div>
      {/* Services grid with advanced animation */}
      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: 1100,
        }}
      >
        {services.map((service, idx) => {
          const keywords = serviceKeywords[idx] || [];
          const animatedKeyword = useTypewriter(keywords.length ? keywords : ['Skill']);
          return (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97, rotate: 6 },
                visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.7, type: 'spring', delay: idx * 0.05, ease: 'easeInOut' } },
              }}
              whileHover={{
                scale: 1.07,
                rotate: -2,
                boxShadow: '0 8px 32px rgba(0,198,251,0.18)'
              }}
              style={{
                background: '#23232a',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                position: 'relative',
                minHeight: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                border: '2px solid #00c6fb',
                transition: 'box-shadow 0.2s, background 0.5s, color 0.5s',
                cursor: 'pointer',
                padding: '1.5rem 1.5rem 1rem 1.5rem',
              }}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              <div style={{ fontSize: '1.08rem', color: '#00c6fb', fontWeight: 600, marginBottom: 6, minHeight: 22 }}>
                <span>{animatedKeyword}</span><span className="type-cursor">|</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#00c6fb', marginBottom: 8 }}>{service.title}</h3>
              <p style={{ color: '#bdbdbd', fontWeight: 500, fontSize: '1.05rem', margin: 0, marginBottom: expanded === idx ? 12 : 0 }}>
                {expanded === idx ? service.desc : service.short}
              </p>
              <span
                style={{
                  color: '#00c6fb',
                  fontSize: '1.02rem',
                  fontWeight: 500,
                  marginTop: 12,
                  display: 'block',
                  cursor: 'pointer',
                  userSelect: 'none',
                  letterSpacing: '0.01em',
                }}
              >
                {expanded === idx ? 'Show less  ' : 'Read more...  '}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #services {
            width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
            left: 0 !important;
            margin: 0 !important;
            overflow-x: hidden !important;
          }
          #services .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
            align-items: center !important;
          }
          #services h2 {
            font-size: 1.5rem !important;
          }
          #services .service-box {
            min-width: 0 !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          #services {
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
          }
          #services h2 {
            font-size: 1.1rem !important;
          }
          #services .service-box {
            font-size: 0.98rem !important;
            padding: 1rem !important;
          }
        }
        @media (max-width: 400px) {
          #services {
            padding: 1rem 0.1rem 0.5rem !important;
          }
          #services h2 {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </motion.section>
  )
} 