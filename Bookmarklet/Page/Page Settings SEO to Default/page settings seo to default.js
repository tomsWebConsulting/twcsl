( async ( ) => {

  // debugger;
  
  /*
  
    page settings seo to default
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Versions     : 7.1, 7.0
    
    Note            : this code makes a call to an unofficial Squarespace API
                      product content service products categories tree or
                      GetCollectionCategories for information that is not
                      normally available through other means
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Page Settings SEO to Default',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  let dcmnt = window.top.document;
  
  const isEditor = dcmnt
  
    .documentElement
    
    .classList
    
    .contains ( 'squarespace-damask' );
    
  if ( ! isEditor ) {
  
    const s = `TWC ${ title }
    
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
  
    const s = `TWC ${ title }
    
      Error : can not find the site frame.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if no site frame
    
    }
    
  let url = '/api/commondata/'
  
    +
    
    `GetCollectionSettings?collectionId=${
    
      siteFrameElement
      
        .contentWindow
        
        .Static
        
        .SQUARESPACE_CONTEXT
        
        .collectionId
        
      }`;
      
  const
  
    codeKey = 'twc-psstd',
    
    json = {
    
      memberAreaData : { }
      
      };
      
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
      
    json.collectionData =
    
      await response.json ( );
      
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
      
      return;
      
      }
      
  // console.log ( json );
  
  const
  
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
      
    seoData = json.collectionData.seoData,
    
    crumb = getCookieValue ( 'crumb' ),
    
    isDefault = confirm (
    
      `TWC ${ title }\n\nAre `
      
      +
      
      'sure you want SEO set to default?\n\n'
      
      +
      
      'Current settings:\n'
      
      +
      
      `Title: ${
      
        seoData.seoTitle
        
        ||
        
        ''
        
        }\nDescription: ${
        
          seoData.seoDescription
          
          ||
          
          ''
          
          }\nHide Page from Search Results: ${
          
            seoData.seoHidden
            
            ||
            
            false
            
            }`
            
      );
      
  // bail if no default
  
  if ( ! isDefault ) return;
  
  Object
  
    .assign (
    
      json.collectionData,
      
        {
        
          collectionId :
          
            json.collectionData.id,
            
          password : '',
          
          seoData : {
          
            seoDescription = '',
            
            seoHidden : false,
              
            seoTitle = ''
            
            }
            
          }
          
      );
      
  url =
  
    '/api/commondata/SaveCollectionSettings';
    
  try {
  
    const response = await fetch (
    
      url,
      
      {
      
        body : JSON.stringify ( json ),
        
        headers : {
        
          'Content-Type' :
          
            'application/json;'
            
            +
            
            'charset=utf-8',
            
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
          
        there has been a problem with your
        
        fetch post operation, ${
        
          error
          
          }.
          
        `
        
        .trim ( )
        
        .replace ( /\s+/gm, ' ' );
        
      console.error ( s );
      
      }
              
  } ) ( );
