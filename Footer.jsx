function Footer() {
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

  const cols = [
    { title: 'Shop', items: [
      { l: 'Myo-Peptide™', to: '/shop?line=myo' },
      { l: 'Energy', to: '/shop?line=energy' },
      { l: 'All products', to: '/shop' },
      { l: 'Subscribe & save', to: '/shop' },
    ]},
    { title: 'Learn', items: [
      { l: 'The science', to: '/science' },
      { l: 'Ingredients', to: '/science#ingredients' },
      { l: 'FAQ', to: '/about#faq' },
    ]},
    { title: 'Company', items: [
      { l: 'Our story', to: '/about' },
      { l: 'Press', to: '/about' },
      { l: 'Wholesale', to: '/about' },
      { l: 'Contact', to: '/about' },
    ]},
  ];

  return (
    <footer style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', padding: '80px 48px 36px', position: 'relative', overflow: 'hidden' }}>

      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06,
        background: 'repeating-linear-gradient(135deg, rgba(43,42,130,0.8) 0px, rgba(43,42,130,0.8) 1px, transparent 1px, transparent 40px)',
      }} />

      {/* Newsletter */}
      <div style={{
        position: 'relative', zIndex: 1,
        paddingBottom: 56, borderBottom: '1px solid rgba(244,239,228,0.12)',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center',
      }} className="bm-footer-nl">
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.92,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
          }}>Get on the list.</div>
          <p style={{ marginTop: 12, fontSize: 15, color: 'rgba(244,239,228,0.7)', maxWidth: 420, lineHeight: 1.5 }}>
            First access when we ship. Drop notifications. Founder updates from Jonathan.
          </p>
        </div>

        {submitted ? (
          <div style={{
            background: '#39FF14', color: 'var(--bm-ink)',
            padding: '16px 20px', borderRadius: 4, textAlign: 'center',
            fontFamily: 'var(--font-text)', fontWeight: 700,
            fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>✓ You're on the list. Welcome.</div>
        ) : (
          <form onSubmit={onSubmit} style={{ display: 'flex' }} className="bm-footer-form">
            <input
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="You@example.com"
              style={{
                flex: 1, height: 52, padding: '0 18px',
                background: 'transparent', color: 'var(--bm-paper)',
                border: '2px solid rgba(244,239,228,0.3)', borderRight: 'none',
                borderRadius: '4px 0 0 4px',
                fontFamily: 'var(--font-text)', fontWeight: 700,
                fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
                outline: 'none',
              }}
            />
            <button type="submit" style={{
              height: 52, padding: '0 22px',
              background: 'var(--bm-pink)', color: '#fff',
              border: '2px solid var(--bm-pink)',
              borderRadius: '0 4px 4px 0',
              fontFamily: 'var(--font-text)', fontWeight: 700,
              fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'background 120ms var(--ease-out)',
            }}>Notify me →</button>
          </form>
        )}
      </div>

      {/* Columns */}
      <div style={{
        position: 'relative', zIndex: 1, marginTop: 56,
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40,
      }} className="bm-footer-cols">

        {/* Wordmark */}
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.88,
            letterSpacing: '-0.03em', textTransform: 'uppercase', color: 'var(--bm-paper)',
          }}>BOSS<br />MODE™</div>
          <Capsule tone="pink" style={{ marginTop: 14 }}>Sip. Dominate. Repeat.™</Capsule>
          <div style={{ marginTop: 18, fontSize: 13, color: 'rgba(244,239,228,0.45)', maxWidth: 240, lineHeight: 1.55 }}>
            drinkbossmode.net — Built in adversity. Forged for everyone.
          </div>
        </div>

        {/* Link columns */}
        {cols.map(c => (
          <div key={c.title}>
            <div style={{
              fontFamily: 'var(--font-text)', fontWeight: 700,
              fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(244,239,228,0.45)', marginBottom: 16,
            }}>{c.title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {c.items.map(i => (
                <li key={i.l}>
                  <Link to={i.to} style={{
                    color: 'var(--bm-paper)', textDecoration: 'none',
                    fontSize: 14, fontFamily: 'var(--font-text)', fontWeight: 400,
                    transition: 'color 120ms',
                  }}>{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal */}
      <div style={{
        position: 'relative', zIndex: 1,
        marginTop: 64, paddingTop: 20,
        borderTop: '1px solid rgba(244,239,228,0.1)',
        display: 'flex', flexWrap: 'wrap', gap: 16,
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 10,
        color: 'rgba(244,239,228,0.4)', letterSpacing: '0.06em', lineHeight: 1.7,
      }}>
        <span>© 2026 BOSS MODE™. ALL RIGHTS RESERVED.</span>
        <span>THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FDA.</span>
        <span>BUILT IN ADVERSITY. FORGED FOR EVERYONE.</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
