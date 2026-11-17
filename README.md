# Mat's Interview Lab

An independent, static JavaScript technical interview practice website for screen-sharing and live coaching.

**No packages, build tools, API keys, backend, or accounts are needed to use the site.** It is built for GitHub Pages.

## What's inside

- **40 interview-style questions**, including true/false, multiple choice, code-output predictions, debugging, and interview reasoning.
- **Submit-to-reveal answers**: choosing an answer does not reveal correctness. The correct answer and the plain-English explanation appear only after clicking **Submit answer**.
- **Quick interview (12 questions)** and full question bank (40 questions), filterable by category.
- **8 interactive JavaScript coding exercises** that execute in a temporary Web Worker and automatically check sample and edge cases. Includes count-the-E, remove-the-E, even-number sums, biggest-order lookup, filtering order objects, immutable map(), palindrome, and debugging an off-by-one loop.
- **Coach's guide** with behavioral questions and collapsed answer notes.
- **Results dashboard**, flagged questions, local progress, and Focus view for presenting.
- **Desktop and mobile layouts** with no third-party scripts.

The questions are **original practice questions**, not official LaunchCode evaluation or employer interview questions.

## Publish on GitHub Pages (browser-only method)

1. Download and unzip the project.
2. On GitHub, create a new **public** repository, such as `mat-interview-lab`.
3. In the repository, choose **Add file → Upload files**. Upload these files to the **root** of the repository, preserving the `assets` folder:
   ```text
   index.html
   styles.css
   app.js
   assets/favicon.svg
   README.md
   ```
4. Commit the uploaded files.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, then choose branch **main**, folder **/(root)**, and save.
7. GitHub will display the live website address after the deployment completes. It will usually be:
   `https://YOUR_GITHUB_USERNAME.github.io/mat-interview-lab/`

**Important:** Upload the *files inside* the folder, not a top-level folder wrapping `index.html`. The home page must be at the root of the repository for the simple configuration above.

The site works at a GitHub Pages project subpath because its linked files use relative paths (`./styles.css`, `./app.js`).

## Preview locally

- Open `index.html` in a modern desktop browser for the question bank and coaching pages.
- For consistent browser-worker behavior in the coding lab, using GitHub Pages or another local web server is recommended.
- If Node.js is installed, you can serve the site with `npx serve .` (may download a package) or use Python's built-in server: `python -m http.server 8000` then open `http://localhost:8000/`.

## Using the site together

1. Open **Overview → Start mock interview**.
2. Have Mat say his reasoning before selecting an answer.
3. Select the answer, then click **Submit answer** to reveal the explanation and coach follow-up.
4. Switch to **Code lab** and have him edit `index.js` in the browser editor. Click **Run & test** to see actual JavaScript output and test results. The example solution is hidden until after the first run.
5. End with the **Coach's guide** and **Results** sections.
6. Use **Focus view** in the top-right to hide the sidebar on screen-sharing calls.

## Data, security, and limitations

- Progress is saved in **that browser's localStorage only**. Mat and Joe won't automatically see the same score on different devices. No score data is uploaded by the site.
- The code editor runs submitted JavaScript in a temporary **browser Web Worker** with a 3-second limit. It is intended for trusted learning snippets. Avoid executing untrusted third-party code and never paste secrets into the editor. A Web Worker is *not* a hardened security sandbox for arbitrary hostile JavaScript.
- Coding exercises use fixed functional tests. They cannot replace peer review or a real technical interview.
- There is no authentication, shared session, remote screen-control feature, grading server, or database. Your video-meeting application controls screen sharing and any remote control permissions.
- GitHub Pages hosts static files; no server-side execution is required.
- **Reset all progress** clears this site's locally stored answers, code edits, and results after asking for confirmation.

## Customize questions

Edit the `QUESTIONS` array near the top of `app.js`. Each question includes:

- `category`, `type` (`tf`, `mcq`, or `predict`), and `difficulty`
- `prompt` and optional `code`
- `choices` for multiple choice, `correct` as a zero-based choice index (for true/false, 0 means True and 1 means False)
- `explanation` and `followUp`

Edit the `CHALLENGES` array for new coding problems, including starter code, example solution, and `tests`.

The `QUICK_IDS` array controls the 12-question quick set.

## Practice references

The content and coaching approach were informed by the user's practice goals and by LaunchCode's public interview-preparation materials:

- [LaunchCode Live Coding Playbook](https://education.launchcode.org/career-readiness/interviews/live-coding.html)
- [LaunchCode Mastering the Technical Interview](https://education.launchcode.org/liftoff/modules/career/tech-interview.html)

Mat's Interview Lab is **not sponsored by, endorsed by, or affiliated with LaunchCode**. Check the current interview rules for a specific employer before using AI or other outside tools.
