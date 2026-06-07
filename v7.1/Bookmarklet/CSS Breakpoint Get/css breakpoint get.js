( ( ) => {

  // debugger;
  
  /*
  
    css breakpoint get
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Versions     : 7.1
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'CSS Breakpoint Get',
    
    version = '0.1.0',
  
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
      
  dcmnt = siteFrameElement
  
    ?.contentDocument;
    
  if ( ! dcmnt ) {
  
    const s = `TWC ${ title }
    
      Error : can not find the site frame.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if no site frame
    
    }
    
  let breakpoint = dcmnt
  
    .head
    
    .querySelectorAll (
    
      'style[ id ^= "style_tweak_tag_" ]'
      
      );
       
  if ( ! breakpoint.length ) {
  
    const s = `TWC ${ title }
    
      Please make a change to Site Styles > Miscellaneous > Page With(Max) or Site Margin.
      
      Undo that change but do not SAVE or EXIT.
      
      Run this bookmarklet again.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    return; // bail if no site frame
    
    }
    
  breakpoint = [
  
    ...
    
    breakpoint
    
    ]
    
    .filter (
    
      e => e
      
        .textContent
        
        .startsWith ( 'h1' )
        
      )
      
    [ 0 ]
    
    .textContent
    
    .match (
    
      /@media screen and \(min-width:(\d+)px\){h1{font-size:calc\(var\(--heading-1-size-value\) \* 1rem\)}}/
      
      )
      
    [ 1 ];
    
  {
  
    const s = `TWC ${ title }
    
      The breakpoint value is ${
      
        breakpoint
        
        }px.
        
      Exit Site Styles without saving changes.
      
      `
      
      .trim ( )
      
      .replace ( /^ +/gm, '' );
      
    alert ( s );
    
    }
    
  } ) ( );
