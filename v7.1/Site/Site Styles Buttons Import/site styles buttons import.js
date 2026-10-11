( async ( ) => {

  // debugger;
  
  /*
  
    site styles buttons import
    
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
  
    title = 'Site Styles Buttons Import',
    
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
    
  const codeKey = 'ssbi';
  
  let obj;
  
  try {
  
    const
    
      [ handle ] =
      
        await wndw.showOpenFilePicker ( ),
        
      file = await handle.getFile ( );
      
    obj = await file.text ( );
    
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
      
  obj = JSON.parse ( obj );
  
  const isType =
  
    obj?._meta?.codeKey
    
    ===
    
    'twc-ssbe';
    
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
    
  let body;
  
  try {
  
    const response = await fetch (
    
      '/api/template/GetTemplateTweakSettings?version=3'
      
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
      
    body = await response.json ( );
    
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
    
  // merge
  
  {
  
    body = body.tweakValues;
    
    Object.assign (
    
      body,
      
      obj.data
      
      );
      
    body = new URLSearchParams (
    
      {
      
        tweakJson : JSON.stringify ( body )
        
        }
        
      )
      
      .toString ( );
      
    }
    
  try {
  
    const response = await fetch (
    
      '/api/template/SetTemplateTweakSettings',
      
      {
      
        body : body,
        
        headers : {
        
          Accept :
          
            'application/json, text/plain, */*',
            
          'Content-Type' :
          
            'application/x-www-form-urlencoded; charset=UTF-8',
            
          'X-Csrf-Token' : crumb
          
          },
          
        method : 'POST'
        
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
