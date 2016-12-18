module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": "warn",
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    /* Advanced Rules*/
    "no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error",
    // Added by me
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'jsx-a11y/no-static-element-interactions': 1,
    "react/prefer-stateless-function": [1],
    "react/forbid-prop-types": [1]
  }
};
