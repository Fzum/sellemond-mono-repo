// INFO: This is a global Tailwind CSS preset that can be shared / imported in all other Tailwind projects
// e.g. needed to hava scalable solution in "add tailwind to storybook in shared libs" (otherwise tailwind.config)

module.exports = {
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
