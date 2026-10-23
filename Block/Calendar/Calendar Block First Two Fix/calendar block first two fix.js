( ( ) => {

  // debugger;
  
  /*!
  
    calendar block first two fix
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 1.0.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Calendar Block First Two Fix',
    
    version = '1.0.0',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = window.twc || { };
  
  // initialize twc cboc sub-module
  
  twc.cboc = twc.cboc || { };
  
  // initialize twc cboc callbacks sub-module
  
  twc.cboc.callbacks = ( ( self ) => {
  
    const
    
      className = 'marker-daynum',
      
      codeKey = 'twc-cbftf';
      
    let callback = ( element, type ) => {
    
      const isMarker = type === 'marker';
      
      // bail if not marker
      
      if ( ! isMarker ) return;
      
      const tbodyElement =
      
        element.closest ( 'tbody' );
        
      // bail if no tbody element
      
      if ( ! tbodyElement ) return;
      
      let hasFirstTwo = tbodyElement
      
        ?.[ codeKey ];
        
      // bail if has two first
      
      if ( hasFirstTwo ) return;
      
      tbodyElement [ codeKey ] =
      
        element
        
          .closest ( 'td' )
          
          .nextElementSibling
          
          ?.querySelector (
          
            `.${ className }`
            
            )
            
          ?.textContent
          
          ===
          
          '1';
          
      element [ codeKey ] = true;
      
      };
      
    self.push ( callback );
    
    callback = ( element, type ) => {
    
      const isMarker = type === 'marker';
      
      // bail if not marker
      
      if ( ! isMarker ) return;
      
      const isSkip = element
      
        [ codeKey ];
        
      // bail if skip
      
      if ( isSkip ) return;
      
      const tbodyElement =
      
        element.closest ( 'tbody' );
        
      let hasFirstTwo = tbodyElement
      
        ?.[ codeKey ];
        
      // bail if not has two first
      
      if ( ! hasFirstTwo ) return;
      
      element = element.querySelector (
      
        `.${ className }`
        
        );
        
      const n =
      
        Number ( element.textContent )
        
        +
        
        1;
        
      element.textContent = n;
      
      const isLastDay = element
      
        .closest ( 'td' )
        
        .nextElementSibling
        
        ?.classList
        
        .contains (
        
          'yui3-calendar-nextmonth-day'
          
          );
          
      // bail if last day
      
      if ( isLastDay ) {
      
        delete tbodyElement [ codeKey ];
        
        return;
        
        }
        
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.cboc.callbacks || [ ] );
    
  } ) ( );
