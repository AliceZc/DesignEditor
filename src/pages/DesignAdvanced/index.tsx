import * as React from 'react';
import { useMemo, useReducer } from 'react';
import { Collapse, Button } from 'antd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrop } from 'react-dnd';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { Input, Select, FormLayout, Radio, Checkbox, DatePicker, FormGrid, ArrayCards } from '@formily/antd';
const { Panel } = Collapse;
import './index.less'
import _ from 'lodash';
import Setting from './components/Setting';
import DraggedCard from './components/DraggedCard';
import { TYPE_ENUM, reducer } from './util';
import FormItem from './components/CustomFormItem';
import Layout from './components/Layout';

/** 自定义FormItem 
 * @param id 拖拽到面板中时生成，作为这个field的name
 * @param elementType Card 左侧卡片  Node左侧schema结构中的结点
 * @param type 控件类型
*/
type Item = {
    id: string | undefined;
    elementType: 'Card' | 'Node';
    type: string;
}

/** 编辑器主页面 */
const Design: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {
        schema: {
            type: 'object',

        },
        maxNum: 1,
        active_path: ''
    });

    //使用drop ref
    const [, dropRef] = useDrop({
        accept: TYPE_ENUM,
        drop: (item: Item, monitor) => {
            //左侧拖拽到右边
            if (item['id'] === 'Card') {
                dispatch({
                    type: 'add_controller',
                    params: {
                        type: item['type']
                    }
                })
            } else {
                dispatch({
                    type: 'switch_position',
                    params: {
                        type: item['type']
                    },
                });
            }
            return { item };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });


    //生成form示例
    const form = useMemo(() => {
        //模板配置不允许编辑
        return createForm({
            readOnly: true
        })
    }, [state.schema]);
    //创建schemaField
    const SchemaField = createSchemaField({
        components: {
            Input,
            Select,
            FormItem,
            FormLayout,
            Radio,
            Checkbox,
            DatePicker,
            FormGrid,
            ArrayCards,
            Layout
        },
    });

    const schema = {
        type: 'object',
        properties: {
            layout1: {
                type: 'void',
                'x-component': 'Layout',
                'x-component-props': {
                    type: 'card',
                    title: 'card示例',
                    schema: {
                        type: 'object',
                        properties: {
                            layout2: {
                                type: 'void',
                                'x-component': 'Layout',
                                'x-component-props': {
                                    type: 'card',
                                    title: 'card嵌套1示例',
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            aaa3: {
                                                type: 'string',
                                                'x-decorator': 'FormItem',
                                                'x-component': 'Input',
                                            },
                                            layout3: {
                                                type: 'void',
                                                'x-component': 'Layout',
                                                'x-component-props': {
                                                    type: 'card',
                                                    title: 'card嵌套2示例',
                                                }
                                            }
                                        }
                                    }
                                },
                            },
                            aaa2: {
                                type: 'string',
                                'x-decorator': 'FormItem',
                                'x-component': 'Select',
                            }
                        }
                    }
                },
            }
        },
        aaa: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
        }
    }

    return (
        <div className='design-editor'>
            <header>formily 低代码编辑器</header>
            <main>
                <aside className='left-sidebar'>
                    <h1>组件</h1>
                    <div className='left-sidebar-content'>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="输入控件" key="1">
                                <div className="input-controllers">
                                    <DraggedCard type='Radio.Group' styleName='radio-group' description='单选框组' />
                                    <DraggedCard type='Checkbox.Group' styleName='checkbox-group' description='复选框组' />
                                    <DraggedCard type='Input' styleName='input' description='输入框' />
                                    <DraggedCard type='DatePicker' styleName='date-picker' description='日期选择' />
                                </div>
                            </Panel>
                            <Panel header="布局组件" key="2">
                                <div className="input-controllers">
                                    <DraggedCard type='FormGrid' styleName='layout-grid' description='网格布局' />
                                    <DraggedCard type='FormLayout' styleName='layout-flex' description='弹性布局Flex' />
                                    <DraggedCard type='ArrayCards' styleName='layout-card' description='卡片' />
                                </div>
                            </Panel>
                            <Panel header="自增组件" key="3">
                                <div className="input-controllers">
                                    <DraggedCard type='autoAdd' styleName='auto-add-list' description='自增列表' />
                                </div>
                            </Panel>
                            {/* <Panel header="展示组件" key="4">
                                <p>3</p>
                            </Panel> */}
                        </Collapse>
                    </div>
                </aside>
                <div ref={dropRef} className='center-panel'>
                    <FormProvider form={form}>
                        {
                            React.useMemo(() => <SchemaField schema={schema} />, [schema])
                        }
                    </FormProvider>
                </div>
                <aside className='right-sidebr'>
                    <h1>属性配置</h1>
                    <div className="right-sidebar-content">
                        {
                            React.useMemo(() => <Setting Dispatch={dispatch} editable={state['active_path'] !== ''} initValus={state['propertySetting']} />, [state['active_path']])
                        }
                    </div>
                </aside>
            </main>
            <footer>
                <Button>Save</Button>
            </footer>
        </div>
    )
}

export default () => <div><DndProvider backend={HTML5Backend}><Design /></DndProvider></div>;