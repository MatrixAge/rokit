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
      const { width, height, borderRadius, src, alt, mode, lazy } = props

      const [state_width, setStateWidth] = useState('')
      const [state_height, setStateHeight] = useState('')
      const [state_border_radius, setStateBorderRadius] = useState('')
      const [state_alt, setStateAlt] = useState('')
      const [state_mode, setStateMode] = useState('')
      const [state_lazy, setStateLazy] = useState(false)

      const [state_img_style, setStateImgStyle] = useState({})

      const container_ref = useRef<HTMLDivElement>(null)
      const img_ref = useRef<HTMLImageElement>(null)

      const initialStateHeight = () => {
            if (mode === 'widthFix') {
                  return 'auto'
            } else {
                  if (height) {
                        return height
                  } else {
                        return '225px'
                  }
            }
      }

      useEffect(() => {
            setStateWidth(width ? width : '300px')
            setStateHeight(initialStateHeight())
            setStateBorderRadius(borderRadius ? borderRadius : '0px')
            setStateAlt(alt ? alt : 'image')
            setStateMode(mode ? mode : 'aspectFill')
            setStateLazy(lazy ? lazy : false)

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

                  if (current && mode === 'aspectFill') {
                        const io = new IntersectionObserver(()=>{},{root:null,})
            
                        io.observe(current)
                        
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
      }, [])

      const style: object = {
            width: state_width,
            height: state_height,
            borderRadius: state_border_radius,
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
                        className={`${state_mode}`}
                        style={style}
                  >
                        <img
                              ref={img_ref}
                              className='img'
                              src={src}
                              alt={state_alt}
                              style={state_img_style}
                        />
                  </div>
            </div>
      )
}

export default React.memo(Index) 