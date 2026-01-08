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
      comment: "Ambiance chaleureuse et cocktails délicieux ! Le personnel est très accueillant. Je recommande vivement le mojito, il est parfait !",
    },
    {
      name: "Thomas L.",
      date: "Il y a 1 mois",
      rating: 5,
      comment: "Super bar à tapas ! Les portions sont généreuses et la sangria est excellente. Parfait pour passer une soirée entre amis.",
    },
    {
      name: "Marie D.",
      date: "Il y a 3 semaines",
      rating: 5,
      comment: "Un vrai coup de cœur ! Le cadre est sympa, les tapas sont délicieuses et l'équipe est au top. On reviendra c'est sûr !",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const comment = formData.get('comment');

    // Pour l'instant, on affiche juste une alerte
    alert(`Merci ${name} pour votre avis ! (Note: ${rating}/5)`);

    // Réinitialiser le formulaire
    e.currentTarget.reset();
    setRating(5);
  };

  return (
    <section id="avis" className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-amber-900">
          Avis & Contact
        </h2>

        <div className="grid gap-8 lg:grid-cols-[60%_40%]">
          {/* Section Contact */}
          <div id="contact">
            <h3 className="mb-6 text-center text-2xl font-bold text-amber-900">
              Contactez-nous
            </h3>
            <p className="mb-6 text-center text-gray-700">
              Une question ? Une réservation ? N'hésitez pas !
            </p>

            {/* Informations de contact */}
            <div className="mb-6 rounded-lg bg-white p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-700">Rue de Napoléon</p>
                    <p className="text-gray-700">66000 Perpignan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <a href="tel:0000000000" className="text-amber-700 hover:text-amber-600">
                      00 00 00 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:Lebarbylone@test.fr" className="text-amber-700 hover:text-amber-600">
                      Lebarbylone@test.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <a
                      href="https://instagram.com/Lebarbylone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-600"
                    >
                      @Lebarbylone
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-amber-900">
                Envoyez-nous un message
              </h4>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('contact-name');
                const email = formData.get('contact-email');
                alert(`Merci ${name} ! Nous avons bien reçu votre message et vous recontacterons rapidement.`);
                e.currentTarget.reset();
              }} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold text-gray-700">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact-name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="votre@email.fr"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="contact-phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="06 00 00 00 00"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="contact-message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-6 py-3 font-bold text-amber-900 transition-all hover:bg-amber-50 hover:scale-105 shadow-lg border-2 border-amber-900"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* Section Avis */}
          <div>
            <h3 className="mb-6 text-center text-2xl font-bold text-amber-900">
              Ce que nos clients disent
            </h3>
            <div className="mb-8 flex flex-col gap-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-4 shadow-md"
                >
                  {/* Stars */}
                  <div className="mb-2 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-amber-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="mb-3 text-sm text-gray-700">
                    "{review.comment}"
                  </p>

                  {/* Author & Date */}
                  <div className="border-t border-gray-200 pt-2">
                    <p className="text-sm font-semibold text-amber-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form to add review */}
            <div className="mt-6">
              <h3 className="mb-4 text-center text-xl font-bold text-amber-900">
                Laissez-nous votre avis
              </h3>
              <form
                onSubmit={handleSubmit}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-semibold text-gray-700"
              >
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ex: Sophie M."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Votre note
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <svg
                      className={`h-6 w-6 ${
                        star <= (hoverRating || rating)
                          ? 'fill-amber-500'
                          : 'fill-gray-300'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="mb-1 block text-sm font-semibold text-gray-700"
              >
                Votre commentaire
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                rows={3}
                placeholder="Partagez votre expérience au Barbylone..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-6 py-3 font-bold text-amber-900 transition-all hover:bg-amber-50 hover:scale-105 shadow-lg border-2 border-amber-900"
                >
                  Publier mon avis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
