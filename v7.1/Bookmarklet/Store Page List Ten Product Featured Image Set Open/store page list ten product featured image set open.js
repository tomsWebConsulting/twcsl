( ( ) => {

  /*
  
    store page list ten product featured image set open
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    SS Version  : 7.1
    
    Fluid
    Engine
    Compatible  : Not Applicable
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */

  const
  
    version = '0.1.0',
    
    s = `
    
      Store Page List Ten Product Featured Image Set Open v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    dcmnt = document
    
      .querySelector ( 'iframe#sqs-site-frame' )
      
      .contentDocument,
      
    filterCallback = ( element ) => {
    
      const b = ! element
      
        .getAttribute ( 'class' )
        
        .includes ( ' tag-twc-spdfis ' );
        
      return b;
      
      },
      
    forEachCallback = ( element ) => {
    
      const url = element
      
        .querySelector ( '.grid-item-link' )
        
        .href;
        
      window
      
        .open ( url, '_blank' );
        
      };
      
  [
  
    ...
    
    dcmnt
    
      .querySelectorAll ( '.grid-item' )
      
    ]
    
    .filter ( filterCallback )
    
    .slice ( 0, 10 )
    
    .forEach ( forEachCallback );
    
  } ) ( );
