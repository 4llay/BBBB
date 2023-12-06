import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        body: ['Manrope']
      },
      colors: {
        'bgcolor': '#f4f4f4',
        'brickwall': '#c24832',
        'pink': '#ffc0cb',
        'cyan': '#add8e6',
      },
      backgroundImage: {
        'fundoPastel': "url('/fundoPastel.jpg')",
        'stylish': "url('/stylish.png')",
      },
      dropShadow: {
        '3xl': '0px 10px 5px rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
}
export default config
