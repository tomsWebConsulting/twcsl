// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License           : < https://bit.ly/3F8sn8W >
  
  Page Initializer  : page.store
  
  Version           : 0.1.0
  
  SS Versions       : 7.1, 7.0
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.store' ]
    
    =
    
    '0.1.0';
    
  const initialize = ( ) => {
  
    const m = self._.page; // methods
  
    const p = self.page.store; // page
  
    p.is = $( 'body' ).hasClass ( 'collection-type-products' );
  
    if ( ! p.is ) return; // bail if not page store
  
    p.urlSlug = self._.urlSlug;
  
    const detailInitialize = ( ) => { // detail initialize
  
      const d = p.detail;
    
      d.is = m.isCollectionItem ( );
    
      if ( ! d.is ) return; // bail if not detail
    
      const getStockQuantity = ( ) => {
    
        const variants = Static.SQUARESPACE_CONTEXT.product.variants;
      
        let q;
      
        let variant;
      
        if ( variants.length == 1 ) {
      
          variant = variants [ 0 ];
        
          } else {
        
            variant = $( '.product-variants:visible' )
          
              .attr ( 'data-selected-variant' );
            
            // bail if no selected variant
          
            if ( variant === undefined ) return undefined;
          
            variant = JSON.parse ( variant );
          
            variant = variant.id;
          
            variant = variants.filter ( o => o.id == variant ) [ 0 ];
          
            }
          
        q = variant.stock;
      
        if ( q.unlimited ) {
      
          q = Infinity;
        
          } else {
        
            q = q.quantity;
          
            }
          
        return q;
      
        };
      
      const setClassCategories = ( ) => {
    
        if ( self.ss.is71 ) return; // bail if 7.1
      
        const selector = [
      
          // 7.0
        
          '.ProductItem', // Brine
        
          '.productWrapper', // ?
        
          '#productWrapper', // ?
        
          ]
        
          .join ( ', ' );
        
        const categories = $( selector )
      
          .attr ( 'class' )
        
          .split ( ' ' )
        
          .filter ( clss => clss.startsWith ( 'category-' ) )
        
          .map ( ( category ) => {
        
            category = category.slice ( 9 );
          
            return category;
          
            } );
          
        d.classCategories = categories;
      
        };
      
      const setClassTags = ( ) => {
    
        const selector = [
      
          '.pdp-layout', // 7.1
        
          '.ProductItem', // 7.1, 7.0 ( Brine )
        
          // 7.0
        
          '.productWrapper', // ?
        
          '#productWrapper', // ?
        
          ]
        
          .join ( ', ' );
        
        const tags = $( selector )
      
          .attr ( 'class' )
        
          .split ( ' ' )
        
          .filter ( clss => clss.startsWith ( 'tag-' ) )
        
          .map ( ( tag ) => {
        
            return tag.slice ( 4 );
          
            } );
          
        d.classTags = tags;
      
        };
    
      const setMethodsGet = ( ) => {
    
        const g = d [ 'get' ];
      
        g.stockQuantity = getStockQuantity;
      
        };
      
      // begin first order
    
        setClassCategories ( );
      
        setClassTags ( );
      
        // end first order
      
      // begin second order
    
        setMethodsGet ( );
      
        // end second order
      
      };
    
    const listInitialize = ( ) => { // list initialize
    
      const l = p.list;
      
      l.is = m.isCollectionList ( );
      
      if ( ! l.is ) return; // bail if not list
      
      const tag = m.getSearchParameterTag ( );
      
      let category = '';
      
      const setCategories = ( ) => {
      
        if ( self.ss.is70 ) return; // bail if 7.0
        
        const selector = '.category-link.activeParent, .category-link.active';
        
        const categories = $( selector ).map ( function ( ) {
        
          const category = $( this ).text ( );
          
          return category;
          
          } )
          
          .toArray ( )
          
          .join ( ' > ' );
          
        l.categories = categories;
        
        };
        
      const setCategory = ( ) => {
      
        if ( ! category ) return; // bail if not category
        
        const selector = [
        
          '.filter-by-category', // 7.0 ( Bedford )
          
          '.nested-category-title', // 7.1
          
          // 7.0
          
          '#categoryNav ul li.active-link:not(.all) a', // Avenue
          
          '.ProductList-filter-list-item--active', // Brine
          
          ]
          
          .join ( ', ' );
          
        const c = $( selector )
        
          .eq ( 0 )
          
          .text ( )
          
          .trim ( );
          
        l.category = c;
        
        };
        
      const setCategoryLocal = ( ) => {
      
        switch ( true ) {
        
          case self.ss.is70 :
          
            category = m.getCategory ( );
            
            break;
            
          case self.ss.is71 :
          
            const index = p.urlSlug.length + 1;
            
            category = location
            
              .pathname
              
              .slice ( index );
              
            break;
            
          }
          
        };
        
      const setCategoryUrlSlug = ( ) => {
      
        if ( ! category ) return; // bail if no category
        
        let slug = '';
        
        switch ( true ) {
        
          case self.ss.is70 :
          
            slug = _getFilterSlug ( 'category' );
            
            break;
            
          case self.ss.is71 :
          
            slug = location
            
              .pathname
              
              .replace ( twcsl.page.store.urlSlug, '' );
              
            break;
            
          }
          
        l.categoryUrlSlug = slug;
        
        };
        
      const setTag = ( ) => {
      
        if ( ! tag ) return; // bail if not tag
        
        const t = decodeURIComponent ( tag );
        
        l.tag = t;
        
        };
        
      const setTagUrlSlug = ( ) => {
      
        if ( ! tag ) return; // bail if not tag
        
        const slug = _getFilterSlug ( 'tag' );
        
        l.tagUrlSlug = slug;
        
        };
        
      //
      
      l.hasTag = Boolean ( tag );
      
      setCategories ( );
      
      setCategoryLocal ( );
      
      //
      
      l.hasCategory = Boolean ( category );
      
      setCategory ( );
      
      setCategoryUrlSlug ( );
      
      setTag ( );
      
      setTagUrlSlug ( );
      
      };
      
    detailInitialize ( );
  
      listInitialize ( );
    
    };
    
  self
  
    ._
    
    .initialize
    
    .push ( initialize );
    
  } ) ( xtwcsl );
