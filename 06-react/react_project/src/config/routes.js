//路由配置文件，项目中所有路由都在此配置
import Login from "../pages/Login";
import UserCenter from "../pages/UserCenter";

const routes = [
    //登录路由
    {
        path: '/login',
        element: <Login/>
    },
    //个人中心路由
    {
        path: "/user",
        element: <UserCenter/>
    }
]

export default routes