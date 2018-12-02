import React from 'react';
import { LoaderType } from './LoaderAdapter';
export interface IAppLoaderProps {
    appName: string;
    loaderType?: LoaderType;
    props?: Record<string, unknown>;
    loading?: React.ReactNode;
}
export interface IAppLoaderState {
    App?: React.ComponentType;
}
export declare class AppLoader extends React.PureComponent<IAppLoaderProps, IAppLoaderState> {
    state: IAppLoaderState;
    componentDidMount(): Promise<void>;
    render(): {};
}
