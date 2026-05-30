( ( ) => {

  // debugger
  
  /*!
  
    elements manipulate
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.13.0
    
    SS Versions     : 7.1, 7.0
    
    Note            : this code is a base for other effects. you will want
                      to create CSS to hide and show elements. after an
                      element is replaced the class twc-em-show will be
                      added to it which can be used to show elements
    
    Copyright       : 2022-2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.13.0',
    
    s = `
    
      Elements Manipulate v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2022-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  let observer;
  
  const
  
    codeKey = 'twc-em',
    
    processNode =
    
      ( currentNode, callbackName ) => {
      
        try {
        
          const resultNode = codeKey
            
            .split ( '-' )
            
            .reduce (
            
              ( obj, key ) =>
              
                obj?.[ key ],
                
              window
              
              )
              
            .callbacks
            
            [ callbackName ]
            
            ( currentNode );
            
          return resultNode;
          
          } catch ( error ) {
          
            const s =
            
              `${ codeKey } ${
              
                callbackName
                
                } callback error`;
                
            console.error (
            
              s, error
              
              );
              
            }
            
        },
        
    replaceNode = ( node, newNode ) => {
    
      node.insertAdjacentElement (
      
        'beforebegin',
        
        newNode
        
        );
        
      node.remove ( );
      
      },
      
    runCallbacksPipeline =
    
      ( node, callbacks ) => {
      
        const
        
          finalNode = callbacks.reduce (
          
            processNode, node
            
            );
            
        return finalNode;
        
        },
        
    selectorObjectCallback =
    
      ( selector, object ) => {
      
        let i = 1;
        
        object.repeat++;
        
        while ( i < object.repeat ) {
        
          document
          
            .querySelectorAll (
            
              selector
              
              )
              
            .forEach (
            
              e => actionCallback (
              
                e, object
                
                )
                
              );
              
          i++;
          
          }
          
        },
        
    actionCallback =
    
      ( sourceElement, object ) => {
      
        const
        
          hasDestinationAncestorSelector
          
            =
            
            !
            
            new RegExp ( '^\\[.+\\]$' )
            
              .test (
              
                object
                
                  .destinationAncestorSelector
                  
                  ),
                  
          hasSourceAncestorSelector
          
            =
            
            !
            
            new RegExp ( '^\\[.+\\]$' )
            
              .test (
              
                object
                
                  .sourceAncestorSelector
                  
                  ),
                  
          isDestinationSource
          
            =
            
            object
                
              .destinationSelector
              
              ===
              
              `x-${ codeKey }-source`;
              
        let
        
          destinationElement,
          
          isSourceCopy =
          
            object.sourceCopy,
            
          rootElement = document,
          
          sourceCopyElement;
          
        if ( hasSourceAncestorSelector )
        
          sourceElement =
          
            sourceElement
            
              .closest (
              
                object
                
                  .sourceAncestorSelector
                  
                );
                
        if ( isSourceCopy )
        
          sourceCopyElement =
          
            sourceElement.cloneNode (
            
              true
              
              );
              
        if ( ! isDestinationSource ) {
        
          const hasRootSelector
          
            =
            
            !
            
            new RegExp ( '^\\[.+\\]$' )
            
              .test (
              
                object.rootSelector
                
                );
                
          if ( hasRootSelector )
          
            rootElement = sourceElement
            
              .closest (
              
                object.rootSelector
                
                );
                
          destinationElement =
          
            rootElement
            
              .querySelector (
              
                object
                
                  .destinationSelector
                  
                );
                
          // continue if no destination
          
          if ( ! destinationElement )
          
            return;
            
          } else
          
            destinationElement =
            
              sourceElement;
              
        const
        
          action = object.action,
          
          hasCallbacks = object
          
            .callbacks
            
            .length;
            
        if ( isSourceCopy && ! hasCallbacks )
        
          sourceElement =
          
            sourceCopyElement;
            
          else
          
            sourceElement
            
              =
              
              runCallbacksPipeline (
              
                sourceElement,
                
                object.callbacks
                
                );
                
        if ( object.onEditModeRemove )
        
          sourceElement.setAttribute (
          
            attribute,
            
            ''
            
            );
            
        if ( hasDestinationAncestorSelector )
        
          destinationElement =
          
            destinationElement
            
              .closest (
              
                object
                
                  .destinationAncestorSelector
                  
                );
                
        switch ( action ) {
        
          case 'after' :
          
            destinationElement
            
              .insertAdjacentElement (
              
                'afterend',
                
                sourceElement
                
                );
                
            break;
            
          case 'append' :
          
            destinationElement
            
              .insertAdjacentElement (
              
                'beforeend',
                
                sourceElement
                
                );
                
            break;
            
          case 'before' :
          
            destinationElement
            
              .insertAdjacentElement (
              
                'beforebegin',
                
                sourceElement
                
                );
                
            break;
            
          case 'prepend' :
          
            destinationElement
            
              .insertAdjacentElement (
              
                'afterbegin',
                
                sourceElement
                
                );
                
            break;
            
          case 'replace' :
          
            replaceNode (
            
              destinationElement,
              
              sourceElement
              
              );
              
            break;
            
          }
          
        },
        
    attribute = `data-${
    
      codeKey
      
      }-source-copy`,
      
    handleMutation = ( mutation ) => {
    
      const isClassAttribute =
      
        mutation
        
          .attributeName
          
          ===
          
          'class';
          
      // bail if not class attribute
      
      if ( ! isClassAttribute )
      
        return true;
        
      const 
      
        element = mutation.target,
        
        isEditing = element
        
          .classList
          
          .contains ( 'sqs-is-page-editing' );
          
      // bail if not editing
      
      if ( ! isEditing ) return true;
      
      element
      
        .querySelectorAll (
        
          `[ ${ attribute } ]`
          
          )
          
        .forEach ( e => e.remove ( ) );
        
      observer.disconnect ( );
      
      return false;
      
      },
      
    mapsCallback = ( object ) => {
    
      const entries =
      
        Object.entries ( object );
        
      for (
      
        const [ key, value ] of entries
        
        ) {
      
          selectorObjectCallback (
          
            key,
            
            value
            
            );
            
          }
          
      },
      
    domContentLoadedCallback = ( ) => {
    
      // globals
      
      {
      
        // initialize twc module
        
        window.twc = window.twc || { };
        
        // initialize twc em sub-module
        
        twc.em = twc.em || { };
        
        // initialize twc em callbacks sub-module
        
        twc.em.callbacks = twc.em.callbacks || { };
        
        // initialize twc em maps sub-module
        
        twc.em.maps = twc.em.maps || [ ];
        
        }
        
      const maps = twc.em.maps;
      
      if ( ! maps.length ) return; // bail if no maps
      
      maps.forEach ( mapsCallback );
      
      const isEditMode = document
      
        .body
        
        .classList
        
        .contains ( 'sqs-edit-mode' );
        
      // bail if not edit mode
      
      if ( ! isEditMode ) return;
      
      observer = new MutationObserver (
      
        ( mutations ) => {
        
          for (
          
            const mutation of mutations
            
            ) {
            
              const isContinue =
              
                handleMutation (
                
                  mutation
                  
                  );
                  
              // bail if callback returns false
              
              if ( ! isContinue ) break;
              
              }
              
            }
            
        );
        
      // start listening for changes in specified elements
      
      observer.observe (
      
        document.body,
        
        { attributes : true }
        
        );
        
      };
      
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
