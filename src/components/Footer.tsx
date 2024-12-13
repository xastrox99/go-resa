import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/goresa' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/goresa' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/goresa' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/goresa' },
]

const contactInfo = [
  { icon: Mail, text: 'contact@goresa.com' },
  { icon: Phone, text: '+33 1 23 45 67 89' },
  { icon: MapPin, text: '123 Rue de la Paix, 75001 Paris, France' },
]

const footerLinks = [
  { 
    title: 'Produits', 
    links: [
      { text: 'CRM NEO Engage', href: '/produits/crm-neo-engage' },
      { text: 'Système Web Résa', href: '/produits/systeme-web-resa' },
      { text: 'App Go Résa', href: '/produits/app-go-resa' },
      { text: 'Chatbot Chatbox', href: '/produits/chatbot-chatbox' }
    ]
  },
  { 
    title: 'Entreprise', 
    links: [
      { text: 'À propos', href: '/a-propos' },
      { text: 'Partenaires', href: '/integration/partner-network' }
    ]
  },
  { 
    title: 'Ressources', 
    links: [
      { text: 'Guides', href: '/ressources/guides' },
      { text: 'Support', href: '/contact' }
    ]
  },
  { 
    title: 'Légal', 
    links: [
      { text: 'Conditions d\'utilisation', href: '/legal/conditions-utilisation' },
      { text: 'Politique de confidentialité', href: '/legal/politique-confidentialite' }
    ]
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <img src="/images/2.svg" alt="GoResa Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-gray-900">GoResa</span>
            </Link>
            <p className="text-gray-600">
              Solutions innovantes de gestion pour les établissements de tous types.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-[#4C206A]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{column.title}</h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-base text-gray-600 hover:text-[#4C206A]">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="space-y-2 md:space-y-0 md:flex md:space-x-6">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-center text-gray-600">
                  <item.icon className="h-5 w-5 mr-2 text-[#4C206A]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-base text-gray-400">&copy; 2024 GoResa. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

