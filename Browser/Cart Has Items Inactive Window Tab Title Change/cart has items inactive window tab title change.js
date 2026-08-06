( ( ) => {

  // debugger;
  
  /*!
  
    cart has items inactive window tab title change
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Cart Has Items Inactive Window Tab Title Change',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc chiiwttc sub-module
    
    twc.sppc = twc.chiiwttc || { };
    
    }
    
  const
  
    codeKey = 'twc-chiiwttc',
    
    dcmnt = window.top.document,
    
    options = codeKey
    
      .split ( '-' )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        );
        
  let
  
    interval,
    
    originalTitle;
  
  const
  
    cartHasItems = ( ) => {
    
      const element = document
      
        .body
        
        .querySelector (
        
          '.sqs-cart-quantity'
          
          );
          
      // bail if no element
      
      if ( ! element ) return false;
      
      const hasItems =
      
        parseInt (
        
          element.textContent,
          
          10
          
          )
          
        >
        
        0;
        
      return hasItems;
      
      },
      
    visibilityChangeCallback = ( ) => {
    
      const isFlip =
      
        dcmnt.hidden
        
        &&
        
        cartHasItems ( );
      
      if ( isFlip ) {
      
        let flip = false;
        
        interval = setInterval (
        
          ( ) => {
          
            dcmnt.title =
            
              flip
              
              ?
              
              originalTitle
              
              :
              
              options.title;
              
            flip = ! flip;
            
            },
            
          options
          
            .flipIntervalSeconds
            
            *
            
            1000
            
          );
          
        } else {
        
          clearInterval ( interval );
          
          dcmnt.title = originalTitle;
          
          }
          
      },
      
    domContentLoadedCallback = ( ) => {
    
      originalTitle = document.title;
      
      dcmnt.addEventListener (
      
        'visibilitychange',
        
        visibilityChangeCallback
        
        );
        
      };
      
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
