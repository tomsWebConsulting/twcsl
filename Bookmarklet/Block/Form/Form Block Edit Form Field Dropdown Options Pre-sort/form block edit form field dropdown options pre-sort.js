( ( ) => {

  /*
  
    form block edit form field dropdown options pre-sort
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Form Block Edit Form Field Dropdown Options Pre-sort',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    generateRandomString = ( ) => {
    
      const
      
        characters = 'abcdefghijklmnopqrstuvwxyz',
        
        length = 4;
      
      let result = '';
      
      for ( let i = 0; i < length; i++ ) {
      
        result += characters
        
          .charAt (
          
            Math
            
              .floor (
              
                Math
                
                  .random ( )
                  
                *
                
                characters
                
                  .length
                  
                )
                
            );
            
        }
        
      return result;
      
      };
    
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
      
    const
    
      callback = ( element ) => {
      
        inputChangeTrigger (
        
          element,
          
          generateRandomString ( )
          
          );
          
        },
        
      optionsElement = xPathResults
      
        .snapshotItem ( 0 )
        
        .parentElement,
        
      inputElements = optionsElement
      
        .querySelectorAll ( 'input' ),
        
      options = [
      
        ...
        
        inputElements
        
        ]
        
        .map ( e => e.value )
        
        .sort ( )
        
        .map ( s => s.replaceAll ( ',', '\\,' ) );
        
    inputElements
    
      .forEach ( callback );
      
    inputChangeTrigger (
    
      inputElements [ 0 ],
      
      options
      
      );
      
    alert ( `TWC ${ title } is done.` );
    
    } catch ( error ) {
    
      const s = `TWC ${ title }, ${ error }`;
      
      alert ( s );
      
    }
    
  } ) ( );
