
import BloodTypeHeader from '@/components/BloodTypeHeader';
import BloodTypeNavigation from '@/components/BloodTypeNavigation';

const Diseases = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BloodTypeHeader />
      <BloodTypeNavigation />
      
      <main className="container mx-auto max-w-5xl py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Заболевания</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed">
              Группа крови человека может влиять на предрасположенность к различным заболеваниям, включая сердечно-сосудистые, онкологические, аутоиммунные и инфекционные патологии, что обусловлено особенностями функционирования иммунной системы и генетическими факторами.
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
