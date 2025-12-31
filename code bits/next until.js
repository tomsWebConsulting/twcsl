// License < https://tinyurl.com/s872fb68 > | © 2025 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const nextUntil = ( element, selector ) => {

  const result = [ ];
  
  let e = element.nextElementSibling;

  while ( e && ! e.matches ( selector ) ) {
  
    result.push ( e );
    
    e = e.nextElementSibling;
    
    }
    
  return result;
  
  };
  
/*

  Example Usage :
  
    elements = nextUntil ( element, '.page-section' );
    
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */

