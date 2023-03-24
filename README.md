# MERN (Apollo GraphQL) Server Template

Monorepo for MERN (MongoDB, Express, React, Node) stack with Apollo GraphQL server. It uses Tailwind CSS for styling, which can be integrated with React component libraries such as MUI.

[Server](./server/README.md) | [Client](./client/README.md)

## Commits

To help ensure great commit messages for this project, consider using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary). Here's [an extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) to help you do that.

## Branching

`main` should only be for `Initial commit` and then not be used again until you are ready to deploy **something.** You should create a `dev` branch and use that for all development. Then, you can create feature branches off of `dev` and merge them back into `dev` when they are ready.

You could even do: `dev-server` and `dev-client` if you want to separate the two. From there, you might have: `dev-server-graphQL-type-defs` and `dev-server-graphQL-resolvers` and so on.

Delete branches after they are merged. You can always create a new branch if you need to. You should probably not have more than 3-4 branches at any 1️⃣ time. Use `git branch` to confirm.

### Protect ~~This 🏠~~ Your `main` Branch

Here's [a guide](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) to do that.

It should be protected from force pushes and deletions. It should also require at least one review before merging.

## Code Quality

It might be good time to have [this](https://github.com/ryanmcdermott/clean-code-javascript) open and see how much of this you can apply.

## Getting Started

You probably want to work on `server` and `client` separately, and then you can start them together with `npm run dev` from the root for development.

## Questions❔

Ask sooner rather than later!
