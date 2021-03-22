addEventListener("load",inicializarEventos,false);
function inicializarEventos(){
    var ob=document.getElementById("getAll");
    ob.addEventListener("click",presionarBoton,false);

    var ob2=document.getElementById("getName");
    ob2.addEventListener("click",presionarBoton2,false);

    var ob3=document.getElementById("getNameFullText");
    ob3.addEventListener("click",presionarBoton3,false);

    var ob4=document.getElementById("getAlphaCode");
    ob4.addEventListener("click",presionarBoton4,false);

    var ob5=document.getElementById("getAlphaCodes");
    ob5.addEventListener("click",presionarBoton5,false);

    var ob6=document.getElementById("getCurrency");
    ob6.addEventListener("click",presionarBoton6,false);

    var ob7=document.getElementById("getLang");
    ob7.addEventListener("click",presionarBoton7,false);

    var ob8=document.getElementById("getCapital");
    ob8.addEventListener("click",presionarBoton8,false);

    var ob9=document.getElementById("getCallingCode");
    ob9.addEventListener("click",presionarBoton9,false);

    var ob10=document.getElementById("getRegion");
    ob10.addEventListener("click",presionarBoton10,false);

    var ob11=document.getElementById("getRegionalBloc");
    ob11.addEventListener("click",presionarBoton11,false);

    var ob12=document.getElementById("getService");
    ob12.addEventListener("click",presionarBoton12,false);

    
}
function presionarBoton(){
    getAll();
}
function presionarBoton2(){
    getName();
}
function presionarBoton3(){
    getNameFullText();
}
function presionarBoton4(){
    getAlphaCode();
}
function presionarBoton5(){
    getAlphaCodes();
}
function presionarBoton6(){
    getCurrency();
}
function presionarBoton7(){
    getLang();
}
function presionarBoton8(){
    getCapital();
}
function presionarBoton9(){
    getCallingCode();
}
function presionarBoton10(){
    getRegion();
}
function presionarBoton11(){
    getRegionalBloc();
}
function presionarBoton12(){
    getService();
}
function getAll(){
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getName(){
    var name= document.getElementById("texto2").value;
    $.ajax({
        
        url: "https://restcountries.eu/rest/v2/name/"+name,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getNameFullText(){
    var name=document.getElementById("texto3").value
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/"+name+"?fullText=true",
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getAlphaCode(){
    var code= document.getElementById("texto4").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/alpha/"+code,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data.id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getAlphaCodes(){
    var code= document.getElementById("texto5").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/alpha?codes="+code,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data.id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getCurrency(){
    var currency= document.getElementById("texto6").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/currency/"+currency,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data.id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getLang(){
    var et= document.getElementById("texto7").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/lang/"+et,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getCapital(){
    var capital= document.getElementById("texto8").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/capital/"+capital,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getCallingCode(){
    var callingcode= document.getElementById("texto9").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/callingcode/"+callingcode,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getRegion(){
    var region= document.getElementById("texto10").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/region/"+region,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getRegionalBloc(){
    var RegionalBloc= document.getElementById("texto11").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/regionalbloc/"+RegionalBloc,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}
function getService(){
    var fields= document.getElementById("fields").value;
    var service=document.getElementById("texto12").value;
    $.ajax({
        url: "https://restcountries.eu/rest/v2/"+service+"?fields="+fields,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept":"application/json",
            
        },
       
        contentType: "application/x-www-form-urlencoded",
        
        success: function (data) {
            
            console.log(data[0].id);
            console.log(JSON.stringify(data));
            
        },
        error: function(error){
            console.log(error);
        }
    });
}