( ( ) => {

  /*!
  
    store page list image hover title add
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Products V2
    Compatible      : Yes
    
    Fluid
    Engine
    Compatible      : Not Applicable
    
    Note            : the code is comprised of a style and script tag. both are
                      needed for the full effect to work
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
  
    s = `
    
      Store Page List Image Hover Title Add v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
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
  
  const isList
  
    =
    
    !
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item
      
      ?.id;
      
  if ( ! isList ) return; // bail if not list
  
  const dclCallback = ( ) => {
  
    const
    
      itemCallback = ( element ) => {
      
        const title = element
        
          .parentElement
          
          .getAttribute ( 'aria-label' );
          
        element.insertAdjacentHTML (
        
          'beforeend',
          
          `
          
            <figcaption>
            
              ${ title }
              
              </figcaption>
              
            `
            
          );
        
        },
        
      selector =
      
        '.product-list .product-list-item .product-list-item-link '
        
        +
        
        '.product-list-image-wrapper';
        
    document
    
      .body
      
      .querySelectorAll ( selector )
      
      .forEach ( itemCallback );
      
    };
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dclCallback
    
    );
    
  } ) ( );
