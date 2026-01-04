// License < https://tinyurl.com/s872fb68 > | © 2026 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const objectsShallowEqual = ( obj1, obj2 ) => {
    
  const
  
    keys1 = Object.keys ( obj1 ),
    
    keys2 = Object.keys ( obj2 );
    
  let isEqual = keys1.length === keys2.length;
  
  if ( ! isEqual ) return false; // bail id key lengths not equal
  
  for ( let key of keys1 ) {
  
    isEqual = obj1 [ key ] === obj2 [ key ];
    
    // bail if key/value pair not equal
    
    if ( ! isEqual ) return false;
    
    }
    
  return true;
  
  };
  
/*

  Example Usage :
  
    const
    
      a = { name : 'Tom', age : 1 },
      
      b = { name : 'Tom', age : 1 },
      
      c = { name : 'Tom', age : 2 }
      
      d = { name : 'Tom', age : 1, extra : true };
    
    console.log ( objectsShallowEqual ( a, b ) ) ; // true
    
    console.log ( objectsShallowEqual ( a, c ) ) ; // false ( age differs ) 
    
    // false ( different number of keys ) 
    
    console.log ( objectsShallowEqual ( a, d ) ) ;
    
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Copyright     : 2026 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
