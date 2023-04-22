import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import AR_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import IND_FIELD from '@salesforce/schema/Account.Industry';
import EMAIL_FIELD from '@salesforce/schema/Account.Email_Id__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordFormLds extends LightningElement {
    accountobject =ACCOUNT_OBJECT;
    MyFields=[NAME_FIELD,AR_FIELD,IND_FIELD,EMAIL_FIELD];
    handlesuccess(event){
        const showToast = new ShowToastEvent({
            title:"Account created",
            message :"Record Saved Successfully"+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(showToast)
    }
}