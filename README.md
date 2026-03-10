# GoalHub ![Status](https://img.shields.io/badge/status-active-brightgreen)

A lightweight, browser-based goal tracker that helps you set, manage, and achieve your personal goals — no account or backend required.

<br />

## 🌐 Live Demo

[ https://chesteralejandro.github.io/fe-goalhub](https://chesteralejandro.github.io/fe-goalhub)

## ✨ Features

- **Add goals** via text input (submit button or `Enter` key)
- **Mark goals as achieved** with a single click (toggle back to in-progress anytime)
- **Dismiss goals** with a smooth slide-out animation
- **Filter goals** by status: All, Achieved, or In Progress
- **Animated UI** powered by [Animate.css](https://animate.style/)
- **Fully client-side** — no server, no login, no dependencies to install

## ⚙️ Usage

| Action           | How                                                             |
| ---------------- | --------------------------------------------------------------- |
| Add a goal       | Type in the input field and press **Ente**r or click **Submit** |
| Mark as achieved | Click the **Achieved** button on any goal card                  |
| Undo achieved    | Click **Achieved** again to toggle back to In Progress          |
| Remove a goal    | Click the **Dismiss** button — it animates out and is removed   |
| Filter goals     | Use the dropdown to show All / Achieved / In Progress           |

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, CSS nesting, responsive layout
- **Vanilla JavaScript** — DOM manipulation, Web Animations API
- **[Google Fonts](https://fonts.google.com/)** — Lato & Tourney typefaces
- **[Animate.css](https://animate.style/)** — entrance and interaction animations

## 📂 Project Structure

```
goalhub/
├── assets/
│   └── icons/
│       └── favicon.png
├── css/
│   └── style.css        # All styles (uses CSS nesting & custom properties)
├── js/
│   └── main.js          # App logic (vanilla JS, no frameworks)
└── index.html           # Entry point
```
