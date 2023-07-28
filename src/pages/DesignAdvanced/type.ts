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

export {
    Direction,
    State,
    Action,
    EntryArray
}