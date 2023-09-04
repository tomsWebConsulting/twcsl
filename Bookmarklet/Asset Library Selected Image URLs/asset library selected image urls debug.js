( function ( ) {

  /*
  
    asset library selected image urls debug
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.2.1
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const title = 'Asset Library Selected Image URLs Debug';
  
  const version = '0.2.1';
  
  let s = `${ title } v${ version }, License < ` +
    
    'https://tinyurl.com/s872fb68 >, ' +
    
    'Tom\'s Web Consulting < http://www.tomsWeb.consulting >';
    
  console.log ( s );
  
  if ( window.twc == undefined ) window.twc = { };
  
  twc.alsiu = {
  
    debug : true
    
    };
    
  } ( ) );
