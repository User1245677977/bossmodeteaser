function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bm-paper)', padding: '80px 48px 48px', position: 'relative', overflow: 'hidden', borderBottom: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: 260, opacity: 0.1, background: 'repeating-linear-gradient(135deg, var(--bm-pink) 0px, var(--bm-pink) 1px, transparent 1px, transparent 28px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>Our Story</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.88, letterSpacing: '-0.03em', textTransform: 'uppercase', marginTop: 20, color: 'var(--bm-ink)' }}>Built in<br />adversity.</h1>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 14, color: 'var(--bm-pink)' }}>Forged for everyone.</div>
        </div>
      </section>

      {/* Essay */}
      <section style={{ background: 'var(--bm-paper)', padding: '64px 48px 80px', borderBottom: '1.5px solid var(--bm-ink)' }} className="bm-essay">
        <div className="bm-grid-founder">
          <div style={{ position: 'sticky', top: 96 }}>
            <div style={{ background: 'var(--bm-pink-bg)', border: '2px solid var(--bm-ink)', borderRadius: 8, padding: 24, boxShadow: '6px 6px 0 0 var(--bm-ink)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-pink-deep)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founder</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 10 }}>Jonathan</div>
              <div style={{ marginTop: 14, fontSize: 14, color: 'rgba(10,10,10,0.65)', lineHeight: 1.5 }}>Co-founder, formula architect, operations. Power-wheelchair user since age two. Built Boss Mode™ out of the only thing he had left to work with: tenacity.</div>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--bm-ink)' }}>
            <p style={{ marginBottom: 20 }}>I'm Jonathan. A spinal cord injury between C1 &amp; C2 at birth put me in a power wheelchair at age two. Adversity wasn't a chapter. It was the whole book.</p>
            <p style={{ marginBottom: 20 }}>Then at 28, the doctors gave me weeks to live. Leukemia.</p>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '28px 0', color: 'var(--bm-pink)' }}>I wasn't done.</div>
            <p style={{ marginBottom: 20 }}>In the pursuit to advance and conquer, I built a formula. Clean energy. Real focus. Something that could meet me where I was and lift me past it. It changed the game — for me, for my family.</p>
            <p style={{ marginBottom: 20 }}>When my wife noticed the shift, she asked me how I felt.</p>
            <blockquote style={{ margin: '36px 0', padding: '28px 36px', background: 'var(--bm-ink)', color: 'var(--bm-paper)', borderRadius: 8, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 4, left: 14, fontFamily: 'var(--font-display)', fontSize: 72, color: 'var(--bm-pink)', lineHeight: 1, opacity: 0.6 }}>"</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(20px, 3vw, 32px)', lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>I told her I felt like I was living on Boss Mode™.</div>
            </blockquote>
            <p style={{ marginBottom: 20 }}>Day two, she was spontaneously throwing kettlebells around the house.</p>
            <p style={{ marginBottom: 20 }}>That's when David said it: <em>we have to give this to people.</em> The same tools. The same edge. So they can rise to whatever's in front of them, too.</p>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em', marginTop: 36, marginBottom: 6, color: 'var(--bm-ink)' }}>That's Boss Mode™.</div>
            <div style={{ fontSize: 20, color: 'rgba(10,10,10,0.55)' }}>Built in adversity. Forged for everyone.</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--bm-pink)', marginTop: 40 }}>Sip. Dominate. Repeat.™</div>
            <div style={{ fontFamily: 'var(--font-text)', fontWeight: 400, fontSize: 16, color: 'rgba(10,10,10,0.45)', marginTop: 10, letterSpacing: '0.02em' }}>— Jonathan, Founder</div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', position: 'relative', overflow: 'hidden', borderTop: '1.5px solid rgba(255,255,255,0.1)' }} className="bm-section-pad">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, background: 'repeating-linear-gradient(135deg, rgba(43,42,130,0.8) 0px, rgba(43,42,130,0.8) 1px, transparent 1px, transparent 40px)', pointerEvents: 'none' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40, position: 'relative', zIndex: 1 }} className="bm-mission-grid">
          {[
            { n: '01', t: 'Clean by default', d: 'No artificial sweeteners. No synthetic stims. No fillers. We built it for ourselves first.' },
            { n: '02', t: 'Clinically dosed', d: 'Real ingredients at real doses. PeptiStrong®, Cognizin®, PeakO2® — backed by published RCTs.' },
            { n: '03', t: 'For everyone', d: 'Built in a wheelchair. Forged for the gym, the shift, the field, the desk. Adversity has no demo.' },
          ].map(p => (
            <div key={p.n} style={{ borderTop: '4px solid var(--bm-pink)', paddingTop: 20 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--bm-pink)', letterSpacing: '0.06em', marginBottom: 10 }}>{p.n}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,3vw,34px)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: 12 }}>{p.t}</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(244,239,228,0.75)' }}>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section style={{ background: 'var(--bm-paper)', borderTop: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>The Founders</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 14, color: 'var(--bm-ink)' }}>Two operators.<br />One mission.</h2>
        <div className="bm-grid-2" style={{ marginTop: 40 }}>
          <FounderCard name="Jonathan" role="Co-Founder · Formula Architect · Operations" bio="Built the original Boss Mode™ formula in his own kitchen, for his own body. Lives the brand promise daily — clean energy, real focus, no compromise." tone="pink" />
          <FounderCard name="David" role="Co-Founder · CFO · Operations" bio="Saw what Jonathan had built and refused to let it stay private. Runs operations, supply, and the long fight to put Boss Mode™ in every fridge." tone="blue" />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: 'var(--bm-paper-2)', borderTop: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>FAQ</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 14, color: 'var(--bm-ink)' }}>The receipts.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 40, maxWidth: 1080 }}>
          {[
            { q: 'When can I actually buy Boss Mode™?', a: "We're in pre-launch. Get on the waitlist (hero or footer) and you'll be first to know — including a launch-day discount for early supporters." },
            { q: 'What is PeptiStrong®?', a: 'A clinically dosed, plant-based peptide network derived from Vicia faba (fava beans). Backed by three published human RCTs. We use 2.4g per can — the dose the recovery and strength studies were run at.' },
            { q: 'Is Boss Mode™ Myo-Peptide™ vegan?', a: 'The peptide network itself is plant-based. Our current formulas use milk protein concentrate as the primary protein source. A 100% plant-based SKU is on the roadmap.' },
            { q: 'How much caffeine is in Boss Mode™ Energy?', a: '140mg per 12 fl oz can — naturally sourced from green tea. Paired with 100mg L-theanine to smooth the curve. No jitters, no crash.' },
            { q: 'Can I drink both lines?', a: 'Yes. They\'re built to stack. Energy in the morning for focus, Myo-Peptide post-workout or as a recovery shake. Many of our beta users drink both daily.' },
            { q: 'Do these statements have FDA approval?', a: "No dietary supplement does — that's not how the FDA works. These statements have not been evaluated by the FDA. Boss Mode™ is not intended to diagnose, treat, cure, or prevent any disease." },
          ].map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* Wholesale */}
      <section style={{ background: 'var(--bm-pink)', color: '#fff', padding: '80px 48px', textAlign: 'center', borderTop: '1.5px solid var(--bm-pink-deep)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 14 }}>Wholesale + Press</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px,6vw,72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#fff' }}>Stock the shelves.</h2>
        <p style={{ fontSize: 18, marginTop: 14, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', opacity: 0.85 }}>Independent gyms, retailers, and press inquiries — we'd love to hear from you.</p>
        <Button variant="dark" href="mailto:hello@drinkbossmode.net" style={{ marginTop: 28 }}>hello@drinkbossmode.net</Button>
      </section>
    </>
  );
}

