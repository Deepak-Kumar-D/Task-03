let s=["add","minus","subtract","divide"];

var tcase=function(s){
    let arr=[];
    for(i=0;i<s.length;i++)
    {
       let str=s[i].split("");
       str=str[0].toUpperCase();
       arr.push(str+s[i].substring(1));
    }
    console.log(arr);
}(s);