( ( ) => {

  /*!
  
    store page detail product dimensions
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.6.0
    
    SS Version      : 7.1
    
    Products V2
    Compatible      : Yes
    
    Fluid
    Engine
    Compatible      : Not Applicable
    
    Notes           : this code currently supports only variant display dropdown
                      
                      the dimensions entered in the squarespace editor are
                      shipping dimensions, not product dimensions. if you don't
                      need to use shipping dimensions for shipping you can use
                      it for product dimensions. if you need product dimensions
                      as well as shipping then use the <script id="twc-spdpd">
                      tag referenced in the read me
    
    Copyright       : 2022-2025 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.6.0',
    
    s = `
    
      Store Page Detail Product Dimensions v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const callback = ( ) => {
  
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
    
    const
    
      codeKey = 'twc-spdpd',
      
      selector = [
      
        '.product-description',
        
        '.sqs-block-html .sqs-block-content'
        
        ]
        
        .join ( ', ' );
        
      triggerText = `[ ${ codeKey } ]`;
      
    let elements = [
    
      ...
      
      document
      
        .body
        
        .querySelectorAll ( selector )
        
      ]
      
      .filter (
      
        e => e
        
          .textContent
          
          .includes ( triggerText )
          
        );
        
    if ( ! elements.length ) return; // bail if no trigger text
          
    const
    
      variants = Static
      
        .SQUARESPACE_CONTEXT
        
        .product
        
        .variants,
        
      hasVariants = variants.length;
      
    if ( ! hasVariants ) return; // continue if no variants
    
    const
    
      applyMatch = ( format, m, dimensions, sizeUnit, weightUnit ) => {
      
        const
        
          decimalPlaces = m [ 2 ],
          
          newUnit = m [ 3 ];
          
        let
        
          r,
          
          unit;
          
        switch ( m [ 1 ] ) {
        
          case 'h' :
          case 'l' :
          case 'w' :
          
            r = dimensions [
            
              hlwMap [
              
                m [ 1 ]
                
                ]
                
              ];
              
            unit = sizeUnit;
            
            break;
            
          case 'k' :
          case 'p' :
          
            r = dimensions.weight
              
            unit = weightUnit;
            
            break;
            
          }
          
        r = convertUnitCallbacks
        
          [ unit ]
          
          [ newUnit ]
          
          ( r )
          
          .toFixed ( decimalPlaces );
          
        format = format
        
          .replaceAll ( m [ 0 ], r );
          
        return format;
        
        },
        
      convertUnitCallbacks = {
      
        CENTIMETER : {
        
          Cm : ( cm ) => cm,
          
          In : ( cm ) => cm / 2.54,
          
          Mm : ( cm ) => cm * 10
          
          },
          
        INCH : {
        
          Cm : ( inch ) => inch * 2.54,
          
          In : ( inch ) => inch,
          
          Mm : ( inch ) => inch / 0.039370
          
          },
          
        KILOGRAM : {
        
          Kg : ( kg ) => kg,
          
          Lb : ( lb ) => lb * 0.453592
          
          },
          
        POUND : {
        
          Kg : ( kg ) => kg * 2.20462,
          
          Lb : ( lb ) => lb
          
          }
          
        },
        
      handleEvent = ( event ) => {
      
        const isVariantSelected
        
          =
          
          !
          
          [
          
            ...
            
            variantElements
            
            ]
          
            .filter ( e => ! e.querySelector ( 'select' )?.value )
            
            .length;
            
        if ( ! isVariantSelected ) return; // bail if no variant selected
        
        const addKeyValue = ( element ) => {
        
          attributes [
          
            element
            
              .getAttribute ( 'data-variant-option-name' )
              
            ]
            
            =
            
            element
            
              .querySelector (
              
                '.variant-select-wrapper'
                
                )
                
              .getAttribute ( 'data-selected-value' )
              
          };
          
        let attributes = { };
        
        variantElements.forEach ( addKeyValue );
        
        attributes = JSON.stringify ( attributes );
        
        elements.forEach (
        
          e => e.classList.add ( hideClassName )
          
          );
          
        [
        
          ...
          
          elements
          
          ]
          
          .filter (
          
            e => e.dataset.attributes === attributes
            
            )
            
          .forEach (
          
            e => e.classList.remove ( hideClassName )
            
            );
            
        },
        
      hasUnselected = document
      
        .body
        
        .querySelector (
        
          '.product-meta .product-variants '
          
          +
          
          '.variant-select-wrapper select '
          
          +
          
          '.unselected-option-value'
          
          ),
          
      hideClassName = `${ codeKey }--hide`,
      
      hlwMap = {
      
        h : 'height',
        
        l : 'length',
        
        w : 'width'
        
        },
        
      options = codeKey
      
        .split ( '-' )
        
        .reduce ( ( obj, key ) => obj?.[ key ], window ),
        
      re = new RegExp ( `\\[ ${ codeKey } \\]`, 'gm' ),
      
      replaceTextNodeWithHTML = ( node, html ) => {
      
        const template = document
        
          .createElement ( 'template' );
          
        template.innerHTML = html;
        
        node.replaceWith ( template.content );
        
        },
        
      replaceTriggerText = ( element ) => {
      
        const walker = document
        
          .createTreeWalker (
          
            element,
            
            NodeFilter.SHOW_TEXT
            
            );
            
        while ( walker.nextNode ( ) ) {
        
          const
          
            node = walker.currentNode,
            
            text = node.textContent,
            
            hasTriggerText = re.test ( text );
            
          if ( ! hasTriggerText ) continue;
          
          replaceTextNodeWithHTML (
          
            node,
          
            html
            
            );
            
          }
          
        },
        
      variantCallback = ( variant ) => {
      
        const
        
          attributes =  JSON
          
            .stringify ( variant.attributes ),
            
          shippingSize = variant
            
            .shippingSize,
            
          shippingWeight = variant
          
            .shippingWeight,
            
          dimensions
          
            =
            
            options
            
              ?.variants
              
              ?.[ attributes ]
              
            ??
            
            {
            
              height : shippingSize.height,
              
              length : shippingSize.len,
              
              weight : shippingWeight.value,
              
              width : shippingSize.width
              
              },
              
          hasDimensions = Object
          
            .values ( dimensions )
            
            .some ( Boolean );
            
        if ( ! hasDimensions ) return; // continue if no dimensions
        
        const
        
          clss
          
            =
            
            hasVariants
            
              >
              
              1
              
            ?
            
            ` ${ hideClassName }`
            
            :
            
            '',
          
          matches = [
          
            ...
            
            options
            
              .format
              
              .matchAll ( /%([hklpw])(\d)(Cm|In|Kg|Lb|Mm)/g )
              
            ],
            
          sizeUnit = shippingSize.unit,
          
          weightUnit = shippingWeight.unit,
          
          format = matches.reduce (
          
            ( f, m ) =>
            
              applyMatch ( f, m, dimensions, sizeUnit, weightUnit ),
              
            options.format
            
            );
            
        html += `
        
          <span class="${
          
            codeKey
            
            }${
            
              clss
              
              }" data-attributes='${
              
                attributes
                
                }'>
            
            ${ format }
            
            </span>
            
          `
          
          .trim ( );
          
        },
        
      variantElements = document
      
        .body
        
        .querySelectorAll (
        
          '#main-product-variants .variant-option'
          
          );
          
    let html = '';
    
    variants.forEach (
    
      v => variantCallback ( v )
      
      );
      
    if ( ! hasUnselected )
    
      html = html
      
        .replace ( ` ${ hideClassName }`, '' );
        
    elements.forEach ( replaceTriggerText );
    
    elements = document
    
      .body
      
      .querySelectorAll ( `.${ codeKey }` );
      
    document
    
      .body
      
      .querySelector ( '#main-product-variants' )
      
      ?.addEventListener ( 'change', handleEvent );
    
    };
    
  document
  
    .addEventListener ( 'DOMContentLoaded', callback );
    
  } ) ( );
