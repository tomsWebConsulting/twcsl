// License < https://tinyurl.com/s872fb68 > | © 2026 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const

  codeKey = 'twc-x',
  
  options = codeKey
  
    .split ( /-(.*)/ )
    
    .filter ( Boolean )
    
    .reduce (
    
      ( obj, key ) => obj?.[ key ],
      
      window
      
      );
  
/*

  License           : < https://tinyurl.com/s872fb68 >
  
  Version           : 1.0.0
  
  SS Versions       : 7.1, 7.0
  
  Copyright         : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
