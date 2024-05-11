( function ( ) {

  /*
  
    row column finder
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.2
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const attribute = 'data-twc-rcf';
  
  const l = document
  
    .querySelectorAll ( '.squarespace-config' )
    
    .length;
    
  let siteDocument;
  
  // set site document
  
  if ( l ) {
  
    siteDocument = document
    
    .querySelector ( 'iframe#sqs-site-frame' )
    
    .contentDocument;
    
    } else {
    
      siteDocument = document;
      
      }
      
  // begin deactivate
  
    let isActive = siteDocument
    
      .body
      
      .getAttribute ( attribute );
      
    isActive = isActive == '';
    
    if ( isActive ) {
    
      siteDocument
      
        .querySelectorAll ( '.twc-row' )
        
          .forEach ( ( element ) => {
          
            element.remove ( );
            
            } );
            
      siteDocument
      
        .querySelectorAll ( '.twc-column' )
        
          .forEach ( ( element ) => {
          
            element.remove ( );
            
            } );
            
      siteDocument
      
        .body
        
        .removeAttribute ( attribute );
        
      return;
      
      }
      
    // end deactivate
    
  const style = document.createElement ( 'style' );
  
  style.innerHTML = `.sqs-layout .twc-row {
  
      background-color : red;
      padding : 0.25em;
      
      position : absolute;
      z-index : 1;
      
      }
      
    .sqs-layout .twc-column {
    
      background-color : cyan;
      padding : 0.25em;
      
      position : absolute;
      z-index : 1;
      
      }
      
    .sqs-layout .twc-row + .col > .twc-column {
    
      margin-left : 3em;
      
      }
      
    `;
      
  siteDocument.head.appendChild ( style );
  
  siteDocument
  
    .querySelectorAll ( '.row' )
    
      .forEach ( ( element ) => {
      
        const elementRow = document.createElement ( 'div' );
        
        elementRow.innerHTML = 'row';
        
        elementRow.setAttribute ( 'class', 'twc-row' );
        
        element.prepend ( elementRow );
        
        } );
        
  siteDocument
  
    .querySelectorAll ( '.col' )
    
      .forEach ( ( element ) => {
      
        const elementColumn = document.createElement ( 'div' );
        
        elementColumn.innerHTML = 'column';
        
        elementColumn.setAttribute ( 'class', 'twc-column' );
        
        element.prepend ( elementColumn );
        
        } );
        
  siteDocument
  
    .body
    
    .setAttribute ( 'data-twc-rcf', '' );
    
  } ( ) );
