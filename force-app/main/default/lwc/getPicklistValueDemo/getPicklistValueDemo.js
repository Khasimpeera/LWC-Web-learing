import { LightningElement,wire } from 'lwc';
import {getObjectInfo,getPicklistValues} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
export default class GetPicklistValueDemo extends LightningElement {

    industryoptions=[];
    selectedindustry='';
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo


    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data, error}){
        if(data){
            console.log(data)
            this.industryoptions=[...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }
    generatePicklist(data){
        return data.values.map(item =>({label:item.label,value:item.value}));
    }
    

    handleChange(event) {
        this.selectedindustry = event.detail.value;
    }

    
    
}