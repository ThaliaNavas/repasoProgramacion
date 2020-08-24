export class Mobile
{
    public name  : string;
    public model : string ;
    public trademark: string;
    public sdSize: number;
    public color : string ;
    public is5G: boolean;
    public cameraNumber: number;
    public price : number;

    constructor (name:string , model:string,trademark:string, sdSize:number,color:string, is5G: boolean, cameraNumber: number,price:number)
    {
         this.name= name;
         this.model= model;
         this.trademark= trademark;
         this.sdSize= sdSize ; 
         this.color= color;
         this.is5G= is5G;
         this.cameraNumber =cameraNumber;
         this.price= price;

    }
      public getName():string {
          return `${this.name} ${this.model} ${this.trademark} ${this.sdSize} ${this.color} ${this.color} ${this.cameraNumber}`
      
        }
    }       
    
    // let mymobile:Mobile = new Mobile ("")

    //    console.log(milibrary.toString())