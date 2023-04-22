import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="salesforce Developer"
    title="lwc"
    changeHandler(event){
        this.title = event.target.value
    }

   @track address={
        city: 'Merborne',
        country :'USA'
    }

    trackHandler(event){
        this.address.city= event.target.value     
    }
/* getter in lwc */
    userlist=["John","khasim","Peera"]
    num1=10
    num2=20

    get firstuser(){
        return this.userlist[0]
    } 
    get multify(){
        return this.num1*this.num2
    }

}