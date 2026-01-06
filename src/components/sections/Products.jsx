import { motion } from 'framer-motion'
import { FaLeaf, FaInfoCircle, FaWhatsapp } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Products = () => {
  const products = [
    {
      image: '/images/aloe 1.jpeg',
      title: 'Aloe Vera Gel',
      subtitle: '100% Pure Aloe Vera',
      description: 'This natural remedy is essential for digestive health. It supports healthy digestion, boosts natural energy levels, and promotes overall wellness. Rich in vitamins, minerals, and amino acids, this product helps maintain your body\'s natural balance and supports your immune system.',
      benefits: ['Digestive Support', 'Energy Boost', 'Immune System', 'Natural Balance'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      image: '/images/aloe 1.jpeg',
      title: 'Aloe Vera Gelly',
      subtitle: 'Natural Skin Healing Solution',
      description: 'This soothing gel is crucial for skin health and healing. It provides deep hydration, offers relief from minor burns, cuts, and skin irritation. Contains stabilized aloe vera that preserves all natural healing properties for maximum effectiveness.',
      benefits: ['Skin Healing', 'Deep Hydration', 'Burn Relief', 'Natural Properties'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      image: '/images/aloe 1.jpeg',
      title: 'Forever Aloe Drink',
      subtitle: 'Daily Wellness Essential',
      description: 'This natural drink is vital for maintaining strong immunity and body balance. It provides daily natural support for your immune system, helps maintain optimal health, and supports your body\'s natural healing processes.',
      benefits: ['Immunity Support', 'Body Balance', 'Daily Wellness', 'Natural Healing'],
      color: 'from-purple-500 to-pink-500'
    },
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFAQ = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Generate WhatsApp URL with product information
  const getWhatsAppLink = (product) => {
    const message = `Hi! I'm interested in *${product.title}* - ${product.subtitle}

I would like to know more about:
${product.benefits.map(benefit => `✓ ${benefit}`).join('\n')}

Could you please provide more information about this product?`
    
    return `https://wa.me/13689976905?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="products" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle
          badge={
            <>
              <FaLeaf className="text-accent-500" />
              <span>Natural Wellness Products</span>
            </>
          }
          title="Featured Products"
          subtitle="Discover our best-selling natural wellness products powered by 99.7% pure Aloe Vera"
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <Card key={index} delay={index * 0.15} className="group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating badge */}
                <motion.div
                  className={`absolute top-4 right-4 bg-gradient-to-r ${product.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  99.7% Pure
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${product.color} mb-4`}>
                  {product.subtitle}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 text-sm font-semibold mb-6 text-gray-600">
                  <button
                    onClick={scrollToFAQ}
                    className="flex items-center gap-1 text-accent-500 hover:text-accent-600 transition-colors"
                  >
                    <FaInfoCircle />
                    Learn more
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={scrollToContact}
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    Get information
                  </button>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="whatsapp"
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    icon={<FaWhatsapp />}
                    className="flex-1"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={scrollToContact}
                    className="flex-1"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Need help choosing the right product? Our team is here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" onClick={scrollToContact}>
              Contact Us
            </Button>
            <Button variant="secondary" onClick={scrollToFAQ}>
              View FAQ
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Products

