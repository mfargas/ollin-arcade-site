import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://ollinarcade.fun";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ollin Arcade — Music Game for iOS | Play Arcade Games with Apple Music Playlists",
    template: "%s | Ollin Arcade",
  },
  description:
    "Ollin Arcade is a free indie music game for iPhone that pairs retro arcade games with Apple Music playlists. Play Soar, Slither, or Stack while skipping through chorus clips. Built with MusicKit. Like a song to save it to your library.",
  keywords: [
    "music game",
    "music game iOS",
    "Apple Music game",
    "Apple MusicKit",
    "MusicKit API",
    "indie game",
    "indie iOS game",
    "arcade game iPhone",
    "Flappy Bird music",
    "retro arcade game",
    "nostalgia game",
    "music discovery app",
    "playlist game",
    "chorus preview",
    "Ollin Arcade",
  ],
  authors: [{ name: "Marjoree Fargas", url: siteUrl }],
  creator: "Ollin Labs LLC",
  publisher: "Ollin Labs LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ollin Arcade",
    title: "Ollin Arcade — Music Game for iOS | Play Arcade Games with Apple Music Playlists",
    description:
      "A free indie music game for iPhone. Play retro arcade games while skipping through the chorus of every song on your Apple Music playlists.",
    images: [
      {
        url: "/images/app-icon.png",
        width: 512,
        height: 512,
        alt: "Ollin Arcade app icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ollin Arcade — Music Game for iOS",
    description:
      "Play retro arcade games while skipping through the chorus of every song on your Apple Music playlists. Free indie game for iPhone.",
    images: ["/images/app-icon.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Games",
  other: {
    "apple-itunes-app": "app-id=6760328332",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
