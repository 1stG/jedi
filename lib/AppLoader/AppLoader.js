import React from 'react';
import { getLoader } from './LoaderAdapter';
export class AppLoader extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    async componentDidMount() {
        const { appName, loaderType } = this.props;
        const loader = getLoader(loaderType);
        const [App] = await loader.load([
            appName.startsWith('/') ? appName : `/${appName}.js`,
        ]);
        this.setState({ App });
    }
    render() {
        const { props: { loading }, state: { App }, } = this;
        if (!App) {
            return loading || 'loading...';
        }
        const { props } = this.props;
        return React.createElement(App, Object.assign({}, props));
    }
}
