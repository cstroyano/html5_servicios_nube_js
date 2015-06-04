// Flujos de entrada y salida

var strCadena = "";

console.log( "\nPrueba de flujos:" );

process.stdin.resume(); // Activar la entrada por stdin

process.stdin.setEncoding( "ascii" );

process.stdin.on( "data", function( linea ) {
		process.stdout.write( "Dentro del manejador: " + linea );

		if ( linea === "exit\n" ) {
			process.stdout.write( "Salir\n" );
			process.exit();
		}
} );

console.log( "\nFuera del manejador" );
process.stdout.write( strCadena );
