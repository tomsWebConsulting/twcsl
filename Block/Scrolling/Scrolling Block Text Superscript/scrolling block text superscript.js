( ( ) => {

  /*!
  
    scrolling block text superscript
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `Scrolling Block Text Superscript v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
      
    // initialize twc sbtso sub-module
    
    twc.sbtso = twc.sbtso || { };
      
    }
    
  const
  
    codeKey = 'twc-sbtso',
    
    options = codeKey
    
      .split ( /-(.*)/ )
      
      .filter ( Boolean )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    selector =
    
      '[ data-sqsp-block = '
      
      +
      
      '"scrolling" ] tspan',
      
    elementCallback = ( element ) => {
    
      let html = element.outerHTML;
      
      options
      
        .text
        
        .forEach (
        
          t => {
          
            const hasText = html
            
              .includes ( t );
              
            // bail if no text
            
            if ( ! hasText ) return;
            
            element.outerHTML =
            
              html.replaceAll (
              
                t,
                
                `<tspan class="${
                  
                    codeKey
                    
                    }">${ t }</tspan>`
                    
                )
                
            }
              
          );
          
      },
      
    callback = ( ) => {
    
      document
      
        .body
        
        .querySelectorAll ( selector )
        
        .forEach ( elementCallback );
        
      };
      
    ssVersion = Static
    
      .SQUARESPACE_CONTEXT
      
      .templateVersion,
      
    is70 = ssVersion === '7',
    
    is71 = ssVersion === '7.1';
    
  switch ( true ) {
  
    case is71 :
    
      document.addEventListener (
      
        'DOMContentLoaded',
        
        callback
        
        );
        
      break;
      
    case is70 :
    
      Squarespace.onInitialize (
      
        Y,
        
        callback
        
        );
        
      break;
      
    }
    
  } ) ( );
