'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

export default function ComptePage() {
  const { user, userData, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/connexion');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/connexion');
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <div className="pt-28 flex justify-center">
          <div className="text-gray-400 text-lg">Chargement...</div>
        </div>
      </main>
    );
  }

  if (!user || !userData) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <div className="pt-28 pb-16 px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-amber-400 text-center mb-2">
            Mon compte
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Bienvenue, {userData.prenom} !
          </p>

          {/* Carte de fidélité */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-amber-900 font-bold text-sm uppercase tracking-wider">
                Carte de fidélité
              </span>
              <span className="text-amber-900/70 text-xs font-medium">
                Le Barbylone
              </span>
            </div>
            <div className="text-5xl font-bold text-white mb-1">
              {userData.points}
            </div>
            <div className="text-amber-100 text-sm">
              points de fidélité
            </div>
          </div>

          {/* Infos personnelles */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-amber-400 mb-4">
              Mes informations
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400 text-sm">Prénom</span>
                <span className="text-white font-medium">{userData.prenom}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400 text-sm">Nom</span>
                <span className="text-white font-medium">{userData.nom}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 text-sm">Email</span>
                <span className="text-white font-medium">{userData.email}</span>
              </div>
            </div>
          </div>

          {/* Bouton déconnexion */}
          <button
            onClick={handleLogout}
            className="w-full py-3 bg-transparent border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400 font-semibold rounded-lg transition-all duration-300"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </main>
  );
}
