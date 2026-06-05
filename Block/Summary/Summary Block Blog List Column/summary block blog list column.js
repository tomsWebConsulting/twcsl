( ( ) => {

  // debugger;
  
  /*!
  
    summary block blog list column
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2024-2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Summary Block Blog List Column',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2024-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    codeKey = 'twc-sbblc',
    
    domContentLoadedCallback =
    
      ( ) => {
      
        // globals
        
        {
        
          // initialize twc module
          
          window.twc = window.twc || { };
          
          // initialize twc sbblc sub-module
          
          twc.sbblc = twc.sbblc || { };
          
          // initialize twc sbblc block ids sub-module
          
          }
          
        const
        
          options = codeKey
          
            .split ( /-(.*)/ )
            
            .filter ( Boolean )
            
            .reduce (
            
              ( obj, key ) => obj?.[ key ],
              
              window
              
              ),
              
          blockIds = [
          
            ...
            
            new Set ( options.blockIds )
            
            ]
            
            .map (
            
              id => {
              
                if ( id [ 0 ] !== '#' )
                
                  id = '#' + id;
                  
                return id;
                
                }
                
              ),
              
          selector =
          
            blockIds.join ( ', ' );
            
        document
        
          .body
          
          .querySelectorAll ( selector )
            
          .forEach (
          
            e => e
            
              .classList
              
              .add ( codeKey )
              
            );
            
        };
        
  // domContentLoadedCallback ( );
  
  //
  
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  //
  
  } ) ( );
