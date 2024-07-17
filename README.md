# Font Awesome 6 icons for deno / Preact

**License** [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://fontawesome.com/](https://fontawesome.com/)

[See available icons here](https://react-icons.deno.dev/fa6)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.9",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/fa6": "jsr:@preact-icons/fa6@^1.0.10/mod.ts",
    "react-icons/fa6/": "jsr:@preact-icons/fa6@^1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib fa6

```ts
import { Fa42Group } from "jsr:preact-icons/fa6@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Fa42Group } from "react-icons/fa6"
```

## import a single icon, downloading just one icon

```ts
import { Fa42Group } from "react-icons/fa6/Fa42Group.ts"
```

or using default export

```ts
import Fa42Group from "react-icons/fa6/Fa42Group.ts"
```

