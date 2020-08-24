export class Punto{
    private x:number;
    private y:number;
​
    constructor (x:number, y:number){
        this.x = x
        this.y = y
    }
​
    toString():string{
        return '"(' + this.x + ','+ this.y + ')"'
    }
​
    public getX():number{
        return this.x
    }
    public getY():number{
        return this.y
    }
    public setX(x){
        this.x = x
    }
    public setY(y){
        this.y = y
    }
    distanciaAlOrigen():number{
        return Math.sqrt((Math.pow((this.x), 2) + (Math.pow((this.y),2))))
    }
    
​
    distanciaAlPunto(otroPunto:Punto):number{
        return Math.sqrt((Math.pow((this.x-otroPunto.x), 2) + (Math.pow((this.y-otroPunto.y),2))))
    }
​
    calcularCuadrante():number{
        if (this.x == 0 || this.y == 0){
            return 0
        }else if(this.x > 0 && this.y >0){
            return 1
        }else if(this.x <0 && this.y>0){
            return 2
        }else if(this.x<0 && this.y<0){
            return 3
        }else{
            return 4
        }
    }
​
    calcularMasCercano(puntos:Punto[]):Punto{
        let PuntoX:Punto = new Punto(0,0)
        let puntoPrueba:number = this.distanciaAlPunto(puntos[0])
        for (let i=0; i<puntos.length;i++){
            if (this.distanciaAlPunto(puntos[i])<= puntoPrueba){
                puntoPrueba = this.distanciaAlPunto(puntos[i])
                PuntoX = puntos[i]
            }
        }
        return PuntoX
    }
}
​
​
let Punto1:Punto = new Punto (5,6)
let punto2:Punto = new Punto (9,6)
let punto3:Punto = new Punto (5,7)
let array1:Punto[] = [punto3,punto2]
console.log(Punto1.toString())
console.log(Punto1.distanciaAlOrigen())
console.log(Punto1.distanciaAlPunto(punto2))
console.log(Punto1.calcularCuadrante())
​
console.log(Punto1.calcularMasCercano(array1))