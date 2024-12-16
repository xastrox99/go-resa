"use client"

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, ExternalLink, GitBranch, Network, Puzzle, RefreshCw, Zap } from 'lucide-react';
import Link from "next/link";
import { Users } from 'lucide-react';


const integrations = [
{
title: "Intégration API",
description: "Connectez GoResa à vos applications préférées grâce à notre API flexible et bien documentée. Automatisez les tâches, synchronisez les données et personnalisez votre expérience GoResa.",
icon: Code,
href: "integration/api", // Replace with actual link
features: [
"API RESTful",
"Documentation complète",
"Intégration facile",
"Webhooks",
],
stats: [
{ label: "Appels API", value: "10M+" },
{ label: "Disponibilité", value: "99.99%" },
],
color: "purple",
secondaryIcons: [Zap, RefreshCw, ExternalLink],
},
{
title: "Solutions personnalisées",
description: "Besoin d'une solution sur mesure ? Notre équipe d'experts peut vous aider à développer des intégrations personnalisées pour répondre à vos besoins spécifiques.",
icon: GitBranch,
href: "integration/custom-solutions", // Replace with actual link
features: [
"Développement sur mesure",
"Intégration transparente",
"Support dédié",
"Maintenance évolutive",
],
stats: [
{ label: "Projets réalisés", value: "500+" },
{ label: "Satisfaction client", value: "98%" },
],
color: "blue",
secondaryIcons: [Puzzle, Users, CheckCircle],
},
{
title: "Réseau de partenaires",
description: "Rejoignez notre réseau de partenaires et collaborez avec des experts pour étendre les fonctionnalités de GoResa et offrir des solutions complètes à vos clients.",
icon: Network,
href: "integration/partner-network", // Replace with actual link
features: [
"Collaboration étroite",
"Opportunités commerciales",
"Support marketing",
"Accès à des ressources exclusives",
],
stats: [
{ label: "Partenaires", value: "200+" },
{ label: "Croissance annuelle", value: "30%" },
],
color: "green",
secondaryIcons: [Users, ArrowRight, ExternalLink],
},
];

const colorVariants = {
purple: "bg-purple-50 text-purple-600 border-purple-100",
blue: "bg-blue-50 text-blue-600 border-blue-100",
green: "bg-green-50 text-green-600 border-green-100",
};

const bgColorVariants = {
purple: "bg-purple-500",
blue: "bg-blue-500",
green: "bg-green-500",
};

export default function IntegrationPage() {
return (
<div className="bg-gradient-to-b from-gray-50 to-white pt-20">
<div className="container mx-auto px-4 py-16">
<div className="text-center mb-12">
<h1 className="text-3xl font-bold text-gray-900 mb-6">
Nos Intégrations
</h1>
<p className="text-lg text-gray-600 max-w-3xl mx-auto">
Étendez les fonctionnalités de GoResa et connectez-vous à vos applications préférées grâce à nos options d'intégration flexibles.
</p>
</div>

<div className="grid gap-8 lg:grid-cols-2">
{integrations.map((integration, index) => (
<motion.div
key={integration.title}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
>
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div
className={`p-3 rounded-xl ${
colorVariants[integration.color as keyof typeof colorVariants]
}`}
>
<integration.icon className="w-8 h-8" />
</div>
<div>
<h2 className="text-xl font-bold text-gray-900">
{integration.title}
</h2>
</div>
</div>

<p className="text-sm text-gray-600 mb-6 min-h-[80px]">
{integration.description}
</p>

<div className="grid grid-cols-2 gap-4 mb-6">
{integration.stats.map((stat, index) => (
<div
key={index}
className="bg-gray-50 rounded-lg p-4 text-center"
>
<div className="text-lg font-bold text-gray-900">
{stat.value}
</div>
<div className="text-xs text-gray-600">{stat.label}</div>
</div>
))}
</div>

<div className="space-y-3 mb-8">
{integration.features.map((feature, index) => (
<div
key={index}
className="flex items-center gap-2 text-sm text-gray-600"
>
<CheckCircle className="w-5 h-5 text-green-500" />
<span>{feature}</span>
</div>
))}
</div>

<div className="flex items-center justify-between">
<div className="flex gap-3">
{integration.secondaryIcons.map((Icon, index) => (
<div
key={index}
className="p-2 rounded-lg bg-gray-50 text-gray-600"
>
<Icon className="w-5 h-5" />
</div>
))}
</div>

<Link
href={integration.href || "#"} // Now defaults to "#" if integration.href is undefined
className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm transition-transform hover:scale-105 ${
bgColorVariants[integration.color as keyof typeof bgColorVariants]
}`}
>
En savoir plus
<ArrowRight className="w-5 h-5" />
</Link>
</div>
</div>
</motion.div>
))}
</div>
</div>
</div>
);
}

