import * as React from 'react';
import { useMemo } from 'react'
import { Collapse } from 'antd';
import { createForm, onFieldValueChange, onFormInit } from '@formily/core';
import { createSchemaField, FormConsumer } from '@formily/react';
import { Form, FormItem, Input, Select, Switch } from '@formily/antd';
const { Panel } = Collapse;


/** 右侧属性面板Props
 * @param initValus 默认值
 * @param editable 是否可编辑
 * @param Dispatch useReducer => dispatch
*/
type SettingProps = {
    initValus: Record<string, any>,
    editable: boolean,
    Dispatch: any
};
/** 右侧控件属性 */
const Setting: React.FC<SettingProps> = ({ initValus, editable, Dispatch }) => {
    //collapsible={'disabled'}  
    const form = createForm({
        values: {...initValus},
        disabled: !editable,
        effects: () => {
            //只写一个样例，其他趋同
            onFieldValueChange('keyFlag', (field, form) => {
                Dispatch({
                    type: 'add_controller_property',
                    params: {
                        propertyName: 'x-decorator-props',
                        propertyValue: {
                            label: field.value
                        }
                    }
                });
            })
            onFieldValueChange('title', (field, form) => {
                Dispatch({
                    type: 'add_controller_property',
                    params: {
                        propertyName: 'x-component-props',
                        propertyValue: {
                            title: field.value
                        }
                    }
                });
            })
        },
    });
    const SchemaField = createSchemaField({
        components: {
            FormItem,
            Input,
            Select,
            Switch
        },
    });
    //字段属性schema
    const keyProperties = {
        type: 'object',
        properties: {
            keyFlag: {
                type: 'string',
                title: '字段标识',
                'x-component': 'Input',
                'x-decorator': 'FormItem',
            },
            title: {
                type: 'string',
                title: '标题',
                'x-component': 'Input',
                'x-decorator': 'FormItem',
            },
            description: {
                type: 'string',
                title: '描述',
                'x-component': 'Input',
                'x-decorator': 'FormItem',
            },
            isRequired: {
                type: 'boolean',
                title: '必填',
                'x-component': 'Switch',
                'x-decorator': 'FormItem',
            }
        }
    };
    //组件属性
    const componentProperties = {
        type: 'object',
        properties: {
            allowClear: {
                type: 'boolean',
                title: '允许清除内容',
                'x-component': 'Switch',
                'x-decorator': 'FormItem',
            },
            placeholder: {
                type: 'string',
                title: '占位提示',
                'x-component': 'Input',
                'x-decorator': 'FormItem',
            }
        }
    };
    return (
        <div>
            <Form layout={'horizontal'} wrapperCol={12} labelCol={12} form={form}>
                <Collapse defaultActiveKey={[]}>
                    <Panel header="字段属性" key="1">
                        <SchemaField schema={keyProperties} />
                    </Panel>
                    <Panel header="组件属性" key="2">
                        <SchemaField schema={componentProperties} />
                    </Panel>
                    <Panel header="容器属性" key="3">

                    </Panel>
                    <Panel header="组件样式" key="4">

                    </Panel>
                    <Panel header="容器样式" key="5">

                    </Panel>
                </Collapse>
            </Form>
        </div>
    )
}

export default Setting;