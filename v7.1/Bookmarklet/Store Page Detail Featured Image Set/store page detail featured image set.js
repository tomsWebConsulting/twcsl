( ( ) => {

  /*
  
    store page detail featured image set
    
    License      : < https://tinyurl.com/s872fb68 >
    
    Version      : 0.1.0
    
    SS Version   : 7.1
    
    Fluid
    Engine
    Compatible  : Not Applicable
    
    Copyright   : 2024 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */

  const
  
    version = '0.1.0',
    
    s = `
    
      Store Page Detail Featured Image Set v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2024 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
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
      
    editProductDropdownElement = document
    
      .querySelector ( '[ data-test="frameToolbarEditProductDropdown" ]' ),
      
    editProductCallback = ( ) => {
    
      const
      
        codeKey = 'twc-spdfis',
        
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
          
        keydownEvent = new KeyboardEvent (
        
          'keydown',
          
          {
          
            bubbles : true,
            
            cancelable : true,
            
            code : 'Enter',
            
            key : 'Enter',
            
            keyCode : 13,
            
            which : 13
            
            }
            
          ),
        
        productComposerSelector = '[ data-guidance-engine="' +
        
          'guidance-engine-product-composer-modal-wrapper" ]',
          
        productComposerElement = document
        
          .querySelector ( productComposerSelector ),
          
        saveButtonSelector = '[ data-testid="pc-save-button" ]',
        
        thumbnailButtonSelector =
        
          '[ data-testid="pc-set-as-thumbnail-button" ] button',
          
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
          
        xPathExpression = `
        
          .//span [
          
            . = 'Tags'
            
            ]/ancestor::div [ 1 ]//input
            
          `;
          
      let element = productComposerElement
      
        .querySelector ( thumbnailButtonSelector );
        
      if ( element !== null )
      
        element.click ( );
        
      element = xPathEvaluate ( xPathExpression, productComposerElement );
      
      inputChangeTrigger ( element, codeKey );
      
      element
      
        .dispatchEvent ( keydownEvent );
        
      productComposerElement
      
        .querySelector ( saveButtonSelector )
        
        .click ( );
        
      };
      
  Promise
  
    .resolve ( )
    
    .then ( ( ) => { // hover EDIT
    
      const
      
        callback = ( ) => {
        
          mouseoutEvent = new MouseEvent (
          
            'mouseout',
            
            {
            
              bubbles : true,
              cancelable : true,
              view : window
              
              }
              
            );
            
          editProductDropdownElement
          
            .dispatchEvent ( mouseoutEvent );
            
          },
          
        mouseoverEvent = new MouseEvent (
        
          'mouseover',
          
          {
          
            bubbles : true,
            cancelable : true,
            view : window
            
            }
            
          );
          
      editProductDropdownElement
      
        .dispatchEvent ( mouseoverEvent );
        
      setTimeout ( callback, 1000 );
      
      } )
      
    .then ( ( ) => delay ( 1000 ) )
    
    .then ( ( ) => { // click EDIT PRODUCT
    
      document
      
        .querySelector ( '[ data-test="frameToolbarEditProduct" ]' )
        
        .closest ( 'button' )
        
        .click ( );
        
      } )
      
    .then ( ( ) => delay ( 1000 ) )
    
    .then ( editProductCallback );
    
  } ) ( );
