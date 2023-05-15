// debugger;

xtwcsl.cookie = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Submodule   : page
  
  Version     : 0.1.0
  
  SS Versions : 7.1, 7.0
  
  Note        : this sub-module is a stub for page types. other sub-modules will
                need be added to fill in page object
  
  By          : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
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
      
      set : ( key, value, expires, maxAge, path ) => {
      
        let cookie = `${ key }=${ value }`;
        
        if ( expires ) cookie += `; ${ expires }`;
        
        if ( maxAge ) cookie += `; max-age=${ maxAge }`;
        
        if ( path ) cookie += `; path=${ path }`;
        
        document.cookie = cookie;
        
        },
        
      },
      
    };
    
  return cookie;
  
  } ) ( xtwcsl );
