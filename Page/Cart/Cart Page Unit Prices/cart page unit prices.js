( ( ) => {

  /*!
  
    cart page unit prices
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.2.0
    
    SS Versions       : 7.1, 7.0
    
    Dependencies      : cart page observe changes
                        
                        < https://tinyurl.com/323xeep5 >
    
    Note              : adding unit proces on the cart page does not effect the
                        store pages, checkout, or other Squarespace
                        pages/backend storage. This is purely a cosmetic change.
                        no code can change the checkout page. it is an
                        Squarespace security feature
    
    Copyright         : 2021-2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.2.0',
    
    s = `
    
      Cart Page Unit Prices v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc =
  
    ( ( self ) => self )
    
    ( window.twc || { } );
    
  // initialize twc cpoc sub-module
  
  twc.cpoc =
  
    ( ( self ) => self )
    
    ( twc.cpoc || { } );
    
  // initialize twc cpoc callbacks sub-module
  
  twc.cpoc.callbacks =
  
    ( ( self ) => self )
    
    ( twc.cpoc.callbacks || { } );
    
  // initialize twc cpoc callbacks added sub-module
  
  twc.cpoc.callbacks.added =
  
    ( ( self ) => {
    
      const callback = (
      
        node,
        
        stopObserver,
        
        startObserver
        
        ) => {
        
          const isCartContainer = node
          
            .getAttribute ( 'data-test' )
            
            ===
            
            "cart-container";
            
          // bail if not element of interest
          
          if ( ! isCartContainer ) return;
          
          const
          
            addUnitPriceElement = ( element ) => {
            
              const
              
                priceElement = element
                
                  .querySelector ( '.cart-row-price' ),
                  
                unitPrice = new Intl
                
                  .NumberFormat (
                  
                    Static
                    
                      .SQUARESPACE_CONTEXT
                      
                      .website
                      
                      .language,
                      
                    {
                    
                      style : 'currency',
                      
                      currency : Static
                      
                        .SQUARESPACE_CONTEXT
                        
                        .websiteSettings
                        
                        .storeSettings
                        
                        .selectedCurrency
                        
                        }
                        
                    )
                    
                    .format (
                    
                      getUnitPrice ( element )
                      
                      ),
                      
                unitPriceElement = priceElement
                
                  .cloneNode ( ),
                  
                classList = unitPriceElement
                
                  .classList;
                  
              classList.remove ( 'cart-row-price' );
              
              classList.add (
              
                `${ codeKey }-cart-row-unit-price`
                
                );
                
              unitPriceElement.setAttribute (
              
                'aria-label',
                
                unitPrice
                
                );
                
              unitPriceElement.textContent =
              
                unitPrice;
                
              priceElement
              
                .insertAdjacentElement (
                
                  'beforebegin',
                  
                  unitPriceElement
                  
                  );
                  
              },
              
            codeKey = 'twc-cpup',
            
            getUnitPrice = ( element ) => {
            
              const
              
                price = Number(
                
                  element
                  
                    .querySelector ( '.cart-row-price' )
                  
                    .textContent
                    
                    .replace ( /[^0-9.-]+/g, '' )
                    
                  ),
                  
                quantity = Number (
                
                  element
                  
                    .querySelector ( 'input' )
                    
                    .value
                    
                  ),
                  
                unitPrice = ( price / quantity )
                
                  .toFixed ( 2 );
                  
              return unitPrice;
              
              },
              
            selector = 'div[ data-testid = "cart-table-row" ]';
            
          node
          
            .querySelectorAll ( selector )
            
            .forEach ( addUnitPriceElement );
            
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cpoc.callbacks.added || [ ] );
      
  } ) ( );
