module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      // Used to override main styles
      xxs: '1px',
      xs: '400px',
      xsm: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // '1.5xl': '1440px',
      '2xl': '1440px',
    },
    extend: {
      spacing: {
        18: '72px',
      },
      leading: {
        12: '48px',
      },
      listStyleType: {
        alpha: 'lower-alpha',
        roman: 'lower-roman',
      },
      transitionDuration: {
        DEFAULT: '300ms',
        1500: '1500ms',
      },
      borderColor: {
        DEFAULT: '#fb8500',
      },
      colors: {
        black: '#023047',
        grey: {
          700: '#03045e',
          500: '#023e8a',
          400: '#0077b6',
          300: '#0096c7',
          200: '#00b4d8',
          100: '#48cae4',
        },
      },
    },
    fontFamily: {
      sans: ["'Source Sans Pro'", 'sans-serif'],
    },
  },
}
