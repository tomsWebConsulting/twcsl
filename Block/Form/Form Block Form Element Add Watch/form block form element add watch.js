( ( ) => {

  /*!
  
    form block form element add watch
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.6.0
    
    SS Versions     : 7.1, 7.0
    
    v7.1
    Fluid
    Engine
    Compatible      : Yes
    
    Notes           : this code is a base for other effects. on its own it
                      doesn't do much. this code is not the end all be all of
                      mutation observers. it may not cover your needs
    
    Copyright       : 2023-2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.6.0',
    
    s = `
    
      Form Block Form Element Add Watch v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2023-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // bail if no mutation observer available
  
  if ( ! ( 'MutationObserver' in window ) ) return;
  
  // global
  
  {
  
    // initialize twc module
    
    window.twc =
    
      ( ( self ) => self )
      
      ( window.twc || { } );
      
    // initialize twc fbfeaw sub-module
    
    twc.fbfeaw =
    
      ( ( self ) => self )
      
      ( twc.fbfeaw || { } );
      
    // initialize twc fbfeaw callbacks sub-module
    
    twc.fbfeaw.callbacks =
    
      ( ( self ) => self )
      
      ( twc.fbfeaw.callbacks || { } );
      
    }
    
  const
  
    codeKey = 'twc-fbfeaw',
    
    selectorKey =
    
      'div[ data-sqsp-block = "form" ]';
      
  // hide show register
  
  {
  
    // initialize twc data sub-module
    
    twc.data =
    
      ( ( self ) => self )
      
      ( twc.data || { } );
      
    // initialize twc data hideShow sub-module
    
    twc.data.hideShow =
    
      ( ( self ) => self )
      
      ( twc.data.hideShow || { } );
      
    // initialize twc data hideShow selector key sub-module
    
    twc.data.hideShow [ selectorKey ] =
    
      ( ( self ) => self )
      
      (
      
        twc.data.hideShow [ selectorKey ]
        
        ||
        
        [ ]
        
        );
        
    twc
    
      .data
      
      .hideShow
      
      [ selectorKey ]
      
      .push ( `--${ codeKey }` );
      
    }
    
  const dclCallback = ( ) => {
  
    const
    
      fbwocCodeKey = 'twc-fbwoc',
      
      fbwocOptions = fbwocCodeKey
      
        .split ( '-' )
        
        .reduce (
        
          ( obj, key ) => obj?.[ key ],
          
          window
          
          ),
          
      mutationCallback = ( mutation ) => {
      
        // bail if no added nodes
        
        if ( ! mutation.addedNodes.length ) return;
        
        mutation
        
          .addedNodes
          
          .forEach ( nodeCallback );
          
        },
          
      mutationsCallback = ( mutations ) => {
      
        const isEditing = document
        
          .body
          
          .classList
          
          .contains ( 'sqs-is-page-editing' );
          
        if ( isEditing ) return; // bail if editing
        
        for ( const m of mutations )
        
          mutationCallback ( m );
          
        },
        
      nodeCallback = ( node ) => {
      
        const isForm =
        
          node.tagName === 'FORM';
          
        // continue if not form element
        
        if ( ! isForm ) return;
        
        const xPathResults =
        
          xPathEvaluate ( xPathExpression, node );
          
        // bail if no element
        
        if ( ! xPathResults.snapshotLength ) return;
        
        const descriptionElement =
        
          xPathResults.snapshotItem ( 0 );
          
        let element = descriptionElement
        
          .closest (
          
            [
            
              'div[ data-sqsp-block="form" ]',
              
              '.form-inner-wrapper'
              
              ]
              
              .join ( ', ' )
              
            );
            
        const id = element
        
          .getAttribute ( 'id' )
          
          ??
          
          element
          
            .previousElementSibling
            
            .classList
            
            .contains ( 'form-title' )
            
          ?
          
          element
          
            .previousElementSibling
            
            .textContent
            
          :
          
          null;
          
        // bail if no id
        
        if ( ! id ) return;
        
        let userCallbacks;
        
        try {
        
          userCallbacks = JSON
          
            .parse (
          
              descriptionElement
              
                .textContent
                
                .match ( /"callbacks"\s*:\s*(.+)/s )
                
                [ 1 ]
                
                // remove * comments
                
                .replace ( /\/\*[^]*?\*\//g, '' )
                
                // remove // comments
                
                .replace ( /^\s*\/\/.*/gm, '' )
                
                // remove trailing ,
                
                .replace ( /,\s+]/g, ']' )
                
              );
              
          } catch ( error ) {
          
            const s = `${ codeKey }, id ${ id }, `
            
              +
              
              'callbacks parse error : ';
              
            console.error ( s, error );
            
            return;
            
            }
            
        descriptionElement
        
          .closest ( '.form-item' )
          
          .classList
          
          .add ( codeKey );
          
        // process user callbacks
        
        {
        
          if ( userCallbacks.added )
          
            userCallbacks =
            
              userCallbacks.added;
              
          // filter
          
          userCallbacks = userCallbacks
          
            .filter ( e => e [ 0 ] !== '[' );
            
          // call user callbacks
          
          {
          
            for ( const c of userCallbacks )
            
              userCallback ( c, node );
              
            }
            
          }
          
        },
        
      observer = new MutationObserver (
      
        mutationsCallback
        
        ),
        
      options = codeKey
      
        .split ( '-' )
        
        .reduce (
        
          ( obj, key ) => obj?.[ key ],
          
          window
          
          ),
          
      userCallback =
      
        ( callback, node ) => {
        
          try {
          
            options
            
              .callbacks
              
              [ callback ]
              
              ( node );
              
            } catch ( error ) {
            
              const s =
              
                `${ codeKey } callback ${ callback } error : `;
                
              console.error ( s, error );
              
              }
              
          },
          
      xPathEvaluate =
      
        (
        
          xPathExpression,
          
          contextNode
          
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
            
      xPathExpression = `
      
        //div [
        
          contains (
          
            concat (
            
              " ",
              
              normalize-space ( @class ),
              
              " "
              
              ),
              
            " title "
            
            )
            
            and
            
            (
            
              contains (
              
                .,
                
                '${ codeKey }'
                
                )
                
              or
              
              contains (
              
                .,
                
                '${ fbwocCodeKey }'
                
                )
                
              )
              
          ]
          
          /following-sibling::div [
          
            contains (
            
              concat (
              
                " ",
                
                normalize-space ( @class ),
                
                " "
                
                ),
                
              " description "
              
              )
              
              and
              
              contains (
              
                .,
                
                'callbacks'
                
                )
                
              ]
              
        `;
        
      // merge fbwoc callback into callbacks
      
      if ( fbwocOptions?.callbacks )
      
        Object.assign (
        
          options.callbacks,
          
          fbwocOptions.callbacks
          
          );
          
    // begin listening for changes in specified element
    
    observer.observe (
    
      document.body,
      
      {
      
        childList : true,
        
        subtree : true
        
        }
        
      );
      
    // hide show unregister
    
    {
    
      const siteWrapperElement = document
      
        .querySelector ( '#siteWrapper' );
        
      siteWrapperElement
      
        .style
        
        .setProperty (
        
          `--${ codeKey }`, 'visible'
          
          );
          
      twc
      
        .data
        
        .hideShow
        
        [ selectorKey ]
        
        .pop ( `--${ codeKey }` );
        
      const l = twc
      
        .data
        
        .hideShow
        
        [ selectorKey ]
        
        .length;
        
      if ( ! l )
      
        siteWrapperElement
        
          .style
          
          .setProperty (
          
            '--twc-div-data-sqsp-block-form',
            
            'unset'
            
            );
            
      }
      
    };
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dclCallback
    
    );
    
  } ) ( );
