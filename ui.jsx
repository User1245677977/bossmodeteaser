// === Boss Mode site — shared atoms ===
// Loaded first so all subsequent component files can use these.

const Eyebrow = ({ children, color, style }) => (
  <span style={{
    fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.16em',
    color: color || 'var(--fg-2)',
    ...style,
  }}>{children}</span>
);

const Button = ({ variant = 'primary', children, onClick, style, href }) => {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, height: 48, padding: '0 22px', borderRadius: 4,
    fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    cursor: 'pointer', border: '2px solid var(--bm-ink)',
    transition: 'transform 120ms var(--ease-out), box-shadow 120ms var(--ease-out)',
    textDecoration: 'none', whiteSpace: 'nowrap',
  };
  const variants = {
    primary: { background: 'var(--bm-pink)', color: '#fff', boxShadow: '4px 4px 0 0 var(--bm-ink)' },
    energy:  { background: 'var(--bm-blue)', color: 'var(--bm-ink)', boxShadow: '4px 4px 0 0 var(--bm-ink)' },
    ghost:   { background: 'transparent', color: 'var(--bm-ink)' },
    inverse: { background: 'var(--bm-paper)', color: 'var(--bm-ink)', borderColor: 'var(--bm-paper)', boxShadow: '4px 4px 0 0 var(--bm-pink)' },
    dark:    { background: 'var(--bm-ink)', color: 'var(--bm-paper)', borderColor: 'var(--bm-ink)', boxShadow: '4px 4px 0 0 var(--bm-pink)' },
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} className="bm-btn" style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </Tag>
  );
};

const Capsule = ({ tone = 'pink', children, style }) => {
  const tones = {
    pink:    { background: 'var(--bm-pink)', color: '#fff' },
    blue:    { background: 'var(--bm-blue)', color: 'var(--bm-ink)' },
    ink:     { background: 'var(--bm-ink)', color: 'var(--bm-paper)' },
    soft:    { background: 'var(--bm-pink-bg)', color: 'var(--bm-pink-deep)' },
    outline: { background: 'transparent', color: 'var(--bm-ink)', boxShadow: 'inset 0 0 0 1.5px var(--bm-ink)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 16px', borderRadius: 999,
      fontFamily: 'var(--font-text)', fontWeight: 700,
      fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      ...tones[tone], ...style,
    }}>{children}</span>
  );
};

const Stat = ({ value, label, color = 'var(--bm-pink)' }) => (
  <div>
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: 0.9, color, letterSpacing: '-0.02em' }}>{value}</div>
    <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 6, color: 'var(--fg-2)' }}>{label}</div>
  </div>
);

