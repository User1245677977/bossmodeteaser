function HomeHero() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    
    var _learnq = window._learnq || [];
    _learnq.push(['identify', { '$email': email }]);
    _learnq.push(['track', 'Waitlist Signup', { 'email': email }]);
    _learnq.push(['subscribe', { '$email': email, 'listId': 'X8zszE' }]);
    
    setSubmitted(true);
  };

  return (
    <section style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden', minHeight: 640 }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 140,
        background: 'linear-gradient(135deg, #2B2A82 0%, #534AB7 40%, #3C3489 70%, #7F77DD 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(135deg, #7F77DD 0%, #2B2A82 50%, #534AB7 100%)',
        clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
      }} />

      <div className="bm-hero-inner">
        <div>
          <div className="bm-eyebrow" style={{ color: 'rgba(244,239,228,0.5)' }}>Pre-launch · 2.4g PeptiStrong®</div>
          <h1 className="bm-hero-h1">
            Recover<br />144%<br />
            <span style={{ color: '#39FF14', textShadow: '0 0 24px rgba(57,255,20,0.35)' }}>Faster.</span>
            <sup style={{ fontSize: '0.2em', color: '#EE3D8B', verticalAlign: 'super' }}>3</sup>
          </h1>
          <div className="bm-capsule">Sip. Dominate. Repeat.™</div>
          <p className="bm-hero-p">
            The world's first RTD peptide shake. Clinically proven plant-based
            peptides — 47% less fatigue,<sup>3</sup> 17% more strength.<sup>4</sup>
          </p>

          {submitted ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: '#39FF14', color: '#0A0A0A',
              padding: '14px 20px', borderRadius: 4, maxWidth: 460,
              fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13,
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>
              ✓ You're on the list. First access when we ship.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bm-hero-form">
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Get notified when we ship"
              />
              <button type="submit">Notify me →</button>
            </form>
          )}

          <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(244,239,228,0.4)', letterSpacing: '0.04em' }}>
            ³ Kerr et al., Nutrients 2023 · ⁴ RCT manuscript submitted
          </div>
        </div>

        <div className="bm-hero-cans">
          <img
            src="assets/cropped-can-myo-strawberry.png"
            alt="Myo-Peptide Strawberry Milkshake"
            style={{ maxHeight: 420, maxWidth: 220, width: 'auto', height: 'auto', objectFit: 'contain', transform: 'rotate(-6deg)', filter: 'drop-shadow(8px 10px 0 rgba(10,10,10,0.3))' }}
          />
          <img
            src="assets/cropped-can-energy-apex.png"
            alt="Energy Apex Punch"
            style={{ maxHeight: 460, maxWidth: 240, width: 'auto', height: 'auto', objectFit: 'contain', transform: 'translateY(20px) rotate(4deg)', filter: 'drop-shadow(8px 10px 0 rgba(57,255,20,0.2))' }}
          />
        </div>
      </div>
    </section>
  );
}

