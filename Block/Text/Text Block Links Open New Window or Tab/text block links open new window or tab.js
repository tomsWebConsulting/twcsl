( ( ) => {

  /*!
  
    text block links open new window or tab
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.2.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2023-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.2.0',
    
    s = `Text Block Links Open New Window or Tab v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2023-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const dclCallback = ( ) => {
  
    const anchorCallback = ( element ) => {
    
      const hasTarget = element
      
        .getAttribute ( 'target' )
        
        !==
        
        null;
        
      if ( hasTarget ) return; // continue
      
      element
      
        .setAttribute ( 'target', '_blank' );
        
      };
      
    document
    
      .body
      
      .querySelectorAll (
      
        '[ data-sqsp-block = "text" ] a'
        
        )
        
      .forEach ( anchorCallback );
        
    };
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dclCallback
    
    );
    
  } ) ( );
