# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)


==================

> npx create-turbo@latest barba-brutal-x 
    - yarn
    - add frontend - deleted node_modules - deleted next - deleted package-lock.json

> yarn 
> npm i -g @nestjs/cli 
> nest new backend

* prisma
> yarn add prisma -D 
> npx prisma init --datasource-provider sqlite 
> npx prisma migrate dev
> yarn add @prisma/client

* auth
> nest g mo auth
> cd src/auth
> nest g co auth --flat --no-spec
> -
> nest g --help
> nest g pr usuario.repositorio --flat --no-spec

* db
> nest g mo db
> cd src/db
> nest g s prisma --flat --no-spec

* packages
 - packages/
> npm init -y -> criará um pakage.json em ./core
> yarn
> yarn build
> yarn run dev
> yarn build

* core
> yarn add tsup

* backend
> yarn add bcrypt
> yarn add -D @types/bcrypt
> yarn add jsonwebtoken
> yarn add -D @types/jsonwebtoken

* src/auth
> nest g pr bcrypt.provider --flat --no-spec

* frontend
> yarn add js-cookie
> yarn add -D @types/js-cookie
> yarn add jwt-decode
> yarn add -D @types/jwt-decode