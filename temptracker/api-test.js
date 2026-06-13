const claveApi = "f747025217d947068d731658261306" ;
const idioma ="es";
const ciudad ="huancayo";
const apiClimaActual= `https://api.weatherapi.com/v1/current.json?
q=${ciudad}&lang=${idioma}&key=${claveApi}`;
const response = await fetch(apiClimaActual);
let data =await response.json();

console.log(data.location.localtime);