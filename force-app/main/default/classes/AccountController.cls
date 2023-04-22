public with sharing class AccountController {
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts(){
        return [select Id,Name,Industry FROM Account LIMIT 10];
    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccountsByIndustry(string industry){
        string key='%'+industry+'%';
        return [select Id,Name,Industry FROM Account where Industry =:key];
    }
    @AuraEnabled
    public static List<Account> listAccounts(){
        return [select Id,Name FROM Account LIMIT 5];

    }
    @AuraEnabled
    public static List<Account> methodName(string searchkey){
        string key= '%'+searchkey+'%';
        return [select Id,Name ,Type FROM Account where Name LIKE :key LIMIT 5];
    }

}