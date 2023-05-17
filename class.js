class Persona{
nombre='';
codigo='';
frase='';

constructor(nombre='sin nombre',codigo='sin codigo',frase='sin frase') {

        if (!nombre) throw Error("Necesitamos el nombre");
            this.nombre=nombre;
            this.codigo=codigo;
            this.frase=frase;
            }

        }
const spiderman = new Persona('Peter Parker','Spider','Un gran poder implica una gran Responsabilidad');
const iroman = new Persona('Tony Stark','Ironman','Soy el hombre de hierro');
console.log(spiderman);
console.log(iroman);
