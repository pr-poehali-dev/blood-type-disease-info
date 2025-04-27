
import BloodTypeHeader from '@/components/BloodTypeHeader';
import BloodTypeNavigation from '@/components/BloodTypeNavigation';
import BloodInfoCard from '@/components/BloodInfoCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BloodTypeOne = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BloodTypeHeader />
      <BloodTypeNavigation />
      
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Группа I (O)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg leading-relaxed">
              Группа крови I (O) считается наиболее распространенной в мире. Эритроциты этой группы не содержат антигенов A и B, но в плазме присутствуют антитела анти-A и анти-B. Люди с этой группой крови могут быть донорами для всех групп, поэтому их называют "универсальными донорами".
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Риски заболеваний</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Повышенный риск:</strong> Язвенная болезнь желудка и двенадцатиперстной кишки (на 35% выше)</li>
                  <li><strong>Повышенный риск:</strong> Некоторые формы аллергии</li>
                  <li><strong>Повышенный риск:</strong> Холера и норовирусные инфекции</li>
                  <li><strong>Пониженный риск:</strong> Тромбозы и ишемическая болезнь сердца</li>
                  <li><strong>Пониженный риск:</strong> Малярия</li>
                  <li><strong>Пониженный риск:</strong> Некоторые виды рака, особенно рак желудка</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Особенности иммунной системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Люди с группой крови I (O) обычно имеют более сильную иммунную реакцию на инфекции и более эффективное выведение токсинов из организма.</p>
                <p>При этом, сильная иммунная система может способствовать развитию аутоиммунных заболеваний и воспалительных процессов, таких как язвенный колит и артрит.</p>
                <p className="mt-3 font-medium">Показатели крови людей с группой I (O) обычно отличаются:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Более высоким уровнем ферментов пищеварения</li>
                  <li>Повышенной кислотностью желудочного сока</li>
                  <li>Более эффективной свертываемостью крови</li>
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
                <p className="mb-3">Людям с группой крови I (O) рекомендуется диета с высоким содержанием белка, особенно животного происхождения:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Полезно:</strong> Мясо (говядина, баранина), морская рыба</li>
                  <li><strong>Полезно:</strong> Зеленые овощи, брокколи, шпинат</li>
                  <li><strong>Полезно:</strong> Ягоды и фрукты с низким гликемическим индексом</li>
                  <li><strong>Ограничить:</strong> Молочные продукты</li>
                  <li><strong>Ограничить:</strong> Злаки, особенно пшеницу и кукурузу</li>
                  <li><strong>Ограничить:</strong> Бобовые (фасоль, чечевица)</li>
                </ul>
                <p className="mt-3 italic">Такие рекомендации основаны на исследованиях, показывающих, что особенности пищеварения у людей с группой I (O) лучше адаптированы к перевариванию животных белков.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Физическая активность и образ жизни</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Людям с группой крови I (O) рекомендуется интенсивная физическая активность для поддержания здоровья:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Высокоинтенсивные кардиотренировки (бег, плавание)</li>
                  <li>Силовые тренировки</li>
                  <li>Контактные виды спорта</li>
                </ul>
                <p className="mt-3">Для снижения стресса, который может быть особенно вреден для людей с этой группой крови, рекомендуется:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Регулярные физические нагрузки для выброса накопленного адреналина</li>
                  <li>Достаточный сон (7-8 часов)</li>
                  <li>Медитация и дыхательные практики</li>
                  <li>Избегание длительных периодов бездействия</li>
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

export default BloodTypeOne;
