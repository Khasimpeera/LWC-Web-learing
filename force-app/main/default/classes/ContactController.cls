public with sharing class ContactController {
      @AuraEnabled(cacheable=true)
      public static List<Contact> getContacts(string accId){
        try {
         return [select AccountId,Id,FirstName,LastName,Phone, Email FROM Contact 
           where AccountId =:accId
           WITH SECURITY_ENFORCED]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}   