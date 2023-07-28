import * as React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDrag, useDrop } from 'react-dnd';

/** 设计器 */
const FormilyDesign: React.FC = () => {
    const [dragCollect, dragRef] = useDrag({
        type: 'drag',
        item: { type: 'drag' },
        end: (item, monitor) => {
            console.log('drag:', item);
        },
        collect: (monitor) => ({
            type: 'drag',
            isDragging: monitor.isDragging()
        })
    });
    const [dropCollect, dropRef] = useDrop(() => ({
        accept: ['drag'],
        drop: (item, monitor) => {
            console.log('drop:', item)
            if (!monitor.didDrop()) {

            }
            return { item };
        },
        collect: (monitor) => ({
            type: 'panel',
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }));
    return (
        <div>
            <div style={{ width: 80, height: 80, background: 'yellow', cursor: 'pointer' }} ref={dragRef}>drag source</div>
            <div style={{ width: 800, height: 800, border: '1px solid red' }} ref={dropRef}>drop container</div>
        </div>
    )
}

export default () => <div><DndProvider backend={HTML5Backend}><FormilyDesign /></DndProvider></div>;

