export default function Home() {
  return (
    <main className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Mohammad Sakeer</h1>
        <p className="tagline">I help people grow and level up</p>

        <div className="buttons">
          <a href="https://www.instagram.com/mhmd_zak_" target="_blank">
            Instagram
          </a>
          <a href="https://m.youtube.com/channel/UC_muDeVIc3Dhws8KPz2SCzw" target="_blank" className="outline">
            YouTube
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m building a personal brand focused on growth, mindset, and leveling up in life.
          My mission is to help people unlock their potential and create a powerful life.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Work With Me</h2>
        <p>Want to grow faster? Let’s connect.</p>
        <a href="mailto:mohammadsakeer99@gmail.com">Email Me</a>
      </section>

    </main>
  );
}
