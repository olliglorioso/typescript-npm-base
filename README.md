# typescript-npm-base

This is a repository, which can be applied as a base for a new npm module project. Works for other Node.js projects as well. You probably need to do some modifications depending on your needs.

## What is included?
- Full development environment with Remote Containers -extension & .devcontainer-folder.
  - Node.js 18-bullseye & TypeScript
  - [Check extensions and features](https://github.com/olliglorioso/typescript-npm-base/blob/master/.devcontainer/devcontainer.json)
- Eslint configuration
- Prettier configuration
- Jest configuration
- Github Actions configuration (on push & version change in GitHub. skip on-push with "[skip ci]" in your commit, f.e. "New update [skip ci]")
- TypeScript configuration
- Some scripts in package.json
