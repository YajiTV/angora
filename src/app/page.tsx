//Home page
export default function Home() {
    return (
        <main className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
            <h1 className="font-title text-5xl text-black mb-4">
                Angora
            </h1>
            <p className="font-body text-lg text-neutral-700 mb-6 max-w-md text-center">
                L’élégance moderne, minimaliste et durable.<br />
                Découvrez notre collection 100% coton & laine, made in France.
            </p>
            <a
                href="#"
                className="mt-2 inline-block rounded-full bg-black text-white font-body px-6 py-3 text-base hover:bg-neutral-700 transition"
            >
                Découvrir la collection
            </a>
        </main>
    );
}
