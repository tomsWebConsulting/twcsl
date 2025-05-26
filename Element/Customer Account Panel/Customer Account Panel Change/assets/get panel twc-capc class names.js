var

  getClassesWithPrefix = ( element, prefix ) => {
  
    const
    
      findMatchingClasses = ( element ) => {
      
        const callback = ( c ) => {
        
          if ( ! c.startsWith ( prefix ) ) return;
          
          matchingClasses
          
            .add ( c );
            
          };
          
        element
        
          .classList
          
          .forEach ( callback );
          
        element
        
          .querySelectorAll ( '*' )
          
          .forEach ( findMatchingClasses ); // recursively check descendants
          
        };
        
      matchingClasses = new Set ( ); // use set to avoid duplicates
  
    findMatchingClasses ( element );
    
    const classes = [
    
      ...
      
      matchingClasses
      
      ]; // convert set to array
      
    return classes;
    
    },
    
  classes
  
    =
    
    getClassesWithPrefix (
    
      document
      
        .body
        
        .querySelector (
        
          '#user-profile-page-root'
          
          ),
          
      'twc-capc'
      
      )
      
      .join ( '\n' );
      
console

  .log ( classes );
