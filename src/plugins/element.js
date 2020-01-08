import Vue from 'vue';
import { Button, MessageBox, Container, Aside, Header, Main } from 'element-ui';

Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
