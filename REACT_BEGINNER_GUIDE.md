# 🚀 React Beginner Guide — How Everything Works

## Hey! Read This First Before Touching Any Code!

If you're confused about React projects after working with simple HTML/CSS/JS — **that's totally normal!**
This guide will clear everything up. Read it top to bottom, and React will click.

---

## 📁 The Old Way (Simple HTML/CSS/JS)

Before React, you had 3 files:
```
my-website/
├── index.html    ← The structure (skeleton)
├── style.css     ← The looks (skin & clothes)
└── script.js     ← The behavior (muscles)
```

**How they connected:**
- `index.html` links to `style.css` using `<link>` tag
- `index.html` links to `script.js` using `<script>` tag
- You open `index.html` in the browser — DONE!

**Simple, right?** But as your website grows (100+ pages), this becomes a NIGHTMARE.
You end up with one HUGE HTML file, one HUGE CSS file, one HUGE JS file. 😵

---

## 📁 The React Way (Component-Based)

React solves this by breaking your UI into **small, reusable pieces called COMPONENTS**.

Think of it like LEGO blocks:
- A Navbar is one LEGO block
- A Button is another LEGO block  
- A UserCard is another LEGO block
- You snap them together to build a page!

Here's what a React project looks like:

```
my-react-app/
├── node_modules/       ← 📦 All downloaded libraries (DON'T TOUCH!)
├── public/             ← 📂 Static files (images, icons)
├── src/                ← 📂 YOUR CODE LIVES HERE!
│   ├── components/     ← 📂 Reusable LEGO blocks
│   ├── pages/          ← 📂 Full pages (for routing)
│   ├── context/        ← 📂 Shared data (Context API)
│   ├── assets/         ← 📂 Images used in components
│   ├── App.jsx         ← 🏠 The MAIN component (your app starts here)
│   ├── App.css         ← 🎨 Styles for App component
│   ├── main.jsx        ← 🚪 The ENTRY POINT (connects React to HTML)
│   └── index.css       ← 🎨 Global styles for the whole app
├── index.html          ← 📄 The ONE HTML file (has a <div id="root">)
├── package.json        ← 📋 Project info + list of dependencies
├── vite.config.js      ← ⚙️ Vite configuration
└── package-lock.json   ← 🔒 Exact versions of dependencies (DON'T TOUCH!)
```

---

## 🔗 How Everything Connects (THE FLOW)

This is THE MOST important thing to understand:

```
index.html  →  main.jsx  →  App.jsx  →  Your Components
   (1)           (2)          (3)           (4)
```

### Step 1: `index.html` (The Shell)
```html
<body>
  <div id="root"></div>        ← React renders EVERYTHING inside this div!
  <script type="module" src="/src/main.jsx"></script>  ← Loads main.jsx
</body>
```
- This is the ONLY HTML file in the entire project
- It has ONE empty div with id="root"
- React will fill this div with your entire app!

### Step 2: `main.jsx` (The Entry Point)
```jsx
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
- This file FINDS that `<div id="root">` from index.html
- It MOUNTS (attaches) your `<App />` component into it
- Think of it as the "plug" that connects React to the HTML page

### Step 3: `App.jsx` (The Main Component)
```jsx
function App() {
  return (
    <div>
      <Navbar />
      <UserList />
      <Footer />
    </div>
  )
}
```
- This is your MAIN component — the boss that holds everything together
- It imports and arranges all your other components
- Think of it as the "table of contents" of your app

### Step 4: Your Components (The LEGO Blocks)
```jsx
function Navbar() {
  return <nav>I am the Navbar!</nav>
}
```
- Each component is a JavaScript FUNCTION that returns HTML-like code (JSX)
- Components are reusable — use `<Navbar />` anywhere, anytime!

---

## 🤔 What is JSX?

**JSX = JavaScript + XML (HTML)**

It looks like HTML but it's actually JavaScript! React converts it behind the scenes.

```jsx
// This is JSX (what you write):
const element = <h1>Hello, {name}!</h1>

