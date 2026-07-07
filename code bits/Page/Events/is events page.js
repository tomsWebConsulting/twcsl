// License < https://tinyurl.com/s872fb68 > | © 2025-2026 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const isEventsPage =

  !!
  
  document
  
    .querySelectorAll (
    
      [
      
        'body[ class*="collection-type-events-" ]',
        
        'body[ class~="collection-type-events" ]'
        
        ]
        
        .join ( ', ' )
        
      )
      
      .length;
      
/*

  Example Usage :
  
    // bail if not events page
    
    if ( ! isEventsPage ) return;
    
  Note : the body tag must be available in the DOM
  
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Copyright     : 2025-2026 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
