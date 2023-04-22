import { LightningElement,wire } from 'lwc';
import getAccountsByIndustry from '@salesforce/apex/AccountController.getAccountsByIndustry'
export default class WireApexWithParams extends LightningElement {
    selectedIndustry=''
@wire(getAccountsByIndustry,{industry:'$selectedIndustry'})
getIndustry

get options() {
    return [
        { label: 'Energy', value: 'Energy' },
        { label: 'Banking', value: 'Banking' },
        { label: 'Agriculture', value: 'Agriculture' },
        { label: 'Communications', value: 'Communications' },
    ];
}
handleChange(event){
    this.selectedIndustry =event.target.value;
}
}