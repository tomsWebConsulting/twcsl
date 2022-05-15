( function ( ) {

  /*
  
    row column finder
    
    Version       : 0.1.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const l = document
  
    .querySelectorAll ( '.squarespace-config' )
    
    .length;
    
  if ( ! l ) return; // bail if not config
  
  const attribute = 'data-twc-rcf';
  
  const siteDocument = document
  
    .querySelector ( 'iframe#sqs-site-frame' )
    
    .contentDocument;
    
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
      
    .sqs-layout .col .twc-column {
    
      margin-left : 3em;
      
      }
      
    .sqs-layout .row .col .row .twc-row {
    
      margin-left : 3em;
      margin-top : 3em;
      
      }
      
    .sqs-layout .row .col .row .col .twc-column {
    
      margin-left : 6em;
      margin-top : 3em;
      
      }`;
      
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
