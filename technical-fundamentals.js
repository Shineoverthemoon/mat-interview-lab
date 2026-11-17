/* Self-study technical fundamentals for Matt. Educational examples, not official interview questions. */
const TF_QUESTIONS=[
  {
    "topic": "Classes & Constructors",
    "level": "Beginner",
    "q": "What is the difference between a class and a constructor?",
    "a": "A class defines the structure and behavior of objects. A constructor runs when a new object is created and initializes that object's fields. In Java a constructor has the same name as the class and no return type.",
    "code": "class Vehicle {\n  String make;\n  Vehicle(String make) { this.make = make; }\n}\nVehicle car = new Vehicle(\"Toyota\");",
    "try": "Which line creates the object, and which line initializes its make?"
  },
  {
    "topic": "Classes & Constructors",
    "level": "Beginner",
    "q": "What is an object (instance) of a class?",
    "a": "An object is a specific instance created from a class. Several Vehicle objects can share the same structure but hold different field values.",
    "code": "Vehicle first = new Vehicle(\"Toyota\");\nVehicle second = new Vehicle(\"Honda\");",
    "try": "Are first and second the same object?"
  },
  {
    "topic": "Classes & Constructors",
    "level": "Beginner",
    "q": "What does this mean inside a Java constructor?",
    "a": "this refers to the current object. It is often used to distinguish an instance field from a constructor parameter that has the same name.",
    "code": "class Car {\n  private String model;\n  Car(String model) {\n    this.model = model;\n  }\n}",
    "try": "Why wouldn't model = model set the instance field in this example?"
  },
  {
    "topic": "Classes & Constructors",
    "level": "Intermediate",
    "q": "What happens if you don't write a constructor in Java?",
    "a": "If a class declares no constructors, Java provides a default no-argument constructor. Once you declare a constructor yourself, the compiler does not automatically add that default one.",
    "code": "class Bike { }\nBike bike = new Bike(); // uses default constructor",
    "try": "Would new Vehicle() compile if Vehicle only defines Vehicle(String make)?"
  },
  {
    "topic": "Four OOP Pillars",
    "level": "Beginner",
    "q": "What are the four pillars of object-oriented programming?",
    "a": "Encapsulation groups data with behavior and controls access. Abstraction exposes essential behavior while hiding details. Inheritance allows a class to extend another. Polymorphism allows different types to be used through a common interface or parent type.",
    "code": "// Encapsulation | Abstraction | Inheritance | Polymorphism",
    "try": "Can you give one short example of each without memorizing this definition?"
  },
  {
    "topic": "Four OOP Pillars",
    "level": "Intermediate",
    "q": "What is encapsulation?",
    "a": "Encapsulation keeps an object's data and behavior together and can prevent uncontrolled changes by making fields private and exposing intentional methods.",
    "code": "class Account {\n  private int balance = 0;\n  public void deposit(int amount) {\n    if (amount > 0) balance += amount;\n  }\n  public int getBalance() { return balance; }\n}",
    "try": "Why is a public balance field riskier than a deposit method?"
  },
  {
    "topic": "Four OOP Pillars",
    "level": "Intermediate",
    "q": "What is abstraction?",
    "a": "Abstraction focuses on what an object can do without requiring callers to know how it does it. Interfaces and abstract classes can help define this contract in Java.",
    "code": "interface Notifier {\n  void send(String message);\n}\n// Different classes can implement send() differently.",
    "try": "Why could an application depend on Notifier rather than one specific email class?"
  },
  {
    "topic": "Four OOP Pillars",
    "level": "Intermediate",
    "q": "How does inheritance work in Java?",
    "a": "A subclass uses extends to inherit accessible behavior from a parent class. It can add fields or override inherited methods. Java allows a class to extend one class, while a class can implement multiple interfaces.",
    "code": "class Vehicle {\n  void start() { System.out.println(\"Starting\"); }\n}\nclass Motorcycle extends Vehicle { }\nnew Motorcycle().start();",
    "try": "Which class defines start(), and which class is calling it?"
  },
  {
    "topic": "Four OOP Pillars",
    "level": "Intermediate",
    "q": "What is polymorphism? How does overriding show it?",
    "a": "Polymorphism lets code treat different concrete objects as a shared type. At runtime, an overridden method can use the implementation belonging to the actual object.",
    "code": "class Animal { String sound(){ return \"?\"; } }\nclass Dog extends Animal {\n  @Override String sound(){ return \"Woof\"; }\n}\nAnimal pet = new Dog();\nSystem.out.println(pet.sound()); // Woof",
    "try": "Why is the output Woof even though the variable type is Animal?"
  },
  {
    "topic": "GET, POST & HTTP",
    "level": "Beginner",
    "q": "What's the difference between HTTP GET and POST?",
    "a": "GET is primarily for retrieving a resource and should not change server state as a requested effect. POST sends data to be processed by the server, commonly to create a resource or trigger an operation. POST is not limited to creating records.",
    "code": "GET  /api/vehicles/7\nPOST /api/vehicles\nContent-Type: application/json\n\n{\"make\":\"Toyota\",\"model\":\"Supra\"}",
    "try": "Which request would you use to look up a vehicle without changing it?"
  },
  {
    "topic": "GET, POST & HTTP",
    "level": "Intermediate",
    "q": "What are HTTP status codes 200, 201, 400, 404, and 500?",
    "a": "200 means a successful request, 201 usually means a resource was created, 400 means the request is invalid, 404 means the requested resource was not found, and 500 means an unexpected server error.",
    "code": "GET /api/vehicles/7  → 200 OK\nGET /api/vehicles/999 → 404 Not Found\nPOST /api/vehicles   → 201 Created",
    "try": "Would a 400 error normally suggest a request problem or a server crash?"
  },
  {
    "topic": "GET, POST & HTTP",
    "level": "Intermediate",
    "q": "What is a request body, and how is JSON used in APIs?",
    "a": "An HTTP request body contains data submitted to an endpoint, often JSON. The server parses that JSON and validates its fields. Many GET requests have no body; the requested resource is identified by the URL or query parameters.",
    "code": "POST /api/vehicles\nContent-Type: application/json\n\n{\"year\":2019,\"make\":\"Honda\",\"type\":\"Motorcycle\"}",
    "try": "Where would you look for an ID in GET /api/vehicles/7?"
  },
  {
    "topic": "GET, POST & HTTP",
    "level": "Intermediate",
    "q": "What does idempotent mean in HTTP?",
    "a": "An operation is idempotent when repeating the same request has the same intended effect on server state as making it once. GET, PUT, and DELETE are defined as idempotent by HTTP semantics; POST generally is not. Responses or logs can still differ.",
    "code": "PUT /api/vehicles/7\n{\"make\":\"Honda\"}\n// Repeating the same replacement has the same intended state.",
    "try": "Why might retrying a POST create duplicates without additional safeguards?"
  },
  {
    "topic": "CRUD",
    "level": "Beginner",
    "q": "What does CRUD stand for?",
    "a": "Create, Read, Update, Delete. These describe the four basic operations performed on stored records.",
    "code": "Create a vehicle\nRead a vehicle\nUpdate its model\nDelete a vehicle",
    "try": "Which CRUD operation happens when a user edits an existing record?"
  },
  {
    "topic": "CRUD",
    "level": "Intermediate",
    "q": "How do CRUD operations usually map to HTTP methods?",
    "a": "Common REST patterns use POST for Create, GET for Read, PUT or PATCH for Update, and DELETE for Delete. These are common conventions, not a guarantee that every API follows exactly this mapping.",
    "code": "POST   /vehicles     → Create\nGET    /vehicles/7   → Read\nPATCH  /vehicles/7   → Update\nDELETE /vehicles/7   → Delete",
    "try": "How would you explain PUT versus PATCH?"
  },
  {
    "topic": "CRUD",
    "level": "Intermediate",
    "q": "What is the difference between PUT and PATCH?",
    "a": "PUT requests that the target resource be replaced by the supplied representation, while PATCH applies a set of partial modifications. Actual field rules depend on the API contract.",
    "code": "PUT /vehicles/7\n{\"make\":\"Toyota\",\"model\":\"Supra\"}\n\nPATCH /vehicles/7\n{\"model\":\"Supra Turbo\"}",
    "try": "Why should you check an API's documentation before choosing how to update a record?"
  },
  {
    "topic": "Spring Boot",
    "level": "Beginner",
    "q": "What is Spring Boot?",
    "a": "Spring Boot is a Java framework that helps configure, run, and deploy Spring applications with convenient defaults and starters. It's often used to build REST APIs and backend services.",
    "code": "@SpringBootApplication\npublic class Application {\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}",
    "try": "What is Spring Boot simplifying compared with configuring everything manually?"
  },
  {
    "topic": "Spring Boot",
    "level": "Intermediate",
    "q": "What does @RestController do?",
    "a": "@RestController marks a Spring class whose handler methods produce HTTP responses, commonly JSON. Mapping annotations such as @GetMapping associate a Java method with a route and HTTP verb.",
    "code": "@RestController\n@RequestMapping(\"/api\")\nclass VehicleController {\n  @GetMapping(\"/ping\")\n  String ping() { return \"ok\"; }\n}",
    "try": "What HTTP request should reach ping()?"
  },
  {
    "topic": "Spring Boot",
    "level": "Intermediate",
    "q": "What are controller, service, and repository layers?",
    "a": "A controller handles HTTP requests and responses. A service coordinates business rules. A repository handles storage access. Keeping these responsibilities separate can make code easier to test and maintain.",
    "code": "// Controller → Service → Repository → Database\n// The arrows represent calls between responsibilities.",
    "try": "Where would you place a rule that rejects a duplicate VIN?"
  },
  {
    "topic": "Spring Boot",
    "level": "Intermediate",
    "q": "What is dependency injection in Spring?",
    "a": "Dependency injection supplies the dependencies a class needs rather than having the class construct everything itself. Spring can manage those components and inject them through constructors, making testing and swapping implementations easier.",
    "code": "@Service\nclass VehicleService { }\n\n@RestController\nclass VehicleController {\n  private final VehicleService service;\n  VehicleController(VehicleService service) {\n    this.service = service;\n  }\n}",
    "try": "Why might constructor injection be easier to test than new VehicleService() in the controller?"
  },
  {
    "topic": "Relational Databases",
    "level": "Beginner",
    "q": "What is a relational database?",
    "a": "A relational database stores data in tables of rows and columns and uses keys to express relationships between records. SQL is a language for querying and changing that data.",
    "code": "vehicles(id, make, model)\nmanuals(id, vehicle_id, url)",
    "try": "Why might manuals live in a separate table from vehicles?"
  },
  {
    "topic": "Relational Databases",
    "level": "Beginner",
    "q": "What's the difference between a primary key and a foreign key?",
    "a": "A primary key uniquely identifies a row in a table. A foreign key references a candidate key, usually a primary key, in another or the same table and helps enforce a relationship.",
    "code": "vehicles(id PRIMARY KEY, make)\nmanuals(id PRIMARY KEY,\n        vehicle_id FOREIGN KEY REFERENCES vehicles(id))",
    "try": "If a manual belongs to a vehicle, which column can link the two?"
  },
  {
    "topic": "Relational Databases",
    "level": "Intermediate",
    "q": "What does a SQL JOIN do?",
    "a": "A JOIN combines rows from related tables using a matching condition. An INNER JOIN returns rows with matches on both sides, while a LEFT JOIN keeps rows from the left table even if none match on the right.",
    "code": "SELECT v.make, m.url\nFROM vehicles v\nLEFT JOIN manuals m ON m.vehicle_id = v.id;",
    "try": "What happens to a vehicle without a manual in a LEFT JOIN?"
  },
  {
    "topic": "Relational Databases",
    "level": "Intermediate",
    "q": "How would you retrieve one vehicle by ID?",
    "a": "A WHERE condition filters rows so the query returns only matching records. In application code use bound parameters rather than concatenating untrusted input into SQL.",
    "code": "SELECT id, make, model\nFROM vehicles\nWHERE id = ?;",
    "try": "Why is a parameterized query preferable to building SQL from raw user text?"
  },
  {
    "topic": "Relational Databases",
    "level": "Intermediate",
    "q": "What is normalization and why does it matter?",
    "a": "Normalization organizes data to reduce unnecessary duplication and update anomalies. For example, keeping manual records separate can avoid repeating the same vehicle details in each manual row.",
    "code": "vehicles: 7 | Toyota | Supra\nmanuals:  1 | vehicle_id=7 | owners.pdf\n          2 | vehicle_id=7 | service.pdf",
    "try": "What goes wrong if the vehicle make is duplicated across dozens of manual rows?"
  },
  {
    "topic": "React Components",
    "level": "Beginner",
    "q": "What is a React component?",
    "a": "A component is a reusable unit of UI, often written as a function that returns JSX. Components can receive information and functions through props.",
    "code": "function VehicleCard({ vehicle }) {\n  return <h2>{vehicle.make} {vehicle.model}</h2>;\n}",
    "try": "What does the vehicle prop represent?"
  },
  {
    "topic": "React Components",
    "level": "Beginner",
    "q": "How are props different from state?",
    "a": "Props are values supplied by a parent component. State is data a component manages over time with mechanisms such as useState. A child should not directly mutate props.",
    "code": "const [favorites, setFavorites] = useState([]);\n<VehicleCard vehicle={vehicle} onFavorite={addToFavorites} />",
    "try": "Which part tells the child what vehicle to show, and which part lets it request an action?"
  },
  {
    "topic": "React Components",
    "level": "Intermediate",
    "q": "What does lifting state up mean?",
    "a": "When multiple components need the same changing value, place that state in their nearest common parent and pass the data or callbacks through props. In Garage Guide, App.jsx holds favorites used by Home and Favorites.",
    "code": "App (favorites state)\n  ├─ Home (add favorite)\n  └─ Favorites (view/remove favorite)",
    "try": "What could go wrong if Home and Favorites each maintained an unrelated favorites array?"
  },
  {
    "topic": "React Components",
    "level": "Intermediate",
    "q": "What is conditional rendering in React?",
    "a": "Conditional rendering shows one piece of UI or another based on a condition. Garage Guide shows a no-results message when filteredVehicles is empty.",
    "code": "{filteredVehicles.length > 0\n  ? <VehicleGrid vehicles={filteredVehicles} />\n  : <p>No vehicles found.</p>}",
    "try": "Which condition determines whether the message appears?"
  },
  {
    "topic": "Java Exceptions",
    "level": "Beginner",
    "q": "What do try, catch, and finally do?",
    "a": "try wraps code that may fail, catch handles matching exceptions, and finally is for cleanup that ordinarily runs whether the try succeeded or threw. A finally block isn't required and isn't a substitute for fixing the underlying problem.",
    "code": "try {\n  int result = 10 / 0;\n} catch (ArithmeticException ex) {\n  System.out.println(\"Cannot divide by zero\");\n} finally {\n  System.out.println(\"Finished attempt\");\n}",
    "try": "What two lines print, and why?"
  },
  {
    "topic": "Java Exceptions",
    "level": "Intermediate",
    "q": "What is the difference between checked and unchecked exceptions?",
    "a": "Checked exceptions must be caught or declared by the caller at compile time. Unchecked exceptions are subclasses of RuntimeException and generally don't require that declaration. Both can be handled with try/catch.",
    "code": "// IOException is checked.\n// NullPointerException is unchecked.",
    "try": "Which type is enforced by the Java compiler for catch-or-declare?"
  },
  {
    "topic": "Java Exceptions",
    "level": "Intermediate",
    "q": "How are throw and throws different?",
    "a": "throw actually raises one exception object at a particular point in code. throws appears in a method declaration to indicate exceptions the method may propagate.",
    "code": "void load() throws IOException {\n  throw new IOException(\"File missing\");\n}",
    "try": "Which keyword belongs in the method signature?"
  },
  {
    "topic": "Java Exceptions",
    "level": "Intermediate",
    "q": "What is try-with-resources used for?",
    "a": "try-with-resources closes resources that implement AutoCloseable when execution leaves the try statement, including after an exception. It is commonly preferred to a manual finally close for files and streams.",
    "code": "try (BufferedReader reader =\n       Files.newBufferedReader(path)) {\n  System.out.println(reader.readLine());\n}",
    "try": "Why is automatic closing important if an error occurs midway?"
  },
  {
    "topic": "Project Explanation",
    "level": "Beginner",
    "q": "How would you introduce Garage Guide in an interview?",
    "a": "Start with the problem: people need a simple way to find vehicle details and manuals. Describe what the app currently does, the React/JavaScript/Vite stack, your actual contribution, one challenge, and the outcome. Don't invent a backend or database.",
    "code": "Problem → Approach → Your contribution → Challenge → Testing → Learning",
    "try": "Can you explain your project in about 60 seconds without reading notes?"
  },
  {
    "topic": "Project Explanation",
    "level": "Intermediate",
    "q": "How would you describe a real bug you worked through?",
    "a": "Explain the expected behavior, what actually happened, how you reproduced it, which file or logic you inspected, the minimal change you made, and how you verified the outcome. The GitHub history records a testing and debugging pull request, but confirm details from your own experience.",
    "code": "Expected → Actual → Reproduce → Fix → Retest",
    "try": "Can you show the exact commit or file where you fixed a bug?"
  },
  {
    "topic": "Project Explanation",
    "level": "Intermediate",
    "q": "How do you answer when an interviewer asks about an unbuilt feature?",
    "a": "State the limitation accurately and describe a practical next step. Garage Guide's checked source uses a fixed vehicle list, in-memory favorites, and a contact form that displays a success message without sending a request.",
    "code": "Now: React state for favorites\nNext: localStorage or a backend API\nCheck: refresh and persistence tests",
    "try": "Which change would you make first, and how would you know it worked?"
  }
];
function tfEscape(v){return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
function renderTechnicalFundamentals(){
 const app=document.getElementById("app");
 if(!app) return;
 const topics=[...new Set(TF_QUESTIONS.map(q=>q.topic))];
 const slug=(s)=>"tf-"+s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
 app.innerHTML=`
 <style>
 .tf-hero{background:radial-gradient(circle at 80% 20%,rgba(166,156,255,.18),transparent 45%),linear-gradient(118deg,#17253c,#111b2e);border:1px solid #354761;border-radius:23px;padding:clamp(25px,3.8vw,43px)}
 .tf-hero h1{font-size:clamp(29px,4vw,47px);line-height:1.14;letter-spacing:-1.6px;margin:12px 0}.tf-hero h1 em{font-style:normal;color:var(--lime)}
 .tf-hero p{font-size:13px;line-height:1.9;color:#bccbde;max-width:750px}
 .tf-statline{display:flex;flex-wrap:wrap;gap:8px;margin-top:21px}.tf-statline span{border:1px solid #3b5166;background:#1b2b3c;border-radius:999px;padding:8px 11px;color:#d6e4f5;font-size:11px;font-weight:750}
 .tf-navlabel{font-size:11px;font-weight:800;color:#d3e2f5;margin:24px 0 11px}
 .tf-jump{display:flex;flex-wrap:wrap;gap:9px}.tf-jump a{color:#d5e6f2;text-decoration:none;border-radius:10px;background:#17253a;border:1px solid #33465e;padding:10px 12px;font-size:11px;font-weight:730}
 .tf-jump a:hover,.tf-jump a:focus-visible{border-color:var(--lime);color:var(--lime)}
 .tf-topic{scroll-margin-top:100px;margin-top:32px}.tf-topichead{display:flex;justify-content:space-between;align-items:end;gap:12px;margin-bottom:15px}
 .tf-topichead h2{font-size:clamp(21px,2.8vw,28px);margin:5px 0 0;letter-spacing:-.6px}.tf-topichead small{font-size:11px;color:var(--muted)}
 .tf-list{display:grid;gap:10px}.tf-card{background:var(--panel);border:1px solid #34455b;border-radius:15px;overflow:hidden}.tf-card[open]{border-color:#648a60}
 .tf-card>summary,.tf-answer details>summary{cursor:pointer;list-style:none}.tf-card>summary::-webkit-details-marker,.tf-answer details>summary::-webkit-details-marker{display:none}
 .tf-card>summary{display:flex;gap:13px;align-items:center;padding:19px 18px}
 .tf-no{color:var(--lime);width:28px;flex-shrink:0;font-size:12px;font-weight:850;font-family:ui-monospace,SFMono-Regular,Consolas,monospace}
 .tf-question{flex:1;min-width:0}.tf-level{display:block;font-size:10px;font-weight:780;letter-spacing:.8px;color:var(--muted);text-transform:uppercase}
 .tf-qtitle{display:block;font-size:14px;font-weight:770;line-height:1.5;margin-top:5px;color:var(--text)}
 .tf-plus{font-size:22px;line-height:1;color:var(--lime);transition:transform .12s}.tf-card[open] .tf-plus{transform:rotate(45deg)}
 .tf-answer{padding:0 20px 21px 58px;color:#d6e2f3;font-size:13px;line-height:1.85}
 .tf-anslabel{font-size:10px;font-weight:850;letter-spacing:1px;color:var(--lime);text-transform:uppercase}
 .tf-answer p{margin:9px 0 13px}.tf-example{background:#0a1322;border:1px solid #354860;border-radius:11px;padding:15px;white-space:pre;overflow-x:auto;font:12px/1.8 ui-monospace,SFMono-Regular,Consolas,monospace;color:#d4edf1;margin:13px 0}
 .tf-try{margin-top:12px;border-left:3px solid var(--cyan);background:#1c2f3b;border-radius:0 9px 9px 0;padding:12px 15px;color:#d1e8ef}
 .tf-footnote{margin-top:26px;padding:16px 18px;border:1px solid #31445c;background:#152338;border-radius:13px;font-size:12px;color:#bdcee2;line-height:1.8}
 .tf-bottom{margin-top:20px;display:flex;gap:11px;flex-wrap:wrap}
 @media(max-width:680px){.tf-card>summary{padding:16px 13px}.tf-answer{padding:0 15px 17px}.tf-topic{scroll-margin-top:72px}.tf-jump a{font-size:11px;padding:10px}}
 </style>
 <section class="tf-hero"><div class="eyebrow">TECHNICAL INTERVIEW STUDY GUIDE</div>
 <h1>Technical <em>Fundamentals.</em></h1>
 <p>Use this as your personal review guide for Java, object-oriented programming, APIs, databases, Spring Boot, React, and exception handling. Read each question, try answering it aloud, then expand the card to compare your reasoning with an explanation and small code example.</p>
 <div class="tf-statline"><span>${TF_QUESTIONS.length} practice questions</span><span>${topics.length} subject areas</span><span>Answers hidden until opened</span></div></section>
 <p class="tf-navlabel">JUMP TO A TOPIC</p><nav aria-label="Fundamentals topics" class="tf-jump">${topics.map(t=>`<a href="#${slug(t)}">${tfEscape(t)}</a>`).join("")}</nav>
 ${topics.map((t,ti)=>{
 const items=TF_QUESTIONS.filter(x=>x.topic===t);
 return `<section class="tf-topic" id="${slug(t)}"><div class="tf-topichead"><div><div class="eyebrow">TOPIC ${String(ti+1).padStart(2,"0")}</div><h2>${tfEscape(t)}</h2></div><small>${items.length} questions</small></div>
 <div class="tf-list">${items.map((q,i)=>`<details class="tf-card"><summary><span class="tf-no">${String(i+1).padStart(2,"0")}</span><span class="tf-question"><span class="tf-level">${tfEscape(q.level)}</span><span class="tf-qtitle">${tfEscape(q.q)}</span></span><span aria-hidden="true" class="tf-plus">+</span></summary><div class="tf-answer"><span class="tf-anslabel">Explanation</span><p>${tfEscape(q.a)}</p>${q.code?`<pre class="tf-example"><code>${tfEscape(q.code)}</code></pre>`:""}<div class="tf-try"><strong>Test your understanding:</strong> ${tfEscape(q.try)}</div></div></details>`).join("")}</div></section>`
 }).join("")}
 <div class="tf-footnote"><strong>Study note:</strong> These are independent interview-practice examples, not official LaunchCode or employer interview questions. Java and Spring examples are learning snippets, not code pulled from the Garage Guide project. Garage Guide is a frontend React application in the inspected repository; do not claim it implements a Java backend, a Spring Boot API, or a relational database.</div>
 <div class="tf-bottom"><button type="button" data-view="garage" class="button secondary">Review Garage Guide ↗</button><button type="button" data-view="code" class="button primary">Practice live coding ↗</button></div>
 `;
}
