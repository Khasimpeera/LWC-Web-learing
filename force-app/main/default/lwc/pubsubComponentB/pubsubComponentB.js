import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubComponentB extends LightningElement {
    message;
    connectedCallback(){
        this.callsubscribe();
        console.log("conencetd callback called")
    }
    callsubscribe(){
        pubsub.subscribe('componentA',(message)=>{
            this.message=message
        });
        console.log("subscribe received data")
    }
    
}