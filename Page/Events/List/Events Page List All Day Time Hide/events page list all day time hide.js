( ( ) => {

  /*!
  
    events page list all day time hide
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Versions     : 7.1, 7.0
    
    v7.1
    Fluid
    Engine
    Compatible      : Not Applicable
    
    Note            : the code is comprised of a style and script tag. both are
                      needed for the full effect to work
    
    Copyright       : 2025 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
    
    s = `
    
      Events Page List All Day Time Hide v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const callback = ( ) => {
  
    const isEventsPage
    
      =
      
      !!
      
      document
      
        .querySelectorAll (
        
          [
              
            'body[ class*="collection-type-events-" ]',
            
            'body[ class~="collection-type-events" ]'
            
            ]
            
            .join ( ', ' )
            
          )
          
          .length;
          
    if ( ! isEventsPage ) return; // bail if not events page
    
    const isList
    
      =
      
      !
      
      Static
      
        .SQUARESPACE_CONTEXT
        
        .item
        
        ?.id;
        
    if ( ! isList ) return; // bail if not list page
    
    const
    
      callback = ( ) => {
      
        const xPathResults = xPathEvaluate (
        
          xPathExpression,
          
          document
          
            .body
            
            .querySelector ( '.events' )
            
          );
          
        for ( let i = 0; i < xPathResults.snapshotLength; i++ ) {
        
          xPathResults
          
            .snapshotItem ( i )
            
            .closest ( '.eventlist-meta-time' )
            
            .classList
            
            .add ( codeKey );
            
          }
          
        },
        
      codeKey = 'twc-epladth',
      
      ssVersion = Static
      
        .SQUARESPACE_CONTEXT
        
        .templateVersion,
        
      xPathEvaluate = ( xPathExpression, contextNode ) => {
      
        const xPathResults = document
        
          .evaluate (
          
            xPathExpression,
            
            contextNode,
            
            null,
            
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            
            null
            
            );
            
        return xPathResults;
        
        },
        
      xPathExpression = `
      
        //span[
        
          contains (
          
            @class,
            
            'event-time-localized'
            
            )
            
          and
          
          .//time[
          
            contains (
            
              @class,
              
              'event-time-localized-start'
              
              )
              
            and
            
            normalize-space ( text ( ) ) = '12:00 AM'
            
            ]
            
          and
          
          .//time[
          
            contains (
            
              @class,
              
              'event-time-localized-end'
              
              )
              
            and
            
            normalize-space ( text ( ) ) = '11:59 PM'
            
            ]
            
          ]
          
        `;
        
    switch ( ssVersion ) {
    
      case '7.1' :
      
        callback ( );
        
        break;
        
      case '7' :
      
        Squarespace.onInitialize ( Y, callback );
        
        break;
        
      }
      
    };
    
  document
  
    .addEventListener ( 'DOMContentLoaded', callback );
    
  } ) ( );
