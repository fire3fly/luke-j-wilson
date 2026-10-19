import {
  site,
  hero,
  quickFacts,
  services,
  about,
  portrait,
  awayFromThePage,
  journey,
  craft,
  education,
  scripts,
  contact,
} from "@/content";
import Nav from "@/components/Nav";
import TypedRole from "@/components/TypedRole";
import Motion from "@/components/Motion";

// Shows any [BRACKETED] text highlighted so unfinished spots are easy to spot.
function T({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <mark className="fill" key={i}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// Staggers the fade-in of items in a row or list.
const d = (i: number) => ({ transitionDelay: `${i * 90}ms` });

const ArrowUpRight = () => (
  <svg
    className="arrow"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Motion />
      <Nav name={site.shortName} initials={site.initials} />

      <main id="top">
        {/* HERO: styled like the top of a screenplay page */}
        <section className="hero">
          <div className="lamp" aria-hidden="true" />

          {/* Three little framed chips that drift slowly, like the posters on his wall */}
          <div className="chips" aria-hidden="true">
            {craft.pillars.map((p, i) => (
              <span
                className="chip float-slow"
                style={i ? { animationDelay: `${i * 1.5}s` } : undefined}
                key={p.title}
              >
                {p.title}
              </span>
            ))}
          </div>

          <div className="wrap hero-inner">
            <p className="slug reveal" style={d(0)}>
              {hero.slugLine}
            </p>
            <h1 className="reveal" style={d(1)}>
              {site.name}
            </h1>
            <p className="hero-role reveal" style={d(2)}>
              <TypedRole words={hero.roles} />
            </p>
            <p className="action reveal" style={d(3)}>
              <T>{hero.action}</T>
            </p>
            <p className="hero-tagline reveal" style={d(4)}>
              {site.tagline}
            </p>
            <div className="hero-actions reveal" style={d(5)}>
              <a href="#contact" className="btn">
                Hire me
              </a>
              <a href="#services" className="btn btn-ghost">
                See services
              </a>
            </div>
            <dl className="facts reveal" style={d(6)}>
              {quickFacts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>
                    <T>{f.value}</T>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="wrap">
            <h2 className="reveal">{services.heading}</h2>
            <p className="lede reveal" style={d(1)}>
              <T>{services.intro}</T>
            </p>
            <div className="posters services">
              {services.items.map((it, i) => (
                <div className="reveal" style={d(i % 3)} key={it.title}>
                  <figure className="poster lift">
                    <figcaption>{it.title}</figcaption>
                    <p>
                      <T>{it.text}</T>
                    </p>
                  </figure>
                </div>
              ))}
            </div>
            <ul className="skills reveal" style={d(2)}>
              {services.skills.map((sk) => (
                <li key={sk}>{sk}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section-alt">
          <div className="wrap about-grid">
            <div className="about-side">
              <h2 className="reveal">{about.heading}</h2>
              <figure className="portrait reveal" style={d(1)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={portrait.src} alt={portrait.alt} width={900} height={1014} />
              </figure>
            </div>
            <div className="prose">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="reveal" style={d(i)}>
                  <T>{p}</T>
                </p>
              ))}
              <aside className="away reveal" style={d(about.paragraphs.length)}>
                <h3>{awayFromThePage.heading}</h3>
                <p>
                  <T>{awayFromThePage.text}</T>
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="section">
          <div className="wrap">
            <h2 className="reveal">The journey so far.</h2>
            <ol className="timeline">
              {journey.map((j, i) => (
                <li key={i} className="reveal" style={d(i % 2)}>
                  <div className="when">
                    <T>{j.dates}</T>
                  </div>
                  <div className="what">
                    <h3>
                      <T>{j.title}</T>
                    </h3>
                    <p className="where">
                      <T>{j.place}</T>
                    </p>
                    <p>
                      <T>{j.summary}</T>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CRAFT: three framed posters, like the ones on his wall */}
        <section id="craft" className="section section-alt">
          <div className="wrap">
            <h2 className="reveal">{craft.heading}</h2>
            <p className="lede reveal" style={d(1)}>
              <T>{craft.intro}</T>
            </p>
            <div className="posters">
              {craft.pillars.map((p, i) => (
                <div className="reveal" style={d(i)} key={p.title}>
                  <figure className="poster lift">
                    <figcaption>{p.title}</figcaption>
                    <p>
                      <T>{p.text}</T>
                    </p>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION: framed diplomas */}
        <section id="education" className="section">
          <div className="wrap">
            <h2 className="reveal">{education.heading}</h2>
            <div className="diplomas">
              {[...education.degrees, ...education.honors].map((deg, i) => (
                <div className="reveal" style={d(i % 2)} key={deg.degree + deg.field}>
                  <div className="diploma lift">
                    <p className="school">{deg.school}</p>
                    <p className="degree">{deg.degree}</p>
                    <p className="field">{deg.field}</p>
                    {deg.year && (
                      <p className="year">
                        <T>{deg.year}</T>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCRIPTS: each card is a small screenplay page */}
        <section id="scripts" className="section section-alt">
          <div className="wrap">
            <h2 className="reveal">{scripts.heading}</h2>
            <p className="lede reveal" style={d(1)}>
              <T>{scripts.intro}</T>
            </p>
            <div className="pages">
              {scripts.projects.map((s, i) => (
                <div className="reveal" style={d(i)} key={i}>
                  <article className="page lift">
                    <h3>
                      <T>{s.title}</T>
                    </h3>
                    <p className="meta">
                      <T>{s.format}</T> / <T>{s.genre}</T>
                    </p>
                    <p className="logline">
                      <T>{s.logline}</T>
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="wrap contact-inner">
            <h2 className="reveal">{contact.heading}</h2>
            <p className="lede reveal" style={d(1)}>
              <T>{contact.intro}</T>
            </p>
            <ul className="contact-links">
              {contact.links.map((l, i) => (
                <li key={l.label} className="reveal" style={d(i)}>
                  <span>{l.label}</span>
                  <a href={l.href} className="link-arrow">
                    <T>{l.value}</T>
                    <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="hairline" />
        <div className="wrap">
          <p>
            &copy; {site.year} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
