import Image from "next/image";
import publications from "../../data/publications";
import "../../styles/simplyAbuDhabi.css";

export const metadata = {
  title: "Simply Abu Dhabi",
  description: "Bachir Oueida's features in Simply Abu Dhabi magazine.",
};

export default function SimplyAbuDhabiPage() {
  return (
    <div className="sad-page">
      <div className="sad-container">
        <header className="sad-header">
          <h1>Simply Abu Dhabi</h1>
          <p>Features from Simply Abu Dhabi magazine</p>
        </header>

        <div className="sad-list">
          {publications.map((item) =>
            item.spread ? (
              <figure key={item.id} className="sad-spread">
                <Image
                  src={item.spread.src}
                  alt={item.spread.alt}
                  width={item.spread.width}
                  height={item.spread.height}
                  sizes="(max-width: 900px) 100vw, 900px"
                  className="sad-spread-image"
                />
                <figcaption className="sad-spread-caption">
                  <span className="sad-issue">{item.issue}</span>
                  <span className="sad-pages">{item.pages}</span>
                </figcaption>
              </figure>
            ) : (
              <article key={item.id} className="sad-issue-card">
                {item.issue || item.pages ? (
                  <div className="sad-issue-meta">
                    {item.issue ? (
                      <span className="sad-issue">{item.issue}</span>
                    ) : null}
                    {item.pages ? (
                      <span className="sad-pages">{item.pages}</span>
                    ) : null}
                  </div>
                ) : null}
                <h2 className="sad-issue-title">{item.title}</h2>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sad-issue-link"
                >
                  Read the issue
                </a>
              </article>
            )
          )}
        </div>
      </div>
    </div>
  );
}
