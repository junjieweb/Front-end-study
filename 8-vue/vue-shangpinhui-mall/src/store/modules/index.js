//收集所有vuex的子模块
import home from "@/store/modules/home";
import user from "@/store/modules/user";
import search from "@/store/modules/search";
import detail from "@/store/modules/detail";
import shopcart from "@/store/modules/shopcart";
import trade from '@/store/modules/trade'

export default {
    home,
    user,
    search,
    detail,
    shopcart,
    trade
}