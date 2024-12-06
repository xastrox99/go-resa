import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export default Card

