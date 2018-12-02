import { Layout } from 'antd'
import React from 'react'
import { hot } from 'react-hot-loader'

const App = () => (
  <Layout>
    <Layout.Sider theme="light" width={50}>
      Sider
    </Layout.Sider>
    <Layout>
      <Layout.Header style={{ backgroundColor: 'lightblue' }}>
        Header
      </Layout.Header>
      <Layout.Content>Content</Layout.Content>
    </Layout>
  </Layout>
)

export default hot(module)(App)
