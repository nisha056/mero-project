/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "custom-content": "calc(100vh - 100px - 28px)",
      },
    },
  },
  plugins: [],
};
