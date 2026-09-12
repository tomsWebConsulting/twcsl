( async ( ) => {

  // debugger;
  
  /*
  
    store page categories panel product categories copy
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.2.0
    
    SS Versions       : 7.1
    
    Note              : this code makes a call to a JSON version of a product's
                        data
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Store Page Categories Panel Product Categories Copy',
    
    version = '0.2.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    alertTitleMessage = ( message ) => {
    
      alert (
      
        `TWC ${ title }\n\n${ message }`
        
        );
        
      },
      
    dcmnt = window.top.document,
    
    isEditor = dcmnt
    
      .documentElement
      
      .classList
      
      .contains ( 'squarespace-damask' );
      
  if ( ! isEditor ) {
  
    const s = 'Please log in to your Squarespace site.';
    
    alertTitleMessage ( s );
    
    return; // bail if not logged in
    
    }
    
  const isStorePage = dcmnt
  
    .querySelector (
    
      'iframe[ data-testid = '
      
      +
      
      '"sqs-site-frame" ]'
      
      )
      
    ?.contentWindow
    
    .Static
    
    .SQUARESPACE_CONTEXT
    
    .collection
    
    ?.type
    
    ===
    
    13;
    
  if ( ! isStorePage ) {
  
    const s = 'Please run this bookmarklet on a Store Page.';
    
    alertTitleMessage ( s );
    
    return; // bail if not store page
    
    }
    
  const xPathEvaluate = (
  
    xPathExpression,
    
    contextNode
    
    ) => {
    
      const xPathResults = document
      
        .evaluate (
        
          xPathExpression,
          
          contextNode,
          
          null,
          
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
          
          null
          
          );
          
      return xPathResults;
      
      };
      
  let
  
    xPathExpression = `
    
      .//button [
      
        contains (
        
          @data-test,
          
          "menuHeader-back"
          
          )
          
        and
        
        contains (
        
          .,
          
          "Categories"
          
          )
          
        ]
                  
      `,
      
    xPathResults = xPathEvaluate (
    
      xPathExpression,
      
      dcmnt
      
      );
      
  if ( ! xPathResults.snapshotLength ) {
  
    const s = 'Please navigate to a Products Panel in a Store Page.';
    
    alertTitleMessage ( s );
    
    return; // bail if no categories panel
    
    }
    
  xPathExpression = `
  
    (
    
      .//div [
      
        @data-test = 'product-item'
        
        ]
        
      )
      
      [ 1 ]
      
    `,
    
  xPathResults = xPathEvaluate (
  
    xPathExpression,
    
    dcmnt
    
    );
    
  const
  
    element = xPathResults
    
      .snapshotItem ( 0 )
      
      .parentElement,
      
    getFiberKey = ( node ) => {
    
      const fiberKey = Object
      
        .keys ( node )
        
        .find (
        
          k =>
          
            k.startsWith ( '__reactFiber$' )
            
          );
          
      return fiberKey;
      
      },
      
    fiberKey = getFiberKey ( element );
    
  if ( ! fiberKey ) {
  
    const s = 'No React fiber key found.';
    
    alertTitleMessage ( s );
    
    return; // bail if no react
    
    }
    
  const
  
    codeKey = 'twc-spcppcc',
    
    id = element
    
      [ fiberKey ]
      
      .memoizedProps
      
      .children
      
      .key,
      
    url = `/api/commerce/products/${ id }`;
    
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
    
    categories = categories.categoryIds;
    
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
      
  localStorage.setItem (
  
    codeKey,
    
    JSON.stringify ( categories )
    
    );
    
  } ) ( );
