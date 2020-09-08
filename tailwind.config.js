module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js']
  },
  theme: {
    extend: {
      screens: {
        xl: '1280px',
        xxl: '1920px'
      },
      spacing: {
        '0.5': '0.125rem',
        '1.25': '0.313rem',
        '1.5': '0.375rem',
        '7.5': '1.875rem',
        '14': '3.5rem',
        '22': '5.5rem',
        '36': '8.5rem',
        '128': '32rem',
        '160': '40rem'
      }
    }
  },
  variants: ['responsive', 'hover', 'focus', 'active', 'disabled'],
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
};
