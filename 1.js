let a=[1,2,3,4,5];

var odd=function(a){
    
    for(i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            console.log(a[i]);
        }
    }
}(a);