import React from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <div className="bg-accent rounded-md shadow-md p-4 text-center">
      <h4 className="text-gray-700 font-medium">{label}</h4>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default StatsCard;
