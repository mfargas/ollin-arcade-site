import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Ollin Arcade",
  description: "Ollin Arcade privacy policy. We don't collect your data.",
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
            <Link className="nav-cta" href="/#download">Download</Link>
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

          <section className="prose-section">
            <p>
              Ollin Arcade is an iOS app that lets you play arcade games while
              cycling through song choruses from your Apple Music playlists.
              We built it for fun, not to harvest data. This policy explains
              exactly what the app does and doesn&apos;t do with your information.
            </p>
          </section>

          <section className="prose-section">
            <h2>Data we do not collect</h2>
            <p>
              We don&apos;t collect personal data. No accounts, no sign-ups, no
              emails. There are no servers, no analytics, no tracking pixels,
              and no ad networks. We don&apos;t know who you are, what you play,
              or what you listen to. That&apos;s by design.
            </p>
          </section>

          <section className="prose-section">
            <h2>Media library access</h2>
            <p>
              The app requests access to your local music library so it can
              read and display your playlists. This happens entirely on your
              device. Your library data is never sent anywhere — not to us,
              not to any third party.
            </p>
          </section>

          <section className="prose-section">
            <h2>Apple Music &amp; MusicKit</h2>
            <p>
              Ollin Arcade uses Apple&apos;s MusicKit framework to let you connect
              your Apple Music account. This is how the app accesses playlists
              and adds liked songs to your library. The connection is handled
              entirely by Apple — we never receive, see, or store your Apple
              Music credentials or account data.
            </p>
          </section>

          <section className="prose-section">
            <h2>Locally stored data</h2>
            <p>
              Game scores and preferences are saved on your device using
              standard local storage. This data is never transmitted off your
              device.
            </p>
          </section>

          <section className="prose-section">
            <h2>Third-party services</h2>
            <p>
              The only third-party integration is Apple&apos;s MusicKit. We do not
              use ad networks, analytics SDKs, crash reporters, or any other
              tracking tools.
            </p>
          </section>

          <section className="prose-section">
            <h2>Children&apos;s privacy</h2>
            <p>
              Since we don&apos;t collect data from anyone, we don&apos;t collect data
              from children either. The app has no accounts, no data
              collection, and no way to identify any user of any age.
            </p>
          </section>

          <section className="prose-section">
            <h2>Changes to this policy</h2>
            <p>
              If we update this policy, we&apos;ll post the revised version here
              with a new date. We won&apos;t reduce your privacy protections
              without making it clear.
            </p>
          </section>

          <section className="prose-section">
            <h2>Contact</h2>
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
          &copy; {new Date().getFullYear()} Ollin Arcade
        </span>
      </footer>
    </>
  );
}
