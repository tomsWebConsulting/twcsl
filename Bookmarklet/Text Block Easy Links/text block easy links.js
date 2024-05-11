( function ( ) {

  /*
  
    text block easy links
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const l = document
  
    .querySelectorAll ( '.squarespace-config' )
    
    .length;
    
  let siteDocument;
  
  // set site document
  
  if ( ! l ) return; // bail if not in Preview
  
    siteDocument = document
    
    .querySelector ( 'iframe#sqs-site-frame' )
    
    .contentDocument;
    
  const selector =
  
    '.sqs-block-html .sqs-html-content[contenteditable="true"] p';
    
  let nodes = siteDocument
  
    .querySelectorAll ( selector );
    
  if ( ! nodes.length ) return; // bail if no text block edit
  
  [
  
    ...nodes
      
      ]
      
      .filter ( n => ! n.querySelector ( 'a' ) )
      
      .forEach ( ( node ) => {
      
        // console.log ( node );
        
        let html = node.innerHTML
        
          .split ( ';' );
          
        if ( html.length == 1 ) return; // contine if no url
        
        // console.log ( html );
        
        const url = html [ 1 ];
        
        html = html [ 0 ];
        
        node.innerHTML = `<a href="${ url }">
        
          ${ html }
          
          </a>`;
          
        } );
        
  } ( ) );
