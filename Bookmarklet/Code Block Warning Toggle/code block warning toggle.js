( ( ) => {

  /*
  
    code block warning toggle
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.0
    
    Copyright     : 2024 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const version = '0.1.0';
  
  const s = `Code Block Warning Toggle v${ version }
  
    License < https://tinyurl.com/s872fb68 >
    
    © 2024 Thomas Creedon
    
    Tom's Web Consulting < http://www.tomsWeb.consulting >`
    
    .replace ( /^\s+/gm, '' );
    
  console.log ( s );
  
  const codeKey = 'twc-cbwt';
  
  const l = document
  
    .querySelectorAll ( '.squarespace-config' )
    
    .length;
    
  const selector = `style[ id="${ codeKey }" ]`;
  
  let siteDocument;
  
  // set site document
  
  if ( l )
  
    siteDocument = document
    
      .querySelector ( 'iframe#sqs-site-frame' )
      
      .contentDocument;
      
    else
    
      siteDocument = document;
      
  // begin deactivate
  
    const element = siteDocument
    
      .head
      
      .querySelector ( selector );
      
    if ( element !== null ) {
    
      element
      
        .remove ( );
         
      return;
      
      }
      
    // end deactivate
    
  const style = document
  
    .createElement ( 'style' );
    
  style.id = codeKey;
  
  style.innerHTML = `
  
    html.squarespace-damask .sqs-blockStatus,
    .sqs-block-code .removed-script
    
      {
    
        display : none;
        
        }
        
    `;
      
  siteDocument
  
    .head
    
    .appendChild ( style );
    
  } ) ( );
