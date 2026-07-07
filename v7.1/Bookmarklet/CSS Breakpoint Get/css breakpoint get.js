( ( ) => {

  // debugger;
  
  /*
  
    css breakpoint get
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Versions     : 7.1
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'CSS Breakpoint Get',
    
    version = '0.2.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  let dcmnt = window.top.document;
  
  const isEditor = dcmnt
  
    .documentElement
    
    .classList
    
    .contains ( 'squarespace-damask' );
    
  if ( ! isEditor ) {
  
    const s = `TWC ${ title }
    
      Please log in to your Squarespace site.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if not logged in
    
    }
    
  const siteFrameElement = dcmnt
  
    .querySelector (
    
      'iframe[ data-testid = "sqs-site-frame" ]'
      
      );
      
  if ( ! siteFrameElement ) {
  
    const s = `TWC ${ title }
    
      Error : can not find the site frame.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if no site frame
    
    }
    
  const breakpoint = siteFrameElement
    
      .contentWindow
      
      .Static
      
      .SQUARESPACE_CONTEXT
      
      .tweakJSON
      
      .maxPageWidth;
      
  {
  
    const s = `TWC ${ title }
    
      The breakpoint value is ${
      
        breakpoint
        
        }.
        
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    }
    
  } ) ( );
