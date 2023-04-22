import { LightningElement ,api} from 'lwc';

export default class LwcChildComp extends LightningElement {
    previoushandler(){
        this.dispatchEvent=new CustomEvent('previous');
    }
    nextHandler(){
        this.dispatchEvent=new CustomEvent('next');
    }
}