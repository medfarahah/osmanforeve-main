import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Achievements from './components/sections/Achievements'
import Products from './components/sections/Products'
import Services from './components/sections/Services'
import About from './components/sections/About'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'services', 'about', 'faq', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Achievements />
        <Products />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}

export default App

