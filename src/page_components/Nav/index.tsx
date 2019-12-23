import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Image from '@/components/Image/index'
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
            img_preview: require(`@/assets/images/img_preview_Image.jpg`),
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
                                          <Link className="link_item border_box flex flex_column bg_white transition_normal" to={item.path} key={index}>
                                                <div className="img_wrap flex justify_center align_center">
                                                      <Image mode='aspectFillWidth' width='100%' height='220px' src={item.img_preview} alt="img_component" />
                                                </div>
                                                <div className="detail border_box flex flex_column p_30">
                                                      <span className="name color_000 fontsize_32 mb_20">{item.name}</span>
                                                      <span className="description color_aaa fontsize_16">{item.description}</span>
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