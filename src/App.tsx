import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    const onHash = () => setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <main className="page">
      <header className="header">
        <a className="brand" href="#">
          <img
            src="/logo-shield.png"
            alt="SafeBlink logo"
            className="brand-mark"
          />
          <span className="brand-text">SafeBlink</span>
        </a>

        <nav className="nav nav-desktop" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a className="btn btn--ghost" href="#brief">
            Brief
          </a>
          <a className="btn btn--primary" href="#get">
            Get Extension
          </a>
        </nav>

        <button
          className={`nav-mobile-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="burger-lines">
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </span>
        </button>
      </header>

      <aside
        id="mobile-menu"
        className={`nav-drawer ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="nav nav-mobile">
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#how" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <a href="#security" onClick={() => setMenuOpen(false)}>
            Security
          </a>
          <a
            className="btn btn--ghost"
            href="#brief"
            onClick={() => setMenuOpen(false)}
          >
            Brief
          </a>
          <a
            className="btn btn--primary"
            href="#get"
            onClick={() => setMenuOpen(false)}
          >
            Get Extension
          </a>
        </nav>
      </aside>
      {menuOpen && (
        <div className="backdrop show" onClick={() => setMenuOpen(false)} />
      )}

      <section className="hero">
        <div className="hero-left">
          <span className="badge">Scale Blinks safely</span>
          <h1>
            Safer <span className="accent">Blinks</span>.<br />
            Instant clarity <span className="nowrap">before you sign.</span>
          </h1>
          <p className="lead">
            SafeBlink explains what a Solana Blink/Action will actually
            do—tokens moved, accounts touched, fees, and risks—so you can
            approve with confidence.
          </p>
          <div className="cta-row">
            <a className="btn btn--primary" href="#get">
              Get Extension
            </a>
            <a className="btn btn--secondary" href="#brief">
              Read the brief
            </a>
          </div>
          <ul className="hero-points">
            <li>Human-readable summaries for SPL & common programs</li>
            <li>Program trust checks & known lists</li>
            <li>Optional simulation & outcome preview</li>
          </ul>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <img
              src="/logo-wordmark.png"
              alt="SafeBlink lockup"
              className="hero-logo"
            />
          </div>
        </div>
      </section>

      <section id="features" className="section section--dark">
        <div className="section-inner">
          <h2>What SafeBlink does for you</h2>
          <p className="lead">
            Open any Blink. Get a clean, human summary. See risk at a glance.
            Decide fast.
          </p>

          <div className="features-grid features-grid--stagger">
            <article className="card card--accent card--wide">
              <div className="card-head">
                <span className="kicker">Decode</span>
                <span className="icon">🔍</span>
              </div>
              <h3>Plain-English transaction breakdown</h3>
              <p>
                We translate System, SPL Token and popular
                programs into clear actions: who sends what, to whom, and which
                accounts are touched.
              </p>
            </article>

            <article className="card sparkle">
              <div className="card-head">
                <span className="kicker">Verify</span>
                <span className="icon">🛡️</span>
              </div>
              <h3>Trust signals before you trust the link</h3>
              <p>
                Known program lists, verified source, and red flags for unknown
                IDs—so you spot surprises
                <em> before</em> the wallet asks to sign.
              </p>
            </article>

            <article className="card">
              <div className="card-head">
                <span className="kicker">Simulate</span>
                <span className="icon">⚙️</span>
              </div>
              <h3>Dry-run the outcome</h3>
              <p>
                Optional RPC simulation previews state changes and fees
                so you can confirm the result—not just hope for it.
              </p>
            </article>

            <article className="card card--accent">
              <div className="card-head">
                <span className="kicker">Explain</span>
                <span className="icon">🚦</span>
              </div>
              <h3>Green / Yellow / Red signals</h3>
              <p>
                A single indicator summarizes risk, with quick links to
                explorers and audits for deeper due diligence.
              </p>
            </article>

            <article className="card">
              <div className="card-head">
                <span className="kicker">Privacy</span>
                <span className="icon">🔒</span>
              </div>
              <h3>Local-first by default</h3>
              <p>
                Keys never leave your wallet. SafeBlink doesn’t sign for you and
                can run against providers you configure.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="how" className="section section--darker">
        <div className="section-inner">
          <h2>From blink to clarity in 10 seconds</h2>
          <p className="lead">Open. Inspect. Decide. That’s it.</p>

          <div className="steps">
            <div className="step">
              <h3>1) Open the Blink</h3>
              <p>
                SafeBlink fetches the prepared transaction from the Action
                endpoint for your wallet—no extra setup needed.
              </p>
            </div>
            <div className="step">
              <h3>2) Decode & sanity-check</h3>
              <p>
                We summarize instructions, surface trust signals, and optionally
                simulate to preview outcomes and fee impact.
              </p>
            </div>
            <div className="step">
              <h3>3) Approve with confidence</h3>
              <p>
                A concise, auditable summary plus a risk color lets you
                continue—or back out—before the sign prompt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="brief" className="section section--darker">
        <div className="section-inner">
          <h2>Product brief</h2>

          <div className="brief">
            <div className="doc">
              <h3>Problem</h3>
              <ul>
                <li>
                  Blinks are powerful, but users must trust that the link they
                  clicked is safe and the code is legit.
                </li>
                <li>
                  Most wallets keep Blinks opt-in/experimental; there’s little
                  visibility into what a transaction will do.
                </li>
                <li>
                  People need clarity on tokens moved, accounts written, and
                  fees—before they sign.
                </li>
              </ul>
            </div>

            <div className="doc">
              <h3>Solution</h3>
              <ul>
                <li>
                  A browser extension that intercepts Actions and shows a
                  plain-English, wallet-aware summary.
                </li>
                <li>
                  Trust signals (verified code, known program lists) and
                  optional simulation to preview outcomes.
                </li>
                <li>
                  Local-first analysis using configurable RPCs/APIs; private
                  keys are never accessed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="get" className="section section--full">
        <div className="full-bleed-bg" />
        <div className="section-inner section-inner--wide">
          <div className="cta cta--full">
            <div className="cta-copy">
              <h2>Get SafeBlink</h2>
              <p className="lead">
                Install the extension and start reading Blinks like a human
                wrote them.
              </p>
              <div className="cta-row">
                <a className="btn btn--primary" href="#">
                  Add to Chrome
                </a>
                <a className="btn btn--secondary" href="#">
                  Add to Firefox
                </a>
                <a className="btn btn--ghost" href="#features">
                  Explore features
                </a>
              </div>
              <ul className="trust-list">
                <li>Non-custodial</li>
                <li>Local-first</li>
                <li>Audit-friendly</li>
              </ul>
            </div>
            <div className="cta-art">
              <div className="glow-orb" />
              <img src="/logo-wordmark.png" alt="" className="cta-badge" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="row">
          <img src="/logo-shield.png" alt="" className="brand-mark" />
          <span>© {new Date().getFullYear()} SafeBlink</span>
        </div>
        <div className="row">
          <a href="#features">Features</a>
          <a href="#how">How</a>
          <a href="#security">Security</a>
          <a href="#brief">Brief</a>
        </div>
      </footer>
    </main>
  );
}
