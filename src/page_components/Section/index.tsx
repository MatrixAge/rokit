import React, { Fragment } from 'react'

interface IProps {
      width: string,
      title: string | React.ReactNode
}

const Index: React.FC<IProps> = (props) => {
      const { width, title } = props

      return (
            <Fragment>
                  <div className="section_wrap w_100 flex justify_center pt_30">
                        <div className="section" style={{ width: width }}>
                              <h2>{title}</h2>
                              {props.children}
                        </div>
                  </div>
            </Fragment>
      )
}


export default Index