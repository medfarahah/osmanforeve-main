import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaMedal } from 'react-icons/fa'
import Container from '../ui/Container'
import Card from '../ui/Card'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      number: '6+',
      label: 'Years of Excellence',
      sublabel: 'Since 2019',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FaAward className="text-4xl text-blue-500" />,
      number: 'Multiple',
      label: 'Awards Won',
      sublabel: 'Various Times',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaMedal className="text-4xl text-purple-500" />,
      number: 'Many',
      label: 'Credits Earned',
      sublabel: 'Recognitions',
      color: 'from-purple-500 to-pink-500'
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 px-4 py-2 rounded-full border border-yellow-200 mb-4">
            <FaTrophy className="text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">
              Outstanding Achievements & Awards
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} delay={index * 0.1} className="relative overflow-hidden group">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-8 text-center">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 shadow-inner"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Number */}
                <h3 className={`text-4xl lg:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${achievement.color}`}>
                  {achievement.number}
                </h3>

                {/* Label */}
                <p className="text-gray-900 font-semibold text-lg mb-1">
                  {achievement.label}
                </p>
                <p className="text-gray-500 text-sm">
                  {achievement.sublabel}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Achievements

