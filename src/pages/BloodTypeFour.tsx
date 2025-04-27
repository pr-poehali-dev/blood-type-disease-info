
import BloodTypeHeader from '@/components/BloodTypeHeader';
import BloodTypeNavigation from '@/components/BloodTypeNavigation';
import BloodInfoCard from '@/components/BloodInfoCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BloodTypeFour = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BloodTypeHeader />
      <BloodTypeNavigation />
      
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Группа IV (AB)</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg leading-relaxed">
              Группа крови IV (AB) — самая редкая из четырех основных групп крови, встречается примерно у 5% населения мира. Эритроциты содержат как антиген A, так и антиген B, а в плазме отсутствуют антитела анти-A и анти-B. Люди с группой AB являются "универсальными реципиентами" и могут получать кровь любой группы.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Риски заболеваний</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Повышенный риск:</strong> Тромбозы и сердечно-сосудистые заболевания</li>
                  <li><strong>Повышенный риск:</strong> Рак поджелудочной железы</li>
                  <li><strong>Повышенный риск:</strong> Когнитивные нарушения в пожилом возрасте</li>
                  <li><strong>Повышенный риск:</strong> Некоторые виды инфекций</li>
                  <li><strong>Средний риск:</strong> Метаболический синдром</li>
                  <li><strong>Пониженный риск:</strong> Некоторые аутоиммунные заболевания</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Особенности иммунной системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Люди с группой крови IV (AB) обладают уникальными особенностями иммунной системы, которая сочетает характеристики групп A и B. Это может приводить как к преимуществам, так и к определенным проблемам.</p>
                <p>Исследования показывают, что иммунитет у людей с группой AB часто более чувствителен и может иметь более сложную реакцию на различные патогены и аллергены.</p>
                <p className="mt-3 font-medium">Биохимические особенности крови группы IV (AB):</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Более низкая активность некоторых ферментов пищеварения</li>
                  <li>Повышенная тенденция к тромбообразованию</li>
                  <li>Более сложный гормональный профиль</li>
                  <li>Чувствительность к изменениям в рационе питания</li>
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
                <p className="mb-3">Людям с группой крови IV (AB) рекомендуется смешанная диета, сочетающая элементы рекомендаций для групп A и B:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Полезно:</strong> Морепродукты, рыба</li>
                  <li><strong>Полезно:</strong> Зеленые овощи, фрукты</li>
                  <li><strong>Полезно:</strong> Молочные продукты в умеренных количествах</li>
                  <li><strong>Полезно:</strong> Индейка, баранина</li>
                  <li><strong>Ограничить:</strong> Красное мясо</li>
                  <li><strong>Ограничить:</strong> Острые и кислые продукты</li>
                  <li><strong>Ограничить:</strong> Алкоголь и кофеин</li>
                </ul>
                <p className="mt-3 italic">Такие рекомендации связаны с особенностями пищеварительной системы у людей с группой крови IV (AB), которая обычно более чувствительна и требует сбалансированного подхода к питанию.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Физическая активность и образ жизни</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Людям с группой крови IV (AB) рекомендуется сочетание умеренных физических нагрузок и расслабляющих практик:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Гольф</li>
                  <li>Хайкинг (походы)</li>
                  <li>Йога</li>
                  <li>Танцы</li>
                  <li>Плавание</li>
                </ul>
                <p className="mt-3">Для поддержания психического равновесия и снижения стресса рекомендуется:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Медитации и дыхательные практики</li>
                  <li>Достаточный сон (7-9 часов)</li>
                  <li>Регулярный отдых на природе</li>
                  <li>Избегание эмоциональных перегрузок</li>
                  <li>Творческие хобби для самовыражения</li>
                </ul>
                <p className="mt-3 italic">Люди с группой крови AB часто обладают более сложным психологическим профилем, сочетая в себе черты как более эмоциональных людей группы A, так и более гибких людей группы B.</p>
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

export default BloodTypeFour;
