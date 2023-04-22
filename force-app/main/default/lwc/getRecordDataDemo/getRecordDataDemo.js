import { LightningElement,wire,api } from 'lwc';
import {getRecord,getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import OWNER from '@salesforce/schema/Account.Owner.Name';
import NAME from '@salesforce/schema/Account.Name';
import ANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDataDemo extends LightningElement {
    @api recordId
    name
    industry
    owner
    revenue
    @wire(getRecord, {recordId:'$recordId',fields:[NAME, OWNER,INDUSTRY,ANNUALREVENUE]})
     accountHandler({data}){
         if(data){
             console.log(data)
            //  this.name = getFieldValuedata.fields.Name.displayValue ?data.fields.Name.displayValue :data.fields.Name.value;
            //  this.industry =data.fields.Industry.displayValue ? data.fields.Industry.displayValue :data.fields.Industry.value;
            //  this.owner =data.fields.Owner.displayValue ? data.fields.Owner.displayValue :data.fields.Owner.value;
            this.name=getFieldValue(data,NAME);
            this.industry=getFieldValue(data,INDUSTRY);
            this.owner=getFieldValue(data,OWNER);
            this.revenue=getFieldDisplayValue(data,ANNUALREVENUE)
            }
        }

}