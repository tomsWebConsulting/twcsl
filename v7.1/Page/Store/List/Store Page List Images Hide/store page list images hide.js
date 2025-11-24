( ( ) => {

  /*!
  
    store page list images hide
    
    License        : < https://tinyurl.com/s872fb68 >
    
    Version        : 0.2.0
    
    SS Version     : 7.1
    
    Products V2
    Compatible     : Yes
    
    Fluid
    Engine
    Compatible     : Not Applicable
    
    Copyright      : 2021-2025 Thomas Creedon
                     
                     Tom's Web Consulting
                     
                     < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.2.0',
    
    s = `
    
      Store Page List Images Hide v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2025 Thomas Creedon
      
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
  
  const callback = ( ) => {
  
    document
    
      .body
      
      .querySelectorAll (
      
        '.product-list .product-list-item'
        
        )
        
      .forEach ( e => e.classList.add ( 'is-loaded' ) );
      
    };
    
  document
  
    .addEventListener ( 'DOMContentLoaded', callback );
    
  } ) ( );
