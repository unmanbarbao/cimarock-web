import { Link } from "react-router-dom";
import posts from "../data/posts.json";
import { PhotoFrame } from "../components/ui";
import "./pages.css";

export default function Journal() {
  return (
    <div className="page-journal">
      <header className="page-hero page-hero--paper">
        <div className="container">
          <p className="meta">Editorial</p>
          <h1 className="display">Journal</h1>
          <p className="page-hero__lead editorial">
            Noticias, entrevistas, crónicas y perfiles de la escena musical de
            Casanare.
          </p>
        </div>
      </header>
      <section className="fest-section">
        <div className="container journal-list">
          {posts.map((post) => (
            <article key={post.slug} className="journal-card">
              <PhotoFrame
                label={post.photo.label}
                tone={post.photo.tone}
                src={post.photo.src}
                aspect="16/10"
              />
              <div>
                <p className="meta">
                  {post.type} · {post.date}
                </p>
                <h2 className="editorial">{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to="/journal" className="journal-card__more">
                  Leer (mockup)
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
