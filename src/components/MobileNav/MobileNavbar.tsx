import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Database, Users, Boxes, Workflow, GitBranch, Network } from 'lucide-react';

interface MobileNavbarProps {
  closeMobileNavbar: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ closeMobileNavbar }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const products = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "CRM NEO Engage",
      description: "Gérez vos relations clients efficacement",
      href: "/produits/crm-neo-engage",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Système Web Résa",
      description: "Solution de gestion avancée",
      href: "/produits/systeme-web-resa",
    },
    {
      icon: <Boxes className="w-5 h-5" />,
      title: "App Go Résa",
      description: "Optimisez vos processus",
      href: "/produits/app-go-resa",
    },
  ];

  const integrations = [
    {
      icon: <Workflow className="w-5 h-5" />,
      title: "API Integration",
      description: "Connectez vos systèmes",
      href: "#",
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Custom Solutions",
      description: "Solutions sur mesure",
      href: "#",
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Partner Network",
      description: "Rejoignez notre réseau",
      href: "#",
    },
  ];

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="absolute left-0 top-0 z-10 h-screen w-full bg-white md:hidden pt-20">
      <div className="flex flex-col gap-4 p-6 pt-24">
        {/* Produits Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown('produits')}
            className="flex items-center justify-between w-full text-2xl font-semibold text-black hover:text-purple-700 pb-4 border-b border-gray-200"
          >
            Produits
            <ChevronDown className={`w-6 h-6 transition-transform ${openDropdown === 'produits' ? 'transform rotate-180' : ''}`} />
          </button>
          {openDropdown === 'produits' && (
            <div className="mt-4 space-y-4">
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={product.href || "#"}
                  onClick={closeMobileNavbar} // Added onClick handler
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <div className="mt-1 p-2 rounded-lg bg-purple-100 text-purple-700">
                    {product.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{product.title}</div>
                    <div className="text-sm text-gray-500">{product.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Intégration Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown('integration')}
            className="flex items-center justify-between w-full text-2xl font-semibold text-black hover:text-purple-700 pb-4 border-b border-gray-200"
          >
            Intégration
            <ChevronDown className={`w-6 h-6 transition-transform ${openDropdown === 'integration' ? 'transform rotate-180' : ''}`} />
          </button>
          {openDropdown === 'integration' && (
            <div className="mt-4 space-y-4">
              {integrations.map((integration, index) => (
                <Link
                  key={index}
                  href={integration.href || "#"}
                  onClick={closeMobileNavbar} // Added onClick handler
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <div className="mt-1 p-2 rounded-lg bg-purple-100 text-purple-700">
                    {integration.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{integration.title}</div>
                    <div className="text-sm text-gray-500">{integration.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/a-propos"
          onClick={closeMobileNavbar} // Added onClick handler
          className="text-2xl font-semibold text-black hover:text-purple-700 pb-4 border-b border-gray-200"
        >
          À propos
        </Link>
        <Link
          href="/contact"
          onClick={closeMobileNavbar} // Added onClick handler
          className="text-2xl font-semibold text-black hover:text-purple-700 pb-4 border-b border-gray-200"
        >
          Contactez-nous
        </Link>
        <button onClick={closeMobileNavbar} className="mt-10 w-full rounded-xl bg-[#FFBD5A] px-6 py-2 font-semibold text-xl text-gray-800 shadow-sm transition-all hover:bg-[#E5A94F] hover:shadow-md active:transform active:scale-95">
          Démo Gratuite
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;

