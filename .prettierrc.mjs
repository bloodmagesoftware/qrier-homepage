/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  semi: true,
  tabWidth: 2,
  quoteProps: "as-needed",
  singleQuote: false,
  printWidth: 160,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
