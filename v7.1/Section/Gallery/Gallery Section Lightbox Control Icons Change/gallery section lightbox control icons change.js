( ( ) => {

  /*!
  
    gallery section lightbox control icons change
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Version        : 7.1
    
    Fluid
    Engine
    Compatible        : Not Applicable
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `
    
      Gallery Section Lightbox Control Icons Change v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^ +/gm, '' );
      
  console.log ( s );
  
  const dclCallback = ( ) => {
  
    const
    
      codeKey = 'twc-gslcic',
      
      mutationCallback = ( mutation ) => {
      
        mutation
        
          .addedNodes
          
          .forEach ( nodeCallback );
          
        },
        
      mutationsCallback = ( mutations ) => {
      
        mutations.forEach ( mutationCallback );
        
        },
        
      nodeCallback = ( node ) => {
      
        const isElement = node
        
          .nodeType
          
          ===
          
          1;
          
        // bail if not element
        
        if ( ! isElement ) return;
        
        const hasClass = node
        
          .classList
          
          .contains ( 
          
            'gallery-lightbox-outer-wrapper'
            
            );
            
        // bail if no class name
        
        if ( ! hasClass ) return;
        
        const closeSvg = svg
        
          .close
          
          .trim ( );
          
        observer.disconnect ( );
        
        if ( closeSvg)
        
          node
          
            .querySelector (
            
              '.gallery-lightbox-close-btn-icon'
              
              )
              
            .innerHTML
            
            =
            
            closeSvg;
            
        node
        
          .querySelector (
          
            '.caret-left-icon--small'
            
            )
            
          .outerHTML
          
          =
          
          svg
          
            .caretLeft;
            
        node
        
          .querySelector (
          
            '.caret-right-icon--small'
            
            )
            
          .outerHTML
          
          =
          
          svg
          
            .caretRight;
            
        },
        
      observer = new MutationObserver (
      
        mutationsCallback
        
        ),
        
      options = codeKey
      
        .split ( '-' )
        
        .reduce (
        
          ( obj, key ) => obj?.[ key ],
          
          window
          
          ),
          
      svg = options.svg;
      
    // start listening for changes in element
    
    observer.observe (
    
      document.body,
        
      { childList : true }
      
      );
      
    };
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dclCallback
    
    );
    
  } ) ( );
