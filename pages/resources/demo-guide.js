import Layout from "../layout";
const demos=[
["AI Agent","Simulate a competitor benchmark agent in Copilot, then manually copy the draft to Outlook or Teams."],
["Chat","Rewrite a difficult customer message in different tones."],
["Project","Upload Oak & Luna demo files and ask Copilot for a board-ready launch summary."],
["Copilot Workflow","Reuse the same prompt and output format for a repetitive Excel/reporting process."],
["Hub","Turn a raw department document into a structured Hub page."]
];
export default function DemoGuide(){return <Layout><section style={styles.wrap}><h1 style={styles.title}>Demo Guide</h1><p style={styles.subtitle}>A simple checklist to replay the workshop demos.</p><div style={styles.list}>{demos.map(([title,text],idx)=><div key={title} style={styles.item}><div style={styles.number}>{idx+1}</div><div><h2>{title}</h2><p>{text}</p></div></div>)}</div></section></Layout>;}
const styles={wrap:{maxWidth:1050,margin:"0 auto",padding:"64px 34px"},title:{fontSize:72,margin:0,fontWeight:1000},subtitle:{color:"#b8c7d9",fontSize:24},list:{display:"grid",gap:18,marginTop:34},item:{display:"grid",gridTemplateColumns:"70px 1fr",gap:22,background:"white",color:"#0f172a",borderRadius:28,padding:24},number:{width:54,height:54,borderRadius:"50%",background:"#67e8f9",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:1000,fontSize:24}};
