import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import Container from '../ui/Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo2.jpeg" 
                alt="Forever Living Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <div className="text-lg font-bold">Forever Living</div>
                <div className="text-xs text-gray-400">Osman Aden Hussein</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Natural wellness products for a better lifestyle. Trusted by millions worldwide since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'Services', 'About', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Aloe Vera Gel</li>
              <li>Aloe Vera Gelly</li>
              <li>Forever Aloe Drink</li>
              <li>Skincare Products</li>
              <li>Nutritional Supplements</li>
              <li>Wellness Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+13689976905"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <FaPhone className="text-lg group-hover:scale-110 transition-transform" />
                  +1 (368) 997-6905
                </a>
              </li>
              <li>
                <a
                  href="mailto:Cengsadik2023@Gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <FaEnvelope className="text-lg group-hover:scale-110 transition-transform" />
                  Cengsadik2023@Gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-lg" />
                Ankara, Türkiye
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Forever Living Company. All rights reserved. | Osman Aden Hussein
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

