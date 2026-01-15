// License < https://tinyurl.com/s872fb68 > | © 2025 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const isBlogPage

  =
  
  !!
  
  document
  
    .querySelectorAll (
    
      [
      
        'body[ class*="collection-type-blog-" ]',
        
        'body[ class~="collection-type-blog" ]'
        
        ]
        
        .join ( ', ' )
        
      )
      
      .length;
      
/*

  Example Usage :
  
    if ( ! isBlogPage ) return; // bail if not blog page
    
  Note : the body tag must be available in the DOM
  
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
