( function ( ) {

  /*
  
    gallery sections image urls
    
    Version       : 0.1.1
    
    SS Version    : 7.1
    
    Fluid
    Engine
    Compatible    : Unknown
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
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
    
  [...gallerySections]
    
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
  
  const html = `<pre><code>${ urls }</code></pre>`;
  
  const w = window.open ( '' );
  
  w.document.write ( html );
  
  const title = document.createElement ( 'title' );
  
  title.append ( 'Gallery Sections Image URLs' );
  
  w.document.head.append ( title );
  
  } ( ) );
