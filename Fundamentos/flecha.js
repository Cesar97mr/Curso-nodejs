/*function sumar (a,b){
    return a + b ;
}*/
let sumar = (a,b)=> a + b;

let saludar = () => "hola mundo";

let saludo = nombre => `Hola ${nombre}`;

console.log(saludo("Cesar"));





console.log(sumar(10,20));

let deadpool = {
    nombre:'Wade',
    apellido:'Wingston',
    poder : 'Regeneracion',
    getNombre:() =>{
     return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre())