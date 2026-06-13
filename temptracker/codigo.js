const claveApi = "f747025217d947068d731658261306" ;
const idioma ="es";
const inpCiudad =document.getElementById("input-ciudad");

async function obtenerclima(){
    const ciudad =inpCiudad.value;
    if(!ciudad){
        alert("por fa ingrese una ciudad");

    }
    const apiClimaActual=`https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
const response=await fetch(apiClimaActual);
const data = await response.json();
mostrarclima(data);
}
function mostrarclima(data){
    document.querySelector(".clima-icono").src=data.current.condition.icon;
    document.querySelector(".clima-texto").innerHTML=data.current.condition.text;
    document.querySelector(".temp").innerHTML=data.current.temp_c+ "c";
    document.querySelector(".ciudad").innerHTML=data.location.name;
    document.querySelector(".humedad").innerHTML=data.current.humidity +"%";
    document.querySelector(".viento").innerHTML=data.current.wind_kph +"km/h";
    
     document.getElementById("clima-contenedor").style.display="block";
     

     }
