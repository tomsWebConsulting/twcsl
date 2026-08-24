( async ( ) => {

  // debugger;
  
  /*
  
    blank page links open in new window tab off
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Version      : 7.1
    
    Notes           : this bookmarklet makes a call to an unofficial Squarespace
                      API
                      
                      gallery sections are not supported
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Blank Page Links Open in New Window Tab Off',
    
    version = '0.2.0',
  
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
    
      'iframe[ data-testid = '
      
      +
      
      '"sqs-site-frame" ]'
      
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
    
  const
  
    context = siteFrameElement
    
      .contentWindow
      
      .Static
      
      .SQUARESPACE_CONTEXT,
      
    isBlankPage =
    
      context
      
      .collection
      
      .type
      
      ===
      
      10;
    
  // bail if not blank page
  
  if ( ! isBlankPage ) {
  
    const s = `TWC ${ title }
    
      This Page is not of type Blank.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return;
    
    }
    
  let
  
    isChanged = false,
    
    obj;
    
  const
  
    codeKey = 'twc-bploinwto',
    
    collectionId = context.collectionId,
    
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
      
    mutateButtonNewWindow = (
    
      node,
      
      parent,
      
      key
      
      ) => {
      
        const isKey =
        
          key
          
          ===
          
          'buttonNewWindow';
          
        // bail if not key
        
        if ( ! isKey ) return;
        
        // bail if false
        
        if ( ! node ) return;
          
        parent [ key ] = false;
        
        isChanged = true;
        
        },
        
    transformHtml = ( html ) => {
    
      const
      
        text = 'target="_blank" '
        
        hasText = html.includes ( text );
        
      // continue
      
      if ( ! hasText ) return html;
      
      html = html.replaceAll (
      
        text,
        
        ''
        
        );
        
      isChanged = true;
      
      return html;
      
      },
      
    url = `/api/pages/by-collection-id/${
    
      collectionId
      
      }`,
      
    mutateHtmlNode =
    
      (
      
        node,
        
        parent,
        
        key
        
        ) => {
        
          const hasKey = [
          
            'description',
            
            'html',
            
            'source'
            
            ]
            
            .includes ( key );
            
          if ( ! hasKey ) return; // continue
          
          const isString =
          
            typeof node
            
            ===
            
            'string';
            
          // continue
          
          if ( ! isString ) return;
          
          parent [ key ] =
          
            transformHtml ( node );
            
          },
          
    mutateNode = ( node, parent, key ) => {
    
      mutateButtonNewWindow (
      
        node,
        
        parent,
        
        key
        
        );
        
      mutateHtmlNode (
      
        node,
        
        parent,
        
        key
        
        );
        
      },
      
    walk = (
    
      node,
      
      parent = null,
      
      key = null,
      
      fnctn
      
      ) => {
      
        fnctn ( node, parent, key );
        
        if ( Array.isArray ( node ) ) {
        
          for (
          
            let i = 0;
            
            i < node.length;
            
            i++
            
            )
            
              walk (
              
                node [ i ],
                
                node,
                
                i,
                
                fnctn
                
                );
                
          return;
          
          }
          
        if (
        
          node
          
          &&
          
          typeof node === 'object'
          
          )
          
          for (
          
            const k of Object.keys ( node )
            
            )
            
              walk (
              
                node [ k ],
                
                node,
                
                k,
                
                fnctn
                
                );
                
      },
      
    wndw = siteFrameElement
    
      .contentWindow,
      
    crumb = getCookieValue ( 'crumb' );
    
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
      
    obj = await response.json ( );
    
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
      
  walk ( obj, null, null, mutateNode );
  
  // no change
  
  if ( ! isChanged ) {
  
    const s = `TWC ${ title }
    
      No changes have been made to open links in new tab for this Page.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return;
    
    }
    
  const json = JSON.stringify ( obj );
  
  try {
  
    const response = await fetch (
    
      url,
      
      {
      
        body : json,
        
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
     
  // is complete and reload
  
  {
  
    const s = `TWC ${ title }
    
      Open links in new tab have been disabled.
      
      The page will now reload.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    wndw.location.reload ( );
    
    }
    
  } ) ( );
