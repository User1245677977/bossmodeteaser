function ShopPage() {
  const route = useHashRoute();
  const queryStr = (route.path.split('?')[1] || '');
  const params = new URLSearchParams(queryStr);
  const lineFilter = params.get('line');

  const filtered = SITE_PRODUCTS.filter(p => {
    if (!lineFilter) return true;
    if (lineFilter === 'myo') return p.line === 'Myo-Peptide™';
    if (lineFilter === 'energy') return p.line === 'Energy';
    return true;
  });

  const filters = [
    { id: null, label: 'All' },
    { id: 'myo', label: 'Myo-Peptide™' },
    { id: 'energy', label: 'Energy' },
  ];

  const cardStyles = {
    'myo-strawberry': { bg: '#f0d4e0', shadow: '#EE3D8B', dark: false },
    'myo-vanilla':    { bg: '#d4e8f5', shadow: '#2B2A82', dark: false },
    'myo-chai':       { bg: '#EBE5D7', shadow: '#6B4F2A', dark: false },
    'en-apex':        { bg: '#2B2A82', shadow: '#39FF14', dark: true  },
    'en-strawberry':  { bg: '#8B1A1A', shadow: '#EE3D8B', dark: true  },
    'en-lemonade':    { bg: '#E8DC5A', shadow: '#2BB6E8', dark: false },
  };

  const accentColors = {
    'myo-strawberry': { flavor: '#C4206A', tagline: 'rgba(10,10,10,0.6)', price: '#0A0A0A', shop: '#C4206A' },
    'myo-vanilla':    { flavor: '#1a1960', tagline: 'rgba(10,10,10,0.6)', price: '#0A0A0A', shop: '#1a1960' },
    'myo-chai':       { flavor: '#3D2200', tagline: 'rgba(10,10,10,0.6)', price: '#0A0A0A', shop: '#3D2200' },
    'en-apex':        { flavor: '#fff',    tagline: 'rgba(244,239,228,0.6)', price: 'rgba(255,255,255,0.9)', shop: '#39FF14' },
    'en-strawberry':  { flavor: '#fff',    tagline: 'rgba(244,239,228,0.6)', price: 'rgba(255,255,255,0.9)', shop: '#EE3D8B' },
    'en-lemonade':    { flavor: '#0A0A0A', tagline: 'rgba(10,10,10,0.6)', price: '#0A0A0A', shop: '#2BB6E8' },
  };

  const pillTones = {
    'myo-strawberry': 'pink',
    'myo-vanilla':    'blue',
    'myo-chai':       'ink',
    'en-apex':        'dark',
    'en-strawberry':  'dark',
    'en-lemonade':    'ink',
  };

  const pillStyle = (tone) => {
    const tones = {
      pink: { background: '#EE3D8B', color: '#fff' },
      blue: { background: '#2B2A82', color: '#fff' },
      ink:  { background: '#0A0A0A', color: '#F4EFE4' },
      dark: { background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' },
    };
    return {
      display: 'inline-flex', alignItems: 'center',
      padding: '5px 13px', borderRadius: 999,
      fontFamily: 'var(--font-text)', fontWeight: 700,
      fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      ...tones[tone],
    };
  };

  return (
    <>
      {/* Header */}
      <section style={{ background: 'var(--bm-ink)', padding: '72px 48px 40px', borderBottom: '1.5px solid rgba(255,255,255,0.1)' }} className="bm-shop-header">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink)', marginBottom: 16 }}>
          Shop · {filtered.length} of {SITE_PRODUCTS.length} SKUs
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.9,
          letterSpacing: '-0.03em', textTransform: 'uppercase',
          color: 'var(--bm-paper)', marginBottom: 32,
        }}>Pick your<br />weapon.</h1>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {filters.map(f => {
            const active = (f.id || null) === (lineFilter || null);
            return (
              <a key={f.label} href={`#/shop${f.id ? `?line=${f.id}` : ''}`} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '10px 22px', borderRadius: 999,
                fontFamily: 'var(--font-text)', fontWeight: 700,
                fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
                background: active ? 'var(--bm-pink)' : 'transparent',
                color: active ? '#fff' : 'rgba(244,239,228,0.7)',
                border: active ? '1.5px solid var(--bm-pink)' : '1.5px solid rgba(255,255,255,0.3)',
                boxShadow: active ? '3px 3px 0 0 rgba(255,255,255,0.2)' : 'none',
                textDecoration: 'none',
                transition: 'all 150ms var(--ease-out)',
              }}>{f.label}</a>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--bm-ink)', padding: '40px 48px 96px' }} className="bm-section-pad bm-shop-grid-wrap">
        <div className="bm-grid-3">
          {filtered.map(p => {
            const cs = cardStyles[p.id] || { bg: '#eee', shadow: '#000', dark: false };
            const ac = accentColors[p.id] || { flavor: '#000', tagline: '#555', price: '#000', shop: '#000' };
            const pt = pillTones[p.id] || 'pink';
            return (
              <Link key={p.id} to={`/product/${p.id}`} className="bm-product-card" style={{
                background: cs.bg,
                borderRadius: 12, padding: 28,
                minHeight: 460, display: 'flex', flexDirection: 'column',
                textDecoration: 'none', cursor: 'pointer',
                border: cs.dark ? '2px solid rgba(255,255,255,0.1)' : '2px solid var(--bm-ink)',
                boxShadow: `8px 8px 0 0 ${cs.shadow}`,
                transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
              }}>
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <span style={pillStyle(pt)}>{p.line}</span>
                  <span style={{
                    fontFamily: 'var(--font-text)', fontWeight: 700,
                    fontSize: 13, letterSpacing: '0.04em',
                    color: cs.dark ? 'rgba(255,255,255,0.5)' : 'rgba(10,10,10,0.45)',
                  }}>12 FL OZ</span>
                </div>

                {/* Can image */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0' }}>
                  <img src={p.img} alt={p.flavor} style={{
                    maxHeight: 300, maxWidth: '85%',
                    width: 'auto', height: 'auto', objectFit: 'contain',
                    filter: 'drop-shadow(6px 8px 0 rgba(10,10,10,0.2))',
                  }} />
                </div>

                {/* Info */}
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 22, lineHeight: 1, textTransform: 'uppercase',
                  letterSpacing: '-0.01em', marginBottom: 6,
                  color: ac.flavor,
                }}>{p.flavor}</div>

                <div style={{ fontSize: 13, lineHeight: 1.4, marginBottom: 14, color: ac.tagline }}>
                  {p.tagline}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-text)', fontWeight: 700,
                    fontSize: 15, letterSpacing: '0.04em',
                    color: ac.price,
                  }}>${p.price.toFixed(2)} · 12-pack</span>
                  <span style={{
                    fontFamily: 'var(--font-text)', fontWeight: 700,
                    fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: ac.shop,
                  }}>Shop →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

window.ShopPage = ShopPage;