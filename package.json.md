## package.json

> **Warning**: No `keywords` are allowed, since most people won't come across the project via npm and it increases the package size by a few bytes.

> **Note**: If `private` is set to `true`, all subsequent options are omitted except those required for basic functionality.

1. `name`
2. `version`
4. `description`
5. `private`
6. `author`
9. `exports`
10. `types`
11. `scripts`
12. `license`
13. `repository`
14. `bugs`
15. `homepage`
16. `dependencies`
17. `devDependencies`
18. `peerDependencies`
19. `engines`
20. `type`

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

