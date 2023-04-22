import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObject extends NavigationMixin(LightningElement) {
    navigateToObjectdefault(){
        const defalutvalue =encodeDefaultFieldValues({
            FirstName :'Zero',
            LastName :'Hero',
            LeadSource  :'Other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName :'new'
            },
            state :{
                defaultFieldValues:defalutvalue
            }

        })
    }
    navigateToObjectlistview(){
        this[NavigationMixin.Navigate]({
            type :'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName :'list'
            },
            state :{
                filterName :'Recent'

            }
        })
    }
    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type :'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName :'home'
            }
        })
    }
    navigateToViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g00000rOQXjAAO',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    navigateToEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g00000rOQXjAAO',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}