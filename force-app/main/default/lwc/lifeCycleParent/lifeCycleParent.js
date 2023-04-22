import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isVisibleChild=false;
    constructor(){
        super()
        console.log('Parent component constructor')
    }
    connectedCallback(){
        console.log('parent component connectedCallback')
    }
    renderedCallback(){
        console.log('parent component renderedCallback') 
    }

    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack)
    }
    // name
    // changehandler(event){
    //     this.name=event.target.value;
    // }
    clickhandler(event){
        this.isVisibleChild =!this.isVisibleChild
    }

}