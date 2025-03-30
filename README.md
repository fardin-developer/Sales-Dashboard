# 🚀 React + Vite + Tailwind  
A minimal setup for building React applications with Vite, featuring hot module replacement (HMR) and ESLint integration.

---

## 📦 Installation  
To get started, install dependencies using `pnpm`:  

```sh
pnpm i
```

## 🚀 Start Development Server  
Run the following command to start the development server with HMR:  

```sh
pnpm run dev
```

This will spin up a local server, typically at `http://localhost:5173/`, where you can see your app live with fast refresh.

---

## 🎨 Global Theme  
The global theme is defined inside `index.css`, where:  
- **Primary Color:** Used for buttons, highlights, and accents.  
- **Light Color:** Used for background and subtle elements.  

Feel free to customize these in `index.css` to match your design preferences.

---

## ✨ ESLint Configuration  
If you're developing a production-ready application, we recommend:  
- Using **TypeScript** for better type safety.  
- Enabling **type-aware lint rules** by integrating [`typescript-eslint`](https://typescript-eslint.io).  

For a TypeScript setup, check out the official [Vite + React TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

---

### Happy coding! 🚀🎉