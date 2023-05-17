// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Page Initializer  : page.blog
  
  Version           : 0.1.0
  
  SS Versions       : 7.1, 7.0
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.blog' ]
    
    =
    
    '0.1.0';
    
  const initialize = ( ) => {
  
    const m = self._.page; // methods
    
    const p = self.page.blog; // page
    
    const selector = [
    
      'body[class~="collection-type-blog"]',
      
      'body[class*="collection-type-blog-"]',
      
      ]
      
      .join ( ', ' );
      
    p.is = Boolean ( $( selector ).length );
    
    if ( ! p.is ) return; // bail if not page blog
    
    p.urlSlug = self._.urlSlug;
    
    const listInitialize = ( ) => { // list initialize
    
      const l = p.list;
      
      l.is = m.isCollectionList ( );
      
      if ( ! l.is ) return; // bail if not list
      
      const setCategory = ( ) => {
      
        if ( ! l.hasCategory ) return; // bail if not category
        
        const c = $( 'title' )
        
          .text ( )
          
          .split ( ' — ' ) [ 0 ];
          
        l.category = c;
        
        };
        
      const setCategoryUrlSlug = ( ) => {
      
        const s = m.getFilterSlug ( 'category' );
        
        l.categoryUrlSlug = s;
        
        };
        
      const setTag = ( ) => {
      
        if ( ! l.hasTag ) return; // bail if not tag
        
        let t = $( 'link[ rel="canonical" ]' )
        
          .attr ( 'href' )
          
          .split ( '/' )
          
          .splice ( -1 );
          
        t = decodeURIComponent ( t )
        
          .replaceAll ( '+', ' ' );
          
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
      
    const postInitialize = ( ) => { // post initialize
    
      const post = p.post;
      
      post.is = m.isCollectionItem ( );
      
      if ( ! post.is ) return; // bail if not detail
      
      const categorySelector = [
      
        '.blog-item-category', // 7.1
        
        // 7.0
        
        '.Blog-meta-item-category', // Brine
        
        '.categories a', // Avenue, Five, Montauk
        
        '.meta-above-title .entry-category a', // Bedford
        
        ]
        
        .join ( ', ' );
        
      const tagsSelector = [
      
        '.blog-item-tag', // 7.1
        
        // 7.0
        
        '.Blog-meta-item-tag', // Brine
        
        '.tags a', // Avenue, Five, Montauk
        
        '.entry-tags a', // Bedford
        
        ]
        
        .join ( ', ' );
        
      const setCategories = ( ) => {
      
        const c = $( categorySelector )
        
          .map ( function ( ) {
          
            const c = $( this )
            
              .text ( )
              
              .trim ( );
              
            return c;
            
            } )
            
          .toArray ( );
          
        post.categories = c;
        
        };
        
      const setCategoryUrlSlugs = ( ) => {
      
        const us = $( categorySelector )
        
          .map ( function ( ) {
          
            const us = $( this )
            
              .attr ( 'href' )
              
              .replace ( post.urlSlug + '/category', '' );
              
            return us;
            
            } )
            
          .toArray ( );
          
        post.categoryUrlSlugs = us;
        
        };
        
      const setTags = ( ) => {
      
        const t = $( tagsSelector )
        
          .map ( function ( ) {
          
            const t = $( this )
            
              .text ( )
              
              .trim ( );
              
            return t;
            
            } )
            
          .toArray ( );
          
        post.tags = t;
        
        };
        
      const setTagUrlSlugs = ( ) => {
      
        const us = $( tagsSelector )
        
          .map ( function ( ) {
          
            const us = $( this )
            
              .attr ( 'href' )
              
              .replace ( post.urlSlug + '/tag', '' );
              
            return us;
            
            } )
            
          .toArray ( );
          
        post.tagUrlSlugs = us;
        
        };
        
      setCategories ( );
      
      setCategoryUrlSlugs ( );
      
      setTags ( );
      
      setTagUrlSlugs ( );
      
      };
      
    listInitialize ( );
    
    postInitialize ( );
    
      };
    
  self
  
    ._
    
    .initialize
    
    .push ( initialize );
    
  } ) ( xtwcsl );