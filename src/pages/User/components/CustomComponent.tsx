import * as React from 'react';


/** 使用场景：A  功能点：获取患者头部条信息 */
function getPatientAllInfo(userId: number):{userId: number, [key: string]: any} {
    //具体处理逻辑
    return {
        userId: 1,
        name: 'li si',
        gender: 'female',
        job: 'teacher',
        //...
    }
}

/**
* @param username 用户名 
* @param gender 性别
*/
type Props = {
    username: string,
    gender: string,
}
/**
 * @example <Components username= 'wu wu' gender='female' />
 * @fun 功能点：实现自定义组件
 * @scene 列表 & 开立
 */
const Components:React.FC<Props> = ({username='zhang san', gender='female'}) => {
    const user = getPatientAllInfo(1);
    return (
        <div>
            <p>{ username }</p>
            <p>{ gender }</p>
            <p>{ user.job }</p>
        </div>
    )
}

export default Components;