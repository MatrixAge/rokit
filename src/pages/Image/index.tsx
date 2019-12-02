import React, { Fragment } from 'react'
import styles from './index.less'

const Index: React.FC = () => {
      return (
            <Fragment>
                  <div className={styles._local}>
                        <div className="component_wrap w_100vw h_100vh border_box fixed">
                              <div className="component w_100 h_100 border_box flex flex_column">
                                          123
                              </div>
                        </div>
                  </div>
            </Fragment>
      )
}

export default Index