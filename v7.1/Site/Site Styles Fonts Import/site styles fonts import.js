( async ( ) => {

  // debugger;
  
  /*
  
    site styles fonts import
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Version      : 7.1
    
    Note            : this code makes a calls to unofficial Squarespace APIs to
                      add categories to a store page
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Site Styles Fonts Import',
    
    version = '0.2.0',
  
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
      
  // bail if not logged in
  
  if ( ! isAuthenticatedAccount ) {
  
    const s = `
    
      TWC ${ title }
      
      Please log in to your Squarespace site.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return;
    
    }
    
  const codeKey = 'ssfi';
  
  let json;
  
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
      
  json = JSON.parse ( json );
  
  const isType =
  
    json?._meta?.codeKey
    
    ===
    
    'twc-ssfe';
    
  // bail if not type
  
  if ( ! isType ) {
  
    const s = `
    
      TWC ${ title }
      
      The import file is not recognized.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return;
    
    }
    
  const
  
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
    
  let webFonts;
  
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
      
        const prefix = font
        
          .cssString
          
          .split ( '-' )
          
          .slice ( 0, -1 )
          
          .join ( '-' )
          
          +
          
          '-';
          
        json
        
          .data
          
          .masterFonts
          
          .filter ( f =>
          
            f
            
            .fontValue
            
            .fontFamily
            
            .startsWith ( prefix )
            
            )
            
          .forEach ( f =>
          
            f
            
            .fontValue
            
            .fontFamily
            
            =
            
            font.cssString
            
            );
            
        };
        
    webFonts
    
      .filter (
      
        f => f.provider === 'custom'
        
        )
        
      .forEach ( forEachCallback );
      
    }
    
  json = JSON.stringify ( json.data );
  
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