// React converts it to this (behind the scenes):
const element = React.createElement('h1', null, 'Hello, ' + name + '!')
```

### JSX Rules:
1. **Use `className` instead of `class`** → `<div className="box">` (because `class` is reserved in JS)
2. **Use `{}` for JavaScript expressions** → `<h1>{2 + 2}</h1>` shows "4"
3. **Must return ONE parent element** → Wrap in `<div>` or `<>...</>` (fragment)
4. **Close all tags** → `<img />` not `<img>`, `<br />` not `<br>`
5. **Use `camelCase` for attributes** → `onClick`, `onChange`, `htmlFor`

---

## 🧩 What is a Component?

A component is just a **JavaScript function that returns JSX (HTML-like code)**.

```jsx
// This is a component! That's it! Just a function!
function Greeting() {
  return <h1>Hello World!</h1>
}

// Use it like an HTML tag:
<Greeting />
```

### Rules for Components:
1. **Name MUST start with a Capital letter** → `UserCard`, not `userCard`
2. **Must return JSX** → The HTML-like code
3. **One component per file** (best practice)
4. **Export it** so other files can use it → `export default Greeting`

---

## 📦 What is `props`?

Props = Properties. It's how you **pass data from a Parent component to a Child component**.

Think of it like a function argument:

```jsx
// Parent sends data:
<ChildComponent name="Rahul" age={20} />

// Child receives data:
function ChildComponent(props) {
  return <p>{props.name} is {props.age} years old</p>
}
```

**Props are READ-ONLY!** The child can't change them.

---

## 🔄 What is `state` (useState)?

State = Data that can CHANGE over time.

```jsx
const [count, setCount] = useState(0)
//      ↑         ↑                ↑
//   current    function to     initial
//   value      update it       value
```

When you call `setCount(5)`, React automatically RE-RENDERS (repaints) the component!

---

## 📦 What is npm, package.json, node_modules?

| Term | What it is |
|------|-----------|
| **npm** | Node Package Manager — a tool to download libraries (like an app store for code) |
| **package.json** | A "shopping list" of all libraries your project needs |
| **node_modules/** | The actual downloaded libraries (auto-generated, NEVER edit!) |
| **`npm install`** | Downloads everything listed in package.json |
| **`npm run dev`** | Starts your app in development mode (opens in browser) |

---

## ⚡ What is Vite?

Vite (pronounced "veet", French for "fast") is a **build tool**.

- It runs a **dev server** (localhost:5173) so you can see your app in the browser
- It **hot reloads** — when you save a file, the browser updates INSTANTLY (no refresh!)
- It **bundles** your code for production

You DON'T need to understand Vite deeply — just know it's the engine running your app.

---

## 📖 FILE READING ORDER (For Each Set)

### For ANY set, read files in this order:
1. **`index.html`** — See the `<div id="root">` (the shell)
2. **`main.jsx`** — See how React attaches to that div
3. **`App.jsx`** — See the main component (the boss)
4. **`components/*.jsx`** — See individual LEGO blocks
5. **`App.css`** — See component-specific styles
6. **`index.css`** — See global styles

---

## 🏃 How to Run Any Set

```bash
# 1. Open terminal in the set folder (e.g., set-1)
cd set-1

# 2. Install dependencies (only needed ONCE)
npm install

# 3. Start the dev server
npm run dev

# 4. Open browser at http://localhost:5173
```

---

## 🎯 Quick Summary

| Old Way (HTML/CSS/JS) | React Way |
|----------------------|-----------|
| Multiple HTML pages | ONE HTML page, multiple components |
| Link CSS with `<link>` tag | Import CSS with `import './App.css'` |
| Link JS with `<script>` tag | Import components with `import App from './App'` |
| `class="box"` | `className="box"` |
| `document.getElementById()` | `useState()` + JSX |
| Manual DOM updates | React auto-updates when state changes |

**That's it! You now understand how React works! 🎉**

Now go read the code in each set — every file has detailed comments explaining everything!
