//该文件是专门用于创建Count组件相关的action

import {INCREMENT, DECREMENT} from './constant'

export function createIncrementAction(number) {
    return {type: INCREMENT, data: number}
}

export function createDecrementAction(number) {
    return {type: DECREMENT, data: number}
}