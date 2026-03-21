( ( ) => {

  /*!
  
    gallery section lightbox captions add
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.1
    
    SS Version        : 7.1
    
    Fluid
    Engine
    Compatible        : Not Applicable
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.1',
    
    s = `
    
      Gallery Section Lightbox Captions Add v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^ +/gm, '' );
      
  console.log ( s );
  
  const dclCallback = ( ) => {
  
    const
    
      codeKey = 'twc-gslca',
      
      itemCallback = ( element ) => {
      
        const
        
          text = element
          
            .querySelector (
            
              '.gallery-lightbox-item '
              
              +
              
              'img'
              
              )
              
            .getAttribute ( 'alt' )
            
            .replace ( '\n', '<br>' )
            
            ||
            
            '',
            
          html = `
          
            <figcaption>
            
              ${ text }
              
              </figcaption>
              
            `;
            
        element
        
          .querySelector (
          
            '.gallery-lightbox-item-wrapper'
            
            )
            
          .insertAdjacentHTML (
          
            'beforeend',
            
            html
            
            );
            
        },
        
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
        
        const styleElement = document
        
          .createElement ( 'style' );
          
        node
        
          .querySelectorAll (
          
            '.gallery-lightbox-item'
            
            )
            
          .forEach ( itemCallback );
          
        observer.disconnect ( );
        
        },
        
      observer = new MutationObserver (
      
        mutationsCallback
        
        ),
        
      options = codeKey
      
        .split ( '-' )
        
        .reduce (
        
          ( obj, key ) => obj?.[ key ],
          
          window
          
          );
        
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
