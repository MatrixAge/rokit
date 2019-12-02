import React, { Fragment } from 'react'
import styles from './index.less'

const Index: React.FC = () => {
      return (
            <Fragment>
                  <div className={styles._local}>
                        <div className="header_wrap flex justify_center">
                              <div className="header flex align_end">
                                    <span className="name color_000 mr_20">Rokit</span>
                                    <span className="slogan color_666 fontsize_16 mb_6">A simple and practical react components library.</span>
                              </div>
                        </div>
                  </div>
            </Fragment>
      )
}

export default Index