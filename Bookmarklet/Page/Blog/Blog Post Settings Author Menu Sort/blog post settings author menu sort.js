( ( ) => {

  /*
  
    blog post settings author menu sort
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.3.0
    
    Copyright   : 2023-2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.3.0',
  
    s = `Blog Post Settings Author Menu Sort v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    title = 'TWC Blog Post Settings Author Menu Sort',
    
    listElement = document
    
      .body
      
      .querySelector ( `p[ title="${ title }" ]` )
      
      ?.closest ( 'ul[ role="listbox" ]' );
      
    if ( ! listElement ) return; // bail if no list element
    
    const callback = ( author ) => {
    
      if ( ! author ) return; // bail if author empty
      
      if ( author === title ) return; // bail if title
      
      const element = listElement
      
        .querySelector ( `p[ title="${ author }"]` )
        
        .closest ( 'li' );
        
      if ( ! element ) return; // bail if no element
      
      listElement.prepend ( element );
      
      };
      
    [
    
      ...
      
      listElement
      
        .querySelectorAll ( 'li' )
        
      ]
      
      .map (
      
        e => e
        
          .querySelector ( 'p[ title ]' )
          
          .getAttribute ( 'title' )
          
        )
        
      .sort ( )
      
      .reverse ( )
      
      .forEach ( callback );
      
  } ) ( );
