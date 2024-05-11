( function ( ) {

  /*
  
    gallery sections image urls
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.2
    
    SS Version    : 7.1
    
    Fluid
    Engine
    Compatible    : Unknown
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
    const codeKey = 'twc-gsiu';
    
    const version = '0.1.2';
    
    const s = `Gallery Sections Image URLs v${ version }, ` +
    
      'License < https://tinyurl.com/s872fb68 >, ' +
      
      'Tom\'s Web Consulting < http://www.tomsWeb.consulting >';
      
    console.log ( s );
    
  const l = document
  
    .querySelectorAll ( '.squarespace-config' )
    
    .length;
    
  const className = 'gallery-section';
  
  let siteDocument;
  
  let urls = '';
  
  // set site document
  
  if ( l ) {
  
    siteDocument = document
    
    .querySelector ( 'iframe#sqs-site-frame' )
    
    .contentDocument;
    
    } else {
    
      siteDocument = document;
      
      }
      
  const gallerySections = siteDocument
  
    .getElementsByClassName ( className );
    
  [ ...gallerySections ]
  
    .forEach ( gallerySection => {
    
      const dataSectionId = gallerySection.getAttribute ( 'data-section-id' );
      
      const selector = '.gallery-grid .gallery-grid-item-wrapper img';
      
      urls += `data section id : ${ dataSectionId }\n\n`;
      
      gallerySection
      
        .querySelectorAll ( selector )
        
        .forEach ( image => {
        
          const url = image.getAttribute ( 'data-src' );
          
          urls += url + '\n';
          
          } );
          
      urls += '\n\n';
      
      } );
  
  if ( ! urls ) return; // bails if no urls
  
  const d = window
  
    .open ( '' )
    
    .document;
    
  const html = `<pre><code>${ urls }</code></pre>`;
  
  const title = document.createElement ( 'title' );
  
  title.append ( 'Gallery Sections Image URLs' );
  
  d
  
    .head
    
    .append ( title );
    
  d
  
    .body
    
    .insertAdjacentHTML ( 'beforeend', html );
    
  } ( ) );
