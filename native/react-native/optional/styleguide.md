# Style Guide

Choosing a style guide, linter, or code formatter can make your life much easier as a developer.

## linter

in the `EXAMPLE` directory, the AirBnB style guide is used with eslint. You can customize your exceptions in the .eslintrc file, found in the `EXAMPLE` main project directory. The AirBnB Javascript style guide is one of the most-used JS style guides on the web, and it has great documentation that justifies the rules that it enforces.

### Setting up the AirBnB style guide linter in VS Code

`$ npm install -dev eslint eslint-config-airbnb-base eslint-plugin-import`
`$ touch .eslintrc`
`$ open .eslintrc`

copy paste the following code into .eslintrc:

`module.exports = {
  "extends": "airbnb-base"
};`

* in VSCode: `ctrl + shift + x`
* search: `ESLint`
* Install ESLint
* Restart VS Code

### Setting up the AirBnB style guide linter in Atom

`$ npm install -dev eslint-config-airbnb eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import babel-eslint`

`$ touch .eslintrc`
`$ open .eslintrc`

copy / paste the following code into .eslintrc:

`{
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "rules": {
    "no-console": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}`

Install the Atom plugin linter-eslint

## formatter

A formatter will automatically perform changes on your code when you save or commit code. They're typically highly configurable and can be customized in a number of ways. A common code formatter with React Native projects is Prettier.js

### Setting up Prettier.js

* `$ npm install --save-dev --save-exact prettier`

(Prettier Documentation)[https://prettier.io/docs/en/install.html]
