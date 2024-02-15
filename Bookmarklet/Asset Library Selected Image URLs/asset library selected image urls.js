( function ( ) {

  /*
  
    asset library selected image urls
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.3.1
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const title = 'Asset Library Selected Image URLs';
  
  const version = '0.3.1';
  
  const xpath = '//h1[text()="Asset Library"]';
  
  let element = document
  
    .getElementsByClassName ( 'sqs-damask-panel-content' )
    
    [ 0 ];
    
  let s = `${ title } v${ version }, ` +
    
    'License < https://tinyurl.com/s872fb68 >, ' +
    
    'Tom\'s Web Consulting < http://www.tomsWeb.consulting >';
    
  console.log ( s );
  
  element = document
  
    .evaluate ( xpath, element, null, XPathResult.FIRST_ORDERED_NODE_TYPE,
    
      null )
      
    .singleNodeValue;
    
  if ( element == null ) {
  
    s = `${ title } :\n\nPlease go to the Assest Library.`;
    
    alert ( s );
    
    return;
    
    }
    
  const selector = [
  
    '[ data-test="asset-item" ] [ data-test="checkbox-checked" ]', // grid
    
    '.asset-item input[checked]' // list
    
    ]
    
    .join ( ', ' );
    
  let elements = document
  
    .querySelectorAll ( selector );
    
  if ( ! elements.length ) {
  
    s = `${ title } :\n\nPlease select images.`;
    
    alert ( s );
    
    return;
    
    }
    
  const codeKey = 'twc-alsiu';
  
  let debug = false;
  
  try {
  
    debug = twc.alsiu.debug;
    
    } catch ( e ) { }
    
  elements = Array.from ( elements );
  
  console.log ( elements );
  
  let urls = '';

  elements.forEach ( ( element ) => {
  
    let selector = [
    
      '[ data-test="asset-item" ]', // grid
      
      '.asset-item' // list
      
      ]
      
      .join ( ', ' );
    
    if ( debug )
    
      console.log ( `${ codeKey } element :`, element );
      
    element = element
    
      .closest ( selector );
      
    if ( debug )
    
      console.log ( `${ codeKey } element closest:`, element );
      
    selector = 'img[src*="?content-type=image%2F"]';
    
    element = element
    
      .querySelector ( selector );
      
    if ( debug )
    
      console.log ( `${ codeKey } element image:`, element );
      
    if ( element == null ) return; // continue
    
    let url = element
    
      .getAttribute ( 'src' );
      
    url = new URL ( url );
    
    url = url.protocol + '//' + url.host + url.pathname
    
    url = decodeURI ( url );
    
    if ( debug ) {
    
      console.log ( `${ codeKey } url :`, url );
      
      }
      
    urls = urls + url + '\n';
    
    } );
  
  const html = `<pre><code>${ urls }</code></pre>`;
  
  const titleElement = document.createElement ( 'title' );
  
  const dcmnt = window
  
    .open ( '' )
    
    .document;
    
  titleElement.append ( 'Asset Library Image URLs' );
  
  dcmnt
  
    .head
    
    .append ( titleElement );
    
  dcmnt
  
    .body
    
    .insertAdjacentHTML ( 'beforeend', html );
    
  } ( ) );
