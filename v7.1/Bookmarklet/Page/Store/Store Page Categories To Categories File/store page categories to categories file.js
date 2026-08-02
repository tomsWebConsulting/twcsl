( async ( ) => {

  // debugger;
  
  /*
  
    store page categories to categories file
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Note            : this code makes a calls to unofficial Squarespace APIs to
                      get and set blog page posts
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Store Page Categories To Categories File',
    
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
  
  let dcmnt = window.top.document;
  
  const isEditor = dcmnt
  
    .documentElement
    
    .classList
    
    .contains ( 'squarespace-damask' );
    
  if ( ! isEditor ) {
  
    const s = `
    
      TWC ${ title }
      
      Please log in to your Squarespace site.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if not logged in
    
    }
    
  const siteFrameElement = dcmnt
  
    .querySelector (
    
      'iframe[ data-testid = "sqs-site-frame" ]'
      
      );
      
  dcmnt = siteFrameElement
  
    ?.contentDocument;
    
  if ( ! dcmnt ) {
  
    const s = `
    
      TWC ${ title }
      
      Error : can not find the site frame.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if no site frame
    
    }
    
  const
  
    wndw = siteFrameElement
    
      .contentWindow,
      
    context = wndw
    
      .Static
      
      .SQUARESPACE_CONTEXT,
      
    isStorePage = context
    
      .collection
      
      ?.type
      
      ===
      
      13;
      
  if ( ! isStorePage ) {
  
    const s = `
    
      ${ title }
      
      This is not a Store Page.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if not store page
    
    }
    
  const
  
    codeKey = 'twc-spctcf',
    
    url = `/api/product-content-service/products/${
    
      context.collectionId
      
      }/categories/tree`;
      
  let categories;
  
  try {
  
    const response = await fetch ( url );
    
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
      
    categories = await response.json ( );
    
    categories =
    
      JSON.stringify ( categories );
      
    } catch ( error ) {
    
      const s = `
      
        ${
        
          codeKey
          
          }
          
        there has been a problem with your
        
        fetch get operation, ${
        
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
        
          suggestedName : 'categories.json',
          
          types : [ {
            
            description : 'JSON',
            
            accept : {
            
              'application/json' : [ '.json' ]
              
              }
              
            } ]
            
          } );
          
      writable =
      
        await handle.createWritable ( );
        
    await writable.write ( categories );
    
    await writable.close ( );
    
    }
    
  } ) ( );
