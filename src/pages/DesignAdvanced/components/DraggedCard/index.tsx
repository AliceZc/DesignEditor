import * as React from 'react';
import { useDrag } from 'react-dnd'


/** 生成拖拽的jsx, 仅限于左侧卡片
* @param type 控件类型
* @param styleName 控件的样式名
* @param description 控件描述
*/
type Props = {
    type: string, 
    styleName: string, 
    description: string, 
}
const DraggedCard: React.FC<Props> = ({type, styleName, description}) => {
    const [, drag] = useDrag({
        type,
        item: { type, elementType: 'Card' },
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
};

export default DraggedCard;