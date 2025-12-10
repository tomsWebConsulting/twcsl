( ( ) => {

  /*
  
    Pages Panel Expand All
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.0
    
    SS Version    : 7.1
    
    Copyright     : 2025 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `
    
      Pages Panel Expand All v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    selectorPrefix = 'div[ data-test="pages-panel" ] button[ data-test="',
    
    selectorSuffix = 'collapse-arrow" ]:has( path[ '
    
      +
      
      'd="M6 7.5V10l5 5 5-5V7.5l-5 5-5-5z" ] )',
      
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
