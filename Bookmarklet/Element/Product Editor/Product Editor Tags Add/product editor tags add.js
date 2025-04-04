( async ( ) => {

  /*
  
    product editor tags add
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Product Editor Tags Add',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    codeKey = 'twc-sppeta',
    
    delay = ( duration ) => {
    
      const
      
        callback = ( resolve ) => {
        
          setTimeout ( ( ) => resolve ( ), duration );
          
          },
          
        p = new Promise ( callback );
        
      return p;
      
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
    
      //div [
      
        @data-anchor="organization"
        
        ]//span [
        
          text ( )
          
          =
          
          'Tags'
          
          ]
          
      `,
      
    xPathResults =
    
      xPathEvaluate ( xPathExpression, document.body );
      
  // bail if no element
  
  if ( xPathResults.snapshotLength === 0 ) {
  
    alert ( `${ codeKey } no Product Editor panel.` );
    
    return;
    
    }
    
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
      
    processTag = async ( tag ) => {
    
      const inputElement = tagsWrapperElement
      
        .querySelector ( 'input' );
        
      inputChangeTrigger ( inputElement, tag );
      
      inputElement
      
        .dispatchEvent ( returnEvent );
        
      await delay ( 125 );
      
      },
      
    returnEvent = new KeyboardEvent (
    
      'keydown',
      
        {
        
          bubbles : true,
          
          key : 'Enter',
          
          keyCode : 13,
          
          which : 13
          
          }
          
      ),
      
    tagsWrapperElement = xPathResults
    
      .snapshotItem ( 0 )
      
      .parentElement
    
      .parentElement;
      
  try {
  
    const tags = tagsWrapperElement
    
      .querySelector ( 'input' )
      
      .value
      
      .replaceAll ( '\\,', '[ comma ]' )
      
      .split ( /,\s*/ )
      
      .map ( s => s.replaceAll ( '[ comma ]', ',' ) );
      
    for ( const tag of tags ) {
    
      await processTag ( tag );
      
      }
      
    alert ( `TWC ${ title } is done.` );
    
    } catch ( error ) {
    
      const s = `TWC ${ title }, ${ error }`;
      
      alert ( s );
      
      }
      
  } ) ( );
