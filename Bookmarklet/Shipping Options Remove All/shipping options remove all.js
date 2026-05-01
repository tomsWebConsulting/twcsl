( async ( ) => {

  /*
  
    shipping options remove all
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    Copyright   : 2026 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Shipping Options Remove All',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    wndw = window.top,
    
    isPanel =
    
      wndw.location.pathname
      
      ===
      
      '/config/settings/selling/shipping';
      
  // bail of not panel
  
  if ( ! isPanel ) {
  
    alert (
    
      `TWC ${ title }\n\nNo Shipping panel.`
      
      );
      
    return;
    
    }
    
  const isDelete = confirm (
    
      `TWC ${ title }\n\nAre `
      
      +
      
      'sure you want to delete all '
      
      +
      
      'Shipping options? This can not '
      
      +
      
      'be undone.'
      
      );
      
  // bail if no delete
  
  if ( ! isDelete ) return;
  
  const
  
    codeKey = 'twc-sora',
    
    delay = ( ms ) => {
    
      const p = new Promise (
      
        r => {
        
          setTimeout (
          
            ( ) => r ( ),
            
            ms
            
            );
            
          }
          
        );
        
      return p;
        
      },
      
    elements = wndw
    
      .document
      
      .body
      
      .querySelectorAll (
      
        '[ data-testid = "shipping-options-'
        
        +
        
        'list" ] li'
        
        ),
        
    getCookieValue = ( key ) => {
    
      let v = '';
      
      try {
      
        v = wndw
        
          .document
          
          .cookie
          
          .split ( '; ' )
          
          .find (
          
            row =>
            
              row.startsWith ( `${ key }=` )
              
            )
            
          .split ( '=' ) [ 1 ];
          
        } catch ( error ) { }
        
      return v;
      
      },
      
    crumb = getCookieValue ( 'crumb' ),
    
    deleteCallback = async ( element ) => {
    
      console.log ( 'pulse' );
      
      const
      
        fiberKey = Object
        
          .keys ( element )
          
          .find (
          
            k => k.startsWith (
            
              '__reactFiber$'
              
              )
              
            ),
            
        fulfillmentOption =
        
          element
          
          [ fiberKey ]
          
          .return
          
          .return
          
          .return
          
          .return
          
          .return
          
          .return
          
          .return
          
          .memoizedProps
          
          .fulfillmentOption;
          
      try {
      
        const response = await fetch (
        
          '/api/commerce/shipping-options/'
          
          +
          
          fulfillmentOption.id,
          
          {
          
            method : 'DELETE',
            
            headers : {
            
              'Content-Type' :
              
                'application/json;'
                
                +
                
                'charset=utf-8',
                
              'X-Csrf-Token' : crumb
              
              }
              
            }
            
          );
          
        if ( ! response.ok ) {
        
          const s = `
          
            ${
            
              codeKey
              
              }
              
              network response was not ok ${
            
                response
                
                  .statusText
                  
                  }
                  
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          throw new Error ( s );
          
          }
          
        } catch ( error ) {
        
          const s = `
          
            ${
            
              codeKey
              
              } there has been a problem
              
              with your fetch get operation,
            
              ${ error }.
              
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          console.error ( s );
          
          }
          
      element.remove ( );
      
      await delay ( 1000 );
      
      };
      
  for ( const e of elements ) {
  
    await deleteCallback ( e );
    
    }
    
  } ) ( );
