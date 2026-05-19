import { useState } from "react";

const slides = [
  {
    type: "hero_image",
    title: "AI AT WORK",
    subtitle: "Smarter tools. Stronger teams. Better results.",
    image: "/ai-work-hero.png",
  },

  {
    type: "hero_image",
    title: "The 10 Commandments",
    subtitle: "For an amazing training experience.",
    image: "/10-commandments-ai.png",
  },

  {
    type: "content",
    title: "Choose the right AI format",
    subtitle: "Chat, Projects, Workflows and AI Agents.",
    bullets: [
      "AI Agents = autonomous workflows",
      "Chat = quick help and brainstorming",
      "Projects = files + context + collaboration",
      "Copilot Workflows = repeatable processes",
      "Hub = structured knowledge sharing",
    ],
  },
];

export default function AICustomerServiceTraining() {
  const [index, setIndex] = useState(0);

  const slide = slides[index];

  const next = () => setIndex((p) => Math.min(p + 1, slides.length - 1));
  const prev = () => setIndex((p) => Math.max(p - 1, 0));

  return (
    <div style={styles.page}>
      <div style={styles.topBar}>
        <div>
          <div style={styles.logo}>Demo AI Hub</div>
          <div style={styles.sub}>Interactive AI Training</div>
        </div>

        <div style={styles.nav}>
          <a href="/" style={styles.homeBtn}>
            Home
          </a>

          <button style={styles.btn} onClick={prev}>
            Previous
          </button>

          <button style={styles.btnPrimary} onClick={next}>
            Next
          </button>
        </div>
      </div>

      <div style={styles.container}>
        <h1 style={styles.title}>{slide.title}</h1>
        <p style={styles.subtitle}>{slide.subtitle}</p>

        {slide.type === "hero_image" && (
          <div style={styles.heroImageWrap}>
            <img src={slide.image} alt="" style={styles.heroImage} />
          </div>
        )}

        {slide.type === "content" && (
          <div style={styles.grid}>
            {slide.bullets.map((b) => (
              <div key={b} style={styles.card}>
                {b}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#07111f,#020617)",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  topBar: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 28px",
    background: "rgba(7,17,31,.92)",
    borderBottom: "1px solid rgba(255,255,255,.1)",
    backdropFilter: "blur(10px)",
  },

  logo: {
    fontSize: 24,
    fontWeight: 900,
  },

  sub: {
    color: "#cbd5e1",
    marginTop: 4,
  },

  nav: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },

  btn: {
    padding: "10px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.2)",
    background: "rgba(255,255,255,.08)",
    color: "white",
    fontWeight: 800,
    cursor: "pointer",
  },

  btnPrimary: {
    padding: "10px 16px",
    borderRadius: 12,
    border: "none",
    background: "#8b5cf6",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  homeBtn: {
    padding: "10px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.2)",
    background: "rgba(255,255,255,.12)",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
    textDecoration: "none",
  },

  container: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "40px 28px 80px",
  },

  title: {
    fontSize: "clamp(44px,7vw,96px)",
    lineHeight: 0.95,
    margin: 0,
    fontWeight: 1000,
    letterSpacing: -3,
  },

  subtitle: {
    fontSize: 24,
    color: "#cbd5e1",
    marginTop: 18,
    marginBottom: 32,
    fontWeight: 700,
  },

  heroImageWrap: {
    marginTop: 26,
    width: "100%",
    borderRadius: 28,
    overflow: "hidden",
    boxShadow: "0 30px 90px rgba(0,0,0,.45)",
    border: "1px solid rgba(255,255,255,.18)",
    background: "#020617",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heroImage: {
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: "calc(100vh - 170px)",
    objectFit: "contain",
    background: "#020617",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 20,
    marginTop: 40,
  },

  card: {
    background: "white",
    color: "#0f172a",
    borderRadius: 24,
    padding: 28,
    minHeight: 180,
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.3,
    boxShadow: "0 20px 50px rgba(0,0,0,.25)",
  },
};
