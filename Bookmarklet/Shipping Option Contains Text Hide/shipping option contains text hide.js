( ( ) => {

  /*
  
    shipping option contains text hide
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    Copyright   : 2026 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Shipping Option Contains Text Hide',
    
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
    
  const text = prompt (
    
      `TWC ${ title }\n\nHide Shipping `
      
      +
      
      'Options that contain text?\n\n'
      
      +
      
      'To show hidden items reload the '
      
      +
      
      'page.'
      
      );
      
  // bail if no text
  
  if ( ! text ) return;
  
  wndw
  
    .document
    
    .body
    
    .querySelectorAll (
    
      '[ data-testid = "shipping-options-'
      
      +
      
      'list" ] li'
      
      )
      
    .forEach (
    
      e => {
      
        const hasText =
        
          e.textContent.includes ( text );
          
        // bail if no text
        
        if ( ! hasText ) return;
        
        e.style.display = 'none';
        
        }
        
      );
      
  } ) ( );
