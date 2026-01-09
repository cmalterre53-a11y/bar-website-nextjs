'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Pour l'instant, on affiche une alerte
    // Plus tard, on pourra intégrer un service d'envoi d'emails
    alert(`Merci ${formData.name} ! Nous avons bien reçu votre message et vous recontacterons rapidement.`);

    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-amber-50 to-orange-50 py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-amber-900">
          Contactez-nous
        </h2>
        <p className="mb-8 text-center text-lg text-gray-700">
          Une question ? Une réservation ? N'hésitez pas à nous contacter !
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Informations de contact */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-amber-900">
              Nos coordonnées
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="h-6 w-6 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="h-6 w-6 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="h-6 w-6 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-amber-900">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-gray-700">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  placeholder="votre@email.fr"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  placeholder="06 00 00 00 00"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-all hover:bg-amber-700 hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
