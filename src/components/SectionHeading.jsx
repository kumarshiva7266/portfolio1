import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Thicker, glowing, more attractive S-curve SVG underline
const SCurveUnderline = () => (
  <motion.svg
    width="240"
    height="48"
    viewBox="0 0 240 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    style={{
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '-14px',
      zIndex: 1,
      pointerEvents: 'none',
    }}
  >
    {/* Glow */}
    <motion.path
      d="M20 18 C 70 60, 170 -10, 220 38"
      stroke="url(#sCurveGlow)"
      strokeWidth="18"
      strokeLinecap="round"
      fill="none"
      filter="url(#glow)"
      style={{ opacity: 0.45 }}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />
    {/* Main S-curve */}
    <motion.path
      d="M20 18 C 70 60, 170 -10, 220 38"
      stroke="url(#sCurveGradient)"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />
    {/* Subtle shadow */}
    <motion.path
      d="M20 18 C 70 60, 170 -10, 220 38"
      stroke="#000"
      strokeWidth="22"
      strokeLinecap="round"
      fill="none"
      style={{ opacity: 0.13, filter: 'blur(2.5px)' }}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />
    <defs>
      <linearGradient id="sCurveGradient" x1="20" y1="18" x2="220" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#d414c6" />
        <stop offset="1" stopColor="#ff90e8" />
      </linearGradient>
      <linearGradient id="sCurveGlow" x1="20" y1="18" x2="220" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff90e8" />
        <stop offset="1" stopColor="#d414c6" />
      </linearGradient>
      <filter id="glow" x="-30" y="-30" width="300" height="108" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </motion.svg>
)

export default function SectionHeading({ children, center = true }) {
  // Split children into words for staggered animation
  const words = typeof children === 'string' ? children.split(' ') : React.Children.toArray(children)
  const ref = useRef(null)
  const [highlight, setHighlight] = useState(false)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'inline-block',
        marginBottom: '2.5rem',
        textAlign: center ? 'center' : 'left',
        width: '100%',
        scrollMarginTop: '110px', // ensures header is visible below navbar
      }}
    >
      <motion.span
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: highlight ? '#00c6fb' : '#fff',
          background: highlight ? 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)' : undefined,
          WebkitBackgroundClip: highlight ? 'text' : undefined,
          WebkitTextFillColor: highlight ? 'transparent' : undefined,
          backgroundClip: highlight ? 'text' : undefined,
          position: 'relative',
          zIndex: 2,
          display: 'inline-block',
          lineHeight: 1.1,
          transition: 'color 0.3s, background 0.3s',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        onViewportEnter={() => {
          setHighlight(true)
          setTimeout(() => setHighlight(false), 1200)
        }}
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
            }}
            style={{ display: 'inline-block', marginRight: '0.35em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
      <SCurveUnderline />
    </div>
  )
} 