import { motion } from 'framer-motion'
import { FaEnvelope, FaUserTie, FaBuilding, FaCheckCircle } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'

const About = () => {
  const aboutCards = [
    {
      image: '/images/for.jpeg',
      icon: <FaUserTie className="text-3xl" />,
      title: 'About Osman Aden Hussein',
      description: 'Experienced Forever Living representative since 2019. Multiple award winner with numerous credits and recognitions. Osman understands the importance of Forever Living and is dedicated to providing excellent service and helping customers achieve their wellness goals.',
      highlights: ['Since 2019', 'Award Winner', 'Expert Guidance', 'Dedicated Service'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      image: '/images/aloe 1.jpeg',
      icon: <FaBuilding className="text-3xl" />,
      title: 'Our Story',
      description: 'Forever Living Products was founded with a mission to bring the healing power of aloe vera to people worldwide. We own and operate our own aloe fields, ensuring quality and purity in every product. Osman knows the company\'s history and importance.',
      highlights: ['Own Aloe Fields', 'Global Presence', 'Quality Control', '40+ Years Legacy'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      image: '/images/aloe 1.jpeg',
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Why Choose Us',
      description: '100% natural ingredients, premium quality, global trust, science-backed products, and personal support. Trusted by millions in over 160 countries for over 40 years. Osman can explain why Forever Living is important and help you understand the benefits.',
      highlights: ['100% Natural', '160+ Countries', 'Science-Backed', 'Trusted Quality'],
      gradient: 'from-purple-500 to-pink-500'
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionTitle
          badge={
            <>
              <FaUserTie className="text-primary-500" />
              <span>About Us</span>
            </>
          }
          title="About Forever Living"
          subtitle="Your trusted partner in natural wellness and healthy living"
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {aboutCards.map((card, index) => (
            <Card key={index} delay={index * 0.15} className="group flex flex-col">
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`} />
                
                {/* Floating icon */}
                <motion.div
                  className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-white text-gray-700 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {card.icon}
                </motion.div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {card.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`} />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  icon={<FaEnvelope />}
                  className="w-full"
                  size="sm"
                >
                  Contact
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '40+', label: 'Years Experience' },
              { number: '160+', label: 'Countries' },
              { number: '99.7%', label: 'Pure Aloe Vera' },
              { number: 'Millions', label: 'Satisfied Customers' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default About

