import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
     carousalData=[
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."
            
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description :"Second card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
             header : "Third Card",
             description : "Third card description."
        }
    ]

    toggleProgress(event){
        this.toggleProgress
    }
    percentage=10
    percentProgress(event){
        this.percentage = event.target.value;
    }
    showModal=false;
    msg;
    clickhandler(){
        this.showModal=true;
    }
    modalclose(event){
        this.msg =event.detail.msg
        this.showModal=false;
    }


}