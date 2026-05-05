function SciencePage() {
  const headlineNumbers = [
    { num: '144%', label: 'Faster recovery rate', ref: '3' },
    { num: '47%', label: 'Less muscular fatigue', ref: '3' },
    { num: '17%', label: 'More strength', ref: '4' },
    { num: '21.6%', label: 'More endurance', ref: '4' },
    { num: '54%', label: 'More performance during recovery', ref: '3' },
    { num: '49%', label: 'More muscle energy', ref: '4' },
  ];

  const myoIngredients = [
    { name: 'Complete Dairy Protein', dose: '20g (MPC + WPI)', what: 'Milk Protein Concentrate + Whey Protein Isolate — the full essential amino acid spectrum, both fast and slow-release fractions.', does: 'Supports muscle protein synthesis, recovery, and satiety. The base layer the peptide network builds on top of.' },
    { name: 'PeptiStrong®', dose: '2.4g (full clinical dose)', what: 'A clinically dosed network of bioactive peptides derived from Vicia faba (fava bean). Plant-based.', does: 'Activates muscle protein synthesis (mTOR / S6 phosphorylation), inhibits myostatin by 56%, suppresses TNF-α inflammation.' },
    { name: 'PeakO2®', dose: '300mg organic mushroom blend', what: 'Six organic mushrooms — cordyceps, reishi, king trumpet, shiitake, lion\'s mane, turkey tail.', does: 'Improves oxygen utilization. Supports endurance, stamina, and recovery between high-intensity efforts.' },
    { name: 'MCT Oil (C8-dominant)', dose: '1g', what: 'Medium-chain triglycerides, C8-dominant — the fastest-converting MCT to ketones.', does: 'Fast brain and body fuel. Supports focus and endurance without spiking blood sugar.' },
    { name: 'Reb-M + Oobli Sweet Protein', dose: '5–9g real sugar only', what: 'Reb-M (the cleanest stevia fraction) plus Oobli sweet protein. No sucralose. No acesulfame-K.', does: 'Naturally sweet with a cleaner metabolic profile. Protects gut and glucose response.' },
  ];

  const energyIngredients = [
    { name: 'Cognizin® Citicoline', dose: '500mg', what: 'Clinically tested form of citicoline — a building block of brain cell membranes and a precursor to acetylcholine, dopamine, and norepinephrine.', does: 'At 500mg/day, increased brain membrane turnover by 26% and brain energy utilization by 13.6% (Silveri 2008). Supports memory, mental energy, and long-term brain health.' },
    { name: 'CognatiQ®', dose: '200mg', what: 'Whole coffee fruit extract — the only clinically validated coffee fruit ingredient shown to elevate BDNF, a neuroprotein critical to brain cell growth and connectivity.', does: 'A single 200mg dose improved decisiveness, accuracy, and impulse control within 60 minutes (Robinson 2024). 28-day daily use drove up to 35% improvement in processing speed. Non-stimulant.' },
    { name: 'N-Acetyl-L-Tyrosine', dose: '500mg', what: 'A more bioavailable form of the amino acid L-tyrosine. Precursor to dopamine and norepinephrine.', does: 'Supports cognitive performance under stress, sleep loss, and demanding workloads. Focused motivation, not overstimulation.' },
    { name: 'L-Theanine', dose: '100mg', what: 'An amino acid found naturally in green tea leaves.', does: 'Balances caffeine. Calm focus, reduced anxiety, improved attention control.' },
    { name: 'Green Tea Caffeine', dose: '140mg', what: 'Naturally occurring caffeine, sourced from green tea — not synthetic.', does: 'Smooth, plant-based energy with lower jitter and crash risk than synthetic caffeine.' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bm-paper)', padding: '80px 48px 56px', position: 'relative', overflow: 'hidden', borderBottom: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.12, background: 'repeating-linear-gradient(135deg, var(--bm-pink) 0px, var(--bm-pink) 1px, transparent 1px, transparent 28px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>The Science</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.88, letterSpacing: '-0.03em', textTransform: 'uppercase', marginTop: 20, color: 'var(--bm-ink)' }}>Receipts<br />over hype.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.55, marginTop: 24, maxWidth: 680, color: 'rgba(10,10,10,0.65)' }}>Myo-Peptide is built on three published human studies of the only clinically validated plant-based peptide network on the market. Energy is built on Cognizin® citicoline and CognatiQ® coffee fruit extract — both at the doses used in their published RCTs. Every claim below traces to a citation.</p>
        </div>
      </section>

      {/* Numbers */}
      <section style={{ background: 'var(--bm-paper-2)', borderBottom: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>In human trials at 2.4g/day</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-ink)' }}>The numbers<br />don't lie.</h2>
        <div className="bm-grid-3" style={{ marginTop: 40 }}>
          {headlineNumbers.map(n => (
            <div key={n.label} style={{ background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8, padding: 28, boxShadow: '6px 6px 0 0 var(--bm-ink)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 0.88, letterSpacing: '-0.03em', color: 'var(--bm-pink)' }}>
                {n.num}<sup style={{ fontSize: '0.22em', color: 'var(--bm-ink)', verticalAlign: 'super' }}>{n.ref}</sup>
              </div>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 12, color: 'var(--bm-ink)' }}>{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Studies */}
      <section style={{ background: 'var(--bm-paper)', borderBottom: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>Published studies</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-ink)' }}>Three RCTs.<br />One ingredient.</h2>
        <div className="bm-grid-3" style={{ marginTop: 40 }}>
          <StudyCard num="01" pop="Healthy males" title="Strength recovery + fatigue" findings={['+144% muscle recovery rate','−47% muscular fatigue','+54% performance during recovery']} cite="Kerr et al., Nutrients 2023;15(4):986" dose="2.4g/day, 14 days" />
          <StudyCard num="02" pop="Resistance-trained" title="Strength + endurance + bone" findings={['+17% strength gains','+21.6% muscular endurance','+49% muscle energy','+0.7% bone mineral content']} cite="RCT, manuscript submitted (2024)" dose="2.4g/day, with resistance training" />
          <StudyCard num="03" pop="Immobilization model" title="Recovery from disuse" findings={['+103% leg strength recovery vs 68% milk protein','4× more effective than milk protein for protein synthesis','90% of participants showed an anabolic response']} cite="Weijzen et al., J Nutrition 2023" dose="20g/day (higher dose study)" footnote="Reference data only — not the dose of the 12 fl oz can." />
        </div>
      </section>

      {/* Cognizin */}
      <section style={{ background: '#ddf0f8', borderBottom: '1.5px solid var(--bm-ink)', position: 'relative', overflow: 'hidden' }} className="bm-section-pad">
        <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '100%', opacity: 0.08, background: 'repeating-linear-gradient(135deg, var(--bm-blue) 0px, var(--bm-blue) 1px, transparent 1px, transparent 24px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 8 }}>
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-blue-deep)', marginBottom: 14 }}>Inside Boss Mode™ Energy</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-ink)' }}>Cognizin®<br />does the focus.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 16, maxWidth: 520, color: 'rgba(10,10,10,0.65)' }}>500mg of clinically-tested citicoline per can — the dose used in the brain-energy and memory studies. Paired with green tea caffeine and 100mg L-theanine for clean focus, no jitters.</p>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--bm-blue-deep)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.5, padding: '10px 14px', background: 'rgba(255,255,255,0.7)', border: '1.5px solid var(--bm-blue-deep)', borderRadius: 4, whiteSpace: 'nowrap' }}>Clinically dosed<br />at 500mg/day</div>
          </div>
          <div className="bm-grid-4" style={{ marginTop: 40 }}>
            <CognizinStat num="26%" citeRef="6" label="Increase in brain membrane turnover" note="500mg/day, 6 weeks. Silveri 2008." />
            <CognizinStat num="13.6%" citeRef="6" label="Increase in brain energy utilization" note="500mg/day, 6 weeks. Silveri 2008." />
            <CognizinStat num="↑" citeRef="8" label="Improved episodic + overall memory" note="500mg/day, 12 weeks. Nakazaki 2021." big />
            <CognizinStat num="↑" citeRef="9" label="Improved attention + psychomotor speed" note="500mg/day, 28 days. McGlade 2019." big />
          </div>
        </div>
      </section>

      {/* CognatiQ */}
      <section style={{ background: 'var(--bm-paper-2)', borderBottom: '1.5px solid var(--bm-ink)' }} className="bm-section-pad">
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 8 }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink-deep)', marginBottom: 14 }}>Inside Boss Mode™ Energy</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-ink)' }}>CognatiQ®<br />does the decisions.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 16, maxWidth: 520, color: 'rgba(10,10,10,0.65)' }}>200mg of whole coffee fruit extract per can — the only clinically studied coffee fruit shown to raise BDNF. Same-day decisiveness. Long-term resilience. Non-stimulant.</p>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--bm-pink-deep)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.5, padding: '10px 14px', background: '#fff', border: '1.5px solid var(--bm-pink-deep)', borderRadius: 4, whiteSpace: 'nowrap' }}>Clinically dosed<br />at 200mg/day</div>
        </div>
        <div className="bm-grid-4" style={{ marginTop: 40 }}>
          <CognizinStat num="80.7%" citeRef="13" label="Reduction in N-back omission errors" note="200mg single dose, within 60 min. Robinson 2024." pink />
          <CognizinStat num="24.9%" citeRef="13" label="Improved cognitive accuracy" note="200mg single dose. Robinson 2024." pink />
          <CognizinStat num="41.1%" citeRef="13" label="Reduction in go/no-go commission errors" note="200mg single dose. Robinson 2024." pink />
          <CognizinStat num="35%" citeRef="13" label="Improvement in processing speed" note="200mg/day, 28 days. Robinson 2024." pink />
        </div>
      </section>

      {/* Ingredients */}
      <section style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', position: 'relative', overflow: 'hidden' }} className="bm-section-pad">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, background: 'repeating-linear-gradient(135deg, rgba(43,42,130,0.8) 0px, rgba(43,42,130,0.8) 1px, transparent 1px, transparent 40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bm-pink)', marginBottom: 14 }}>Inside the can</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-paper)' }}>Two formulas.<br />Ten ingredients.</h2>
          <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, maxWidth: 680, color: 'rgba(244,239,228,0.7)' }}>Pink = <strong style={{ color: 'var(--bm-pink)' }}>Myo-Peptide™</strong>. Blue = <strong style={{ color: 'var(--bm-blue)' }}>Boss Mode Energy™</strong>.</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 56, marginBottom: 20, flexWrap: 'wrap' }}>
            <Capsule tone="pink" style={{ fontSize: 11 }}>Myo-Peptide™</Capsule>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-pink)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>The Recovery Formula · 5 ingredients</span>
          </div>
          <div className="bm-grid-2">
            {myoIngredients.map(i => <IngredientCard key={i.name} i={i} accent="var(--bm-pink)" />)}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 64, marginBottom: 20, flexWrap: 'wrap' }}>
            <Capsule tone="blue" style={{ fontSize: 11 }}>Energy</Capsule>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-blue)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>The Focus Formula · 5 ingredients</span>
          </div>
          <div className="bm-grid-2">
            {energyIngredients.map(i => <IngredientCard key={i.name} i={i} accent="var(--bm-blue)" />)}
          </div>
        </div>
      </section>

      {/* Citations */}
      <section style={{ background: 'var(--bm-paper-2)' }} className="bm-section-pad">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.4)', marginBottom: 14 }}>References</div>
        <ol style={{ marginTop: 16, paddingLeft: 20, fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.8, color: 'rgba(10,10,10,0.6)', maxWidth: 900 }}>
          <li>Cal R, et al. Preclinical evaluation of a food-derived functional ingredient. <em>Nutrients</em>. 2020;12(8):2274.</li>
          <li>Kerr A, et al. Improved strength recovery and reduced fatigue. <em>Nutrients</em>. 2023;15(4):986.</li>
          <li>RCT manuscript submitted. Strength and endurance after resistance training with Vicia faba hydrolysate. 2024.</li>
          <li>Weijzen MEG, et al. Vicia faba peptide network supplementation. <em>The Journal of Nutrition</em>. 2023.</li>
          <li>Silveri MM, et al. Citicoline enhances frontal lobe bioenergetics. <em>NMR Biomed</em>. 2008;21(10):1066–75.</li>
          <li>Nakazaki E, et al. Citicoline and memory function in healthy older adults. <em>J Nutr</em>. 2021;151(8):2153–2160.</li>
          <li>McGlade E, et al. The effect of citicoline supplementation on motor speed and attention. <em>J Atten Disord</em>. 2019;23(2):121–134.</li>
          <li>Robinson J, et al. Whole Coffee Cherry Extract Improves Working Memory. <em>Nutrients</em>. 2024. PMC11279654.</li>
        </ol>
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(10,10,10,0.1)', fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.7, color: 'rgba(10,10,10,0.4)', letterSpacing: '0.04em', maxWidth: 900 }}>
          THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE U.S. FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE.<br /><br />
          PeptiStrong® is a registered trademark of Nuritas Limited. PeakO2® is a registered trademark of NuLiv Science. Cognizin® is a registered trademark of Kyowa Hakko Bio Co., Ltd. CognatiQ® is a registered trademark of Cognis.
        </div>
      </section>
    </>
  );
}

