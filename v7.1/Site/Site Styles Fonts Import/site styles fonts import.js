( async ( ) => {

  // debugger;
  
  /*
  
    site styles fonts import
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Note            : this code makes a calls to unofficial Squarespace APIs to
                      add categories to a store page
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Site Styles Fonts Import',
    
    version = '0.1.0',
  
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .trim ( )
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    wndw = window.top,
    
    isAuthenticatedAccount = wndw
      
      .Static
      
      .SQUARESPACE_CONTEXT
      
      .authenticatedAccount;
      
  if ( ! isAuthenticatedAccount ) {
  
    const s = `
    
      TWC ${ title }
      
      Please log in to your Squarespace site.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if not logged in
    
    }
    
  const
  
    codeKey = 'ssci',
    
    dcmnt = wndw.document,
    
    getCookieValue = ( key ) => {
    
      let v = '';
      
      try {
      
        v = dcmnt
        
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
      
    crumb = getCookieValue ( 'crumb' );
    
  let
  
    json,
    
    webFonts;
    
  try {
  
    const
    
      [ handle ] =
      
        await wndw.showOpenFilePicker ( ),
        
      file = await handle.getFile ( );
      
    json = await file.text ( );
    
    } catch ( error ) {
    
      const isAbort =
      
        error.name === 'AbortError';
        
      if ( isAbort ) return;
      
      const s = `
      
        ${
        
          codeKey
          
          } there was an error opening the file, ${
          
            error
            
            }.
            
        `
        
        .trim ( )
        
        .replace ( /\s+/gm, ' ' );
        
      console.error ( s );
      
      throw error;
      
      }
      
  try {
  
    const response = await fetch (
    
      '/api/web-fonts'
      
      );
      
    if ( ! response.ok ) {
    
      const s = `
      
        ${
        
          codeKey
          
          } network response was not ok ${
          
            response.statusText
            
            }
            
        `
        
        .trim ( )
        
        .replace ( /\s+/gm, ' ' );
        
      throw new Error ( s );
      
      }
      
    webFonts = await response.json ( );
    
    } catch ( error ) {
    
      const s = `
      
        ${
        
          codeKey
          
          }
          
        there has been a problem with your fetch get operation, ${
        
          error
          
          }.
          
        `
        
        .trim ( )
        
        .replace ( /\s+/gm, ' ' );
        
      console.error ( s );
      
      }
      
  // patch custom fonts
  
  {
  
    const
    
      forEachCallback = ( font ) => {
      
        const
        
          prefix = font
          
            .cssString
            
            .split ( '-' )
            
            .slice ( 0, -1 )
            
            .join ( '-' ),
            
          re =
          
            RegExp ( `${ prefix }-[^"]+` );
            
        json = json.replace (
        
          re,
          
          font.cssString
          
          );
          
        };
        
    webFonts
    
      .filter (
      
        f => f.provider === 'custom'
        
        )
        
      .forEach ( forEachCallback );
      
    }
    
  try {
  
    const response = await fetch (
    
      '/api/website-fonts',
      
      {
      
        body : json,
        
        headers : {
        
          Accept :
          
            'application/json, text/plain, */*',
            
          'Content-Type' :
          
            'application/json',
            
          'X-Csrf-Token' : crumb
          
          },
          
        method : 'PUT'
        
        }
        
      );
      
    if ( ! response.ok ) {
    
      const s = `
      
        ${
        
          codeKey
          
          } network response was not ok ${
          
            response.statusText
            
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
          
          }
          
        there has been a problem with your fetch post operation, ${
        
          error
          
          }.
          
        `
        
        .trim ( )
        
        .replace ( /\s+/gm, ' ' );
        
      console.error ( s );
      
      }
      
  wndw.location.reload ( );
  
  } ) ( );
