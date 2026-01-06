import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      content: 'Chat with Osman',
      link: 'https://wa.me/13689976905',
      color: 'from-[#25D366] to-[#20BA5A]',
      textColor: 'text-[#25D366]'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      content: 'Cengsadik2023@Gmail.com',
      link: 'mailto:Cengsadik2023@Gmail.com',
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-500'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      content: 'Ankara, Türkiye',
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-500'
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with us for product inquiries and support"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} delay={index * 0.1} hover={false}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} opacity-10 flex items-center justify-center flex-shrink-0`}>
                      <div className={`absolute ${info.textColor}`}>
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${info.textColor} hover:underline font-medium`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">
                          {info.content}
                        </p>
                      )}
                      {info.title === 'WhatsApp' && (
                        <p className="text-sm text-gray-500 mt-1">
                          Direct contact to Osman Aden Hussein
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick WhatsApp CTA */}
            <Card delay={0.3} className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white border-none">
              <div className="p-6 text-center">
                <FaWhatsapp className="text-5xl mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-bold mb-2">Prefer Instant Chat?</h4>
                <p className="text-white/90 mb-4 text-sm">
                  Get immediate responses on WhatsApp
                </p>
                <a
                  href="https://wa.me/13689976905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#25D366] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card delay={0.2} hover={false}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Send a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Have questions about the importance of our products? Need information about natural remedies? 
                  We'll help you understand which Forever Living products are essential for your health and wellness needs.
                </p>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-accent-50 border-2 border-accent-500 text-accent-700 px-6 py-4 rounded-xl mb-6"
                  >
                    <p className="font-semibold">Thank you, {formData.name || 'there'}!</p>
                    <p className="text-sm mt-1">Your message has been received. We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Question or Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Ask about products, usage, benefits, or anything else you'd like to know..."
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 resize-none ${
                        errors.message
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={<FaPaperPlane />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Alternative contact */}
                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600 mb-3">Or contact directly:</p>
                    <Button
                      variant="whatsapp"
                      href="https://wa.me/13689976905"
                      target="_blank"
                      icon={<FaWhatsapp />}
                      className="w-full"
                    >
                      WhatsApp Contact
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact

