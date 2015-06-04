// Ejemplo de bucle ForIn

var objX = { a: 1, b: 2, c: "Hola", d: "Mundo", e: true };

for( var i in objX )
{
	console.log( i + " = " + objX[ i ] );
}