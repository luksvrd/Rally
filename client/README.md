# MERN (Apollo GraphQL) Client Template

## 🔧 Configurations

- `.gitignore` - Git ignore file that uses standard Node.js ignores. It also ignores `-lock.json` files, which you **might** need in **some** instances for deployment. Generally, they should be ignored 🙈 b/c they just clutter up your repo.
- `.gitattributes` - It ensures that files are checked out with the correct line endings (Windows vs. Mac/Linux), especially our JS related files.
- `.eslintignore` - copy of ☝️ `.gitignore` file. This is used by ESLint to ignore files.
- `.prettierignore` - copy of ☝️ `.gitignore` file. This is used by Prettier to ignore files.
- ESLint (Standard) with Prettier
- `vite.config.js` - Allows for using `@` as an alias for `src/` directory. Use this if you are dealing with a lot of `../../` stuff on your `import`s. This is a Vite specific configuration file.

## 🏗️ Directory Structure and Starter Codes

You **can and should update the starting code** to customize it for your project. Add/remove files as needed. For instance, if you are using a 3rd party API, you might want to add a `services` directory to hold your API calls, or just an `api.js` file.

The example code is just to give you some clue on how to think in React and to get you started with some Tailwind styles, as Tailwind totally strips away any/all default CSS (by design). You should be adding your own styles and components as you go. Projects should look unique and not like a copy/paste of this template.

### General Tips

- `components` - If it feels like it should be a component, it probably should be. It's better to have a few too many components than too few. Favor modularity over bloat - especially when working as a team.
- `layouts` - This contains a default page layout component that uses React Router's `Outlet` component to render the current page. You can add more layouts here if you need to, but you probably won't need to.
- `pages/index.js` - Named exports for all pages. As you add more pages here, import them in `app.jsx` and list them out in the `children` array for `router`. Pages are 'full, one-off pages' and are not meant to be reused. If you find yourself reusing a page, it should probably be a component (or split into smaller components).
- `utils.js` - It exports out a `decodeUserFromToken` function. Add additional utilities here as needed. Utility functions are a great way to DRY up your code and keep things organized.

## Prop Types

> PropTypes aren’t commonly used in modern React. Use TypeScript for static type checking.

As TS is not an option for us, our linting will enforce the use of PropTypes. This is a good thing as it will help us catch bugs early on. It will also help us document our code. It's a gateway drug 💊 to TS.

## 🚀 Getting Started

`npm run dev` - Starts the development server.

---

- [Apollo Client](https://www.apollographql.com/docs/react#recommended-docs)
