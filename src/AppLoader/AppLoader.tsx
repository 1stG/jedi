import React from 'react'

import { LoaderType, getLoader } from './LoaderAdapter'

export interface IAppLoaderProps {
  appName: string
  loaderType?: LoaderType
  props?: Record<string, unknown>
  loading?: React.ReactNode
  version?: string
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
    const { appName, loaderType, version } = this.props
    const loader = getLoader(loaderType)
    let loadUrl = appName
    if (!appName.startsWith('/')) {
      loadUrl =
        process.env.CDN_APP_PREFIX || '//1stg.github.io/modules/@1stg/jedi-'

      if (appName.includes('/')) {
        const [mainApp, ...rest] = appName.split('/')
        loadUrl += mainApp
        if (version) {
          loadUrl += '/' + version
        }
        loadUrl += '/' + rest.join('/')
      } else {
        loadUrl += appName
        if (version) {
          loadUrl += '/' + version
        }
        loadUrl += '/index'
      }

      loadUrl += '.js'
    }
    const [App] = await loader.load([loadUrl])
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
