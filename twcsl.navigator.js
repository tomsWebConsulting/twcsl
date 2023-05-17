// debugger;

xtwcsl.navigator = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License     : < https://bit.ly/3F8sn8W >
  
  Submodule       : navigator
  
  Version         : 0.1.0
  
  SS Versions     : 7.1, 7.0
  
  By              : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .submodule
    
    .navigator
    
    =
    
    '0.1.0';
    
  const _initialize = ( ) => { // initialize
  
    const n = navigator;
    
    // begin has touch screen
    
      // based on code from MDN < https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent >
      
      switch ( true ) {
      
        case 'maxTouchPoints' in navigator :
        
          n.hasTouchScreen = navigator.maxTouchPoints > 0;
          
          break;
          
        case 'msMaxTouchPoints' in navigator :
        
          n.hasTouchScreen = navigator.msMaxTouchPoints > 0;
          
          break;
          
        default :
        
          const mQ = window.matchMedia && matchMedia ( '(pointer:coarse)' );
          
          switch ( true ) {
          
            case mQ && mQ.media === '(pointer:coarse)' :
            
              n.hasTouchScreen = !! mQ.matches;
              
              break;
              
            case 'orientation' in window :
            
              n.hasTouchScreen = true; // deprecated, but good fallback
              
              break;
              
            default :
            
              // Only as a last resort, fall back to user agent sniffing
              
              const UA = navigator.userAgent;
              
              n.hasTouchScreen = (
              
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test ( UA ) ||
                
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test ( UA )
                
                );
                
            } // end switch
            
        } // end switch
        
      // end has touch screen
      
    }; // end initialize
    
  // public objects
  
  const navigator = {
    
    hasTouchScreen : false,
    
    };
    
  _initialize ( );
  
  return navigator;
  
  } ) ( xtwcsl );
