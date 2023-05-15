// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Page Initializer  : page.album
  
  Version           : 0.1.0
  
  SS Version        : 7.0
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.album' ]
    
    =
    
    '0.1.0';
    
  if ( self.ss.is71 ) return; // bail if 7.1
  
  const initialize = ( ) => {
  
    const p = self.page.album;
    
    p.is = $( 'body' )
    
      .hasClass ( 'collection-type-album' );
      
    if ( ! p.is ) return; // bail if not album
    
    p.urlSlug = self._.urlSlug;
    
    };
    
  self
  
    ._
    
    .initialize
    
    .push ( initialize );
    
  } ) ( xtwcsl );
