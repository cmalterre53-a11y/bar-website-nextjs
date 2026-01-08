import Navbar from '../components/Navbar';

export default function CartePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <Navbar />

      <div className="container mx-auto px-6 py-16 mt-20">
        <h1 className="mb-12 text-center text-5xl font-bold text-amber-900">La carte du Barbylone</h1>
        {/* Tapas Section */}
        <section className="mb-16">
          <h2 className="mb-12 text-center text-4xl font-bold text-amber-900">
            Nos Tapas
          </h2>
          <div className="relative mx-auto max-w-xl">
            {/* Conteneur avec image de fond tout autour */}
            <div
              className="rounded-lg overflow-hidden shadow-2xl p-4 md:p-8"
              style={{
                backgroundImage: "url('/images/tapas.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Carte blanche au centre */}
              <div className="bg-white rounded-lg shadow-md p-4 md:p-5">
                {/* Tapas Chauds */}
                <div className="mb-10">
                  <h3 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800">
                    Tapas Chauds
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Croquetas de Jamón</span>
                      <span className="text-gray-900">7€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Patatas Bravas</span>
                      <span className="text-gray-900">6€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Gambas al Ajillo</span>
                      <span className="text-gray-900">9€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Albondigas</span>
                      <span className="text-gray-900">8€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Calamares Fritos</span>
                      <span className="text-gray-900">8€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Tortilla Española</span>
                      <span className="text-gray-900">6€</span>
                    </div>
                  </div>
                </div>

                {/* Tapas Froids */}
                <div>
                  <h3 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800">
                    Tapas Froids
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Jamón Ibérico</span>
                      <span className="text-gray-900">12€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Planche de Fromages</span>
                      <span className="text-gray-900">10€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Pan Con Tomate</span>
                      <span className="text-gray-900">5€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Olives Marinées</span>
                      <span className="text-gray-900">4€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Anchois Marinés</span>
                      <span className="text-gray-900">7€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Tzatziki & Légumes</span>
                      <span className="text-gray-900">6€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drinks Section */}
        <section>
          <h2 className="mb-12 text-center text-4xl font-bold text-amber-900">
            Nos Boissons
          </h2>
          <div className="relative mx-auto max-w-xl">
            {/* Conteneur avec image de fond tout autour */}
            <div
              className="rounded-lg overflow-hidden shadow-2xl p-4 md:p-8"
              style={{
                backgroundImage: "url('/images/boissons.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Carte blanche au centre */}
              <div className="bg-white rounded-lg shadow-md p-4 md:p-5">
                {/* Vins */}
                <div className="mb-10">
                  <h3 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800">
                    Vins
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Verre de Rouge</span>
                      <span className="text-gray-900">5€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Verre de Blanc</span>
                      <span className="text-gray-900">5€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Verre de Rosé</span>
                      <span className="text-gray-900">5€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Bouteille</span>
                      <span className="text-gray-900">20€</span>
                    </div>
                  </div>
                </div>

                {/* Bières */}
                <div className="mb-10">
                  <h3 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800">
                    Bières
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Pression 25cl</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Pression 50cl</span>
                      <span className="text-gray-900">5€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Bière Artisanale</span>
                      <span className="text-gray-900">6€</span>
                    </div>
                  </div>
                </div>

                {/* Cocktails */}
                <div className="mb-10">
                  <h3 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800">
                    Cocktails
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Sangria</span>
                      <span className="text-gray-900">7€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Mojito</span>
                      <span className="text-gray-900">8€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Gin Tonic</span>
                      <span className="text-gray-900">8€</span>
                    </div>
                  </div>
                </div>

                {/* Boissons Sans Alcool */}
                <div>
                  <h3 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800">
                    Boissons Sans Alcool
                  </h3>
                  <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Bière Sans Alcool</span>
                      <span className="text-gray-900">4€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Coca-Cola</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Coca-Cola Zéro</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Jus d'Orange</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Jus de Pomme</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Limonade</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Eau Minérale</span>
                      <span className="text-gray-900">2€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Perrier</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Thé Glacé</span>
                      <span className="text-gray-900">3€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-bold text-amber-900 transition-all hover:bg-amber-50 hover:scale-110 shadow-xl border-2 border-amber-900"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-amber-400">
        <p>Le Barbylone - Bar & Tapas à Perpignan</p>
        <p className="mt-2 text-sm text-amber-500">
          Rue de Napoléon, 66000 Perpignan | 00 00 00 00 00
        </p>
      </footer>
    </div>
  );
}
