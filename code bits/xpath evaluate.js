// License < https://tinyurl.com/s872fb68 > | © 2025 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const xPathEvaluate = ( xPathExpression, contextNode ) => {

  const xPathResults = document
  
    .evaluate (
    
      xPathExpression,
      
      contextNode,
      
      null,
      
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      
      null
      
      );
      
  return xPathResults;
  
  };

/*

  Example Usage :
  
    const
    
      xPathExpression = '.// div [ @id = "siteWrapper" ]',
      
      xPathResults = xPathEvaluate (
      
        xPathExpression,
        
        document
        
          .body
          
        );
        
      for ( let i = 0; i < xPathResults.snapshotLength; i++ ) {
      
        const element = xPathResults
        
          .snapshotItem ( i );
          
        console.log ( element );
        
        }
        
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
