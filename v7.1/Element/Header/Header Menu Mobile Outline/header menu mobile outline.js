( ( ) => {

  /*!
  
    header menu mobile outline
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.6.0
    
    SS Version      : 7.1
    
    Copyright       : 2021-2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.6.0',
    
    s = `
    
      Header Menu Mobile Outline v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // globals
  
  {
  
    // initialize twc module
    
    window.twc =
    
      ( ( self ) => self )
      
      ( window.twc || { } );
      
    // initialize twc hmmo sub-module
    
    twc.hmmo =
    
      ( ( self ) => self )
      
      ( twc.hmmo || { } );
      
    // initialize twc hmmo callbacks sub-module
    
    twc.hmmo.callbacks =
    
      ( ( self ) => self )
      
      ( twc.hmmo.callbacks || [ ] );
      
    }
    
  let observer;
  
  const
  
    activeClassName =
    
      'header-menu-nav-'
      
      +
      
      'folder--active',
      
    codeKey = 'twc-hmmo',
    
    folderItemCallback =
    
      ( element, ulElement ) => {
      
        const liElement = document
        
          .createElement ( 'li' );
          
        liElement
        
          .classList
          
          .add ( 'header-menu-nav-item' );
          
        liElement
        
          .append ( element );
          
        ulElement
        
          .append ( liElement );
          
        },
        
    menuElement = document
    
      .createElement ( 'ul' ),
      
    options = codeKey
    
      .split ( '-' )
      
      .reduce (
      
        ( obj, key ) => obj?.[ key ],
        
        window
        
        ),
        
    navigationElement = document
    
      .body
      
      .querySelector (
      
        '.header-menu-nav-list'
        
        ),
        
    removeOldFolders = ( ) => {
    
      navigationElement
      
        .querySelectorAll (
        
          '[ data-folder ]:not('
          
          +
          
          `${ rootSelector } )`
          
          )
          
        .forEach ( e => e.remove ( ) );
        
      },
      
    replaceMenuContent = ( ) => {
    
      navigationElement
      
        .querySelector (
        
          '.header-menu-nav-'
          
          +
          
          'folder-content'
          
          )
          
        .replaceWith ( menuElement );
        
      },
      
    rootSelector =
    
      '[ data-folder = "root" ]',
      
    setExpandableAttribute = ( ) => {
    
      navigationElement
      
        .setAttribute (
        
          `data-${ codeKey }`
          
          +
          
          '-expandable',
          
          ''
          
          );
          
      },
      
    isExpandable = options.expandable,
    
    isIconActive = options.iconActive,
    
    itemCallback =
    
      ( element, menuElement ) => {
      
        const
        
          dataFolderId = element
          
            .getAttribute (
            
              'data-folder-id'
              
              ),
              
          isFolder =
          
            dataFolderId
            
            ?
            
            true
            
            :
            
            false,
            
          isUserAccounts = element
          
            .classList
            
            .contains (
            
              'user-accounts-text-link'
              
              );
              
        if ( isUserAccounts )
        
          element =
          
            element.parentElement;
            
        const liElement = document
        
          .createElement ( 'li' );
          
         liElement
         
          .classList
          
          .add (
          
            'header-menu-nav-item'
            
            );
            
        liElement
        
          .append ( element );
          
        if ( isFolder ) {
        
          const ulElement =
          
            document.createElement (
            
              'ul'
              
              );
              
          navigationElement
          
            .querySelectorAll (
            
              '[ data-folder = "'
              
              +
              
              `${ dataFolderId }" ] `
              
              +
              
              '.header-menu-nav-'
              
              +
              
              'item:not( .header-menu-'
              
              +
              
              'controls ) a'
              
              )
              
            .forEach (
            
              e =>
              
                folderItemCallback (
                
                  e,
                  
                  ulElement
                  
                  )
                  
              );
              
          liElement.append ( ulElement );
          
          }
          
        menuElement
        
          .append ( liElement );
          
        },
        
    rootFolderElement =
    
      navigationElement
      
        .querySelector (
        
          rootSelector
          
          ),
          
    runUserCallbacks = ( ) => {
    
      runUserCallback = ( callback ) => {
      
        try {
        
          callback ( menuElement );
          
          } catch ( error ) {
          
            const s = `${
            
              codeKey
              
              } callback error`;
              
            console.error (
            
              s,
              
              error
              
              );
              
            }
            
        },
        
      options
      
        .callbacks
        
        .forEach (
        
          runUserCallback
          
          );
          
      },
      
    clickCallback = ( event ) => {
    
      event.preventDefault ( );
      
      const
      
        className =
        
          'header-dropdown-flip',
          
        element = event.currentTarget,
        
        isChangeIcon =
        
          isExpandable && isIconActive;
          
      element
      
        .classList
        
        .toggle (
        
          `${ codeKey }-open`
          
          );
          
      // bail if no icon change
      
      if ( ! isChangeIcon ) return;
      
      const
      
        classList = element
        
          .querySelector (
          
            '.header-dropdown-icon'
            
            )
            
          .classList,
          
        hasClassName = classList
        
          .contains ( className );
          
      if ( hasClassName )
      
        classList.remove (
        
          className
          
          );
          
        else
        
          classList.add (
          
            className
            
            );
            
      },
      
    attachClickHandlers = (
    
      menuElement
      
      ) => {
      
        menuElement
        
          .querySelectorAll (
          
            '[ data-folder-id ]' )
            
          .forEach (
          
            e =>
            
              e.addEventListener (
              
                'click',
                
                clickCallback
                
                )
                
            );
            
        },
        
    populateMenuItems = ( ) => {
    
      rootFolderElement
      
        .querySelectorAll (
        
          '.header-menu-nav-item a'
          
          )
          
        .forEach (
        
          e => itemCallback (
          
            e,
            
            menuElement
            
            )
            
          );
          
      },
      
    buildMenu = ( ) => {
    
      populateMenuItems ( );
      
      removeOldFolders ( );
      
      replaceMenuContent ( menuElement );
      
      // bail if not expandable
      
      if ( ! isExpandable ) return;
      
      setExpandableAttribute ( );
      
      attachClickHandlers (
      
        menuElement
        
        );
        
      },
      
    mutationCallback = ( mutation ) => {
    
      const hasAttributeClass =
      
        mutation.attributeName
        
        ===
        
        'class';
        
      // continue if not attribute class
      
      if ( ! hasAttributeClass )
      
        return false;
      
      const hasActiveClass = mutation
      
        .target
        
        .classList
        
        .contains ( activeClassName );
        
      // continue if no active class
      
      if ( ! hasActiveClass )
      
        return false;
        
      observer.disconnect ( );
      
      buildMenu ( );
      
      runUserCallbacks ( );

      return true;
      
      },
      
    domContentLoadedCallback =
    
      ( ) => {
      
        const
        
          isActive = rootFolderElement
          
            .classList
            
            .contains ( activeClassName );
            
        navigationElement
        
          .classList
          
          .add ( `${ codeKey }` );
          
        if ( isActive ) {
        
          buildMenu ( );
          
          runUserCallbacks ( );
          
          return;
          
          }
          
        observer = new MutationObserver (
        
          ms => {
          
            for ( const m of ms ) {
            
              const isBreak =
              
                mutationCallback ( m );
                
              // bail if callback returns false
              
              if ( isBreak ) break;
              
              }
              
            }
            
          );
          
        // start listening for changes in element
        
        observer.observe (
        
          rootFolderElement,
          
          { attributes : true }
          
          );
          
        };
        
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  } ) ( );
