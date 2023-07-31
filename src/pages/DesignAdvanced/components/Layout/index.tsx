import * as React from 'react';
import { useRef } from 'react';
import { RecursionField } from '@formily/react';
import { useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import move2_Src from '@/assets/svg/move2.svg';
import { TYPE_ENUM } from '../../util';
import './index.less';

/** Props
* @param schema 接收schema组件
* @param title 标题
*/
type Props = {
    schema?: Record<string, any>,
    title?: string,
};
/** 布局控件 这里只写Card布局组件,其他的可在后续实现*/
const Layout: React.FC<Props> = ({ schema, title }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const type = 'layout-card';
    const [{ isDragging }, drag, preview] = useDrag({
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
        <div className='custom-layout' ref={ref}>
            <div className="custom-layout-title">
                {title}
            </div>
            <div className="custom-layout-body">
                {
                    schema?<RecursionField schema={schema} />:<div className='no-data' />
                }
            </div>
            <DragPreviewImage connect={preview} src={move2_Src} />
        </div>
    )
};

export default Layout;