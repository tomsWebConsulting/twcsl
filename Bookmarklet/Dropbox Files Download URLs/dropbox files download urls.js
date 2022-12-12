( function ( ) {

  /*
  
    dropbox files download urls
    
    License       : < https://bit.ly/3F8sn8W >
    
    Version       : 0.1.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const selector = '.sl-list-column--filename > a';
  
  let urls = document.querySelectorAll ( selector );
  
  urls = Array.from ( urls );
  
  urls = urls.map ( anchor => {
  
    anchor.host = 'dl.dropboxusercontent.com';
    
    anchor.search = '';
    
    const href = anchor.href;
    
    return href;
    
    } );
    
  urls = urls.join ( '\n' );
  
  navigator.clipboard.writeText ( urls );
  
  } ( ) );
