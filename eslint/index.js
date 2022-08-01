module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unused-imports'
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 2,
    'import/no-unresolved': 2,
    'import/newline-after-import': 2,
    'import/no-commonjs': 2,
    'import/no-dynamic-require': 2,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/exports-last': 2,
    'import/no-self-import': 2,
    semi: [
      2,
      'never'
    ],
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        alphabetize: {
          'order': 'asc'
        }
      }
    ],
    'import/no-anonymous-default-export': [
      2,
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false
      }
    ],
    'import/newline-after-import': [
      2,
      {
        count: 1
      }
    ],
    'import/no-unused-modules': [
      1,
      {
        unusedExports: true
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      1,
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}
