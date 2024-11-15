/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        backgroundImage: {
            'custom-gradient': 'linear-gradient(120deg, hsla(0, 0%, 100%, 0.12), hsla(0, 0%, 100%, 0.01))',
          },
          boxShadow: {
            'blue-bottom': '0px 10px 20px rgba(0, 0, 255, 0.6)',
          },
    },
    fontFamily: {
        SharpGrotesk: ["SharpGrotesk", "sans-serif"],
      
      },
  },
  plugins: [],
}

