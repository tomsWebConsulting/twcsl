( ( ) => {

  /*
  
    Pages Panel Collapse All
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.1
    
    SS Version      : 7.1
    
    Copyright       : 2025-2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.1',
    
    s = `
    
      Pages Panel Collapse All v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2025-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    selectorPrefix = 'div[ data-test="pages-panel" ] button[ data-test="',
    
    selectorSuffix = 'collapse-arrow" ]:has( path[ '
    
      +
      
      'd="M16 14.5V12l-5-5-5 5v2.5l5-5z" ] )',
      
    selector
    
      =
      
      `${ selectorPrefix }${
      
        [
        
          'group-',
          
          ''
          
          ]
          
          .join ( `${ selectorSuffix }, ${ selectorPrefix }` )
          
        }${ selectorSuffix }`;
        
  window
  
    .top
    
    .document
    
    .body
    
    .querySelectorAll ( selector )
    
    .forEach ( e => e.click ( ) );
    
  } ) ( );
