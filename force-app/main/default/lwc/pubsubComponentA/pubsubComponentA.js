import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubComponentA extends LightningElement {
    message 
    inputhandler(event){
        this.message = event.target.value;
    }
    publishdata(){
        pubsub.publish('componentA',this.messgae)
        console.log("publish completed")
    }
}