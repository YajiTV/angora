'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="font-title text-2xl tracking-tight text-black hover:opacity-70 transition-opacity">
                        Angora
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/femme" className="font-body text-sm uppercase tracking-wide text-black hover:opacity-60 transition-opacity">
                            Femme
                        </Link>
                        <Link href="/homme" className="font-body text-sm uppercase tracking-wide text-black hover:opacity-60 transition-opacity">
                            Homme
                        </Link>
                        <Link href="/collection" className="font-body text-sm uppercase tracking-wide text-black hover:opacity-60 transition-opacity">
                            Collection
                        </Link>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        <Link href="/cart" className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative">
                            <ShoppingBag className="w-5 h-5 text-black" />
                            <span className="absolute top-0 right-0 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center font-body">
                0
              </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-black" />
                            ) : (
                                <Menu className="w-6 h-6 text-black" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-neutral-200">
                        <nav className="flex flex-col gap-4">
                            <Link
                                href="/femme"
                                className="font-body text-sm uppercase tracking-wide text-black hover:opacity-60 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Femme
                            </Link>
                            <Link
                                href="/homme"
                                className="font-body text-sm uppercase tracking-wide text-black hover:opacity-60 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Homme
                            </Link>
                            <Link
                                href="/collection"
                                className="font-body text-sm uppercase tracking-wide text-black hover:opacity-60 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Collection
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
