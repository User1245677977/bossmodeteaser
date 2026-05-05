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
  React.useEffect(() => {
    const onHash = () => {
      setRoute(parse());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
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
