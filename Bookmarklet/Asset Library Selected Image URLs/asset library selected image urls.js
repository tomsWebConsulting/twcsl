( function ( ) {

  /*
  
    asset library selected image urls
    
    License       : < https://bit.ly/3F8sn8W >
    
    Version       : 0.1.1
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const selector = '.asset-item input[checked]';
  
  let elements = document.querySelectorAll ( selector );
  
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
  
  const w = window.open ( '' );
  
  w.document.write ( html );
  
  const title = document.createElement ( 'title' );
  
  title.append ( 'Asset Library Image URLs' );
  
  w.document.head.append ( title );
  
  } ( ) );
