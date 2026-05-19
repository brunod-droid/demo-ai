import Layout from "./layout";

const cards = [
  { title:"AI Training", text:"The full interactive presentation used during the session.", href:"/training/ai-customer-service", color:"#67e8f9" },
  { title:"Prompt Library", text:"Copy/paste prompts for emails, files, Copilot, benchmarks and Hub pages.", href:"/resources/prompts", color:"#8b5cf6" },
  { title:"Demo Guide", text:"Step-by-step instructions to reproduce the live demos.", href:"/resources/demo-guide", color:"#22c55e" },
];

export default function Home(){
  return <Layout><section style={styles.hero}>
    <div style={styles.badge}>Internal AI Enablement</div>
    <h1 style={styles.title}>Demo AI Hub</h1>
    <p style={styles.text}>A practical mini knowledge hub to keep the AI training alive after the session: presentation, prompts, demos, and reusable workflows.</p>
    <div style={styles.grid}>{cards.map(card=><a key={card.href} href={card.href} style={{...styles.card,borderTop:`8px solid ${card.color}`}}><h2>{card.title}</h2><p>{card.text}</p><span style={styles.link}>Open →</span></a>)}</div>
  </section></Layout>;
}
const styles={hero:{maxWidth:1180,margin:"0 auto",padding:"80px 34px"},badge:{display:"inline-block",padding:"10px 16px",borderRadius:999,background:"rgba(103,232,249,.14)",color:"#67e8f9",fontWeight:900,textTransform:"uppercase",letterSpacing:2},title:{fontSize:"clamp(60px,10vw,120px)",lineHeight:.9,margin:"24px 0",fontWeight:1000,letterSpacing:-4},text:{maxWidth:850,color:"#b8c7d9",fontSize:26,lineHeight:1.35,fontWeight:700},grid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22,marginTop:48},card:{background:"white",color:"#0f172a",borderRadius:28,padding:28,minHeight:260,boxShadow:"0 24px 70px rgba(0,0,0,.28)"},link:{display:"inline-block",marginTop:18,color:"#0e7490",fontWeight:950}};
