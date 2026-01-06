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
    <section className="bg-gradient-to-b from-amber-50 to-orange-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-5xl font-bold text-amber-900">
          Ils parlent de nous
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Découvrez les avis de nos clients
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-amber-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="mb-4 text-gray-700 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Author & Date */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-amber-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form to add review */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-3xl font-bold text-amber-900">
            Laissez-nous votre avis
          </h3>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-xl"
          >
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block font-semibold text-gray-700"
              >
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ex: Sophie M."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>

            {/* Rating */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold text-gray-700">
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
                      className={`h-8 w-8 ${
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
            <div className="mb-6">
              <label
                htmlFor="comment"
                className="mb-2 block font-semibold text-gray-700"
              >
                Votre commentaire
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                rows={4}
                placeholder="Partagez votre expérience au Barbylone..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-all hover:bg-amber-700 hover:scale-105"
            >
              Publier mon avis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
