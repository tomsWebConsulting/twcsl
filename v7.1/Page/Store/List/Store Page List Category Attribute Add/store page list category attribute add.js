( ( ) => {

  /*!
  
    store page list category attribute add
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.3.0
    
    SS Version      : 7.1
    
    v7.1
    Products V2
    Compatible      : Yes
    
    v7.1 Fluid
    Engine
    Compatible      : Not Applicable
    
    Copyright       : 2021-2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const dclCallback = ( ) => {
  
    const
    
      version = '0.3.0',
      
      s = `Store Page List Category Attribute Add v${ version }
      
        License < https://tinyurl.com/s872fb68 >
        
        © 2021-2026 Thomas Creedon
        
        Tom's Web Consulting < http://www.tomsWeb.consulting >`
        
        .replace ( /^\s+/gm, '' );
        
    console.log ( s );
    
    const isStorePage = Static
    
      .SQUARESPACE_CONTEXT
      
      .collection
      
      ?.type
      
      ===
      
      13;
      
    // bail if not store page
    
    if ( ! isStorePage ) return;
    
    let category = location
    
      .pathname
      
      .slice (
      
        Static
        
          .SQUARESPACE_CONTEXT
          
          .collection
          
          .fullUrl
          
          .length
          
          +
          
          1
          
        );
        
    // bail if not category page
    
    if ( ! category ) return;
    
    const codeKey = 'twc-splcaa';
    
    category = Static
    
      .SQUARESPACE_CONTEXT
      
      .website
      
      .fullSiteTitle
      
      .split ( ' — ' )
      
      [ 0 ];
      
    document
    
      .body
      
      .setAttribute (
      
        `data-${
        
          codeKey
          
          }-store-category`,
          
        category
        
        );
        
    };
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dclCallback
    
    );
    
  } ) ( );
