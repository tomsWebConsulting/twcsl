( ( ) => {

  /*
  
    form block edit form field dropdown options add
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.1.0',
  
    s = `Block Edit Form Field Dropdown Options Add v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
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
      
    itemSelector = '[ data-test-id="array-item" ]',
    
    optionsSelector = '[ data-test="form-block-editor-form" ]',
    
    optionsElement = document
    
      .querySelector ( optionsSelector ),
      
    xPathEvaluate = ( xPathExpression, contextNode ) => {
    
      const node = document
      
        .evaluate (
        
          xPathExpression,
          
          contextNode,
          
          null,
          
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          
          null
          
          )
          
          .singleNodeValue;
          
      return node;
      
      },
      
    xPathExpression = './/button [ contains ( ., "Add" ) ]',
    
    addElement = xPathEvaluate ( xPathExpression, optionsElement ),
    
    options = optionsElement
    
      .querySelector ( `${ itemSelector } input` )
      
      .value
      
      .replaceAll ( '\\,', '[ comma ]' )
      
      .split ( /,\s*/ )
      
      .map ( s => s.replaceAll ( '[ comma ]', ',' ) ),
      
    processOptions = async ( options ) => {
    
      for ( const [ index, option ] of options.entries ( ) ) {
      
        const
        
          b = index === options.length - 1,
          
          selector = `${ itemSelector }:last-child input`,
          
          itemElement = optionsElement
          
            .querySelector ( selector );
            
        inputChangeTrigger ( itemElement, option );
        
        if ( b ) return; // bail if last option
        
        addElement.click ( );
        
        addElement
        
          .scrollIntoView ( { behavior : 'smooth' } );
          
        await new Promise ( resolve => setTimeout ( resolve, 125 ) );
        
        }
        
      };
      
  processOptions ( options );
  
  } ) ( );
