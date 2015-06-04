// Módulo 2 - Ejercicio P2P obligatorio
// Autor: César Sepúlveda


//--- función agenda --

function agenda ( titulo, inic ) {
	var _titulo = titulo;
	var _contenido = inic;
 
	return {
		titulo: function()				{ return _titulo; },
		meter:  function(nombre, tf)	{ _contenido[nombre]=tf; },
		tf:     function(nombre)		{ return _contenido[nombre]; },
		borrar: function(nombre)		{ delete _contenido[nombre]; },
		toJSON: function()				{ return JSON.stringify(_contenido);},

		// Método añadido por mi

		listar: function() {

			for( var i in _contenido ) {
				console.log( i + ", " + _contenido[ i ] );
			}
		} //--- Final del método listar ---

	} //--- Final del objeto retornado por return ---

} //--- Final función agenda() ---



//--- Creación de la agenda ---

var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355,
               María: 666777888
             });

//---Mostrar la agenda---
console.log( "\n*** AGENDA: " + amigos.titulo() + " ***" );

amigos.listar(); // Mostrar la agenda

console.log( "\n" );

