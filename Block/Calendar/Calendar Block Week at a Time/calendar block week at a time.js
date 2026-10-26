( ( ) => {

  // debugger;
  
  /*!
  
    calendar block week at a time
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.2.0
    
    SS Versions       : 7.1, 7.0
    
    Dependencies      : calendar block observe changes
                        < https://tinyurl.com/23rjk6zw >
    
    Copyright         : 2021-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Calendar Block Week at a Time',
    
    version = '0.2.0',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const isEditMode = window.frameElement;
    
  // bail if edit mode
  
  if ( isEditMode ) return;
  
  // initialize twc module
  
  window.twc = window.twc || { };
  
  // initialize twc cboc sub-module
  
  twc.cboc = twc.cboc || { };
  
  // initialize twc cboc callbacks sub-module
  
  twc.cboc.callbacks = ( ( self ) => {
  
    let
    
      calendarElement,
      
      headerElement;
      
    const
    
      codeKey = 'twc-cbwaat';
      
      imageDisplayForce = element => {
      
        // bail if no element
        
        // if ( ! element ) return;
        
        Y
        
          .one ( element )
          
          .simulate ( 'resize' );
          
        };
        
      monthChange = ( direction ) => {
      
        const pseudos = {
        
          next : {
          
            calendarRow : 'first-child',
            
            navigation : 'last-child'
            
            },
            
          prev : {
          
            calendarRow : 'last-child',
            
            navigation : 'first-child'
            
            },
            
          };
          
        let pseudo = pseudos
        
          [ direction ]
          
          .navigation;
          
        Y
        
          .one (
          
            headerElement.querySelector (
            
              `.yui3-calendarnav-${
              
                direction
                
                }month:${
                
                  pseudo
                  
                  }`
                  
              )
              
            )
            
          .simulate ( 'click' );
          
        pseudo = pseudos
        
          [ direction ]
          
          .calendarRow;
          
        const element = calendarElement
        
          .querySelector (
          
            `.yui3-calendar-row:${
            
              pseudo
              
              }`
              
            );
            
        element
        
          .style
          
          .display
          
          =
          
          'table-row';
          
        // forceImageDisplay ( $element );
        
        if ( direction === 'next' )
        
          return;
          
        if ( ! element.clientHeight ) {
        
          element
          
            .style
            
            .display
            
            =
            
            '';
            
          element
          
            .previousElementSibling
            
            .style
            
            .display
            
            =
            
            'table-row';
            
          // imageDisplayForce ( element );
          
          }
          
        },
        
      weekChange =
      
        ( event, direction ) => {
          
          let weekElement =
          
            [
            
              ...
              
              calendarElement
              
              .querySelectorAll (
              
                '.yui3-calendar-row'
                
                )
                
              ]
              
            .filter ( e => {
            
              const has = e
              
                .style
                
                .display
                
                ===
                
                'table-row';
              
              if ( has ) return true;
              
              } )
              
            [ 0 ];
            
          weekElement
          
            .style
            
            .display
            
            =
            
            '';
            
          switch ( direction ) {
          
            case 'next' :
            
              weekElement = weekElement
              
                .nextElementSibling;
              
              break;
              
            case 'prev' :
            
              weekElement = weekElement
              
                .previousElementSibling;
                
              break;
              
            }
            
          if ( weekElement ) {
          
            weekElement
            
              .style
              
              .display
              
              =
              
              'table-row';
              
            imageDisplayForce (
            
              weekElement
              
              );
              
            } else {
            
              monthChange (
              
                direction,
                
                calendarElement
                
                );
                
              return;
              
              }
              
          if (
          
            ! weekElement.clientHeight
            
            ) {
          
              if ( direction === 'next' )
              
                weekElement
                
                  .style
                  
                  .display
                  
                  =
                  
                  '';
                  
              monthChange (
              
                direction,
                
                calendarElement
                
                );
                
              }
              
          },
          
      callback = ( element, type ) => {
      
        const isType = type === 'marker';
        
        // bail if not type
        
        if ( ! isType ) return;
        
        const isToday = element
        
          .closest ( 'td' )
          
          ?.classList
          
          .contains ( 'today' );
          
        // bail if not today
        
        if ( ! isToday ) return;
        
        element =
        
          element.closest ( 'tr' );
          
        // bail if no element
        
        if ( ! element ) return;
        
        element
        
          .style
          
          .display
          
          =
          
          'table-row';
          
        imageDisplayForce ( element );
        
        calendarElement =
        
          element.closest (
          
            '.sqs-block-calendar'
            
            );
            
        headerElement = calendarElement
        
          .querySelector (
          
            '.yui3-calendar-header'
                
            );
            
        const hasNavigation =
        
          headerElement
          
            .hasAttribute (
            
              `data-${ codeKey }`
              
              );
              
        // bail if navigation
        
        if ( hasNavigation ) return;
        
        // week navigation
        
        [
        
          'next',
          
          'prev'
          
          ]
          
          .forEach ( d => {
          
            const
            
              element =
              
                calendarElement
                
                  .querySelector (
                  
                    `.yui3-calendarnav-${
                    
                      d
                      
                      }month`
                      
                    ),
                    
              elementClone = element
              
                .cloneNode ( true );
                
            delete elementClone.id;
            
            elementClone
            
              .setAttribute (
              
                'aria-label',
                
                elementClone
                
                  .getAttribute (
                  
                    'aria-label'
                    
                    )
                  
                  .replace (
                  
                    'month',
                    
                    'week'
                    
                    )
                    
                );
                
            elementClone
            
              .setAttribute (
              
                `data-${ codeKey }`,
                
                ''
                
                );
                
            elementClone
            
              .addEventListener (
              
                'click',
                
                event => weekChange (
                
                  event,
                  
                  d,
                  
                  calendarElement
                  
                  )
                
                );
                
            let where;
            
            switch ( d ) {
            
              case 'next' :
              
                where = 'beforebegin';
                
                break;
                
              case 'prev' :
              
                where = 'afterend';
                
                break;
                
              }
              
            element
            
              .insertAdjacentElement (
              
                where,
                
                elementClone
                
                );
            
            } );
            
        headerElement.setAttribute (
        
          `data-${ codeKey }`,
          
          ''
          
          );
          
        };
        
    self.push ( callback );
    
    return self;
    
    } ) ( twc.cboc.callbacks || [ ] );
    
  } ) ( );
