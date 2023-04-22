import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log('child component constructor')
    }
    connectedCallback(){
        console.log('child component connectedCallback')
        throw new Error('load chiild failed');
    }
    renderedCallback(){
        console.log('child component renderedCallback')

        
    }
}