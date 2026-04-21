( ( ) => {

  /*!
  
    store page tag url redirect
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Version        : 7.1
    
    Note              : this effect is not active in Edit Mode or Preview.
                        to test it use private browsing
                        < https://tinyurl.com/ynessvsf >
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `
    
      Store Page Tag URL Redirect v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = window.twc || { };
  
  // initialize twc ptc sub-module
  
  twc.ptc = twc.ptc || { };
  
  // initialize twc ptc callbacks sub-module
  
  twc.ptc.callbacks = ( ( self ) => {
  
    const callback = ( tags ) => {
    
      const isEditMode = document
      
        .body
        
        .classList
        
        .contains ( 'sqs-edit-mode' );
        
      // bail if edit mode
      
      if ( isEditMode ) return;
      
      const isStorePage = Static
      
        .SQUARESPACE_CONTEXT
        
        .collection
        
        ?.type
        
        ===
        
        13;
        
      // bail if not store page
      
      if ( ! isStorePage ) return;
      
      const
      
        changeTag = ( element, tag ) => {
        
          const newElement = document
          
            .createElement ( tag );
          
          [
          
            ...
            
            element
            
            .attributes
            
            ]
            
            .forEach (
            
              a => newElement
              
                .setAttribute (
                
                  a.name,
                  
                  a.value
                  
                  )
                  
              );
              
          newElement
          
            .append (
            
              ...
              
              element
              
                .childNodes
                
              );
              
          element
          
            .replaceWith ( newElement );
            
          return newElement;
          
          },
          
        codeKey = 'twc-sptur',
        
        elementCallback =
        
          ( element, url ) => {
          
            element
            
              .querySelector (
              
                '.product-list-item-link'
                
                )
                
              ?.setAttribute (
              
                'href',
                
                url
                
                );
                
            changeTag (
            
              element.querySelector (
              
                '.sqs-add-to-cart-button'
                
                ),
                
              'a'
              
              )
              
              ?.setAttribute (
              
                'href',
                
                url
                
                );
                
            element
            
              .querySelector (
              
                '.sqs-add-to-cart-button'
                
                )
                
              .textContent
              
              =
              
              options.addToCartText;
                
            },
            
        idUrlRePattern =
        
          '(?:\\[ *(.+?) *\\]|(\\S+))',
          
        options = codeKey
        
          .split ( /-(.*)/ )
          
          .filter ( Boolean )
          
          .reduce (
          
            ( obj, key ) => obj?.[ key ],
            
            window
            
            ),
            
        re = new RegExp (
        
          `^${ codeKey }\\s+`
          
          +
          
          idUrlRePattern
          
          +
          
          `(?:\\s+${ idUrlRePattern })?$`
          
          ),
          
        tagCallback = ( tag ) => {
        
          const
          
            selector = `.${
            
              tag.className
              
              }`,
              
            m = tag.name.match ( re );
            
          // continue if tag doesn't match format
          
          if ( ! m ) return;
          
          let url = m
          
            .slice ( 1 )
            
            .filter ( Boolean );
            
          url = (
          
            options
            
              .idUrlMap
              
              [ url [ 0 ] ]
              
              ??
              
              url [ 0 ]
              
            )
            
            +
            
            (
            
              url?.[ 1 ]
              
              ?
              
              options
              
                .idQueryFragmentMap
                
                [ url [ 1 ] ]
                
                ??
                
                url [ 1 ]
                
              :
              
              ''
              
              );
            
          document
          
            .body
            
            .querySelectorAll ( selector )
            
            .forEach (
            
              e => elementCallback (
              
                e,
                
                url
                
                )
                
              );
              
          };
          
      tags
      
        .filter (
        
          t => t.name.startsWith (
          
            `${ codeKey } `
            
            )
            
          )
          
        .forEach ( tagCallback );
        
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.ptc.callbacks || [ ] );
    
  } ) ( );
