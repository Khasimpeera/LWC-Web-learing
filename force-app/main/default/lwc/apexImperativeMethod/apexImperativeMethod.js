import { LightningElement } from 'lwc';
import listAccounts from '@salesforce/apex/AccountController.listAccounts'
import searchAccount from '@salesforce/apex/AccountController.methodName'
export default class ApexImperativeMethod extends LightningElement {
 accounts
 searchAcc
 searchkey=''
 timer
    clickhandler(){
        listAccounts().then(result=>{
            console.log(result);
            this.accounts = result
        }).then(error =>{
             console.log(error)

        })
    }
    handlechange(event){
        window.clearTimeout(this.timer)
        this.searchkey=event.target.value;
        this.timer= setTimeout(()=>{
            this.callApex()
        },2000)
        
    }
    callApex(){
        searchAccount({searchkey :this.searchkey}).then(result =>{
            console.log(result)
            this.searchAcc = result
        }).then(error =>{
            console.log(error)
        })

    }
}