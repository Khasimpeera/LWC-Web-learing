import { api, LightningElement} from 'lwc';

export default class ChildParentComponent extends LightningElement {
    @api greeting='default value'  
    @api number
    @api cardHeading
    @api isValid
    // @api
    // get itemName(){
    //     return this.greeting ;
    // }
    // set itemName(value){
    //     this.greeting = value.toUpperCase();
    // }
    


}