import { Route as rootRouteImport } from './routes/__root'
import { Route as MaisRouteImport } from './routes/mais'
import { Route as HabitosRouteImport } from './routes/habitos'
import { Route as CopaRouteImport } from './routes/copa'
import { Route as AcervoRouteImport } from './routes/acervo'
import { Route as IndexRouteImport } from './routes/index'

// Atualiza cada rota de arquivo com seu caminho final e com a rota raiz como pai.
const MaisRoute = MaisRouteImport.update({
  id: '/mais',
  path: '/mais',
  getParentRoute: () => rootRouteImport,
} as any)
const HabitosRoute = HabitosRouteImport.update({
  id: '/habitos',
  path: '/habitos',
  getParentRoute: () => rootRouteImport,
} as any)
const CopaRoute = CopaRouteImport.update({
  id: '/copa',
  path: '/copa',
  getParentRoute: () => rootRouteImport,
} as any)
const AcervoRoute = AcervoRouteImport.update({
  id: '/acervo',
  path: '/acervo',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

// Mapeamentos de tipos usados pelo router para navegar entre caminhos, ids e rotas.
export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/acervo': typeof AcervoRoute
  '/copa': typeof CopaRoute
  '/habitos': typeof HabitosRoute
  '/mais': typeof MaisRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/acervo': typeof AcervoRoute
  '/copa': typeof CopaRoute
  '/habitos': typeof HabitosRoute
  '/mais': typeof MaisRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/acervo': typeof AcervoRoute
  '/copa': typeof CopaRoute
  '/habitos': typeof HabitosRoute
  '/mais': typeof MaisRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/acervo' | '/copa' | '/habitos' | '/mais'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/acervo' | '/copa' | '/habitos' | '/mais'
  id: '__root__' | '/' | '/acervo' | '/copa' | '/habitos' | '/mais'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AcervoRoute: typeof AcervoRoute
  CopaRoute: typeof CopaRoute
  HabitosRoute: typeof HabitosRoute
  MaisRoute: typeof MaisRoute
}

// Registra os metadados de cada rota para o TanStack Router inferir tipos automaticamente.
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/mais': {
      id: '/mais'
      path: '/mais'
      fullPath: '/mais'
      preLoaderRoute: typeof MaisRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/habitos': {
      id: '/habitos'
      path: '/habitos'
      fullPath: '/habitos'
      preLoaderRoute: typeof HabitosRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/copa': {
      id: '/copa'
      path: '/copa'
      fullPath: '/copa'
      preLoaderRoute: typeof CopaRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/acervo': {
      id: '/acervo'
      path: '/acervo'
      fullPath: '/acervo'
      preLoaderRoute: typeof AcervoRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

// Reune as rotas filhas da raiz para montar a arvore final da aplicacao.
const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AcervoRoute: AcervoRoute,
  CopaRoute: CopaRoute,
  HabitosRoute: HabitosRoute,
  MaisRoute: MaisRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'

// Registra os tipos globais usados pelo TanStack Start durante SSR e hidratacao.
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
