import { useState } from "react";

const COLORS = { intro:"#67e8f9", agent:"#f97316", chat:"#3b82f6", project:"#8b5cf6", workflow:"#22c55e", hub:"#06b6d4" };

const slides = [
  { type:"image", section:"intro", title:"AI AT WORK", subtitle:"Smarter tools. Stronger teams. Better results.", image:"/ai-work-hero.png" },
  { type:"image", section:"intro", title:"The 10 Commandments", subtitle:"For an amazing training experience.", image:"/10-commandments-ai.png" },
  { type:"cards", section:"intro", title:"Choose the right AI format", subtitle:"This is the map for the full training.", cards:[
    ["Agent","Autonomous workflow","Runs, searches, drafts"],["Chat","Quick assistance","Rewrite, summarize, explain"],["Project","Shared workspace","Files + context"],["Copilot Workflow","Repeatable process","Same prompt, same output"],["Hub","Company knowledge","Reusable documentation"]
  ]},
  { type:"cards", section:"intro", title:"Where do teams lose the most time?", subtitle:"This is exactly where AI can help.", cards:[
    ["Customer Service","Repetitive replies & ticket analysis"],["Factory","Supplier delays & monitoring"],["Operations","Weekly reporting & consolidation"],["Brand","Searching competitor information"],["Developers","Documentation & requirements"],["Ecommerce","KPIs & trends consolidation"]
  ]},
  { type:"agent_intro", section:"agent", title:"AI Agent = autonomous workflow", subtitle:"AI can search, analyze and prepare information automatically.", image:"/agent-demo.png", text:"Before this session, an AI Agent automatically generated countdown emails. In Copilot, we simulate the workflow and stop at the draft stage." },
  { type:"agent_benchmark", section:"agent", title:"Demo: Theograce Competitor Benchmark", subtitle:"Today this is done manually twice per week. AI can prepare the daily benchmark draft.", cards:[
    ["Monitor","Pandora, Kendra Scott, Mint&Lily, Tiny Tags, James Avery, GLDN, Made by Mary, Haverhill"],["Analyze","Promotions, launches, pricing signals, gifting angles and messaging"],["Draft","Benchmark table + 3 insights + email digest"],["Manual final step","Copy the draft to Outlook or Teams"]
  ], prompt:"Act as a competitor benchmark assistant. Compare Pandora, Kendra Scott, Mint&Lily, Tiny Tags, James Avery, GLDN, Made by Mary and Haverhill. Summarize promotions, launches, pricing signals, messaging and customer-facing changes. Return a table and a 5-line email digest. Important: stop at draft stage. The final sending step remains manual." },
  { type:"chat", section:"chat", title:"Chat AI", subtitle:"The fastest way to improve daily communication.", original:"where is my order i wait since 2 weeks no answer this is unacceptable", versions:[
    ["Professional","Clear structure and reassurance","I am sorry for the delay and I understand your frustration. I will check your order status and get back to you with a clear update as soon as possible."],
    ["Empathetic","Emotion and understanding","I completely understand how disappointing it is to wait without a clear update. Let me look into this right away."],
    ["Luxury","Elegant and premium tone","Thank you for your patience. I am truly sorry for the wait and will personally review your order to provide a clear update."],
    ["Short","Efficiency and speed","I am sorry for the delay. I will check your order now and send you an update quickly."]
  ]},
  { type:"cards", section:"project", title:"Project = shared AI workspace", subtitle:"Use it when files, conversations and context belong together.", cards:[
    ["Shared context","All files and notes are used together"],["Ongoing work","Better than a one-time chat"],["Team collaboration","Everyone can reuse the same base"],["Business memory","Useful for launches, reporting and follow-up"],["Board output","Transform raw analysis into executive language"],["Copilot option","Use Copilot Chat, Pages or Notebook if available"]
  ]},
  { type:"project_demo", section:"project", title:"Project demo: Oak & Luna Brand Workspace", subtitle:"Upload 3 files: launch brief, competitor snapshot and customer feedback CSV.", steps:[
    "Open Microsoft 365 Copilot","Attach the 3 Oak & Luna demo files","Ask for launch risks, customer insights and next actions","Then ask for a board-ready presentation","Create a Copilot Page if available","If not, paste the board-ready output into Word or PowerPoint"
  ], prompt:"STEP 1 - Intelligence summary: Using these Oak & Luna files, create a launch workspace summary. Analyze the launch objective, target customer, customer feedback trends, competitor positioning, operational risks, missing information and recommended next actions. Use the launch brief, competitor snapshot and customer feedback CSV together.\n\nSTEP 2 - Board-ready output: Now transform the analysis into a board-ready executive presentation. Keep only the top customer insights, main risks, competitor opportunities, launch priorities and recommended next actions. Use short executive language, bullet points, clear prioritization and concise business wording. Do not repeat raw operational details.\n\nSTEP 3 - Create the document: Create a Copilot Page from this response if the button is available. If not, format the answer so I can paste it into Word or PowerPoint with: title, executive summary, 3 insight cards, risk table, priorities and next actions." },
  { type:"excel", section:"workflow", title:"Everyone has an Excel file that hurts", subtitle:"The 37-tab file. The mystery formula. The weekly copy-paste ritual.", image:"/big excel.png", bullets:["Find duplicates","Explain blank cells","Detect anomalies","Generate formulas","Summarize KPIs","Suggest automation"] },
  { type:"workflow", section:"workflow", title:"From Chat to Copilot Workflow", subtitle:"Copilot does not always offer custom GPTs to everyone. The practical equivalent is a reusable workflow.", image:"/Guideline.png", bullets:["Chat = test manually","Project = collaborate with files","Copilot Workflow = reuse process","Same files","Same prompt","Same output format"], text:"If I repeat the same prompt every week, I should standardize it as a Copilot workflow: saved prompt, stable rules, same output format." },
  { type:"prompt", section:"workflow", title:"Exercise: improve one real Excel file", subtitle:"Ask AI to go one step further.", prompt:"Analyze this file. Identify duplicates, blank cells and inconsistent values. Explain why they matter. Suggest formulas or concatenations to improve it. Then propose 3 automation opportunities." },
  { type:"cards", section:"hub", title:"Hub AI", subtitle:"The final layer: reusable company knowledge.", cards:[["Documents","Turn raw files into structured pages"],["Navigation","Create a clear menu"],["FAQ","Transform recurring questions into answers"],["Training","Make onboarding easier"],["Operations","Centralize processes and owners"],["Scale","Knowledge no longer lives only in people’s heads"]]},
  { type:"hub_demo", section:"hub", title:"Live Demo: Start a Lime & Lou Hub", subtitle:"The GitHub repository is already created and deployed on Vercel. We only need content/files to add.", steps:["Upload LL Hub.txt or a department document","Ask AI to create a Hub structure","Create homepage summary and navigation","Create FAQ, escalation and training sections","Add the content to GitHub","Vercel publishes the page live"], prompt:"STEP 1 - Hub structure: Transform this LL Hub document into a structured department Hub. Create a homepage summary, key business areas, operational documentation categories, FAQ, useful quick links, training section, escalation section and a suggested navigation menu. Use clean and professional wording.\n\nSTEP 2 - Make it practical: Now simplify the structure for non-technical employees. Make the Hub easy to navigate, visually clear, operational and fast to use during daily work." },
  { type:"quiz", section:"intro", title:"Final quiz: which AI format should you use?", subtitle:"Click a card to reveal the recommended format.", cards:[["Weekly Excel process repeated every Monday","Copilot Workflow"],["Quick email rewrite","Chat"],["Shared launch workspace with files","Project"],["Automatic daily competitor monitoring","Agent logic / draft workflow"],["Reusable company knowledge page","Hub"]]},
  { type:"cards", section:"intro", title:"What should you try next?", subtitle:"Start small. Save time tomorrow.", cards:[["Chat","Rewrite an important email"],["Project","Create a shared AI workspace"],["Workflow","Standardize a repetitive process"],["Agent","Create a monitoring draft workflow"],["Hub","Transform documents into knowledge"]]}
];

