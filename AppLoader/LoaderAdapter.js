export var LoaderType;
(function (LoaderType) {
    LoaderType["RequireJS"] = "requirejs";
    LoaderType["SystemJS"] = "SystemJS";
})(LoaderType || (LoaderType = {}));
export const getModule = (module) => (module && getModule(module.default)) || module;
const hot = () => (arg) => arg;
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
            define('react-hot-loader', () => ({ hot }));
            return {
                load(dependencies) {
                    return new Promise((resolve, reject) => requirejs(dependencies, (...modules) => resolve(modules.map(getModule)), reject));
                },
            };
        case LoaderType.SystemJS:
            window.System.register('react-hot-loader', [], $export => {
                $export({
                    default: { hot },
                    hot,
                });
                return {};
            });
            return {
                load(dependencies) {
                    return Promise.all(dependencies.map(dependency => window.System.import(dependency).then(getModule)));
                },
            };
        default:
            throw new ReferenceError('No compatible loader found, you should use requirejs or SystemJS');
    }
};