// === Product catalog — single source of truth ===
const SITE_PRODUCTS = [
  {
    id: 'myo-strawberry', line: 'Myo-Peptide™', flavor: 'Strawberry Milkshake',
    img: 'assets/cropped-can-myo-strawberry.png', bg: 'var(--bm-pink-bg)', accent: 'var(--bm-pink-deep)',
    price: 'COMING SOON', priceSub: 'COMING SOON',
    tagline: "World's first RTD peptide shake.",
    blurb: "Clinically proven plant-based peptides. 20g protein. Zero compromises. The strawberry milkshake you remember — engineered for the body you're building.",
    stats: [
      { v: '20g', l: 'Protein' },
      { v: '2.4g', l: 'PeptiStrong®' },
      { v: '5g', l: 'Sugar' },
    ],
    ingredients: [
      'Filtered water', 'Milk protein concentrate + whey protein isolate', 'PeptiStrong® (Vicia faba peptide network)',
      'MCT oil (C8-dominant)', 'PeakO2® organic mushroom blend', 'Natural strawberry flavor', 'Reb-M (fermented stevia)', 'Oobli sweet protein',
    ],
  },
  {
    id: 'myo-vanilla', line: 'Myo-Peptide™', flavor: 'Vanilla Marshmallow Milk',
    img: 'assets/cropped-can-myo-vanilla.png', bg: 'var(--bm-blue-sky)', accent: 'var(--bm-blue-deep)',
    price: 'COMING SOON', priceSub: 'COMING SOON',
    tagline: 'The childhood treat. The adult formula.',
    blurb: 'Soft vanilla, toasted marshmallow. 20g of clean protein and 2.4g of PeptiStrong® in every can. Built for the people who never stopped believing.',
    stats: [
      { v: '20g', l: 'Protein' },
      { v: '2.4g', l: 'PeptiStrong®' },
      { v: '5g', l: 'Sugar' },
    ],
    ingredients: [
      'Filtered water', 'Milk protein concentrate + whey protein isolate', 'PeptiStrong® (Vicia faba peptide network)',
      'MCT oil (C8-dominant)', 'PeakO2® organic mushroom blend', 'Natural vanilla flavor', 'Reb-M (fermented stevia)', 'Oobli sweet protein',
    ],
  },
  {
    id: 'myo-chai', line: 'Myo-Peptide™', flavor: 'Chai Latte',
    img: 'assets/cropped-can-myo-chai.png', bg: '#EBE5D7', accent: 'var(--bm-royal-deep)',
    price: 'COMING SOON', priceSub: 'COMING SOON',
    tagline: 'Peptide tea. Spice and steel.',
    blurb: 'Black tea, cardamom, cinnamon, ginger — and 2.4g of clinically dosed peptides. The most civilized way to put on muscle.',
    stats: [
      { v: '20g', l: 'Protein' },
      { v: '2.4g', l: 'PeptiStrong®' },
      { v: '40mg', l: 'Caffeine' },
    ],
    ingredients: [
      'Filtered water', 'Milk protein concentrate + whey protein isolate', 'PeptiStrong® (Vicia faba peptide network)',
      'Black tea extract', 'MCT oil (C8-dominant)', 'PeakO2® organic mushroom blend',
      'Cardamom, cinnamon, ginger, clove extracts', 'Reb-M (fermented stevia)',
    ],
  },
  {
    id: 'en-apex', line: 'Energy', flavor: 'Apex Punch',
    img: 'assets/cropped-can-energy-apex.png', bg: 'var(--bm-royal-deep)', accent: '#fff', dark: true,
    price: 'COMING SOON', priceSub: 'COMING SOON',
    tagline: 'Sharp, smooth, and precisely overclocked.',
    blurb: 'Tropical punch with bite. Green tea caffeine, Cognizin®, L-theanine, N-Acetyl-L-Tyrosine. Focus that holds for hours, not minutes.',
    stats: [
      { v: '140mg', l: 'Caffeine' },
      { v: '5g', l: 'Sugar' },
      { v: '0', l: 'Artificial' },
    ],
    ingredients: [
      'Carbonated filtered water', 'Green tea caffeine', 'Cognizin® citicoline',
      'CognatiQ®', 'N-Acetyl-L-Tyrosine', 'L-theanine', 'Natural tropical punch flavor',
      'Stevia leaf extract', 'Citric acid',
    ],
  },
  {
    id: 'en-strawberry', line: 'Energy', flavor: 'Candied Strawberry',
    img: 'assets/cropped-can-energy-strawberry.png', bg: 'var(--bm-red)', accent: '#fff', dark: true,
    price: 'COMING SOON', priceSub: 'COMING SOON',
    tagline: 'Sweet, loud, and honest.',
    blurb: "Strawberry that doesn't apologize. Same clinical Energy stack: green tea caffeine, Cognizin®, L-theanine. Your boss-level afternoon, in a 12-oz can.",
    stats: [
      { v: '140mg', l: 'Caffeine' },
      { v: '5g', l: 'Sugar' },
      { v: '0', l: 'Artificial' },
    ],
    ingredients: [
      'Carbonated filtered water', 'Green tea caffeine', 'Cognizin® citicoline',
      'CognatiQ®', 'N-Acetyl-L-Tyrosine', 'L-theanine', 'Natural strawberry flavor',
      'Stevia leaf extract', 'Citric acid',
    ],
  },
  {
    id: 'en-lemonade', line: 'Energy', flavor: 'Frosted Lemonade',
    img: 'assets/cropped-can-energy-lemonade.png', bg: 'var(--bm-sun-soft)', accent: 'var(--bm-ink)',
    price: 'COMING SOON', priceSub: 'COMING SOON',
    tagline: 'Cold, sharp, electric.',
    blurb: "Tart lemon, soft cream finish. Same Energy stack — built for hot days, long shifts, and the kind of work that doesn't end at five.",
    stats: [
      { v: '140mg', l: 'Caffeine' },
      { v: '5g', l: 'Sugar' },
      { v: '0', l: 'Artificial' },
    ],
    ingredients: [
      'Carbonated filtered water', 'Green tea caffeine', 'Cognizin® citicoline',
      'CognatiQ®', 'N-Acetyl-L-Tyrosine', 'L-theanine', 'Natural lemon flavor',
      'Stevia leaf extract', 'Citric acid',
    ],
  },
];

Object.assign(window, { Eyebrow, Button, Capsule, Stat, SITE_PRODUCTS });