var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    for(let i in data)
    {
        try{
            var cname=data[i].name;
            var latlong=data[i].latlng;
            if(latlong==0) throw   new Error("Lattitude and Longitude Not Available");
            weatherdata(cname,...latlong);
        }
        catch(e){
            console.log("Invalid coordinates: "+cname+': '+e.message);
        }
    }
}
var weatherdata=function(name,lat,lng){
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6cb95bae5fee008c1ca43e5344b43966`;
    var request=new XMLHttpRequest();
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(this.response);
        console.log(`${name}:${data.main.temp}`);
    }
}


// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6cb95bae5fee008c1ca43e5344b43966

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}