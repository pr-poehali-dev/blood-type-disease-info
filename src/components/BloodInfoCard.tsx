
import { FC } from 'react';

interface BloodInfoCardProps {
  title: string;
  description: string;
  risk?: 'low' | 'medium' | 'high';
  icon?: string;
}

const BloodInfoCard: FC<BloodInfoCardProps> = ({ title, description, risk, icon }) => {
  const riskColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        {risk && (
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${riskColors[risk]}`}>
            {risk === 'low' && 'Низкий риск'}
            {risk === 'medium' && 'Средний риск'}
            {risk === 'high' && 'Высокий риск'}
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodInfoCard;
