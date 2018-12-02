import React from 'react'

import { LoaderType, getLoader } from './LoaderAdapter'

export interface IAppLoaderProps {
  appName: string
  loaderType?: LoaderType
  props?: Record<string, unknown>
  loading?: React.ReactNode
}

export interface IAppLoaderState {
  App?: React.ComponentType
}

export class AppLoader extends React.PureComponent<
  IAppLoaderProps,
  IAppLoaderState
> {
  state: IAppLoaderState = {}

  async componentDidMount() {
    const { appName, loaderType } = this.props
    const loader = getLoader(loaderType)
    const [App] = await loader.load([
      appName.startsWith('/') ? appName : `/${appName}.js`,
    ])
    this.setState({ App })
  }

  render() {
    const {
      props: { loading },
      state: { App },
    } = this
    if (!App) {
      return loading || 'loading...'
    }
    const { props } = this.props
    return <App {...props} />
  }
}
