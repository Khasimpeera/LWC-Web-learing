import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    areDataVisible=false;
    handlechange(event){
        this.areDataVisible =event.target.checked;
    }

}