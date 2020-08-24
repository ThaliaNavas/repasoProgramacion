import { Mobile } from './claseMobile'

let Nokia3210: Mobile = new Mobile ("Nokia 3210", "3210","Nokia",3210,"black",false,3210,800)

let iphone3G: Mobile = new Mobile ("iphone3G","3","iphone3G",3,"white",true,3,1000)

let SamsungGalaxy10: Mobile = new Mobile ("SamsungGalaxy10", "galaxy10","SamsungGalaxy10",3,"white",false,10,500)
console.log(Nokia3210)

Nokia3210.cameraNumber= 4
Nokia3210.is5G= true


console.log(Nokia3210)
// console.log(iphone3G)
// console.log(SamsungGalaxy10)