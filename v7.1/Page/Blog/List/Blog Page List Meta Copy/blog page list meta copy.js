( ( ) => {

  // debugger;
  
  /*!
  
    blog page list meta copy
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Version      : 7.1
    
    Copyright       : 2023-2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const isList =
  
    !
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item
      
      ?.id;
      
  // bail if not list page
  
  if ( ! isList ) return;
  
  const
  
    forEachCallback = ( element ) => {
    
      const cloneElement = element
      
        .querySelector (
        
          '.blog-meta-section'
          
          )
          
        .cloneNode ( true );
        
      element
      
        .querySelector ( '.blog-title' )
        
        .after ( cloneElement );
        
      },
      
    selector = '.blog-masonry .entry';
    
    domContentLoadedCallback =
    
      ( ) => {
      
        const isBlogPage =
        
          !!
          
          document
          
            .querySelectorAll (
            
              [
              
                'body[ class *= "collection-type-blog-" ]',
                
                'body[ class ~= "collection-type-blog" ]'
                
                ]
                
                .join ( ', ' )
                
              )
              
              .length;
              
        // bail if not blog page
        
        if ( ! isBlogPage ) return;
        
        document
        
          .querySelectorAll (
          
            selector
            
            )
            
          .forEach ( forEachCallback );
          
        };
        
  // domContentLoadedCallback ( );
  
  //
  
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  //
  
  } ) ( );
