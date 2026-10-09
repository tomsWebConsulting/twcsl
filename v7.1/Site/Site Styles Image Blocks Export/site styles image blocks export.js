( async ( ) => {

  // debugger;
  
  /*
  
    site styles image blocks export
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Note            : this code makes a call to an unofficial Squarespace API
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Site Styles Image Blocks Export',
    
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
    
  const codeKey = 'twc-ssse';
  
  let json;
  
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
      
    json = await response.json ( );
    
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
      
  // extract animation tweaks
  
  {
  
    json = json.tweakValues;
    
    json = Object.fromEntries (
    
      Object
    
      .entries ( json )
      
      .filter (
      
        ( [ k ] ) => k.startsWith (
        
          'image-block-'
          
          )
          
        )
        
      );
      
    json = JSON.stringify ( json );
    
    }
    
  // write file
  
  {
  
    const
    
      handle = await wndw
      
        .showSaveFilePicker ( {
        
          suggestedName :
          
            'Site Styles Image Blocks.json',
            
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
