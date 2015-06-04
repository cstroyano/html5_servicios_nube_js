// Ejemplo de bucle 3

// Función fnVeces()
//	Parámetros:
//		- letra => Letra que debe buscarse dentro de la frase. Por defecto "a"
//		- frase => Frase en la que buscar la letra recibida en el primer parámetro
//	Retorno:
//		Número de apariciones de la letra dentro de la frase
//

function fnVeces( letra, frase )
{
	var i = 0;
	var contador = 0;

	letra = letra || "a";
	frase = frase || "";


	// Recorrer la frase

 	do
	{
		if ( letra === frase[ i++ ] )
		{
			++contador;
		}
	} while( i < frase.length )


	return( contador );
}; // -------- Final de la función fnVeces() --------


// Cuerpo principal

var letra = "e";
var frase = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";

console.log( "\nLa frase [" + frase + "] tiene " + fnVeces( letra, frase ) + " letras '" + letra + "'\n" );



