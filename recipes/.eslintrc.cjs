module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'prettier' // Prettier должен быть последним
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier'],
  rules: {
    // Применение правил Prettier
    'prettier/prettier': [
      'error',
      {
        semi: false, // Убираем точки с запятой
        singleQuote: true, // Одинарные кавычки
        trailingComma: 'none', // Убираем запятые
        bracketSpacing: true, // Пробелы внутри фигурных скобок
        jsxBracketSameLine: false, // Закрывающая скобка на новой строке в JSX
        arrowParens: 'avoid' // Убираем скобки для однострочных стрелочных функций
      }
    ]
  }
}
