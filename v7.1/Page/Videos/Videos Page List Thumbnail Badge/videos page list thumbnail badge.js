( ( ) => {

  // debugger;
  
  /*!
  
    videos page list thumbnail badge
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Videos Page List Thumbnail Badge',
    
    version = '0.1.0',
    
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const isVideosPage = Static
  
    .SQUARESPACE_CONTEXT
    
    .collection
    
    ?.type
    
    ===
    
    24;
    
  // bail if not videos page
  
  if ( ! isVideosPage ) return;
  
  const isList =
  
    !
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item
      
      ?.id;
      
  // bail if not list page
  
  if ( ! isList ) return;
  
  const
  
    codeKey = 'twc-vpltb',
    
    re = new RegExp (
    
      `${ codeKey }\\s*:\\s*(.+)`
      
      ),
      
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
      
    domContentLoadedCallback = ( ) => {
      
      const xPathResults =
      
        xPathEvaluate (
        
          xPathExpression,
          
          document
          
            .querySelector (
            
              '#video-gallery-main-content'
              
              )
              
          );
          
      for (
      
        let i = 0;
        
        i < xPathResults
        
          .snapshotLength;
          
        i++
        
        ) {
        
          const
          
            element = xPathResults
            
              .snapshotItem ( i ),
              
            text = element
            
              .textContent
              
              .match ( re )
              
              [ 1 ];
              
          element
          
            .closest (
            
              '.grid-item'
              
              )
              
            .style
            
            .setProperty (
            
              `--${ codeKey }-text`,
              
              `'${ text }'`
              
              );
              
          element.remove ( );
          
          }
          
      };
      
  // domContentLoadedCallback ( );
  
  //
  
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  //
  
  } ) ( );
