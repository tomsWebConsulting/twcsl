( ( ) => {

  /*!
  
    button templates
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Version      : 7.0
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.2.0',
    
    s = `
    
      Button Templates v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    codeKey = 'twc-bt',
    
    buttonBlockSelector =
    
      '[ data-sqsp-block = '
      
      +
      
      '"button" ]',
      
    normalizeWhitespace = s =>
    
      s
      
        .trim ( )
        
        .replace ( /\s+/gm, ' ' ),
        
    processMatch =
    
      ( element ) => {
      
        const
        
          text = element
          
            .textContent
            
            .trim ( ),
            
          m = text.match ( re );
          
        // bail if no m
        
        if ( ! m ) return;
          
        const id = m [ 1 ];
        
        element.textContent =
        
          text.replace (
          
            m [ 0 ],
            
            ''
            
            );
            
        document
        
          .body
          
          .querySelectorAll (
          
            codeBlockSelector
            
              .replace (
              
                '[ id ]',
                
                id
                
                )
                
            )
            
          .forEach (
          
            e => e
            
              .replaceWith (
              
                document
                
                  .importNode (
                  
                    element
                    
                      .closest (
                      
                        buttonBlockSelector
                        
                        ),
                        
                    true
                    
                    )
                    
                )
                
            )
            
        },
        
    re = new RegExp (
    
      `\\s+-\\s+${ codeKey }\\s+(.+)$`
      
      ),
      
    template = document
    
      .createElement ( 'template' ),
      
    url = `/${ codeKey }?format=json`,
    
    getMainContent = async ( ) => {
    
      try {
      
        const response =
        
          await fetch ( url );
          
        if ( ! response.ok ) {
        
          const s =
          
            normalizeWhitespace (
            
              `
                
                ${ codeKey } network
                
                response was not ok
                
                ${
                
                  response.statusText
                  
                  }
                  
                `
                
              );
              
          throw new Error ( s );
          
          }
          
        const json =
        
          await response.json ( );
          
        return json;
        
        } catch ( error ) {
        
          const s =
          
            normalizeWhitespace (
            
              `
              
                ${ codeKey } there has
                
                been a problem with
                
                your fetch get
                
                operation, ${ error }.
                
                `
                
              );
              
          console.error ( s );
          
          return null;
          
          }
          
      },
      
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
    
      .//div[
      
        @data-sqsp-block = 'button'
        
        ]//*[
        
          contains (
          
            concat (
            
              ' ',
              
              normalize-space ( @class ),
              
              ' '
              
              ),
              
            ' sqs-block-button-element '
            
            )
            
          and
          
          contains (
          
            normalize-space ( . ),
            
            ' - ${ codeKey } '
            
            )
            
        ]
        
      `,
      
    codeBlockSelector =
    
      `[
      
        data-sqsp-block = "code"
        
        ]:has(
        
          x-${
          
            codeKey
            
            }[
            
              data-id *= "[ id ]"
              
              ]
              
            )`,
              
    domContentLoadedCallback =
    
      async ( ) => {
      
        const
        
          elements = document
          
            .querySelectorAll (
            
              `x-${ codeKey }`
              
              );
              
        // bail if no elements
        
        if ( ! elements.length ) return;
        
        const mainContent =
        
          await getMainContent ( );
          
        // bail if no main content
        
        if ( ! mainContent ) return;

        template.innerHTML =
        
          mainContent.mainContent;
          
        const xPathResults =
        
          xPathEvaluate (
          
            xPathExpression,
            
            document

              .importNode (
              
                template
                
                  .content
                  
                  .firstElementChild,
                  
                true
                
                )
                
            );
            
        for (
        
          let i = 0;
          
          i < xPathResults
          
            .snapshotLength;
            
          i++
          
          ) {
          
            processMatch (
            
              xPathResults
              
                .snapshotItem ( i )
                
              );
              
            }
            
        };
        
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
