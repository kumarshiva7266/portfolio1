import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const gradient = 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)'

const projects = [
  {
    title: 'Face Recognition Attendance System',
    desc: 'Built with Python, OpenCV & Firebase, includes GUI, developer, and help sections.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80' // face recognition/AI
  },
  {
    title: 'EV India Website',
    desc: 'Showcases electric vehicles with top speed, range, and waiting time (900+ lines of code).',
    img: 'https://5.imimg.com/data5/SELLER/Default/2023/11/361114802/NP/AU/QD/5060873/commercial-ev-charging-station-1000x1000.jpg' // electric vehicle
  },
  {
    title: 'Stayly Hotel Booking Website',
    desc: 'Connected to Firebase with chatbot support and user-friendly booking UI.',
    img: 'https://bloomagency.in/wp-content/uploads/2025/01/booking_dot_com_hotel.webp' // updated hotel image
  },
  {
    title: 'Personal WhatsApp Clone',
    desc: 'Real-time group chat interface for 10 users with clean UI.',
    img: 'https://spravadigital.com/storage/images/blog/how-does-online-chat/image2.png' // chat/messages
  },
  {
    title: 'Solar Awareness Site',
    desc: 'Educates users on solar energy, recycling, and sustainability with rich content and visuals.',
    img: 'https://www.vasudha-foundation.org/wp-content/uploads/sunset-solar-energy-farm-plant-edited.jpg' // solar panel
  },
  {
    title: 'DNews Progressive Web App',
    desc: 'A news app that fetches real-time headlines via API and supports offline access.',
    img: 'https://cdn-daoob.nitrocdn.com/LCiYkAjyMYQllcWpSRewurPZnOGNoosN/assets/images/optimized/rev-5e03d09/arulmjoseph.com/wp-content/uploads/2017/11/Must-have-Features-Of-A-Best-Online-News-Portal-Design.jpg', // news/app
    bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' // example bg image
  }
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
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
      }}>
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
      <SectionHeading>My latest work</SectionHeading>
      {/* Projects grid with advanced animation */}
      <motion.div
        className="projects-grid"
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
        {projects.map((project, idx) => (
          <motion.div
            key={project.title + idx}
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
              background: project.title === 'DNews Progressive Web App'
                ? `#23232a url(${project.bg}) center/cover no-repeat`
                : '#23232a',
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
              position: 'relative',
              minHeight: 220,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              border: '2px solid #00c6fb',
              transition: 'box-shadow 0.2s, background 0.5s, color 0.5s',
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              background: 'rgba(24,24,27,0.85)',
              padding: '0.7rem 1.2rem',
              borderBottomLeftRadius: 18,
              borderBottomRightRadius: 18,
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#fff',
              letterSpacing: '0.01em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 8,
            }}>
              <span>{project.title}</span>
              <span style={{ fontWeight: 400, fontSize: '0.98rem', color: '#bdbdbd', marginTop: 2 }}>{project.desc}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #projects {
            width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
            left: 0 !important;
            margin: 0 !important;
            overflow-x: hidden !important;
          }
          #projects .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
            align-items: center !important;
          }
          #projects h2 {
            font-size: 1.5rem !important;
          }
          #projects .project-card {
            min-width: 0 !important;
            max-width: 100% !important;
          }
          #projects img {
            width: 100% !important;
            height: 140px !important;
            object-fit: cover !important;
          }
        }
        @media (max-width: 600px) {
          #projects {
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
          }
          #projects h2 {
            font-size: 1.1rem !important;
          }
          #projects .project-card {
            font-size: 0.98rem !important;
            padding: 1rem !important;
          }
          #projects img {
            height: 90px !important;
          }
        }
        @media (max-width: 500px) {
          #projects {
            padding: 0.5rem 0.1rem 0.5rem !important;
            min-height: auto !important;
            height: auto !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }
          #projects .projects-grid {
            gap: 0.7rem !important;
          }
          #projects .project-card {
            font-size: 0.93rem !important;
            padding: 0.7rem !important;
            min-width: 0 !important;
            max-width: 100% !important;
          }
          #projects img {
            height: 70px !important;
            border-radius: 10px !important;
          }
          #projects .project-card > div {
            padding: 0.5rem 0.7rem !important;
            font-size: 0.93rem !important;
          }
        }
        @media (max-width: 400px) {
          #projects {
            padding: 1rem 0.1rem 0.5rem !important;
          }
          #projects h2 {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </motion.section>
  )
} 