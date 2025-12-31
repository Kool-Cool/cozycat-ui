
# CozyCat UI 🐱✨

**CozyCat UI** is a **cozy, anime-inspired React UI library** designed for developers who love **soft, friendly, and playful interfaces**.  
Built with **Next.js, React, and Tailwind CSS**, CozyCat UI provides **copy-pasteable components** with gentle animations, pastel colors, and a cat-themed aesthetic.

---

## 🌸 Features

- 🐾 **Cute and cozy design** – soft colors, rounded corners, playful animations  
- 💻 **React + Tailwind ready** – copy-pasteable components for your projects  
- 🎨 **Themeable** – switch between cat café, pastel anime, or night cozy themes  
- 📄 **Docs with live previews** – see and copy code instantly  
- ♿ **Accessible** – built on Radix UI primitives  

---

## 🛠️ Installation

Since CozyCat UI follows a **copy-paste model**, just copy the component you need from the repo:

```bash
# Copy the Button component
cp packages/ui/button.tsx your-project/components/
````

Or import components if you publish as a package later:

```tsx
import { Button } from "cozycat-ui"
```

---

## 🎨 Themes

CozyCat UI supports multiple cozy themes using CSS variables. Example:

```css
/* Cat Café Theme */
.cat-cafe {
  --background: #fff7f2;
  --foreground: #2b1a16;
  --primary: #ffb6b9;
  --radius: 12px;
}
```

Apply a theme:

```tsx
<body className="cat-cafe">
  <Button>Meow!</Button>
</body>
```

---

## 🐱 Components (v1.0)

* `Button` – cute buttons with gentle hover effects
* `Card` – soft, rounded content cards
* `Input` – friendly text inputs
* `Badge` – small pastel badges
* `Avatar` – cat-inspired avatar placeholders
* `Modal` – cozy modal windows
* `Tabs` – pastel tab navigation
* `Tooltip` – cute hover tooltips
* `Navbar` – soft navigation bar

Each component includes **copy buttons in the docs** for easy use.

---

## 📖 Usage Example

```tsx
import { Button } from "@/components/button"

export default function Home() {
  return (
    <main className="cat-cafe p-8 space-y-4">
      <h1 className="text-2xl font-bold">Welcome to CozyCat UI</h1>
      <Button>Click Me!</Button>
    </main>
  )
}
```

---

## 🚀 Roadmap

* Add more **cat & anime-themed components**
* Create a **theme switcher** for live previews
* Publish a **NPM package** for easier installation
* Add **animation presets** (floating stars, blinking cats)
* Community contributions: themes, components, icons

---

## ❤️ Contributing

Contributions are welcome! 🐾

* Fork the repo
* Create your feature branch
* Submit a pull request

---

## 📜 License

MIT License. See `LICENSE` for details.

---

> “Build interfaces that feel like a warm cup of tea and a purring cat.”
> CozyCat UI — gentle, playful, and full of charm 🐱✨

Daily Progress/Blog : https://www.notion.so/Building-on-Own-Component-Library-2da85ad742c580f7a3b9f614502258a1?source=copy_link

