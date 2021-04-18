let arr=[1,2,3,3,2,"h","h",5];

var dupe=function(arr){
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]===arr[j])
            {
                arr.splice(j,1);
            }
        }
    }
    console.log(arr);
}(arr);