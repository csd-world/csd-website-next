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
    },
  },
  plugins: [],
}
