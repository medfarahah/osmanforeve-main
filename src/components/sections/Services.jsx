import { motion } from 'framer-motion'
import { FaLeaf, FaPills, FaSpa, FaComments } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const Services = () => {
  const services = [
    {
      icon: <FaLeaf className="text-4xl text-accent-500" />,
      title: 'Aloe Products',
      description: 'High-quality aloe-based wellness and skincare solutions. From pure aloe gel to specialized formulations for daily health and beauty needs.',
      features: ['Pure Aloe Gel', 'Skincare Solutions', 'Daily Wellness', 'Natural Formulas'],
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: <FaPills className="text-4xl text-blue-500" />,
      title: 'Nutrition Support',
      description: 'Complete range of nutritional supplements designed to support healthy routines. Vitamins, minerals, and natural supplements for optimal health.',
      features: ['Vitamins & Minerals', 'Natural Supplements', 'Health Support', 'Daily Nutrition'],
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <FaSpa className="text-4xl text-purple-500" />,
      title: 'Skincare',
      description: 'Natural skincare essentials with aloe vera. Clean, effective formulas for all skin types. From cleansers to moisturizers and specialized treatments.',
      features: ['All Skin Types', 'Natural Ingredients', 'Complete Care', 'Effective Results'],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: <FaComments className="text-4xl text-orange-500" />,
      title: 'Consultation',
      description: 'Personal product guidance and support. Our team helps you choose the right products for your specific needs and wellness goals.',
      features: ['Expert Advice', 'Product Selection', 'Wellness Goals', 'Personal Support'],
      gradient: 'from-orange-400 to-red-500'
    },
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <SectionTitle
          badge={
            <>
              <FaLeaf className="text-accent-500" />
              <span>Our Services</span>
            </>
          }
          title="Comprehensive Wellness Solutions"
          subtitle="Tailored services to support your health and wellness journey with natural products"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} delay={index * 0.1} className="group">
              <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10 flex items-center justify-center mb-6 group-hover:opacity-20 transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="absolute">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold text-sm hover:underline inline-flex items-center gap-2 group`}
                >
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Wellness Journey?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Get personalized guidance and discover which products are right for you
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-300"
          >
            Get Free Consultation
          </button>
        </motion.div>
      </Container>
    </section>
  )
}

export default Services

