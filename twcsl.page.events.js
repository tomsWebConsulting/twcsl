// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License           : < https://bit.ly/3F8sn8W >
  
  Page Initializer  : page.events
  
  Version           : 0.1.0
  
  SS Versions       : 7.1, 7.0
  
  Dependencies      : twcsl
                      
                      jQuery
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.events' ]
    
    =
    
    '0.1.0';
    
  const $ = jQuery;
  
  const initialize = ( ) => {
  
    const m = self._.page; // methods
    
    const p = self.page.events; // page
    
    const selector = [
    
      'body[class~="collection-type-events"]',
      
      'body[class*="collection-type-events-"]'
      
      ]
      
      .join ( ', ' )
      
    const l = $( selector ).length;
    
    p.is = Boolean ( l );
    
    if ( ! p.is ) return; // bail if not events
    
    p.urlSlug = self._.urlSlug;
    
    const eventInitialize = ( ) => { // event initialize
    
      const e = p.event;
      
      e.is = m.isCollectionItem ( );
      
      if ( ! e.is ) return; // bail if not event
      
      const setCategories = ( ) => {
      
        const c = $( '.eventitem-meta-cats a' )
        
          .map ( function ( ) {
          
            const c = $( this )
            
              .text ( )
              
              .trim ( );
              
            return c;
            
            } )
            
          .toArray ( );
          
        e.categories = c;
        
        };
        
      const setTags = ( ) => {
      
        const t = $( '.eventitem-meta-tags a' )
        
          .map ( function ( ) {
          
            const t = $( this )
            
              .text ( )
              
              .trim ( );
              
            return t;
            
            } )
            
          .toArray ( );
          
        e.tags = t;
        
        };
        
      setCategories ( );
      
      setTags ( );
      
      };
      
    const listInitialize = ( ) => { // list initialize
    
      const l = p.list;
      
      l.is = m.isCollectionList ( );
      
      if ( ! l.is ) return; // bail if not list
      
      const getClassEventlistFilterText = ( ) => {
      
        const t = $( '.eventlist-filter' )
        
          .text ( )
          
          .split ( ': ' ) [ 1 ]
          
          .replace ( /(?:“)(.+)(?:”)/, '$1' )
          
          .trim ( );
          
        return t;
        
        };
        
      const setCategory = ( ) => {
      
        if ( ! l.hasCategory ) return; // bail if no category
        
        const c = getClassEventlistFilterText ( );
          
        l.category = c;
        
        };
        
      const setCategoryUrlSlug = ( ) => {
      
        const s = m.getFilterSlug ( 'category' );
        
        l.categoryUrlSlug = s;
        
        };
        
      const setTag = ( ) => {
      
        if ( ! l.hasTag ) return; // bail if no tag
        
        const t = getClassEventlistFilterText ( );
        
        l.tag = t;
        
        };
        
      const setTagUrlSlug = ( ) => {
      
        const s = m.getFilterSlug ( 'tag' );
        
        l.tagUrlSlug = s;
        
        };
        
      setCategoryUrlSlug ( );
      
      l.hasCategory = Boolean ( l.categoryUrlSlug );
      
      setCategory ( );
      
      setTagUrlSlug ( );
      
      l.hasTag = Boolean ( l.tagUrlSlug );
      
      setTag ( );
      
      };
      
    eventInitialize ( );
  
      listInitialize ( );
    
    };
    
  self
  
    ._
    
    .initialize
    
    .push ( initialize );
    
  } ) ( twcsl );
