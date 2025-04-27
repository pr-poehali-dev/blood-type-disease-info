
import { FC } from 'react';
import { Link } from 'react-router-dom';

const BloodTypeNavigation: FC = () => {
  const bloodTypes = [
    { id: 1, name: 'I (O)', path: '/blood-type/1' },
    { id: 2, name: 'II (A)', path: '/blood-type/2' },
    { id: 3, name: 'III (B)', path: '/blood-type/3' },
    { id: 4, name: 'IV (AB)', path: '/blood-type/4' },
  ];

  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto max-w-5xl">
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
          <Link to="/" className="px-4 py-2 rounded-md hover:bg-red-100 transition-colors">
            Главная
          </Link>
          {bloodTypes.map((type) => (
            <Link
              key={type.id}
              to={type.path}
              className="px-4 py-2 rounded-md hover:bg-red-100 transition-colors"
            >
              Группа {type.name}
            </Link>
          ))}
          <Link to="/about" className="px-4 py-2 rounded-md hover:bg-red-100 transition-colors">
            О проекте
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BloodTypeNavigation;
