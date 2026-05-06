// VARIANT B — "STAT BARRAGE" v3 — SCROLL-DRIVEN
function VariantB_StatBarrage({ embedded = false }) {
  const reduced = useReducedMotion();
  const stats = [
    { num: '144%', sub: 'faster recovery · vs control',   color: '#EE3D8B', tint: 'pink' },
    { num: '47%',  sub: 'less muscle soreness',            color: '#EE3D8B', tint: 'pink' },
    { num: '32%',  sub: 'more lean mass · 8 wk study',     color: '#EE3D8B', tint: 'pink' },
    { num: '54%',  sub: 'less fatigue · 30g whey trial',   color: '#2BB6E8', tint: 'blue' },
    { num: '6 hr', sub: 'sustained focus · no crash',      color: '#2BB6E8', tint: 'blue' },
    { num: '0',    sub: 'sugar · jitters · compromises',   color: '#F4EFE4', tint: 'paper' },
  ];

  return (
    <div style={{
      position: 'relative', width: '100%',
      height: embedded ? '100%' : 'auto',
      overflowY: embedded ? 'auto' : 'visible',
      overflowX: 'hidden',
      background: '#0A0A0A',
      fontFamily: 'var(--font-display)',
      color: '#F4EFE4',
      scrollSnapType: reduced ? 'none' : 'y mandatory',
    }}>
      <div style={{
        position: 'sticky', top: 0, padding: '24px 28px',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'rgba(244,239,228,0.55)',
        zIndex: 50,
        background: 'linear-gradient(to bottom, #0A0A0A 60%, transparent)',
        pointerEvents: 'none',
      }}>
        <span>· clinical readout · scroll for next ↓</span>
        <span>boss mode / peak state</span>
      </div>

      {['tl','tr','bl','br'].map((corner) => (
        <div key={corner} style={{ position: 'sticky', top: 0, height: 0, zIndex: 40, pointerEvents: 'none' }}>
          <div style={{ position: 'relative', height: '100vh' }}>
            <CornerTicks corner={corner} opacity={0.4} />
          </div>
        </div>
      ))}

      <div style={{ marginTop: -64 }} />

      {stats.map((s, i) => <StatPanel key={i} stat={s} index={i} />)}

      <GoodbyePanel line={<>Hello <span style={{ color: '#EE3D8B' }}>Gains</span>.</>} />
      <GoodbyePanel line={<>Hello <span style={{ color: '#2BB6E8' }}>Productivity</span>.</>} />
      <SplitUniverseFinale />
    </div>
  );
}


function StatPanel({ stat, index }) {
  const [ref, shown] = useReveal({ threshold: 0.55 });
  return (
    <section ref={ref} style={{
      position: 'relative', height: '100vh', minHeight: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      scrollSnapAlign: 'start', scrollSnapStop: 'always',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 4px)', pointerEvents: 'none' }} />
      <div style={{
        textAlign: 'center', position: 'relative',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
        transition: 'opacity 700ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.28em', textTransform: 'uppercase', color: stat.color, marginBottom: 24 }}>
          · stat {String(index + 1).padStart(2, '0')} ·
        </div>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(110px, 22vw, 340px)',
          lineHeight: 0.9, letterSpacing: '-0.04em', color: stat.color,
          textShadow: stat.tint === 'paper' ? 'none' : stat.tint === 'pink' ? '6px 6px 0 rgba(238,61,139,0.18)' : '6px 6px 0 rgba(43,182,232,0.18)',
        }}>{stat.num}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.85)', marginTop: 16 }}>{stat.sub}</div>
      </div>
      <div style={{ position: 'absolute', bottom: 32, right: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', color: 'rgba(244,239,228,0.4)' }}>
        {String(index + 1).padStart(2, '0')} / 06
      </div>
      {index === 0 && (
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.55)', animation: 'bm-bounce 2s ease-in-out infinite' }}>
          scroll ↓
        </div>
      )}
      <style>{`@keyframes bm-bounce { 0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.55; } 50% { transform: translateX(-50%) translateY(8px); opacity: 1; } }`}</style>
    </section>
  );
}

function GoodbyePanel({ line }) {
  const [ref, shown] = useReveal({ threshold: 0.5 });
  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'clamp(56px, 9vw, 150px)', lineHeight: 0.95,
        letterSpacing: '-0.025em', color: '#F4EFE4',
        textTransform: 'uppercase', textAlign: 'center',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 800ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1)',
      }}>{line}</h2>
    </section>
  );
}

