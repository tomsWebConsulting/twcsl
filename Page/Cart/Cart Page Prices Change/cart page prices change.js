( ( ) => {

  /*!
  
    cart page prices change
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.4.0
    
    SS Versions       : 7.1, 7.0
    
    Dependencies      : cart page observe changes
                        
                        < https://tinyurl.com/323xeep5 >
    
    Copyright         : 2021-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.4.0',
    
    s = `
    
      Cart Page Prices Change v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc =
  
    ( ( self ) => self )
    
    ( window.twc || { } );
    
  // initialize twc cppc sub-module
  
  twc.cppc =
  
    ( ( self ) => self )
    
    ( twc.cppc || { } );
    
  // initialize twc cpoc sub-module
  
  twc.cpoc =
  
    ( ( self ) => self )
    
    ( twc.cpoc || { } );
    
  // initialize twc cppc callbacks sub-module
  
  twc.cppc.callbacks =
  
    ( ( self ) => self )
    
    ( twc.cppc.callbacks || { } );
    
  // initialize twc cpoc callbacks sub-module
  
  twc.cpoc.callbacks =
  
    ( ( self ) => self )
    
    ( twc.cpoc.callbacks || { } );
    
  // initialize twc cpoc callbacks added sub-module
  
  twc.cpoc.callbacks.added =
  
    ( ( self ) => {
    
      const callback = (
      
        node,
        
        stopObserver,
        
        startObserver
        
        ) => {
        
          const
          
            langReMap = { },
              
            families = {
            
              commaThousandsDotDecimals : [
              
                'en-AU',
                
                'en-CA',
                
                'en-GB',
                
                'en-IE',
                
                'en-IN',
                
                'en-NZ',
                
                'en-US',
                
                'en-ZA'
                
                ],
            
              dotThousandsCommaDecimals : [
              
                'da-DK',
                
                'da-GL',
                
                'de-AT',
                
                'de-DE',
                
                'de-LU',
                
                'es-AR',
                
                'es-BO',
                
                'es-CL',
                
                'es-CO',
                
                'es-CR',
                
                'es-DO',
                
                'es-EC',
                
                'es-ES',
                
                'es-GT',
                
                'es-HN',
                
                'es-MX',
                
                'es-NI',
                
                'es-PA',
                
                'es-PE',
                
                'es-PR',
                
                'es-PY',
                
                'es-SV',
                
                'es-UY',
                
                'es-VE',
                
                'fi-FI',
                
                'fr-BE',
                
                'fr-FR',
                
                'fr-LU',
                
                'it-IT',
                
                'nb-NO',
                
                'nl-BE',
                
                'nl-NL',
                
                'pt-BR',
                
                'pt-PT',
                
                'sv-SE',
                
                'tr-TR'
                
                ],
            
              spaceOrApostropheThousands : [
              
                'de-CH',
                
                'fr-CH',
                
                'it-CH'
                
                ]
                
              },
              
            res = {
            
              commaThousandsDotDecimals :
              
                /\d{1,3}(?:,\d{3})+\.\d+|\d+\.\d+/,
                
              dotThousandsCommaDecimals :
              
                /\d{1,3}(?:\.\d{3})+,\d+|\d+,\d+/,
                
              spaceOrApostropheThousands :
              
                /\d{1,3}(?:[ '\u2019]\d{3})+(?:[.,]\d+)?/,
                
              noDecimalCurrencies :
              
                /\d{1,3}(?:[.,]\d{3})+|\d+/
                
              };
              
          for ( const family in families ) {
          
            const re = res [ family ];
            
            for ( const code of families [ family ] )
            
              langReMap [ code ] = re;
              
            }
            
          const
          
            re = langReMap [
            
              Static
              
                .SQUARESPACE_CONTEXT
                
                .website
                
                .language
                
              ],
              
            hasPrice = re.test (
              
              node.textContent
              
              );
              
          // bail if no price
          
          if ( ! hasPrice ) return;
          
          const
          
            changeText = ( node ) => {
            
              const walker = document
              
                .createTreeWalker (
                
                  node,
                  
                  NodeFilter.SHOW_TEXT
                  
                  );
                  
              while ( walker.nextNode ( ) ) {
              
                const
                
                  keyCallback = ( key ) => {
                  
                    const m =
                    
                      key.match ( /\/(.+)\/(.*)/ );
                      
                    let
                    
                      r = options
                      
                        .searchReplaceText [ key ],
                        
                      s = key;
                      
                    r = options.callbacks [ r ] ?? r;
                    
                    const isFunction =
                    
                      typeof r === 'function';
                      
                    if ( m )
                    
                      s = new RegExp (
                      
                        m [ 1 ],
                        
                        m [ 2 ]
                        
                        );
                        
                    if ( isFunction ) {
                    
                      r = r ( node );
                      
                      const isFalse =
                      
                        typeof r === 'boolean'
                        
                        &&
                        
                        r === false;
                        
                      // bail if r is false
                      
                      if ( isFalse ) return false;
                      
                      }
                      
                    t = t.replace ( s, r );
                    
                    return true;
                    
                    },
                    
                  node = walker.currentNode;
                  
                let t = node.textContent;
                
                const hasPrice = re.test ( t );
                
                // continue if no price
                
                if ( ! hasPrice ) continue;
                
                for ( const key of keys ) {
                
                  const isContinue =
                  
                    keyCallback ( key );
                    
                  if ( ! isContinue ) return;
                  
                  }
                  
                node.textContent = t;
                
                }
                
              },
              
            codeKey = 'twc-cppc',
            
            options = codeKey
            
              .split ( '-' )
              
              .reduce (
              
                ( obj, key ) =>
                
                  obj?.[ key ], window
                  
                ),
                
            keys = Object.keys (
            
              options.searchReplaceText
              
              );
              
        stopObserver ( );
        
        changeText ( node );
        
        startObserver ( );
        
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cpoc.callbacks.added || [ ] );
      
  } ) ( );
