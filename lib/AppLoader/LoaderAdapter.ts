export enum LoaderType {
  RequireJS = 'requirejs',
  SystemJS = 'SystemJS',
}

export interface ILoader {
  load<T extends any[]>(dependencies: string[]): Promise<T>
}

declare global {
  // tslint:disable-next-line interface-name
  interface Window {
    System: SystemJSLoader.System
  }
}

export const getModule = (module: any): any =>
  (module && getModule(module.default)) || module

export const getLoader = (loaderType?: LoaderType): ILoader => {
  if (!loaderType) {
    // tslint:disable-next-line strict-type-predicates
    if (typeof requirejs === 'function') {
      loaderType = LoaderType.RequireJS
    }
    // tslint:disable-next-line strict-type-predicates
    else if (window.System && typeof window.System.import === 'function') {
      loaderType = LoaderType.SystemJS
    }
  }

  switch (loaderType) {
    case LoaderType.RequireJS:
      return {
        load<T extends any[]>(dependencies: string[]) {
          return new Promise<T>((resolve, reject) =>
            requirejs(
              dependencies,
              (...modules: any) => resolve(modules.map(getModule)),
              reject,
            ),
          )
        },
      }
    case LoaderType.SystemJS:
      return {
        load<T extends any[]>(dependencies: string[]) {
          return Promise.all(
            dependencies.map(dependency =>
              window.System.import(dependency).then(getModule),
            ),
          ) as Promise<T>
        },
      }
    default:
      throw new ReferenceError(
        'No compatible loader found, you should use requirejs or SystemJS',
      )
  }
}
