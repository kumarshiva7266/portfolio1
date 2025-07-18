import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: '0.1rem 5',
        background: 'linear-gradient(90deg, #75758cff 0%, #1c1d1eff 100%)',
        color: '#222',
        textAlign: 'center',
        fontFamily: 'Poppins, Inter, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '1rem',
        borderTop: '2px solid #8196c0ff',
        letterSpacing: '0.01em',
      }}
    >
      &copy; {new Date().getFullYear()} My Portfolio <span style={{ color: '#141417ff' }}>♥</span>
    </motion.footer>
  )
} 