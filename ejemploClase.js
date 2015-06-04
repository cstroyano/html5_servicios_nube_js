// Ejemplo de definición de clase

function Contador( inicial ) {
	this.cont = inicial;
}

Contador.prototype = {
	contador: function() { return( this.cont ); },
	incr: function() { return( ++this.cont ); }
}

var cont1 = new Contador( 0 );
var cont2 = new Contador( 10 );

console.log( cont1.contador() );
console.log( cont1.incr() );
console.log( cont1.contador() );

console.log( "El atributo directamente: " + cont1.cont );

console.log( cont2.contador() );
console.log( cont2.incr() );
console.log( cont2.contador() );