function SplitUniverseFinale() {
  const [ref, shown] = useReveal({ threshold: 0.3 });
  const isMobile = window.innerWidth <= 600;

  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', minHeight: 720, overflow: 'hidden', scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      {/* Pink half */}
      <div style={{ position: 'absolute', inset: 0, clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)', background: 'linear-gradient(135deg, #FBE4EE 0%, #F8C5DC 60%, #EE3D8B 100%)', transform: shown ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1)', zIndex: 1 }} />
      {/* Blue half */}
      <div style={{ position: 'absolute', inset: 0, clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)', background: 'linear-gradient(225deg, #1B1A5E 0%, #2B2A82 50%, #2BB6E8 100%)', transform: shown ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1)', zIndex: 1 }} />
      {/* Seam */}
      <div style={{ position: 'absolute', top: '8%', bottom: '8%', left: '50%', width: 2, marginLeft: -1, background: '#0A0A0A', opacity: shown ? 0.5 : 0, transition: 'opacity 600ms 600ms', zIndex: 4 }} />

      {/* Side labels */}
      {!isMobile && (
        <div style={{ position: 'absolute', top: 32, left: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#0A0A0A', opacity: shown ? 0.85 : 0, transition: 'opacity 500ms 800ms', zIndex: 5 }}>
          Myo · Recovery · Pink
        </div>
      )}
      {!isMobile && (
        <div style={{ position: 'absolute', top: 32, right: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#F4EFE4', opacity: shown ? 0.85 : 0, transition: 'opacity 500ms 800ms', zIndex: 5, textAlign: 'right' }}>
          Energy · Focus · Blue
        </div>
      )}

      {/* Wordmark */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 5, pointerEvents: 'none', opacity: shown ? 1 : 0, transform: shown ? 'scale(1)' : 'scale(1.1)', transition: 'opacity 600ms 700ms, transform 700ms 700ms cubic-bezier(0.22, 0.61, 0.36, 1)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(80px, 16vw, 240px)', lineHeight: 0.85, letterSpacing: '-0.04em', color: '#0A0A0A', textAlign: 'center', position: 'relative' }}>
          BOSS<br/>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            MODE
            <sup style={{ fontSize: '0.32em', fontWeight: 700, letterSpacing: 0, position: 'absolute', top: '0.1em', right: '-0.5em' }}>™</sup>
          </span>
        </div>
      </div>

      {/* Cans — bigger and closer */}
      {!isMobile && (
        <div style={{ position: 'absolute', left: '5%', bottom: '22%', zIndex: 3, opacity: shown ? 1 : 0, transform: shown ? 'translateY(0) rotate(-6deg)' : 'translateY(200px) rotate(-6deg)', transition: 'opacity 800ms 1000ms, transform 900ms 1000ms cubic-bezier(0.22, 0.61, 0.36, 1)' }}>
          <img src="assets/cropped-can-myo-strawberry.png" alt="" style={{ height: 'min(72vh, 640px)', filter: 'drop-shadow(8px 14px 0 rgba(10,10,10,0.18))' }} />
        </div>
      )}
      {!isMobile && (
        <div style={{ position: 'absolute', right: '2%', bottom: '22%', zIndex: 3, opacity: shown ? 1 : 0, transform: shown ? 'translateY(0) rotate(6deg)' : 'translateY(200px) rotate(6deg)', transition: 'opacity 800ms 1000ms, transform 900ms 1000ms cubic-bezier(0.22, 0.61, 0.36, 1)' }}>
          <img src="assets/cropped-can-energy-apex.png" alt="" style={{ height: 'min(72vh, 640px)', filter: 'drop-shadow(0 14px 30px rgba(0,0,0,0.55))' }} />
        </div>
      )}

      {/* Tagline + CTA */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: '5%', textAlign: 'center', zIndex: 6, opacity: shown ? 1 : 0, transform: shown ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms 1400ms, transform 700ms 1400ms' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 64px)', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0, color: '#0A0A0A' }}>
          Sip. Dominate. Repeat.<sup style={{ fontSize: '0.4em', verticalAlign: 'top', marginLeft: '0.1em', fontWeight: 700 }}>™</sup>
        </h1>
        <div style={{ marginTop: 16 }}>
          <a href="#/science" style={{ display: 'inline-block', background: '#F4EFE4', color: '#0A0A0A', padding: '14px 28px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>The science →</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { VariantB_StatBarrage, StatPanel, GoodbyePanel, SplitUniverseFinale });
