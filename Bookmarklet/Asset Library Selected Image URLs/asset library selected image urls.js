( function ( ) {

  /*
  
    asset library selected image urls
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.2.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const selector = '.asset-item input[checked]';
  
  const title = 'Asset Library Selected Image URLs';
  
  const version = '0.2.0';
  
  let s = `${ title } v${ version }, License < ` +
    
    'https://tinyurl.com/s872fb68 >, ' +
    
    'Tom\'s Web Consulting < http://www.tomsWeb.consulting >';
    
  console.log ( s );
  
  let elements = document
  
    .querySelectorAll ( selector );
    
  if ( ! elements.length ) {
  
    s = `${ title } :\n\nPlease select Asset Library images.`;
    
    alert ( s );
    
    return;
    
    }
    
  elements = Array.from ( elements );
  
  let urls = '';

  elements.forEach ( ( element ) => {
  
    const selector = 'td:nth-child( 6 )';
    
    const types = [
    
      'GIF',
      
      'JPEG',
      
      'PNG'
      
      ];
      
    element = element
    
      .closest ( '.asset-item' );
      
    const type = element
    
      .querySelector ( selector )
      
      .textContent
      
      .trim ( );
      
    const b = ! types.includes ( type );
    
    if ( b ) return; // continue
    
    let url = element
    
      .querySelector ( 'img' )
      
      .getAttribute ( 'src' );
      
    url = new URL ( url );
    
    url = url.protocol + '//' + url.host + url.pathname
    
    url = decodeURI ( url );
    
    urls = urls + url + '\n';
    
    } );
  
  const html = `<pre><code>${ urls }</code></pre>`;
  
  const titleElement = document.createElement ( 'title' );
  
  const d = window
  
    .open ( '' )
    
    .document;
    
  titleElement.append ( 'Asset Library Image URLs' );
  
  d
  
    .head
    
    .append ( titleElement );
    
  d
  
    .body
    
    .insertAdjacentHTML ( 'beforeend', html );
    
  } ( ) );