export default function AICustomerServiceTraining(){
  const [index,setIndex]=useState(0); const [version,setVersion]=useState(0); const [revealed,setRevealed]=useState({});
  const slide=slides[index]; const color=COLORS[slide.section]||COLORS.intro;
  const next=()=>{setVersion(0);setRevealed({});setIndex(p=>Math.min(p+1,slides.length-1));};
  const prev=()=>{setVersion(0);setRevealed({});setIndex(p=>Math.max(p-1,0));};
  return <main style={styles.page}>
    <header style={styles.topBar}><div><div style={{...styles.kicker,color}}>{slide.section.toUpperCase()}</div><div style={styles.sub}>Slide {index+1} / {slides.length}</div></div>
      <nav style={styles.nav}><a href="/" style={styles.homeBtn}>Home</a><button style={styles.btn} onClick={prev}>Previous</button><button style={{...styles.btnPrimary,background:color}} onClick={next}>Next</button></nav></header>
    <section style={styles.container}><h1 style={styles.title}>{slide.title}</h1><p style={styles.subtitle}>{slide.subtitle}</p>
      {slide.type==="image"&&<ImageSlide slide={slide}/>}
      {slide.type==="cards"&&<Cards cards={slide.cards} color={color}/>}
      {slide.type==="agent_intro"&&<AgentIntro slide={slide} color={color}/>}
      {slide.type==="agent_benchmark"&&<AgentBenchmark slide={slide}/>}
      {slide.type==="chat"&&<ChatSlide slide={slide} version={version} setVersion={setVersion}/>}
      {slide.type==="project_demo"&&<DemoPrompt slide={slide} color={color}/>}
      {slide.type==="excel"&&<ExcelSlide slide={slide}/>}
      {slide.type==="workflow"&&<WorkflowSlide slide={slide} color={color}/>}
      {slide.type==="prompt"&&<PromptSlide slide={slide} color={color}/>}
      {slide.type==="hub_demo"&&<DemoPrompt slide={slide} color={color}/>}
      {slide.type==="quiz"&&<Quiz cards={slide.cards} revealed={revealed} setRevealed={setRevealed}/>}
    </section></main>;
}

