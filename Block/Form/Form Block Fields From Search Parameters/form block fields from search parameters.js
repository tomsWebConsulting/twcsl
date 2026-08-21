( ( ) => {

  /*!
  
    form block fields from search parameters
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.3.2
    
    SS Versions       : 7.1, 7.0
    
    Dependencies      : form block form element add watch
                        
                        < https://tinyurl.com/mr35uwnr >
    
    Note              : this effect does not work with checkbox, hidden,
                        radio, or survey fields
    
    Copyright         : 2022-2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Form Block Fields From Search Parameters',
    
    version = '0.3.2',
    
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = window.twc || { };
  
  // initialize twc fbfeaw sub-module
  
  twc.fbfeaw = twc.fbfeaw || { };
  
  // initialize twc fbfeaw callbacks sub-module
  
  twc.fbfeaw.callbacks = ( ( self ) => {
  
    // debugger;
    
    const
    
      codeKey = 'twc-fbffsp',
      
      codeKeyXPathExpression = `
      
        .//p[
        
          contains (
          
            concat (
            
              ' ',
              
              normalize-space (
              
                @class
                
                ),
                
              ' '
              
              ),
              
            ' description '
            
            )
            
            and
            
            contains (
            
              .,
              
              '${ codeKey }'
              
              )
              
            ]
            
        `,
        
      inputChangeTrigger =
      
        ( node, value = '' ) => {
        
          /*
          
            based on code by Dan G < https://tinyurl.com/4hes79u8 > and
            others
            
            */
            
          const
          
            inputTypes = [
            
              HTMLInputElement,
              
              HTMLSelectElement,
              
              HTMLTextAreaElement
              
              ],
              
            isInputType = inputTypes
            
              .some (
              
                type => node instanceof type
                
                );
                
          /*
          
            only process the change on elements we know have a value
            setter in their constructor
            
            */
            
          // bail if not input type
          
          if ( ! isInputType ) return;
          
          const
          
            isSelect =
            
              node
              
              instanceof
              
              inputTypes
              
              [ 1 ],
              
            eventType =
            
              isSelect
              
              ?
              
              'change'
              
              :
              
              'input',
              
            event = new Event (
            
              eventType,
              
              { bubbles : true }
              
              ),
              
            setValue = Object
            
              .getOwnPropertyDescriptor (
              
                node.__proto__,
                
                'value'
                
                )
                
              ?.set;
              
          if ( isSelect )
          
            node.value = value;
            
            else {
            
              // bail if no setValue
              
              if ( ! setValue ) return;
              
              setValue
              
                .call ( node, value );
                
              }
              
          node.dispatchEvent ( event );
          
          },
          
      xPathEvaluate = (
      
        xPathExpression, contextNode
        
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
          
      fieldElementCallback =
      
        ( element ) => {
        
          let text = element.textContent;
          
          const
          
            re = new RegExp (
            
              `${ codeKey } : (.+)[\n]?`,
              
              's'
              
              ),
              
            m = text.match ( re );
            
          if ( ! m ) return; // continue
          
          const
          
            formItemElement = element
            
              .closest ( '.form-item' ),
                
            searchParameterKeyLabelMap =
            
              m
              
              [ 1 ]
              
              .split ( ', ' )
              
              .map (
              
                s => s.split ( '=' )
                
                ),
                
            skipFields = [
            
              'checkbox',
              
              'radio',
              
              'survey',
              
              ];
              
          text = text
          
            .replace ( m [ 0 ], '' )
            
            .trim ( );
            
          // set description or remove
          
          if ( text )
          
            element.textContent = text;
            
            else
            
              element.remove ( );
              
          const isSkipField = [
          
            ...
            
            formItemElement
            
              .classList
              
            ]
          
            .some (
            
              c =>
              
                skipFields.indexOf ( c )
                
                >=
                
                0
                
              );
              
          // continue
          
          if ( isSkipField ) return;
          
          const searchParams =
          
            new URLSearchParams (
            
              location.search
              
              );
              
          for (
          
            const [ key, caption ]
            
            of
            
            searchParameterKeyLabelMap
            
            ) {
            
              const hasKey =
              
                searchParams.has ( key );
                
              // continue if no key
              
              if ( ! hasKey ) continue;
              
              const selector =
              
                'input, select, textarea';
                
              let
              
                input,
                
                value = searchParams
                
                  .get ( key );
                  
              if ( ! caption )
              
                input = formItemElement;
                
                else {
                
                  const xPathResults =
                  
                    xPathEvaluate (
                    
                      `
                      
                        .//div [
                        
                          contains (
                          
                            concat (
                            
                              ' ',
                              
                              normalize-space (
                              
                                @class
                                
                                ),
                                
                              ' '
                              
                              ),
                              
                            ' caption-text '
                            
                            )
                            
                            and
                            
                            contains (
                            
                              .,
                              
                              
                              '${ caption }'
                              
                              )
                              
                            ]
                            
                        `,
                        
                      formItemElement
                      
                      );
                      
                  // continue
                  
                  if (
                  
                    !
                    
                    xPathResults
                    
                      .snapshotLength
                      
                    )
                    
                    return;
                    
                  input = xPathResults
                  
                    .snapshotItem ( 0 )
                    
                    .closest ( '.field' )
                    
                  }
                  
              input = input
              
                .querySelector (
                
                  selector
                  
                  );
                
              value =
              
                decodeURIComponent (
                
                  value
                  
                  );
                  
              inputChangeTrigger (
              
                input,
                
                value
                
                );
                
              }
              
          },
          
      callback = ( element ) => {
      
        const hasClass = element
        
          .classList
          
          .contains (
          
            'react-form-contents'
            
            );
            
        // bail if not react form
        
        if ( ! hasClass ) return;
        
        const xPathResults =
        
          xPathEvaluate (
          
            codeKeyXPathExpression,
            
            element
            
            );
            
        for (
        
          let i = 0;
          
          i < xPathResults.snapshotLength;
          
          i++
          
          ) {
          
            const element = xPathResults
            
              .snapshotItem ( i );
              
            fieldElementCallback (
            
              element
              
              );
              
          }
          
        };
        
    self
    
      [ 'twcFbffsp' ]
      
      =
      
      callback;
      
    return self;
    
    } )
    
    ( twc.fbfeaw.callbacks || { } );
    
  } ) ( );
