twcsl.cookie = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Submodule     : cookie
  
  Version       : 0.1.0
  
  SS Versions   : 7.1, 7.0
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .submodule
    
    .cookie
    
    =
    
    '0.1.0';
    
  // private method
  
  const _getCookieValue = key => {
  
    let value = '';
    
    try {
    
      value = document.cookie
      
        .split ( '; ' )
        
        .find ( row => row.startsWith ( `${ key }=` ) )
        
        .split ( '=' )
        
        [ 1 ];
        
      } catch ( error ) { }
      
    return value;
    
    };
    
  // public objects
  
  const cookie = {
  
    exists : key => {
    
      const b = _getCookieValue ( key ) ? true : false;
      
      return b;
      
      },
      
    value : {
    
      get : _getCookieValue,
      
      set : ( key, value, optional ) => {
      
        value = encodeURIComponent ( value );
        
        let cookie = `${ key }=${ value }`;
        
        if ( optional == undefined ) return; // bail if no optional
        
        const entries = Object.entries ( optional );
        
        const keysNoValue = [
        
          'partitioned',
          
          'secure',
          
          ];
          
        const keysOptional = [
        
          'domain',
          
          'expires',
          
          'max-age',
          
          'partitioned',
          
          'path',
          
          'samesite',
          
          'secure',
          
          ];
          
        for ( const [ key, value ] of entries ) {
        
          let b = ! keysOptional.includes ( key );
          
          if ( b ) continue;
          
          cookie += `; ${ key }`;
        
          b = keysNoValue.includes ( key );
          
          if ( b ) continue;
          
          cookie += `=${ value }`;
        
          }
          
        document.cookie = cookie;
        
        },
        
      },
      
    };
    
  return cookie;
  
  } ) ( twcsl );
