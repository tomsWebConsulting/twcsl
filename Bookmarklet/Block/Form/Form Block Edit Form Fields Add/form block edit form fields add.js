( ( ) => {

  /*
  
    form block edit form fields add
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    SS Version  : 7.1
    
    Fluid
    Engine
    Compatible  : Not Applicable
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */

  const
  
    title = 'Form Block Edit Form Fields Add',
    
    version = '0.1.0',
    
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    transitionContainerSelector =
    
      'div[ data-test="block-editor-container" ] ' +
      
        'div[ class^="Transition-container-" ]',
        
    transitionContainerElement = document
    
      .querySelector ( transitionContainerSelector );
      
  // bail if no block editor element
  
  if ( transitionContainerElement === null ) {
  
    const s = `${ codeKey }, there appears to be no form editor dialog`;
    
    alert ( s );
    
    return;
    
    }
    
  const
  
    addFieldButtonClick = ( ) => {
    
      let
      
        xPathExpression = `
          
          .//div [
          
            @data-test-id='header-title'
            
              and
              
              contains (
              
                .,
                
                'Edit Form Fields'
                
                )
                
              ]
              
            `,
          
        xPathResults =
        
          xPathEvaluate ( xPathExpression, transitionContainerElement );
          
      if ( xPathResults.snapshotLength === 0 )
      
        throw new Error ( `${ codeKey } no Edit Form Fields panel.` );
        
      xPathExpression = `
      
        .//button [
        
          contains (
          
            .,
            
            'Add Field'
            
            )
            
          ]
          
          `;
          
      xPathResults =
      
        xPathEvaluate ( xPathExpression, transitionContainerElement );
        
      if ( xPathResults.snapshotLength === 0 )
      
        throw new Error ( `${ codeKey } no Add Field button.` );
        
      xPathResults
      
        .snapshotItem ( 0 )
        
        .click ( );
        
      },
      
    codeKey = 'twc-fbeffa',
    
    delay = ( duration ) => {
    
      const
      
        callback = ( resolve ) => {
        
          setTimeout ( ( ) => resolve ( ), duration );
          
          },
          
        p = new Promise ( callback );
        
      return p;
      
      },
      
    editFieldLastButtonClick = ( ) => {
    
      const
      
        xPathExpression = `
          
          .//div [
          
            @data-test-id='header-title'
            
              and
              
              contains (
              
                .,
                
                'Edit Form Fields'
                
                )
                
              ]
              
            `,
          
        xPathResults =
        
          xPathEvaluate ( xPathExpression, transitionContainerElement );
          
      if ( xPathResults.snapshotLength === 0 )
      
        throw new Error ( `${ codeKey } no Edit Form Fields panel.` );
        
      const selector = 'div[ data-test-id="array-item" ]';
      
      [
      
        ...
        
        transitionContainerElement
        
          .querySelectorAll ( selector )
          
        ]
        
        .slice ( -1 )
        
        [ 0 ]
        
        .querySelector ( 'button' )
        
        .click ( );
        
      },
      
    fieldTypeButtonClick = ( field ) => {
    
      let
      
        xPathExpression = `
          
          .//div [
          
            @data-test-id='header-title'
            
              and
              
              contains (
              
                .,
                
                'Add Field'
                
                )
                
              ]
              
            `,
          
        xPathResults =
        
          xPathEvaluate ( xPathExpression, transitionContainerElement );
          
      if ( xPathResults.snapshotLength === 0 )
      
        throw new Error ( `${ codeKey } no Add Field panel.` );
        
      xPathExpression = `
      
        .//button [
        
          contains (
          
            .,
            
            '${ field.type }'
            
            )
            
          ]
          
          `;
          
      xPathResults =
      
        xPathEvaluate ( xPathExpression, transitionContainerElement );
        
      if ( xPathResults.snapshotLength === 0 ) {
      
        const s = `${ codeKey } no ${ field [ 0 ] } field button.`;
        
        throw new Error ( s );
        
        }
        
      xPathResults
      
        .snapshotItem ( 0 )
        
        .click ( );
        
      },
      
    input = document
    
      .createElement ( 'input' ),
      
    inputCallback = ( event ) => {
    
      const file = event
      
        .target
        
        .files
        
        [ 0 ];
        
      // bail of no file
      
      if ( file === undefined ) {
      
        input.remove ( );
        
        return;
        
        }
        
      const
      
        callback = async ( element ) => {
        
          let fields;
          
          try {
          
            const json = element
                
              .target
              
              .result;
              
            fields = JSON
            
              .parse ( json )
              
                .fields;
                
            } catch ( error ) {
            
              const s =
              
                `${ codeKey }, error parsing JSON, ${ json } : ${ error }`;
                
              input.remove ( );
              
              alert ( s );
              
              return; // bail on error
              
              }
              
          for ( const field of fields ) {
          
            try {
            
              await addFieldButtonClick ( );
              
              await delay ( 500 );
              
              await fieldTypeButtonClick ( field );
              
              await delay ( 500 );
              
              await editFieldLastButtonClick ( );
              
              await delay ( 500 );
              
              await setFieldValues ( field );
              
              await delay ( 500 );
              
              } catch ( error ) {
              
                const s = `${ codeKey }, error processing field ` +
                
                  `${ JSON.parse ( field ) } : ${ error }`;
                  
                alert ( s );
                
                break;
                
                }
                
            }
            
          input.remove ( );
          
          alert ( `TWC ${ title } is done.` );
          
          },
          
        reader = new FileReader ( );
      
      reader.onload = callback;
      
      reader.readAsText ( file );
      
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
    
      for ( let i = 0; i < options.length; i++ ) {
      
        let element = optionsElement
        
          .querySelectorAll ( 'input' )
          
          [ i ];
          
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
        
      };
      
    setFieldValues = async ( field ) => {
    
      let
      
        xPathExpression = `
          
          .//div [
          
            @data-test-id='header-title'
            
              and
              
              contains (
              
                .,
                
                '${ field.type }'
                
                )
                
              ]
              
            `,
          
        xPathResults =
        
          xPathEvaluate ( xPathExpression, transitionContainerElement );
          
      if ( xPathResults.snapshotLength === 0 )
      
        throw new Error ( `${ codeKey } no ${ field.type } field panel.` );
        
      let
      
        selector = 'input[ aria-label="Label" ]',
        
        element = transitionContainerElement
        
          .querySelector ( selector );
          
      // label
      
      if ( field.label )
      
        inputChangeTrigger ( element, field.label );
        
      // description
      
      {
      
        switch ( field.type ) {
        
          case 'Name' :
          case 'Text' :
          case 'Email' :
          case 'Phone' :
          case 'Text Area' :
          case 'Dropdown' :
          case 'Checkbox' :
          case 'Radio' :
          case 'Survey' :
          case 'Address' :
          case 'Line' :
          case 'Website' :
          case 'Date' :
          case 'Number' :
          case 'Time' :
          case 'Currency' :
          case 'X' :
          
            if ( ! field.description ) break;
            
            selector = 'textarea[ aria-label="Description" ]',
            
            element = transitionContainerElement
            
              .querySelector ( selector );
              
            inputChangeTrigger ( element, field.description );
            
            break;
            
          }
          
        }
        
      // required
      
      {
      
        switch ( field.type ) {
        
          case 'Name' :
          case 'Text' :
          case 'Email' :
          case 'Phone' :
          case 'Text Area' :
          case 'Dropdown' :
          case 'Checkbox' :
          case 'Radio' :
          case 'Survey' :
          case 'Address' :
          case 'Website' :
          case 'Date' :
          case 'Number' :
          case 'Time' :
          case 'Currency' :
          case 'X' :
          case 'File Upload' :
          
            if ( ! field.required ) break;
            
            selector = 'input[ aria-label="Required" ][ type="checkbox" ]',
            
            transitionContainerElement
            
              .querySelector ( selector )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // placeholder
      
      {
      
        switch ( field.type ) {
        
          case 'Text' :
          case 'Email' :
          case 'Text Area' :
          case 'Dropdown' :
          case 'Checkbox' :
          case 'Radio' :
          case 'Survey' :
          case 'Website' :
          case 'Number' :
          
            if ( ! field.placeholder ) break;
            
            selector = 'input[ aria-label="Placeholder" ]',
            
            element = transitionContainerElement
            
              .querySelector ( selector );
              
            inputChangeTrigger ( element, field.placeholder );
            
            break;
            
          }
          
        }
        
      // country dropdown
      
      {
      
        switch ( field.type ) {
        
          case 'Phone' :
          
            if ( ! field.countryDropdown ) break;
            
            selector = 'input[ aria-label="Country dropdown" ]'
            
              +
              
              '[ type="checkbox" ]',
              
            transitionContainerElement
            
              .querySelector ( selector )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // options
      
      {
      
        switch ( field.type ) {
        
          case 'Dropdown' :
          case 'Checkbox' :
          case 'Radio' :
          case 'Survey' : {
          
            if ( ! field.options ) break;
            
            xPathExpression = './/label [ contains ( ., "Options" ) ]',
            
            xPathResults =
            
              xPathEvaluate ( xPathExpression, transitionContainerElement );
              
            if ( xPathResults.snapshotLength === 0 )
            
              throw new Error ( `${ codeKey } no Options.` );
              
            const optionsElement = xPathResults
            
              .snapshotItem ( 0 )
              
              .parentElement;
              
            xPathExpression = './/span [ contains ( text ( ), "Add option" ) ]',
            
            xPathResults =
            
              xPathEvaluate ( xPathExpression, optionsElement );
              
            if ( xPathResults.snapshotLength === 0 )
            
              throw new Error ( `${ codeKey } no ADD OPTION button.` );
              
            const addElement = xPathResults
            
              .snapshotItem ( 0 )
              
              .closest ( 'button' );
              
            await processOptions ( field.options, optionsElement, addElement );
            
            break;
            
            }
            
          }
          
        }
        
      // underline
      
      {
      
        switch ( field.type ) {
        
          case 'Line' :
          
            if ( ! field.underline ) break;
            
            selector = 'input[ aria-label="Underline" ][ type="checkbox" ]',
            
            transitionContainerElement
            
              .querySelector ( selector )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // currency symbol
      
      {
      
        switch ( field.type ) {
        
          case 'Currency' :
          
            if ( ! field.currencySymbol ) break;
            
            selector = 'input[ aria-Label="Currency Symbol" ]',
            
            element = transitionContainerElement
            
              .querySelector ( selector );
              
            inputChangeTrigger ( element, field.currencySymbol );
            
            break;
            
          }
          
        }
        
      // value
      
      {
      
        switch ( field.type ) {
        
          case 'Hidden' :
          
            if ( ! field.value ) break;
            
            selector = 'input[ aria-Label="Value" ]',
            
            element = transitionContainerElement
            
              .querySelector ( selector );
              
            inputChangeTrigger ( element, field.value );
            
            break;
            
          }
          
        }
        
      // allow only specific file types
      
      {
      
        switch ( field.type ) {
        
          case 'File Upload' :
          
            if ( ! field.allowOnlySpecificFileTypes ) break;
            
            selector = 'input[ aria-label="Allow only specific file types" ]' +
            
              '[ type="checkbox" ]',
              
            transitionContainerElement
            
              .querySelector ( selector )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // image
      
      {
      
        switch ( field.type ) {
        
          case 'File Upload' :
          
            if ( ! field.allowOnlySpecificFileTypes ) break;
            
            if ( ! field.image ) break;
            
            selector = 'p[ title="Image (.png, .jpg, .tiff, .heic)" ]',
              
            transitionContainerElement
            
              .querySelector ( selector )
              
              .parentElement
              
              .parentElement
              
              .parentElement
              
              .querySelector ( 'input[ type="checkbox" ]' )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // document
      
      {
      
        switch ( field.type ) {
        
          case 'File Upload' :
          
            if ( ! field.allowOnlySpecificFileTypes ) break;
            
            if ( ! field.document ) break;
            
            selector = 'p[ title="Document (.docx, .doc, .pdf, .txt)" ]',
              
            transitionContainerElement
            
              .querySelector ( selector )
              
              .parentElement
              
              .parentElement
              
              .parentElement
              
              .querySelector ( 'input[ type="checkbox" ]' )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // presentation
      
      {
      
        switch ( field.type ) {
        
          case 'File Upload' :
          
            if ( ! field.allowOnlySpecificFileTypes ) break;
            
            if ( ! field.presentation ) break;
            
            selector = 'p[ title="Presentation (.pptx, .pdf)" ]',
              
            transitionContainerElement
            
              .querySelector ( selector )
              
              .parentElement
              
              .parentElement
              
              .parentElement
              
              .querySelector ( 'input[ type="checkbox" ]' )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // video
      
      {
      
        switch ( field.type ) {
        
          case 'File Upload' :
          
            if ( ! field.allowOnlySpecificFileTypes ) break;
            
            if ( ! field.video ) break;
            
            selector = 'p[ title="Video (.mp4, .avi, .avchd, .flv)" ]',
            
            transitionContainerElement
            
              .querySelector ( selector )
              
              .parentElement
              
              .parentElement
              
              .parentElement
              
              .querySelector ( 'input[ type="checkbox" ]' )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // audio
      
      {
      
        switch ( field.type ) {
        
          case 'File Upload' :
          
            if ( ! field.allowOnlySpecificFileTypes ) break;
            
            if ( ! field.audio ) break;
            
            selector = 'p[ title="Audio (.mp3, .wav, .aac, .mp4, .alac)" ]',
            
            transitionContainerElement
            
              .querySelector ( selector )
              
              .parentElement
              
              .parentElement
              
              .parentElement
              
              .querySelector ( 'input[ type="checkbox" ]' )
              
              .dispatchEvent (
              
                new MouseEvent (
                
                  'click',
                  
                  { bubbles : true }
                  
                  )
                  
                );
                
            break;
            
          }
          
        }
        
      // max number of files
      
      {
      
        switch ( field.type ) {
        
          case 'File Upload' :
          
            if ( ! field.allowOnlySpecificFileTypes ) break;
            
            if ( ! field.maxNumberOfFiles ) break;
            
            selector = 'input[ aria-Label="Max Number of Files" ]',
            
            element = transitionContainerElement
            
              .querySelector ( selector );
              
            inputChangeTrigger ( element, field.maxNumberOfFiles );
            
            break;
            
          }
          
        }
        
      selector = 'button[ data-test-id="Back Button" ]';
      
      transitionContainerElement
      
        .querySelector ( selector )
        
        .click ( );
        
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
      
  // set up file input
  
  {
  
    input.accept = 'application/json';
    
    input.style.display = 'none';
    
    input.type = 'file';
    
    document
    
      .body
      
      .appendChild ( input );
      
    input.click ( );
    
    input.addEventListener ( 'change', inputCallback );
    
    }
    
  } ) ( );
