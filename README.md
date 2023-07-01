# Portal

The Portal component is a declarative way to use `createPortal` in React, which allows you to render a component into a DOM node that exists outside the DOM hierarchy of the parent component.

## Features

- Next.js Support: The Portal component works with Next.js `appDir` and React Server Component out of the box. No rehydration issues.

## Installation

```sh
npm install @rational/portal
pnpm add @rational/portal
yarn add @rational/portal
```

## Usage

```jsx
import { Portal } from '@rational/portal';

<Portal>
  <div>Portal content</div>
</Portal>;
```
