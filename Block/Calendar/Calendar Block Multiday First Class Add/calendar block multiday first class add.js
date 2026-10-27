( ( ) => {

  // debugger;
  
  /*!
  
    calendar block multiday event first class add
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.2.0
    
    SS Versions       : 7.1, 7.0
    
    Dependencies      : calendar block observe changes
                        
                        < https://tinyurl.com/23rjk6zw >
    
    Copyright         : 2022-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Calendar Block Multiday Event First Class Add',
    
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
    
      codeKey = 'twc-cbmefca',
      
      hrefs = new Set ( ),
      
      itemCallback = ( element ) => {
      
        element
        
          .querySelectorAll (
          
            '.item--multiday .item-link[ href ]'
            
            )
            
          .forEach ( e =>
          
            hrefs.add (
            
              e.getAttribute ( 'href' )
              
              )
              
            );
            
        },
        
      markerCallback = ( element ) => {
      
        const isLastDay = element
        
          .closest ( 'td' )
          
          .nextElementSibling
          
          ?.classList
          
          .contains (
          
            'yui3-calendar-nextmonth-day'
            
            );
            
        // bail if not last day
        
        if ( ! isLastDay ) return;
        
        hrefs.forEach ( h =>
        
          [
          
            ...
            
            element
            
              .closest ( 'tbody' )
              
              .querySelectorAll (
              
                `.item-link[ href = "${
                
                  h
                  
                  }" ]`
                  
                )
                
            ]
            
            [ 0 ]
            
            .closest ( 'td' )
            
            .classList
            
            .add (
            
              `${
              
                codeKey
                
                }-multiday-first`
                
              )
            
          );
          
        },
        
      callback = ( element, type ) => {
      
        switch ( type ) {
        
          case 'item' :
          
            itemCallback (
            
              element
              
              );
              
            break;
            
          case 'marker' :
          
            markerCallback (
            
              element
              
              );
              
            break;
            
          }
          
        };
        
    self.push ( callback );
    
    return self;
    
    } ) ( twc.cboc.callbacks || [ ] );
    
  } ) ( );
