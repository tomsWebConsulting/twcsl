( function ( ) {

  /*
  
    asset library selected image urls
    
    License       : < https://bit.ly/3F8sn8W >
    
    Version       : 0.1.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const selector = '.asset-item input[checked]';
  
  let elements = document.querySelectorAll ( selector );
  
  elements = Array.from ( elements );
  
  let urls = '';

  elements.forEach ( ( element ) => {
  
    let url = element
    
      .closest ( '.asset-item' )
      
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
