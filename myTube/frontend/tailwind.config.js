/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: { 
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(90deg)',
        'gradient-linear': 'linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(66,66,71,0.5) 15%, rgba(255,255,255,0) 100%)',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      }),
      backgroundColor: {
        'gradient-from-black': 'rgba(3,3,3,1)',
        'gradient-to-gray': 'rgba(66,66,71,1)',
        'gradient-to-blue': 'rgba(0,212,255,0)',
      },
      backgroundOpacity: {
        '0': '0',
        '16': '0.16',
        '100': '1',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

