( ( ) => {

  /*!
  
    header menu mobile outline
    
    License       : < https://tinyurl.com/s872fb68 >
    
    Version       : 0.5.0
    
    SS Version    : 7.1
    
    Copyright     : 2021-2025 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    version = '0.5.0',
    
    s = `
    
      Header Menu Mobile Outline v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const callback = ( ) => {
  
    let selector = '.header-menu-nav-list';
    
    const
    
      activeClassName = 'header-menu-nav-folder--active',
      
      build = ( ) => {
      
        const
        
          rootSelector = '[ data-folder="root" ]',
          
          menuElement = document
          
            .createElement ( 'ul' );
            
        let
        
          callback = ( element ) => {
          
            const
            
              dataFolderId = element
              
                .getAttribute ( 'data-folder-id' ),
                
              isFolder = dataFolderId === undefined ? false : true,
              
              isUserAccounts = element
              
                .classList
                
                .contains ( 'user-accounts-text-link' );
                
            if ( isUserAccounts )
            
              element = element.parentElement;
              
            const liElement = document
            
              .createElement ( 'li' );
              
             liElement
             
              .classList
              
              .add ( 'header-menu-nav-item' );
              
            liElement
            
              .append ( element );
              
            if ( isFolder ) {
            
              const
              
                callback = ( element ) => {
                
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
                  
                ulElement = document
                
                  .createElement ( 'ul' );
                  
              selector = `[ data-folder="${ dataFolderId }" ] `
              
                +
                
                '.header-menu-nav-item:not( .header-menu-controls ) a';
                
              navigationElement
              
                .querySelectorAll ( selector )
                
                .forEach ( callback );
                
              liElement.append ( ulElement );
              
              }
              
            menuElement
            
              .append ( liElement );
              
            },
            
          isExpandable,
          
          isIconActive,
          
          selector = '.header-menu-nav-item a';
        
        folderElement
        
          .querySelectorAll ( selector  )
          
          .forEach ( callback );
          
        navigationElement
        
          .querySelectorAll ( `[ data-folder ]:not( ${ rootSelector } )` )
          
          .forEach ( e => e.remove ( ) );
          
        navigationElement
        
          .querySelector ( '.header-menu-nav-folder-content' )
          
          .replaceWith ( menuElement );
          
        // is expandable
        
        {
        
          isExpandable = getComputedStyle (
          
            navigationElement
          
            )
            
            .getPropertyValue ( `--${ codeKey }-expandable` );
            
          isExpandable = isExpandable === 'true' ? true : false;
          
          if ( ! isExpandable ) return; // bail if not expandable
          
          }
          
        // is icon active
        
        {
        
          isIconActive = getComputedStyle (
          
            navigationElement
          
            )
            
            .getPropertyValue ( `--${ codeKey }-icon-active` );
            
          isIconActive = isIconActive === 'true' ? true : false;
          
          }
          
        callback = ( event ) => {
        
          event.preventDefault ( );
          
          const
          
            className = 'header-dropdown-flip',
            
            element = event.currentTarget;
            
          let b = isExpandable && isIconActive;
          
          element
          
            .classList
            
            .toggle ( `${ codeKey }-open` );
            
          if ( b ) {
          
            const
            
              classList = element
              
                .querySelector ( '.header-dropdown-icon' )
                
                .classList,
                
              hasClassName = classList
              
                .contains ( className );
                
            if ( hasClassName )
            
              classList
              
                .remove ( className );
                
              else {
              
                classList
                
                  .add ( className );
                  
                }
                
            }
            
          };
          
        navigationElement
        
          .setAttribute ( `data-${ codeKey }-expandable`, '' );
          
        menuElement
        
          .querySelectorAll ( '[ data-folder-id ]' )
          
          .forEach (
          
            e => e.addEventListener ( 'click', callback )
            
            );
            
        },
        
      codeKey = 'twc-hmmo',
      
      navigationElement = document
      
        .body
        
        .querySelector ( selector );
        
    navigationElement
    
      .classList
      
      .add ( `${ codeKey }` );
      
    selector = '.header-menu-nav-folder[ data-folder="root" ]';
    
    const
    
      folderElement = navigationElement
      
        .querySelector ( selector ),
      
      isActive = folderElement
      
        .classList
        
        .contains ( activeClassName );
        
    if ( isActive )
    
      build ( );
      
      else {
      
        const
        
          callback = ( mutations ) => {
          
            const callback = ( mutation ) => {
            
              // continue if not attribute class
              
              if ( mutation.attributeName !== 'class' ) return true;
              
              const b = mutation
              
                .target
                
                .classList
                
                .contains ( activeClassName );
                
              if ( ! b ) return true; // continue if no active class
              
              observer.disconnect ( );
              
              build ( );
              
              return false;
              
              };
              
            for ( const mutation of mutations ) {
            
              const b = callback ( mutation );
              
              if ( ! b ) break; // bail if callback returns false
              
              }
              
            },
            
          observer = new MutationObserver ( callback );
          
        // start listening for changes in element
        
        observer.observe (
        
          folderElement,
          
          { attributes : true }
          
          );
          
        }
        
    };
    
  document
  
    .addEventListener ( 'DOMContentLoaded', callback );
    
  } ) ( );
