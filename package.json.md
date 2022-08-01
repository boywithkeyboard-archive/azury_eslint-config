## package.json

> **Warning**: No `keywords` are allowed, since most people won't come across the project via npm and it increases the package size by a few bytes.

> **Note**: If `private` is set to `true`, all subsequent options are omitted except those required for basic functionality.

1. `name`
2. `version`
4. `description`
5. `private`
6. `author`
7. `main`
8. `types`
9. `exports`
10. `scripts`
11. `license`
12. `repository`
13. `bugs`
14. `homepage`
15. `dependencies`
16. `devDependencies`
17. `peerDependencies`
18. `engines`
19. `type`

### Example

```json
{
  "name": "name",
  "version": "0.0.0",
  "description": "description",
  "author": "Author <user@email.com> (https://example.com)",
  "license": "Apache-2.0",
  "repository": "org/repo",
  "bugs": "https://github.com/org/repo/issues",
  "homepage": "https://github.com/org/repo#readme"
}
```

