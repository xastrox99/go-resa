import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Database, Users, Boxes, Workflow, GitBranch, Network } from 'lucide-react'

const products = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "CRM NEO Engage",
    description: "Gérez vos relations clients efficacement",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Product 2",
    description: "Solution de gestion avancée",
  },
  {
    icon: <Boxes className="w-5 h-5" />,
    title: "Product 3",
    description: "Optimisez vos processus",
  },
]

const integrations = [
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "API Integration",
    description: "Connectez vos systèmes",
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: "Custom Solutions",
    description: "Solutions sur mesure",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Partner Network",
    description: "Rejoignez notre réseau",
  },
]

const DesktopNavbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavItem title="Produits" items={products} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      <NavItem title="Intégration" items={integrations} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      <NavLink href="#" title="À propos" />
      <NavLink href="#" title="Contactez-nous" />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-xl bg-[#FFBD5A] px-6 py-2.5 font-bold text-gray-800 shadow-sm transition-all hover:bg-[#E5A94F] hover:shadow-md text-lg"
      >
        Démo Gratuite
      </motion.button>
    </div>
  )
}

interface NavItemProps {
  title: string
  items: Array<{ icon: JSX.Element; title: string; description: string }>
  hoveredItem: string | null
  setHoveredItem: (item: string | null) => void
}

const NavItem: React.FC<NavItemProps> = ({ title, items, hoveredItem, setHoveredItem }) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredItem(title)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <button className="flex items-center space-x-1 text-gray-800 hover:text-purple-700 font-bold text-lg group-hover:text-purple-700">
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
          hoveredItem === title ? 'rotate-180' : ''
        }`} />
      </button>
      <AnimatePresence>
        {hoveredItem === title && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-lg"
          >
            {/* Dropdown Arrow */}
            <div className="absolute -top-2 left-5 w-4 h-4 bg-white transform rotate-45" />
            
            {/* Content Container */}
            <div className="relative bg-white rounded-lg p-2 space-y-1">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="mt-1 p-2.5 rounded-lg bg-purple-50 text-purple-600">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-0.5">{item.title}</div>
                    <div className="text-sm text-gray-500 leading-snug">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface NavLinkProps {
  href: string
  title: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => (
  <Link href={href} className="text-gray-800 hover:text-purple-700 font-bold text-lg">
    {title}
  </Link>
)

export default DesktopNavbar

