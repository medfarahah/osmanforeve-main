import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  target,
  icon,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4'
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/30 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5',
    secondary: 'bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500/30 hover:-translate-y-0.5',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500/30 shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500/30',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BA5A] focus:ring-[#25D366]/30 shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  const content = (
    <>
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </>
  )
  
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button

