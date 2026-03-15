'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function ConnexionPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/compte');
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes('user-not-found') || err.message.includes('invalid-credential')) {
          setError('Email ou mot de passe incorrect.');
        } else if (err.message.includes('wrong-password')) {
          setError('Email ou mot de passe incorrect.');
        } else if (err.message.includes('too-many-requests')) {
          setError('Trop de tentatives. Veuillez réessayer plus tard.');
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
            Connexion
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Accédez à votre espace fidélité
          </p>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                placeholder="Votre mot de passe"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6 text-sm">
            Pas encore de compte ?{' '}
            <Link href="/inscription" className="text-amber-400 hover:text-amber-300 transition-colors">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
