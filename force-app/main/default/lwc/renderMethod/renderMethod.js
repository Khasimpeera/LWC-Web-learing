import { LightningElement } from 'lwc';
import signupTemplate from './singupTemplate.html'
import signinTemplate from './signinTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {

    selectedbtn='';
    render(){
        return this.selectedbtn ==='Sign Up' ? signupTemplate :
        this.selectedbtn ==='Sign In' ? signinTemplate :
        renderTemplate

    }
    handlechange(event){
        this.selectedbtn =event.target.label;
        
    }
    submitHandler(event){
        console.log(`${event.target.label} Successfully`)
    }
}