//该文件是专门用于创建Count组件相关的action

import {INCREMENT, DECREMENT} from '../constant'

export const increment = number => ({type: INCREMENT, data: number})

export const decrement = number => ({type: DECREMENT, data: number})

export function incrementAsync(number) {
    //异步action中，往往都会开启一个同步action
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(number))
        }, 500)
    }
}