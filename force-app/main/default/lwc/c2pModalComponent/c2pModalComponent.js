import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    modalhandleOkay(){
        const myevet= new CustomEvent('show',{
            bubbles :true,
            detail :{
                msg :"This is from the child Modal"
            }
        });
        this.dispatchEvent(myevet)
    }
    footerhandler(){
        console.log("footer handler called  -bubbles top");
    }
}