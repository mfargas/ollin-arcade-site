import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Ollin Arcade",
  description:
    "Get help with Ollin Arcade. FAQs on connecting Apple Music, selecting playlists, saving songs, and troubleshooting the iOS music game.",
  alternates: {
    canonical: "https://ollinarcade.fun/support",
  },
};

const faqs = [
  {
    q: "How do I connect Apple Music?",
    a: "When you first open the app, it'll ask for permission to access your Apple Music account. Tap Allow. If you skipped it, go to Settings → Ollin Arcade on your iPhone and enable Media & Apple Music access.",
  },
  {
    q: "How do I select a playlist and start a game?",
    a: "From the home screen, pick a game — Stack, Slither, or Soar. You'll be prompted to choose a playlist from your Apple Music library. Select one and the game starts immediately, cycling through chorus clips from each track.",
  },
  {
    q: "How do I add a song to my library?",
    a: "While playing, tap the heart icon when you hear a song you like. It gets added directly to your Apple Music library. You can keep playing — no interruption.",
  },
  {
    q: "A playlist isn't showing up. What do I do?",
    a: "Make sure the playlist is saved to your Apple Music library (not just shared with you via link). If it still doesn't appear, try closing and reopening the app. Playlists from your local device library should also show up if you've granted media access.",
  },
  {
    q: "Apple Music isn't connecting.",
    a: "Open your iPhone Settings → Ollin Arcade and make sure Media & Apple Music is toggled on. Also confirm you have an active Apple Music subscription. If it's still not working, try restarting the app or your device.",
  },
];

function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Support() {
  return (
    <>
      <FaqJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>

      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="nav-brand">
          <Image src="/images/app-icon.png" alt="" width={36} height={36} />
          Ollin Arcade
        </Link>
        <ul className="nav-links">
          <li><Link href="/#games">Games</Link></li>
          <li><Link href="/#features">Features</Link></li>
          <li>
            <a className="nav-cta" href="https://apps.apple.com/ca/app/ollin-arcade/id6760328332" target="_blank" rel="noopener noreferrer">Download</a>
          </li>
        </ul>
      </nav>

      <main id="main">
        <article className="prose">
          <header className="prose-header">
            <span className="prose-label mono">Support</span>
            <h1>Need help? We&apos;ve got you.</h1>
            <p className="prose-sub">
              Most issues can be solved with the answers below. If not,
              reach out and we&apos;ll figure it out together.
            </p>
          </header>

          <section className="prose-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{faq.q}</summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="prose-section" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Still stuck?</h2>
            <p>
              Send us an email at{" "}
              <a href="mailto:support@ollinlabs.io" className="prose-link">
                support@ollinlabs.io
              </a>{" "}
              and we&apos;ll get back to you.
            </p>
            <p className="prose-note mono">
              Ollin Arcade is built by a solo developer. Responses may take
              1–2 business days. Thanks for your patience.
            </p>
          </section>
        </article>
      </main>

      <footer className="footer">
        <Link href="/" className="footer-brand">
          <Image src="/images/app-icon.png" alt="" width={28} height={28} />
          Ollin Arcade
        </Link>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/support" className="footer-link">Support</Link>
          <Link href="/privacy" className="footer-link">Privacy</Link>
        </nav>
        <span className="footer-copy mono">
          &copy; {new Date().getFullYear()} Ollin Labs LLC
        </span>
      </footer>
    </>
  );
}
