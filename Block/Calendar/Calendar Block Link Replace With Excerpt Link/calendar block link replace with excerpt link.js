( ( ) => {

  // debugger;
  
  /*!
  
    calendar block link replace with excerpt link
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.2.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2022-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Calendar Block Link Replace With Excerpt Link',
    
    version = '0.2.0',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = window.twc || { };
  
  // initialize twc cboc sub-module
  
  twc.cboc = twc.cboc || { };
  
  // initialize twc cboc callbacks sub-module
  
  twc.cboc.callbacks = ( ( self ) => {
  
    const
    
      codeKey = 'twc-cblrwel';
      
      xPathEvaluate = (
      
        xPathExpression,
        
        contextNode
        
        ) => {
        
          const xPathResults = document
          
            .evaluate (
            
              xPathExpression,
              
              contextNode,
              
              null,
              
              XPathResult
              
                .ORDERED_NODE_SNAPSHOT_TYPE,
                
              null
              
              );
              
          return xPathResults;
          
          },
          
      xPathExpression = `
      
        .// p [
        
          contains (
          
            .,
            
            '${ codeKey }'
            
            )
            
          ]
          
        `,
        
      callback = ( element, type ) => {
      
        const isType = type === 'flyout';
        
        // bail if not type
        
        if ( ! isType ) return;
        
        const
        
          xPathResults =
          
            xPathEvaluate (
            
              xPathExpression,
              
              element
              
              );
              
            for (
            
              let i = 0;
              
              i
              
              <
              
              xPathResults.snapshotLength;
              
              i++
              
              ) {
              
                const
                
                  element = xPathResults
                  
                    .snapshotItem ( i ),
                    
                  liElement = element
                  
                    .parentElement
                    
                    .parentElement,
                    
                  index = [
                  
                    ...
                    
                    liElement
                    
                    .parentElement
                    
                    .children
                    
                    ]
                    
                    .indexOf (
                    
                      liElement
                      
                      )
                      
                    +
                    
                    1,
                    
                  url = element
                  
                    .querySelector ( 'a' )
                    
                    .getAttribute ( 'href' );
                    
                element
                
                  .closest ( 'li' )
                  
                  .querySelector ( 'a' )
                  
                  .setAttribute (
                  
                    'href',
                    
                    url
                    
                    );
                    
                element
                
                  .closest ( 'td' )
                  
                  .querySelector (
                  
                    `.item--multiday:nth-child( ${
                    
                      index
                      
                      } ) a`
                      
                    )
                    
                  .setAttribute (
                  
                    'href',
                    
                    url
                    
                    );
                    
                element.remove ( );
                
                }
                
        };
        
    self.push ( callback );
    
    return self;
    
    } ) ( twc.cboc.callbacks || [ ] );
    
  } ) ( );
