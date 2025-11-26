// ============================================
// CATALOGUE HOMME - ANGORA
// ============================================

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SlidersHorizontal, Heart } from 'lucide-react';

export default function HommePage() {
    const [sortBy, setSortBy] = useState('nouveautes');

    // Produits (plus tard depuis base de données)
    const products = [
        {
            id: 1,
            name: "Pull col roulé en laine mérinos",
            price: 89.00,
            material: "100% Laine mérinos",
            colors: ["Noir", "Beige", "Gris"],
            image: "/images/products/homme-pull-1.jpg",
            badge: "Nouveauté"
        },
        {
            id: 2,
            name: "Chemise Oxford classique",
            price: 75.00,
            material: "100% Coton",
            colors: ["Blanc", "Bleu ciel"],
            image: "/images/products/homme-chemise-1.jpg",
            badge: null
        },
        {
            id: 3,
            name: "Pantalon chino coupe droite",
            price: 95.00,
            material: "100% Coton biologique",
            colors: ["Beige", "Marine", "Kaki"],
            image: "/images/products/homme-pantalon-1.jpg",
            badge: "Made in France"
        },
        {
            id: 4,
            name: "Gilet cardigan boutonné",
            price: 110.00,
            material: "100% Laine",
            colors: ["Beige", "Marine"],
            image: "/images/products/homme-gilet-1.jpg",
            badge: null
        },
        {
            id: 5,
            name: "Manteau laine double face",
            price: 245.00,
            material: "100% Laine vierge",
            colors: ["Camel", "Marine"],
            image: "/images/products/homme-manteau-1.jpg",
            badge: "Nouveauté"
        },
        {
            id: 6,
            name: "T-shirt col rond essential",
            price: 45.00,
            material: "100% Coton pima",
            colors: ["Blanc", "Noir", "Beige"],
            image: "/images/products/homme-tshirt-1.jpg",
            badge: null
        },
    ];

    return (
        <main className="min-h-screen bg-angora-white">

            {/* Header de la page */}
            <div className="border-b border-gray-200 bg-angora-vanilla/5">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
                    <h1 className="font-title text-6xl md:text-7xl text-angora-black mb-4 tracking-tight">
                        Homme
                    </h1>
                    <p className="font-body text-sm uppercase tracking-[0.15em] text-angora-nero/60">
                        {products.length} articles
                    </p>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">

                {/* Barre de filtres et tri */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pb-6 border-b border-gray-200">

                    {/* Filtres (gauche) */}
                    <button className="flex items-center gap-2 font-body text-sm uppercase tracking-wider text-angora-nero hover:text-angora-black transition-colors">
                        <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                        Filtres
                    </button>

                    {/* Tri (droite) */}
                    <div className="flex items-center gap-3">
            <span className="font-body text-xs uppercase tracking-wider text-angora-nero/60">
              Trier par:
            </span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="font-body text-sm uppercase tracking-wider text-angora-black border border-gray-300 px-4 py-2 hover:border-angora-vanilla focus:border-angora-black focus:outline-none transition-colors cursor-pointer"
                        >
                            <option value="nouveautes">Nouveautés</option>
                            <option value="prix-croissant">Prix croissant</option>
                            <option value="prix-decroissant">Prix décroissant</option>
                            <option value="nom">Nom A-Z</option>
                        </select>
                    </div>
                </div>

                {/* Grille de produits */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/homme/${product.id}`}
                            className="group"
                        >
                            <div className="relative">
                                {/* Image produit */}
                                <div className="aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden relative">
                                    {/* Placeholder image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-xs text-neutral-400 uppercase tracking-wider text-center px-4">
                      {product.name}
                    </span>
                                    </div>

                                    {/* Badge */}
                                    {product.badge && (
                                        <div className="absolute top-3 left-3 bg-angora-white px-3 py-1 text-[9px] font-body uppercase tracking-wider text-angora-nero">
                                            {product.badge}
                                        </div>
                                    )}

                                    {/* Hover: Bouton favoris */}
                                    <button className="absolute top-3 right-3 w-10 h-10 bg-angora-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-angora-vanilla">
                                        <Heart className="w-5 h-5 text-angora-nero" strokeWidth={1.5} />
                                    </button>

                                    {/* Hover: Quick add */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-angora-black text-angora-white py-3 text-center font-body text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-angora-vanilla hover:text-angora-nero">
                                        Ajouter au panier
                                    </div>
                                </div>

                                {/* Infos produit */}
                                <div>
                                    <h3 className="font-body text-sm text-angora-black mb-1 group-hover:text-angora-vanilla transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="font-body text-xs uppercase tracking-wider text-angora-nero/60 mb-2">
                                        {product.material}
                                    </p>

                                    {/* Couleurs disponibles */}
                                    <div className="flex gap-1.5 mb-3">
                                        {product.colors.map((color) => (
                                            <div
                                                key={color}
                                                className="w-4 h-4 rounded-full border border-gray-300"
                                                style={{
                                                    backgroundColor:
                                                        color === 'Noir' ? '#000000' :
                                                            color === 'Blanc' ? '#FFFFFF' :
                                                                color === 'Beige' ? '#CFC1A7' :
                                                                    color === 'Gris' ? '#888888' :
                                                                        color === 'Marine' ? '#1a1a2e' :
                                                                            color === 'Bleu ciel' ? '#87CEEB' :
                                                                                color === 'Camel' ? '#C19A6B' :
                                                                                    color === 'Kaki' ? '#8A7F6D' :
                                                                                        '#CCCCCC'
                                                }}
                                                title={color}
                                            />
                                        ))}
                                    </div>

                                    <p className="font-title text-lg text-angora-black">
                                        {product.price.toFixed(2)} €
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bannière engagements */}
                <div className="mt-20 pt-12 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-angora-vanilla/20 flex items-center justify-center">
                                <span className="font-title text-2xl text-angora-black">🇫🇷</span>
                            </div>
                            <h3 className="font-body text-xs uppercase tracking-[0.15em] text-angora-black mb-2">
                                Made in France
                            </h3>
                            <p className="font-body text-xs text-angora-nero/70 leading-relaxed">
                                Confection artisanale française
                            </p>
                        </div>

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-angora-vanilla/20 flex items-center justify-center">
                                <span className="font-title text-2xl text-angora-black">🌿</span>
                            </div>
                            <h3 className="font-body text-xs uppercase tracking-[0.15em] text-angora-black mb-2">
                                Matières naturelles
                            </h3>
                            <p className="font-body text-xs text-angora-nero/70 leading-relaxed">
                                100% coton et laine de qualité
                            </p>
                        </div>

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-angora-vanilla/20 flex items-center justify-center">
                                <span className="font-title text-2xl text-angora-black">♻️</span>
                            </div>
                            <h3 className="font-body text-xs uppercase tracking-[0.15em] text-angora-black mb-2">
                                Retours gratuits
                            </h3>
                            <p className="font-body text-xs text-angora-nero/70 leading-relaxed">
                                Sous 30 jours, sans condition
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
