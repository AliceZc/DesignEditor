import _ from 'lodash';
import { State, Action } from './type';

/** 根据Path 操作对应结点的schema结构 
 * @param schema 原始的schema结构
 * @param path 操作的结点，例如a.b.c
 * @param actionFlag 操作  0 删除  1添加属性 2交换位置
 * @param action.propertyName 属性名
 * @param action.propertyValue 属性值
*/
export const changeSchema = (schema: Record<string, any>, path: string, actionFlag: number, options?: unknown) => {
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
export const getSchemaNodeProperties = (schema: Record<string, any>, path: string) => {
    const originSchema = _.cloneDeep(schema);
    //根据路径.生成数组
    const splitPath = path.split('.');
    let node = originSchema;
    splitPath.forEach(item => {
        node = node['properties'][item];
    })
    return { ...node }
}


/** 控件类型 */
export const TYPE_ENUM = ['Radio.Group', 'Checkbox.Group', 'Input', 'DatePicker', 'FormLayout', 'FormGrid', 'ArrayCards'];


/** 寻找Object.entries之后的数组下标
 *  @param array 数组
 *  @param key
 */
export const findIndex = (array: [string, any][], key: string): number => {
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


/** 状态管理 */
 //使用reducer控制更改schema
 export const  reducer = (state: State, action: Action) => {
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
          
            return { ...cloneState, schema, maxNum: maxNum + 1 };
        }
        //删除控件
        case 'remove_controller': {
           
        }
        //交换位置
        case 'switch_position': {

            return { ...cloneState, schema };
        }
        //添加控件属性props
        case 'add_controller_property': {
          
        }
        //点击控件
        case 'activate_controller': {
            
            return { ...cloneState, active_path: action.params.active_path, propertySetting: {} };
        }
        default:
            throw new Error('没有该action的定义');
    }
}