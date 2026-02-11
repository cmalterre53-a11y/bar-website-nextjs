import Navbar from '../components/Navbar';

export default function CartePage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero banner */}
      <div className="relative pt-24 pb-10 px-6 text-center">
        <h1 className="text-5xl font-bold text-amber-900 tracking-tight md:text-6xl">
          La Carte
        </h1>
        <p className="mt-3 text-lg text-gray-600 font-light">
          Bar & Tapas — Le Barbylone
        </p>
        <div className="mt-4 mx-auto w-24 h-0.5 bg-amber-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 pb-20 max-w-5xl">

        {/* Tapas Card */}
        <section className="mb-12 rounded-2xl bg-white border border-amber-200 shadow-sm overflow-hidden">
          <div className="bg-amber-900 px-8 py-4">
            <h2 className="text-2xl font-semibold text-amber-50">Nos Tapas</h2>
          </div>
          <div className="p-8">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Tapas Chauds */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-amber-800 border-b border-amber-200 pb-2">
                  Tapas Chauds
                </h3>
                <div className="space-y-3">
                  {[
                    ["Croquetas de Jamón", "7€"],
                    ["Patatas Bravas", "6€"],
                    ["Gambas al Ajillo", "9€"],
                    ["Albondigas", "8€"],
                    ["Calamares Fritos", "8€"],
                    ["Tortilla Española", "6€"],
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{name}</span>
                      <span className="text-amber-900 font-medium text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tapas Froids */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-amber-800 border-b border-amber-200 pb-2">
                  Tapas Froids
                </h3>
                <div className="space-y-3">
                  {[
                    ["Jamón Ibérico", "12€"],
                    ["Planche de Fromages", "10€"],
                    ["Pan Con Tomate", "5€"],
                    ["Olives Marinées", "4€"],
                    ["Anchois Marinés", "7€"],
                    ["Tzatziki & Légumes", "6€"],
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{name}</span>
                      <span className="text-amber-900 font-medium text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Boissons Card */}
        <section className="mb-12 rounded-2xl bg-white border border-amber-200 shadow-sm overflow-hidden">
          <div className="bg-amber-900 px-8 py-4">
            <h2 className="text-2xl font-semibold text-amber-50">Nos Boissons</h2>
          </div>
          <div className="p-8">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Vins */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-amber-800 border-b border-amber-200 pb-2">
                  Vins
                </h3>
                <div className="space-y-3">
                  {[
                    ["Verre de Rouge", "5€"],
                    ["Verre de Blanc", "5€"],
                    ["Verre de Rosé", "5€"],
                    ["Bouteille", "20€"],
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{name}</span>
                      <span className="text-amber-900 font-medium text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bières */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-amber-800 border-b border-amber-200 pb-2">
                  Bières
                </h3>
                <div className="space-y-3">
                  {[
                    ["Pression 25cl", "3€"],
                    ["Pression 50cl", "5€"],
                    ["Bière Artisanale", "6€"],
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{name}</span>
                      <span className="text-amber-900 font-medium text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cocktails */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-amber-800 border-b border-amber-200 pb-2">
                  Cocktails
                </h3>
                <div className="space-y-3">
                  {[
                    ["Sangria", "7€"],
                    ["Mojito", "8€"],
                    ["Gin Tonic", "8€"],
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{name}</span>
                      <span className="text-amber-900 font-medium text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sans Alcool */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-amber-800 border-b border-amber-200 pb-2">
                  Sans Alcool
                </h3>
                <div className="space-y-3">
                  {[
                    ["Bière Sans Alcool", "4€"],
                    ["Coca-Cola", "3€"],
                    ["Coca-Cola Zéro", "3€"],
                    ["Jus d'Orange", "3€"],
                    ["Jus de Pomme", "3€"],
                    ["Limonade", "3€"],
                    ["Eau Minérale", "2€"],
                    ["Perrier", "3€"],
                    ["Thé Glacé", "3€"],
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{name}</span>
                      <span className="text-amber-900 font-medium text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block rounded-full border border-amber-900 px-8 py-3 text-base font-medium text-amber-900 transition-all hover:bg-amber-900 hover:text-white"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 py-8 text-center text-amber-100">
        <p>Le Barbylone - Bar & Tapas à Perpignan</p>
        <p className="mt-2 text-sm text-amber-200">
          Rue de Napoléon, 66000 Perpignan | 00 00 00 00 00
        </p>
      </footer>
    </div>
  );
}
