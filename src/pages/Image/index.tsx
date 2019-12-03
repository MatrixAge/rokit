import React from 'react'
import Container from '@/page_components/Container'
import Table from '@/page_components/Table'
import Section from '@/page_components/Section'
import styles from './index.less'

const Index: React.FC = () => {
      const columns = [
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

      const dataSource = [
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
                              <Table columns={columns} dataSource={dataSource}></Table>
                        </Section>
                  </div>
            </Container>
      )
}

export default Index