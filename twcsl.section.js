twcsl.section = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Submodule     : section
  
  Version       : 0.1.0
  
  SS Version    : 7.1
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .submodule
    
    .section
    
    =
    
    '0.1.0';
    
  if ( ! self.ss.is71 ) return; // bail if not 7.1
  
  const $ = self._.$;
  
  const section = {
  
    get : {
    
      nth : ( nth = 1 ) => {
      
        let $element = $( 'x-twc-empty' );
        
        if ( self.ss.is71 && nth ) {
        
          $element = $( ':not( #footer-sections ) > .page-section' );
          
          if ( nth > 0 )
          
            nth -= 1;
            
          $element = $element.eq ( nth );
          
          }
          
        if ( ! $element.length )
        
          $element = undefined;
          
        return $element;
        
        }
        
      }
      
    };
    
  return section;
  
  } ) ( twcsl );
