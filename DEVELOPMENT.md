### Getting Started

1. First, you need to have the latest git, node 12 or greater installed. OSX, Windows and Linux should all be supported as build environments. This may differ from FiveM's supported environments.

2. Install yarn
`npm install --global yarn`

3. Fork this repo by using the "Fork" button on the upper-right
4. Check out your fork
```
git clone git@github.com:yournamehere/fivem-js.git
```
5. Install or Update all dependencies
```
yarn 
```
6. Get coding! If you've changed or added new functionality, update any relevant documentation. Ensure your work is committed within a feature branch.
7. Ensure the project has no linting errors and builds
```
yarn lint
yarn build
```

### Relevant Commands
1. `yarn` - install and link all packages
2. `yarn build` - builds using `tsc`
3. `yarn format` - autoformats with eslint --fix and prettier
4. `yarn lint` - checks for linting issues
5. `yarn docs` - builds documentation
