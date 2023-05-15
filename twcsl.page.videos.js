// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Page Initializer  : page.videos
  
  Version           : 0.1.0
  
  SS Version        : 7.1
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.videos' ]
    
    =
    
    '0.1.0';
    
  if ( self.ss.is70 ) return; // bail if 7.0
  
  let is = $( '.lessons-list-section' ).length;
  
  is = Boolean ( is );
  
  if ( ! is ) return; // bail if not videos
  
  const p = self.page.videos;
  
  p.is = is;
  
  p.urlSlug = self._.urlSlug;
  
  } ) ( xtwcsl );
