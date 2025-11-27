/*!

  store page tags product mark add
  
  License         : < https://tinyurl.com/s872fb68 >
  
  Version         : 0.1.0
  
  SS Version      : 7.1
  
  Products V2
  Compatible      : Yes
  
  Fluid
  Engine
  Compatible      : Not Applicable
  
  Dependencies    : Page Tags Cache < https://tinyurl.com/4frfus4a >
  
  Note            : this code is comprised of a style and script tag. both are
                    needed for the full effect to work
  
  Copyright       : 2025 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  */
  
( ( ) => {

  const
  
    version = '0.1.0',
    
    s = `Store Page Tags Product Mark Add v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  } ) ( );
  
// initialize twc module

window.twc = ( ( self ) => self ) ( window.twc || { } );

// initialize twc ptc sub-module

twc.ptc = ( ( self ) => self ) ( twc.ptc || { } );

// initialize twc ptc callbacks sub-module

twc.ptc.callbacks = ( ( self ) => {

  const callback = ( tags ) => {
  
    const
    
      callback = ( element ) => {
      
        const callback = ( className ) => {
        
          let
          
            html,
            
            position,
            
            selector;
            
          switch ( true ) {
          
            case isList : {
            
              html = `
              
                <div class="product-mark ${ codeKey } ${
                
                  className
                  
                    .slice ( 4 )
                    
                    .replace ( codeKey, '' )
                    
                    .slice ( 1 )
                    
                    }">
                    
                  ${ map [ className ] }
                  
                  </div>
                  
                `;
                
              selector = '.product-list-item-link '
              
                +
                
                '.product-list-item-meta .product-list-item-status';
                
              const
              
                statusElement = element
                
                  .querySelector ( selector ),
                  
                productMarkElement = [
                
                  ...
                  
                  statusElement
                  
                    .querySelectorAll ( '.product-mark' )
                    
                  ]
                  
                  .slice ( -1 )
                  
                  [ 0 ];
                  
              if ( productMarkElement ) {
              
                element = productMarkElement;
                
                position = 'afterend';
                
                } else {
                
                  element = statusElement;
                  
                  html = `
                  
                    <div class="grid-meta-status" data-test="plp-grid-status">
                    
                      ${ html }
                      
                      </div>
                      
                    `;
                    
                  position = 'afterbegin';
                  
                  }
                  
              break;
              
              }
              
            case isDetail : {
            
              html = `
              
                <span class="product-mark ${ codeKey } ${
                
                  className
                  
                    .slice ( 4 )
                    
                    .replace ( codeKey, '' )
                    
                    .slice ( 1 )
                    
                  }">
                  
                    ${ map [ className ] }
                    
                  </span>
                  
                `;
                
              selector = '.product-meta .product-status';
              
              const statusElement = element
              
                .querySelector ( selector );
                
              if ( statusElement ) {
              
                element = statusElement;
                
                position = 'beforeend';
                
                } else {
                
                  html = `
                  
                    <div class="product-status" data-animation-role="content">
                    
                      ${ html }
                      
                      </div>
                      
                    `;
                    
                  position = 'afterend';
                  
                  selector = '.product-meta .product-scarcity';
                  
                  element = element
                  
                    .querySelector ( selector );
                    
                  }
                  
              break;
              
              }
              
            }
            
          element
          
            .insertAdjacentHTML (
            
              position,
              
              html
            
              );
              
          };
        
        [
        
          ...
          
          element
          
            .classList
            
          ]
          
          .filter ( c => c.startsWith ( `tag-${ codeKey }-` ) )
          
          .forEach ( callback );
          
        },
        
      codeKey = 'twc-sptpma',
      
      isDetail
      
        =
        
        !!
        
        Static
        
          .SQUARESPACE_CONTEXT
          
          .item,
          
      isList
      
        =
        
        !
        
        Static
        
          .SQUARESPACE_CONTEXT
          
          .item
          
          ?.id,
          
      map = { },
      
      selector = [
      
        '.product-list .product-list-item', // list
        
        '.product-detail' // detail
        
        ]
        
        .join ( ', ' );
        
    tags.forEach (
    
      t =>
      
        map [ t.className ]
        
        =
        
        t.name.replace ( `${ codeKey } `, '' )
        
      );
      
    document
    
      .body
      
      .querySelectorAll ( selector )
      
      .forEach ( callback );
      
    };
    
  self.push ( callback );
  
  return self;
  
  } ) ( twc.ptc.callbacks || [ ] );
