import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Image from './pages/Image'
import App from './App'

interface IRouterConfig {
      path: string,
      component: React.FC,
      exact?: boolean
}

const router_config: Array<IRouterConfig> = [
      {
            path: '/',
            component: App,
            exact: true
      },
      {
            path: '/Image',
            component: Image
      }
]

const RouterConfig: React.FC = () => {
      return (
            <Fragment>
                  {
                        router_config.map((item, index) => item.exact ?
                              <Route path={item.path} component={item.component} key={index} exact></Route>
                              :
                              <Route path={item.path} component={item.component} key={index}></Route>)
                  }
                  <Redirect from='/*' to='/'></Redirect>
            </Fragment>
      )
}

export default RouterConfig