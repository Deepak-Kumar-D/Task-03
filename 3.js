let n=[1,2,3,4];

var add=function(n){
    let sum=0;
    for(i=0;i<n.length;i++)
    {
        sum=sum+n[i];
    }
    console.log(sum);
}(n);