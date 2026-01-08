'use client';

import { useState, useEffect } from 'react';

const cocktails = [
  {
    name: 'Mojito',
    image: '/cocktails/mojito.webp',
  },
  {
    name: 'Sangria',
    image: '/cocktails/sangria.jpg',
  },
  {
    name: 'Gin Tonic',
    image: '/cocktails/gin-tonic.jpg',
  },
];

export default function CocktailCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cocktails.length);
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-neutral-900 to-stone-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-center text-5xl font-bold text-amber-400">
          Cocktails
        </h2>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-black/30 p-8 shadow-2xl backdrop-blur-sm">
          <div className="flex h-[400px] transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {cocktails.map((cocktail, index) => (
              <div
                key={index}
                className="relative min-w-full flex-shrink-0"
              >
                <div className="flex h-full items-center justify-center gap-6 px-12">
                  <div
                    className="h-[360px] w-[270px] rounded-xl bg-cover bg-center shadow-2xl ring-4 ring-amber-400/30"
                    style={{ backgroundImage: `url('${cocktail.image}')` }}
                  >
                    <div className="flex h-full items-end justify-center rounded-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <h3 className="text-3xl font-bold text-white drop-shadow-2xl">
                        {cocktail.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
            {cocktails.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-amber-400 w-10 shadow-lg'
                    : 'bg-white/50 w-3 hover:bg-white/75'
                }`}
                aria-label={`Aller au cocktail ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
