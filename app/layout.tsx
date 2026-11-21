
import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://oiseokugbe.vercel.app"),
    title: { default: "Oise | Full-Stack Developer", template: "%s | Oise" },
      description: "I'm Oise, a full-stack developer building modern, responsive and high-performance websites for businesses in Nigeria.",
        applicationName: "Oise.dev",
          authors: [{ name: "Oise" }],
            creator: "Oise",
              publisher: "Oise",
                keywords: ["Oise Giwa-Okugbe", "Web Developer Nigeria", "Full Stack Developer Nigeria", "Freelance Web Developer", "Next.js Developer", "React Developer", "TypeScript Developer", "Business Website Design", "Landing Page Developer", "Frontend Developer"],
                  openGraph: {
                      type: "website", locale: "en_NG", url: "/", siteName: "Oise.dev",
                          title: "Oise | Full-Stack Developer",
                              description: "Building modern websites and digital experiences for businesses.",
                                  images: [{ url: "/og-image.jpg", width: 1200, height: 675, alt: "Oise - Full-Stack Developer Portfolio" }],
                                    },
                                      twitter: { card: "summary_large_image", title: "Oise | Full-Stack Developer", description: "Building modern websites and digital experiences for businesses.", images: ["/og-image.jpg"] },
                                        robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
                                          verification: { google: "mtTbcdTD0ygT03gell3w7Qdxl3g5cH6viUMeQUtUIrA" },
                                            alternates: { canonical: "/" },
                                              icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
                                                category: "technology",
                                                };

                                                export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#151C2C" };

                                                export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
                                                  return (
                                                      <html lang="en-NG">
                                                            <body className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}>{children}</body>
                                                                </html>
                                                                  );
                                                                  }
                                                                  