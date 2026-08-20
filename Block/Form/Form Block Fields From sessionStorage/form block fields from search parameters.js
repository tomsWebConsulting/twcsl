( ( ) => {

  /*!
  
    form block fields from sessionStorage
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Versions       : 7.1, 7.0
    
    Dependencies      : form block wrapper observe changes
                        
                        < https://tinyurl.com/45enb6h8 >
    
    Note              : this effect does not work with checkbox, hidden, radio,
                        or survey fields
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Form Block Fields From sessionStorage',
    
    version = '0.1.0',
    
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = window.twc || { };
  
  // initialize twc fbfeaw sub-module
  
  twc.fbfeaw = twc.fbfeaw || { };
  
  const
  
    codeKey = 'twc-fbffs',
    
    selectorKey = '.form-wrapper '
    
      +
      
      '.field-list .description';
    
  twc.fbfeaw.callbacks = ( ( self ) => {
  
    // debugger;
    
    const
    
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
          
      selector =
      
        'input, select, textarea',
        
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
        
          const fieldElement = element
          
            .closest ( '.field' );
            
          fieldElement
          
            .classList
            
            .add ( `${ codeKey }` );
            
          let value = element
          
            .previousElementSibling
            
            .textContent;
            
          value = sessionStorage
          
            .getItem (
            
              `twc-qskts-${ value }`
              
              );
              
          // continue
          
          if ( ! value ) return;
          
          inputChangeTrigger (
          
            fieldElement
            
              .querySelector (
              
                selector
                
                ),
                
            value
            
            );
            
          },
          
      callback = ( element ) => {
      
        const hasClass = element
        
          .classList
          
          .contains (
          
            'react-form-contents'
            
            );
            
        // bail if not react form
        
        if ( ! hasClass ) return;
        
        const
        
          xPathExpression = `
          
            .//p[
            
              contains (
              
                concat (
                
                  ' ',
                  
                  normalize-space ( @class ),
                  
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
            
          xPathResults = xPathEvaluate (
          
            xPathExpression,
            
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
    
      [ 'twcFbffs' ]
      
      =
      
      callback;
      
    return self;
    
    } )
    
    ( twc.fbfeaw.callbacks || { } );
    
  } ) ( );
