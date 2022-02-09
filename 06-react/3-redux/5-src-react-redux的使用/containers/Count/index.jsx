/*
	准备一个容器组件，该组件主要负责：和redux进行数据的交互，
	可以随意的使用redux的API，和UI组件是父子关系
*/

//引入Count的UI组件
import CountUI from '../../components/Count'
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action";

//引入connect用于连接UI与redux，且connect()()可以生成容器组件
import {connect} from "react-redux";

//mapStateToProps用于给UI组件映射redux中的状态，通过props传递
function mapStateToProps(state) {
    return {sum: state}
}

//借助mapDispatchToProps传递操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        add: number => dispatch(createIncrementAction(number)),
        reduce: number => dispatch(createDecrementAction(number)),
        addAsync: number => dispatch(createIncrementAsyncAction(number))
    }
}

//创建出来一个容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

//暴露容器组件
export default CountContainer