( ( ) => {

  /*
  
    dropbox files download urls
    
    License : < https://tinyurl.com/s872fb68 >
    
    Version : 0.1.1
    
    By      : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const version = '0.1.1';
  
  const s = `Dropbox Files Download URLs v${ version }, ` +
  
    'License < https://tinyurl.com/s872fb68 >, ' +
    
    'Tom\'s Web Consulting < http://www.tomsWeb.consulting >';
    
  console.log ( s );
  
  const selector = '.dig-Link';
  
  const urls = [
  
    ...
    
    document
    
      .querySelectorAll ( selector )
      
    ]
    
    .map ( anchor => {
    
      anchor.host = 'dl.dropboxusercontent.com';
      
      anchor.protocol = 'http:';
      
      anchor.search = '';
      
      const href = anchor.href;
      
      return href;
      
      } )
      
    .join ( '\n' );
    
  navigator
  
    .clipboard
    
    .writeText ( urls );
    
  } ) ( );
