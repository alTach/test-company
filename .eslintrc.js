module.exports = {
  root: true,
  "ignorePatterns": ["index.html"],
  overrides: [
    {
      files: ['*.ts'],
      // More information see https://www.npmjs.com/package/@typescript-eslint/parser
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: [
        'plugin:@angular-eslint/recommended',

        // Стайл гайд AirBnB
        'airbnb-typescript/base',

        // Настройки для Prettier (должна быть в самом низу)
        'prettier',
        'plugin:prettier/recommended',
      ],
      plugins: ['unused-imports'],
      rules: {
        // // Кастомные правила
        // 'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['off', 'always', { exceptAfterOverload: false }],
        'no-plusplus': 'off',
        'no-continue': 'off',
        'max-len': [
          'error',
          {
            code: 120,
            ignoreUrls: true,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
            ignoreTrailingComments: true,
            ignoreTemplateLiterals: true,
            // asdasda: '.+?\`' // Строка в которой встречается `
          },
        ],
        // "arrow-parens": ["error", "as-needed"],
        // "@angular-eslint/no-output-native": "off", // выключить
        // '@typescript-eslint/unbound-method': [
        //   'error'`,
        //   {
        //     ignoreStatic: true,
        //   },
        // ],
        // "unused-imports/no-unused-imports": "error",
      },
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }],
        '@angular-eslint/template/no-negated-async': 'off', // включить что бы запретить использовать отрицание в async
      },
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
    {
      files: ['*.js'],
      parserOptions: {
        ecmaVersion: 2017,
      },
      env: {
        es6: true,
      },
    },
  ],
};