function ImageSlide({slide}){return <div style={styles.heroImageWrap}><img src={slide.image} alt={slide.title} style={styles.heroImage}/></div>;}
function Cards({cards,color}){return <div style={styles.grid3}>{cards.map(c=><div key={c[0]} style={{...styles.white,borderTop:`8px solid ${color}`}}><h2>{c[0]}</h2><p style={styles.cardText}>{c[1]}</p>{c[2]&&<p style={styles.smallText}>{c[2]}</p>}</div>)}</div>;}
function AgentIntro({slide,color}){return <div style={styles.twoCols}><ImageSlide slide={slide}/><div style={{...styles.highlight,background:color}}><p style={styles.bigText}>{slide.text}</p></div></div>;}
function AgentBenchmark({slide}){return <><div style={styles.grid4}>{slide.cards.map(c=>{const manual=c[0].toLowerCase().includes("manual");return <div key={c[0]} style={manual?styles.redCard:styles.white}><h2>{c[0]}</h2><p style={styles.cardText}>{c[1]}</p></div>})}</div><PromptSlide slide={slide} color={COLORS.agent}/></>;}
function ChatSlide({slide,version,setVersion}){const cur=slide.versions[version];return <div style={styles.twoCols}><div style={{...styles.white,background:"#fee2e2"}}><div style={styles.kickerDark}>Original customer message</div><p style={styles.bigText}>“{slide.original}”</p></div><div style={styles.white}><div style={styles.tabs}>{slide.versions.map((v,i)=><button key={v[0]} onClick={()=>setVersion(i)} style={i===version?styles.tabActive:styles.tab}>{v[0]}</button>)}</div><div style={styles.toneBox}>{cur[1]}</div><p style={styles.bigText}>“{cur[2]}”</p></div></div>;}
function ExcelSlide({slide}){return <div style={styles.twoCols}><ImageSlide slide={slide}/><div style={styles.grid2}>{slide.bullets.map(b=><div key={b} style={styles.card}>{b}</div>)}</div></div>;}
function WorkflowSlide({slide,color}){return <div style={styles.twoCols}><ImageSlide slide={slide}/><div><div style={styles.grid2}>{slide.bullets.map(b=><div key={b} style={styles.card}>{b}</div>)}</div><div style={{...styles.highlight,background:color,marginTop:20}}><p style={styles.bigText}>{slide.text}</p></div></div></div>;}
function DemoPrompt({slide,color}){return <div style={styles.twoCols}><div style={styles.grid2}>{slide.steps.map((s,i)=><div key={s} style={styles.card}>{i+1}. {s}</div>)}</div><PromptSlide slide={slide} color={color}/></div>;}
function PromptSlide({slide,color}){return <div style={{...styles.highlight,background:color,marginTop:24}}><div style={styles.kickerDark}>Prompt to try</div><pre style={styles.promptText}>{slide.prompt}</pre></div>;}
function Quiz({cards,revealed,setRevealed}){return <div style={styles.grid5}>{cards.map((c,i)=><button key={c[0]} style={styles.quizCard} onClick={()=>setRevealed(r=>({...r,[i]:!r[i]}))}><p style={styles.smallText}>{c[0]}</p><h2>{revealed[i]?c[1]:"Click to reveal"}</h2></button>)}</div>;}

