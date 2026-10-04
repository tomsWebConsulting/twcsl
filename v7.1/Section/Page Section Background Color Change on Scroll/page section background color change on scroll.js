( ( ) => {

  // debugger;
  
  /*!
  
    begin page section background color change on scroll
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Version      : 7.1
    
    Note            : effect does not change the footer
    
    Copyright       : 2021-2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Page Section Background Color Change on Scroll';
  
    version = '0.2.0',
  
    s = `
    
      ${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc psbccos sub-module
    
    twc.psbccos = twc.psbccos || { };
    
    }
    
  const
  
    codeKey = 'twc-psbccos',
    
    options = codeKey
    
      .split ( '-' )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    positionGet = ( element ) => {
    
      const position = {
      
        left : element.offsetLeft,
        
        top : element.offsetTop
        
        };
        
      return position;
      
      },
      
    forEachCallback =
    
      ( element, index ) => {
      
        const b = ! (
        
          positionGet ( element ).top
          
          <=
          
          window.scrollY
          
          );
          
        if ( b ) return;
        
        document
        
          .body
        
          .style
          
          .backgroundColor
          
        =
        
        options.sectionColors [ index ];
        
        },
        
    scrollHandler = ( event ) => {
    
      const isEditing = document
      
        .body
        
        .classList
        
        .contains (
        
          'sqs-is-page-editing'
          
          );
          
      // bail if editing
      
      if ( isEditing ) {
      
        window
        
          .removeEventListener (
          
            'scroll',
            
            scrollHandler
            
            );
            
        return;
        
        }
        
      document
      
        .body
        
        .querySelectorAll (
        
          '#page [data-test="page-section"]'
          
          )
          
        .forEach ( forEachCallback );
        
      };
      
  window.addEventListener (
  
    'scroll',
    
    scrollHandler
    
    );
  
  } ) ( );
