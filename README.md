## Azury's Style Guide

### ESLint Config

#### Setup

```bash
npm i @azury/eslint-config
```

#### Usage

```yml
extends: '@azury'
```

### TypeScript Config

#### Setup

```bash
npm i @azury/style
```

#### Usage

```json
{
  "extends": "@azury/style/typescript",
  "include": [
    "src/**/*.ts",
    "src/**/*.test.ts"
  ]
}
```

```json
{
  "extends": "@azury/style/typescript/react",
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
}
```
