
# LearnLegal Easy — Frontend

> Simplifying legal information using AI — search less, understand more.

A modern, AI-powered frontend built with **React**, **TypeScript**, and **Vite**, designed to make complex legal terms and processes easy to understand. This SaaS-driven platform offers an intuitive user interface with fast performance and clean code practices.

---

## 🚀 Features

- ✨ Clean, responsive UI with TailwindCSS and Shadcn UI library
- ⚛️ Built with React + TypeScript
- ⚡️ Fast development powered by Vite
- 🎯 AI-powered search and explain interface
- 🌙 Light/Dark mode toggle
- 🔍 ESLint + Type Checking with custom configuration

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/learnlegal-easy.git
cd learnlegal-easy
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🧱 Folder Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📦 Scripts

| Command           | Description               |
| ---------------- | ------------------------- |
| `npm run dev`     | Run development server    |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run lint`    | Run ESLint checks         |

---

## 🧠 Tech Stack

- **React** with **TypeScript**
- **TailwindCSS**
- **Redux Toolkit** for state management
- **ESLint** for linting
- **Vite** for bundling
- **React Router** for routing
- **Shadcn UI** for accessible, pre-styled components

---

## 🧹 ESLint Configuration

This project includes a custom ESLint setup with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

```ts
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

To enable type-aware rules:

```ts
extends: [
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
],
```

Also consider:

- [`eslint-plugin-react-x`](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [`eslint-plugin-react-dom`](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👨‍💻 Author

**Sumit Adhikari**  
[LinkedIn](https://www.linkedin.com/in/Sad2004) · [Instagram](https://instagram.com/Sonic_blizard)

---

## 🤝 Contributing

Pull requests are welcome! If you’d like to contribute, please fork the repo and submit a PR.  
Let’s build something awesome together 💼✨

---
```

