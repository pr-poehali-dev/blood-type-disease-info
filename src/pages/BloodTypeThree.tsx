
import BloodTypeHeader from '@/components/BloodTypeHeader';
import BloodTypeNavigation from '@/components/BloodTypeNavigation';
import BloodInfoCard from '@/components/BloodInfoCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BloodTypeThree = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BloodTypeHeader />
      <BloodTypeNavigation />
      
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Группа III (B)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg leading-relaxed">
              Группа крови III (B) характеризуется наличием антигена B на поверхности эритроцитов и антител анти-A в плазме. Эта группа крови встречается у около 10-20% населения мира, с более высокой распространенностью в странах Азии и среди некоторых этнических групп.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Риски заболеваний</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Повышенный риск:</strong> Аутоиммунные заболевания</li>
                  <li><strong>Повышенный риск:</strong> Рак поджелудочной железы (на 72% выше)</li>
                  <li><strong>Повышенный риск:</strong> Некоторые виды деменции</li>
                  <li><strong>Повышенный риск:</strong> Сахарный диабет</li>
                  <li><strong>Средний риск:</strong> Сердечно-сосудистые заболевания</li>
                  <li><strong>Пониженный риск:</strong> Некоторые вирусные инфекции</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Особенности иммунной системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Люди с группой крови III (B) часто имеют сбалансированную иммунную систему, которая достаточно эффективно противостоит многим заболеваниям, но может быть более уязвима к некоторым аутоиммунным процессам.</p>
                <p>Исследования показывают, что у людей с этой группой крови обычно более высокая устойчивость к определенным инфекциям и более гибкая адаптация к изменениям в окружающей среде.</p>
                <p className="mt-3 font-medium">Биохимические особенности крови группы III (B):</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Сбалансированный уровень желудочной кислотности</li>
                  <li>Умеренная тенденция к образованию тромбов</li>
                  <li>Более гибкий метаболизм и адаптация к различным типам питания</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Рекомендации по питанию</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Людям с группой крови III (B) рекомендуется сбалансированная диета с разнообразными продуктами:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Полезно:</strong> Баранина, кролик, индейка</li>
                  <li><strong>Полезно:</strong> Молочные продукты (творог, йогурт)</li>
                  <li><strong>Полезно:</strong> Зеленые овощи, яйца</li>
                  <li><strong>Полезно:</strong> Травяные чаи, зеленый чай</li>
                  <li><strong>Ограничить:</strong> Курицу и свинину</li>
                  <li><strong>Ограничить:</strong> Кукурузу, гречку, арахис</li>
                  <li><strong>Ограничить:</strong> Семена кунжута, томаты</li>
                </ul>
                <p className="mt-3 italic">Такие рекомендации связаны с особенностями метаболизма у людей с группой крови III (B), которые обычно хорошо усваивают молочные продукты и определенные виды мяса.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Физическая активность и образ жизни</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Людям с группой крови III (B) рекомендуются умеренные физические нагрузки с элементами творчества и ментальной составляющей:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Теннис</li>
                  <li>Ходьба по пересеченной местности</li>
                  <li>Плавание</li>
                  <li>Езда на велосипеде</li>
                  <li>Гимнастика</li>
                </ul>
                <p className="mt-3">Для поддержания психического здоровья и снижения стресса рекомендуется:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Творческие занятия (рисование, музыка)</li>
                  <li>Умеренные медитации</li>
                  <li>Регулярный сон (7-8 часов)</li>
                  <li>Сбалансированный режим труда и отдыха</li>
                  <li>Общение с природой</li>
                </ul>
              </CardContent>
            </Card>
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

export default BloodTypeThree;
