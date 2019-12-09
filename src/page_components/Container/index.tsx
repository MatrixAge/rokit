import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.less'

const Index: React.FC = (props) => {
      return (
            <Fragment>
                  <div className={`${styles.component_wrap} w_100vw h_100vh border_box fixed`}>
                        <Link to='/'>
                              <button className={`${styles.btn_close} absolute`}>
                                    <img
                                          className="icon_close"
                                          src={require('../../assets/icons/icon_close.svg')}
                                          alt="icon_close" />
                              </button>
                        </Link>
                        <div className={`${styles.component} w_100 h_100 border_box flex flex_column`}>
                              {props.children}
                        </div>
                  </div>
            </Fragment>
      )
}


export default Index