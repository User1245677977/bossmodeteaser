// Shared utilities for the three landing-page hero variants.
// Loaded BEFORE the variant files.

// Hook: triggers when an element scrolls into view, returns 0..1 progress
// (or just true/false if you pass `binary: true`)
function useReveal(opts = {}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setShown(true);
        });
      },
      { threshold: opts.threshold ?? 0.18, rootMargin: opts.rootMargin ?? '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

// Hook: detects prefers-reduced-motion
function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

// A wrapper that fades + rises its children when scrolled into view.
function Reveal({ children, delay = 0, distance = 24, style = {} }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${distance}px)`,
        transition: `opacity 700ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// "Built in adversity" scroll-reveal panel — the post-hero moment
// shared by all three variants.
function FounderScrollReveal({ accent = 'var(--bm-pink)' }) {
  const [ref, shown] = useReveal({ threshold: 0.25 });
  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bm-paper)',
        padding: '160px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: accent,
          opacity: shown ? 1 : 0,
          transform: shown ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 600ms 0ms, transform 600ms 0ms',
        }}>
          The Origin
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(72px, 12vw, 200px)',
          lineHeight: 0.85, letterSpacing: '-0.035em',
          textTransform: 'uppercase',
          margin: '24px 0 0',
          color: 'var(--bm-ink)',
          opacity: shown ? 1 : 0,
          transform: shown ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 800ms 200ms cubic-bezier(0.22,0.61,0.36,1), transform 800ms 200ms cubic-bezier(0.22,0.61,0.36,1)',
        }}>
          Built in<br />adversity.
        </h2>
        <p style={{
          marginTop: 32,
          fontFamily: 'var(--font-text)', fontSize: 22, lineHeight: 1.55,
          maxWidth: 720, color: 'var(--bm-ink)',
          opacity: shown ? 1 : 0,
          transform: shown ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 700ms 600ms cubic-bezier(0.22,0.61,0.36,1), transform 700ms 600ms cubic-bezier(0.22,0.61,0.36,1)',
        }}>
          A spinal cord injury between C1 &amp; C2 at birth put Jonathan in a power wheelchair at age two.
          Off-the-shelf supplements weren&rsquo;t built for his body. So he built his own.
          That formula is now in your hand.
        </p>
        <div style={{
          marginTop: 40,
          opacity: shown ? 1 : 0,
          transform: shown ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 600ms 1000ms, transform 600ms 1000ms',
        }}>
          <a href="#/about" style={{
            display: 'inline-block',
            background: 'var(--bm-ink)', color: 'var(--bm-paper)',
            padding: '18px 28px', borderRadius: 4,
            fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            textDecoration: 'none',
            boxShadow: '4px 4px 0 0 rgba(10,10,10,1)',
          }}>Read the full story →</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { useReveal, useReducedMotion, Reveal, FounderScrollReveal });

// ─── Math + easing helpers (shared by VariantA/B/C) ───
function clamp01(x) { return Math.max(0, Math.min(1, x)); }
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }
function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

// ─── Shared CTA button style ───
function ctaStyle(kind, paper, ink) {
  const base = {
    display: 'inline-block',
    padding: '16px 28px',
    fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    textDecoration: 'none',
    border: '2px solid ' + paper,
    transition: 'transform 150ms, box-shadow 150ms',
  };
  if (kind === 'solid') {
    return { ...base, background: paper, color: ink };
  }
  // ghost
  return { ...base, background: 'transparent', color: paper };
}

Object.assign(window, { clamp01, easeOutCubic, easeOutQuart, easeOutBack, ctaStyle });

// ─── Crosshair tick marks (shared by VariantA + VariantB) ───
function CornerTicks({ corner, opacity }) {
  const map = {
    tl: { top: 18, left: 18, transform: 'none' },
    tr: { top: 18, right: 18, transform: 'scaleX(-1)' },
    bl: { bottom: 18, left: 18, transform: 'scaleY(-1)' },
    br: { bottom: 18, right: 18, transform: 'scale(-1)' },
  };
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" style={{ position: 'absolute', ...map[corner], opacity, zIndex: 6 }}>
      <path d="M 0 0 L 18 0 M 0 0 L 0 18" stroke="#EE3D8B" strokeWidth="2" fill="none" />
    </svg>
  );
}

Object.assign(window, { CornerTicks });
