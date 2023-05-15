// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Page Initializer  : page.cover
  
  Version           : 0.1.0
  
  SS Version        : 7.0
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.cover' ]
    
    =
    
    '0.1.0';
    
  if ( self.ss.is71 ) return; // bail if 7.1
  
  const initialize = ( ) => {
  
    const selector = '.sqs-slide-wrapper[data-slide-type="cover-page"]';
    
    const l = $( selector ).length;
    
    if ( ! l ) return; // bail if not cover
    
    const p = self.page.cover;
    
    p.is = true;
    
    p.urlSlug = self._.urlSlug;
    
    };
    
  self
  
    ._
    
    .initialize
    
    .push ( initialize );
    
  } ) ( xtwcsl );
