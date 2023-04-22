import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    FirstName ='';
    LastName='';
    greeting = 'Good Morning'
    
    clickhandler(event){
        var input=this.template.querySelector("lightning-input");
        input.forEach(function(element) {
            if(element.name =='fname')
            this.FirstName=element.value;

            else if (element.name=='lname')
            this.LastName =element.value

        },this);
    }
    // handleChange(event){
    //     const field = event.target.name;
    //     if(field === 'fname'){
    //         this.firstName =event.target.value;
    //         //this.greeting = event.target.value;
    //     } else if(field === 'lname'){
    //         this.lastName=event.traget.value;
    //     }
    // }
    // clickhandler(event){
    //     this.greeting = this.template.querySelector("lighnting-input").value
    // }

    // //getter
    // get FULLNAME(){
    //        return `${this.firstName} ${this.lastName}`.toUpperCase(); 
    // }
}