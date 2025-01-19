# Installed Nuxt Packages

This document provides an overview of the Nuxt packages installed in your project, as defined in the `nuxt.config.ts` and `package.json` files.

## Core Nuxt Packages

### `nuxt`
- **Version:** ^3.15.2
- **Description:** The core Nuxt framework for building Vue.js applications.

## Modules

### `@nuxtjs/tailwindcss`
- **Version:** ^6.13.1
- **Description:** Integrates Tailwind CSS with Nuxt for utility-first CSS styling.
- **Configuration:**
  ```typescript
  tailwindcss: {
    exposeConfig: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ```

### `nuxt-gtag`
- **Version:** ^3.0.2
- **Description:** Adds Google Analytics tracking to your Nuxt application.
- **Configuration:**
  ```typescript
  gtag: {
    id: 'G-XXXXXXXXXX',
  },
  ```

### `@nuxt/content`
- **Version:** ^3.0.0
- **Description:** Provides a content management system for Nuxt applications, allowing you to write content in Markdown, JSON, YAML, and CSV files.

### `nuxt-file-storage`
- **Version:** ^0.2.9
- **Description:** Provides file storage capabilities for Nuxt applications.
- **Configuration:**
  ```typescript
  fileStorage: {
    mount: process.env.STORAGE_PATH || '/_files',
  },
  ```

### `@nuxt/eslint`
- **Version:** ^0.7.5
- **Description:** Integrates ESLint with Nuxt for linting JavaScript and TypeScript code.

### `@pinia/nuxt`
- **Version:** ^0.9.0
- **Description:** Integrates Pinia, a state management library, with Nuxt.
- **Configuration:**
  ```typescript
  pinia: {
    storesDirs: ['./stores/**'],
  },
  ```

### `@nuxtjs/i18n`
- **Version:** ^9.1.1
- **Description:** Provides internationalization (i18n) support for Nuxt applications.
- **Configuration:**
  ```typescript
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        language: "en-US",
        name: "English",
        dir: "ltr",
        file: "en-US.json",
      },
      {
        code: "uk",
        iso: "uk-UA",
        language: "uk-UA",
        name: "Ukrainian",
        dir: "ltr",
        file: "uk-UA.json",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts",
    lazy: false,
    langDir: "lang",
    baseUrl: process.env.BASE_URL,
  },
  ```

### `@nuxtjs/color-mode`
- **Version:** ^3.5.2
- **Description:** Adds color mode (dark/light) support to Nuxt applications.
- **Configuration:**
  ```typescript
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  ```

### `@nuxt/icon`
- **Version:** ^1.10.3
- **Description:** Provides a collection of icons for Nuxt applications.

### `@nuxtjs/seo`
- **Version:** ^2.0.3
- **Description:** Adds SEO utilities to Nuxt applications.
- **Configuration:**
  ```typescript
  seo: {
    enabled: true,
  },
  ```

### `@sidebase/nuxt-auth`
- **Version:** ^0.10.0
- **Description:** Adds authentication support to Nuxt applications.

### `nuxt-time`
- **Version:** ^1.0.3
- **Description:** Provides time-related utilities for Nuxt applications.

### `@nuxt/fonts`
- **Version:** ^0.10.3
- **Description:** Adds font management capabilities to Nuxt applications.
- **Configuration:**
  ```typescript
  fonts: {
    assets: {
      prefix: '/fonts/'
    },
    experimental: {
      processCSSVariables: true
    }
  },
  ```

### `nuxt-security`
- **Version:** ^2.1.5
- **Description:** Adds security features to Nuxt applications.

## Development Dependencies

### `@nuxtjs/ngrok`
- **Version:** ^3.0.1
- **Description:** Provides ngrok integration for exposing local servers to the internet.

### `drizzle-kit`
- **Version:** ^0.30.2
- **Description:** Provides tools for working with the Drizzle ORM.

### `eslint`
- **Version:** ^9.18.0
- **Description:** A linter for identifying and reporting on patterns in JavaScript.

### `prettier`
- **Version:** ^3.4.2
- **Description:** A code formatter for maintaining consistent code style.

### `tsx`
- **Version:** ^4.19.2
- **Description:** A TypeScript execution engine for Node.js.

### `typescript`
- **Version:** ^5.7.3
- **Description:** A superset of JavaScript that adds static types.

## Other Dependencies

### `@libsql/client`
- **Version:** ^0.14.0
- **Description:** A client for interacting with the LibSQL database.

### `dotenv`
- **Version:** ^16.4.7
- **Description:** Loads environment variables from a `.env` file into `process.env`.

### `drizzle-orm`
- **Version:** ^0.38.4
- **Description:** An ORM for working with SQL databases in TypeScript.

### `html-validator`
- **Version:** ^6.0.1
- **Description:** A tool for validating HTML.

### `next-auth`
- **Version:** ~4.21.1
- **Description:** Authentication for Next.js applications, used here with Nuxt.

### `pinia`
- **Version:** ^2.3.0
- **Description:** A state management library for Vue.js.

### `vue`
- **Version:** latest
- **Description:** The progressive JavaScript framework used by Nuxt.

### `vue-router`
- **Version:** latest
- **Description:** The official router for Vue.js.

This document provides a high-level overview of the packages installed in your Nuxt project. For more detailed information, refer to the official documentation of each package.