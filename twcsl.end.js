// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Version         : 0.1.0
  
  SS Versions     : Not Applicable
  
  Dependencies    : twcsl
  
  By              : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  const $ = jQuery;
  
  const initialize = ( ) => {
  
    const initialize = self._.initialize;
    
    $.each ( initialize, function ( ) {
    
      this ( );
      
      } );
      
    };
    
  switch ( true ) {
  
    case self.ss.is71 :
    
      initialize ( );
      
      break;
      
    case self.ss.is70 :
    
      Squarespace.onInitialize ( Y, initialize );
      
      break;
      
    }
    
  self._seal ( );
  
  } ) ( xtwcsl );
