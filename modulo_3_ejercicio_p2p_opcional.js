// Modulo 3 - Ejercicio P2P opcional opcional
// node modulo_3_ejercicio_p2p_opcional.js <dest> <f1> <f2> .. <fn>
//
// El programa debe crear un fichero <dest> concatenando los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.
//


// Declaración de variables

var fs = require( "fs" );	// Importa el módulo fs
var i = 0;					// Contador de bucle
var streamSalida;			// Variable para controlar el stream de salida
var streamEntrada;			// Variable para controlar el stream de entrada

// Función para hacer una gestión básica del error de los stream
var gestionError = function( err ) { console.log( "*> ¡Error! - " + err ); };


// Comprobar los parámetros. Si son menos de 4 faltan parámetros

if ( process.argv.length < 4 )	// Faltan parámetros
{
	console.log( "\nError de sintaxys\n\t" + process.argv[ 0 ] + " " + process.argv[ 1 ] + " <destino> <origen1> ...\n" );
	process.exit();
}
else {
	console.log( "\nNúmero de parámetros recibido: " + process.argv.length );
}

// Llamada correcta - Se abren los flujos de salida para hacer todas las salidas al mismo fichero

streamSalida = fs.createWriteStream( process.argv[ 2 ] ).on( "error", gestionError );


// Bucle para tratar el resto de archivos

i = 3;	// A tres porque es el índice del primer archivo de entrada

do {
	console.log( "Procesando: " + process.argv[ i ] );

	streamEntrada = fs.createReadStream( process.argv[ i ] ).on( "error", gestionError );	// Abrir stream al arhivo de entrada
	streamEntrada.pipe( streamSalida )		// Conectar los flujos

	++i;
} while( i < process.argv.length );

console.log( "\nFinal proceso\n" );
