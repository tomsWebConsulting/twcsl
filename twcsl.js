const twcsl = ( ( $ ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  SS Versions     : 7.0, 7.1
  
  v7.0 Templates  : Bedford ( Anya, Bryant, Hayden )
                    
                    Brine ( Aria, Blend, Cacao, Clay, Fairfield, Feed,
                    Foster, Greenwich, Hatch, Heights, Hunter, Hyde, Impact,
                    Jaunt, Juke, Keene, Kin, Lincoln, Maple, Margot, Marta,
                    Mentor, Mercer, Miller, Mojave, Moksha, Motto, Nueva,
                    Pedro, Pursuit, Rally, Rover, Royce, Sofia, Sonora,
                    Stella, Thorne, Vow, Wav, West )
                    
                    your template is not listed? then it is not currently
                    supported
                    
  Version         : 0.1d6
  
  Dependancies    : jQuery
  
  By              : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  // begin private properties
  
    const _ssVersion = Static.SQUARESPACE_CONTEXT.templateVersion;
    
    const _is70 = _ssVersion == '7';
    
    const _is71 = _ssVersion == '7.1';
    
    const _eventPage = {
    
      categories : [ ],
      
      category : '',
      
      categoryUrlSlug : '',
      
      categoryUrlSlugs : [ ],
      
      hasCategory : false,
      
      hasTag : false,
      
      isDetail : false,
      
      isEventPage : false,
      
      tag : '',
      
      tagUrlSlug : '',
      
      tagUrlSlugs : [ ],
      
      urlSlug : '',
      
      };
      
    const _storePage = {
    
      category : '',
      
      categoryUrlSlug : '',
      
      classTags : [ ],
      
      hasCategory : false,
      
      hasTag : false,
      
      isDetail : false,
      
      isStorePage : false,
      
      tag : '',
      
      tagUrlSlug : '',
      
      urlSlug : '',
      
      };
      
    const _urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
    
    // end private properties
    
  // begin private methods
  
    const _getHrefQueryStringParameterValues = parameter => {
    
      const values = $( '[href*="?' + parameter + '="]' )
      
        .map ( function ( ) {
        
          const value = $( this )
          
            .attr ( 'href' )
            
            .split ( '=' ) [ 1 ];
            
          return value;
          
          } )
          
        .toArray ( );
        
      return values;
      
      };
      
    const _getPageSearchParameter = p => {
    
      let v = new URLSearchParams ( location.search )
      
        .get ( p );
        
      if ( v === null ) v = '';
      
      return v;
      
      };
      
    const _isPageDetail = ( ) => {
    
      return $( '[id^="item-"]' ).length != 0;
      
      };
      
    const _getPageCategory = ( ) => {
    
      return _getPageSearchParameter ( 'category' );
      
      };
      
    const _getPageTag = ( ) => {
    
      return _getPageSearchParameter ( 'tag' );
      
      };
      
    const _initializeEventPage = ( ) => { // initialize eventPage
    
      const o = _eventPage;
      
      o.isEventPage = Boolean ( $( 'body[class*="collection-type-events-"]' )
      
        .length );
        
      if ( ! o.isEventPage ) return; // bail if not event page
      
      o.isDetail = _isPageDetail ( );
      
      o.categories = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        const categories = $( '.eventitem-meta-cats a' )
        
          .map ( function ( ) {
          
            const category = $( this )
            
              .text ( )
              
              .trim ( );
              
            return category;
            
            } )
            
          .toArray ( );
          
        return categories;
        
        } ) ( );
        
      o.categoryUrlSlugs = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        return _getHrefQueryStringParameterValues ( 'category' );
        
        } ) ( );
        
      o.categoryUrlSlug = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        let slug = _getPageCategory ( );
        
        slug = encodeURIComponent ( slug )
        
          .replaceAll ( '%20', '+' );
          
        return slug;
        
        } ) ( );
        
      o.tag = _getPageTag ( );
      
      o.tags = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        const tags = $( '.eventitem-meta-tags a' )
        
          .map ( function ( ) {
          
            const tag = $( this )
            
              .text ( )
              
              .trim ( );
              
            return tag;
            
            } )
            
          .toArray ( );
          
        return tags;
        
        } ) ( );
        
      o.tagUrlSlugs = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        return _getHrefQueryStringParameterValues ( 'tag' );
        
        } ) ( );
        
      o.tagUrlSlug = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        let slug = _getPageTag ( );
        
        slug = encodeURIComponent ( slug )
        
          .replaceAll ( '%20', '+' );
          
        return slug;
        
        } ) ( );
        
      o.urlSlug = _urlSlug;
      
      o.hasCategory = Boolean ( o.categoryUrlSlug );
      
      o.hasTag = Boolean ( o.tagUrlSlug );
      
      o.category = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        if ( ! o.hasCategory ) return ''; // bail if not category
        
        let category = $( '.eventlist-filter' )
        
          .text ( )
          
          .split ( ': ' ) [ 1 ]
          
          .replace ( /(?:“)(.+)(?:”)/, '$1' )
          
          .trim ( );
          
        return category;
        
        } ) ( );
        
      o.tag = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        if ( ! o.hasTag ) return ''; // bail if not tag
        
        let tag = $( '.eventlist-filter' )
        
          .text ( )
          
          .split ( ': ' ) [ 1 ]
          
          .replace ( /(?:“)(.+)(?:”)/, '$1' )
          
          .trim ( );
          
        return tag;
        
        } ) ( );
        
      };
      
    const _initializeStorePage = ( ) => { // initialize storePage
    
      const o = _storePage;
      
      o.isStorePage = $( 'body' ).hasClass ( 'collection-type-products' );
      
      if ( ! o.isStorePage ) return; // bail if not store page
      
      o.isDetail = _isPageDetail ( );
      
      o.urlSlug = _urlSlug;
      
      o.categoryUrlSlug = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        let slug = '';
        
        switch ( true ) {
        
          case _is70 :
          
            slug = _getPageCategory ( );
            
            slug = encodeURIComponent ( slug )
            
              .replaceAll ( '%20', '+' );
              
            break;
            
          case _is71 :
          
            slug = location
            
              .pathname
              
              .replace ( o.urlSlug, '' );
              
            if ( slug )
            
              slug = slug.slice ( 1 );
              
            break;
            
          }
          
        return slug;
        
        } ) ( );
        
      o.classTags = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        let tags = $( '.ProductItem, .productWrapper' )
        
          .attr ( 'class' )
          
          .split ( ' ' )
          
          .filter ( clss => clss.startsWith ( 'tag-' ) )
          
          .map ( ( tag ) => {
          
            return tag.slice ( 4 );
            
            } );
            
        return tags;
        
        } ) ( );
        
      o.tagUrlSlug = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        let slug = _getPageTag ( );
        
        slug = encodeURIComponent ( slug )
        
          .replaceAll ( '%20', '+' );
          
        return slug;
        
        } ) ( );
        
      o.hasCategory = Boolean ( o.categoryUrlSlug );
      
      o.hasTag = Boolean ( o.tagUrlSlug );
      
      o.category = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        if ( ! o.hasCategory ) return ''; // bail if not category
        
        const selector = '.ProductList-filter-list-item--active, ' +
        
          '.nested-category-title, .filter-by-category';
          
        const $category = $( selector );
        
        const category = $category
        
          .text ( )
          
          .trim ( );
          
        return category;
        
        } ) ( );
        
      o.tag = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        if ( ! o.hasTag ) return ''; // bail if not tag
        
        if ( ! _is70 ) return ''; // bail if not v7.0
        
        const $tag = $( '.filter-by-tag' );
        
        const tag = $tag
        
          .text ( )
          
          .trim ( );
          
        return tag;
        
        } ) ( );
        
      };
      
    // end private methods
    
  // begin public properties
  
    const version = '0.1d6';
    
    // end public properties
    
  // begin public methods
  
    // begin get form nth
    
      const getFormNth = ( nth = 1 ) => {
      
        // n is 1 based for the user but we need zero based
        
        const $form = $( '.sqs-block-form:eq( ' + --nth + ' )' );
        
        if ( ! $form.length ) return undefined;
        
        return $( 'form', $form );
        
        }
        
      // end get form nth
      
    // begin scroll effect
    
      const scrollEffect = ( callback, easingFunction = 'linear', invertScale =
      
        false ) => {
        
        if ( typeof callback != 'function' ) return; // bail if no callback
        
        const calculateRatio = ( n, whole, easingFunction, invertScale) => {
        
          let ratio = n / whole;  // 0 to 1
          
          switch ( easingFunction ) {
          
            case 'inCircle' :
            
              // < https://easings.net/#easeInCirc >
              
              ratio = 1 - Math.sqrt ( 1 - Math.pow ( ratio, 2 ) );
              
              break;
              
            case 'inOutQuadratic' :
            
              // < https://easings.net/#easeInOutQuad >
              
              ratio = ratio < 0.5 ? 2 * ratio * ratio :
              
                1 - Math.pow ( -2 * ratio + 2, 2 ) / 2;
                
              break;
              
            case 'outCircle' :
            
              // < https://easings.net/#easeOutCirc >
              
              ratio = Math.sqrt ( 1 - Math.pow ( ratio - 1, 2 ) );
              
              break;
              
            }
            
          if ( invertScale ) ratio = 1 - ratio; // 1 to 0
          
          return ratio;
          
          } // end calculateRatio
          
        let maxScrollTop;
        
        $( window )
        
          .resize ( function ( ) {
          
            maxScrollTop = $( document ).height ( ) - $( window ).height ( );
            
            } )
            
          .resize ( )
          
          .scroll ( function ( ) {
          
            const ratio = calculateRatio ( $( window ).scrollTop ( ),
            
              maxScrollTop, easingFunction, invertScale );
              
            callback ( ratio );
            
            } );
        };
        
        // end scroll effect
        
    // end public methods
    
  $( ( ) => { // initialize
  
    _initializeEventPage ( );
    
    _initializeStorePage ( );
    
    } );
    
  return {
  
    // begin methods
    
      getFormNth    : getFormNth,
      
      scrollEffect  : scrollEffect,
      
      // end methods
      
    // begin properties
    
      eventPage : _eventPage,
      
      is70      : _is70,
      
      is71      : _is71,
      
      ssVersion : _ssVersion,
      
      storePage : _storePage,
      
      version   : version,
      
      // end properties
      
    };
    
  } ) ( jQuery );
