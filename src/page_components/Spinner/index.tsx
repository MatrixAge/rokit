import React, { Fragment } from 'react'
import styles from './index.less'

const Index: React.FC = () => {
      return (
            <Fragment>
                  <div className={`${styles._local} w_100vw h_100vh border_box fixed flex flex_column justify_center align_center`}>
                        <span className='fontsize_24'>Loading</span>
                  </div>
            </Fragment>
      )
}


export default Index