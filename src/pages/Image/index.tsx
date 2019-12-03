import React from 'react'
import Container from '@/page_components/Container'
import Table from '@/page_components/Table'
import Section from '@/page_components/Section'
import styles from './index.less'

const Index: React.FC = () => {
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
                  value: 'widthFix',
                  description: '缩放模式，宽度不变，高度自动变化，保持原图宽高比不变'
            },
            {
                  value: 'top',
                  description: '裁剪模式，不缩放图片，只显示图片的顶部区域'
            },
      ]

      return (
            <Container>
                  <div className={styles._local}>
                        <div className="title_wrap w_100 border_box flex justify_center">
                              <div className="title width_index_body flex flex_column">
                                    <h1>Image</h1>
                                    <span className="description color_aaa">图片组件：与web原生的img组件支持的图片格式相同，在此基础上增加图片根据需求展示以及懒加载的功能。</span>
                              </div>
                        </div>
                        <Section width="800px" title="API">
                              <Table columns={columns_index} dataSource={dataSource_index}></Table>
                        </Section>
                        <Section width="800px" title="mode">
                              <Table columns={columns_mode} dataSource={dataSource_mode}></Table>
                        </Section>
                  </div>
            </Container>
      )
}

export default Index