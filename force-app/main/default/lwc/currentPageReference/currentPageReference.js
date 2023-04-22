import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
export default class currentPageReference extends LightningElement {
 @wire(CurrentPageReference)
 pageref;

 get pageReference(){
    return this.pageref ? JSON.stringify(this.pageref,null,2) :''
 }
}