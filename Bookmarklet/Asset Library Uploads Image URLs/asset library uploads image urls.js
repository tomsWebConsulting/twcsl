( function ( ) {

  /*
  
    asset library uploads image urls
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.1.2
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const types = [
  
    'gif',
    
    'jpg',
    
    'jpeg',
    
    'png'
    
    ];
    
  // begin urls
  
    let selector = '.image-picker-overlay img';
    
    let urls = '';
    
    [
    
      ...
      
      document
      
        .querySelectorAll ( selector )
        
      ]
      
      .forEach ( element => {
      
        const selector = 'div:nth-child( 2 )';
        
        let type = element
        
          .parentElement
          
          .parentElement
          
          .querySelector ( selector )
          
          .textContent
          
          .trim ( )
          
          .toLowerCase ( )
          
          .match ( /\.([^.\\/:*?"<>|\r\n]+)$/ )
          
          [ 1 ];
          
        const b = ! types
        
          .includes ( type );
          
        if ( b ) return; // continue
        
        let url = element.getAttribute ( 'src' );
        
        url = new URL ( url );
        
        url = url.protocol + '//' + url.host + url.pathname
        
        url = decodeURI ( url );
        
        urls += url + '\n';
        
        } );
        
    let d = window
    
      .open ( '' )
      
      .document;
      
    let html = `<pre><code>${ urls }</code></pre>`;
    
    let title = document
    
      .createElement ( 'title' );
      
    title.append ( 'Asset Library Uploads Image URLs' );
    
    d
    
      .head
      
      .append ( title );
      
    d
    
      .body
      
      .insertAdjacentHTML ( 'beforeend', html );
      
    // end urls
    
  // begin errors
  
    let filenames = '';
    
    selector =
    
      '.image-picker-overlay svg circle[ stroke="#CE2C30" ]';
      
    [
    
      ...
      
      document
      
        .querySelectorAll ( selector )
        
      ]
      
      .forEach ( element => {
      
        const f = element
        
          .closest ( 'div' )
          
          .previousSibling
          
          .querySelector ( 'p' )
          
          .textContent
          
          .trim ( );
          
        const type = f
        
          .match ( /\.([^.\\/:*?"<>|\r\n]+)$/ )
          
          [ 1 ];
          
        const b = ! types
        
          .includes ( type );
          
        if ( b ) return; // continue
        
        filenames += f + '\n';
        
        } );
        
    d = window
    
      .open ( '' )
      
      .document;
      
    html = `<pre><code>${ filenames }</code></pre>`;
    
    title = document.createElement ( 'title' );
    
    title.append ( 'Asset Library Uploads Image Filename Errors' );
    
    d
    
      .head
      
      .append ( title );
      
    d
    
      .body
      
      .insertAdjacentHTML ( 'beforeend', html );
      
    // end errors
    
  } ( ) );
