# 📓 Sleek Notes

A beautiful, premium, and minimalist To-Do List and Note-Taking application built with **React**, **Vite**, and **Tailwind CSS v4**.

![App Screenshot](./public/screenshot-app.png)
*(Note: Replace `./public/screenshot-app.png` with an actual full-screen screenshot of your app)*

---

## ✨ Features

- **Split-Screen UI**: A highly productive, dark-mode desktop layout dividing input and preview effortlessly.
- **Realistic Note Cards**: To-do items are rendered as physical notebook pages, complete with spiral binding rings, ruled paper lines, and custom typography.
- **Local Storage Persistence**: All your notes are saved immediately to your browser's local storage. They persist across page reloads!
- **Task Deletion**: Easily remove tasks when you're done with them via the intuitive red "Delete" button.
- **Fully Responsive Structure**: Designed with Flexbox to accommodate both single entries and wrapping grids of multiple notes side-by-side.

## 🛠️ Tech Stack

- **React 19**: Component-based UI rendering.
- **Vite**: Lightning-fast local development server and optimized build tool.
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development without ever leaving your components.

---

## 🎨 UI & Design Highlights

![Note Card Detail](./public/screenshot-card.png)
*(Note: Replace `./public/screenshot-card.png` with a close-up screenshot of the notebook card)*

1. **Dark Aesthetic**: The app features a pitch-black `bg-black` background with high-contrast white boundaries for sleek visibility.
2. **Notebook Effect**: We used advanced CSS techniques (`repeating-linear-gradient`, absolute positioning, and inset shadows) to design a realistic spiral notepad without relying on external image assets.
3. **SEO Optimized**: Fully loaded with Open Graph meta tags, Twitter cards, and a custom notebook emoji SVG favicon for optimal search and social sharing practices.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. Open the App
Visit the local server address provided in your terminal (usually `http://localhost:5173`) in your web browser.

---

## 📂 Project Structure

- `src/App.jsx`: Main layout and state management (local storage logic, adding/deleting tasks).
- `src/components/ToDoCard.jsx`: The custom physical notebook card UI component.
- `index.html`: Contains SEO configuration and the custom favicon.

## 📝 Development Notes

This project uses the new `@tailwindcss/vite` plugin for seamless **Tailwind CSS v4** integration. Ensure that `index.css` properly imports Tailwind using `@import "tailwindcss";`.
