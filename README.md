## azury's Style Guide

### ESLint Config

#### Setup

```bash
npm i -D @azury/eslint-config
```

#### Usage

```yml
extends: '@azury'
```

### TypeScript Config

#### Setup

```bash
npm i -D @azury/style
```

#### Usage

```json
{
  "extends": "./node_modules/@azury/style/typescript/tsconfig.json",
  "include": [
    "src/**/*.ts",
    "src/**/*.test.ts"
  ]
}
```

```json
{
  "extends": "./node_modules/@azury/style/typescript/react/tsconfig.json",
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
}
```
