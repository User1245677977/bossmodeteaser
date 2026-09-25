// === Hash-based router ===
// #/, #/shop, #/product/<id>, #/science, #/about

function useHashRoute() {
  const parse = () => {
    const h = window.location.hash || '#/';
    const path = h.replace(/^#/, '') || '/';
    const parts = path.split('/').filter(Boolean);
    return { path, parts };
  };
  const [route, setRoute] = React.useState(parse);

  // Stop the browser from "remembering" and restoring a previous scroll
  // position for this page — we handle scroll position ourselves below.
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  React.useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Reset scroll AFTER the new page's content has actually rendered,
  // instead of on the raw hashchange event (which fires before React
  // has swapped in the new page — that race is what let the browser
  // land somewhere mid-page/at the bottom instead of the top).
  React.useEffect(() => {
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, [route.path]);

  return route;
}

function Link({ to, children, style, onClick, className }) {
  const handle = (e) => {
    if (onClick) onClick(e);
  };
  return (
    <a href={`#${to}`} onClick={handle} style={style} className={className}>{children}</a>
  );
}

window.useHashRoute = useHashRoute;
window.Link = Link;