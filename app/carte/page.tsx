export default function CartePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 via-neutral-900 to-stone-900 py-8 text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-amber-400">La carte du Barbylone</h1>
            <a
              href="/"
              className="rounded-full bg-amber-500 px-6 py-2 text-gray-900 font-semibold transition-all hover:bg-amber-400"
            >
              Retour
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        {/* Tapas Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-5xl font-bold text-amber-900">
            Nos Tapas
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Tapas Chauds */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 border-b-2 border-amber-500 pb-2 text-2xl font-bold text-orange-800">
                Tapas Chauds
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Croquetas de Jamón</span>
                  <span className="font-bold text-amber-900">7€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Patatas Bravas</span>
                  <span className="font-bold text-amber-900">6€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Gambas al Ajillo</span>
                  <span className="font-bold text-amber-900">9€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Albondigas</span>
                  <span className="font-bold text-amber-900">8€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Calamares Fritos</span>
                  <span className="font-bold text-amber-900">8€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Tortilla Española</span>
                  <span className="font-bold text-amber-900">6€</span>
                </div>
              </div>
            </div>

            {/* Tapas Froids */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 border-b-2 border-amber-500 pb-2 text-2xl font-bold text-orange-800">
                Tapas Froids
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-black">Jamón Ibérico</span>
                  <span className="text-black">12€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Planche de Fromages</span>
                  <span className="text-black">10€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Pan Con Tomate</span>
                  <span className="text-black">5€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Olives Marinées</span>
                  <span className="text-black">4€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Anchois Marinés</span>
                  <span className="text-black">7€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Tzatziki & Légumes</span>
                  <span className="text-black">6€</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drinks Section */}
        <section>
          <h2 className="mb-8 text-center text-5xl font-bold text-amber-900">
            Nos Boissons
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Vins */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 border-b-2 border-amber-500 pb-2 text-2xl font-bold text-orange-800">
                Vins
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Verre de Rouge</span>
                  <span className="font-bold text-amber-900">5€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Verre de Blanc</span>
                  <span className="font-bold text-amber-900">5€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Verre de Rosé</span>
                  <span className="font-bold text-amber-900">5€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Bouteille</span>
                  <span className="font-bold text-amber-900">20€</span>
                </div>
              </div>
            </div>

            {/* Bières */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 border-b-2 border-amber-500 pb-2 text-2xl font-bold text-orange-800">
                Bières
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Pression 25cl</span>
                  <span className="font-bold text-amber-900">3€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Pression 50cl</span>
                  <span className="font-bold text-amber-900">5€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Bière Artisanale</span>
                  <span className="font-bold text-amber-900">6€</span>
                </div>
              </div>
            </div>

            {/* Cocktails */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 border-b-2 border-amber-500 pb-2 text-2xl font-bold text-orange-800">
                Cocktails
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Sangria</span>
                  <span className="font-bold text-amber-900">7€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Mojito</span>
                  <span className="font-bold text-amber-900">8€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Gin Tonic</span>
                  <span className="font-bold text-amber-900">8€</span>
                </div>
              </div>
            </div>

            {/* Boissons Sans Alcool */}
            <div className="rounded-lg bg-white p-8 shadow-lg md:col-span-2 lg:col-span-3">
              <h3 className="mb-6 border-b-2 border-amber-500 pb-2 text-2xl font-bold text-orange-800">
                Boissons Sans Alcool
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Bière Sans Alcool</span>
                    <span className="font-bold text-amber-900">4€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Coca-Cola</span>
                    <span className="font-bold text-amber-900">3€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Coca-Cola Zéro</span>
                    <span className="font-bold text-amber-900">3€</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Jus d'Orange</span>
                    <span className="font-bold text-amber-900">3€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Jus de Pomme</span>
                    <span className="font-bold text-amber-900">3€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Limonade</span>
                    <span className="font-bold text-amber-900">3€</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Eau Minérale</span>
                    <span className="font-bold text-amber-900">2€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Perrier</span>
                    <span className="font-bold text-amber-900">3€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Thé Glacé</span>
                    <span className="font-bold text-amber-900">3€</span>
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
            className="inline-block rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-amber-400 hover:scale-105"
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
