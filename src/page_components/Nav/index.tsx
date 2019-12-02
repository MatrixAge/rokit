import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.less'

interface ILinkItem {
      path: string,
      img_preview: string,
      name: string,
      description: string,
}

const link_items: Array<ILinkItem> = [
      {
            path: 'Image',
            img_preview: require(`../../assets/images/img_preview_Image.jpg`),
            name: 'Image',
            description: '用于展示图片，组件灵感来源于小程序image组件'
      }
]

const Index: React.FC = () => {
      return (
            <Fragment>
                  <div className={styles._local}>
                        <div className="link_items w_100 border_box flex flex_column align_center">
                              {
                                    link_items.map((item, index) => (
                                          <Link to={item.path} key={index}>
                                                <div className="link_item border_box flex flex_column bg_white transition_normal">
                                                      <div className="img_wrap flex justify_center align_center">
                                                            <img className="img" src={item.img_preview} alt="img_component" />
                                                      </div>
                                                      <div className="detail border_box flex flex_column p_30">
                                                            <span className="name color_000 fontsize_32 mb_20">{item.name}</span>
                                                            <span className="description color_aaa fontsize_16">{item.description}</span>
                                                      </div>
                                                </div>
                                          </Link>

                                    ))
                              }
                        </div>
                  </div>
            </Fragment>
      )
}

export default Index