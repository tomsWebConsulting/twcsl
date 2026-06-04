( async ( ) => {

  // debugger;
  
  /*
  
    blog page list url slug last dash text remove
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Versions     : 7.1, 7.0
    
    Note            : this code has the potential to cause loss of data. use at
                      your own risk
                      
                      this code makes a calls to unofficial Squarespace APIs to
                      get and set blog page posts
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Blog Page List Url Slug Last Dash Text Remove',
    
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
    
  const isBlogPage
  
    =
    
    !!
    
    dcmnt
    
      .querySelector (
      
        [
            
          'body[ class*="collection-type-blog-" ]',
          
          'body[ class~="collection-type-blog" ]'
          
          ]
          
          .join ( ', ' )
          
        );
        
  // bail if not blog page
  
  if ( ! isBlogPage ) return;
  
  const
  
    wndw = siteFrameElement
    
      .contentWindow,
      
    context = wndw
    
      .Static
      
      .SQUARESPACE_CONTEXT,
      
    isList
    
      =
      
      !
      
      context
      
        .item
        
        ?.id;
        
  // bail if not list page
  
  if ( ! isList ) return;
  
  const searchParams =
  
    new URLSearchParams (
    
      wndw
      
        .location
        
        .search
        
      );
      
  searchParams.append ( 'format', 'json' );
  
  const
  
    codeKey = 'twc-bplusldtr',
    
    url = `${
    
      wndw.location.pathname
      
      }?${
      
        searchParams.toString ( )
        
        }`;
        
  let items;
  
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
      
    items = await response.json ( );
    
    items = items.items;
    
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
      
    crumb = getCookieValue ( 'crumb' );
    
  for ( const i of items ) {
  
    const url = `/api/content/blogs/${
    
      i.collectionId
      
      }/text-posts/${
      
        i.id
        
        }`;
        
    let json;
    
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
        
      json = await response.json ( );
      
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
        
    // delete
    
    {
    
      delete json.assetUrl;
      
      delete json.authorId;
      
      delete json.fullUrl;
      
      delete json.hasFileData;
      
      delete json.pendingPushedServices;
      
      delete json.pushedServices;
      
      }
      
    // add
    
    {
    
      if ( ! json.childType )
      
        json.childType = null;
        
      if ( ! json.clickThroughUrl )
      
        json.clickThroughUrl = null;
        
      if ( ! json.colorData )
      
        json.colorData = null;
        
      if ( ! json.dataSize )
      
        json.dataSize = null;
        
      if ( ! json.dislikeCount )
      
        json.dislikeCount = 0;
        
      if ( ! json.displayIndex )
      
        json.displayIndex = 0;
        
      if ( ! json.fileName )
      
        json.fileName = null;
        
      if ( ! json.likeCount )
      
        json.likeCount = 0;
        
      if ( ! json.proxyForId )
      
        json.proxyForId = null;
        
      if ( ! json.publicCommentCount )
      
        json.publicCommentCount = 0;
        
      if ( ! json.sourceUrl )
      
        json.sourceUrl = null;
        
      if ( ! json.systemDataId )
      
        json.systemDataId = null;
        
      if ( ! json.systemDataOrigin )
      
        json.systemDataOrigin = null;
        
      if ( ! json.systemDataVariants )
      
        json.systemDataVariants = null;
        
      }
      
    json.authorId = i.authorId;
    
    json.updatedOn =
    
      new Date ( ).getTime ( );
      
    json.urlId = i.urlId.replace ( /-[^-]+$/, '' );
    
    json.websiteId = context.website.id;
    
    console.log ( json );
    
    try {
    
      const response = await fetch (
      
        url,
        
        {
        
          body : JSON.stringify ( json ),
          
          headers : {
          
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
            
          there has been a problem with your
          
          fetch post operation, ${
          
            error
            
            }.
            
          `
          
          .trim ( )
          
          .replace ( /\s+/gm, ' ' );
          
        console.error ( s );
        
        }
                
    }
    
  wndw.location.reload ( );
  
  } ) ( );
