# StudyStack
Know what to learn next. Know when you will finish.

Vibe Coding Competition 2026 | IMS Noida | Theme: Career, Skills & Personal Growth

## What it does
Pick a target role, tick the skills you already have, enter your weekly study hours, and get a readiness score plus a week-by-week plan. Every skill in the plan also shows **where to learn** (a free doc and a YouTube search), **how to learn** (a tip) and a **practice task**.

## Run it
Open `index.html` in any browser. No build step, no internet needed (except to open the learning links).

## How it works (data flow)
User acts -> state updates -> saved to localStorage -> screen redraws (`update()` and `render()` in `js/app.js`).

- `readiness = completed skills / total skills x 100`
- `missing = role skills not in the completed list`
- Weekly plan: add missing skills one by one; when the next skill would exceed weekly hours, start a new week.

## Files
`index.html` structure | `css/style.css` neubrutalism UI | `js/data.js` roles, skills, resources | `js/storage.js` localStorage | `js/planner.js` gap and plan logic | `js/app.js` state, events, rendering

## Add a role or skill
Add an entry in `js/data.js` using the `sk(id, name, category, hours, linkLabel, url, how, practice)` helper. IDs must be unique.

## Limitations
No login (data stays in one browser), no AI (fixed data and arithmetic), hours and resources are team estimates, not live market data.
