import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import DemoSection from '@/components/DemoSection'

export default function ContactezNous() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-4 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h2 className="text-2xl text-gray-900">
                Nos coordonnées
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-lg text-gray-600">123 Rue de la Paix</p>
                    <p className="text-lg text-gray-600">75001 Paris</p>
                    <p className="text-lg text-gray-600">France</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <p className="text-lg text-gray-600">+33 1 23 45 67 89</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <p className="text-lg text-gray-600">contact@goresa.com</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-lg text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                    <p className="text-lg text-gray-600">Samedi - Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <h2 className="text-3xl text-gray-900">
                Notre emplacement
              </h2>
              <div className="h-[500px] w-full rounded-lg overflow-hidden bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sPlace%20Vend%C3%B4me!5e0!3m2!1sen!2sfr!4v1639725114693!5m2!1sen!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />
    </main>
  )
}

