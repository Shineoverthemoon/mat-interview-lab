/* Garage Guide source-based interview tab */
const GG_QS = [
  [
    "Project overview",
    "Walk me through Garage Guide.",
    "It's a React vehicle reference app where users browse cars and motorcycles, search by make or model, filter by type and year, view owner/service manual links, and save favorites.",
    "Show one complete search-to-manual flow.",
    "src/pages/Home.jsx"
  ],
  [
    "Architecture",
    "Why did you use React?",
    "React lets the UI be split into reusable components and update when application state changes. This project uses Vite for development and builds.",
    "What components would you reuse in a new page?",
    "src/App.jsx"
  ],
  [
    "State",
    "What does useState() do?",
    "useState tracks searchTerm, selectedType, selectedYear, selectedVehicle, and favorites. Updating state allows React to render the new UI.",
    "Where does the favorites array live?",
    "src/App.jsx"
  ],
  [
    "Filtering",
    "How does searching work?",
    "vehicles.filter() checks whether the vehicle make/model matches the text and whether its type and year match the chosen filters. It returns only vehicles passing all three checks.",
    "What happens for Honda + Motorcycle + 1996?",
    "src/App.jsx"
  ],
  [
    "Filtering",
    "Why do you call toLowerCase()?",
    "Both input and vehicle make/model are lowercased before includes(), so letter case does not prevent a partial text match.",
    "Will 'sup' match a Supra?",
    "src/App.jsx"
  ],
  [
    "JavaScript",
    "Why use Number(selectedYear)?",
    "Select values are strings. vehicle.year is numeric. Number() converts the selected year to a number for strict equality; All skips that year restriction.",
    "Does '2019' === 2019 evaluate to true?",
    "src/App.jsx"
  ],
  [
    "Arrays",
    "How do map() and filter() differ?",
    "filter() selects the matching vehicles; map() converts the resulting vehicles into VehicleCard elements for rendering.",
    "Why use a key property for every mapped card?",
    "src/pages/Home.jsx"
  ],
  [
    "Favorites",
    "How are duplicate favorites prevented?",
    "favorites.some() tests whether another saved vehicle has the same ID. A new favorite is appended only if that ID is absent.",
    "Why compare IDs?",
    "src/App.jsx"
  ],
  [
    "Favorites",
    "How are favorites removed?",
    "favorites.filter() creates a new list excluding the clicked vehicle ID, and setFavorites() stores that new array.",
    "Does filter mutate the old array?",
    "src/App.jsx"
  ],
  [
    "Components",
    "How do your components communicate?",
    "App owns shared state and passes values and callback functions as props to Home and Favorites. VehicleCard calls the callbacks to request actions such as adding favorites.",
    "Trace an Add to Favorites click from button to App state.",
    "src/components/VehicleCard.jsx"
  ],
  [
    "Routing",
    "How does navigation work?",
    "main.jsx wraps the app in BrowserRouter. App declares Home, Favorites, and About routes. Header uses React Router Link elements.",
    "Why was a Netlify redirect added for deep links?",
    "src/App.jsx"
  ],
  [
    "Forms",
    "How does the contact form work?",
    "The fields use React state. handleSubmit prevents normal submission and checks name, basic email format, and message before showing a success status. It does not transmit a message.",
    "What would real delivery and better validation require?",
    "src/components/ContactForm.jsx"
  ],
  [
    "Persistence",
    "Do favorites survive refresh?",
    "No. The favorites array is initialized in React state and isn't written to localStorage or a backend. Refreshing initializes it again.",
    "How could you persist favorites, and what are the tradeoffs?",
    "src/App.jsx"
  ],
  [
    "Improvements",
    "What would you improve first?",
    "Candidates include persistent favorites, a real contact endpoint, stronger validation, automated tests, an API-backed vehicle catalog, and explicit vehicle-details navigation. Choose one and justify the priority.",
    "Describe the smallest testable change you would make.",
    "src/pages/Favorites.jsx"
  ],
  [
    "Workflow",
    "How did you organize and test your work?",
    "The Git history records feature branches/pull requests for functionality, year filtering, responsive CSS, manuals, debugging, comments, and a Netlify redirect. Explain your actual contributions and how you checked changes.",
    "Describe one real bug and how you reproduced and verified the fix.",
    null
  ]
];
function ggEsc(v){return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function renderGarageGuide(){
 const app=document.getElementById("app");
 const source="https://github.com/mseng12/garage-guide";
 app.innerHTML=`
 <style>
 .gg-hero{background:radial-gradient(circle at 80% 16%,rgba(114,219,218,.15),transparent 45%),linear-gradient(120deg,#192a42,#101b2d);border:1px solid #364b60;border-radius:22px;padding:clamp(25px,3.6vw,43px)}
 .gg-hero h1{font-size:clamp(30px,4vw,45px);line-height:1.15;letter-spacing:-1.4px;margin:13px 0}.gg-hero h1 span{color:var(--lime)}
 .gg-hero p,.gg-note,.gg-desc{color:var(--muted);font-size:13px;line-height:1.8;max-width:900px}
 .gg-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}.gg-counts{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:17px 0}
 .gg-count{border-radius:14px;background:var(--panel);border:1px solid var(--border);padding:18px}.gg-count small{font-size:10px;color:var(--muted);display:block;margin-bottom:6px;letter-spacing:1px}.gg-count strong{font-size:18px}
 .gg-note{max-width:none;background:#17253b;border:1px solid #354760;border-radius:13px;padding:17px 19px}
 .gg-heading{margin:31px 0 11px}.gg-heading h2{margin:6px 0 0;font-size:clamp(21px,2.6vw,27px)}
 .gg-list{display:grid;gap:10px}.gg-question{background:var(--panel);border:1px solid #34465e;border-radius:14px;overflow:hidden}.gg-question[open]{border-color:#6e935b}
 .gg-question summary,.gg-reveal summary{cursor:pointer;list-style:none}.gg-question summary::-webkit-details-marker,.gg-reveal summary::-webkit-details-marker{display:none}
 .gg-question summary{padding:17px;display:flex;align-items:center;gap:15px}.gg-no{font-size:12px;font-weight:800;color:var(--lime);width:26px;flex-shrink:0}
 .gg-qbody{flex:1}.gg-topic{font-size:10px;color:var(--muted);font-weight:700;letter-spacing:.7px}.gg-qtitle{font-size:14px;font-weight:750;color:var(--text);display:block;margin-top:5px;line-height:1.5}
 .gg-plus{font-size:20px;color:var(--lime)}.gg-question[open] .gg-plus{transform:rotate(45deg)}.gg-answer{padding:0 22px 20px 59px;font-size:13px;line-height:1.85;color:#dce8f6}
 .gg-label{font-size:10px;text-transform:uppercase;letter-spacing:1.1px;font-weight:800;color:var(--lime)}.gg-follow{background:#1e2f3b;border-left:3px solid var(--cyan);padding:11px 13px;margin:14px 0;border-radius:0 8px 8px 0}
 .gg-src{display:inline-block;margin-top:2px;font-size:11px;font-weight:700}.gg-challenges{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}
 .gg-challenge{border-radius:16px;background:var(--panel);border:1px solid var(--border);padding:20px;min-width:0}.gg-challenge h3{font-size:17px;line-height:1.4;margin:13px 0}.gg-challenge p{font-size:12px;line-height:1.8;color:#c7d6e8}
 .gg-challenge code{font-family:ui-monospace,Consolas,monospace;color:#ccf4ae;overflow-wrap:anywhere}.gg-snippet{background:#0b1524;border:1px solid #35475b;padding:13px;border-radius:10px;overflow:auto;font-size:12px;line-height:1.7}
 .gg-reveal{padding-top:13px;margin-top:14px;border-top:1px solid #35465a}.gg-reveal summary{color:var(--lime);font-size:12px;font-weight:800}.gg-flow{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
 .gg-flow>div{border:1px solid var(--border);background:var(--panel);padding:17px;border-radius:13px}.gg-flow strong{font-size:13px}.gg-flow p{font-size:12px;color:var(--muted);line-height:1.7}
 .gg-cta{margin-top:22px;padding:20px;background:#18302d;border:1px solid #405f50;border-radius:15px;display:flex;justify-content:space-between;align-items:center;gap:16px}.gg-cta p{font-size:12px;color:var(--muted)}
 @media(max-width:1120px){.gg-challenges{grid-template-columns:1fr}}@media(max-width:680px){.gg-counts,.gg-flow{grid-template-columns:1fr}.gg-answer{padding:0 15px 18px}.gg-cta{flex-direction:column;align-items:flex-start}}
 </style>
 <div class="gg-hero">
 <div class="eyebrow">SOURCE-BASED INTERVIEW PRACTICE</div>
 <h1>Garage Guide <span>Project Prep</span></h1>
 <p>Practice talking through Matt's actual React application. Explain your reasoning <strong>before</strong> expanding the reference answers. Follow each explanation by opening the linked source code.</p>
 <div class="gg-actions"><a class="button primary" href="${source}" target="_blank" rel="noopener noreferrer">↗ Open Garage Guide code</a><a class="button secondary" href="https://github.com/users/mseng12/projects/1/views/1" target="_blank" rel="noopener noreferrer">↗ Open project board</a></div></div>
 <section class="gg-counts" aria-label="Project information"><div class="gg-count"><small>TECHNOLOGY</small><strong>React · JavaScript · Vite</strong></div><div class="gg-count"><small>PROJECT QUESTIONS</small><strong>15 to practice</strong></div><div class="gg-count"><small>CODE REVIEW CHALLENGES</small><strong>3 scenarios</strong></div></section>
 <div class="gg-note"><strong>Verified scope:</strong> The board is named <em>Garage Guide App Project</em>, but its individual cards weren't accessible publicly. These questions are based on the public <a href="${source}" target="_blank" rel="noopener noreferrer">garage-guide source</a>, including six vehicle records and the visible project history. Code-review observations below have not been checked in a running app. These are practice prompts, not official interview questions.</div>
 <div class="gg-heading"><div class="eyebrow">01 / INTERVIEW QUESTIONS</div><h2>Explain your project, not just the syntax</h2></div>
 <p class="gg-desc">Joe asks the question. Matt explains what he did. Only then open the card to compare against the source-grounded answer and ask the follow-up question.</p>
 <div class="gg-list">${GG_QS.map((q,i)=>`<details class="gg-question"><summary><span class="gg-no">${String(i+1).padStart(2,"0")}</span><span class="gg-qbody"><span class="gg-topic">${ggEsc(q[0])}</span><span class="gg-qtitle">${ggEsc(q[1])}</span></span><span class="gg-plus" aria-hidden="true">+</span></summary><div class="gg-answer"><span class="gg-label">Reference answer</span><p>${ggEsc(q[2])}</p><div class="gg-follow"><strong>Ask next:</strong> ${ggEsc(q[3])}</div><a class="gg-src" href="${q[4]?`${source}/blob/main/${q[4]}`:`${source}/pulls?q=is%3Apr`}" target="_blank" rel="noopener noreferrer">↗ ${q[4]?`Inspect ${ggEsc(q[4])}`:"View Git change history"}</a></div></details>`).join("")}</div>
 <div class="gg-heading"><div class="eyebrow">02 / CODE REVIEW</div><h2>Three deeper challenges</h2></div>
 <div class="gg-challenges">
 <article class="gg-challenge"><span class="small-pill accent">CHALLENGE 1 · JS LOGIC</span><h3>Explain the year filter</h3><p>From <a href="${source}/blob/main/src/App.jsx" target="_blank" rel="noopener noreferrer">App.jsx</a>:</p><pre class="gg-snippet"><code>const matchesYear =
  selectedYear === "All" ||
  vehicle.year === Number(selectedYear);</code></pre><p><strong>Ask:</strong> What do ===, ||, and Number() mean? What happens when All is selected?</p><details class="gg-reveal"><summary>Reveal what to listen for</summary><p>All allows every year. Otherwise the string select value is converted to a number and compared using strict equality to vehicle.year. The OR expression is true if either condition is true.</p><p><strong>Follow-up:</strong> Honda + Motorcycle + 1996 returns no results in the six-record sample, because no single vehicle passes all filters.</p></details></article>
 <article class="gg-challenge"><span class="small-pill purple">CHALLENGE 2 · CODE REVIEW</span><h3>Why doesn't View Vehicle show details here?</h3><p>In <a href="${source}/blob/main/src/pages/Favorites.jsx" target="_blank" rel="noopener noreferrer">Favorites.jsx</a>, View Vehicle changes selectedVehicle. But selected vehicle details render inside <a href="${source}/blob/main/src/pages/Home.jsx" target="_blank" rel="noopener noreferrer">Home.jsx</a>.</p><p><strong>Ask:</strong> What happens after clicking View Vehicle while on Favorites? How would you fix the user experience?</p><details class="gg-reveal"><summary>Reveal what to listen for</summary><p>The click appears to update state but not display details on the Favorites page or navigate to Home. One fix is to navigate to the Home page after selection; another is a dedicated vehicle details route. Verify in a running app before calling it a confirmed bug.</p></details></article>
 <article class="gg-challenge"><span class="small-pill">CHALLENGE 3 · LIMITATIONS</span><h3>Be clear about what isn't built</h3><p>Review <a href="${source}/blob/main/src/data/vehicles.js" target="_blank" rel="noopener noreferrer">vehicles.js</a> and <a href="${source}/blob/main/src/components/ContactForm.jsx" target="_blank" rel="noopener noreferrer">ContactForm.jsx</a>.</p><p><strong>Ask:</strong> Is there a database or backend API? Are favorites persisted? Does the contact form send messages?</p><details class="gg-reveal"><summary>Reveal what to listen for</summary><p>The checked code uses a six-item local array, favorites in React state only, and a client-side form that shows success without sending a request. No backend or database integration was present in the inspected repository. Explain how you could add those features.</p></details></article>
 </div>
 <div class="gg-heading"><div class="eyebrow">03 / COACHING PLAN</div><h2>Use this in a screen-sharing session</h2></div>
 <div class="gg-flow"><div><strong>01 · Demo (5 min)</strong><p>Share Garage Guide. Explain the user problem, search, manuals, favorites, and navigation.</p></div><div><strong>02 · Explain code (15 min)</strong><p>Answer selected questions aloud, then open the corresponding source files and trace the implementation.</p></div><div><strong>03 · Reason about bugs (15 min)</strong><p>Try the three challenges. Predict behavior and describe the smallest safe change plus a test.</p></div><div><strong>04 · Live code (10 min)</strong><p>Switch to Code lab. Explain a solution, write code, run tests, and explain why it works.</p></div></div>
 <div class="gg-cta"><div><strong>Ready to practice live coding?</strong><p>The original coding challenges and quizzes are still available.</p></div><button class="button primary" type="button" data-view="code">Open Code lab ↗</button></div>
 `;
}
