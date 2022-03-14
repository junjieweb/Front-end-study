import Vue from 'vue';
import {MessageBox, Message, Pagination, Button, Input} from 'element-ui';
/*
UI组件库的2种组件
1. 标签组件: 通过写其对应的组件标签来使用(在使用前必须先注册)   如: Pagination
2. 函数/对象组件: 执行函数或调用对象的方法来显示特定UI效果  如: MessageBox/Message
*/
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.use(Pagination);
Vue.use(Button);
Vue.use(Input);