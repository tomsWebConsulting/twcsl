( ( ) => {

  /*!
  
    portfolio page project navigation top
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Fluid Engine    : Not Applicable
    Compatible
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `Portfolio Page Project Navigation Top v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const isPortfolioPage = Static
  
    .SQUARESPACE_CONTEXT
    
    .collection
    
    ?.type
    
    ===
    
    23;
    
  if ( ! isPortfolioPage ) return; // bail if not portfolio page
  
  const isDetail
  
    =
    
    !!
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item;
      
  if ( ! isDetail ) return; // bail if not detail
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc =
    
      ( ( self ) => self )
      
      ( window.twc || { } );
      
    // initialize twc pppnt sub-module
    
    twc.pppnt =
    
      ( ( self ) => self )
      
      ( twc.pppnt || { } );
      
    }
    
  const dclCallback = ( ) => {
  
    const
    
      codeKey = 'twc-pppnt',
      
      element = document
      
        .body
        
        .querySelector ( '#itemPagination' )
        
        .cloneNode ( true ),
        
      options = codeKey
      
        .split ( '-' )
        
        .reduce ( ( obj, key ) => obj?.[ key ], window ),
        
      selector =
      
        '#sections [ data-test = "page-section" ] ';
        
    let title = options.title;
  
    title =
    
      title [ 0 ] === '['
      
      ?
      
      ''
      
      :
      
      title;
      
    // element
    
    {
    
      const
      
        hasFirstAndLast = element
        
          .childElementCount
          
          ===
          
          2,
          
        hasNext = !! element
        
          .querySelector (
          
            '.item-pagination-link--next'
            
            ),
            
        hasPrev = !! element
        
          .querySelector (
          
            '.item-pagination-link--prev'
            
            ),
            
        html = `
        
          <h2>
          
            ${ title }
            
            </h2>
            
          `;
          
      element.id = codeKey;
      
      switch ( true ) {
      
        case hasFirstAndLast :
        
          element
          
            .querySelector (
            
              '.item-pagination-link--prev'
              
              )
              
            .insertAdjacentHTML (
            
              'afterend',
              
              html
              
              );
              
          break;
          
        case hasNext :
        
          element
          
            .insertAdjacentHTML (
            
              'afterbegin',
              
              `
              
                <div>
                
                  </div>
                  
                ${ html }
                
                `
                
              );
              
          break;
          
        case hasPrev :
          
          element
          
            .insertAdjacentHTML (
            
              'beforeend',
              
              `
              
                ${ html }
                
                <div>
                
                  </div>
                  
                `
                
              );
              
          break;
          
        }
        
      }
      
    document
    
      .body
      
      .querySelector ( selector )
      
      .after ( element );
        
    };
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dclCallback
    
    );
    
  } ) ( );
