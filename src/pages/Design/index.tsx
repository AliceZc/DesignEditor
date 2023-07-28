import * as React from 'react';
import { useState, useMemo, useReducer, useRef } from 'react';
import { Collapse, Button } from 'antd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';
import { Field, createForm } from '@formily/core';
import { FormProvider, createSchemaField, connect, mapProps, Schema } from '@formily/react';
import { Input, Select, FormLayout, Radio, Checkbox, DatePicker, FormGrid, ArrayCards } from '@formily/antd';
import { Form } from 'antd';
const { Panel } = Collapse;
import './index.less'
import _ from 'lodash';
import Setting from './components/Setting';
import move2_Src from '../../assets/svg/move2.svg';


//控件类型
const TYPE_ENUM = ['Radio.Group', 'Checkbox.Group', 'Input', 'DatePicker', 'FormLayout', 'FormGrid', 'ArrayCards'];

/**
 * @todo: 
 * 1. 拖拽组件排序 question:schema中的各个组件都需要包装成可以拖拽的组件 @summary<finished>
 * 2. 单个组件和右侧面板属性配置联动 @summary<finished>
 * 3. 点击单个组件，设置active样式  @summary<finished>
 * 4. flex和grid布局组件嵌套 
 * 5. 自定义组件实现（待定)
 * 6. 在FormItem 上绑定拖拽，会导致不能拖拽，原因未知. 将type定为TYPE_ENUM之外的就是可以的，或者标签改成函数的方式是可以的. @summary<finished> 因为没有使用useMemo导致频繁刷新页面，出现异常
 * 7. state中schema树形结构，需要修改，便于操作。封装一个方法可以将该结构转换成schema?
 */


/** hover状态 */
enum Direction {
    Up = -1,
    Down = 1,
    // Left,
    // Right,
    Still = 0,
    Center = 10,
}
type State = any;
type Action = {
    type: string,
    params: {
        componentProps?: undefined | Record<string, string>,
        type?: string,
        active_path?: string | RegExp,
        className?: string,
        propertyName?: string,
        propertyValue?: any,
        targetId?: string,
        moveId?: string,
        moveType?: string,
        moveDirection?: Direction,
        target?: string,
        isIn?: boolean,
    }
}
type EntryArray = [string, any][];

/** 根据Path 操作对应结点的schema结构 
 * @param schema 原始的schema结构
 * @param path 操作的结点，例如a.b.c
 * @param actionFlag 操作  0 删除  1添加属性 2交换位置
 * @param action.propertyName 属性名
 * @param action.propertyValue 属性值
*/
const changeSchema = (schema: Record<string, any>, path: string, actionFlag: number, options?: unknown) => {
    const originSchema = _.cloneDeep(schema);
    //根据路径.生成数组
    const splitPath = path.split('.');
    let node = originSchema;
    //如果传入的是属性，则改变对应结点的属性
    if (actionFlag === 1) {
        splitPath.forEach(item => {
            node = node['properties'][item];
        })
        const { propertyName, propertyValue } = options as { propertyName: string, propertyValue: any };
        node[propertyName] = propertyValue;
    } else if (actionFlag === 0) {
        delete originSchema['properties'][path]
        if (_.isEmpty(originSchema['properties'])) {
            delete originSchema['properties']
        }
    } else if (actionFlag === 2) {
        const { moveId, targetId } = options as { moveId: string, targetId: string };
        console.log('moveId:', moveId, 'targetId:', targetId);
    }
    return originSchema
}

/** 根据Path 获取对应结点的schema结构的属性
 * @param schema 结构
 * @param path 操作的结点，例如a.b.c
 */
const getSchemaNodeProperties = (schema: Record<string, any>, path: string) => {
    const originSchema = _.cloneDeep(schema);
    //根据路径.生成数组
    const splitPath = path.split('.');
    let node = originSchema;
    splitPath.forEach(item => {
        node = node['properties'][item];
    })
    return { ...node }
}


/** 寻找Object.entries之后的数组下标
 *  @param array 数组
 *  @param key
 */
const findIndex = (array: EntryArray, key: string): number => {
    let index = 0;
    if (!_.isArray(array)) {
        return 0
    }
    array.forEach((item, i) => {
        if (item[0] === key) {
            index = i
        }
    });
    return index
}

