import * as React from 'react';
import { useRef, useState } from 'react';
import { RecursionField, observer, useFieldSchema, useField } from '@formily/react';
import { FormGrid as AntdFormGrid } from '@formily/antd';
import { useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import move2_Src from '@/assets/svg/move2.svg';
import { TYPE_ENUM } from '../../util';
import _ from 'lodash';
import './index.less';

/** Props
* @param children 子元素
* @param title 标题
*/
type Props = {
    children?: React.ReactElement,
    title?: string,
};
/** 布局控件：Card布局组件(虽然没有使用到antd的Card组件，但是能保证模板配置的效果同时导出schema后用antd的Card效果一致)*/
const Card: React.FC<Props> = observer((props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const type = 'layout-card';
    const [, drag, preview] = useDrag({
        type,
        item: { type },
        previewOptions: {

        },
        collect: (monitor) => ({
            type,
            isDragging: monitor.isDragging()
        })
    });
    const [, drop] = useDrop({
        accept: TYPE_ENUM,
        drop: (item, monitor) => {
            return { item };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    drop(drag(ref));
    return (
        <div className='custom-layout-card' ref={ref}>
            <div className="custom-layout-title">
                {props.title}
            </div>
            <div className="custom-layout-body">
                {
                    props.children || <div className='no-data' />
                }
            </div>
            <DragPreviewImage connect={preview} src={move2_Src} />
        </div>
    )
});

type FormGridProps = {
    children?: React.ReactNode;
}
/** 布局控件： 网络布局*/
const FormGrid: React.FC<FormGridProps> = observer((props) => {
    //field
    const field = useField();
    //添加一个网络列
    const addOneGridColumns = () => {
        console.log('添加一个网络列', field.path.entire)
    }

    //布局组件只能拖拽
    const [, dragRef, previewRef] = useDrag({
        type: 'layout-grid',
        item: { type: 'layout-grid' },
        previewOptions: {

        },
        collect: (monitor) => ({
            type: 'layout-grid',
            isDragging: monitor.isDragging()
        })
    });
    return (
        <div className='custom-layout-grid' ref={dragRef}>
            <AntdFormGrid>
                {
                    props.children
                }
            </AntdFormGrid>
            <div className="custom-layout-action">
                <span onClick={() => addOneGridColumns()}>添加网格列</span>
            </div>
            <DragPreviewImage connect={previewRef} src={move2_Src} />
        </div>
    )
});

type GridColumnProps = {
    children?: React.ReactNode;
}
/** FormGrid.GridColumn 重定义，添加拖拽和样式 */
const GridColumn: React.FC<GridColumnProps> = observer((props) => {
    //里面的网络列可以拖拽，且可以被放置
    const ref = useRef<HTMLDivElement | null>(null);
    const type = 'grid-item';
    const [, drag, preview] = useDrag({
        type,
        item: { type },
        previewOptions: {

        },
        collect: (monitor) => ({
            type,
            isDragging: monitor.isDragging()
        })
    });
    const [, drop] = useDrop({
        accept: TYPE_ENUM.concat(['grid-item']),
        drop: (item, monitor) => {
            /** 有两种情况
             *  1. 内部grid-item交换位置
             *  2. 外面的组件插入到特定的grid-item前面/后面
             */
            return { item };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    drop(drag(ref));

    //活跃点击的grid item
    const activateGridItem = () => {
        //将当前点击的FormItem的路径保存到state中
    }
    //删除某个下标的grid item
    const deleteGridItem = (e: React.SyntheticEvent<HTMLDivElement>) => {
        //阻止事件冒泡
        e.stopPropagation()
        //如果删除项为当前active项,需要清除活跃标识

        //修改schema结构
    }
    //获取className，根据路径比对得知是否是活跃的
    const classNames = (path: string, activePath: string) => path === activePath ? "custom-layout-grid-item active" : 'custom-layout-grid-item';
    return (
        <div className='custom-layout-grid-item active' ref={ref} onClick={() => activateGridItem()}>
            <AntdFormGrid.GridColumn>
                {
                    props.children ? props.children : <div className="placeholder">
                        网络列
                        <div className="delete-icon" onClick={(e) => deleteGridItem(e)}/>
                    </div>
                }
            </AntdFormGrid.GridColumn>
            <DragPreviewImage connect={preview} src={move2_Src} />
        </div>
    )
});

(FormGrid as any).GridColumn = GridColumn;

export {
    Card,
    FormGrid
};