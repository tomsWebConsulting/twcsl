// License < https://tinyurl.com/s872fb68 > | © 2025 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const isStorePage = Static

  .SQUARESPACE_CONTEXT
  
  .collection
  
  ?.type
  
  ===
  
  13;
  
/*

  Example Usage :
  
    if ( ! isStorePage ) return; // bail if not store page
    
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
