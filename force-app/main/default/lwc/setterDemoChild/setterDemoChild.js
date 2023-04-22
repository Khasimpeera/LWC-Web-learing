import { LightningElement ,api} from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userData
    @api 
    get detail(){
        return this.userData
    }
    set detail(data){
        let newage =data.age*2
        this.userData = {...data,age:newage}

    }
}