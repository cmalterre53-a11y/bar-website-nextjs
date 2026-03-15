'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function InscriptionPage() {
  const router = useRouter();
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        prenom,
        nom,
        email,
        points: 0,
        createdAt: serverTimestamp(),
      });

      router.push('/compte');
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes('email-already-in-use')) {
          setError('Cette adresse email est déjà utilisée.');
        } else if (err.message.includes('weak-password')) {
          setError('Le mot de passe doit contenir au moins 6 caractères.');
        } else if (err.message.includes('invalid-email')) {
          setError('Adresse email invalide.');
        } else {
          setError('Une erreur est survenue. Veuillez réessayer.');
        }
      }
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <div className="pt-28 pb-16 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-amber-400 text-center mb-2">
            Créer un compte
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Rejoignez le programme de fidélité du Barbylone
          </p>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-300 mb-1">
                  Prénom
                </label>
                <input
                  id="prenom"
                  type="text"
                  required
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom
                </label>
                <input
                  id="nom"
                  type="text"
                  required
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                placeholder="jean.dupont@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                placeholder="Minimum 6 caractères"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? 'Création en cours...' : "S'inscrire"}
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6 text-sm">
            Déjà un compte ?{' '}
            <Link href="/connexion" className="text-amber-400 hover:text-amber-300 transition-colors">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
