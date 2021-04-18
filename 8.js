let arr=[1,2,3,4,5];
let k=3;

var rot=function(arr,k){
    for(i=0;i<k;i++)
    {
        arr.unshift(arr.pop());
    }
    console.log(arr);
}(arr,k);