function StudyCard({ num, pop, title, findings, cite, dose, footnote }) {
  return (
    <div style={{ background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8, padding: 24, boxShadow: '6px 6px 0 0 var(--bm-ink)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--bm-pink)', letterSpacing: '0.1em' }}>STUDY {num}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(10,10,10,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{pop}</span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, lineHeight: 1.05, textTransform: 'uppercase', marginTop: 12, letterSpacing: '-0.01em', color: 'var(--bm-ink)' }}>{title}</div>
      <ul style={{ marginTop: 14, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {findings.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, lineHeight: 1.45 }}>
            <span style={{ color: 'var(--bm-pink)', fontWeight: 800, flexShrink: 0 }}>+</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div style={{ flex: 1 }} />
      <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid rgba(10,10,10,0.1)', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(10,10,10,0.45)', lineHeight: 1.5, letterSpacing: '0.04em' }}>
        {cite}<br /><span style={{ color: 'var(--bm-pink)' }}>Dose: {dose}</span>
      </div>
      {footnote && <div style={{ marginTop: 8, fontSize: 11, color: 'rgba(10,10,10,0.4)', fontStyle: 'italic' }}>{footnote}</div>}
    </div>
  );
}

function CognizinStat({ num, citeRef, label, note, big, pink }) {
  return (
    <div style={{ background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8, padding: 20, boxShadow: '4px 4px 0 0 var(--bm-ink)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: big ? 'clamp(48px,5vw,80px)' : 'clamp(36px,4vw,56px)', lineHeight: 0.88, letterSpacing: '-0.03em', color: pink ? 'var(--bm-pink)' : 'var(--bm-blue-deep)' }}>
        {num}<sup style={{ fontSize: '0.24em', color: 'var(--bm-ink)', verticalAlign: 'super' }}>{citeRef}</sup>
      </div>
      <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 10, color: 'var(--bm-ink)' }}>{label}</div>
      <div style={{ flex: 1 }} />
      <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(10,10,10,0.08)', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(10,10,10,0.4)', lineHeight: 1.5, letterSpacing: '0.04em' }}>{note}</div>
    </div>
  );
}

function IngredientCard({ i, accent }) {
  return (
    <div style={{ background: accent === 'var(--bm-pink)' ? 'rgba(238,61,139,0.08)' : 'rgba(43,182,232,0.08)', borderRadius: 8, padding: 24, borderLeft: `6px solid ${accent}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, textTransform: 'uppercase', letterSpacing: '-0.01em', color: accent }}>{i.name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: accent, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{i.dose}</div>
      </div>
      <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55, color: 'rgba(244,239,228,0.85)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>What it is — </span>{i.what}
      </div>
      <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.55, color: 'rgba(244,239,228,0.85)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>What it does — </span>{i.does}
      </div>
    </div>
  );
}

window.SciencePage = SciencePage;