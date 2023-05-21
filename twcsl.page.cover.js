( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Initializer   : page.cover
  
  Version       : 0.1.0
  
  SS Version    : 7.0
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  if ( self.ss.is71 ) return; // bail if 7.1
  
  const $ = self._.$;
  
  const cover = ( ) => {
  
    const selector = '.sqs-slide-wrapper[data-slide-type="cover-page"]';
    
    const l = $( selector ).length;
    
    if ( ! l ) return; // bail if not cover
    
    const p = self.page.cover;
    
    p.is = true;
    
    p.urlSlug = self._.urlSlug;
    
    };
    
  self._.addInitializer ( cover, 'page.cover', '0.1.0' );
  
  } ) ( twcsl );
