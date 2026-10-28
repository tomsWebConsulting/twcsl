( ( ) => {

  // debugger;
  
  /*!
  
    calendar block past class add
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.2.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2022-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Calendar Block Past Class Add',
    
    version = '0.2.0',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2026 Thomas Creedon
      
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
    
      codeKey = 'twc-cbpca';
      
      callback = ( element, type ) => {
      
        const isType = type === 'item';
        
        // bail if not type
        
        if ( ! isType ) return;
        
        element =
        
          element.closest ( 'td' );
          
        const day = element
        
          .querySelector (
          
            '.marker-daynum'
            
            )
            
          .textContent
          
          .trim ( );
          
        let d = element
        
          .closest (
          
            '.yui3-calendar-pane'
            
            )
            
          .querySelector (
          
            '.yui3-calendar-header-label'
            
            )
            
          .textContent
          
          .split ( ' ' );
          
        // d
        
        {
        
          d.splice ( 1, 0, day );
          
          d = d.join ( ' ' );
            
          d = new Date ( d );
          
          if ( d >= Date.now ( ) )
          
            return; // continue
            
          }
          
        element
        
          .classList
          
          .add ( `${ codeKey }-past` );
          
        };
        
    self.push ( callback );
    
    return self;
    
    } ) ( twc.cboc.callbacks || [ ] );
    
  } ) ( );
