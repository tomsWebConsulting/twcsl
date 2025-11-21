/*

  store page detail variant sold out remove
  
  Version       : 0.3.0
  
  SS Versions   : 7.1, 7.0
  
  v7.1
  Products V2
  Compatible    : Yes
  
  v7.1
  Fluid
  Engine
  Compatible    : Not Applicable
  
  Copyright     : 2023-2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  no user serviceable parts below
  
  */
  
const

  version = '0.3.0',
  
  s = `
  
    Store Page Detail Variant Sold Out Remove v${ version }
    
    License < https://tinyurl.com/s872fb68 >
    
    © 2023-2025 Thomas Creedon
    
    Tom's Web Consulting < http://www.tomsWeb.consulting >
    
    `
    
    .replace ( /^\s+/gm, '' );
    
console.log ( s );

// bail if no mutation observer available

if ( ! ( 'MutationObserver' in window ) ) return;

const isStorePage = Static

  .SQUARESPACE_CONTEXT
  
  .collection
  
  ?.type
  
  ===
  
  13;
  
if ( ! isStorePage ) return; // bail if not store page

const isDetail = ( ( ) => {

  const is
  
    =
    
    !!
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item;
      
  return is;
  
  } ) ( );
  
if ( ! isDetail ) return; // bail if not detail

const

  callback = ( ) => {
  
    const
    
      buildProxyElement = ( ) => {
      
        const cloneElement = element.cloneNode ( true );
        
        let callback;
        
        cloneElement.id = `${ codeKey }-variants-proxy`;
        
        [
        
          ...
          
          cloneElement
          
            .querySelectorAll ( 'option' )
            
          ]
          
          .filter (
          
            e => e
            
              .textContent
              
              .includes ( '(Sold Out)' )
              
            )
            
          .forEach ( e => e.remove ( ) );
          
        callback = ( e ) => {
        
          let
          
            attribute,
            
            name;
            
          switch ( true ) {
          
            case is71 :
            
              attribute = 'name';
              
              break;
              
            case is70 :
            
              attribute = 'data-variant-option-name';
              
              break;
              
            }
            
          name = e.getAttribute ( attribute );
          
          cloneElement
          
            .querySelector (
            
              `select[ ${ attribute }="${ name }" ]`
              
              )
              
            .value
            
            =
            
            e.value;
            
          };
          
        element
        
          .querySelectorAll ( 'select' )
          
          .forEach ( callback );
          
        if ( ! proxyElement ) {
        
          proxyElement = cloneElement;
          
          element.after ( proxyElement );
          
          } else {
          
            proxyElement
            
              .replaceWith ( cloneElement );
              
            proxyElement = cloneElement;
            
            }
            
        callback = ( event ) => {
        
          let
          
            attribute,
            
            name;
            
          switch ( true ) {
          
            case is71 :
            
              attribute = 'name';
              
              break;
              
            case is70 :
            
              attribute = 'data-variant-option-name';
              
              break;
              
            }
            
          name = event
          
            .target
            
            .getAttribute ( attribute );
            
          const originalElement = element
          
            .querySelector (
            
              `select[ ${ attribute }="${ name }" ]`
                
              );
              
          originalElement
          
            .value
            
            =
            
            event
            
              .target
              
              .value;
              
          originalElement.dispatchEvent (
          
            new Event ( 'change', { bubbles : true } )
            
            );
            
          };
          
        proxyElement
        
          .addEventListener ( 'change', callback );
          
        },
        
      callback = ( mutations ) => {
      
        observer.disconnect ( );
        
        buildProxyElement ( );
        
        // start listening for changes in element
        
        observer.observe (
        
          element,
          
          options
            
          );
          
        },
        
      codeKey = 'twc-spdvsor',
      
      observer = new MutationObserver ( callback ),
      
      options = {
      
        childList : true,
        
        subtree : true
        
        },
        
      selector = [
      
        '#main-product-variants', // 7.1
        
        '.ProductItem-details .product-variants' // 7.0
        
        ]
        
        .join ( ', ' ),
        
      element = document
      
        .body
        
        .querySelector ( selector );
        
    if ( ! element ) return; // bail if no variants
    
    let proxyElement;
    
    buildProxyElement ( );
    
    // start listening for changes in element
    
    observer.observe (
    
      element,
      
      options
      
      );
      
    },
    
  ssVersion = Static
  
    .SQUARESPACE_CONTEXT
    
    .templateVersion,
    
  is70 = ssVersion === '7',
  
  is71 = ssVersion === '7.1';
  
switch ( true ) {

  case is71 :
  
    document
    
      .addEventListener ( 'DOMContentLoaded', callback );
      
    break;
    
  case is70 :
  
    Squarespace.onInitialize ( Y, callback );
    
    break;
    
  }
