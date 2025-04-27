
import BloodTypeHeader from '@/components/BloodTypeHeader';
import BloodTypeNavigation from '@/components/BloodTypeNavigation';
import BloodInfoCard from '@/components/BloodInfoCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BloodTypeTwo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BloodTypeHeader />
      <BloodTypeNavigation />
      
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Группа II (A)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg leading-relaxed">
              Группа крови II (A) характеризуется наличием антигена A на поверхности эритроцитов и антител анти-B в плазме. Эта группа крови встречается примерно у 40% европейского населения и является второй по распространенности в мире.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Риски заболеваний</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Повышенный риск:</strong> Сердечно-сосудистые заболевания (на 20% выше)</li>
                  <li><strong>Повышенный риск:</strong> Рак желудка и поджелудочной железы</li>
                  <li><strong>Повышенный риск:</strong> Диабет 2 типа</li>
                  <li><strong>Повышенный риск:</strong> Тяжелое течение COVID-19</li>
                  <li><strong>Пониженный риск:</strong> Язвенная болезнь желудка и двенадцатиперстной кишки</li>
                  <li><strong>Пониженный риск:</strong> Некоторые инфекционные заболевания</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Особенности иммунной системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Люди с группой крови II (A) обычно имеют более чувствительную иммунную систему, которая может быть менее эффективна против некоторых инфекций, но при этом лучше справляется с определенными видами заболеваний.</p>
                <p>Исследования показывают, что у людей с этой группой крови чаще встречаются аллергические реакции и нарушения работы пищеварительной системы.</p>
                <p className="mt-3 font-medium">Биохимические особенности крови группы II (A):</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Более низкий уровень кислотности желудочного сока</li>
                  <li>Повышенная тенденция к образованию тромбов</li>
                  <li>Более высокий уровень кортизола (гормона стресса)</li>
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
                <p className="mb-3">Людям с группой крови II (A) рекомендуется преимущественно растительная диета:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Полезно:</strong> Растительная пища (овощи, фрукты, орехи)</li>
                  <li><strong>Полезно:</strong> Рыба и морепродукты</li>
                  <li><strong>Полезно:</strong> Растительные масла (оливковое, льняное)</li>
                  <li><strong>Полезно:</strong> Зеленый чай, травяные чаи</li>
                  <li><strong>Ограничить:</strong> Красное мясо</li>
                  <li><strong>Ограничить:</strong> Молочные продукты</li>
                  <li><strong>Ограничить:</strong> Пшеница и кукуруза</li>
                </ul>
                <p className="mt-3 italic">Такие рекомендации связаны с особенностями пищеварительной системы у людей с группой крови II (A), которая лучше адаптирована к перевариванию растительной пищи.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Физическая активность и образ жизни</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Людям с группой крови II (A) рекомендуются умеренные физические нагрузки низкой и средней интенсивности:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Йога</li>
                  <li>Пилатес</li>
                  <li>Ходьба</li>
                  <li>Плавание</li>
                  <li>Тай-чи</li>
                </ul>
                <p className="mt-3">Для снижения уровня стресса, который может быть особенно вреден для людей с этой группой крови, рекомендуется:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Регулярные медитации</li>
                  <li>Глубокое дыхание</li>
                  <li>Достаточный сон (8-9 часов)</li>
                  <li>Избегание сильных эмоциональных и физических перегрузок</li>
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

export default BloodTypeTwo;
