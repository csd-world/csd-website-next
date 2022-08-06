module.exports = {
  content: ['**/*.vue', '**/*.css', './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-lighter': 'var(--color-primary-lighter)',
        secondary: 'var(--color-secondary)',
        negative: 'var(--color-negative)',
        positive: 'var(--color-positive)',
        'primary-background': 'var(--background-primary)',
        'sec-background': 'var(--background-sec)',
        'primary-text': 'var(--color-text-primary)',
      },
      transitionProperty: {
        height: 'height',
      },
      borderRadius: {
        '1/2': '50%',
        '1/4': '25%',
      },
      padding: {
        '1/2': '50%',
        '1/4': '25%',
        '1/6': '16.667%',
        '1/8': '12.5%',
        '1/10': '10%',
        '1/12': '8.333%',
        full: '100%',
      },
      minWidth: {
        32: '8rem',
      },
    },
  },
  plugins: [],
}