function HomePillarStrip() {
  const pillars = [
    { n: '01', t: 'Clean\nEnergy', d: '140mg green tea caffeine, 500mg Cognizin®, 200mg CognatiQ®. Smooth focus, zero crash.' },
    { n: '02', t: 'Peptide\nPerformance', d: '20g protein + 2.4g clinical-dose PeptiStrong® peptides. Strength, recovery, output.' },
    { n: '03', t: 'RTD\nConvenience', d: '12 fl oz. Shelf-stable. Built for the gym bag, the desk, the back of the fridge.' },
  ];
  return (
    <section style={{ background: 'var(--bm-paper)', borderTop: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
      <div className="bm-eyebrow">What we stand for</div>
      <h2 style={{ color: 'var(--bm-ink)' }}>Three pillars.<br />No compromises.</h2>
      <div className="bm-grid-3" style={{ marginTop: 56 }}>
        {pillars.map(p => (
          <div key={p.n} style={{ borderTop: '4px solid var(--bm-ink)', paddingTop: 20 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--bm-pink)', letterSpacing: '0.06em', marginBottom: 10 }}>{p.n}</div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 0.95,
              textTransform: 'uppercase', letterSpacing: '-0.01em',
              marginBottom: 14, whiteSpace: 'pre-line', color: 'var(--bm-ink)',
            }}>{p.t}</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)' }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeScienceStrip() {
  const stats = [
    { num: '144%', label: 'Faster Recovery', sub: 'Increased muscle recovery rate.', ref: '3' },
    { num: '47%',  label: 'Less Fatigue',    sub: 'Reduced muscular fatigue post-exercise.', ref: '3' },
    { num: '17%',  label: 'More Strength',   sub: 'Greater strength gains than training alone.', ref: '4' },
    { num: '21.6%',label: 'More Endurance',  sub: 'Improvement in muscular endurance.', ref: '4' },
  ];
  return (
    <section style={{ background: 'var(--bm-paper-2)', borderTop: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div className="bm-eyebrow">Clinically proven · 2.4g PeptiStrong®</div>
          <h2 style={{ color: 'var(--bm-ink)' }}>The numbers<br />don't lie.</h2>
        </div>
        <Link to="/science" style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bm-pink)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Read the science →</Link>
      </div>
      <div className="bm-grid-4">
        {stats.map(s => (
          <div key={s.label} style={{
            background: '#fff', border: '2px solid var(--bm-ink)',
            borderRadius: 8, padding: 24, boxShadow: '6px 6px 0 0 var(--bm-ink)',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px, 4vw, 60px)', lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--bm-pink)' }}>
              {s.num}<sup style={{ fontSize: '0.28em', color: 'var(--bm-ink)', verticalAlign: 'super' }}>{s.ref}</sup>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, lineHeight: 1.1, textTransform: 'uppercase', marginTop: 8, color: 'var(--bm-ink)' }}>{s.label}</div>
            <p style={{ fontSize: 13, lineHeight: 1.5, marginTop: 6, color: 'var(--fg-2)' }}>{s.sub}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', lineHeight: 1.7 }}>
        ³ Kerr et al., <em>Nutrients</em> 2023;15(4):986. RCT, healthy males, 2.4g/day. &nbsp;
        ⁴ RCT manuscript submitted; resistance training, 2.4g/day.<br />
        These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
      </div>
    </section>
  );
}

function HomeProductGrid() {
  return (
    <section style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)' }} className="bm-section-pad">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div className="bm-eyebrow" style={{ color: 'var(--bm-pink)' }}>Pre-launch · 6 SKUs</div>
          <h2>Pick your<br />weapon.</h2>
        </div>
        <Link to="/shop" style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bm-pink)', textDecoration: 'none' }}>See all →</Link>
      </div>
      <div className="bm-grid-3">
        {SITE_PRODUCTS.map(p => (
          <Link key={p.id} to={`/product/${p.id}`} className="bm-product-card" style={{
            background: p.bg, borderRadius: 12, padding: 28,
            minHeight: 380, display: 'flex', flexDirection: 'column',
            textDecoration: 'none', cursor: 'pointer',
            boxShadow: p.neon ? '8px 8px 0 0 #39FF14' : `8px 8px 0 0 ${p.dark ? 'var(--bm-blue)' : 'var(--bm-pink)'}`,
            transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Capsule tone={p.dark ? 'blue' : 'pink'} style={{ fontSize: 10 }}>{p.line}</Capsule>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: p.dark ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.5)', whiteSpace: 'nowrap' }}>12 FL OZ</span>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0' }}>
              <img src={p.img} alt={p.flavor} style={{ maxHeight: 280, maxWidth: '80%', width: 'auto', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(6px 8px 0 rgba(10,10,10,0.2))' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.01em', color: p.accent }}>{p.flavor}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: p.accent, opacity: 0.85, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Coming Soon</span>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.neon ? '#39FF14' : p.accent }}>Learn more →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeFounderStrip() {
  return (
    <section style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', borderTop: '1.5px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }} className="bm-section-pad">
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, rgba(43,42,130,0.15) 0px, rgba(43,42,130,0.15) 1px, transparent 1px, transparent 40px)', pointerEvents: 'none' }} />
      <div className="bm-grid-founder" style={{ position: 'relative', zIndex: 1 }}>
        <div>
          <div className="bm-eyebrow" style={{ color: 'var(--bm-pink)' }}>Our Story</div>
          <h2>Built in<br />adversity.</h2>
          <Link to="/about" style={{ display: 'inline-block', marginTop: 20, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bm-pink)', textDecoration: 'none' }}>Read Jonathan's story →</Link>
        </div>
        <div>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.55, color: 'rgba(244,239,228,0.85)', marginBottom: 16 }}>
            "A spinal cord injury at birth put me in a power wheelchair at age two. At 28, the doctors gave me weeks to live. I wasn't done."
          </p>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.55, color: 'rgba(244,239,228,0.85)' }}>
            "I built a formula. It changed the game — for me, for my family. My wife asked me how I felt. I told her I felt like I was living on Boss Mode™."
          </p>
          <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#39FF14', letterSpacing: '0.1em', textTransform: 'uppercase' }}>— Jonathan, Founder</div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <VariantB_StatBarrage />
      <HomeHero />
      <HomePillarStrip />
      <HomeScienceStrip />
      <HomeProductGrid />
      <HomeFounderStrip />
    </>
  );
}

window.HomePage = HomePage;
