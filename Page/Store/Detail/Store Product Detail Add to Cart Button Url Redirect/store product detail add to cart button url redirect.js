( ( ) => {

  // debugger;
  
  /*!
  
    store product detail add to cart button url redirect
    
    License             : < https://tinyurl.com/s872fb68 >
    
    Version             : 0.8.2
    
    SS Versions         : 7.1, 7.0
    
    v7.0 Templates      : Avenue
                          
                          Bedford ( Anya, Bryant, Hayden )
                          
                          Brine ( Aria, Blend, Burke, Cacao, Clay,
                          Fairfield, Feed, Foster, Greenwich, Hatch,
                          Heights, Hunter, Hyde, Impact, Jaunt, Juke, Keene,
                          Kin, Lincoln, Maple, Margot, Marta, Mentor,
                          Mercer, Miller, Mojave, Moksha, Motto, Nueva,
                          Pedro, Pursuit, Rally, Rover, Royce, Sofia,
                          Sonora, Stella, Thorne, Vow, Wav, West )
                          
                          Pacific ( Bryler, Charlotte, Fulton*, Horizon,
                          Naomi )
                          
                          your template is not listed? then it is not
                          currently supported
                          
                          * discontinued < https://tinyurl.com/y9d8fwvx >
    
    Note                : when testing redirects in the Editor you may get
                          a redirect error as some sites refuse to load when
                          loaded in the Editor. This is not an error or bug
                          in my code. you can check the redirect in either
                          private browsing < https://bit.ly/3f6lhq2 > or
                          using ?noredirect
    
    Copyright           : 2021-2026 Thomas Creedon
                          
                          Tom's Web Consulting
                          
                          < http://www.tomsWeb.consulting/ >
        
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Store Product Detail Add to Cart Button Url Redirect',
    
    version = '0.8.2',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    context = Static
    
      .SQUARESPACE_CONTEXT,
      
    isStorePage = context
      
      .collection
      
      ?.type
      
      ===
      
      13;
      
  // bail if not store page
  
  if ( ! isStorePage ) return;
  
  const isDetail =
  
    !! context.item;
    
  // bail if not detail page
  
  if ( ! isDetail ) return;
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc spdatcbur sub-module
    
    twc.spdatcbur = twc.spdatcbur || { };
    
    }
    
  const
  
    codeKey = 'twc-spdatcbur',
    
    findPreviousMatchingSibling =
    
      ( element, selector ) => {
      
        let
        
          b,
          
          previousSiblingElement =
          
            element
            
              ?.previousElementSibling;
              
        while ( previousSiblingElement ) {
        
          b = previousSiblingElement
          
            .matches ( selector );
            
          if ( b )
          
            return previousSiblingElement;
            
          previousSiblingElement =
          
            previousSiblingElement
            
              .previousElementSibling;
              
          }
          
        return null;
        
        },
        
    objectsShallowEqual =
    
      ( obj1, obj2 ) => {
      
        const
        
          keys1 = Object.keys ( obj1 ),
          
          keys2 = Object.keys ( obj2 );
          
        let isEqual =
        
          keys1.length
          
          ===
          
          keys2.length;
          
        // bail id keys lengths not equal
        
        if ( ! isEqual ) return false;
        
        for ( let key of keys1 ) {
        
          isEqual =
          
            obj1 [ key ]
            
            ===
            
            obj2 [ key ];
            
          // bail if key/value pair not equal
          
          if ( ! isEqual )
          
            return false;
            
          }
          
        return true;
        
        },
        
    options = codeKey
    
      .split ( /-(.*)/ )
      
      .filter ( Boolean )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    selector =
    
      '.sqs-add-to-cart-button',
      
    ssVersion = context
    
      .templateVersion,
      
    callback = ( ) => {
    
      const
      
        variants = context
        
          .product
          
          .variants,
          
        hasIdUrlMap =
        
          options?.idUrlMap,
          
        hasTargetAtttributeValue =
        
          options.targetAtttributeValue
          
          !==
          
          '',
          
        ids = variants?.map (
        
          v => v.sku
          
          ),
          
        clickEventCallback =
        
          ( event ) => {
          
            let id;
            
            const
            
              element =
              
                event.currentTarget,
                
              productVariantsElement =
                
                findPreviousMatchingSibling (
                
                  element // 7.1
                  
                    .closest (
                    
                      '.product-add-to-cart'
                      
                      )
                      
                  ||
                  
                  element, // 7.0
                  
                  '.product-variants'
                  
                  );
                
            if ( productVariantsElement )
            
              switch ( true ) {
              
                case is71 : {
                
                  const elements =
                  
                    productVariantsElement
                    
                      .querySelectorAll (
                      
                        '.variant-select-wrapper'
                        
                        ),
                        
                    isVariantSelected =
                    
                      !
                      
                      [
                      
                        ...
                        
                        elements
                        
                        ]
                      
                        .filter (
                        
                          e => e
                          
                            .getAttribute (
                            
                              'data-selected-value'
                              
                              )
                            
                            .startsWith (
                            
                              'Select '
                              
                              )
                              
                          )
                          
                          .length;
                          
                  // bail if no variant selected
                  
                  if ( ! isVariantSelected )
                  
                    return;
                    
                  const
                  
                    attributes = { },
                    
                    callback =
                    
                      ( element ) => {
                      
                        attributes
                        
                          [
                          
                            element
                            
                              .closest (
                              
                                '.variant-option'
                                
                                )
                                
                              .getAttribute (
                              
                                'data-variant-option-name'
                                
                                )
                                
                            ]
                            
                          =
                          
                          element
                          
                            .getAttribute (
                            
                              'data-selected-value'
                              
                              );
                              
                        };
                        
                  elements.forEach (
                  
                    callback
                    
                    );
                    
                  id =
                  
                    variants
                    
                    .filter (
                    
                      v => objectsShallowEqual (
                      
                        v.attributes,
                        
                        attributes
                        
                        )
                        
                      )
                      
                    [ 0 ]
                    
                    .sku;
                    
                  // get id from Static
                  
                  break;
                  
                  }
                  
                case is70 : {
                
                  let selectedVariant =
                    
                    productVariantsElement
                    
                      .getAttribute (
                      
                        'data-selected-variant'
                        
                        );
                        
                  // bail if no selected variant
                  
                  if ( ! selectedVariant )
                  
                    return;
                    
                  selectedVariant = JSON
                  
                    .parse ( selectedVariant );
                    
                  id = selectedVariant.sku;
                  
                  break;
                  
                  }
                  
                }
                
              else
              
                if ( ids )
                
                  id = variants
                  
                    [ 0 ]
                    
                    .sku;
                    
                  else
                  
                    id = context
                    
                      .item
                      
                      .id;
                      
            // bail if no id
            
            if ( ! id ) return;
            
            const url =
            
              id
              
              in
              
              options.idUrlMap
              
              ?
              
              options
              
                .idUrlMap
                
                [ id ]
                
              :
              
              options.url;
              
            window.open (
            
              url,
              
              options
              
                .targetAtttributeValue
                
              );
              
            };
                
      if ( ! hasIdUrlMap )
      
        options.idUrlMap = { };
        
      if ( ! hasTargetAtttributeValue )
      
        options.targetAtttributeValue
        
        =
        
        '_self';
        
      if ( ! ids )
      
        ids.push (
        
          context.itemId
          
          );
          
      // bail if no ids in map
      
      {
      
        const isBail =
        
          options.bailIfNoIdsInMap
          
          &&
          
          !
          
          ids.some (
          
            r => Object
            
              .keys ( options.idUrlMap )
              
              .indexOf ( r )
              
              >=
              
              0
              
            );
            
        if ( isBail ) return;
        
        }
        
      document
      
        .body
        
        .querySelectorAll ( selector )
        
        .forEach (
        
          e =>
          
            e.replaceWith (
            
              e.cloneNode ( true )
              
              )
              
          );
          
      const elements =
      
        document
        
          .body
          
          .querySelectorAll ( selector );
          
        elements.forEach (
        
          e =>
          
            e
            
              .classList
              
              .add ( codeKey )
              
          );
          
        elements.forEach (
        
          e => e.addEventListener (
          
            'click',
            
            clickEventCallback
            
            )
            
          );
          
      },
      
    is70 = ssVersion === '7',
    
    is71 = ssVersion === '7.1';
    
  switch ( true ) {
  
    case is71 :
    
      window.addEventListener (
      
        'load',
        
        callback
        
        );
        
      break;
      
    case is70 :
    
      Squarespace.onInitialize (
      
        Y,
        
        callback
        
        );
        
      break;
      
    }
    
  } ) ( );
