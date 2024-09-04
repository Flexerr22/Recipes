import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'], // Добавлено ts и tsx
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin
    },
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
    },
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      prettier
    ]
  }
]
