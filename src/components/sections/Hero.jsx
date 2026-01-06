import { motion } from 'framer-motion'
import { FaWhatsapp, FaAward, FaStar } from 'react-icons/fa'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-400" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg mb-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaAward className="text-accent-500" />
              <span className="text-sm font-semibold text-gray-700">
                Award-Winning Since 2019
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                Forever Living
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                with Osman Aden Hussein
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Award-winning Forever Living representative since 2019. Multiple awards, numerous credits, 
              and proven excellence in natural wellness products. Transform your health with nature's finest aloe vera.
            </p>

            {/* Stats Card */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Proven Excellence
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-accent-500">6+</span>
                <span className="text-lg text-gray-600">Years of Excellence Since 2019</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href="https://wa.me/13689976905"
                target="_blank"
                icon={<FaWhatsapp />}
              >
                WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/images/aloe 1.jpeg"
                  alt="Premium Aloe Vera Products"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/images/for.jpeg"
                  alt="Forever Living Company"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero

