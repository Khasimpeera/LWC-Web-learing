import { LightningElement,wire } from 'lwc';
import {getObjectInfo,getObjectInfos} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId;
    objectapi;
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            this.defaultRecordTypeId =data.defaultRecordTypeId;
            this.objectapi =data.apiName;
        }
        if(error){
            console.log(error);
        }
    }

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]

    objectInfos
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfosHandler({data}){
        if(data){
            console.log(data)
            this.objectInfos = data
        }
    }
    

}