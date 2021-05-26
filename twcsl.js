var twcsl = ( ( ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  SS Versions   : 7.0, 7.1
  
  Version       : 0.1d1
  
  Dependancies  : jQuery
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  // begin private properties
  
    const _ssVersion = Static.SQUARESPACE_CONTEXT.templateVersion;
    
    const _is70 = _ssVersion == '7.0';
    
    const _is71 = _ssVersion == '7.1';
    
    var _storePage = {
    
      category : '',
      
      hasCategory : false,
      
      hasTag : false,
      
      isDetail : false,
      
      isStorePage : $( 'body' ).hasClass ( 'collection-type-products' ),
      
      tag : '',
      
      urlSlug : '',
      
      };
      
    // end private properties
    
  // begin private methods
  
    ( ( o ) => { // initialize storePage
    
      o.isStorePage = $( 'body' ).hasClass ( 'collection-type-products' );
      
      if ( ! o.isStorePage ) return;
      
      o.isDetail = $( '[id^="item-"]' ).length != 0;
      
      o.urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
        
      // begin tag
      
        o.tag = new URLSearchParams ( location.search )
        
          .get ( 'tag' );
          
        if ( o.tag === null ) o.tag = '';
        
        // end tag
        
      o.hasTag = o.tag != '';
      
      o.category = ( ( ) => {
      
        if ( o.isDetail ) return ''; // bail if product detail page
        
        if ( o.hasTag ) return ''; // bail if tag page
        
        let category;
        
        switch ( true ) {
        
          case _is70 :
          
            category = new URLSearchParams ( location.search )
            
              .get ( 'category' );
              
            if ( category === null ) category = undefined;
            
            break;
            
          case _is71 :
          
            category = location
            
              .pathname
              
              .replace ( o.urlSlug + '/', '' );
              
            break;
            
          }
          
        return category;
        
        } ) ( );
        
      o.hasCategory = o.category != '';
      
      } ) ( _storePage );
    
    // end private methods
    
  // begin public properties
  
    const version = '0.1d1';
    
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
    
  return {
  
    // begin methods
    
      getFormNth : getFormNth,
      
      scrollEffect : scrollEffect,
      
      // end methods
      
    // begin properties
    
      is70      : _is70,
      
      is71      : _is71,
      
      ssVersion : _ssVersion,
      
      storePage : _storePage,
      
      version : version,
      
      // end properties
      
    };
    
  } ) ( );
