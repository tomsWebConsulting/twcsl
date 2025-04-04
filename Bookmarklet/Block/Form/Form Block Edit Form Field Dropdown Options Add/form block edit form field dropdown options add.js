( async ( ) => {

  /*
  
    form block edit form field dropdown options add
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.2
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Form Block Edit Form Field Dropdown Options Add',
    
    version = '0.1.2',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    delay = ( duration ) => {
    
      const
      
        callback = ( resolve ) => {
        
          setTimeout ( ( ) => resolve ( ), duration );
          
          },
          
        p = new Promise ( callback );
        
      return p;
      
      },
      
    inputChangeTrigger = ( node, value = '' ) => {
    
      /*
      
        based on code by Dan G < https://tinyurl.com/4hes79u8 > and
        others
        
        */
        
      const inputTypes = [
      
        window.HTMLInputElement,
        
        window.HTMLSelectElement,
        
        window.HTMLTextAreaElement,
        
        ];
        
      /*
      
        only process the change on elements we know have a value setter in their
        constructor
        
        */
        
      const isInputType = inputTypes
      
        .indexOf (
        
          node.__proto__.constructor
          
          )
          
        >
        
        -1;
        
      if ( ! isInputType ) return; // bail if not input type
      
      const
      
        event = new Event ( 'input', { bubbles : true } ),
        
        setValue = Object
        
          .getOwnPropertyDescriptor ( node.__proto__, 'value' )
          
          .set;
          
      setValue.call ( node, value );
      
      node.dispatchEvent ( event );
      
      },
      
    processOptions = async ( options, optionsElement, addElement ) => {
    
      const inputElements = optionsElement
      
        .querySelectorAll ( 'input' );
        
      for ( let i = 0; i < options.length; i++ ) {
      
        let element = inputElements [ i ];
        
        if ( element === undefined ) {
        
          addElement.click ( );
          
          await delay ( 125 );
          
          element = [
          
            ...
            
            optionsElement
            
              .querySelectorAll ( 'input' )
              
            ]
            
            .slice ( -1 )
            
            [ 0 ];
            
          }
          
        inputChangeTrigger ( element, options [ i ] );
        
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
      
      };
      
  try {
  
    const
    
      transitionContainerSelector =
      
        'div[ data-test="block-editor-container" ] ' +
        
          'div[ class^="Transition-container-" ]',
          
      transitionContainerElement = document
      
        .querySelector ( transitionContainerSelector );
        
    // bail if no block editor element
    
    if ( transitionContainerElement === null )
    
      throw new Error ( `there appears to be no form editor dialog.` );
      
    let
    
      xPathExpression = `
      
        .//div [
        
          @data-test-id='header-title'
          
          ]
          
          [
          
            contains (
            
              .,
              
              'Dropdown'
              
              )
              
            ]
            
        `,
        
      xPathResults = xPathEvaluate (
      
        xPathExpression,
        
        transitionContainerElement
        
        );
        
    // bail if no dropdown element
    
    if ( xPathResults.snapshotLength === 0 )
    
      throw new Error ( `there appears to be no Dropdown dialog.` );
      
    xPathExpression = './/label [ contains ( ., "Options" ) ]';
    
    xPathResults = xPathEvaluate (
    
      xPathExpression,
      
      transitionContainerElement
      
      );
      
    // bail if no options element
    
    if ( xPathResults.snapshotLength === 0 )
    
      throw new Error ( `there appears to be no Options.` );
      
    const optionsElement = xPathResults
    
      .snapshotItem ( 0 )
      
      .parentElement;
      
    xPathExpression = './/span [ contains ( text ( ), "Add option" ) ]',
    
    xPathResults = xPathEvaluate (
    
      xPathExpression,
      
      optionsElement
      
      );
      
    // bail if no add element
    
    if ( xPathResults.snapshotLength === 0 )
    
      throw new Error ( `there appears to be no ADD OPTION button.` );
      
    const
    
      addElement = xPathResults
      
        .snapshotItem ( 0 )
        
        .closest ( 'button' ),
        
      options = optionsElement
      
        .querySelector ( 'input' )
        
        .value
        
        .replaceAll ( '\\,', '[ comma ]' )
        
        .split ( /,\s*/ )
        
        .map ( s => s.replaceAll ( '[ comma ]', ',' ) );
        
      await processOptions (
      
        options,
        
        optionsElement,
        
        addElement
        
        );
        
    alert ( `TWC ${ title } is done.` );
    
    } catch ( error ) {
    
      const s = `TWC ${ title }, ${ error }`;
      
      alert ( s );
      
      }
      
  } ) ( );
