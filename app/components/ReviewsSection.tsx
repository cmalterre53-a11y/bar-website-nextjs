'use client';

import { useState } from 'react';

export default function ReviewsSection() {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const reviews = [
    {
      name: "Sophie M.",
      date: "Il y a 2 semaines",
      rating: 5,
      comment: "Ambiance chaleureuse et cocktails délicieux ! Le personnel est très accueillant. Je recommande vivement le mojito.",
    },
    {
      name: "Thomas L.",
      date: "Il y a 1 mois",
      rating: 5,
      comment: "Super bar à tapas ! Les portions sont généreuses et la sangria est excellente. Parfait pour une soirée entre amis.",
    },
    {
      name: "Marie D.",
      date: "Il y a 3 semaines",
      rating: 5,
      comment: "Un vrai coup de cœur ! Le cadre est sympa, les tapas sont délicieuses et l'équipe est au top.",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    alert(`Merci ${name} pour votre avis ! (Note: ${rating}/5)`);
    e.currentTarget.reset();
    setRating(5);
  };

  return (
    <section id="avis" className="bg-gradient-to-b from-stone-900 to-neutral-900 py-14 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-semibold text-amber-400">
          Avis & Contact
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact */}
          <div id="contact" className="space-y-6">
            <h3 className="text-lg font-semibold text-amber-300">Contactez-nous</h3>

            {/* Coordonnées en ligne */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rue de Napoléon, 66000 Perpignan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0000000000" className="text-amber-400 hover:text-amber-300 hover:underline">00 00 00 00 00</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Lebarbylone@test.fr" className="text-amber-400 hover:text-amber-300 hover:underline">Lebarbylone@test.fr</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://instagram.com/Lebarbylone" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline">@Lebarbylone</a>
              </div>
            </div>

            {/* Formulaire compact */}
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('contact-name');
              alert(`Merci ${name} ! Nous vous recontacterons rapidement.`);
              e.currentTarget.reset();
            }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="contact-name"
                  required
                  className="rounded border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                  placeholder="Nom *"
                />
                <input
                  type="email"
                  name="contact-email"
                  required
                  className="rounded border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                  placeholder="Email *"
                />
              </div>
              <input
                type="tel"
                name="contact-phone"
                className="w-full rounded border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                placeholder="Téléphone"
              />
              <textarea
                name="contact-message"
                required
                rows={3}
                className="w-full rounded border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                placeholder="Votre message..."
              />
              <button
                type="submit"
                className="rounded-full border border-amber-400 px-5 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-400 hover:text-gray-900"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Avis */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-amber-300">Ce que nos clients disent</h3>

            <div className="space-y-3">
              {reviews.map((review, index) => (
                <div key={index} className="border-l-2 border-amber-600/50 pl-4 py-2">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="h-3 w-3 fill-amber-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">"{review.comment}"</p>
                  <p className="mt-1 text-xs text-gray-500">
                    <span className="font-medium text-amber-400">{review.name}</span> · {review.date}
                  </p>
                </div>
              ))}
            </div>

            {/* Formulaire avis compact */}
            <form onSubmit={handleSubmit} className="space-y-3 border-t border-gray-700 pt-4">
              <p className="text-sm font-medium text-amber-300">Laissez votre avis</p>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="flex-1 rounded border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                />
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <svg
                        className={`h-5 w-5 ${
                          star <= (hoverRating || rating) ? 'fill-amber-500' : 'fill-gray-600'
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                name="comment"
                required
                rows={2}
                placeholder="Partagez votre expérience..."
                className="w-full rounded border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-amber-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full border border-amber-400 px-5 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-400 hover:text-gray-900"
              >
                Publier
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
