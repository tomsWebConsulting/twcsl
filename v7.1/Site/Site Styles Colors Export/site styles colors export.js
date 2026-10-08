( async ( ) => {

  // debugger;
  
  /*
  
    site styles colors export
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Note            : this code makes a call to an unofficial Squarespace API
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Site Styles Colors Export',
    
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
    
  const codeKey = 'twc-ssce';
  
  let json;
  
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
      
    json = await response.text ( );
    
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
  
    const
    
      handle = await wndw
      
        .showSaveFilePicker ( {
        
          suggestedName :
          
            'Site Styles Colors.json',
            
          types : [ {
            
            description : 'JSON',
            
            accept : {
            
              'application/json' :
              
                [ '.json' ]
                
              }
              
            } ]
            
          } );
          
      writable =
      
        await handle.createWritable ( );
        
    await writable.write ( json );
    
    await writable.close ( );
    
    }
    
  } ) ( );
