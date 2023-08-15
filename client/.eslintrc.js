module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "react-native/react-native": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off"
    }
}
