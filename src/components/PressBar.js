import "../styles/pressBar.css";

const publications = [
  { name: "The Real Deal", style: "serif" },
  { name: "Los Angeles Times", style: "serif" },
  { name: "Robb Report", style: "sans" },
  { name: "DIGS", style: "sans" },
  { name: "Yahoo! Finance", style: "sans" },
];

export default function PressBar() {
  return (
    <section className="press-bar">
      <div className="press-bar-inner">
        <span className="press-bar-label">AS SEEN IN</span>
        <div className="press-bar-divider-v" />
        <ul className="press-bar-list">
          {publications.map((pub, i) => (
            <li key={pub.name} className="press-bar-item">
              <span className={`press-bar-name press-bar-name--${pub.style}`}>
                {pub.name}
              </span>
              {i < publications.length - 1 && (
                <span className="press-bar-dot" aria-hidden="true">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
