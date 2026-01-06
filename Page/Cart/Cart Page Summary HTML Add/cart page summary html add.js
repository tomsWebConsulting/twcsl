( ( ) => {

  /*!
  
    cart page summary html add
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.3.1
    
    SS Versions       : 7.1, 7.0
    
    v7.1
    Fluid
    Engine
    Compatible        : Not Applicable
    
    Dependencies      : cart page observe changes
                        
                        < https://tinyurl.com/323xeep5 >
    
    Copyright         : 2022-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.3.1',
    
    s = `
    
      Cart Page Summary HTML Add v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc =
  
    ( ( self ) => self ) ( window.twc || { } );
    
  // initialize twc cpsha sub-module
  
  twc.cpsha =
  
    ( ( self ) => self )
    
    ( twc.cpsha || { } );
    
  // initialize twc cpoc sub-module
  
  twc.cpoc =
  
    ( ( self ) => self )
    
    ( twc.cpoc || { } );
    
  // initialize twc cpoc callbacks sub-module
  
  twc.cpoc.callbacks =
  
    ( ( self ) => self )
    
    ( twc.cpoc.callbacks || { } );
    
  // initialize twc cpoc callbacks added sub-module
  
  twc.cpoc.callbacks.added =
  
    ( ( self ) => {
    
      const callback = ( node ) => {
      
        // bail if no querySelector
        
        if ( ! node.querySelector ) return;
        
        const
        
          codeKey = 'twc-cpsha',
          
          hasElement = node
          
            .classList
            
            .contains ( codeKey )
            
            ||
            
            node
          
              .querySelector ( `.${ codeKey }` );
              
        if ( hasElement ) return; // bail if element already added
        
        const selector = [
        
          '.cart-summary-container', // 7.1
          
          '.cart-summary' // 7.0
          
          ]
          
          .join ( ', ' );
          
        node = node
        
          .querySelector ( selector );
          
        if ( ! node ) return; // bail if no cart summary element
        
        node
        
          .insertAdjacentHTML (
          
            'beforeend',
            
            `
            
              <div class="${ codeKey }">
              
                ${ twc.cpsha.html }
                
                </div>
                
              `
              
            );
            
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cpoc.callbacks.added || [ ] );
      
  } ) ( );
