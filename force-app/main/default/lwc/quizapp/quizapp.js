import { LightningElement } from 'lwc';

export default class Quizapp extends LightningElement {
    
     selected ={}//object 
 
    myQuestions=[
        {
            id : "Question 1",
            question : "which of the following is not the template looping",
            answers:{
                a: "For:Each",
                b: "for:iterator",
                c: "map"
            },
            CorrectAnswer:"c"
            
        },
        {
            id : "Question 2",
            question : "which of the following is not the Derivative",
            answers :{
                a: "if:true",
                b: "if:false",
                c: "for:each"
            },
            CorrectAnswer:"c"
            
        },
        {
            id : "Question 3",
            question : "what capital city of Ap",
            answers :{
                a: "GUntur",
                b: "BZA",
                c: "Amarvati"
            },
            CorrectAnswer:"c"
            
        }

    ]
    get Allnotselected() {
        return !(Object.keys(selected).length === this.myQuestions.length)
    }
    changehandler(event){
        console.log("name",event.target.name);
        console.log("value",event.target.value);
        const {name,value} =event.target
        this.selected={...this.selected,[name]:value}
    }
    submithandler(){

    }
    resethandler(){

    }
}