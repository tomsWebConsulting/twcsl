( ( ) => {

  /*!
  
    store page list categories description add
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.12.5
    
    SS Version    : 7.1
    
    Products V2
    Compatible    : Yes
    
    Fluid
    Engine
    Compatible    : Not Applicable
    
    Notes         : the code is comprised of a style and script tag. both are
                    needed for the full effect to work
                        
                    the code makes a call to the json version of the store page
                    for the categories
    
    Copyright     : 2021-2025 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.12.5',
  
    s = `
    
      Store Page List Categories Description Add v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const isStorePage = Static
  
    .SQUARESPACE_CONTEXT
    
    .collection
    
    ?.type
    
    ===
    
    13;
    
  if ( ! isStorePage ) return; // bail if not store page
  
  const isList
  
    =
    
    !
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item
      
      ?.id;
      
  if ( ! isList ) return; // bail if not list
  
  const
  
    callback = ( ) => {
    
      // globals
      
      {
      
        // initialize twc module
        
        window.twc = ( ( self ) => self ) ( window.twc || { } );
        
        // initialize twc splcda sub-module
        
        twc.splcda = ( ( self ) => self ) ( twc.splcda || { } );
        
        }
        
      const
      
        options = codeKey
        
          .split ( '-' )
          
          .reduce ( ( obj, key ) => obj?.[ key ], window ),
          
        description = options
        
          .categoryListDescriptionMap
          
          [ categories ];
          
      if ( ! description ) return; // bail if no description
      
      const
      
        destinationAction
        
          =
          
          options.destinationAction [ 0 ] !== '['
          
          ?
          
          options.destinationAction
          
          :
          
          'after',
          
        destinationElement
        
          =
          
          options.destinationSelector [ 0 ] === '['
          
          ?
          
          document
          
            .body
            
            .querySelector ( '.category-navigation--desktop' )
            
          ||
          
          document
          
            .body
            
            .querySelector ( '.category-navigation--mobile' )
            
          :
          
          document
          
            .body
            
            .querySelector ( options.destinationSelector ),
            
        formatHtmlMap = {
        
          'Heading 1'       : '<h1 />',
          'Heading 2'       : '<h2 />',
          'Heading 3'       : '<h3 />',
          'Heading 4'       : '<h4 />',
          'Paragraph 1'     : '<p class="sqsrte-large" />',
          'Paragraph 2'     : '<p />',
          'Paragraph 3'     : '<p class="sqsrte-small" />',
          'Monospace'       : '<pre>' +
          
            '<code>' +
            
              '</code>' +   
              
            '</pre>',
            
          'HTML'            : description
          
          },
          
        hasCustomDestinationSelector
        
          =
          
          options.destinationSelector [ 0 ] !== '[',
          
        wrapperElement = document
        
          .createElement ( 'div' );
          
      let
      
        elements,
        
        html
        
          =
          
          options.paragraphStyle [ 0 ] !== '['
          
          ?
          
          options
          
            .paragraphStyle
            
          :
          
          'Heading 3',
          
        position,
        
        isReverse = false;
        
      const isHtml = html === 'HTML';
      
      html = formatHtmlMap [
      
        html
        
        ];
        
      if ( ! isHtml ) {
      
        wrapperElement.innerHTML = html;
        
        let element = wrapperElement
        
          .querySelectorAll ( '*' );
          
        element = element [
        
          element.length - 1
          
          ];
          
        element.innerHTML = description;
        
        wrapperElement
        
          .firstChild
          
          .classList
          
          .add (`${ codeKey }-description` );
          
        } else
        
          wrapperElement.innerHTML = html;
          
      switch ( destinationAction ) {
      
        case 'after' :
        
          isReverse = true;
          
          position = 'afterend';
          
          break;
          
        case 'append' :
        
          position = 'beforeend';
          
          break;
          
        case 'before' :
        
          position = 'beforebegin';
          
          break;
          
        case 'prepend' :
        
          isReverse = true;
          
          position = 'afterbegin';
          
          break;
          
        }
        
      elements = [
      
        ...
        
        wrapperElement
        
          .children
          
        ];
        
      if ( isHtml && isReverse )
      
        elements = elements.reverse ( );
        
      elements.forEach (
      
        e => destinationElement
        
          .insertAdjacentElement ( position, e )
          
        );
        
      },
      
    codeKey = 'twc-splcda',
    
    domContentLoadedCallback = async ( ) => {
    
      const url = location
      
        .pathname
        
        +
        
        '?format=json';
        
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
          
        const
        
          obj = await response.json ( ),
          
          nestedCategories = obj
          
            .nestedCategories;
            
        categories = ( ( ) => {
        
          const
          
            fullUrl = Static
                  
              .SQUARESPACE_CONTEXT
              
              .collection
              
              .fullUrl,
              
            isAllCategory
            
              =
              
              location
              
                .pathname
                
              ===
              
              fullUrl;
              
          if ( isAllCategory ) return 'All';
          
          const categories = [
          
            ...
            
            obj
            
              .nestedCategories
              
              ?.ancestors
              
              ?.filter ( c => c.fullUrl !== fullUrl )
              
            ||
            
            [ ],
            
            obj
            
              .nestedCategories
              
              ?.current
              
            ]
            
            .filter ( c => c )
            
            .map ( c => c.displayName )
            
            .join ( ' > ' );
            
          return categories;
          
          } ) ( );
          
        if ( ! categories ) return; // bail if no categories
        
        callback ( );
        
        } catch ( error ) {
        
          const s = `
          
            ${ codeKey } there has been a problem with your fetch get operation,
            
            ${ error }.
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          console.error ( s );
          
          }
          
      };
      
  let categories;
  
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
