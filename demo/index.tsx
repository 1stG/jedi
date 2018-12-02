import { AppLoader } from '@1stg/jedi'
import { Card } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'

declare global {
  const PUBLIC_PATH: string
}

ReactDOM.render(
  <AppLoader
    appName={`${PUBLIC_PATH}app.js`}
    loading={<Card loading={true} />}
  />,
  document.getElementById('app'),
)
