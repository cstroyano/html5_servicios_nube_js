// Ejemplo de paso de parámetros

var i = 0;

for( i = 0; i < process.argv.length; ++i )
{
	console.log( "Parámetro " + i + ": " + process.argv[ i ] );
}
