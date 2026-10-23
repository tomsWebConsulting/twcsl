( ( ) => {

  // debugger;
  
  /*!
  
    calendar block observe changes
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.5.0
    
    SS Versions       : 7.1, 7.0
    
    Note              : this code is a base for other effects. this code
                        alone should not produce any visible change
    
    Copyright         : 2022-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Calendar Block Observe Changes',
    
    version = '0.5.0',
    
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // global
  
  {

    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc cboc sub-module
    
    twc.cboc = twc.cboc || { };
    
    // initialize twc cboc callbacks sub-module
    
    twc.cboc.callbacks =
    
      twc.cboc.callbacks || [ ];
      
    }
    
  const
  
    codeKey = 'twc-cboc',
    
    options = codeKey
    
      .split ( '-' )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
      
    callbacks = options.callbacks;
    
  // bail if no callbacks
  
  if ( ! callbacks.length ) return;
  
  let debugFlag = false;
  
  const
  
    callbackRun =
    
      ( callback, element, type ) => {
      
        try {
        
          callback ( element, type );
          
          } catch ( error ) {
          
            const s = `${
            
              codeKey
              
              } callback error`;
              
            console.error ( s, error );
            
            }
            
        },
        
    ssVersion = Static
    
      .SQUARESPACE_CONTEXT
      
      .templateVersion,
      
    addedNodeCallback = ( element ) => {
    
      const isElement = element
      
        .nodeType
        
        ===
        
        1;
        
      // bail if not element
      
      if ( ! isElement ) return;
      
      const
      
        classList = element.classList,
        
        isEvent = classList.contains (
        
          'has-event'
          
          ),
          
        isNonEventSkip =
        
          options.nonEventElementSkip
          
          &&
          
          ! isEvent;
          
      // bail if element not event
      
      if ( isNonEventSkip ) return;
      
      const
      
        isDay = classList.contains (
        
          'yui3-calendar-day'
          
          ),
          
        isFlyout = classList.contains (
        
          'flyoutitemlist'
          
          ),
          
        isItem = classList.contains (
        
          'itemlist'
          
          );
          
        isMarker = classList.contains (
        
          'marker'
          
          );
          
      let type;
      
      switch ( true ) {
      
        case isEvent :
        
          type = 'event';
          
          break;
          
        case isFlyout :
        
          type = 'flyout';
          
          break;
          
        case isItem :
        
          type = 'item';
          
          break;
          
        case isMarker :
        
          type = 'marker';
          
          break;
          
        case isDay :
        
          type = 'day';
          
          break;
          
        }
        
      options
      
        .callbacks
        
        .forEach (
        
          c => callbackRun (
          
            c,
            
            element,
            
            type
            
            )
            
          );
          
      };
      
    mutationCallback = ( mutation ) => {
    
      if ( debugFlag )
      
        console.log (
        
          `${ codeKey } mutation : `,
          
          mutation
          
          );
          
      const addedNodes =
      
        mutation.addedNodes;
        
      // bail if no added nodes
      
      if ( ! addedNodes.length ) return;
      
      addedNodes.forEach (
      
        addedNodeCallback
        
        );
        
      },
      
    initialize = ( ) => {
    
      const
      
        calendarElements = document
        
          .body
          
          .querySelectorAll (
          
            [
            
              // 7.1, 7.0
              
              '.sqs-block-calendar',
              
              // 7.0, Events page view calendar
              
              '.sqs-events-collection-calendar',
              
              ]
              
              .join ( ', ' )
              
            ),
            
        hasCalendars =
        
          calendarElements.length;
          
      debugFlag = options.debugFlag;
      
      if ( debugFlag )
      
        console.log (
        
          `${
          
            codeKey
            
            } calendar elements : `,
            
          calendarElements
          
          );
          
      // bail if no calendars
      
      if ( ! hasCalendars ) return;
      
      // start listening for changes in specified elements
      
      calendarElements.forEach (
      
        e => new MutationObserver (
        
          ms => {
          
            if ( debugFlag )
            
              console.log (
              
                `${
                
                  codeKey
                  
                  } mutations : `,
                  
                ms
                
                );
                
            ms.forEach (
            
              mutationCallback
              
              );
              
            }
            
          )
          
          .observe (
          
            e,
            
            {
            
              childList : true,
              
              subtree : true
              
              }
              
            )
            
        );
        
      },
      
    domContentLoadedCallback = ( ) => {
    
      switch ( ssVersion ) {
      
        case '7.1' :
        
          initialize ( );
          
          break;
          
        case '7' :
        
          Squarespace.onInitialize (
          
            Y,
            
            initialize
            
            );
            
          break;
          
        }
        
      };
      
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
