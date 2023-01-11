/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor:{
        skin:{
          primary: 'var(--white-text)',
          muted: "var(--muted-text)"
        },
      },
      backgroundColor:{
        skin:{
          primary_bg: 'var(--blue)',
          light_dark:'var(--light-black-body)',
          dark: 'var(--black-body)',
        },
      },
      fontFamily:{
        Regular:["Raleway", "sans-serif"]
      }
    },
  },


  plugins: [],
}
