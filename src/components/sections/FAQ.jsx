import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLeaf, FaQuestionCircle, FaChevronDown, FaEnvelope } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-primary-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
      >
        <FaQuestionCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FaChevronDown className="text-gray-400 text-xl" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-16 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: 'What products are important for digestive health?',
      answer: 'Aloe Vera Gel (99.7% pure) is essential for digestive health. This natural remedy supports healthy digestion, helps maintain digestive balance, boosts natural energy levels, and promotes overall wellness. It\'s rich in vitamins, minerals, and amino acids that support your digestive system\'s natural functions.'
    },
    {
      question: 'How do I know which product is right for my health needs?',
      answer: 'Each Forever Living product serves specific health purposes. Aloe Vera Gel supports digestion and energy. Aloe Vera Gelly is essential for skin health and healing. Forever Aloe Drink supports immunity and body balance. Understanding your health goals helps determine which products are most important for you. Contact us for personalized guidance.'
    },
    {
      question: 'Are Forever Living products safe and natural?',
      answer: 'Yes, absolutely safe and 100% natural! Forever Living products are sourced from our own aloe fields, ensuring purity and quality. The company follows rigorous quality control processes and all products are tested and proven safe for daily use. The importance of using natural, pure ingredients is at the core of Forever Living\'s mission.'
    },
    {
      question: 'Why is Aloe Vera important for health?',
      answer: 'Aloe Vera is one of nature\'s most powerful healing plants. It contains over 200 active compounds including vitamins, minerals, enzymes, and amino acids. It\'s essential for supporting digestion, boosting immunity, promoting skin health, and maintaining overall wellness. The 99.7% pure aloe vera in our products ensures you get maximum natural benefits.'
    },
    {
      question: 'How important is it to use natural products for wellness?',
      answer: 'Natural products are crucial for long-term health. Unlike synthetic alternatives, natural products work with your body\'s natural processes without harmful side effects. Forever Living\'s commitment to 100% natural ingredients ensures you\'re supporting your health in the safest, most effective way possible.'
    },
    {
      question: 'What makes Forever Living products important for daily health?',
      answer: 'Forever Living products provide essential daily support. Regular use of aloe vera products helps maintain digestive health, supports immune function, promotes skin wellness, and provides natural energy. These products are important because they offer a natural way to support your body\'s daily needs and long-term health goals.'
    },
    {
      question: 'How do I use Aloe Vera products effectively?',
      answer: 'Proper usage is important for maximum effectiveness. Aloe Vera Gel is best taken daily for digestive support. Aloe Vera Gelly should be applied directly to skin for healing benefits. Forever Aloe Drink provides daily immune support. Consistency and following product instructions are key to experiencing the full benefits.'
    },
    {
      question: 'Why should I choose Forever Living products over other brands?',
      answer: 'Forever Living\'s commitment to quality and purity makes it important. We own our own aloe fields, use a patented stabilization process to preserve natural benefits, and maintain 99.7% purity. This ensures you\'re getting the most effective natural products available. The company\'s 40+ years of experience and global trust demonstrate the importance and reliability of Forever Living products.'
    },
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <Container size="small">
        <SectionTitle
          badge={
            <>
              <FaLeaf className="text-accent-500" />
              <span>Natural Wellness Products - Understanding Their Importance</span>
            </>
          }
          title="Frequently Asked Questions"
          subtitle="Learn about the importance of Forever Living products and how these natural remedies can support your health and wellness"
        />

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-8 lg:p-12 text-center border-2 border-primary-100 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions About Our Products?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Understanding the <strong className="text-primary-500">importance of Forever Living products</strong> is 
            essential for making informed health decisions. Contact us to learn more about how these natural 
            remedies can support your wellness journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              icon={<FaEnvelope />}
            >
              Contact Us
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
            >
              Contact Form
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default FAQ

