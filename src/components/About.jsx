import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const gradient = 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)'

const skills = [
  { name: 'HTML & CSS', value: 95 },
  { name: 'React JS', value: 90 },
  { name: 'JavaScript', value: 92 },
  { name: 'Next JS', value: 85 },
]

const stats = [
  { value: '3+', label: 'YEARS OF EXPERIENCE' },
  { value: '30+', label: 'PROJECTS COMPLETED' },
  { value: '10+', label: 'HAPPY CLIENTS' },
]

export default function About() {
  return (
    <section
      id="about"
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
      <SectionHeading>About me</SectionHeading>
      {/* Main content */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '3rem',
        width: '100%',
        maxWidth: 1100,
        marginBottom: '2.5rem',
      }}>
        {/* Profile image with advanced animation */}
        <motion.img
          src="/bi.jpg"
          alt="Profile"
          initial={{ opacity: 0, x: -60, rotate: -15, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 80, damping: 18 }}
          style={{
            width: 240,
            height: 260,
            borderRadius: '18px',
            objectFit: 'cover',
            boxShadow: '0 4px 24px rgba(0,198,251,0.18)',
            background: '#23232a',
            flexShrink: 0,
          }}
        />
        {/* Text and skills with staggered/zoom/fade animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          style={{ flex: 1, minWidth: 260 }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
            }}
            style={{ fontSize: '1.08rem', marginBottom: 8 }}
          >
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.1 } },
            }}
            style={{ fontSize: '1.08rem', marginBottom: 24 }}
          >
            My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
          </motion.p>
          {/* Skill bars with zoom/fade animation */}
          <div style={{ marginTop: 16 }}>
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 + idx * 0.15 }}
                style={{ marginBottom: 18 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ color: '#00c6fb', fontWeight: 600 }}>{skill.value}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 + idx * 0.2 }}
                  style={{
                    height: 8,
                    borderRadius: 6,
                    background: gradient,
                    boxShadow: '0 2px 8px rgba(0,198,251,0.08)',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '7vw',
          width: '100%',
          maxWidth: 900,
          marginTop: 24,
          borderTop: '1px solid #23232a',
          paddingTop: 32,
        }}
      >
        {stats.map(stat => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
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
          #about {
            width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
            left: 0 !important;
            margin: 0 !important;
            overflow-x: hidden !important;
          }
          #about > div[style*='flex-direction: row'] {
            flex-direction: column !important;
            align-items: center !important;
            gap: 2rem !important;
          }
          #about img {
            width: 180px !important;
            height: 180px !important;
          }
        }
        @media (max-width: 600px) {
          #about {
            padding: 2rem 0.5rem 1rem !important;
          }
          #about h2 {
            font-size: 1.5rem !important;
          }
          #about img {
            width: 120px !important;
            height: 120px !important;
          }
          #about > div[style*='border-top'] {
            gap: 2rem !important;
            padding-top: 18px !important;
          }
        }
        @media (max-width: 400px) {
          #about {
            padding: 1rem 0.1rem 0.5rem !important;
          }
          #about h2 {
            font-size: 1.1rem !important;
          }
        }
        @media (max-width: 900px) {
          #about {
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
          }
        }
        @media (max-width: 600px) {
          #about {
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
          }
        }
      `}</style>
    </section>
  )
} 