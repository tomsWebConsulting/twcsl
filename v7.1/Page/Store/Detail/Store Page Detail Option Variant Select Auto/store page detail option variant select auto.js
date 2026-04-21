( ( ) => {

  /*!
  
    store page detail option variant select auto
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.1
    
    SS Version      : 7.1
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.1',
    
    s = `
    
      Store Page Detail Option Variant Select Auto v${ version }
      
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
    
  // bail if not store page
  
  if ( ! isStorePage ) return;
  
  const isDetail
  
    =
    
    !!
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item;
      
  // bail if not detail
  
  if ( ! isDetail ) return;
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc spdovsao sub-module
    
    twc.spdovsao =
    
      twc.spdovsao
      
      ||
      
      { optionVariantMap : { } };
      
    }
    
  const
  
    codeKey = 'twc-spdovsao',
    
    options = codeKey
    
      .split ( /-(.*)/ )
      
      .filter ( Boolean )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    optionVariantMap =
    
      options.optionVariantMap,
      
    searchParams = new URLSearchParams (
    
      location.search
      
      ),
      
    selectVariant = (
    
      element,
      
      value,
      
      isRadio,
              
      isSelect,
      
      Y
      
      ) => {
      
        switch ( true ) {
        
          case isRadio :
          
            element
            
              .querySelector (
              
                `input[ value = "${
                
                  value
                  
                  }" ]`
                  
                )
                
              .checked = true;
              
            break;
            
          case isSelect :
          
            element = element
            
              .querySelector (
              
                '.variant-select-wrapper'
                
                );
                
            element.setAttribute (
            
              'data-selected-value',
              
              value
              
              );
              
            element = element
            
              .querySelector ( 'select' );
              
            element.value = value;
            
            break;
            
          }
          
        Y
        
          .one ( element )
          
          .simulate ( 'change' );
          
        },
        
    variantAttributeNames =
    
      Static
      
        .SQUARESPACE_CONTEXT
        
        .product
        
        .variantAttributeNames,
        
    domContentLoadedCallback =
    
      ( ) => {
      
        const
        
          isRadio =
          
            !!
            
            document
            
              .body
              
              .querySelector (
              
                '.variant-radiobtn-wrapper'
                
                ),
                
          isSelect =
          
            !!
            
            document
            
              .body
              
              .querySelector (
              
                '.variant-select-wrapper'
                
                );
                
        for (
        
          const [
          
            key, value
            
            ] of searchParams
          
          ) {
          
            const isOption =
            
              variantAttributeNames
              
                .includes ( key );
                
            // bail if no option
            
            if ( ! isOption ) continue;
            
            optionVariantMap [ key ] =
            
              value;
              
            }
            
        const entries = Object.entries (
        
          optionVariantMap
          
          );
          
        for (
        
          const [
          
            key, value
            
            ] of entries
          
          ) {
          
            selectVariant (
            
              document
              
                .body
                
                .querySelector (
                
                  `[
                  
                    data-variant-option-name
                    
                    =
                    
                    "${ key }"
                    
                    ]`
                    
                  ),
                  
                value,
                
              isRadio,
              
              isSelect,
              
              Y
              
              );
              
            }
            
        };
        
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
