import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToHome extends NavigationMixin(LightningElement) {

    navigateToHome(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__namedPage',
            attributes:{ 
                pageName:'home'
            }
        })
    }
    navigateTochatter(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__namedPage',
            attributes:{ 
                pageName:'chatter'
            }
        })
    }
    navigateToObject(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes :{
                objectApiName:'Contact',
                actionName :'new'
            }
        })
    }
   
}