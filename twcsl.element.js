// debugger;

xtwcsl.element = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Submodule   : element
  
  Version     : 0.1.0
  
  SS Versions : 7.1, 7.0
  
  By          : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .submodule
    
    .element
    
    =
    
    '0.1.0';
    
  const element = {
  
    is : {
    
      in : {
      
        page : $element => {
        
          const elementHeight = $element.outerHeight ( );
          
          const pageTop = $( '#header' ).outerHeight ( );
          
          const pageHeight = $( window ).height ( ) - pageTop;
          
          const { top, bottom } = $element
          
            .get ( 0 )
            
            .getBoundingClientRect ( );
            
          const b = ( top >= pageTop && bottom <= window.innerHeight ) ||
          
            ( elementHeight > pageHeight && top <= pageTop );
            
          return b;
          
          },
          
        viewport : $element => {
        
          const { top, bottom } = $element
          
            .get ( 0 )
            
            .getBoundingClientRect ( );
            
          const b = top >= 0 && bottom <= window.innerHeight;
          
          return b;
          
          },
          
      }
      
    };
    
  return element;
  
  } ) ( xtwcsl );
