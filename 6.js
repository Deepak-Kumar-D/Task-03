let arr1=[1,2];
let arr2=[4,5];

var med=function(arr1,arr2){
    let a=arr1[arr1.length-1];
    let b=arr2[0];
    let median=(a+b)/2;
    console.log(median);
}(arr1,arr2);