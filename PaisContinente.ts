let europa:string[] = ["Suiza","Berlin","España","Italia"];
let america:string[] = ["Ecuador", "Peru", "Colombia","Costa Rica"];
let asia:string[] = ["tailandia", " Japon", "corea", " Bali"];
let africa:string[]= ["Marruecos", "Argelia","Cabo verde", "Egipto"];
​
function verSiPaisContinente(pais:string, paises:string[]) {
​
    let cantPaises = paises.length;
​
    for(let i=0; i< cantPaises; i++){
        
        if(pais == paises[i]){
            return true;
        }
    }
    return false;
}
​
​
function getContient(pais:string) {
    let continente = "Ninguno";
​
    if (verSiPaisContinente(pais,europa)) {
       continente = "Europa";
    } else if (verSiPaisContinente(pais,america)) {
       continente = "America";
    } else if  (verSiPaisContinente(pais,asia)) {
       continente = "Asia";
    } else if (verSiPaisContinente(pais,africa)) {
       continente = "Africa";
    }
​
    return continente;
}
​
​
console.log(getContient("Argentina"))