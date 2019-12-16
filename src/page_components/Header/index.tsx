import React, { Fragment } from 'react'
import styles from './index.less'
import logo from '@/assets/images/logo_main.png'
import icon_github from '@/assets/icons/icon_github.svg'

const Index: React.FC = () => {
      return (
            <Fragment>
                  <div className={styles._local}>
                        <div className="header_wrap flex justify_center">
                              <div className="header flex align_center justify_between">
                                    <a href="https://github.com/MatrixAge/rokit" target='_blank'>
                                          <div className="left flex align_center">
                                                <img className='logo mr_10 transition_normal' src={logo} alt="logo" />
                                                <span className="name color_000 mr_20 transition_normal">Rokit</span>
                                          </div>
                                    </a>
                                    <div className="flex align_center">
                                          <a href="https://github.com/MatrixAge/rokit" target='_blank'>
                                                <img className='icon_github' src={icon_github} alt="icon_github" />
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Fragment>
      )
}

export default Index