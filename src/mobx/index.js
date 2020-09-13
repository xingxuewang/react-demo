import {observable,computed, action} from 'mobx';

class Counter {
    name = 'counterapp'
    @observable count  = 100
    @computed get doubleCont(){
        return this.count * 2
    }
    @action.bound increment(){
        this.count += 1;
    }
    @action.bound decrement(){
        this.count -= 1;
    }
}
export default new Counter()