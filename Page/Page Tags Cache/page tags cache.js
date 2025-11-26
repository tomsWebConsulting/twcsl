( ( ) => {

  /*!
  
    page tags cache
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.0
    
    SS Versions   : 7.1, 7.0
    
    v7.1
    Products V2
    Compatible    : Not Applicable
    
    v7.1
    Fluid
    Engine
    Compatible    : Not Applicable
    
    Note          : the code makes a call to an unofficial Squarespace
                    GetCollectionTags API for information that is not
                    normally available through other means
    
    Copyright     : 2025 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `
    
      Page Tags Cache v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    isBlogPage
    
      =
      
      !!
      
      document
      
        .querySelectorAll (
        
          [
              
            'body[ class*="collection-type-blog-" ]',
            
            'body[ class~="collection-type-blog" ]'
            
            ]
            
            .join ( ', ' )
            
          )
          
          .length,
          
    isEventsPage
    
      =
      
      !!
      
      document
      
        .querySelectorAll (
        
          [
              
            'body[ class*="collection-type-events-" ]',
            
            'body[ class~="collection-type-events" ]'
            
            ]
            
            .join ( ', ' )
            
          )
          
          .length,
          
    isStorePage = Static
    
      .SQUARESPACE_CONTEXT
      
      .collection
      
      ?.type
      
      ===
      
      13,
      
    hasTags = isBlogPage || isEventsPage || isStorePage;
      
  if ( ! hasTags ) return; // bail if not has tags
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc ptc sub-module
    
    twc.ptc = ( ( self ) => self ) ( twc.ptc || { } );
    
    // initialize twc ptc callbacks sub-module
    
    twc.ptc.callbacks =
    
      ( ( self ) => self ) ( twc.ptc.callbacks || [ ] );
      
    }
    
  const
  
    codeKey = 'twc-ptc',
    
    options = codeKey
    
      .split ( '-' )
      
      .reduce ( ( obj, key ) => obj?.[ key ], window ),
      
    hasCallbacks = options
    
      .callbacks
      
      .length;
      
  // bail if no callbacks
  
  if ( ! hasCallbacks ) {
  
    const s = `${ codeKey } no callbacks`;
    
    console.warn ( s );
    
    return;
    
    }
    
  const
  
    callback = async ( ) => {
    
      const userCallbacks = ( tags ) => {
      
        const callback = ( callback ) => {
        
          try {
          
            callback ( tags );
            
            } catch ( error ) {
            
              const s = `${ codeKey } callback error`;
              
              console.error ( s, error );
              
              }
              
          };
        
        options
        
          .callbacks
          
          .forEach ( callback );
          
        };
        
      let tags = sessionStorage
      
        .getItem ( codeKey );
        
      // bail if tags
      
      if ( tags ) {
      
        tags = JSON.parse ( tags );
        
        userCallbacks ( tags );
        
        return;
        
        }
        
      const url
      
        =
        
        '/api/commondata/GetCollectionTags?collectionId='
        
        +
        
        Static
        
          .SQUARESPACE_CONTEXT
          
          .collection
          
          .id;
          
      try {
      
        const response = await fetch ( url );
        
        if ( ! response.ok ) {
        
          const s = `
          
            ${ codeKey } network response was not ok ${
            
              response
              
                .statusText
                
                }
                
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          throw new Error ( s );
          
          }
          
        tags = await response.json ( );
        
        } catch ( error ) {
        
          const s = `
          
            ${ codeKey } there has been a problem with your fetch get
            
            operation, ${ error }.
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          console.error ( s );
          
          } finally {
          
            tags
            
              .forEach (
              
                t => t.className = tagNameToCssClassName ( t.name )
                
                );
                
            sessionStorage.setItem (
            
              codeKey,
              
              JSON
              
                .stringify ( tags )
                
              );
              
            userCallbacks ( tags );
            
            }
            
      },
      
    tagNameToCssClassName = ( name ) => {
    
      const className = 'tag-'
      
        +
        
        name
        
          .replaceAll ( ' ', '-' )
          
          .toLowerCase ( )
          
          .replace ( /[^\w-]+/g, '' )
          
          .replaceAll ( '--', '-' );
          
      return className;
      
      };
      
  document
  
    .addEventListener ( 'DOMContentLoaded', callback );
    
  } ) ( );
