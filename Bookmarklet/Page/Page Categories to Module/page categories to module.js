( async ( ) => {

  // debugger;
  
  /*
  
    page categories to module
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
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
  
    title = 'Page Categories to Module',
    
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
      
    isBlogPage
    
      =
      
      !!
      
      dcmnt
      
        .querySelector (
        
          [
              
            'body[ class*="collection-type-blog-" ]',
            
            'body[ class~="collection-type-blog" ]'
            
            ]
            
            .join ( ', ' )
            
          ),
          
    isEventsPage
    
      =
      
      !!
      
      dcmnt
      
        .querySelector (
        
          [
              
            'body[ class*="collection-type-events-" ]',
            
            'body[ class~="collection-type-events" ]'
            
            ]
            
            .join ( ', ' )
            
          ),
          
    isStorePage = context
    
      .collection
      
      ?.type
      
      ===
      
      13,
      
    hasCategories = isBlogPage || isEventsPage || isStorePage;
      
  if ( ! hasCategories ) {
  
    const s = `TWC ${ title }
    
      Please run this bookmarklet on Blog, Events, or Store Page.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if not logged in
    
    }
    
  const
  
    addClassNameCallback =
    
      ( category ) => {
      
        category.className =
        
          `category-${
          
            category.nameEncoded
            
            }`;
            
        },
        
    codeKey = 'twc-pctm',
    
    collection = context
      
      .collection,
      
    collectionId = collection
    
      .id,
      
    fullUrl = collection.fullUrl,
    
    pageType = {
    
      [ isBlogPage ] :  'Blog',
      
      [ isEventsPage ] : 'Events',
      
      [ isStorePage ] :  'Store'
      
      }
      
      [ true ],
      
    ssVersion = context
    
      .templateVersion,
      
    is70 = ssVersion === '7',
    
    is71 = ssVersion === '7.1',
    
    addFullUrlCallback = ( category ) => {
    
      category.fullUrl =
      
        fullUrl
        
        +
        
        `?category=${
          
          encodeURIComponent (
          
            category.name
            
            )
            
            .replaceAll ( '%20', '+' )
            
          }`
          
      },
      
    addNameEncodedCallback =
    
      ( category ) => {
      
        category.nameEncoded =
        
          category [
          
            {
            
              [ is71 ] : 'displayName',
              
              [ is70 ] : 'name'
              
              }
              
              [ true ]
              
            ]
            
          .replaceAll ( ' ', '-' )
          
          .toLowerCase ( )
          
          .replace ( /[^\w-]+/g, '' )
          
          .replaceAll ( '--', '-' );
          
        },
        
    url =
    
      is71 && isStorePage
      
      ?
      
      `/api/product-content-service/products/${ collectionId }/`
      
        +
        
        'categories/tree'
        
      :
      
      '/api/commondata/GetCollectionCategories?collectionId='
      
        +
        
        `${ collectionId }`;
        
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
      
      } finally {

        const
        
          outputDocument = window
          
            .open ( '' )
            
            .document,
            
          isTree = is71 && isStorePage,
          
          titleElement = document
          
            .createElement ( 'title' );
            
        titleElement.textContent =
        
          `TWC ${ title }`;
          
        if ( isTree )
        
          categories =
          
            categories.categoryTree;
            
        categories.forEach (
        
          c => {
          
            addNameEncodedCallback ( c );
            
            addClassNameCallback ( c );
            
            }
            
          );
          
        if ( is70 ) {
        
          categories.forEach (
          
            addFullUrlCallback
            
            );
            
          // all category
          
          {
          
            categories.push (
            
              {
              
                className : 'category-all',
                
                count : 200,
                
                fullUrl : fullUrl,
                
                modifiedOn :
                
                  new Date ( ).getTime ( ),
                  
                name : 'All',
                
                nameEncoded : 'all'
                
                }
                
              );
              
            }
            
          }
          
        const
        
          json = JSON
          
            .stringify ( 
            
              categories,
              
              null,
              
              2
              
              )
              
            .replace (
            
              /[<>]/g,
              
              c => (
              
                c === '<' ? '&lt;' : '&gt;'
                
                )
                
              )
              
            .replace (
            
              /^/gm,
              
              '                  '
              
              )
              
            .trimStart ( ),
            
          html = `
          
            <pre><code>&lt;!-- begin TWC Page Categories to Module --&gt;
            
              &lt;!--
              
                Squarespace Version : ${ ssVersion }
                
                Page Type           : ${ pageType } Page
                
                Title               : ${ collection.title }
                
                URL Slug            : ${ collection.fullUrl.slice ( 1 ) }
                
                --&gt;
                
              &lt;script&gt;
              
                /*
                
                  page categories to module
                  
                  License         : &lt; https://tinyurl.com/s872fb68 &gt;
                  
                  Version         : ${ version }
                  
                  SS Versions     : 7.1, 7.0
                  
                  Copyright       : 2026 Thomas Creedon
                                    
                                    Tom's Web Consulting &lt; http://www.tomsWeb.consulting/ &gt;
                  
                  no user serviceable parts below
                  
                  */
                  
                // initialize twc module
                
                window.twc = window.twc || { };
                
                // initialize twc pctm sub-module
                
                twc.pctm = ( ( self ) =&gt; {
                
                  self [ '${ collectionId }' ] = ${ json };
                  
                  return self;
                  
                  } ) ( twc.pctm || { } );
                  
                &lt;/script&gt;
                
              &lt;!-- end TWC Page Categories to Module --&gt;</code></pre>
              
            `
            
            .replace (
            
              /^            /gm,
            
              ''
              
              );
              
        outputDocument
        
          .head
          
          .append ( titleElement );
          
        outputDocument
        
          .body
          
          .insertAdjacentHTML (
          
            'beforeend',
            
            html
            
            );
            
        }
        
  } ) ( );
