import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [daisyui],
  theme: {
    colors: {
      'content-primary': '#fff',
      'content-secondary': '#a6a7ad',
      'card-background': '#ffe3ca',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FC728B',
          secondary: '#F4C395',
          accent: '#00bcda',
          neutral: '#33394F',
          'base-100': '#202433',
          info: '#0074de',
          success: '#00e437',
          warning: '#ff9300',
          error: '#ff728d',
        },
      },
    ],
  },
}
