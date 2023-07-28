import type { XYCoord } from 'dnd-core';
import * as React from 'react';
import { useState, useRef } from 'react';
import { useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import { connect, mapProps } from '@formily/react';
import { Form } from 'antd';
import _ from 'lodash';
import move2_Src from '@/assets/svg/move2.svg';
import { Direction } from '../../type';
import { TYPE_ENUM } from '../../util';


type Props = {
    isActive: boolean;
    component_type: string;
    className: string;
}
/** 自定义的Form Item */
const CustomFormItem: React.FC<Props> = (props) => {
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
                // dispatch({
                //     type: 'switch_position',
                //     params: {
                //         type: item['type'],
                //         componentProps: item['componentProps'],
                //         targetId: id,
                //         isIn: true,
                //         moveId: item['id']
                //     }
                // });
                return
            }
            // dispatch({
            //     type: 'switch_position',
            //     params: {
            //         targetId: id,
            //         moveId: item['id'],
            //         moveType: item['type'],
            //         moveDirection
            //     }
            // })
        },
    });
    drop(drag(ref));

    //active样式
    const styles: React.CSSProperties = !isDragging && props.isActive ? {
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
        // dispatch({
        //     type: 'activate_controller',
        //     params: {
        //         active_path,
        //         className: props.className
        //     }
        // });
    };
    //删除该组件
    const removeThisComponent = () => {
        // dispatch({
        //     type: 'remove_controller',
        //     params: {
        //         active_path
        //     }
        // })
    };
    return (
        <div className='form-item-wrapper' onClick={() => activate()} style={{ ...styles }} ref={ref}>
            {hoverState === Direction.Center && <div className='wrapper-mask' />}
            {props.isActive && <i className='delete-icon' onClick={() => removeThisComponent()} />}
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
                component_type: field.componentType,
                isActive: props.isActive
            }
        }
    )
)

export default FormItem;