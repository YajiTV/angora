"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

type SearchBarProps = {
  data: string[];
  onClose?: () => void;
  inline?: boolean;
};

export default function SearchBar({ data, onClose, inline = false }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredData = query
    ? data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Focus automatique quand le composant s'ouvre
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Fermer quand on clique en dehors
  useEffect(() => {
    if (!inline) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [inline, onClose]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={1.5} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Rechercher..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-full font-body text-sm text-angora-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-angora-vanilla/50 focus:border-angora-vanilla transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Effacer"
          >
            <X className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Résultats */}
      {query && filteredData.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn z-50">
          <ul className="max-h-64 overflow-y-auto">
            {filteredData.map((item, index) => (
              <li
                key={index}
                className="px-4 py-3 font-body text-sm text-angora-nero hover:bg-angora-vanilla/10 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Aucun résultat */}
      {query && filteredData.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 animate-fadeIn z-50">
          <p className="font-body text-sm text-gray-500 text-center">
            Aucun résultat pour "{query}"
          </p>
        </div>
      )}
    </div>
  );
}