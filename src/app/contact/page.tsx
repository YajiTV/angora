"use client";

export default function ContactPage() {
  return (
    <main className="bg-[#0d2533] min-h-screen">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-b from-neutral-200/40 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase">
            Une question, un besoin, un projet ?
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Contactez-nous, nos conseillers vous répondront !
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-200">
            Remplissez le formulaire ou contactez directement notre service client.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            {/* Colonne gauche : blocs vides */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Agence 1
                </h2>
                <p className="mt-2 text-sm text-neutral-200">
                  adresse<br />
                  email<br />
                  Tél : tel
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Agence 2
                </h2>
                <p className="mt-2 text-sm text-neutral-200">
                  adresse<br />
                  email<br />
                  Tél : tel
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Agence 3
                  </h2>
                  <p className="mt-2 text-sm text-neutral-200">
                    adresse<br />
                    email<br />
                    Tél : tel
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Agence 4
                  </h2>
                  <p className="mt-2 text-sm text-neutral-200">
                    adresse<br />
                    email<br />
                    Tél : tel
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite : formulaire */}
            <div className="bg-[#ff5a4d] text-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold">
                Demande d'information
              </h2>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Formulaire envoyé (test) !");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium uppercase mb-1">
                      Vous êtes *
                    </label>
                    <select
                      name="youAre"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                      required>
                      <option value="">Sélectionner</option>
                      <option value="particulier">Particulier</option>
                      <option value="entreprise">Entreprise</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium uppercase mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium uppercase mb-1">
                      Département *
                    </label>
                    <input
                      type="text"
                      name="departement"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase mb-1">
                    Commentaire *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                    required
                  />
                </div>

                <div className="mt-4 rounded-md bg-white text-neutral-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4" required />
                    <span className="text-xs">
                      Je ne suis pas un robot
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded bg-neutral-200" />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-[#01356b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#012646] transition"
                >
                  ENVOYER MA DEMANDE
                </button>

                <p className="mt-3 text-[11px] text-white/80 leading-snug">
                  En cliquant ci-dessus sur envoyer ma demande, vous acceptez nos
                  conditions générales d'utilisation et notre politique de
                  confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
