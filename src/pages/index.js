import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const containerStyle = {
    maxWidth: 820,
    margin: '0 auto',
  };
  const hrStyle = {
    border: 'none',
    height: 1,
    background: 'rgba(0,0,0,0.08)',
    margin: '1.5rem 0',
  };

  return (
    <Layout
      title={siteConfig.title}
      description={
        'A serious, history-focused account of landmark cyber incidents and the evolution of digital defense.'
      }>
      <main>
        {/* HERO SECTION */}
        <section
          style={{
            padding: '4rem 0 2.5rem',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div className="container" style={containerStyle}>
            <div style={{
              borderLeft: '4px solid var(--ifm-color-primary)',
              paddingLeft: '1rem'
            }}>
              <h1 style={{
                margin: 0,
                fontWeight: 700,
                fontSize: '2.4rem',
              }}>
                Cyberattacks in History
              </h1>
              <p style={{
                marginTop: '0.5rem',
                fontSize: '1.05rem',
                color: 'var(--ifm-font-color-secondary)'
              }}>
                Major Incidents That Shaped the Digital World
              </p>
              <p style={{
                marginTop: '1rem',
                lineHeight: 1.8,
              }}>
                From the Morris Worm to modern supply chain compromises, this book chronicles the
                pivotal attacks that defined our connected era—and the lessons that still shape
                cybersecurity today.
              </p>
              <div style={{marginTop: '1.5rem'}}>
                <Link className="button button--primary button--lg" to="/docs/intro">
                  Start Reading
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY THIS BOOK MATTERS */}
        <section style={{padding: '2.5rem 0'}}>
          <div className="container" style={containerStyle}>
            <h2 style={{fontSize: '1.6rem', marginTop: 0}}>Why This Book Matters</h2>
            <hr style={hrStyle} />
            <ul style={{margin: 0, paddingLeft: '1.25rem'}}>
              <li>Provides a clear, authoritative narrative of cyber history.</li>
              <li>Connects technical incidents to real-world impact and policy.</li>
              <li>Highlights recurring vulnerabilities and what prevents them.</li>
              <li>Distills practical lessons for students and practitioners.</li>
            </ul>
          </div>
        </section>

        {/* CONTRAST SECTION: WHAT YOU'LL LEARN */}
        <section
          style={{
            padding: '2.5rem 0',
            background: 'var(--ifm-background-surface-color)',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div className="container" style={containerStyle}>
            <h2 style={{fontSize: '1.6rem', marginTop: 0}}>What You’ll Learn</h2>
            <hr style={hrStyle} />
            <div style={{display: 'grid', gap: '0.75rem'}}>
              <div>
                <strong>Foundations:</strong>
                <ul style={{margin: '0.5rem 0 0', paddingLeft: '1.25rem'}}>
                  <li>Attack types, threat actors, and motivations</li>
                  <li>Why attacks succeed: technology, humans, and policy</li>
                </ul>
              </div>
              <div>
                <strong>Historical Progression:</strong>
                <ul style={{margin: '0.5rem 0 0', paddingLeft: '1.25rem'}}>
                  <li>From email-borne worms to nation-state operations</li>
                  <li>Ransomware economics and double extortion</li>
                </ul>
              </div>
              <div>
                <strong>Modern Risk:</strong>
                <ul style={{margin: '0.5rem 0 0', paddingLeft: '1.25rem'}}>
                  <li>Supply chain compromises and infrastructure attacks</li>
                  <li>Defense patterns and future outlook</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE PREVIEW (SCANNABLE) */}
        <section style={{padding: '2.5rem 0'}}>
          <div className="container" style={containerStyle}>
            <h2 style={{fontSize: '1.6rem', marginTop: 0}}>A Brief Timeline Preview</h2>
            <hr style={hrStyle} />
            <ul style={{
              margin: 0,
              paddingLeft: '1.25rem',
              columns: 2,
              columnGap: '2rem'
            }}>
              <li>1988 — Morris Worm</li>
              <li>2000 — ILOVEYOU</li>
              <li>2001 — Code Red</li>
              <li>2003 — SQL Slammer</li>
              <li>2007 — Estonia Attacks</li>
              <li>2010 — Stuxnet</li>
              <li>2014 — Sony Pictures</li>
              <li>2015 — OPM Breach</li>
              <li>2017 — WannaCry</li>
              <li>2017 — NotPetya</li>
              <li>2020 — SolarWinds</li>
              <li>2021 — Colonial Pipeline</li>
              <li>2021 — Log4Shell</li>
            </ul>
          </div>
        </section>

        {/* AUDIENCE SECTION (CONTRAST) */}
        <section
          style={{
            padding: '2.5rem 0',
            background: 'var(--ifm-background-surface-color)',
            borderTop: '1px solid rgba(0,0,0,0.06)'
          }}
        >
          <div className="container" style={containerStyle}>
            <h2 style={{fontSize: '1.6rem', marginTop: 0}}>Who This Book Is For</h2>
            <hr style={hrStyle} />
            <ul style={{margin: 0, paddingLeft: '1.25rem'}}>
              <li>Students of cybersecurity seeking historical context</li>
              <li>IT and security professionals refining defensive instincts</li>
              <li>Curious readers exploring the digital history of conflict</li>
            </ul>
            <div style={{marginTop: '1.75rem'}}>
              <Link className="button button--primary" to="/docs/intro">
                Start Reading
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}