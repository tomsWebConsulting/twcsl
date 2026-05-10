( ( ) => {

  /*!
  
    section date hide
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.4.0
    
    SS Version      : 7.1
    
    Copyright       : 2021-2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.4.0',
    
    s = `Section Date Hide v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc sdh sub-module
    
    twc.sdh =
    
      twc.sdh
      
      ||
      
      { sectionidDateMap : [ ] };
      
    }
    
  const
  
    codeKey = 'twc-sdh',
    
    customElementSelector =
    
      `x-${ codeKey }`,
      
    // d = new Date ( '1970-01-01' ),
    
    d = new Date ( ),
    
    dDay = d.getDate ( ),
    
    dDayOfWeek = d.getDay ( ) + 1,
    
    dedupeArrayOfArrays = ( data ) => {
    
      const
      
        seen = new Set ( ),
        
        result = data.filter ( row => {
        
          const
          
            key =
            
              JSON.stringify ( row ),
              
              hasKey = seen.has ( key );
              
          let isUnique;
          
          if ( hasKey )
          
            isUnique = false;
            
            else {
            
            seen.add ( key );
            
            isUnique = true;
            
            }
        
          return isUnique;
          
          } );
          
      return result;
      
      },
      
    dHours =
    
      ( d.getHours ( ) + 1 )
      
        .toString ( )
        
        .padStart ( 2, '0' ),
        
    dMinutes =
    
      ( d.getMinutes ( ) + 1 )
      
        .toString ( )
        
        .padStart ( 2, '0' ),
        
    dMonth = d.getMonth ( ) + 1,
    
    dSeconds =
    
      ( d.getSeconds ( ) + 1 )
      
        .toString ( )
        
        .padStart ( 2, '0' ),
        
    dYear = d.getFullYear ( ),
    
    inRange = ( x, min, max ) => {
    
      const isInRange =
      
        ( x - min )
        
        *
        
        ( x - max )
        
        <=
        
        0;
        
      return isInRange;
      
      },
      
    keys = new Set ( ),
    
    longOffsetFormatter =
    
      new Intl.DateTimeFormat (
      
        'en-US',
        
        {
        
          timeZone :
          
            Static
            
              .SQUARESPACE_CONTEXT
              
              .website
              
              .timeZone,
              
          timeZoneName : 'longOffset'
          
          }
          
        ),
        
    options = codeKey
    
      .split ( /-(.*)/ )
      
      .filter ( Boolean )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    pageSectionFirstSelector =
    
      '#page [ data-test = '

      +
      
      '"page-section" ]:first-child',
      
    re = new RegExp (
    
      '((?:\\d|Y){4}|\\+\\d+)-'
      
      +
      
      '((?:\\d|M){2}|\\+\\d+)-'
      
      +
      
      '((?:\\d|D){1,2}|\\+\\d+)'
      
      +
      
      '(?: ((?:\\d|h){2}):'
      
      +
      
      '((?:\\d|m){2}):'
      
      +
      
      '((?:\\d|s){2}))'
      
      ),
      
    rows = [ ],
    
    customElementCallback =
    
      ( element ) => {
      
        const
        
          dateStart = element
          
            .getAttribute (
            
              'data-date-start'
              
              ),
              
          dateStop = element
          
            .getAttribute (
            
              'data-date-stop'
              
              ),
              
          sectionId = element
          
            .closest (
            
              '[ data-test = '
              
              +
              
              '"page-section" ]'
              
              )
            
            .getAttribute (
            
              'data-section-id'
              
              );
              
        options
        
          .sectionidDateMap
          
          .push ( [
          
            sectionId,
            
            dateStart,
            
            dateStop
            
            ] );
            
        try {
        
          element
          
            .closest ( '.fe-block' )
            
            .remove ( );
            
          } catch ( error ) {
          
            element
            
              .closest (
              
                '.sqs-block-code'
                
                )
                
              .remove ( );
              
            }
            
        },
        
    domContentLoadedCallback = ( ) => {
    
      const isEditing =
      
        document
        
          .body
          
          .classList
          
          .contains (
          
            'sqs-edit-mode-active'
            
            );
            
       // bail if not editing
       
      if ( isEditing ) return;
      
      const paddingTop =
      
        document
        
          .body
          
          .querySelector (
          
            pageSectionFirstSelector
            
            )
            
          .style
          
          .paddingTop;
          
      document
      
        .querySelectorAll (
        
          customElementSelector
          
          )
          
        .forEach (
        
          customElementCallback
          
          );
          
      const entries =
      
        dedupeArrayOfArrays (
        
          options
          
            .sectionidDateMap
            
            .filter (
            
              a => a [ 0 ] !== '['
              
              )
              
          );
          
      for (
      
        const [
        
          sectionId,
          
          dateStart,
          
          dateStop
          
          ]
          
          of
          
          entries
          
        ) {
        
          let
          
            d1,
            
            d2,
            
            gmtOffset,
            
            isDate,
            
            longOffsetString,
            
            m1,
            
            year,
            
            ymdFormatted;
            
          // d1
          
          {
          
            m1 = dateStart.match ( re );
            
            // bail if no match
            
            if ( ! m1 ) continue;
            
            const hasPlus =
            
              m1
              
                .slice ( 1, 4 )
                
                .some (
                
                  e =>
                  
                    e.includes ( '+' )
                    
                  );
                  
            // continue if has plus
            
            if ( hasPlus ) continue;
            
            let dayOfWeek = 0;
            
            // day of week
            
            if ( m1 [ 3 ].length === 1 ) {
            
              dayOfWeek =
              
                Number ( m1 [ 3 ] );
                
              m1 [ 3 ] = dDay;
              
              }
              
            // ymd
            
            {
            
              if ( m1 [ 1 ] === 'YYYY' )
              
                m1 [ 1 ] = dYear;
                
              if ( m1 [ 2 ] === 'MM' )
              
                m1 [ 2 ] = dMonth;
                
              if ( m1 [ 3 ] === 'DD' )
              
                m1 [ 3 ] = dDay;
                
              }
              
            if ( dayOfWeek ) {
            
              const isDayOfWeek =
              
                dayOfWeek === dDayOfWeek;
                
              if ( ! isDayOfWeek ) continue;
              
              }
              
            // to string
            
            for ( let i = 1; i < 4; i++ )
            
              m1 [ i ] =
              
                m1 [ i ].toString ( );
                
            // pad
            
            {
            
              m1 [ 2 ] = m1 [ 2 ]
              
                .padStart ( 2, '0' );
                
              m1 [ 3 ] = m1 [ 3 ]
              
                .padStart ( 2, '0' );
                
              }
              
            ymdFormatted =
            
              m1
              
                .slice ( 1, 4 )
                
                .join ( '-' );
                
            longOffsetString =
            
              longOffsetFormatter
              
                .format (
                
                  new Date (
                  
                    `${
                    
                      ymdFormatted
                      
                      }T00:00:00.000`
                      
                    )
                    
                  );
                  
            gmtOffset = longOffsetString
            
              .split ( 'GMT' )
              
              [ 1 ];
              
            d1 = new Date (
            
              `${
              
                ymdFormatted
                
                }T${
                
                  m1
                  
                    .slice ( 4 )
                    
                    .join ( ':' )
                    
                  }${
                  
                    gmtOffset
                    
                    }`
                    
              );
              
            isDate = d1 instanceof Date;
            
            // bail if not date
            
            if ( ! isDate ) continue;
            
            }
            
          // d2
          
          {
          
            let m2 =
            
              dateStop?.match ( re );
              
            if ( m2 ) {
            
              // ymd
              
              {
              
                if (
                
                  m2 [ 1 ] === 'YYYY'
                  
                  )
                  
                  m2 [ 1 ] = dYear;
                  
                if (
                
                  m2 [ 2 ] === 'MM'
                  
                  )
                  
                  m2 [ 2 ] = dMonth;
                  
                if (
                
                  m2 [ 3 ] === 'DD'
                  
                  )
                  
                  m2 [ 3 ] = dDay;
                  
                }
                
              // +
              
              {
              
                if (
                
                  m2 [ 1 ][ 0 ] === '+'
                  
                  )
                  
                  m2 [ 1 ] =
                  
                    Number ( m1 [ 1 ] )
                    
                    +
                    
                    Number (
                    
                      m2 [ 1 ].slice ( 1 )
                      
                      );
                      
                  if (
                  
                    m2 [ 2 ][ 0 ] === '+'
                    
                    )
                    
                    m2 [ 2 ] =
                    
                      Number ( m1 [ 2 ] )
                      
                      +
                      
                      Number (
                      
                        m2 [ 2 ].slice ( 1 )
                        
                        );
                        
                if (
                
                  m2 [ 3 ][ 0 ] === '+'
                  
                  )
                  
                  m2 [ 3 ] =
                  
                    Number ( m1 [ 3 ] )
                    
                    +
                    
                    Number (
                    
                      m2 [ 3 ].slice ( 1 )
                      
                      );
                      
                }
                
              // to string
              
              for (
              
                let i = 1; i < 4; i++
                
                )
                
                m2 [ i ] =
                
                  m2 [ i ].toString ( );
                  
              // pad
              
              {
              
                m2 [ 2 ] = m2 [ 2 ]
                
                  .padStart ( 2, '0' );
                  
                m2 [ 3 ] = m2 [ 3 ]
                
                  .padStart ( 2, '0' );
                  
                }
                
              }
              
            ymdFormatted =
            
              m2.slice ( 1, 4 )
              
                .join ( '-' ),
                
            longOffsetString =
            
              longOffsetFormatter
              
                .format (
                
                  new Date (
                  
                    `${
                    
                      ymdFormatted
                      
                      }T00:00:00.000`
                      
                    )
                    
                  );
                  
            gmtOffset = longOffsetString
            
              .split ( 'GMT' )
              
              [ 1 ];
              
            d2 = new Date (
            
              m2
              
              ?
              
              `${
              
                ymdFormatted
                
                }T${
                
                  !
                  
                  m2
                  
                    .slice ( 4 )
                    
                    .every (
                    
                      v => v === undefined
                      
                      )
                      
                  ?
                  
                  m2
                  
                    .slice ( 4 )
                    
                    .join ( ':' )
                  
                  :
                  
                  '00:00:00'
                  
                  }${
                  
                    gmtOffset
                    
                    }`
                    
              :
              
              '275760-09-12'
              
              );
              
            isDate = d2 instanceof Date;
            
            // bail if not date
            
            if ( ! isDate ) continue;
            
            }
            
          const isDateInRange =
          
            inRange ( d, d1, d2 );
            
          // bail if date not in range
          
          if ( ! isDateInRange )
          
            continue;
            
          document
          
            .querySelector (
            
              `[ data-section-id = `
              
              +
              
              `"${ sectionId }" ]`
              
              )
              
            .remove ( );
            
        }
        
      document
      
        .body
        
        .querySelector (
        
          pageSectionFirstSelector
          
          )
          
        .style
        
        .paddingTop
        
        =
        
        paddingTop;
        
      };
      
  addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
