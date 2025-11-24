( ( ) => {

  /*!
  
    store page detail title text to link
    
    License        : < https://tinyurl.com/s872fb68 >
    
    Version        : 0.2.0
    
    SS Version     : 7.1
    
    Products V2
    Compatible     : Yes
    
    Fluid
    Engine
    Compatible     : Not Applicable
    
    Copyright      : 2022-2025 Thomas Creedon
                     
                     Tom's Web Consulting
                     
                     < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.2.0',
    
    s = `
    
      Store Page Detail Title Text to Link v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const isStorePage = Static
  
    .SQUARESPACE_CONTEXT
    
    .collection
    
    ?.type
    
    ===
    
    13;
    
  if ( ! isStorePage ) return; // bail if not store page
  
  const isDetail
  
    =
    
    !!
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item;
      
  if ( ! isDetail ) return; // bail if not detail
  
  // global
  
  {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc spdtttl sub-module
    
    twc.spdtttl = ( ( self ) => self ) ( twc.spdtttl || { } );
    
    }
    
  const callback = ( ) => {
  
    const
    
      codeKey = 'twc-spdtttl',
      
      options = codeKey
      
        .split ( '-' )
        
        .reduce ( ( obj, key ) => obj?.[ key ], window ),
        
      hasOptions = Object
      
        .keys ( options )
        
        .length;
        
    if ( ! hasOptions ) return; // bail if no options
    
    const
    
      selector = '.product-detail .product-meta .product-title',
      
      seperator = options.seperator,
      
      textUrlMap = options.textUrlMap,
      
      element = document
      
        .body
        
        .querySelector ( selector ),
        
      [ title, text ] = element
      
        .textContent
        
        .split ( seperator ),
        
      isEntry = text in textUrlMap;
      
    if ( ! isEntry ) return; // bail if no entry in map
    
    element.textContent = title;
    
    const
    
      url = textUrlMap [ text ],
      
      html = options
      
        .html
        
        .replaceAll (
        
          '[ text ]',
          
          text.trim ( )
          
          )
        
        .replaceAll (
        
          '[ url ]',
          
          url.trim ( )
          
          );
          
    element
    
      .insertAdjacentHTML (
      
        'beforeend',
        
        html
        
        );
        
    };
    
  document
  
    .addEventListener ( 'DOMContentLoaded', callback );
    
  } ) ( );
