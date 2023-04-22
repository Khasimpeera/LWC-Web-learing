import { LightningElement } from 'lwc';

export default class HelloConditionalRender extends LightningElement {
    isVisible=false;
    handleClick(){
        this.isVisible=true;
    }

    handleinput(event){
        this.name= event.target.value
    }

    get inputmethod(){
        return this.name === 'hello'
    }
}
