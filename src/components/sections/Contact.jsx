import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa'
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
  const [submitError, setSubmitError] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitSuccess(false)

    try {
      const formDataToSend = new FormData(e.target)
      formDataToSend.append("access_key", "2b8e1037-bf34-4727-93a8-5d7089a678e2")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError(true)
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(true)
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
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
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      content: '+1 (368) 997-6905',
      link: 'tel:+13689976905',
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-500'
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
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${info.textColor} hover:underline font-medium dark:text-gray-300`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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
                    className="bg-accent-50 dark:bg-accent-900/20 border-2 border-accent-500 text-accent-700 dark:text-accent-400 px-6 py-4 rounded-xl mb-6"
                  >
                    <p className="font-semibold">Thank you, {formData.name || 'there'}!</p>
                    <p className="text-sm mt-1">Your message has been received successfully. We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 text-red-700 dark:text-red-400 px-6 py-4 rounded-xl mb-6"
                  >
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm mt-1">Please try again or contact us directly via email.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                        errors.name
                          ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                        errors.email
                          ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Your Question or Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Ask about products, usage, benefits, or anything else you'd like to know..."
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                        errors.message
                          ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500/20'
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
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Or contact directly:</p>
                    <Button
                      variant="secondary"
                      href="mailto:Cengsadik2023@Gmail.com"
                      icon={<FaEnvelope />}
                      className="w-full"
                    >
                      Email Us
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

