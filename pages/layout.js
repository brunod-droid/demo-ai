const navItems = [
  ["Home", "/"],
  ["AI Training", "/training/ai-customer-service"],
  ["Prompt Library", "/resources/prompts"],
  ["Demo Guide", "/resources/demo-guide"],
];

export default function Layout({ children }) {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <div style={styles.logo}>Demo AI Hub</div>
          <div style={styles.subtitle}>Practical AI resources for everyday work</div>
        </div>
        <nav style={styles.nav}>
          {navItems.map(([label, href]) => <a key={href} href={href} style={styles.navLink}>{label}</a>)}
        </nav>
      </header>
      {children}
    </main>
  );
}

const styles = {
  page:{minHeight:"100vh",background:"linear-gradient(135deg,#07111f,#020617)",color:"white"},
  header:{position:"sticky",top:0,zIndex:20,display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,padding:"18px 34px",background:"rgba(7,17,31,.94)",borderBottom:"1px solid rgba(255,255,255,.12)",backdropFilter:"blur(12px)"},
  logo:{fontSize:24,fontWeight:950,letterSpacing:-.5},
  subtitle:{marginTop:4,color:"#b8c7d9",fontSize:14},
  nav:{display:"flex",flexWrap:"wrap",gap:10},
  navLink:{padding:"10px 14px",borderRadius:14,background:"rgba(255,255,255,.08)",color:"#e0f2fe",fontWeight:800,fontSize:14},
};
