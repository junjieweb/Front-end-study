//引入常量模块
import {INCREMENT, DECREMENT} from "../constant";

export default function count(preState = 0, action) {
    //从action对象中获取type和data
    const {type, data} = action
    switch (type) {
        case INCREMENT://如果是加
            return preState + data
        case DECREMENT://如果是减
            return preState - data
        default://如果是初始化
            return preState
    }
}