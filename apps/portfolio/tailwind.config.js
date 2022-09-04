const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: {
          light: colors.gray,
          dark: colors.gray,
        },
        accent: {
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },
        text: {
          light: 'var(--color-text-light)',
          dark: 'var(--color-text-dark)',
        },
        base: {
          'light-a': 'var(--color-base-light-a)',
          'dark-a': 'var(--color-base-dark-a)',
          'light-b': 'var(--color-base-light-b)',
          'dark-b': 'var(--color-base-dark-b)',
        },
      }),
    },
  },
  plugins: [],
};
