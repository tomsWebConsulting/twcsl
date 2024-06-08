( ( ) => {

  /*
  
    fluid engine grid show
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.0-development.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  // begin console message
  
    const title = 'Fluid Engine Grid Show';
    
    let version = '0.1.0-development.0';
    
    const s = `${ title } v${ version }, ` +
    
      'License < https://tinyurl.com/s872fb68 >, ' +
      
      'Tom\'s Web Consulting < http://www.tomsWeb.consulting >';
      
    console.log ( s );
    
    // end console message
    
  version = Static
  
    .SQUARESPACE_CONTEXT
    
    .templateVersion;
    
  if ( version != '7.1' ) return; // bail if not 7.1
  
  // begin site document
  
    const l = document
    
      .querySelectorAll ( '.squarespace-config' )
      
      .length;
      
    let siteDocument;
    
    if ( l ) {
    
      const selector = 'iframe#sqs-site-frame';
      
      siteDocument = document
      
        .querySelector ( selector )
        
        .contentDocument;
        
      } else
      
        siteDocument = document;
        
    // end site document
    
  const selector = '.sqs-edit-mode-active .fluid-engine.is-editing';
  
  const elements = siteDocument
  
    .querySelectorAll ( selector );
    
  if ( ! elements.length ) return; // bail if no elements
  
  // begin initialize fegs
  
    if ( window.twc === undefined ) window.twc = { }; // initialize twc global
    
    if ( twc.fegs === undefined ) // initialize fegs
    
      twc.fegs = {
      
        active : false
        
        };
        
    // end initialize fegs
    
  const className = 'mI5LZR7uO6ulEM2r8pRj';
  
  // deactivate
  
  if ( twc.fegs.active ) {
  
    const callback = ( element ) => {
    
      element
      
        .classList
        
        .remove ( className )
        
      };
      
    twc
    
      .fegs
      
      .active = false;
      
    siteDocument
    
      .querySelectorAll ( selector  )
      
      .forEach ( callback );
      
    return;
    
    }
    
  // begin activate
  
    const callback = ( element ) => {
    
      element
      
        .classList
        
        .add ( className )
        
      };
      
    elements.forEach ( callback );
    
    twc.fegs.active = true;
    
    // end activate
    
  } ) ( );
