import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Angora",
    description: "Angora - Mode élégante, minimaliste, 100% coton et laine, made in France.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <body>
        {children}
        </body>
        </html>
    );
}
