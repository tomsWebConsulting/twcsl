( async ( ) => {

  /*
  
    store page categories add
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.1.0
    
    SS Version      : 7.1
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Store Page Categories Add',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
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
    
      .//div [
      
        starts-with ( @class, 'Transition-panel-' )
        
        and
        
        .//h1 [
        
          normalize-space ( text ( ) ) = 'Categories'
          
          ]
          
        ]
        
      `,
      
    xPathResults =
    
      xPathEvaluate ( xPathExpression, document.body );
      
  // bail if no element
  
  if ( xPathResults.snapshotLength === 0 ) {
  
    alert ( `TWC ${ title } no Store page Categories panel.` );
    
    return;
    
    }
    
  const
  
    attribute = 'category-list-item',
    
    delay = ( duration ) => {
    
      const
      
        callback = ( resolve ) => {
        
          setTimeout ( ( ) => resolve ( ), duration );
          
          },
          
        p = new Promise ( callback );
        
      return p;
      
      },
      
    existingCategories = new Set ( ),
    
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
      
    selector = `[ data-test="${ attribute }" ]`;
    
  let newCategories = new Set ( );
  
  try {
  
    const
    
      categoriesWrapperElement = xPathResults
      
        .snapshotItem ( 0 )
        
        .parentElement
        
        .parentElement,
        
      formElement = categoriesWrapperElement
      
        .querySelector ( 'form' ),
        
      inputElement = formElement
      
        .parentElement
        
        .querySelector ( 'input' );
        
    processCategory = async ( category ) => {
    
      inputChangeTrigger ( inputElement, category ),
      
      formElement
      
        .dispatchEvent (
        
          new Event (
          
            'submit',
            
            {
            
              bubbles : true,
              
              cancelable : true
              
              }
              
            )
            
          );
          
      await delay ( 125 );
      
      };
      
    [
    
      ...
      
      categoriesWrapperElement
      
        .querySelectorAll ( selector )
        
      ]
      
      .map (
      
        e => existingCategories.add (
        
          e.textContent
          
          )
          
        );
        
    inputElement
      
      .value
      
      .replaceAll ( '\\,', '[ comma ]' )
      
      .split ( ',' )
      
      .filter ( c => c )
      
      .forEach (
      
        c => newCategories.add (
        
          c
          
            .trim ( )
            
            .replaceAll ( '[ comma ]', ',' )
            
          )
          
        );
        
    newCategories = newCategories
    
      .difference ( existingCategories );
      
    for ( const category of newCategories )
    
      await processCategory ( category );
      
    alert ( `TWC ${ title } is done.` );
    
    } catch ( error ) {
    
      const s = `TWC ${ title }, ${ error }`;
      
      alert ( s );
      
      }
      
  } ) ( );
