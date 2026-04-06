import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ollin Arcade",
  description:
    "Ollin Arcade privacy policy. The iOS music game collects no personal data. No accounts, no analytics, no tracking. Apple MusicKit is the only third-party integration.",
  alternates: {
    canonical: "https://ollinarcade.fun/privacy",
  },
};

export default function Privacy() {
  return (
    <>
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
            <span className="prose-label mono">Privacy Policy</span>
            <h1>Your data stays on your device.</h1>
            <p className="prose-updated mono">
              <time dateTime="2026-03-10">Last updated March 10, 2026</time>
            </p>
          </header>

          <div className="prose-section">
            <p>
              Ollin Arcade is an iOS music game that lets you play nostalgic
              arcade games while cycling through song choruses from your Apple
              Music playlists. We built it for fun, not to harvest data. This
              policy explains exactly what the app does and doesn&apos;t do with
              your information.
            </p>
          </div>

          <section className="prose-section" aria-labelledby="no-data-heading">
            <h2 id="no-data-heading">Data we do not collect</h2>
            <p>
              We don&apos;t collect personal data. No accounts, no sign-ups, no
              emails. There are no servers, no analytics, no tracking pixels,
              and no ad networks. We don&apos;t know who you are, what you play,
              or what you listen to. That&apos;s by design.
            </p>
          </section>

          <section className="prose-section" aria-labelledby="media-heading">
            <h2 id="media-heading">Media library access</h2>
            <p>
              The app requests access to your local music library so it can
              read and display your playlists. This happens entirely on your
              device. Your library data is never sent anywhere — not to us,
              not to any third party.
            </p>
          </section>

          <section className="prose-section" aria-labelledby="musickit-heading">
            <h2 id="musickit-heading">Apple Music &amp; MusicKit</h2>
            <p>
              Ollin Arcade uses Apple&apos;s MusicKit API to let you connect
              your Apple Music account. This is how the app accesses playlists
              and adds liked songs to your library. The connection is handled
              entirely by Apple — we never receive, see, or store your Apple
              Music credentials or account data.
            </p>
          </section>

          <section className="prose-section" aria-labelledby="local-heading">
            <h2 id="local-heading">Locally stored data</h2>
            <p>
              Game scores and preferences are saved on your device using
              standard local storage. This data is never transmitted off your
              device.
            </p>
          </section>

          <section className="prose-section" aria-labelledby="third-party-heading">
            <h2 id="third-party-heading">Third-party services</h2>
            <p>
              The only third-party integration is Apple&apos;s MusicKit API. We
              do not use ad networks, analytics SDKs, crash reporters, or any
              other tracking tools.
            </p>
          </section>

          <section className="prose-section" aria-labelledby="children-heading">
            <h2 id="children-heading">Children&apos;s privacy</h2>
            <p>
              Since we don&apos;t collect data from anyone, we don&apos;t collect data
              from children either. The app has no accounts, no data
              collection, and no way to identify any user of any age.
            </p>
          </section>

          <section className="prose-section" aria-labelledby="changes-heading">
            <h2 id="changes-heading">Changes to this policy</h2>
            <p>
              If we update this policy, we&apos;ll post the revised version here
              with a new date. We won&apos;t reduce your privacy protections
              without making it clear.
            </p>
          </section>

          <section className="prose-section" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact</h2>
            <p>
              Questions or concerns? Reach us at{" "}
              <a href="mailto:support@ollinlabs.io" className="prose-link">
                support@ollinlabs.io
              </a>.
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