/** 编辑器主页面 */
const Design: React.FC = () => {
    //使用reducer控制更改schema
    function reducer(state: State, action: Action) {
        const cloneState = _.cloneDeep(state);
        //schema结构,控件使用最大数（每新增一个+1）, 当前活跃的控件路径
        const { schema, maxNum, active_path } = cloneState;
        schema.properties = schema.properties ? schema.properties : {};
        //控件类型
        const _type = action['params']['type'] || '';
        //schema中控件的name[暂定，后续可在右侧属性面板更改]
        const _name = _type.replaceAll(/\./g, '>') + state['maxNum'];
        //传递给控件的props
        const _props = action['params']['componentProps'];
        switch (action.type) {
            //增加控件
            case 'add_controller': {
                const { target } = action.params;
                //到控件内部
                if (target) {

                } else {
                    Object.assign(schema['properties'], {
                        [_name]: {
                            type: _type === 'ArrayCards' ?'array':'string',
                            'x-decorator': 'FormItem',
                            'x-component': _type,
                            'x-component-props': {
                                ..._props,
                            },
                        }
                    });
                }
                return { ...cloneState, schema, maxNum: maxNum + 1 };
            }
            //删除控件
            case 'remove_controller': {
                const updatedSchema = changeSchema(schema, active_path, 0);
                return { ...cloneState, schema: updatedSchema };
            }
            //交换位置
            case 'switch_position': {
                console.log('switch position:', action.params)
                const { moveId, targetId, moveType, moveDirection, isIn } = action.params;
                //如果moveId没有值，代表是从左侧拉到右侧的，在特定位置加上控件(moveType)即可
                if (!moveId) {

                } else if (!isIn) {
                    //否则，需要根据moveId和targetId,交换两者的位置
                    const properties = schema['properties'];
                    const array = Object.entries(properties);
                    const moveIndex = findIndex(array, moveId);
                    let targetIndex = findIndex(array, targetId as string);
                    // array.splice(targetIndex,1,...array.splice(moveIndex, 1 , array[targetIndex]));
                    //将moveIndex的元素，根据moveDirection的值，插入到targetIndex的元素前面或者后面
                    const moveElement = array[moveIndex];
                    array.splice(moveIndex, 1);
                    array.splice(targetIndex, 0, moveElement);
                    schema['properties'] = Object.fromEntries(array);
                } else {
                    console.log('move in:', schema, moveId, targetId)
                    const properties = schema['properties'];
                    const array = Object.entries(properties);
                    const moveIndex = findIndex(array, moveId);
                    let targetIndex = findIndex(array, targetId as string);
                    const targetElement = array[targetIndex][1];
                    if ((targetElement as Record<string, any>)['properties']) {
                        Object.assign((targetElement as Record<string, any>)['properties'], {
                            [_name]: {
                                type: 'string',
                                'x-decorator': 'FormItem',
                                'x-component': _type,
                                'x-component-props': {
                                    ..._props,
                                }
                            }
                        });
                    }else {
                        (targetElement as any)['items'] = {
                            type: 'object',
                            properties: {
                                [_name]: {
                                    type: 'string',
                                    'x-decorator': 'FormItem',
                                    'x-component': _type,
                                    'x-component-props': {
                                        ..._props,
                                    }
                                }
                            }
                        }
                    }
                    array.splice(moveIndex, 1);
                    schema['properties'] = Object.fromEntries(array);
                    console.log('schema:', schema)
                }
                return { ...cloneState, schema };
            }
            //添加控件属性props
            case 'add_controller_property': {
                const { propertyName, propertyValue } = action.params;
                let updatedSchema = schema;
                if (propertyName && propertyValue && active_path && schema) {
                    updatedSchema = changeSchema(schema, active_path, 1, {
                        propertyName,
                        propertyValue
                    });
                }
                return { ...cloneState, schema: updatedSchema };
            }
            //点击控件
            case 'activate_controller': {
                let propertySetting = state['propertySetting'] ? state['propertySetting'] : {};
                //如果active的路径发生变更，获取对应组件的属性值
                if (action.params.active_path && active_path !== action.params.active_path && action.params.className) {
                    const properties = getSchemaNodeProperties(schema, action.params.active_path as string);
                    //解析属性，存入state
                    if (properties) {
                        let keyFlag = '', title = '';
                        if (properties['x-decorator-props'] && properties['x-decorator-props']['label']) {
                            keyFlag = properties['x-decorator-props']['label'];
                        }
                        if (properties['x-component-props'] && properties['x-component-props']['title']) {
                            title = properties['x-component-props']['title'];
                        }
                        propertySetting['keyFlag'] = keyFlag;
                        propertySetting['title'] = title;
                    }
                }
                return { ...cloneState, active_path: action.params.active_path, propertySetting };
            }
            default:
                throw new Error('没有该action的定义');
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        schema: {
            type: 'object'
        },
        maxNum: 1,
        active_path: ''
    });
    /** 生成拖拽的jsx, 仅限于左侧卡片
     * @param type 控件类型
     * @param styleName 控件的样式名
     * @param description 控件描述
    */
    const DraggedElementCard = (type: string, styleName: string, description: string, props?: any): React.ReactElement => {
        const [, drag] = useDrag({
            type,
            item: { type, componentProps: props },
            end: (item, monitor) => { },
            collect: (monitor) => ({
                type,
                isDragging: monitor.isDragging()
            })
        });
        return (
            <div className="input-controller-item" ref={drag}>
                <span className={`item-svg ${styleName}`}></span>
                <span className="item-desc">{description}</span>
            </div>
        )
    }

    /** 自定义FormItem */
    type Item = {
        id: string | undefined;
        type: string;
        componentProps?: any;
    }
    const CustomFormItem: React.FC<Record<string, any>> = (props) => {
        const [hoverState, setHoverState] = useState<Direction>(Direction.Still);
        const ref = useRef<HTMLDivElement | null>(null);
        const type = props['component_type'];
        const id = props['className'];
        const [{ isDragging }, drag, preview] = useDrag({
            type,
            item: { type, id },
            previewOptions: {

            },
            collect: (monitor) => ({
                type,
                isDragging: monitor.isDragging()
            })
        });
        const [{ isOver }, drop] = useDrop({
            accept: TYPE_ENUM,
            collect: monitor => {
                return {
                    isOver: monitor.isOver(),
                };
            },
            hover: (item: any, monitor) => {
                //底下被hover的物体
                const hoverBoundingRect = ref.current?.getBoundingClientRect();
                const hoverMiddleY = ((hoverBoundingRect as DOMRect).bottom - (hoverBoundingRect as DOMRect).top) / 2
                //移动物
                const clientOffset = monitor.getClientOffset();
                const hoverClientY = (clientOffset as XYCoord).y - (hoverBoundingRect as DOMRect).top;

                //鼠标点纵坐标 - 下面组件的top/bottom
                const diff1 = hoverClientY;
                const diff2 = (clientOffset as XYCoord).y - (hoverBoundingRect as DOMRect).bottom;
                //如果移到卡片上面
                if ((props['component_type'] === 'ArrayCards') && (diff1 > 20 && diff2 < -20)) {
                    setHoverState(Direction.Center);
                    return
                }

                //往下
                if (hoverClientY < hoverMiddleY) {
                    setHoverState(Direction.Up)
                }
                //往上
                if (hoverClientY > hoverMiddleY) {
                    setHoverState(Direction.Down)
                }
            },
            drop: (item: any, monitor) => {
                let moveDirection = Direction.Still;
                //底下被hover的物体
                const hoverBoundingRect = ref.current?.getBoundingClientRect();
                const hoverMiddleY = ((hoverBoundingRect as DOMRect).bottom - (hoverBoundingRect as DOMRect).top) / 2
                //移动物
                const clientOffset = monitor.getClientOffset();
                const hoverClientY = (clientOffset as XYCoord).y - (hoverBoundingRect as DOMRect).top;
                //往下
                if (hoverClientY < hoverMiddleY) {
                    moveDirection = Direction.Up;
                }
                //往上
                if (hoverClientY > hoverMiddleY) {
                    moveDirection = Direction.Down;
                }
                //鼠标点纵坐标 - 下面组件的top/bottom
                const diff1 = hoverClientY;
                const diff2 = (clientOffset as XYCoord).y - (hoverBoundingRect as DOMRect).bottom;
                //如果移到卡片上面
                if ((props['component_type'] === 'ArrayCards') && (diff1 > 20 && diff2 < -20)) {
                    moveDirection = Direction.Center;
                    dispatch({
                        type: 'switch_position',
                        params: {
                            type: item['type'],
                            componentProps: item['componentProps'],
                            targetId: id,
                            isIn: true,
                            moveId: item['id']
                        }
                    });
                    return
                }
                dispatch({
                    type: 'switch_position',
                    params: {
                        targetId: id,
                        moveId: item['id'],
                        moveType: item['type'],
                        moveDirection
                    }
                })
            },
        });
        drop(drag(ref));

        //点击的Field控件路径字符串
        const active_path = props.fieldpath;
        const isAcitve = state.active_path === props.fieldpath;
        //active样式
        const styles: React.CSSProperties = !isDragging && isAcitve ? {
            border: '2px solid #1890ff',
        } : {};
        //增加拖拽样式
        styles.opacity = isDragging ? 0.5 : 1;
        //增加hover的样式
        if (isOver) {
            if (hoverState === Direction.Up) {
                styles.borderTop = '2px solid #1890ff';
            } else if (hoverState === Direction.Down) {
                styles.borderBottom = '2px solid #1890ff';
            }
        }

        //点击后，记录当前活跃的组件
        const activate = () => {
            dispatch({
                type: 'activate_controller',
                params: {
                    active_path,
                    className: props.className
                }
            });
        };
        //删除该组件
        const removeThisComponent = () => {
            dispatch({
                type: 'remove_controller',
                params: {
                    active_path
                }
            })
        };
        return (
            <div className='form-item-wrapper' onClick={() => activate()} style={{ ...styles }} ref={ref}>
                {hoverState === Direction.Center && <div className='wrapper-mask' />}
                {isAcitve && <i className='delete-icon' onClick={() => removeThisComponent()} />}
                <DragPreviewImage connect={preview} src={move2_Src} />
                <Form.Item {...props} />

            </div>
        )
    }

    // FormItem 采用自定义组件，是为了实现active效果和右侧属性面板联动比较方便，多包裹一层div，可以更加灵活。（只有模板配置时会用自定义组件，正常情况还是使用@formily/antd的FormItem）
    const FormItem = connect(
        CustomFormItem,
        mapProps(
            (props, field: any) => {
                return {
                    ...props,
                    help: field.selfErrors?.length ? field.selfErrors : undefined,
                    className: field.props.name,
                    fieldpath: field.path.entire,
                    component_type: field.componentType
                }
            }
        )
    )
    //使用drop ref
    const [, dropRef] = useDrop({
        accept: TYPE_ENUM,
        drop: (item: Item, monitor) => {
            if (!monitor.didDrop()) {
                //左侧拖拽到右边
                if (!item['id']) {
                    dispatch({
                        type: 'add_controller',
                        params: item
                    })
                } else {
                    dispatch({
                        type: 'switch_position',
                        params: {
                            moveId: item['id'],
                        },
                    });
                }
            }
            return { item };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    //生成form示例
    let form = useMemo(() => {
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
            ArrayCards
        },
    });

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
                                    {DraggedElementCard('Radio.Group', 'radio-group', '单选框组', { options: [{ label: '示例', value: '示例' }] })}
                                    {DraggedElementCard('Checkbox.Group', 'checkbox-group', '复选框组', { options: [{ label: '示例', value: '示例' }] })}
                                    {DraggedElementCard('Input', 'input', '输入框')}
                                    {DraggedElementCard('DatePicker', 'date-picker', '日期选择')}
                                </div>
                            </Panel>
                            <Panel header="布局组件" key="2">
                                <div className="input-controllers">
                                    {DraggedElementCard('FormGrid', 'layout-grid', '网络布局Grid', {})}
                                    {DraggedElementCard('FormLayout', 'layout-flex', '弹性布局Flex', {})}
                                    {DraggedElementCard('ArrayCards', 'layout-card', '卡片', { title: 'title' })}
                                </div>
                            </Panel>
                            <Panel header="自增组件" key="3">
                                <div className="input-controllers">
                                    {DraggedElementCard('autoAdd', 'auto-add-list', '自增列表')}
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
                            React.useMemo(() => <SchemaField schema={state['schema']} />, [state['schema']])
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