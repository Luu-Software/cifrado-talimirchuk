import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar("Ingresá una palabra:"); // Preguntar por la palabra a cifrar o descifrar
let claveTexto: string = preguntar("Ingresá la clave:"); // Preguntar por la clave de cifrado (número)
let accion: string = preguntar("¿Qué querés hacer? (cifrar/descifrar):"); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let resultado: string = ''; // COMPLETAR

if(accion==="cifrar"){
    resultado = cifrar(palabra, Number(claveTexto))
}

else if(accion==="descifrar"){
    resultado = descifrar(palabra, Number(claveTexto))
}

console.log(resultado);