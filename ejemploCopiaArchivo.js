// Ejemplo de copia de archivo

var fs = require( "fs" );	// Importa el módulo fs

if ( process.argv.length != 4 )	// Faltan parámetros
{
	console.log( "\nError de sintaxys\n\t" + argv[ 0 ] + " " + argv[ 1 ] + " <destino> <origen>\n" );
	process.exit();
}

// Llamada correcta - Se abren los flujos

var readStream = fs.createReadStream( process.argv[ 3 ] );
var writeStream = fs.createWriteStream( process.argv[ 2 ] );

// Se conectan los flujos.

readStream.pipe( writeStream );
