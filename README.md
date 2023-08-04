# Typescript demo
This repository is a part of my journey in learning TypeScript. My goal is to understand how to set up a project with essential components such as a testing library, linting, and a code formatter.


## How to start
Install node packages

```
npm install
```

Transpile the typescript file index.ts

```
npm run transpile
```

Run the index.js file
```
node dist/index.js
```


## Project Features

### Testing with Jest
Run in the console
```
jest
```
or if you use Visual Studio Code you can also use the package [vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest).


### Linting ESLint
Run in the console

```
npx eslint src
```

### Code formatting with prettier

It can be manually triggered with the command

```
npm run prettier-format
```

or using a file watcher

```
npm start
```

## Sources and inspiration

- https://www.testim.io/blog/typescript-unit-testing-101/
- https://khalilstemmler.com/blogs/tooling/prettier/
