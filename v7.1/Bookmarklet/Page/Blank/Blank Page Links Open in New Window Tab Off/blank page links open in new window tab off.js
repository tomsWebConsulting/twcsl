( async ( ) => {

  // debugger;
  
  /*
  
    blank page links open in new window tab off
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0-development.3
    
    SS Version      : 7.1
    
    Notes           : this bookmarklet makes a call to an unofficial Squarespace
                      API page sections
                      
                      gallery sections are not supported
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Blank Page Links Open in New Window Tab Off',
    
    version = '0.1.0-development.3',
  
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
      
      23;
    
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
    
  const
  
    codeKey = 'twc-bploinwto',
    
    dataPageSections = dcmnt
    
      .body
      
      .querySelector (
      
        '#sections[ data-page-sections ]'
        
        )
        
      .getAttribute (
      
        'data-page-sections'
        
        ),
        
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
      
    urlPrefix = `/api/page-sections/${
    
      dataPageSections
      
      }`,
      
    wndw = siteFrameElement
    
      .contentWindow,
      
    crumb = getCookieValue ( 'crumb' );
    
  let
  
    obj,
    
    url = urlPrefix;
    
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
      
  // console.log ( json );
  
  delete obj.collectionId;
  
  delete obj.id;
  
  delete obj.websiteId;
  
  const json = JSON
  
    .stringify ( obj )
  
    .replace (
    
      /target=\\"_blank\\" */g,
      
      ''
      
      )
      
    .replace (
    
      /("updatedOn":)\d+/,
      
      `$1${ new Date ( ).getTime ( ) }`
      
      );
      
  console.log ( json );
  
  url = `${
  
    urlPrefix
    
    }/collection/${
    
      wndw
      
        .Static
        
        .SQUARESPACE_CONTEXT
        
        .collectionId
        
      }?forceSave=false`;
      
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
      
  wndw.location.reload ( );
  
  } ) ( );
