module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: {
      "ts": "@typescript-eslint/parser",
      "<template>": "espree",
    },
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 2,
    'vue/multi-word-component-names': 'off',
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/explicit-function-return-type": 'off',
    "@typescript-eslint/strict-boolean-expressions": 0,
    "max-len": ["error", { "code": 120, "ignorePattern": 'd="([\\s\\S]*?)"'}]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
}
