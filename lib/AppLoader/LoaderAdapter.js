export var LoaderType;
(function (LoaderType) {
    LoaderType["RequireJS"] = "requirejs";
    LoaderType["SystemJS"] = "SystemJS";
})(LoaderType || (LoaderType = {}));
export const getModule = (module) => (module && getModule(module.default)) || module;
export const getLoader = (loaderType) => {
    if (!loaderType) {
        // tslint:disable-next-line strict-type-predicates
        if (typeof requirejs === 'function') {
            loaderType = LoaderType.RequireJS;
        }
        // tslint:disable-next-line strict-type-predicates
        else if (window.System && typeof window.System.import === 'function') {
            loaderType = LoaderType.SystemJS;
        }
    }
    switch (loaderType) {
        case LoaderType.RequireJS:
            return {
                load(dependencies) {
                    return new Promise((resolve, reject) => requirejs(dependencies, (...modules) => resolve(modules.map(getModule)), reject));
                },
            };
        case LoaderType.SystemJS:
            return {
                load(dependencies) {
                    return Promise.all(dependencies.map(dependency => window.System.import(dependency).then(getModule)));
                },
            };
        default:
            throw new ReferenceError('No compatible loader found, you should use requirejs or SystemJS');
    }
};
