( ( ) => {

  /*!
  
    button templates
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.3.0
    
    SS Versions       : 7.1, 7.0
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.3.0',
    
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
        
    processBadIds = ( ) => {
    
      const isEditMode = document
      
        .body
        
        .classList
        
        .contains ( 'sqs-edit-mode' );
        
      // bail if not edit mode
      
      if ( ! isEditMode ) return;
      
      document
      
        .body
        
        .querySelectorAll (
        
          `${ tagSelector }`
              
          )
          
        .forEach (
        
          ( e ) => {
          
            const
            
              element = document
              
                .createElement ( 'p' ),
                
              id = e.getAttribute (
              
                'data-id'
                
                );
                
            element.textContent =
            
              'TWC Button Templates : '
              
              +
              
              `id "${ id }" not found.`;
              
            e.replaceWith (
            
              element
              
              );
              
            }
            
          );
          
      },
      
    re = new RegExp (
    
      `\\s+-\\s+${ codeKey }\\s+(.+)$`
      
      ),
      
    ssVersion = Static
    
      .SQUARESPACE_CONTEXT
      
      .templateVersion,
      
    tagSelector = `x-${ codeKey }`,
    
    template = document
    
      .createElement ( 'template' ),
      
    codeBlockSelector =
    
      `[
      
        data-sqsp-block = "code"
        
        ]:has(
        
          ${
          
            tagSelector
            
            }[
            
              data-id *= "[ id ]"
              
              ]
              
            )`,
              
    is70 = ssVersion === '7',
    
    is71 = ssVersion === '7.1',
    
    url =
    
      `/${ codeKey }`
      
      +
      
      ( is70 ? '?format=json' : '' ),
      
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
      
    getData = async ( ) => {
    
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
          
        let data;
        
        switch ( true ) {
        
          case is71 :
          
            data =
            
              await response.text ( );
              
            break;
            
          case is70 :
          
            data =
            
              await response.json ( );
              
            break;
            
          }
          
        return data;
        
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
        
    domContentLoadedCallback =
    
      async ( ) => {
      
        const
        
          elements = document
          
            .querySelectorAll (
            
              `x-${ codeKey }`
              
              );
              
        // bail if no elements
        
        if ( ! elements.length ) return;
        
        let html = await getData ( );
        
        // bail if no content
        
        if ( ! html ) return;
        
        switch ( true ) {
        
          case is71 :
          
            html = new DOMParser ( )
            
              .parseFromString (
              
                html,
                
                'text/html'
                
                )
                
              .querySelector (
              
                '#page'
                
                )
                
              .innerHTML;
              
            break;
            
          case is70 :
          
            html = html.mainContent;
            
            break;
            
          }
          
        template.innerHTML = html;
        
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
          
        processBadIds ( );
        
        };
        
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