function FounderCard({ name, role, bio, tone }) {
  const accent = tone === 'blue' ? 'var(--bm-blue)' : 'var(--bm-pink)';
  const accentDeep = tone === 'blue' ? 'var(--bm-blue-deep)' : 'var(--bm-pink-deep)';
  return (
    <div style={{ background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8, padding: 32, boxShadow: '6px 6px 0 0 var(--bm-ink)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <div style={{ width: 80, height: 80, flexShrink: 0, background: accent, color: '#fff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, letterSpacing: '-0.02em' }}>{name[0]}</div>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: accentDeep, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{role}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 4, color: 'var(--bm-ink)' }}>{name}</div>
        <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 12, color: 'rgba(10,10,10,0.6)' }}>{bio}</p>
      </div>
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8, overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', textAlign: 'left', padding: '18px 22px',
        background: '#fff', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
        fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 18,
        letterSpacing: '0.02em', color: '#0A0A0A',
      }}>
        <span style={{ color: '#0A0A0A' }}>{q}</span>
        <span style={{ color: 'var(--bm-pink)', fontSize: 26, lineHeight: 1, flexShrink: 0, display: 'inline-block', transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 200ms var(--ease-out)' }}>+</span>
      </button>
      {open && <div style={{ padding: '0 22px 20px', fontSize: 15, lineHeight: 1.6, color: 'rgba(10,10,10,0.65)' }}>{a}</div>}
    </div>
  );
}

window.AboutPage = AboutPage;