const styles={
page:{minHeight:"100vh",background:"linear-gradient(135deg,#07111f,#020617)",color:"white",fontFamily:"Arial, Helvetica, sans-serif"},
topBar:{position:"sticky",top:0,zIndex:20,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 28px",background:"rgba(7,17,31,.94)",borderBottom:"1px solid rgba(255,255,255,.12)",backdropFilter:"blur(10px)"},
kicker:{textTransform:"uppercase",letterSpacing:3,fontSize:13,fontWeight:950},kickerDark:{color:"#0f172a",textTransform:"uppercase",letterSpacing:2,fontSize:13,fontWeight:950,opacity:.8},sub:{color:"#cbd5e1",marginTop:4},
nav:{display:"flex",gap:12,alignItems:"center"},homeBtn:{padding:"10px 16px",borderRadius:12,border:"1px solid rgba(255,255,255,.2)",background:"rgba(255,255,255,.12)",color:"white",fontWeight:900,cursor:"pointer",textDecoration:"none"},
btn:{padding:"10px 16px",borderRadius:12,border:"1px solid rgba(255,255,255,.2)",background:"rgba(255,255,255,.08)",color:"white",fontWeight:800,cursor:"pointer"},btnPrimary:{padding:"10px 16px",borderRadius:12,border:"none",color:"#0f172a",fontWeight:950,cursor:"pointer"},
container:{maxWidth:1400,margin:"0 auto",padding:"38px 28px 80px"},title:{fontSize:"clamp(44px,7vw,96px)",lineHeight:.95,margin:0,fontWeight:1000,letterSpacing:-3},subtitle:{fontSize:"clamp(20px,2vw,30px)",color:"#cbd5e1",marginTop:18,marginBottom:28,fontWeight:700},
heroImageWrap:{marginTop:26,width:"100%",borderRadius:28,overflow:"hidden",boxShadow:"0 30px 90px rgba(0,0,0,.45)",border:"1px solid rgba(255,255,255,.18)",background:"#020617",display:"flex",justifyContent:"center",alignItems:"center"},
heroImage:{display:"block",width:"100%",height:"auto",maxHeight:"calc(100vh - 185px)",objectFit:"contain",background:"#020617"},
twoCols:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginTop:34},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},grid3:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,marginTop:34},grid4:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18,marginTop:34},grid5:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:16,marginTop:34},
white:{background:"white",color:"#0f172a",borderRadius:26,padding:26,boxShadow:"0 20px 50px rgba(0,0,0,.24)"},card:{background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.14)",color:"white",borderRadius:22,padding:22,minHeight:130,fontSize:22,fontWeight:900,lineHeight:1.25},
redCard:{background:"#fee2e2",color:"#991b1b",borderRadius:26,padding:26,border:"3px solid #ef4444",boxShadow:"0 20px 50px rgba(127,29,29,.25)"},highlight:{color:"#0f172a",borderRadius:28,padding:30,fontWeight:900,boxShadow:"0 20px 50px rgba(0,0,0,.25)"},
cardText:{fontSize:22,lineHeight:1.25,fontWeight:850},smallText:{color:"#0e7490",fontSize:17,lineHeight:1.35,fontWeight:850},bigText:{fontSize:28,lineHeight:1.25,fontWeight:900},
tabs:{display:"flex",flexWrap:"wrap",gap:10,marginBottom:22},tab:{border:"none",borderRadius:12,padding:"10px 14px",background:"#e2e8f0",fontWeight:900,cursor:"pointer"},tabActive:{border:"none",borderRadius:12,padding:"10px 14px",background:"#3b82f6",color:"white",fontWeight:900,cursor:"pointer"},
toneBox:{background:"#dbeafe",padding:14,borderRadius:16,marginBottom:18,color:"#1e3a8a",fontWeight:900},promptText:{whiteSpace:"pre-wrap",fontFamily:"Arial, Helvetica, sans-serif",fontSize:18,lineHeight:1.42,fontWeight:800,margin:"14px 0 0"},
quizCard:{background:"white",color:"#0f172a",borderRadius:26,padding:22,border:"none",cursor:"pointer",minHeight:210,textAlign:"left",boxShadow:"0 20px 50px rgba(0,0,0,.24)"}
};
