// License < https://tinyurl.com/s872fb68 > | © 2025 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const isTagPage

  =
  
  new URLSearchParams ( location.search )
  
    .has ( 'tag' );
    
/*

  Example Usage :
  
    if ( ! isTagPage ) return; // bail if not tag page
    
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Note          : Squarespace does not have a Page of type Tag. this code tests
                  if a Page type is a tag page
                  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
