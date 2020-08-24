function sumaDeCaracteres(nombres:string[]){

    let resultado:number =0;

    if(nombres == null){
        return resultado;
    }

    for(let i =0; i<nombres.length;i++)
    {
        resultado += nombres[i].length;
    }
    return resultado;
}

let contabilizandoNombres:string[]=["Ana","Carlos","Maximiliano"];

console.log(sumaDeCaracteres(contabilizandoNombres));

