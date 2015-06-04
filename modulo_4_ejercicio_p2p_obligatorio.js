// Ejericio obligatorio Módulo 4
// Autor: César Sepúlveda Troyano

// Variables

var puertoEscucha = 8000;
var rutaPreguntas = "/preguntas";
var rutaRespuestas = "/respuesta";

var pieDePagina = '<footer><br><br><hr><p>Ejercicio realizado por: César Sepúlveda Troyano.</p><footer>'


// Iniciar servidor

var express = require( "express" );
var path = require( "path" );
var bodyParser = require ( "body-parser" );

var app = express();


// Decodificar el body

app.use( bodyParser.urlencoded( { extended: true } ) );


// Formulario de preguntas

app.get( rutaPreguntas,
		 function( req, res ) {
		 	res.send( '<!DOCTYPE html><html><head><meta content="text/html; charset=utf-8" http-equiv="content-type">'
    				+ '<title>Responda a las preguntas:</title></head>'
  					+ '<body><h1>Responda a las siguientes preguntas:</h1><hr><br>'
            // Bloque de quién descubrió América
  					+ '<p><form method="post" action="' + rutaRespuestas + '">'
            + '<input type="hidden" name="idCampo" value="1" />'    // Campo oculto
  					+ '¿Quién descubrió América?:<br>'
  					+ '<input type="text" name="respuesta" />'
  					+ '<input type="submit" value="Comprobar" /></form></p>'
            // Bloque de capital de Portugal
  					+ '<p><form method="post" action="' + rutaRespuestas + '">'
            + '<input type="hidden" name="idCampo" value="2" />'    // Campo oculto
  					+ '¿Capital de Portugal?:<br>'
  					+ '<input type="text" name="respuesta" />'
  					+ '<input type="submit" value="Comprobar" /></form></p>'
  					+ '</body>' + pieDePagina + '</html>'
    				);
		 } 
	);


// Procesar respuestas

app.post( rutaRespuestas
		, function( req, res ) {
          var pagRespuesta = '<!DOCTYPE html><html><head><meta content="text/html; charset=utf-8" http-equiv="content-type">'
                            + '<title>Validación de respuesta:</title></head>'
                            + '<body><h1>Validación de respuesta:</h1><hr><br>';

          if ( ( req.body || "no" ) === "no" ) {  // Evitar error incontrolado si no existe body
              pagRespuesta = pagRespuesta + '<h1>En la petición no está definido el bloque body</h1>'
              res.status( 500 ); // Devolver un estado de error de servidor
          }
          else {
              var idCampo = ( req.body.idCampo || "0" );
              var respuesta = ( req.body.respuesta || "-vacia-" );
              var resultado = "";

              if ( idCampo === "1" ) {
                  respuestaCorrecta = "Cristobal Colón";

                  if ( respuesta.match( /^cristobal {1,}col[oó]n$/i ) === null && respuesta.match( /^col[oó]n$/i ) === null ) {
                      resultado = 'incorrecta';
                  }
                  else {
                      resultado = 'correcta';
                  }
              }
              else {
                  respuestaCorrecta = "Lisboa";
                  
                  if ( respuestaCorrecta.toLowerCase() == respuesta.toLowerCase() ) {
                      resultado = "correcta";
                  }
                  else {
                      resultado = "incorrecta";
                  }
              }

              pagRespuesta = pagRespuesta + '<p>La respuesta correcta es <b>' + respuestaCorrecta + '</b>'
                            + ' y tu respuesta ha sido <b>' + respuesta + '</b> por lo tanto tu '
                            + 'respuesta es <b>' + resultado + '</b></p>';
          }

          // Finalizar la página
          pagRespuesta = pagRespuesta  + '<br><p><a href="javascript:window.history.back();">Volver</a></p></body>' + pieDePagina + '</html>';
          res.send( pagRespuesta );
		}
	);


// Resto de peticiones

app.get( "*"
		, function( req, res ) {
      res.status( 404 ); // Enviar un código de página no encontrada.
			res.send( '<!DOCTYPE html><html><head><meta content="text/html; charset=utf-8" http-equiv="content-type">'
    				+ '<title>Página no encontrada</title></head>'
  					+ '<body><h1>Los siento, esa página no la encuentro :(</h1></body>' + pieDePagina + '</html>'
  					);
		}
	   );


// Poner el servidor a escuchar

console.log( "Ruta preguntas: " + rutaPreguntas );
console.log( "Ruta respuesta:" + rutaRespuestas );
console.log( "Puerto de escucha: " + puertoEscucha );
console.log( "<* Servidor iniciado *>" );

app.listen( puertoEscucha );
