( ( ) => {

  // debugger;
  
  /*!
  
    gallery section right arrow auto click
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.3.0
    
    SS Version      : 7.1
    
    Note            : this effect is not active in SS Preview to test it use
                      private browsing < https://tinyurl.com/ynessvsf >
    
    Copyright       : 2024-2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Gallery Section Right Arrow Auto Click',
    
    version = '0.3.0',
    
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2024-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // bail if in preview
  
  if ( window.frameElement ) return;
  
  const
  
    codeKey = 'twc-gsraac',
    
    nextSelector = [
    
      '.gallery-fullscreen-slideshow-'
      
        +
        
        'control-btn[ data-next ]',
        
      '.gallery-reel-control-btn[ '
      
        +
        
        'data-next ]',
        
      '.gallery-slideshow-control-next '
      
        +
        
        '.gallery-slideshow-control-btn'
        
      ]
      
      .join ( ', ' ),
      
    observerOptions = {
    
      // root : document.querySelector ( '' ),
      
      rootMargin : '0px',
      
      threshold : 0.75
      
      },
    
    re = new RegExp (
    
      `^${ codeKey }\\s*:\\s*(.+)\$`,
      
      'm'
      
      ),
      
    selectorKey = '.gallery-section',
    
    wrapperSelector = [
    
      '.gallery-fullscreen-'
      
        +
        
        'slideshow-wrapper',
      
      '.gallery-reel-wrapper',
      
      '.gallery-slideshow-wrapper'
      
      ]
      
      .join ( ', ' ),
      
    xPathEvaluate = (
    
      xPathExpression,
      
      contextNode
      
      ) => {
    
        const xPathResults = document
        
          .evaluate (
          
            xPathExpression,
            
            contextNode,
            
            null,
            
            XPathResult
            
              .ORDERED_NODE_SNAPSHOT_TYPE,
            
            null
            
            );
            
        return xPathResults;
        
        },
        
    xPathExpression = `
    
      .//section [
      
        contains (
        
          concat (
          
            ' ',
            
            normalize-space ( @class ),
            
            ' '
            
            ),
            
          ' gallery-section '
          
          )
          
        ]//div [
        
          @data-test = 'gallery-slideshow-full'
          
          or
            
          @data-test = 'gallery-slideshow-reel'
          
          or
            
          @data-test = 'gallery-slideshow-simple'
          
          ]//figcaption [
          
            contains (
            
              concat (
              
                ' ',
                
                normalize-space ( @class ),
                
                ' '
                
                ),
                
              ' gallery-caption '
              
              )
              
            ]//p [
            
              contains (
              
                concat (
                
                  ' ',
                  
                  normalize-space ( @class ),
                  
                  ' '
                  
                  ),
                
                ' gallery-caption-content '
                
                )
                
              ]
              
              [
              
                contains (
                
                  .,
                  
                  '${ codeKey }'
                  
                  )
                  
                ]

      `,
      
    sectionCallback = ( element ) => {
    
      let
      
        text = element.textContent,
      
        options = text.match ( re );
        
      // continue
      
      if ( ! options ) return;
      
      let
      
        isAutoClick = false,
        
        inactivityId,
        
        intervalId;
        
      const
      
        inactivityDelay = options
        
          .inactivityDelay,
          
        sectionElement = element
        
          .closest ( '.gallery-section' ),
          
        stop = ( ) => {
        
          if ( ! intervalId ) return;
          
          clearInterval ( intervalId );
          
          intervalId = null;
          
          },
          
        wrapperElement = sectionElement
        
          .querySelector (
          
            wrapperSelector
            
            ),
            
        nextElement = wrapperElement
        
          .querySelector (
          
            nextSelector
            
            ),
            
        intervalCallback = ( ) => {
        
          isAutoClick = true;
          
          nextElement.click ( );
          
          isAutoClick = false;
          
          },
          
        start = ( ) => {
        
          // prevent multiple intervals
          
          if ( intervalId ) return;
          
          intervalId = setInterval (
          
            intervalCallback,
            
            options.slideDuration
            
            *
            
            1000
            
            );
            
          },
          
        resetInactivityTimer = ( ) => {
        
          if ( inactivityId )
          
            clearTimeout (
            
              inactivityId
              
              );
              
          inactivityId = setTimeout (
          
            start,
            
            inactivityDelay
            
            *
            
            1000
            
            );
            
          },
          
        wrapperCallback = ( ) => {
        
          // bail if auto click
          
          if ( isAutoClick ) return;
                      
          stop ( );
          
          const isBail =
          
            inactivityDelay === -1;
            
          // bail if -1
          
          if ( isBail ) {
          
            wrapperElement
            
              .removeEventListener (
              
                'click',
                
                wrapperCallback
                
                );
                
            wrapperElement
            
              .removeEventListener (
              
                'touchstart',
                
                wrapperCallback
                
                );
                
            return;
            
            }
            
          resetInactivityTimer ( );
          
          },
          
        slideshow = ( ) => {
        
          wrapperElement
          
            .addEventListener (
            
              'click',
              
              wrapperCallback
              
              );
              
          wrapperElement
          
            .addEventListener (
            
              'touchstart',
              
              wrapperCallback
              
              );
              
          start ( );
          
          };
          
      text = text.replace (
      
        options [ 0 ],
        
        ''
        
        )
        
        .trim ( );
        
      options = JSON
      
        .parse ( options [ 1 ] );
        
      const isObserver = options
      
        .intersectionObserver;
        
      sectionElement
      
        .classList
        
        .add ( codeKey );
        
      if ( text )
      
        element.textContent = text;
        
        else
        
          element
          
            .closest (
            
              '.gallery-caption'
              
              )
              
            .remove ( );
            
      if ( isObserver ) {
      
        let observer;
        
        const observerCallback =
        
          ( entries, observer ) => {
          
            entries.forEach (
            
              e => {
              
                const isIntersecting =
                
                  e.isIntersecting;
                  
                // bail if not intersecting
                
                if ( ! isIntersecting )
                
                  return;
                  
                observer.disconnect ( );
                
                slideshow ( );
                
                }
                
              );
            
            };
            
        observer =
        
          new IntersectionObserver (
          
            observerCallback,
            
            observerOptions
            
            );
            
        observer.observe (
        
          sectionElement
          
          );
          
        } else
        
          slideshow ( );
          
      },
      
    domContentLoadedCallback = ( ) => {
    
      const
      
        xPathResults = xPathEvaluate (
        
          xPathExpression,
          
          document.body
          
          );
          
      for (
      
        let i = 0;
        
        i < xPathResults.snapshotLength;
        
        i++
        
        )
        
        sectionCallback (
        
          xPathResults.snapshotItem ( i )
            
          );
          
    // hide show unregister
    
    {
    
      const sectionsElement = document
      
        .querySelector (
        
          '#page-regions'
          
          );
          
      sectionsElement
      
        .style
        
        .setProperty (
        
          `--${ codeKey }`,
          
          'visible'
          
          );
          
      twc
      
        .data
        
        .hideShow
        
        [ selectorKey ]
        
        .pop ( `--${ codeKey }` );
        
      const l = twc
      
        .data
        
        .hideShow
        
        [ selectorKey ]
        
        .length;
        
      if ( ! l )
      
        sectionsElement
        
          .style
          
          .setProperty (
          
            '--twc-gallery-section-visibility',
            
            'flex'
            
            );
            
      }
      
      };
      
  // hide show register
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc data sub-module
    
    twc.data = twc.data || { };
    
    // initialize twc data hideShow sub-module
    
    twc.data.hideShow =
    
      twc.data.hideShow || { };
      
    // initialize twc data hideShow selector key sub-module
    
    twc
    
      .data
      
      .hideShow [
      
        selectorKey
        
        ]
        
        =
        
        ( ( self ) => self ) (
        
          twc
          
            .data
            
            .hideShow [
            
            selectorKey
            
            ]
            
            ||
            
            [ ]
            
            );
            
    twc
    
      .data
      
      .hideShow
      
      [ selectorKey ]
      
      .push ( `--${ codeKey }` );
      
    }
    
  // domContentLoadedCallback ( );
  
  //
  
  document
  
    .addEventListener (
    
      'DOMContentLoaded',
      
      domContentLoadedCallback
      
      );
      
  //
  
  } ) ( );
