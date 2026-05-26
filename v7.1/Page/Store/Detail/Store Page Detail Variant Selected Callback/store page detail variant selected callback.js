( ( ) => {

  // debugger;
  
  /*!
  
    store page detail variant selected callback
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.5.0
    
    SS Version      : 7.1
    
    Copyright       : 2023-2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const debugFlag = false;
  
  const
  
    title = 'Store Page Detail Variant Selected Callback',
    
    version = '0.5.0',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2023-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
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
    
    // initialize twc spdvsc sub-module
    
    twc.spdvsc = twc.spdvsc || { };
    
    // initialize twc spdvsc callbacks sub-module
    
    twc.spdvsc.callbacks =
    
      twc.spdvsc.callbacks || [ ];
      
    }
    
  const
  
    codeKey = 'twc-spdvsc',
    
    options = codeKey
    
      .split ( /-(.*)/ )
      
      .filter ( Boolean )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    callbacks = options
    
      .callbacks,
      
    hasCallbacks = callbacks.length;
    
    if ( debugFlag )
    
      console.log (
      
        `${ codeKey } callbacks : `,
        
        callbacks
        
        );
        
  if ( ! hasCallbacks ) {
  
    console.warn (
    
      `${
      
        codeKey
        
        } no callbacks`
        
      );
      
    return;
    
    }
    
  let
  
    context,
    
    elements,
    
    variants;
    
  const
  
    objectsShallowEqual =
    
      ( obj1, obj2 ) => {
      
        const
        
          keys1 = Object.keys ( obj1 ),
          
          keys2 = Object.keys ( obj2 );
          
        let isEqual =
        
          keys1.length === keys2.length;
          
        // bail id keys lengths not equal
        
        if ( ! isEqual ) return false;
        
        for ( let key of keys1 ) {
        
          isEqual =
          
            obj1 [ key ] === obj2 [ key ];
            
          // bail if key/value pair not equal
          
          if ( ! isEqual ) return false;
          
          }
          
        return true;
        
        },
        
    runCallbacks = (
    
      sku,
      
      variant,
      
      context,
      
      element
      
      ) => {
      
        callbacks.forEach (
        
          c => {
          
            try {
            
              c (
              
                sku,
                
                variant,
                
                context,
                
                element
                
                );
                
              } catch ( error ) {
              
                console.error (
                
                  s = `${
                  
                    codeKey
                    
                    } callback error`,
                    
                  error
                  
                  );
                  
                }
                
            },
            
          );
          
        },
        
    changeCallback = ( event ) => {
    
      console.log ( event.currentTarget );
      
      const
      
        element = event.target,
        
        isRadio =
        
          element
          
            .tagName
            
            ===
            
            'INPUT'
            
          &&
          
          element
          
            .getAttribute ( 'type' )
            
            ===
            
            'radio';
          
        isSelect = element
        
          .tagName
          
          ===
          
          'SELECT';
          
      if ( debugFlag ) {
      
        console.log (
        
          `${ codeKey } element : `,
          
          element
          
          );
          
        console.log (
        
          `${
          
            codeKey
            
            } event : `,
            
          event
          
          );
          
        console.log (
        
          `${
          
            codeKey
            
            } isRadio : `,
            
          isRadio
          
          );
          
        console.log (
        
          `${
          
            codeKey
            
            } isSelect : `,
            
          isSelect
          
          );
          
        }
        
      let isVariantSelected;
      
      const attributes = { };
      
      switch ( true ) {
      
        case isRadio : {
        
          isVariantSelected = [
          
            ...
            
            element
            
              .closest (
              
                '.field-list'
                
                )
                
              .children
              
            ]
            
            .map (
            
              e => {
              
                const
                
                  optionName =
                  
                    e.getAttribute (
                    
                      'data-variant-option-name'
                      
                      ),
                      
                  optionElements =
                  
                    [
                    
                      ...
                      
                      elements
                      
                      ]
                    
                    .filter (
                    
                      e => e
                      
                        .id
                        
                        .startsWith (
                        
                          `variant-option-${
                          
                            optionName
                            
                            }-`
                            
                          )
                      
                      ),
                      
                  is =
                  
                    !
                    
                    optionElements
                    
                    .every (
                    
                      e =>
                      
                        e.checked
                        
                        ===
                        
                        false
                        
                      );
                        
                attributes
                
                  [
                  
                    optionName
                        
                    ]
                    
                  =
                  
                  optionElements
                  
                    .filter (
                    
                      e => e.checked
                      
                      )
                      
                    [ 0 ]
                    
                    ?.value;
                      
                return is;
                
                }
                
              )
              
            .every ( v => v === true );
            
          break;
          
          }
          
        case isSelect : {
        
          isVariantSelected =
          
            [
            
              ...
              
              elements
              
              ]
            
            .every ( e => e.value );
            
          elements.forEach (
            
            e => {
            
              attributes
              
                [
                
                  e
                  
                    .closest (
                    
                      '.variant-option'
                      
                      )
                      
                    .getAttribute (
                    
                      'data-variant-option-name'
                      
                      )
                      
                  ]
                  
                =
                
                e.value;
                
              }
              
            );
            
          break;
          
          }
          
        }
        
      if ( debugFlag )
      
        console.log (
        
          `${
          
            codeKey
            
            } isVariantSelected : `,
            
          isVariantSelected
          
          );
          
      // bail if no variant selected
      
      if ( ! isVariantSelected ) return;
      
      if ( debugFlag )
      
        console.log (
        
          `${
          
            codeKey
            
            } attributes : `,
            
          attributes
          
          );
          
      const variant = variants.filter (
      
        v => objectsShallowEqual (
        
          v.attributes,
          
          attributes
          
          )
          
        )
        
        [ 0 ];
        
      if ( debugFlag )
      
        console.log (
        
          `${ codeKey } variant : `,
          
          variant
          
          );
          
      runCallbacks (
      
        variant.sku,
        
        variant,
        
        context,
        
        element
        
        );
        
      },
      
    domContentLoadedCallback =
    
      ( ) => {
      
        context = JSON
        
          .parse (
          
            document
          
            .body
            
            .querySelector (
            
              '.product-detail'
              
              )
              
            .getAttribute (
            
              'data-context'
              
              )
              
            );
            
        const
        
          product = context.product,
          
          productType =
          
            product.productType,
            
          hasSku =
          
            !
            
            [
            
              2 // digital
              
              ]
              
            .includes ( productType );
            
        if ( debugFlag ) {
        
          console.log (
          
            `${ codeKey } context : `,
            
            context
            
            );
            
          console.log (
          
            `${ codeKey } product : `,
            
            product
            
            );
            
          console.log (
          
            `${ codeKey } hasSku : `,
            
            hasSku
            
            );
            
          console.log (
          
            `${ codeKey } productType : `,
            
            productType
            
            );
            
          }
          
        // bail if no sku
        
        if ( ! hasSku ) return;
        
        variants = product.variants;
        
        if ( debugFlag )
        
          console.log (
          
            `${ codeKey } variants : `,
            
            variants
            
            );
            
        if ( variants.length === 1 ) {
        
          runCallbacks (
          
            variants [ 0 ].sku,
            
            variants [ 0 ],
            
            context
            
            );
            
          return;
          
          }
          
        elements = document
        
          .body
          
          .querySelector (
          
            '#main-product-variants'
            
            );
            
        elements.addEventListener (
        
          'change',
          
          changeCallback
          
          );
          
        elements = elements
        
          .querySelectorAll (
          
            [
            
              '.radio-button-input',
              
              '.variant-select'
              
              ]
              
              .join ( ', ' )
              
            );
            
        if ( debugFlag )
        
          console.log (
          
            `${ codeKey } elements : `,
            
            elements
            
            );
            
        };
        
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
