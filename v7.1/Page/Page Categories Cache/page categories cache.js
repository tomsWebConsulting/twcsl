( ( ) => {

  /*!
  
    page categories cache
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Version      : 7.1
    
    Products V2
    Compatible      : Not Applicable
    
    Fluid
    Engine
    Compatible      : Not Applicable
    
    Notes           : the code makes a call to the json version of a page
                      for categories information that is not normally
                      available through other means
                      
                      the cache disable option doesn't disable the overall
                      cache logic. it simply removes the session storage key
                      after user callbacks are run. this causes the cache
                      data to be regenerated when the Store page is
                      reloaded. this can be useful for testing or if you
                      want site visitors to always have access to the
                      current categories
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.2.0',
    
    s = `
    
      Page Categories Cache v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    isBlogPage =
    
      !!
      
      document
      
        .querySelector (
        
          [
              
            'body[ class*="collection-type-blog-" ]',
            
            'body[ class~="collection-type-blog" ]'
            
            ]
            
            .join ( ', ' )
            
          ),
          
    isEventsPage =
    
      !!
      
      document
      
        .querySelector (
        
          [
              
            'body[ class*="collection-type-events-" ]',
            
            'body[ class~="collection-type-events" ]'
            
            ]
            
            .join ( ', ' )
            
          ),
          
    isStorePage = Static
    
      .SQUARESPACE_CONTEXT
      
      .collection
      
      ?.type
      
      ===
      
      13,
      
    hasCategories = isBlogPage || isEventsPage || isStorePage;
      
  if ( ! hasCategories ) return; // bail if not has categories
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc =
    
      ( ( self ) => self )
      
      ( window.twc || { } );
      
    // initialize twc pcc sub-module
    
    twc.pcc =
    
      ( ( self ) => self )
      
      ( twc.pcc || { } );
      
    // initialize twc pcc callbacks sub-module
    
    twc.pcc.callbacks =
    
      ( ( self ) => self )
      
      ( twc.pcc.callbacks || [ ] );
      
    }
    
  const
  
    categoryNameToCssClassName =
    
      ( name ) => {
      
        // bail if no name
        
        if ( ! name ) return;
        
        const className = 'category-'
        
          +
          
          name
          
            .replaceAll ( ' ', '-' )
            
            .toLowerCase ( )
            
            .replace ( /[^\w-]+/g, '' )
            
            .replaceAll ( '--', '-' );
            
        return className;
        
        },
        
    codeKey = 'twc-pcc',
    
    context = Static
    
      .SQUARESPACE_CONTEXT,
      
    options = codeKey
    
      .split ( '-' )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    collectionId = context
    
      .collection
      
      .id,
      
    url = context
      
      .collection
      
      .fullUrl
      
      +
      
      '?format=json',
      
    userCallbacks = ( categories ) => {
    
      options
      
        .callbacks
        
        .forEach (
        
          c => {
          
            try {
            
              c ( categories );
              
              } catch ( error ) {
              
                const s = `${
                
                  codeKey
                  
                  } callback error`;
                  
                console.error ( s, error );
                
                }
                
            }
            
          );
          
      },
    
    dlcCallback = async ( ) => {
    
      const
      
        hasCallbacks = options
        
          .callbacks
          
          .length;
          
      // bail if no callbacks
      
      if ( ! hasCallbacks ) {
      
        const s = `${ codeKey } no callbacks`;
        
        console.warn ( s );
        
        return;
        
        }
        
      let categories = sessionStorage
      
        .getItem (
        
          `${ codeKey }-${ collectionId }`
          
          );
        
      // bail if categories
      
      if ( categories ) {
      
        userCallbacks ( categories );
        
        if ( options.cacheDisable )
        
          sessionStorage.removeItem (
          
            `${ codeKey }-${ collectionId }`
            
            );
            
        return;
        
        }
        
      try {
      
        const response = await fetch ( url );
        
        if ( ! response.ok ) {
        
          const s = `
          
            ${ codeKey } network response was
            
            not ok ${ response.statusText }
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          throw new Error ( s );
          
          }
          
        categories = await response.json ( );
        
        } catch ( error ) {
        
          const s = `
          
            ${ codeKey } there has been a
            
            problem with your fetch get
            
            operation, ${ error }.
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          console.error ( s );
          
          } finally {
          
            // process categories
            
            {
            
              categories = categories
              
                .nestedCategories;
                
              const all = categories.all;
              
              all.className =
              
                categoryNameToCssClassName (
                
                  all.displayName
                  
                  );
                  
              categories
              
                .categories
                
                .forEach (
                
                  c => c.className =
                  
                    categoryNameToCssClassName (
                    
                      c [ 'displayName' ]
                      
                      )
                      
                  );
                  
              }
              
            sessionStorage.setItem (
            
              `${
              
                codeKey
                
                }-${
                
                  collectionId
                  
                  }`,
                  
              JSON
              
                .stringify ( categories )
                
              );
              
            userCallbacks ( categories );
            
            if ( options.cacheDisable )
            
              sessionStorage.removeItem (
              
                `${
                
                  codeKey
                  
                  }-${
                  
                    collectionId
                    
                    }`
                    
                );
                
            }
            
      };
      
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dlcCallback
    
    );
    
  } ) ( );
