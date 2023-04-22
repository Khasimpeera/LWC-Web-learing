import { LightningElement,api ,wire} from 'lwc';


import GETACCOUNTS from '@salesforce/apex/AccountController.getAccountsByIndustry';

export default class LwcParentComp extends LightningElement {
   // @api recordId;  
    // @wire(getRecord ,{recordId :'$recordId' , fields :[NAME]})
    // records;
    searchKey = '';
    contacts;
    error;

    handleKeyChange(event) {
        this.searchKey = event.target.value;
    }
    handleLoad(){
        GETACCOUNTS({industry :this.searchKey})
        .then(result =>{
            this.accounts=result;
        })
        .catch(error =>{
            this.error=error
        })
    }


    
        
    }
  
