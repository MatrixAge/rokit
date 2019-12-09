import React, { Fragment, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LazyComponent from '@/page_components/LazyComponent'
import App from './App'

const Image = lazy(() => import('./pages/Image'))

interface IRouterConfig {
      path: string,
      component: any,
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
                  <Switch>
                        {
                              router_config.map((item, index) => item.exact ?
                                    <Route path={item.path} component={item.component} key={index} exact></Route>
                                    :
                                    <Route path={item.path} component={LazyComponent(item.component)} key={index}></Route>)
                        }
                        <Redirect from='/*' to='/'></Redirect>
                  </Switch>
            </Fragment>
      )
}

export default RouterConfig