import { resolve } from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

import { dependencies, description, peerDependencies } from './package.json'

const DEV = 'development'

const NODE_ENV = (process.env.NODE_ENV as Configuration['mode']) || DEV

const publicPath = process.env.PUBLIC_PATH || '/'

const isDev = NODE_ENV === DEV

const sourceMap = isDev

type BasicCssType = 'css' | 'postcss'

type AdvancedCssType = 'less'

type CssType = BasicCssType | AdvancedCssType

const basicCssTypes: BasicCssType[] = ['css', 'postcss']

const LOADERS: Partial<Record<CssType, string>> = {
  css: 'typings-for-css-modules',
}

const extraOptions = (
  modules: boolean,
): Partial<Record<CssType, Record<string, unknown>>> => ({
  css: {
    camelCase: true,
    importLoaders: 1,
    localIdentName: isDev
      ? '[path][name]__[local]--[hash:base64:5]'
      : '[hash:base64:10]',
    modules,
    namedExport: true,
    silent: true,
  },
  less: {
    javascriptEnabled: true,
  },
})

const cssLoaders = (type: AdvancedCssType, modules = false) => [
  'style-loader',
  ...[...basicCssTypes, type].map(tp => ({
    loader: `${LOADERS[tp] || tp}-loader`,
    options: {
      sourceMap,
      ...extraOptions(modules)[tp],
    },
  })),
]

const config: Configuration = {
  mode: NODE_ENV,
  entry: {
    main: resolve('demo/index.tsx'),
  },
  output: {
    libraryTarget: 'amd',
    publicPath,
  },
  resolve: {
    alias: {
      '@1stg/jedi': resolve('src'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: isDev && 'cheap-module-eval-source-map',
  devServer: {
    host: 'local.1stg.me',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        oneOf: [
          {
            include: /node_modules/,
            use: cssLoaders('less'),
          },
          {
            use: [
              ...cssLoaders('less', true),
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: resolve('demo/styles/variables.less'),
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `jedi - ${description}`,
      template: 'demo/index.html',
      inject: false,
      system: true,
    }),
  ],
  externals: [
    ...Object.keys(dependencies),
    ...Object.keys(peerDependencies),
    'antd',
  ],
}

export default config
