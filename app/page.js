export default function Home() {
  return (
    <main style={{
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "Arial",
      padding: "40px",
      textAlign: "center"
    }}>
      
      <h1 style={{ color: "#d4af37", fontSize: "3rem" }}>
        Mohammad Sakeer
      </h1>

      <p>Creator • Coach • Entrepreneur</p>

      <h2 style={{ marginTop: "20px" }}>
        I help people grow and level up
      </h2>

      <div style={{ marginTop: "30px" }}>
        <a href="https://www.instagram.com/mhmd_zak_" target="_blank"
          style={{
            margin: "10px",
            padding: "10px 20px",
            background: "#d4af37",
            color: "#000",
            textDecoration: "none"
          }}>
          Instagram
        </a>

        <a href="https://m.youtube.com/channel/UC_muDeVIc3Dhws8KPz2SCzw"
          target="_blank"
          style={{
            margin: "10px",
            padding: "10px 20px",
            border: "1px solid #d4af37",
            color: "#d4af37",
            textDecoration: "none"
          }}>
          YouTube
        </a>
      </div>

    </main>
  );
}
