if (estaEntreFechas( fecha, "21/03", "20/04")){
    return 'Aries';    
}    
else if (estaEntreFechas(fecha, "21/04", "20/05")){
    
function estaEntreFechas(fecha:Date, primera:string, segunda:string){
 
    let anno = fecha.getFullYear();
    let fechaPrimera:Date = new Date(primera+"/"+anno);
    let fechaSegunda:Date = new Date(segunda+"/"+anno);
​
    return (fecha.valueOf() >= fechaPrimera.valueOf()) && (fecha.valueOf() <= fechaSegunda.valueOf());
}
​
​
​
function getZodiacName(fechaString:string) {
    
    let fecha = new Date(fechaString);
     'Tauro';    
    

else if (estaEntreFechas (fecha, "21/05", "20/06")) {
    return 'Géminis';    
}    
else if (estaEntreFechas(fecha, "21/06", "20/07")) {
    return 'Cáncer';    
}    
else if (estaEntreFechas(fecha, "21/07", "20/08")) {     
    return 'Leo';   
}
else if (estaEntreFechas(fecha, "21/08", "20/09")) {
    return 'Virgo';    
}    
else if (estaEntreFechas(fecha, "21/09", "20/10")) {
    return 'Libra';    
}    
else if (estaEntreFechas(fecha, "21/10", "20/11")) {     
    return 'Escorpio';   
}
else if (estaEntreFechas(fecha, "21/11", "20/12")) {
    return 'Sagitario';    
}    
else if (estaEntreFechas(fecha, "21/12", "20/01")) {
    return 'Capricornio';
}    
else if (estaEntreFechas(fecha, "21/01", "20/02")) {
    return 'Aquario';    
}    
else if (estaEntreFechas(fecha, "21/02", "20/03")) {     
    return 'Piscis';   
}
else {
    return 'None zodiac symbol detected.';
}
}
​
​}
