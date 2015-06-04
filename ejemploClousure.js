// Ejemplo de definición de clousure

function contador( inicial ) {
	var _cont = inicial;

	function suma() { return ++_cont }

	return { contador: function() { return _cont; },
			 incr:     function() { return suma() }
		   }
}



var cont1 = contador( 0 );
var cont2 = contador( 10 );

console.log( cont1.contador() );
console.log( cont1.incr() );
console.log( cont1.contador() );

console.log( cont2.contador() );
console.log( cont2.incr() );
console.log( cont2.contador() );
