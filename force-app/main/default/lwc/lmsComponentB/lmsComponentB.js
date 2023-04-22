import { LightningElement ,wire} from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { subscribe,MessageContext,APPLICATION_SCOPE,unsubscribe} from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {
    receivedMessage
    @wire(MessageContext)
    context
    connectedCallback(){
        this.subscribeMessage();
    }
    
    subscribeMessage(){
        //subscribe(messagecontext,messagechannel ,listener ,subscribeoptions)
        this.subscription =subscribe(this.context,SAMPLEMC , (message)=>{this.handleinput(message)},{scope:APPLICATION_SCOPE})
    }
    handleinput(message){
        this.receivedMessage =message.lmsdata.value ? message.lmsdata.value : 'NO MESSAGE PUBLISHED'
    }
    unsubscribeMessage(){
        unsubscribe(this.subscription)
            this.subscription=null
        
    }
   
}