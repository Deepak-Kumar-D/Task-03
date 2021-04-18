let arr=["ADDA","gog","deep","peep"];

var palin=function(arr){
    let str=[];
    for(i=0;i<arr.length;i++)
    {
        let s=arr[i].split("").reverse().join("");
        if(arr[i]===s)
        {
            str.push(arr[i]);
        }
    }
    console.log(str.join(","));
}(arr);