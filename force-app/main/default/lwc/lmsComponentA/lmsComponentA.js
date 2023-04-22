import { LightningElement ,wire} from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext,publish } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {
    inputtext;
    @wire(MessageContext)
    context

    publishmessage(){
        const message ={
            lmsdata :{
                value :this.inputtext
            }
           
        }
        
            //publish(messagecontext,messagechannel,message)
            publish(this.context,SAMPLEMC,message)
        
    }
    
    handleinput(event){
        this.inputtext =event.target.value
    }
}