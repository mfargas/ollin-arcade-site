import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="nav-brand">
          <Image src="/images/app-icon.png" alt="" width={36} height={36} />
          Ollin Arcade
        </Link>
        <ul className="nav-links">
          <li><a href="#games">Games</a></li>
          <li><a href="#features">Features</a></li>
          <li>
            <a className="nav-cta" href="#download">Download</a>
          </li>
        </ul>
      </nav>

      <main id="main">
        {/* ── Hero ── */}
        <section className="hero" aria-labelledby="hero-heading">
          <h1 id="hero-heading">
            Arcade games that play<br />
            through your playlists.
          </h1>
          <p className="hero-sub">
            Stack, Slither, or Soar — each game shuffles through{" "}
            <span className="mono">5–15s</span> chorus clips from Apple Music.
            Discover new music while you play. Like a song to save it.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#download">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
          </div>
          <div className="hero-phones" aria-hidden="true">
            <Image className="phone side" src="/images/soar.png" alt="" width={220} height={476} />
            <Image className="phone main" src="/images/stack.png" alt="" width={260} height={563} />
            <Image className="phone side" src="/images/slither.png" alt="" width={220} height={476} />
          </div>
        </section>

        {/* ── Games ── */}
        <section className="games" id="games" aria-labelledby="games-heading">
          <h2 className="sr-only" id="games-heading">Games</h2>

          <div className="game-row">
            <div className="game-visual">
              <Image src="/images/soar.png" alt="Soar gameplay screenshot showing a flappy-style game with neon obstacles" width={260} height={563} />
            </div>
            <div className="game-text">
              <span className="game-label soar-accent">Soar</span>
              <h3>Tap to fly. Dodge everything.</h3>
              <p>
                A flappy-style game where you navigate through neon pillars.
                Every obstacle you clear skips to the next chorus.
              </p>
            </div>
          </div>

          <div className="game-row reverse">
            <div className="game-visual">
              <Image src="/images/slither.png" alt="Slither gameplay screenshot showing a snake game with directional controls" width={260} height={563} />
            </div>
            <div className="game-text">
              <span className="game-label slither-accent">Slither</span>
              <h3>Eat. Grow. Don&apos;t crash.</h3>
              <p>
                Classic snake with a soundtrack. Collect food, grow longer, and
                preview songs as you play.
              </p>
            </div>
          </div>

          <div className="game-row">
            <div className="game-visual">
              <Image src="/images/stack.png" alt="Stack gameplay screenshot showing a falling-block puzzle game" width={260} height={563} />
            </div>
            <div className="game-text">
              <span className="game-label stack-accent">Stack</span>
              <h3>Drop blocks. Clear lines.</h3>
              <p>
                A falling-block puzzle game. Clear rows while tracks rotate through
                your playlist in the background.
              </p>
            </div>
          </div>
        </section>

        {/* ── Features (bento) ── */}
        <section className="bento" id="features" aria-labelledby="features-heading">
          <h2 className="sr-only" id="features-heading">Features</h2>
          <div className="bento-grid">
            <div className="bento-card wide">
              <span className="bento-label">Apple Music</span>
              <h3>Plays through your playlists</h3>
              <p>
                Connect your Apple Music library, pick a playlist, and start a game.
                Each song plays a <span className="mono">5–15s</span> clip of its
                chorus before skipping to the next track.
              </p>
            </div>
            <div className="bento-card">
              <span className="bento-label">Like to Save</span>
              <h3>Hear it. Like it. Keep it.</h3>
              <p>
                Tap the heart mid-game to save any song directly to your Apple
                Music library.
              </p>
            </div>
            <div className="bento-card">
              <span className="bento-label">Shuffle</span>
              <h3>Switch playlists anytime</h3>
              <p>
                Pause and swap playlists or shuffle tracks without leaving
                the game.
              </p>
            </div>
            <div className="bento-card wide">
              <span className="bento-label">Discovery</span>
              <h3>Skip through the chorus of every song</h3>
              <p>
                Stop scrolling through 30-second previews. Ollin plays the best
                part of each song back-to-back so you can find music you
                actually like, fast.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta" id="download" aria-labelledby="cta-heading">
          <h2 id="cta-heading">Play games. Find music.</h2>
          <p>Free on the App Store.</p>
          <a className="btn-primary" href="#">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
        </section>
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
