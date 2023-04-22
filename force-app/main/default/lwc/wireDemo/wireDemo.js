import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemo extends LightningElement {
    userId = Id

    userDetail
    @wire(getRecord, {recordId:'0055g00000DciBRAAZ', fields})
    userDetailHandler({data,error}){
        if(data){
            this.userDetail =data.fields;
        }
        if(error){
            console.log(error);
        }
    }
    @wire(getRecord, {recordId:'0055g00000DciBRAAZ', fields})
    userdetailsHandler;
    
}