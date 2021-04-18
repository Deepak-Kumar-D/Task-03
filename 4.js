let n=[23,17,191,7];

var prime=function(n){
    
    for(i=0;i<n.length;i++)
    {
        for(j=2;j<=n[i];j++)
        {
           if(n[i]%j===0 && n[i]!=j)
           {
               break;
           }
           else if(n[i]===j)
           {
               console.log(n[i]);
           }
        }
    }
}(n);