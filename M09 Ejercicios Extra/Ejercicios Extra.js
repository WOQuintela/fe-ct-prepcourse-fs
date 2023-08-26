/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var aa=Object.entries(objeto);
  
   return aa;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   function contarletra(cadena,letra){
      var y=cadena.length;
      var cl=0;
      for(j=0; j<y; ++j){
         if(letra===cadena[j]){ 
            ++cl;
         }
      }
      return cl;
   }
   var objeto={};
   var x=string.length;
   var j=0;
   for(i=0;i<x;++i){
      parcial=string.substr(0, i);
      if(!parcial.includes(string[i])){
        objeto[string[i]]=contarletra(string, string[i]);
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var a=b=c='';
   var v=0;
   var x=string.length;
   for(i=0; i<x; ++i){
      v=string.charCodeAt(i);
      if(v>=65 && v<=90){
         a=a+string[i];
      }
      else{
         b=b+string[i];
      }
   }
   c = a + b;
   return c;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   function invertirPalabra(palabra){
      var y = palabra.length - 1;
      var a = '';
      for(j=y; j>=0; --j){
         a = a + palabra[j];
      }
      return a;
   }

   var vp = frase.split(' ');
   var pinv= [];
   var x= vp.length;
   for(i=0; i<x; ++i){
      pinv[i]=invertirPalabra(vp[i]);
   }
   return pinv.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var s = numero.toString();
   var x = s.length - 1;
   var a = '';
   for(j=x; j>=0; --j){
       a = a + s[j];
   }
   if(s===a){
      return "Es capicua";
   }
   else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var x= string.length;
   var a='';
   for(i=0; i<x; ++i){
      if(string[i]!='a' && string[i]!='b' && string[i]!='c'){
         a=a+string[i];
      }
   }
   return a;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var x = arrayOfStrings.length;
   var y = arrayOfStrings;
   for(i=0; i<x; ++i){
      menor=y[i].length;
      for(j=i; j<x; ++j){
         if(menor > y[j].length){
            menor=y[j].length;
            p=y[j];
            y[j]=y[i];
            y[i]=p;
         }
      }
   }
   
   return y;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var x=array1.length;
   var y=array2.length;
   var a=[];
   for(i=0; i<x; ++i){
      for(j=0;j<y; ++j){
         if(array1[i]===array2[j]){
            a.push(array1[i]);
         }
      }
   }
   
   return a;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
