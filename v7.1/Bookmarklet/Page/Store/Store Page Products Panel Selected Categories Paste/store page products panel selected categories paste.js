( ( ) => {

  // debugger;
  
  /*
  
    store page products panel selected categories paste
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Notes           : you must be careful using this code as while it is not
                      destructive it can make massive additions of categories to
                      your products
                      
                      this code does not work on products without images
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Store Page Products Panel Selected Categories Paste',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const alertTitleMessage = ( message ) => {
  
    alert (
    
      `TWC ${ title }\n\n${ message }`
      
      );
      
    };
    
  let categories = localStorage
  
    .getItem ( 'twc-spdcc' );
    
  if ( ! categories ) {
  
    const s = 'Please use the TWC Store Page Detail Categories Copy '
    
      +
      
      'bookmarklet < https://tinyurl.com/s872fb68 > before this bookmarklet.';
      
    alertTitleMessage ( s );
    
    return; // bail no categories
    
    }
    
  const
  
    documentTop = window.top.document,
    
    documentElementTop = documentTop
    
      .documentElement,
      
    isEditor = documentElementTop
    
      .classList
      
      .contains ( 'squarespace-damask' );
      
  if ( ! isEditor ) {
  
    const s = 'Please log in to your Squarespace site.';
    
    alertTitleMessage ( s );
    
    return; // bail if not logged in
    
    }
    
  const siteFrameElement = documentTop
  
    .querySelector (
    
      'iframe[ data-testid = '
      
      +
      
      '"sqs-site-frame" ]'
      
      );
      
  let dcmnt = siteFrameElement
  
    ?.contentDocument;
    
  if ( ! dcmnt ) {
  
    const s = 'Error : can not find the site frame.';
    
    alertTitleMessage ( s );
    
    return; // bail if no site frame
    
    }
    
  const
  
    context = siteFrameElement
    
      .contentWindow
      
      .Static
      
      .SQUARESPACE_CONTEXT,
      
    isStorePage = context
    
      .collection
      
      ?.type
      
      ===
      
      13;
      
  if ( ! isStorePage ) {
  
    const s = 'Please run this bookmarklet on a Store Page.';
    
    alertTitleMessage ( s );
    
    return; // bail if not store page
    
    }
    
  const xPathEvaluate =
  
    ( xPathExpression, contextNode ) => {
    
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
      
      documentElementTop
      
      );
      
  if ( ! xPathResults.snapshotLength ) {
  
    const s = 'Please navigate a Products Panel in the Store Page.';
    
    alertTitleMessage ( s );
    
    return; // bail if no categories panel
    
    }
    
  const elements = [ ];
  
  xPathExpression = `
  
    .//div [
    
      @data-test = 'product-item'
      
      ]
      
    `;
    
  xPathResults = xPathEvaluate (
  
    xPathExpression,
    
    documentElementTop
    
    );
    
  for (
  
    let i = 0;
    
    i < xPathResults.snapshotLength;
    
    i++
    
    )
    
    {
    
      const
      
        element = xPathResults
        
          .snapshotItem ( i ),
          
        inputElement = element.querySelector (
        
          'input[ type = checkbox ]'
          
          ),
          
        isChecked = inputElement.checked;
        
      // continue if not checked
      
      if ( ! isChecked ) continue;
      
      const hasImage = element
      
        .querySelector ( 'img' );
        
      // continue if no image
      
      if ( ! hasImage ) continue;
      
      elements.push ( element );
      
      }
      
  if ( ! elements.length ) {
  
    const s = 'Please select the Products to which you want to paste the '
    
      +
      
      'copied Categories.';
      
    alertTitleMessage ( s );
    
    return; // bail if no products
    
    }
    
  // categories
  
  {
  
    const prefix = 'categoryIds=';
    
    categories = prefix
    
      +
      
      JSON
      
        .parse ( categories )
        
        .join ( `&${ prefix }` );
        
    }
    
  const
  
    codeKey = 'twc-splcp',
    
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
    
    processProduct = async ( element ) => {
    
      const
      
        productId = element
        
          .querySelector ( 'img' )
          
          .getAttribute ( 'src' )
          
          .split ( '/' )
          
          [ 6 ],
          
        url = `/api/commerce/products/${
        
          productId
          
          }/categories/assign?${
          
            categories
            
            }`;
            
      try {
      
        const response = await fetch (
        
          url,
          
          {
          
            body : JSON.stringify (
            
              categories
              
              ),
              
            headers : {
            
              'Accept' :
              
                'application/json, text/plain, */*',
                
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
          
      };
      
  elements.forEach (
  
    e => processProduct ( e )
    
    );
    
  // code complete
  
  {
  
    const s = 'Categories have been pasted.';
    
    alertTitleMessage ( s );
    
    return; // bail if no site frame
    
    }
    
  } ) ( );
