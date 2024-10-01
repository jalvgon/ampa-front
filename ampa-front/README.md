
Creación de estructura del proyecto:

npx create-nx-workspace@latest ampa-front --preset=angular-monorepo 

√ Application name · ampa-admin
√ Which bundler would you like to use? · esbuild
√ Default stylesheet format · css
√ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · No
√ Test runner to use for end to end (E2E) tests · none
√ Set up CI with caching, distribution and test deflaking · skip
√ Would you like remote caching to make your build faster? · yes


npx nx g @nx/angular:app ampa-family --directory=apps/ampa-family --dry-run

√ Which bundler do you want to use to build the application? · esbuild
√ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) · false
√ What should be the project name and where should it be generated? · ampa-family @ apps/ampa-family

npx nx g @nx/angular:app app-family --directory=apps/app-family --dry-run


Creo las librearias:
pnpm nx g @nx/angular:library features --directory=libs/features --standalone
pnpm nx g @nx/angular:library shared --directory=libs/shared --standalone
pnpm nx g @nx/angular:library auth --directory=libs/auth --standalone

Crear componentes:
pnpm npx nx g @nx/angular:component navigation --directory=libs/shared/src/lib/shared/nav --standalone --export --skip-tests --dry-run 

--crear servicios
pnpm npx nx g @nx/angular:service navigation --directory=libs/shared/src/lib/shared/services --standalone --export --skip-tests --dry-run
