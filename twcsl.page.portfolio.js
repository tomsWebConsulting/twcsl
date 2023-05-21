( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Initializer   : page.portfolio
  
  Version       : 0.1.0
  
  SS Version    : 7.1
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  if ( self.ss.is70 ) return; // bail if 7.0
  
  const $ = self._.$;
  
  const portfolio = ( ) => {
  
    // begin is list
    
      let selector = '.page-section[class*="collection-type-portfolio-"]';
      
      let isList = $( selector );
      
      isList = Boolean ( isList.length );
      
      // end is list
      
    // begin is sub-page
    
      selector = '.item-pagination[data-collection-type^="portfolio"]';
      
      let isSubPage = $( selector );
      
      isSubPage = Boolean ( isSubPage.length );
      
      // end is sub-page
      
    if ( ! isList && ! isSubPage ) return; // bail if not portfolio
    
    const p = self.page.portfolio;
    
    p.is = true;
    
    p.list.is = isList;
    
    p.subPage.is = isSubPage;
    
    p.urlSlug = _urlSlug;
    
    };
    
  self._.addInitializer ( portfolio, 'page.portfolio', '0.1.0' );
  
  } ) ( twcsl );
