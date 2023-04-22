var x=10.3;
console.log(typeof x)

var obj="kad";
console.log(typeof obj)

var arr=["a","b","c"];
console.log(arr)
console.log(arr[1])
arr.push("12")
console.log(arr)

var obj={
    "Name":"khasim",
    "age":30
}
var obj1={
    "place":"vinukonda",
    "age":34,
    "next":"next"

}
var obj2={...obj,...obj1}
console.log(obj2)

var arr1=["a","b","c"]

var arr2=arr1;
arr2.push("12")
console.log(arr1)
console.log(arr2)
//shallow copy
var arr3=["a","b","c"];
var arr4=[...arr3];
arr4.push("34");
console.log(arr3)
console.log(arr4)

//nested copy
var arrobj=[
    {"Name" :"Khasim"},
    {"Name":"salesforce"}
]

console.log(arrobj)
var arrobj1=[...arrobj,{"Name":"India"}];
console.log(arrobj1)
arrobj1[0].Name="World"
console.log(arrobj1)

//destructring
let dest=["Amozon","flipkart"]
let [c1,c2]=dest;
console.log(c1);
console.log(c2);
let name="khaasee"
console.log(`my name is ${name} and`)

let str="my name is khasim and doing work";

let include=str.includes("khasim");
console.log(include)
console.log(str.indexOf("name"))
console.log(str.toLocaleUpperCase())
console.log(str.toLowerCase())
console.log(str.slice(0,5))
let stg="aaaaaaa                           bbbbbbbbbb"
console.log(stg.trim())


// let obj10={
//     name : "khasim",
//     age:23,
//     dob:'23/12/21'
// }

// //object.keys

// console.log(Object.keys(obj10))
// console.log(Object.values(obj10))

// let s1=JSON.stringify(obj10);
// console.log(s1)
// console.log(JSON.parse(s1))
let arra =[3,2,4,5,7,6,9];

let arrMap= arra.map(function(currentItem,index,Array){
    return currentItem*2;
});
console.log(arrMap)

let arrfilter=arra.filter(function(currentItem,index,Array){
    return currentItem>=4;
})
console.log(arrfilter);

    
let arrevery=arra.every(function(currentItem){
return currentItem>4
})
console.log(arrevery);

let arrsome=arra.some(function(currentItem){
    return currentItem>4
    })
    console.log(arrsome);

    let arrsort=arra.sort(function(a,b){
        return b-a
        })
        console.log(arrsort);

        let arrreduce=arra.reduce(function(total,currentItem){
            return total+currentItem
            },0)
            console.log(arrreduce);

function ispromise(data){
    return new Promise(function(resolve,reject){
        if(data==="success"){
            return resolve("resolved successfully");
        }else{
           return  resolve("rejectd successfully")
        }
    })
}
//console.log(ispromise("success"))
ispromise('success').then(function(result){
    console.log(result)
}
)
let element=document.querySelectorAll('div');
console.log(element)
