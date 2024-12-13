"use client"

import React, { useState } from "react"
import { motion } from 'framer-motion'
import { Calendar, Building, Check, User, Mail, Phone, ArrowRight, Briefcase, Rocket, Target, Settings, Users, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import DatePicker from "react-datepicker"
import { addDays, getDay } from 'date-fns'
import {fr} from 'date-fns/locale/fr'
import "react-datepicker/dist/react-datepicker.css"

const benefits = [
  {
    title: "Démonstration personnalisée",
    description: "Présentation détaillée des fonctionnalités adaptées aux besoins spécifiques de votre établissement.",
    icon: Calendar,
  },
  {
    title: "Analyse approfondie",
    description: "Évaluation complète des défis de votre établissement et proposition de solutions sur mesure.",
    icon: Target,
  },
  {
    title: "Expertise technique",
    description: "Réponses détaillées à toutes vos questions sur nos produits et leur intégration.",
    icon: Settings,
  },
  {
    title: "Accompagnement dédié",
    description: "Un expert dédié pour vous guider à chaque étape de la démonstration.",
    icon: Users,
  },
  {
    title: "Solutions concrètes",
    description: "Découvrez des cas d'usage concrets adaptés à votre secteur d'activité.",
    icon: Rocket,
  },
  {
    title: "Flexibilité horaire",
    description: "Choix flexible des horaires de démonstration selon vos disponibilités.",
    icon: Clock,
  },
]

const establishmentTypes = [
  { value: "hotel", label: "Hôtel" },
  { value: "resort", label: "Resort" },
  { value: "restaurant", label: "Restaurant" },
  { value: "bar", label: "Bar / Café" },
  { value: "spa", label: "Spa / Bien-être" },
  { value: "club", label: "Club / Discothèque" },
  { value: "event", label: "Salle d'événements" },
  { value: "tourism", label: "Office de tourisme" },
  { value: "other", label: "Autre" }
]

export default function DemoSection() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Function to disable weekends
  const isWeekday = (date: Date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  }

  // Custom input component for the date picker
  const CustomInput = React.forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (
      <div className="relative w-full">
        <Input
          value={value}
          onClick={onClick}
          ref={ref}
          placeholder="Sélectionnez une date"
          className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white cursor-pointer"
          icon={<Calendar className="text-white/60" />}
          readOnly
        />
      </div>
    )
  );

  CustomInput.displayName = "CustomInput";

  return (
    <section className="bg-gradient-to-br from-[#4C206A] to-[#3D1956] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Réservez votre démonstration personnalisée
            </h2>
            <form className="space-y-6">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nom et Prénom"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  icon={<User className="text-white/60" />}
                />
                <Input
                  type="email"
                  placeholder="Email professionnel"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  icon={<Mail className="text-white/60" />}
                />
                <Input
                  type="text"
                  placeholder="Nom de l'établissement"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  icon={<Building className="text-white/60" />}
                />
                <Input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  icon={<Phone className="text-white/60" />}
                />
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-white">
                    <SelectValue placeholder="Type d'établissement" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900 border-none shadow-lg">
                    {establishmentTypes.map((type) => (
                      <SelectItem 
                        key={type.value} 
                        value={type.value}
                        className="hover:bg-purple-50 focus:bg-purple-50 cursor-pointer py-2"
                      >
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Poste / Fonction"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  icon={<Briefcase className="text-white/60" />}
                />
                <div className="relative w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    filterDate={isWeekday}
                    minDate={new Date()}
                    locale={fr}
                    dateFormat="dd/MM/yyyy"
                    customInput={<CustomInput />}
                    calendarClassName="demo-calendar"
                    popperClassName="demo-calendar-popper"
                    wrapperClassName="w-full"
                  />
                </div>
                <Textarea
                  placeholder="Description de vos besoins spécifiques (optionnel)"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white min-h-[100px] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-[#4C206A] hover:bg-gray-100 transition-colors"
              >
                Programmer la démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl h-full"
          >
            <h2 className="text-2xl font-bold text-[#4C206A] mb-8">
              Qu'attendre de la démo ?
            </h2>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-purple-50 to-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4C206A] flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

