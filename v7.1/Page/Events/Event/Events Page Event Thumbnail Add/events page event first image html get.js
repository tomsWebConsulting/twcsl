( function ( ) {

  /*
  
    events page event first image html get
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.0
    
    SS Version    : 7.1
    
    Fluid
    Engine
    Compatible    : Not Applicable
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  debugger;
  
  const codeKey = 'twc-epefihg';
  
  const codeTitle = 'Events Page Event First Image Html Get';
  
  const version = '0.1.0';
  
  const s = `${ codeTitle } Bookmarklet v${ version }, ` +
  
    'License < https://tinyurl.com/s872fb68 >, ' +
    
    'Tom\'s Web Consulting < http://www.tomsWeb.consulting >';
    
  console.log ( s );
  
  const l = document
  
    .querySelectorAll ( '.squarespace-config' )
    
    .length;
    
  let selector = '.eventitem-column-content .sqs-block-image ' +
  
    `.design-layout-inline .sqs-block-image-link[ href="#${ codeKey }" ]`;
    
  let siteDocument;
  
  // set site document
  
  if ( l ) {
  
    siteDocument = document
    
    .querySelector ( 'iframe#sqs-site-frame' )
    
    .contentDocument;
    
    } else
    
      siteDocument = document;
      
  let link = siteDocument
  
    .querySelector ( selector );
    
  if ( link == null ) return; // bail if no tagged image block
  
  const escapeHTML = s => {
  
    s = new Option ( s )
    
      .innerHTML;
      
    return s;
    
    };
    
  selector = '.image-block-wrapper';
  
  let element = link
  
    .querySelector ( selector );
    
  const figure = element
    
    .parentElement
    
    .parentElement;
    
  figure.setAttribute ( 'style', 'max-width : [ width ]px' );
    
  figure.append ( element );
  
  link.remove ( );
  
  element = element
  
    .closest ( '.sqs-block-image' );
    
  const img = element
  
    .querySelector ( 'img' );
    
  img.setAttribute ( 'data-image', '[ url ]' )
  
  img.setAttribute ( 'data-image-dimensions', '[ width ]x[ height ]' )
  
  img.setAttribute ( 'data-src', '[ url ]' )
  
  img.setAttribute ( 'height', '[ height ]' )
  
  img.setAttribute ( 'src', '[ url ]' )
  
  img.setAttribute ( 'width', '[ width ]' )
  
  const b = element
  
    .parentElement
    
    .classList
    
    .contains ( 'col' )
    
  if ( b )
  
    element = element
    
      .closest ( '.sqs-row' );
      
  let html = element
  
    .outerHTML
    
    .replace ( / +/g, ' ' )
    
    .replace ( / +\n/g, '\n' )
    
    .replace ( /\n +/g, '\n' )
    
    .replace ( /\n+/g, '\n' )
    
    .replaceAll ( '"\n', '"' )
    
    .replaceAll ( '\n"', '"' )
    
    .replace ( / id="[^"]+"/g, '' )
    
    .replace ( /https:\/\/images.squarespace-cdn.com\/content\/v1\/[^?]+/g, '[ url ]' )
    
    .replaceAll ( '\n', '\n    ' );
    
  html = escapeHTML ( html );
  
  html = `<pre><code>    ${ html }\n    </code></pre>`;
  
  const w = window.open ( );
  
  const title = document
  
    .createElement ( 'title' );
    
  title.text = `${ codeTitle } Bookmarklet`;
  
  w
  
    .document
    
    .head
    
    .append ( title );
    
  w
  
    .document
    
    .write ( html );
    
  } ) ( );
