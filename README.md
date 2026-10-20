# 1. Initial Setup

```bash
npx create-next-app@latest ui-kit-playground --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd ui-kit-playground

npm install

npx storybook@latest init

```

## 2. Implementing the component and story

```bash
- add src/components/Badge/Badge.tsx
- and add src/components/Badge/Badge.stories.tsx
```

## 3. Test

```bash
- npm run storybook
```

## 4. Packaging for local release or a package

- Creating the `src/index.ts` file to export all components
- Installing the build tool (tsup):

```bash
- npm i -D tsup
```

- Adding a build script to package.json:

```json
   "scripts": {
     "build:lib": "tsup src/index.ts --format esm,cjs --dts --clean"
   }

```

- run build

```bash
-  npm run build:lib
```

## Using the UI Kit in another project

add to package.json
```json
 "dependencies": {
    "ui-kit-playground": "git+http://**ui kit path**/ui-kit-playground",
  },
```

- Used Code

```tsx
import { Badge } from "@ui-kit-playground";

export default function Page() {
  return <Badge label="Mojtaba" variant="primary" />;
}
```

---

