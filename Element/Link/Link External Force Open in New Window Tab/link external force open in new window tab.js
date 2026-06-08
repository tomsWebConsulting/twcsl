( ( ) => {

  // debugger;
  
  /*!
  
    link external force open in new window tab
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Link External Force Open in New Window Tab',
    
    version = '0.1.0',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const domContentLoadedCallback =
  
    ( ) => {
    
      [
      
        ...
        
        document
        
          .body
          
          .querySelectorAll ( 'a' )
          
        ]
        
        .filter (
        
          e => e.host !== location.host
          
          )
          
        .filter (
        
          e =>
          
            e.getAttribute ( 'target' )
            
            !==
            
            '_blank'
            
          )
          
        .forEach (
        
          e => e.setAttribute (
          
            'target',
            
            '_blank'
            
            )
            
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
