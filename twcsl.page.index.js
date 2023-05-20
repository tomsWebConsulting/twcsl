// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License           : < https://bit.ly/3F8sn8W >
  
  Page Initializer  : page.index
  
  Version           : 0.1.0
  
  SS Version        : 7.0
  
  Dependencies      : twcsl
                      
                      jQuery
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.index' ]
    
    =
    
    '0.1.0';
    
  if ( self.ss.is71 ) return; // bail if 7.1
  
  const $ = jQuery;
  
  const initialize = ( ) => {
  
    const p = self.page.index;
    
    p.is = $( 'body' )
    
      .hasClass ( 'collection-type-index' );
      
    p.urlSlug = self._.urlSlug;
    
    };
    
  self
  
    ._
    
    .initialize
    
    .push ( initialize );
    
  } ) ( twcsl );
