// debugger;

twcsl.miscellaneous = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Submodule     : miscellaneous
  
  Version       : 0.1.0
  
  SS Versions   : 7.1, 7.0
  
  Dependencies  : twcsl
                  
                  jQuery
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .submodule
    
    .miscellaneous
    
    =
    
    '0.1.0';
    
  const $ = jQuery;
  
  const miscellaneous = {
  
    getUrlParser : url => {
    
      const parser = document.createElement ( 'a' );
      
      parser.href = url;
      
      return parser;
      
      },
      
    scrollEffect : ( callback, easingFunction = 'linear', invertScale = false
    
      ) => {
      
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
          
      },
      
    urlToCssClassName : url => {
    
      url = getUrlParser ( url );
      
      url = url.pathname;
      
      const className = url
      
        .split ( '/' )
        
        .slice ( -1 )
        
        [ 0 ]
        
        .replace ( /^([\d-_]{1})/, 'x-$1' );
        
      return className;
      
      },
      
    };
    
  return miscellaneous;
  
  } ) ( twcsl );
