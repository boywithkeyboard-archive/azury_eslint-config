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
    'plugin:import/typescript'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 2,
    'import/no-unresolved': 2,
    'import/no-dynamic-require': 2,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/exports-last': 2,
    'import/no-self-import': 2,
    'import/no-deprecated': 2,
    'import/no-mutable-exports': 2,
    'import/no-duplicates': 2,
    'import/group-exports': 2,
    'import/order': [
      2,
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
          order: 'asc'
        }
      }
    ],
    'sort-imports': [
      2,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    semi: [
      2,
      'never'
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
    'unused-imports/no-unused-imports': 2,
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
