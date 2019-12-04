import React, { Fragment } from 'react'
import styles from './index.less'

interface IProps {
      component: React.ReactNode,
      code: React.ReactNode
}

const Index: React.FC<IProps> = (props) => {
      const { component, code } = props

      return (
            <Fragment>

            </Fragment>
      )
}


export default Index