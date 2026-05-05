function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const linkStyle = {
    fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: 'var(--bm-ink)', textDecoration: 'none', cursor: 'pointer',
  };

  // Close menu on nav
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bm-nav" style={{
      position: 'sticky', top: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 72, padding: '0 56px',
      background: 'var(--bm-paper)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="bm-nav-left" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1,
          textTransform: 'uppercase', color: 'var(--bm-ink)', textDecoration: 'none',
        }}>BOSS MODE™</Link>
        <div className="bm-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <Link to="/shop" style={linkStyle}>Shop</Link>
          <Link to="/shop?line=myo" style={linkStyle}>Myo-Peptide™</Link>
          <Link to="/shop?line=energy" style={linkStyle}>Energy</Link>
          <Link to="/science" style={linkStyle}>Science</Link>
          <Link to="/about" style={linkStyle}>Story</Link>
        </div>
      </div>
      <div className="bm-nav-right" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div className="bm-nav-shop">
          <Button variant="primary" onClick={() => {
            const el = document.querySelector('#bm-waitlist-anchor');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            else window.location.hash = '#/';
          }}>Get notified →</Button>
        </div>

        {/* Hamburger — visible only on mobile via CSS */}
        <button
          className="bm-nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'transparent', border: '2px solid var(--bm-ink)',
            borderRadius: 4, width: 40, height: 40,
            padding: 0, cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div style={{ width: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ height: 2, background: 'var(--bm-ink)', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none', transition: 'transform 180ms' }} />
            <div style={{ height: 2, background: 'var(--bm-ink)', opacity: menuOpen ? 0 : 1, transition: 'opacity 120ms' }} />
            <div style={{ height: 2, background: 'var(--bm-ink)', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', transition: 'transform 180ms' }} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div
          className="bm-nav-mobile-panel"
          onClick={closeMenu}
          style={{
            position: 'fixed', top: 72, left: 0, right: 0,
            background: 'var(--bm-paper)',
            borderBottom: '1px solid var(--line)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
            zIndex: 29,
            padding: '20px 24px 28px',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}
        >
          <Link to="/shop" style={{ ...linkStyle, padding: '14px 4px', borderBottom: '1px solid var(--line)', fontSize: 14 }}>Shop all</Link>
          <Link to="/shop?line=myo" style={{ ...linkStyle, padding: '14px 4px', borderBottom: '1px solid var(--line)', fontSize: 14 }}>Myo-Peptide™</Link>
          <Link to="/shop?line=energy" style={{ ...linkStyle, padding: '14px 4px', borderBottom: '1px solid var(--line)', fontSize: 14 }}>Energy</Link>
          <Link to="/science" style={{ ...linkStyle, padding: '14px 4px', borderBottom: '1px solid var(--line)', fontSize: 14 }}>Science</Link>
          <Link to="/about" style={{ ...linkStyle, padding: '14px 4px', borderBottom: '1px solid var(--line)', fontSize: 14 }}>Story</Link>
          <div style={{ marginTop: 20 }}>
            <Button variant="primary" onClick={() => {
              closeMenu();
              setTimeout(() => {
                const el = document.querySelector('#bm-waitlist-anchor');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                else window.location.hash = '#/';
              }, 50);
            }} style={{ width: '100%' }}>Get notified →</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

window.Nav = Nav;