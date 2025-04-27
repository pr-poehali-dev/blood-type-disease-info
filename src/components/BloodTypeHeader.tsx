
import { FC } from 'react';

const BloodTypeHeader: FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-900 text-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Заболевания и группы крови</h1>
        <p className="text-xl md:text-2xl opacity-90">
          Узнайте о взаимосвязи между вашей группой крови и предрасположенностью к различным заболеваниям
        </p>
      </div>
    </div>
  );
};

export default BloodTypeHeader;
