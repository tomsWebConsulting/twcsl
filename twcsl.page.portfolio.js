// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Page Initializer  : page.portfolio
  
  Version           : 0.1.0
  
  SS Version        : 7.1
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.portfolio' ]
    
    =
    
    '0.1.0';
    
  if ( self.ss.is70 ) return; // bail if 7.0
  
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
  
  } ) ( xtwcsl );
