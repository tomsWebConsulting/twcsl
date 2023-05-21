( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Initializer   : page.album
  
  Version       : 0.1.0
  
  SS Version    : 7.0
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  if ( self.ss.is71 ) return; // bail if 7.1
  
  const $ = self._.$;
  
  const album = ( ) => {
  
    const p = self.page.album;
    
    p.is = $( 'body' )
    
      .hasClass ( 'collection-type-album' );
      
    if ( ! p.is ) return; // bail if not album
    
    p.urlSlug = self._.urlSlug;
    
    };
    
  self._.addInitializer ( album, 'page.album', '0.1.0' );
  
  } ) ( twcsl );
