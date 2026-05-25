( ( ) => {

  // debugger;
  
  /*!
  
    store page detail sku add
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.3.0
    
    SS Version        : 7.1
    
    Dependencies      : store page detail variant selected callback
                        < https://tinyurl.com/5cju3x4w >
    
    Copyright         : 2024-2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const version = '0.3.0',
  
    s = `Store Page Detail Sku Add v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2024-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc spdsa sub-module
    
    twc.spdsa = twc.spdsa || { };
    
    }
    
  let elements;
  
  const
  
    codeKey = 'twc-spdsa',
    
    options = codeKey
    
      .split ( /-(.*)/ )
      
      .filter ( Boolean )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    spanElement = `
    
      <span class="${ codeKey }">
      
        ${
        
          options
          
            .noVariantSelectedText
            
            }
            
        </span>
        
      `,
      
    addElements = ( element ) => {
      
      const html = element
      
        .innerHTML
        
        .replaceAll (
        
          `[ ${ codeKey } ]`,
          
          spanElement
          
          )
          
        .replace ( /\s+/g, ' ' );
        
      element
      
        .innerHTML
        
        =
        
        html;
        
      },
      
    domContentLoadedCallback = ( ) => {
    
      elements = document
      
        .body
        
        .querySelectorAll (
        
          '.product-detail '
          
          +
          
          '.product-meta '
          
          +
          
          '.product-description'
          
          );
          
      elements.forEach ( addElements );
      
      elements = [
      
        ...
        
        elements
        
        ]
        
        .flatMap (
        
          e => [
          
            ...
            
            e.querySelectorAll (
              
              `.${ codeKey }`
              
              )
              
            ]
            
          );
          
      document
      
        .body
        
        .querySelector (
        
          '.product-detail .product-meta'
          
          )
          
        .style
        
        .setProperty (
        
          '--twc-spdsa-excerpt-visibility',
          
          'visible'
          
          );
          
      };
      
  // initialize twc spdvsc sub-module
  
  twc.spdvsc = twc.spdvsc || { };
  
  // initialize twc spdvsc callbacks sub-module
  
  twc.spdvsc.callbacks = ( ( self ) => {
  
    const callback = (
    
      sku,
      
      selectedVariant,
      
      context,
      
      element
      
      ) => {
      
        elements.forEach (
        
          e => e.textContent = sku
          
          );
          
        };
        
    self.push ( callback );
    
    return self;
    
    } ) ( twc.spdvsc.callbacks || [ ] );
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
