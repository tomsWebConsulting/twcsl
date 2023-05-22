( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Submodule     : block.form
  
  Version       : 0.1.0
  
  SS Versions   : 7.1, 7.0
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .submodule
    
    [ 'block.form' ]
    
    =
    
    '0.1.0';
    
  const $ = self._.$;
  
  // public object
  
  const form = {
  
    get : {
    
      fieldLabel : $field => {
      
        const title = $( '.title', $field )
        
          .clone ( )
          
          .children ( )
          
          .remove ( )
          
          .end ( )
          
          .text ( )
          
          .trim ( );
          
        return title;
        
        },
        
      nth : ( nth = 1 ) => {
      
        // n is 1 based for the user but we need zero based
        
        const $form = $( `.sqs-block-form:eq( ${ --nth } )` );
        
        if ( ! $form.length ) return undefined;
        
        return $( 'form', $form );
        
        },
        
      },
      
    };
    
  Object
  
    .assign (
    
      self.block.form,
      
      form
      
      );
      
  return self;
  
  } ) ( twcsl );
