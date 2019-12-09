import React, { useState, useEffect, useRef } from 'react'
import styles from './Image.less'

interface IProps {
      width?: string,
      height?: string,
      borderRadius?: string,
      src: string,
      alt?: string,
      mode?: "scaleToFill" | "aspectFit" | "aspectFill" | "aspectFillWidth" | "aspectFillHeight" | "widthFix" | "top" | "bottom" | "center" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight",
      lazy?: boolean,
}

const Index: React.FC<IProps> = (props) => {
      const {
            width = '300px',
            height = '225px',
            borderRadius = '0px',
            src = '',
            alt = 'image',
            mode = 'aspectFill',
            lazy = false
      } = props

      const [state_img_style, setStateImgStyle] = useState({})
      const [state_img_src, setStateImgSrc] = useState('')

      const container_ref = useRef<HTMLDivElement>(null)
      const img_ref = useRef<HTMLImageElement>(null)

      useEffect(() => {
            let _width: number
            let _height: number

            const { current } = img_ref

            if (width && height && container_ref.current) {
                  if (width === '100%') {
                        _width = container_ref.current.offsetWidth
                  } else {
                        _width = Number(width.split('').filter(item => Number.isSafeInteger(Number(item))).join(''))
                  }

                  if (height === '100%') {
                        throw Error('height can`t be 100%!')
                  } else {
                        _height = Number(height.split('').filter(item => Number.isSafeInteger(Number(item))).join(''))
                  }

                  if (current) {
                        if (lazy) {
                              let io = new IntersectionObserver((e) => {
                                    const _e = e[e.length - 1]

                                    if (_e.isIntersecting) {
                                          setStateImgSrc(src)

                                          io.unobserve(current)
                                    }
                              })

                              io.observe(current)
                        } else {
                              setStateImgSrc(src)
                        }

                        if (mode === 'aspectFill') {
                              current.onload = () => {
                                    const { naturalWidth, naturalHeight } = current
                                    const ratio_natural = naturalWidth / naturalHeight
                                    const ratio_preset = _width / _height

                                    if (ratio_natural > ratio_preset) {
                                          setStateImgStyle({
                                                maxHeight: '100%'
                                          })
                                    } else {
                                          setStateImgStyle({
                                                maxWidth: '100%'
                                          })
                                    }
                              }
                        }
                  }
            }
      }, [height, lazy, mode, src, width])

      const style: object = {
            width: width,
            height: mode === 'widthFix' ? 'auto' : height,
            borderRadius: borderRadius,
            overflow: 'hidden'
      }

      return (
            <div
                  ref={container_ref}
                  className={`${styles._local}`}
                  style={{
                        width: '100%'
                  }}
            >
                  <div
                        className={`${mode}`}
                        style={style}
                  >
                        <img
                              ref={img_ref}
                              className='img'
                              src={state_img_src}
                              alt={alt}
                              style={state_img_style}
                        />
                  </div>
            </div>
      )
}

export default React.memo(Index) 