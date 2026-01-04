( ( ) => {

  /*!
  
    form text field max length data
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Versions     : 7.1, 7.0
    
    v7.1
    Products V2
    Compatible      : Yes
    
    v7.1
    Fluid
    Engine
    Compatible      : Yes
    
    Dependencies    : cart page observe changes
                      
                      < https://tinyurl.com/2tbppm2v >
    
    Notes           : this code is a base for other effects
                    
                      this code makes calls to the json version of products
                      for information that is not normally available
    
                      this code does not work on the checkout page. it is a
                      Squarespace security feature that no code can alter
                      the checkout page
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `
    
      Form Text Field Max Length Data v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc ftfmld sub-module
  
  twc.ftfmld = ( ( self ) => {
  
    const options = {
    
      ids : [ ]
      
      };
      
    Object
    
      .assign (
      
        self,
        
        options
        
        );
        
    return self;
    
    } ) ( twc.ftfmld || { } );
    
  // initialize twc cpoc sub-module
  
  twc.cpoc =
  
    ( ( self ) => self ) ( twc.cpoc || { } );
    
  // initialize twc cpoc callbacks sub-module
  
  twc.cpoc.callbacks =
  
    ( ( self ) => self )
    
    ( twc.cpoc.callbacks || { } );
    
  // initialize twc cpoc callbacks added sub-module
  
  twc.cpoc.callbacks.added =
  
    ( ( self ) => {
    
      const callback = async ( node ) => {
      
        const isElement = node
        
          .nodeType
          
          ===
          
          1;
          
        if ( ! isElement ) return; // bail if not element
        
        const isCartContainer = node
        
          .getAttribute ( 'data-test' )
          
          ===
          
          "cart-container";
          
        // bail if not element of interest
        
        if ( ! isCartContainer ) return;
        
        const
        
          fetchJsonBatch = async ( urls ) => {
          
            try {
            
              const responses = await Promise.all (
              
                urls.map ( async ( url ) => {
                
                  const response = await fetch ( url );
                  
                  if ( ! response.ok ) {
                  
                    const s = `
                    
                      ${ codeKey } network response was not ok ${ response.statusText }
                      
                      `
                      
                      .trim ( )
                      
                      .replace ( /\s+/gm, ' ' );
                      
                    throw new Error ( s );
                    
                    }
                    
                  return response.json ( );
                  
                } )
                
              );
              
              return responses; // array of JSON objects
              
            } catch ( error ) {
            
              const s = `
              
                ${ codeKey } there has been a problem with your fetch batch operation,
                
                ${ error }.
                
                `
                
                .trim ( )
                
                .replace ( /\s+/gm, ' ' );
                
              console.error ( s );
              
              return null;
              
              }
              
            },
            
          urls = [
          
            ...
            
            node
            
              .querySelectorAll ( '.cart-row-title' )
              
            ]
            
            .map (
            
              e => `${ e.getAttribute ( 'href' ) }?format=json`
              
              ),
              
          results = await fetchJsonBatch ( urls );
          
        if ( ! results ) return; // bail if no results
        
        results.forEach ( o => {
        
          const item = o.item;
          
          options.ids.push ( item.id );
          
          item
          
            .variants
            
            .forEach (
            
              v => options.ids.push ( v.sku )
              
              );
              
          } );
          
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cpoc.callbacks.added || [ ] );
      
  const
  
    codeKey = 'twc-ftfmld',
    
    collectClassNames = ( obj, a = [ ] ) => {
    
      for ( const key in obj ) {
      
        const
        
          value = obj [ key ],
          
          isOject =
          
            value && typeof value === 'object',
            
          isString = typeof value === 'string';
          
        if ( isString )
        
          a.push ( value );
          
          else if ( isOject )
          
            collectClassNames ( value, a );
            
        }
        
      return a;
      
      },
      
    dclCallback = async ( ) => {
    
      const
      
        isList
        
          =
          
          !
          
          Static
          
            .SQUARESPACE_CONTEXT
            
            .item
            
            ?.id,
            
        isStorePage = Static
        
          .SQUARESPACE_CONTEXT
          
          .collection
          
          ?.type
          
          ===
          
          13,
          
        isStorePageList =
        
          isStorePage && isList;
          
      if ( isStorePageList ) {
      
        try {
        
          const url = Static
          
            .SQUARESPACE_CONTEXT
            
            .collection
            
            .fullUrl
            
            +
            
            '?format=json';
            
          const response = await fetch ( url );
          
          if ( ! response.ok ) {
          
            const s = `
            
              ${ codeKey } network response was not ok ${
              
                response
                
                  .statusText
                  
                  }
                  
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
            throw new Error ( s );
            
            }
            
          const
          
            itemCallback = ( item ) => {
            
              options.ids.push ( item.id );
              
              item.variants.forEach (
              
                v => options.ids.push ( v.sku )
                
                );
                
              },
              
            obj = await response.json ( );
            
          obj
          
            .items
            
            .forEach ( itemCallback );
          
          return;
            
          } catch ( error ) {
          
            const s = `
            
              ${ codeKey } there has been a problem with your fetch get operation,
              
              ${ error }.
              
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
            console.error ( s );
            
            }
            
        }
        
      const
      
        selector = '.sqs-add-to-cart-button-wrapper';
        
      document
      
        .body
        
        .querySelectorAll ( selector )
        
        .forEach ( elementCallback );
        
      },
        
    elementCallback = async ( element ) => {
    
      const
      
        classNames = {
        
          // 7.1, 7.0; product block
          
          productBlock : 'product-block',
          
          '7.1' : {
          
            // plp : 'product-list-item',
            
            pdp : 'product-detail',
            
            pdpAddOn : 'product-add-ons'
            
            },
            
          7 : {
          
            pdp : 'ProductItem-details'
            
            }
            
          },
          
        selector = collectClassNames ( classNames )
        
          .map ( c => `.${ c }` )
          
          .join( ', ' );
          
      element = element.closest ( selector );
      
      const
      
        classList = element.classList,
        
        isPdp
        
          =
          
          classList.contains (
          
            classNames
            
              [ '7.1' ]
              
              .pdp
              
            )
            
          ||
          
          classList.contains (
          
            classNames
            
              [ '7' ]
              
              .pdp
              
            ),
            
        isPdpAddOn = classList.contains (
        
          classNames
          
            [ '7.1' ]
            
            .pdpAddOn
            
          ),
          
        isProductBlock = classList
        
          .contains (
          
            classNames
            
              .productBlock
              
            );
            
      switch ( true ) {
      
        case isPdp :
        
          options.ids.push (
          
            Static.SQUARESPACE_CONTEXT.itemId
            
            );
            
          Static
          
            .SQUARESPACE_CONTEXT
            
            .product
            
            .variants
            
            .forEach (
            
              v => options.ids.push ( v.sku )
              
              );
              
          break;
          
        case isPdpAddOn : {
        
          try {
          
            const url = element
            
              .querySelector ( '.add-on-thumbnail-link' )
              
              .getAttribute ( 'href' )
              
              +
              
              '?format=json';
              
            const response = await fetch ( url );
            
            if ( ! response.ok ) {
            
              const s = `
              
                ${ codeKey } network response was not ok ${
                
                  response
                  
                    .statusText
                    
                    }
                    
                `
                
                .trim ( )
                
                .replace ( /\s+/gm, ' ' );
                
              throw new Error ( s );
              
              }
              
            const
            
              obj = await response.json ( ),
              
              item = obj.item;
              
            options.ids.push ( item.id );
            
            item
            
              .variants
              
              .forEach (
              
                v => options.ids.push ( v.sku )
                
                );
                
            } catch ( error ) {
            
              const s = `
              
                ${ codeKey } there has been a problem with your fetch get operation,
                
                ${ error }.
                
                `
                
                .trim ( )
                
                .replace ( /\s+/gm, ' ' );
                
              console.error ( s );
              
              }
              
          break;
          
          }
          
        case isProductBlock : {
        
          const obj = JSON.parse (
          
            element
            
              .getAttribute ( 'data-product' )
              
            );
            
          options.ids.push ( obj.id );
          
          obj?.variants.forEach (
          
            v => options.ids.push ( v.sku )
            
            );
            
          break;
          
          }
          
        }
        
      },
      
    options = codeKey
    
      .split ( '-' )
      
      .reduce ( ( obj, key ) => obj?.[ key ], window );
      
  document
  
    .addEventListener ( 'DOMContentLoaded', dclCallback );
    
  } ) ( );
