/// <reference types="systemjs" />
export declare enum LoaderType {
    RequireJS = "requirejs",
    SystemJS = "SystemJS"
}
export interface ILoader {
    load<T extends any[]>(dependencies: string[]): Promise<T>;
}
declare global {
    interface Window {
        System: SystemJSLoader.System;
    }
}
export declare const getModule: <T>(module: any) => T;
export declare const getLoader: (loaderType?: LoaderType | undefined) => ILoader;
