
import BloodTypeHeader from '@/components/BloodTypeHeader';
import BloodTypeNavigation from '@/components/BloodTypeNavigation';
import BloodInfoCard from '@/components/BloodInfoCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const commonDiseases = [
    {
      title: 'Сердечно-сосудистые заболевания',
      description: 'Различные группы крови по-разному влияют на риск развития сердечно-сосудистых заболеваний. Например, люди с группой А имеют повышенный риск ишемической болезни сердца.',
      icon: '❤️',
      risk: 'medium' as const,
    },
    {
      title: 'Онкологические заболевания',
      description: 'Некоторые исследования показывают связь между группой крови и риском развития определенных видов рака, включая рак желудка и поджелудочной железы.',
      icon: '🔬',
      risk: 'medium' as const,
    },
    {
      title: 'Желудочно-кишечные заболевания',
      description: 'Люди с группой крови O чаще страдают от язвенной болезни желудка и двенадцатиперстной кишки из-за особенностей иммунной системы.',
      icon: '🥗',
      risk: 'high' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BloodTypeHeader />
      <BloodTypeNavigation />
      
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Что такое группа крови?</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed mb-4">
              Группа крови — это классификация крови в соответствии с наличием или отсутствием определённых антигенов на поверхности эритроцитов. Существует четыре основные группы крови: I (O), II (A), III (B) и IV (AB).
            </p>
            <p className="text-lg leading-relaxed">
              Современные исследования показывают, что группа крови может влиять на риск развития различных заболеваний. Это связано с особенностями иммунной системы и метаболизма у людей с разными группами крови.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Распространенные заболевания</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonDiseases.map((disease, index) => (
              <BloodInfoCard
                key={index}
                title={disease.title}
                description={disease.description}
                icon={disease.icon}
                risk={disease.risk}
              />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Узнайте о своей группе крови</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Выберите свою группу крови, чтобы получить подробную информацию о возможных рисках и рекомендации по профилактике заболеваний.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((id) => (
              <Button key={id} asChild className="bg-red-600 hover:bg-red-700">
                <Link to={`/blood-type/${id}`}>
                  Группа {id === 1 ? 'I (O)' : id === 2 ? 'II (A)' : id === 3 ? 'III (B)' : 'IV (AB)'}
                </Link>
              </Button>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <p className="mb-2">© 2025 Информация о группах крови и заболеваниях</p>
          <p className="text-gray-400 text-sm">
            Информация на сайте предоставлена в ознакомительных целях. Для диагностики и лечения заболеваний обращайтесь к врачу.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
