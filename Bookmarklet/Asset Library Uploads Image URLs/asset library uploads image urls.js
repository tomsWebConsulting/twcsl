( function ( ) {

  /*
  
    asset library uploads image urls
    
    License       : < https://bit.ly/3F8sn8W >
    
    Version       : 0.1.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  let selector = '.image-picker-overlay img';
  
  let elements = document.querySelectorAll ( selector );
  
  elements = Array.from ( elements );
  
  let l = elements.length;
  
  let urls = '';
  
  for ( let i = 0; i < l; i++ ) {
  
    let element = elements [ i ];
    
    let url = element.getAttribute ( 'src' );
    
    url = new URL ( url );
    
    url = url.protocol + '//' + url.host + url.pathname
    
    url = decodeURI ( url );
    
    urls += url + '\n';
    
    }
    
  let html = `<pre><code>${ urls }</code></pre>`;
  
  let w = window.open ( '' );
  
  w.document.write ( html );
  
  let title = document.createElement ( 'title' );
  
  title.append ( 'Assest Library Image URLs' );
  
  w.document.head.append ( title );
  
  let filenames = '';
  
  selector =
  
    '.image-picker-overlay svg circle[ stroke="#CE2C30" ]';
    
  elements = document.querySelectorAll ( selector );
  
  elements = Array.from ( elements );
  
  l = elements.length;
  
  for ( let i = 0; i < l; i++ ) {
  
    const f = elements [ i ]
    
      .closest ( 'div' )
      
      .previousSibling
      
      .querySelector ( 'p' )
      
      .textContent;
      
    filenames += f + '\n';
    
    }
    
  html = `<pre><code>${ filenames }</code></pre>`;
  
  w = window.open ( '' );
  
  w.document.write ( html );
  
  title = document.createElement ( 'title' );
  
  title.append ( 'Asset Library Uploads Image Filename Errors' );
  
  w.document.head.append ( title );
  
  } ( ) );
