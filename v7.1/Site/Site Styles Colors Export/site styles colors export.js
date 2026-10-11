( async ( ) => {

  // debugger;
  
  /*
  
    site styles colors export
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.1
    
    SS Version      : 7.1
    
    Note            : this code makes a call to an unofficial Squarespace API
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Site Styles Colors Export',
    
    version = '0.2.1',
  
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
  
    codeKey = 'twc-ssce',
    
    json = {
    
      '_meta' : {
      
        'codeKey' : codeKey,
        
        exportDate :
        
          new Date ( ).toISOString ( )
          
        },
        
      'data' : undefined
      
      };
      
  try {
  
    const response = await fetch (
    
      '/api/website-colors'
      
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
      
    json.data = await response.json ( );
    
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
      
  // write file
  
  {
  
    let handle;
    
    try {
    
      handle = await wndw
      
        .showSaveFilePicker ( {
        
          suggestedName :
          
            'TWC Site Styles Colors.json',
            
          types : [ {
            
            description : 'JSON',
            
            accept : {
            
              'application/json' :
              
                [ '.json' ]
                
              }
              
            } ]
            
          } );
          
      } catch ( error ) {
      
        const isAbort =
        
          error.name === 'AbortError';
          
        if ( isAbort ) return;
        
        const s = `
        
          ${
          
            codeKey
            
            } there was an error saving the file, ${
            
              error
              
              }.
              
          `
          
          .trim ( )
          
          .replace ( /\s+/gm, ' ' );
          
        console.error ( s );
        
        throw error;
        
        }
        
    const
    
      objectSort = ( obj ) => {
      
        const isArray =
        
          Array.isArray ( obj );
          
        let o;
        
        if ( isArray ) {
        
          o = obj.map ( objectSort );
          
          return o;
          
          }
          
        const isObject =
        
          obj && typeof obj === 'object';
          
        if ( isObject ) {
        
          o = Object.fromEntries (
          
            Object
            
            .keys ( obj )
            
            .sort ( )
            
            .map ( key =>
            
              [
              
                key,
                
                objectSort ( obj [ key ] )
                
                ]
                
              )
              
            );
            
          return o;
          
          }
          
        return obj;
        
        },
        
      writable =
      
        await handle.createWritable ( );
        
    await writable.write (
    
      JSON.stringify (
      
        objectSort ( json ),
        
        null,
        
        2
        
        )
        
      );
    
    await writable.close ( );
    
    }
    
  } ) ( );
