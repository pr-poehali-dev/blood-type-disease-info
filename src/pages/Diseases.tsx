
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BloodTypeHeader from '@/components/BloodTypeHeader';
import BloodTypeNavigation from '@/components/BloodTypeNavigation';

const Diseases = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BloodTypeHeader />
      <BloodTypeNavigation />
      
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Заболевания, связанные с группами крови</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg leading-relaxed">
              Группа крови человека может влиять на предрасположенность к различным заболеваниям, включая сердечно-сосудистые, онкологические, аутоиммунные и инфекционные патологии, что обусловлено особенностями функционирования иммунной системы и генетическими факторами.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Сердечно-сосудистые заболевания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Люди с группой крови типа A имеют повышенный риск развития сердечно-сосудистых заболеваний, включая инфаркт миокарда и ишемическую болезнь сердца. Исследования показывают, что у них на 20% выше вероятность развития ишемической болезни сердца по сравнению с другими группами крови.</p>
                <p>В то же время, обладатели группы крови 0 (I) имеют несколько сниженный риск сердечно-сосудистых патологий, что связывают с особенностями свертываемости крови.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Онкологические заболевания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Группа крови B ассоциирована с повышенным риском развития некоторых видов рака, особенно рака поджелудочной железы и яичников.</p>
                <p>Люди с группой крови A могут иметь повышенный риск развития рака желудка, тогда как обладатели группы 0 (I) имеют сниженный риск этого заболевания, но могут быть более предрасположены к раку кожи.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Инфекционные заболевания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Обладатели группы крови 0 (I) имеют повышенную восприимчивость к норовирусам и холере. Однако они менее восприимчивы к малярии.</p>
                <p>Люди с группой крови A более предрасположены к заражению малярией и COVID-19, согласно некоторым исследованиям. Группа крови B часто ассоциируется с более низким риском тяжелого течения некоторых инфекционных заболеваний.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Аутоиммунные заболевания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Наличие определенной группы крови может влиять на риск развития аутоиммунных заболеваний. Например, люди с группой крови A имеют повышенный риск развития ревматоидного артрита.</p>
                <p>Обладатели группы крови AB могут иметь более высокий риск развития синдрома Шегрена, а у людей с группой крови 0 (I) чаще встречаются язвенный колит и целиакия.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-red-800">Метаболические расстройства</h3>
            <p className="mb-4">
              Группа крови может оказывать влияние на метаболизм и риск развития таких заболеваний как диабет 2 типа и ожирение. Исследования показывают, что люди с группой крови A имеют повышенный риск развития диабета 2 типа, тогда как обладатели группы крови 0 (I) менее подвержены этому заболеванию.
            </p>
            <p>
              Люди с группами крови A, B и AB имеют повышенный риск развития метаболического синдрома по сравнению с группой 0 (I). Это может быть связано с различиями в уровнях инсулина и особенностями липидного обмена.
            </p>
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

export default Diseases;
