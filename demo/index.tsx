import { AppLoader } from '@1stg/jedi'
import { Card } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <AppLoader appName="app" loading={<Card loading={true} />} />,
  document.getElementById('app'),
)
