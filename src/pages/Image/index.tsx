import React from 'react'
import Highlight from 'react-highlight.js'
import Container from '@/page_components/Container'
import Table from '@/page_components/Table'
import Section from '@/page_components/Section'
import Demo from '@/page_components/Demo'
import Image from '@/components/Image'
import styles from './index.less'
import img_src from '@/assets/images/img_preview_Image.jpg'

const columns_index = [
      {
            title: '属性',
            key: 'attribute'
      },
      {
            title: '类型',
            key: 'type'
      },
      {
            title: '默认值',
            key: 'default'
      },
      {
            title: '必填',
            key: 'is_required'
      },
      {
            title: '说明',
            key: 'description'
      }
]

const dataSource_index = [
      {
            attribute: 'width',
            type: 'string',
            default: '300px',
            is_required: '否',
            description: '图片宽度',
      },
      {
            attribute: 'height',
            type: 'string',
            default: '225px',
            is_required: '否',
            description: '图片高度',
      },
      {
            attribute: 'borderRadius',
            type: 'string',
            default: '0px',
            is_required: '否',
            description: '图片圆角',
      },
      {
            attribute: 'src',
            type: 'string',
            default: '空',
            is_required: '否',
            description: '图片资源地址'
      },
      {
            attribute: 'alt',
            type: 'string',
            default: 'image',
            is_required: '否',
            description: '图片占位名称'
      },
      {
            attribute: 'mode',
            type: 'string',
            default: 'aspectFill',
            is_required: '否',
            description: '图片裁剪、缩放模式'
      },
      {
            attribute: 'lazy',
            type: 'boolean',
            default: false,
            is_required: '否',
            description: '图片懒加载'
      },
]

const columns_mode = [
      {
            title: '值',
            key: 'value'
      },
      {
            title: '说明',
            key: 'description'
      },
]

const dataSource_mode = [
      {
            value: 'scaleToFill',
            description: '缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素'
      },
      {
            value: 'aspectFit',
            description: '缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。'
      },
      {
            value: 'aspectFill',
            description: '缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。'
      },
      {
            value: 'aspectFillWidth',
            description: '缩放模式，保持纵横比缩放图片，原图片宽度如果大于设定宽度则宽度100%填充，小于则保持原图宽度并横向居中，高度居中显示。'
      },
      {
            value: 'aspectFillHeight',
            description: '缩放模式，保持纵横比缩放图片，原图片高度如果大于设定高度则高度100%填充，小于则保持原图高度并垂直居中，宽度居中显示。'
      },
      {
            value: 'widthFix',
            description: '缩放模式，宽度不变，高度自动变化，保持原图宽高比不变'
      },
      {
            value: 'top',
            description: '裁剪模式，不缩放图片，只显示图片的顶部区域'
      },
      {
            value: 'bottom',
            description: '裁剪模式，不缩放图片，只显示图片的底部区域'
      },
      {
            value: 'center',
            description: '裁剪模式，不缩放图片，只显示图片的中间区域'
      },
      {
            value: 'left',
            description: '裁剪模式，不缩放图片，只显示图片的左边区域'
      },
      {
            value: 'right',
            description: '裁剪模式，不缩放图片，只显示图片的右边区域'
      },
      {
            value: 'topLeft',
            description: '裁剪模式，不缩放图片，只显示图片的左上边区域'
      },
      {
            value: 'topRight',
            description: '裁剪模式，不缩放图片，只显示图片的右上边区域'
      },
      {
            value: 'bottomLeft',
            description: '裁剪模式，不缩放图片，只显示图片的左下边区域'
      },
      {
            value: 'bottomRight',
            description: '裁剪模式，不缩放图片，只显示图片的右下边区域'
      },
]

const demo = [
      {
            title: `mode="scaleToFill"`,
            description: dataSource_mode[0].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="scaleToFill"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='scaleToFill'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="aspectFit"`,
            description: dataSource_mode[1].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="aspectFit"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='aspectFit'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="aspectFill"`,
            description: dataSource_mode[2].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="aspectFill"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='aspectFill'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="aspectFillWidth"`,
            description: dataSource_mode[3].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="aspectFillWidth"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='aspectFillWidth'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="aspectFillHeight"`,
            description: dataSource_mode[4].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="aspectFillHeight"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='aspectFillHeight'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="widthFix"`,
            description: dataSource_mode[5].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  mode="widthFix"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='widthFix'
      width='100%'
/>`
      },
      {
            title: `mode="top"`,
            description: dataSource_mode[6].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="top"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='top'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="bottom"`,
            description: dataSource_mode[7].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="bottom"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='bottom'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="center"`,
            description: dataSource_mode[8].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="center"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='center'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="left"`,
            description: dataSource_mode[9].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="left"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='left'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="right"`,
            description: dataSource_mode[10].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="right"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='right'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="topLeft"`,
            description: dataSource_mode[11].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="topLeft"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='topLeft'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="topRight"`,
            description: dataSource_mode[12].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="topRight"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='topRight'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="bottomLeft"`,
            description: dataSource_mode[13].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="bottomLeft"
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='bottomLeft'
      width='100%'
      height='400px'
/>`
      },
      {
            title: `mode="bottomRight"`,
            description: dataSource_mode[14].description,
            component: <Image
                  src={img_src}
                  width='100%'
                  height='400px'
                  mode="bottomRight"
                  lazy={true}
            />,
            code: `<Image
      src='https://s2.ax1x.com/2019/12/05/Q3hl7V.jpg'
      mode='bottomRight'
      width='100%'
      height='400px'
/>`
      },
]

const Index: React.FC = () => {
      return (
            <Container>
                  <div className={styles._local}>
                        <div className="title_wrap w_100 border_box flex justify_center">
                              <div className="title width_index_body flex flex_column">
                                    <h1>Image</h1>
                                    <span className="description black">图片组件：与web原生的img组件支持的图片格式相同，在此基础上增加图片根据需求展示以及懒加载的功能。</span>
                              </div>
                        </div>
                        <Section title="Install">
                              <div className="code_wrap w_100 border_box flex pl_30 pr_30 bg_black">
                                    <Highlight language="javascriptreact">
                                          {`npm i rokit-image`}
                                    </Highlight>
                              </div>
                        </Section>
                        <Section title="API">
                              <Table columns={columns_index} dataSource={dataSource_index}></Table>
                        </Section>
                        <Section title="mode">
                              <Table columns={columns_mode} dataSource={dataSource_mode}></Table>
                        </Section>
                        <Section title="Demo">
                              {
                                    demo.map((item, index) => (
                                          <Demo
                                                title={item.title}
                                                description={item.description}
                                                component={item.component}
                                                code={item.code}
                                                key={index}
                                          />
                                    ))
                              }
                        </Section>
                  </div>
            </Container>
      )
}

export default Index