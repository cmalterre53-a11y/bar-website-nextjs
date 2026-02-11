// Le Barbylone - Site officiel
import CocktailCarousel from './components/CocktailCarousel';
import ReviewsSection from './components/ReviewsSection';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Image */}
      <section id="accueil" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pb-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')",
          }}
        >
          {/* Darker overlay for text readability with gradient to match next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-gray-900"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 text-center text-white mt-20">
          <h1 className="mb-4 text-5xl font-bold tracking-tight drop-shadow-lg md:text-6xl">
            Le Barbylone
          </h1>
          <p className="mb-8 text-xl font-light drop-shadow-md md:text-2xl">
            Bar & Tapas
          </p>
          <div className="mt-8">
            <a
              href="/carte"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-bold text-amber-900 transition-all hover:bg-amber-50 hover:scale-110 shadow-xl border-2 border-white"
            >
              Voir la carte
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-gray-900 via-neutral-900 to-stone-900 py-20 px-6 -mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 text-center">
            <p className="text-xl font-light leading-relaxed text-amber-100 drop-shadow-md">
              Le Barbylone, c'est le nouveau repaire incontournable de Perpignan où l'ambiance chaleureuse rencontre les saveurs authentiques.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Notre bar vous invite à vivre un moment de convivialité autour d'une carte de tapas généreuses et savoureuses,
              parfaites pour partager entre amis ou en famille. Que vous veniez pour un apéro improvisé, une soirée détendue
              ou simplement pour découvrir de nouvelles saveurs, le Barbylone vous accueille dans une atmosphère décontractée et conviviale.
            </p>
            <p className="text-xl font-semibold leading-relaxed text-amber-300 drop-shadow-lg">
              Le Barbylone, c'est plus qu'un bar – c'est votre nouveau rendez-vous pour des moments inoubliables à Perpignan !
            </p>
          </div>
        </div>
      </section>

      {/* Cocktail Carousel */}
      <CocktailCarousel />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Hours & Contact Grid */}
      <section className="bg-amber-50 py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Opening Hours */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-amber-900">
                Horaires d'ouverture
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <span className="font-medium">Lundi</span>
                  <span>18h00 - 00h00</span>
                </div>
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <span className="font-medium">Mardi - Samedi</span>
                  <span>06h00 - 00h00</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-medium">Dimanche</span>
                  <span className="text-red-600">Fermé</span>
                </div>
              </div>
            </div>

            {/* Contact & Location */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-amber-900">
                Contact
              </h2>
              <div className="space-y-3 text-gray-700 text-sm">
                <div>
                  <h3 className="font-medium text-amber-800">Adresse</h3>
                  <p>Rue de Napoléon, 66000 Perpignan</p>
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Téléphone</h3>
                  <a href="tel:0000000000" className="text-amber-700 hover:text-amber-600 hover:underline">
                    00 00 00 00 00
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Email</h3>
                  <a href="mailto:Lebarbylone@test.fr" className="text-amber-700 hover:text-amber-600 hover:underline">
                    Lebarbylone@test.fr
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Instagram</h3>
                  <a
                    href="https://instagram.com/Lebarbylone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:text-amber-600 hover:underline"
                  >
                    @Lebarbylone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-amber-900">
            Venez nous rendre visite !
          </h2>
          <p className="mb-8 text-xl text-gray-700">
            Une ambiance chaleureuse vous attend au Barbylone
          </p>
          <a
            href="tel:0000000000"
            className="inline-block rounded-full bg-amber-900 px-8 py-4 text-lg font-bold text-amber-50 transition-all hover:bg-amber-800 hover:scale-105 shadow-lg"
          >
            Appelez-nous
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-amber-400 border-t border-amber-900/30">
        <p>Le Barbylone - Bar & Tapas à Perpignan</p>
        <p className="mt-2 text-sm text-amber-500">
          Rue de Napoléon, 66000 Perpignan | 00 00 00 00 00
        </p>
      </footer>
    </div>
  );
}
