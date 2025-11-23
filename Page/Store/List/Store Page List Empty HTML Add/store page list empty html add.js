( ( ) => {

  /*!
  
    store page list empty html add
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.3.0
    
    SS Versions   : 7.1, 7.0
    
    v7.1
    Products V2
    Compatible    : Yes
    
    v7.1
    Fluid
    Engine
    Compatible    : Not Applicable
    
    v7.0
    Templates     : Brine ( Aria, Blend, Burke, Cacao, Clay, Fairfield, Feed,
                    Foster, Greenwich, Hatch, Heights, Hunter, Hyde, Impact,
                    Jaunt, Juke, Keene, Kin, Lincoln, Maple, Margot, Marta,
                    Mentor, Mercer, Miller, Mojave, Moksha, Motto, Nueva, Pedro,
                    Pursuit, Rally, Rover, Royce, Sofia, Sonora, Stella, Thorne,
                    Vow, Wav, West )
                    
                    your template is not listed? then it is not currently
                    supported
    
    Copyright     : 2021-2025 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.3.0',
    
    s = `
    
      Store Page List Empty HTML Add v${ version }
      
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
  
  const isList
  
    =
    
    !
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item
      
      ?.id;
      
  if ( ! isList ) return; // bail if not list page
  
  // global
  
  {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc spleha sub-module
    
    twc.spleha = ( ( self ) => self ) ( twc.spleha || { } );
    
    }
    
  const
  
    codeKey = 'twc-spleha',
    
    options = codeKey
    
      .split ( '-' )
      
      .reduce ( ( obj, key ) => obj?.[ key ], window ),
      
    hasOptions = Object
    
      .keys ( options )
      
      .length;
      
  if ( ! hasOptions ) return; // bail if no options
  
  const
  
    callback = ( ) => {
    
      const
      
        element = document
        
          .body
          
          .querySelector (
          
            [
            
              '.product-list .product-list-container', // 7.1
              
              '.ProductList-grid', // 7.0 ( Brine )
              
              ]
              
              .join ( ', ' )
              
            ),
            
        hasProducts
        
          =
          
          !!
          
          element
          
            .querySelector (
            
              [
              
                '.product-list-item', // 7.1
                
                '.ProductList-item', // 7.0 ( Brine )
                
                ]
                
                .join ( ', ' )
                
              );
              
      if ( hasProducts ) return; // bail if has products
      
      element
      
        .insertAdjacentHTML (
        
          'beforeend',
          
          `
          
            <div id="${ codeKey }">
            
              ${ options.html }
              
              </div>
              
            `
            
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
    
  } ) ( );
