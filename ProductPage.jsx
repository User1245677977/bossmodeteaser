function ProductPage({ productId }) {
  const p = SITE_PRODUCTS.find(x => x.id === productId);
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  if (!p) {
    return (
      <section style={{ padding: '120px 80px', minHeight: 600, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 80, textTransform: 'uppercase' }}>Not found</h1>
        <Link to="/shop" style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>← Back to shop</Link>
      </section>
    );
  }

  const isEnergy = p.line === 'Energy';

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    try {
      const list = JSON.parse(localStorage.getItem('bm_waitlist') || '[]');
      list.push({ email, at: Date.now(), source: `pdp:${p.id}` });
      localStorage.setItem('bm_waitlist', JSON.stringify(list));
    } catch {}
    setSubmitted(true);
  };

  const related = SITE_PRODUCTS.filter(x => x.line === p.line && x.id !== p.id);

  const cardStyles = {
    'myo-strawberry': { shadow: '#EE3D8B' },
    'myo-vanilla':    { shadow: '#2B2A82' },
    'myo-chai':       { shadow: '#6B4F2A' },
    'en-apex':        { shadow: '#39FF14' },
    'en-strawberry':  { shadow: '#EE3D8B' },
    'en-lemonade':    { shadow: '#2BB6E8' },
  };

  return (
    <>
      {/* Breadcrumb */}
      <div style={{
        padding: '20px 48px', borderBottom: '1.5px solid var(--bm-ink)',
        background: 'var(--bm-paper)', fontFamily: 'var(--font-text)',
        fontWeight: 400, fontSize: 14, letterSpacing: '0.04em', color: 'rgba(10,10,10,0.45)',
      }} className="bm-breadcrumb">
        <Link to="/" style={{ color: 'rgba(10,10,10,0.45)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px', color: 'rgba(10,10,10,0.25)' }}>/</span>
        <Link to={`/shop?line=${isEnergy ? 'energy' : 'myo'}`} style={{ color: 'rgba(10,10,10,0.45)', textDecoration: 'none' }}>{p.line}</Link>
        <span style={{ margin: '0 8px', color: 'rgba(10,10,10,0.25)' }}>/</span>
        <span style={{ color: 'var(--bm-ink)', fontWeight: 400 }}>{p.flavor}</span>
      </div>

      {/* Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 680, background: 'var(--bm-paper)' }} className="bm-pdp-hero">
        {/* Image side */}
        <div style={{ position: 'relative', overflow: 'hidden', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 500 }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: isEnergy
              ? 'repeating-linear-gradient(135deg, rgba(43,42,130,0.12) 0px, rgba(43,42,130,0.12) 1px, transparent 1px, transparent 32px)'
              : 'repeating-linear-gradient(135deg, rgba(238,61,139,0.08) 0px, rgba(238,61,139,0.08) 1px, transparent 1px, transparent 32px)',
          }} />
          <img src={p.img} alt={p.flavor} style={{
            position: 'relative', zIndex: 1,
            maxHeight: '82%', maxWidth: '70%',
            width: 'auto', height: 'auto', objectFit: 'contain',
            filter: 'drop-shadow(12px 18px 0 rgba(10,10,10,0.25))',
          }} />
        </div>

        {/* Info side */}
        <div style={{ padding: '56px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="bm-pdp-info">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: isEnergy ? 'var(--bm-blue)' : 'var(--bm-pink-deep)', marginBottom: 14 }}>
            {p.line} · 12 fl oz cans · Pre-launch
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(36px, 4vw, 64px)', lineHeight: 0.92,
            letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: 10,
          }}>{p.flavor}</h1>
          <div style={{ fontSize: 17, color: 'rgba(10,10,10,0.6)', fontStyle: 'italic', marginBottom: 20 }}>{p.tagline}</div>

          {!isEnergy && (
            <div style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', padding: '16px 20px', borderRadius: 8, marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, lineHeight: 1, letterSpacing: '-0.01em' }}>
                Recover 144% faster.<sup style={{ fontSize: 11, color: 'var(--bm-pink)', verticalAlign: 'super', marginLeft: 4 }}>3</sup>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(244,239,228,0.7)', marginTop: 6 }}>47% less fatigue.³ Clinically proven at 2.4g/day.</div>
            </div>
          )}

          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(10,10,10,0.65)', marginBottom: 24, maxWidth: 500 }}>{p.blurb}</p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 28, marginBottom: 28 }}>
            {p.stats.map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44, lineHeight: 0.9, color: isEnergy ? 'var(--bm-blue)' : 'var(--bm-pink)', letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 6, color: 'rgba(10,10,10,0.55)' }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Waitlist CTA — replaces price/cart */}
          <div style={{ border: '2px solid var(--bm-ink)', borderRadius: 8, padding: 24, background: '#fff', boxShadow: '6px 6px 0 0 var(--bm-ink)', marginBottom: 16 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: isEnergy ? 'var(--bm-blue)' : 'var(--bm-pink)', marginBottom: 8 }}>
              Pre-launch · Coming soon
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, lineHeight: 1, letterSpacing: '-0.01em', textTransform: 'uppercase', marginBottom: 8 }}>
              Be first in line.
            </div>
            <div style={{ fontSize: 14, color: 'rgba(10,10,10,0.6)', marginBottom: 16, lineHeight: 1.5 }}>
              Get notified the moment {p.flavor} drops. Waitlist members get a launch-day discount.
            </div>
            {submitted ? (
              <div style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', padding: '14px 18px', borderRadius: 4, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                ✓ You're on the list for {p.flavor}.
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', gap: 0 }}>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    flex: 1, height: 52, padding: '0 18px',
                    background: '#fff', color: 'var(--bm-ink)',
                    border: '2px solid var(--bm-ink)', borderRight: 'none',
                    borderRadius: '4px 0 0 4px',
                    fontFamily: 'var(--font-mono)', fontSize: 14, outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  height: 52, padding: '0 24px',
                  background: isEnergy ? 'var(--bm-blue)' : 'var(--bm-pink)',
                  color: '#fff', border: '2px solid var(--bm-ink)',
                  borderRadius: '0 4px 4px 0',
                  fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12,
                  letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer',
                }}>Notify me →</button>
              </form>
            )}
          </div>

          {!isEnergy && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.04em', lineHeight: 1.6 }}>
              ³ Kerr et al., Nutrients 2023;15(4):986. RCT, healthy males, 2.4g/day.<br />
              These statements have not been evaluated by the FDA.
            </div>
          )}
        </div>
      </section>

      {/* Ingredients */}
      <section style={{ background: 'var(--bm-paper-2)', padding: '80px 48px', borderTop: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div className="bm-grid-founder">
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>What's inside</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 14, color: 'var(--bm-ink)' }}>
              The receipts<br />are on<br />the can.
            </h2>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink)', marginBottom: 16 }}>Ingredients</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {p.ingredients.map(i => (
                <div key={i} style={{ background: '#fff', padding: '11px 14px', border: '1.5px solid var(--bm-ink)', borderRadius: 4, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 14, lineHeight: 1.3, letterSpacing: '0.02em' }}>{i}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: 'var(--bm-paper)', padding: '80px 48px', borderTop: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 12 }}>More from {p.line}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: 32, color: 'var(--bm-ink)' }}>Stack the deck.</h3>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${related.length}, 1fr)`, gap: 20 }}>
            {related.map(r => {
              const cs = cardStyles[r.id] || { shadow: 'var(--bm-ink)' };
              return (
                <Link key={r.id} to={`/product/${r.id}`} className="bm-product-card" style={{
                  background: r.bg, borderRadius: 12, padding: 24,
                  minHeight: 300, display: 'flex', flexDirection: 'column',
                  textDecoration: 'none', cursor: 'pointer',
                  border: r.dark ? '2px solid rgba(255,255,255,0.1)' : '2px solid var(--bm-ink)',
                  boxShadow: `6px 6px 0 0 ${cs.shadow}`,
                  transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
                }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={r.img} alt={r.flavor} style={{ height: 220, width: 'auto', objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, lineHeight: 1, textTransform: 'uppercase', color: r.accent, letterSpacing: '-0.01em' }}>{r.flavor}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: r.accent, marginTop: 6 }}>Coming Soon</div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

window.ProductPage = ProductPage;
