import {obserable, action, computed} from "mobx";

class  Store {
    @obserable email='example';
    @obserable password='';
    @obserable data=[];
}
const store=new Store();
export default store;
