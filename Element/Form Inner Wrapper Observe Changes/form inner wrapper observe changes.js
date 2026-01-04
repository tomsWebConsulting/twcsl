( ( ) => {

  /*!
  
    form inner wrapper observe changes
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.1
    
    SS Versions     : 7.1, 7.0
    
    v7.1
    Fluid
    Engine
    Compatible      : Not Applicable
    
    v7.0
    Templates       : Brine ( Aria, Blend, Burke, Cacao, Clay, Fairfield, Feed,
                      Foster, Greenwich, Hatch, Heights, Hunter, Hyde, Impact,
                      Jaunt, Juke, Keene, Kin, Lincoln, Maple, Margot, Marta,
                      Mentor, Mercer, Miller, Mojave, Moksha, Motto, Nueva,
                      Pedro, Pursuit, Rally, Rover, Royce, Sofia, Sonora,
                      Stella, Thorne, Vow, Wav, West )
                      
                      your template is not listed? then it is not currently
                      supported
    
    Dependencies    : modal lightbox observe changes
                      
                      < https://tinyurl.com/877wczvk >
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.1',
    
    s = `Form Inner Wrapper Observe Changes v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc fiwoc sub-module
  
  twc.fiwoc = ( ( self ) => self ) ( twc.fiwoc || { } );
  
  // initialize twc fiwoc callbacks sub-module
  
  twc.fiwoc.callbacks =
  
    ( ( self ) => self ) ( twc.fiwoc.callbacks || [ ] );
    
  // initialize twc mloc sub-module
  
  twc.mloc = ( ( self ) => self ) ( twc.mloc || { } );
  
  // initialize twc mloc callbacks sub-module
  
  twc.mloc.callbacks = ( ( self ) => {
  
    const callback = ( element ) => {
    
      const
      
        codeKey = 'twc-fiwoc',
        
        options = codeKey
        
          .split ( '-' )
          
          .reduce ( ( obj, key ) => obj?.[ key ], window ),
          
        hasCallbacks = options
        
          .callbacks
          
          .length;
          
      if ( ! hasCallbacks ) return; // bail if no callbacks
      
      const
      
        mutationCallback = ( mutation ) => {
        
          mutation
          
            .addedNodes
            
            .forEach ( nodeCallback );
            
          },
          
        mutationsCallback = ( mutations ) => {
        
          mutations.forEach ( mutationCallback );
          
          },
          
        nodeCallback = ( node ) => {
        
          options
          
            .callbacks
            
            .forEach (
            
              c => runCallback ( c, node )
              
              );
              
          },
          
        observer = new MutationObserver (
        
          mutationsCallback
          
          ),
          
        runCallback = ( callback, element ) => {
        
          try {
          
            callback ( element );
            
            } catch ( error ) {
            
              const s = `${ codeKey } callback error`;
              
              console.error ( s, error );
              
              }
              
          };
          
      element = element
      
        .querySelector ( '.form-inner-wrapper' );
        
      if ( ! element ) return; // bail if no element
      
      // start listening for changes in form inner wrapper
      
      observer.observe (
      
        element,
        
        { childList : true }
        
        );
        
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.mloc.callbacks || [ ] );
    
  } ) ( );
