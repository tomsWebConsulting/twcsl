const twcsl = ( ( $ ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  SS Versions   : 7.0, 7.1
  
  Version       : 0.1d4
  
  Dependancies  : jQuery
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  // begin private properties
  
    const _ssVersion = Static.SQUARESPACE_CONTEXT.templateVersion;
    
    const _is70 = _ssVersion == '7.0';
    
    const _is71 = _ssVersion == '7.1';
    
    const _eventPage = {
    
      categories : [ ],
      
      category : '',
      
      hasCategory : false,
      
      isDetail : false,
      
      isEventPage : false,
      
      hasTag : false,
      
      tag : '',
      
      tags : [ ],
      
      urlSlug : '',
      
      };
      
    const _storePage = {
    
      category : '',
      
      hasCategory : false,
      
      hasTag : false,
      
      isDetail : false,
      
      isStorePage : false,
      
      tag : '',
      
      tags : [ ],
      
      urlSlug : '',
      
      };
      
    // end private properties
    
  // begin private methods
  
    const _getPageSearchParameter = p => {
    
      let v = new URLSearchParams ( location.search )
      
        .get ( p );
        
      if ( v === null ) v = '';
      
      return v;
      
      };
      
    const _getPageCategory = ( ) => {
    
      return _getPageSearchParameter ( 'category' );
      
      };
      
    const _getPageTag = ( ) => {
    
      return _getPageSearchParameter ( 'tag' );
      
      };
      
    const _isPageDetail = ( ) => {
    
      return $( '[id^="item-"]' ).length != 0;
      
      };
      
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
      
    const _initializeEventPage = ( ) => { // initialize eventPage
    
      const o = _eventPage;
      
      o.isEventPage = Boolean ( $( 'body[class*="collection-type-events-"]' ) );
      
      if ( ! o.isEventPage ) return; // bail if not event page
      
      o.isDetail = _isPageDetail ( );
      
      o.categories = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        return _getHrefQueryStringParameterValues ( 'category' );
        
        } ) ( );
        
      o.category = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        return _getPageCategory ( );
        
        } ) ( );
        
      o.tag = _getPageTag ( );
      
      o.tags = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        return _getHrefQueryStringParameterValues ( 'tag' );
        
        } ) ( );
        
      o.urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
      
      o.hasCategory = o.category != '';
      
      o.hasTag = o.tag != '';
      
      };
      
    const _initializeStorePage = ( ) => { // initialize storePage
    
      const o = _storePage;
      
      o.isStorePage = $( 'body' ).hasClass ( 'collection-type-products' );
      
      if ( ! o.isStorePage ) return; // bail if not store page
      
      o.isDetail = _isPageDetail ( );
      
      o.category = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if detail page
        
        let category;
        
        switch ( true ) {
        
          case _is70 :
          
            category = _getPageCategory ( );
            
            break;
            
          case _is71 :
          
            category = location
            
              .pathname
              
              .replace ( o.urlSlug + '/', '' );
              
            break;
            
          }
          
        return category;
        
        } ) ( );
        
      o.tag = _getPageTag ( );
      
      o.tags = ( ( ) => {
      
        if ( ! o.isDetail ) return [ ]; // bail if not detail page
        
        return _getHrefQueryStringParameterValues ( 'tag' );
        
        } ) ( );
        
      o.urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
      
      o.hasTag = o.tag != '';
      
      o.hasCategory = o.category != '';
      
      };
      
    // end private methods
    
  // begin public properties
  
    const version = '0.1d4';
    
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
