( ( ) => {

  // debugger;
  
  /*!
  
    store page list categories mega
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.7.0
    
    SS Version        : 7.1
    
    Dependencies      : page categories cache < https://tinyurl.com/yrcxfwnr >
    
    Notes             : the code is comprised of a style and script tag. both
                        are needed for the full effect to work
                        
                        this code is not active when Categories Style is set to
                        DROPDOWN
                        
                        Store Settings > General > Filter Visibility must be
                        toggled on for this code to work correctly
                        
                        in the editor when you change the Menu Placement
                        (SIDE/TOP) you will see Squarespace's default style of
                        categories until you save the Store Page. if for some
                        reason the categories don't update after saving the
                        Store Page, refresh the Store Page
    
    Copyright         : 2023-2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Store Page List Categories Mega',
    
    version = '0.7.0',
  
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2023-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    context = Static
    
      .SQUARESPACE_CONTEXT,
      
    isStorePage = context
    
    .collection
    
    ?.type
    
    ===
    
    13;
    
  if ( ! isStorePage ) return; // bail if not store page
  
  const isList
  
    =
    
    !
    
    context
    
      .item
      
      ?.id;
      
  if ( ! isList ) return; // bail if not list
  
  // initialize twc module
  
  window.twc = window.twc || { };
  
  // initialize twc splcc sub-module
  
  twc.splcc = twc.splcc || { };
    
  // initialize twc pcc sub-module
  
  twc.pcc = twc.pcc || { };
  
  // initialize twc pcc callbacks sub-module
  
  twc.pcc.callbacks = ( ( self ) => {
  
    const callback = ( categories ) => {
    
      const isSubNavigation =
            
        !!
        
        document
        
          .body
          
          .querySelector (
          
            '.product-list[ '
            
            +
            
            'data-category-interface-type = '
            
            +
            
            '"subnav" ]'
            
            );
            
      // bail if not sub navigation
      
      if ( ! isSubNavigation ) return;
      
      const
      
        codeKey = 'twc-splcm',
        
        getParents =
        
          ( element, selector ) => {
          
            const parents = [ ];
            
            let current = element
            
              .parentElement;
              
            while ( current ) {
            
              if (
              
                ! selector
                
                ||
                
                current.matches (
                
                  selector
                  
                  )
                  
                )
                
                parents.push ( current );
                
              current =
              
                current.parentElement;
                
              }
              
            return parents;
            
            },
            
        options = codeKey
        
          .split ( '-' )
          
          .reduce (
          
            ( obj, key ) => obj?.[ key ],
            
            window ),
            
        selectorKey = '.product-list',
        
        ulElement = document
        
          .createElement ( 'ul' ),
          
        url = context
        
          .collection
          
          .fullUrl,
          
        windowWidth = document
        
          .documentElement
          
          .clientWidth,
          
        wrapForeachCallback =
        
          ( element, wrapper, wrappers ) => {
          
            let
            
              deepestElement,
        
              outerWrapperElement;
              
            if ( typeof wrapper === 'string' ) {
            
              // parse html string into dom
              
              {
              
                const element = document
                
                  .createElement (
                  
                    'template'
                    
                    );
                    
                element.innerHTML =
                
                  wrapper.trim ( );
                  
                outerWrapperElement =
                
                  element
                  
                    .content
                    
                    .firstElementChild;
                    
                // bail if no outer wrapper element
                
                if ( ! outerWrapperElement )
                
                  return;
                  
                }
                
              // deepest element
              
              {
              
                deepestElement =
                
                  outerWrapperElement;
                  
                while ( deepestElement.firstElementChild )
                
                  deepestElement =
                  
                    deepestElement
                    
                      .firstElementChild;
                      
                }
                
              } else if (
              
                wrapper instanceof Element
                
                ) {
                
                  // clone dom element to avoid reuse
                  
                  outerWrapperElement =
                  
                    wrapper
                    
                      .cloneNode ( false );
                      
                  deepestElement =
                  
                    outerWrapperElement;
                    
                  } else {
                  
                    const s =
                    
                      'Invalid wrapper type: must be HTML '
                      
                      +
                      
                      'string or DOM element';
                      
                    throw new Error (
                    
                      s
                      
                      );
                      
                    }
                    
            // insert and wrap
            
            {
            
              if ( element.parentNode )
              
                element
                
                  .parentNode
                  
                  .insertBefore (
                  
                    outerWrapperElement,
                    
                    element
                    
                    );
                    
              deepestElement
              
                .appendChild ( element );
                
              }
              
            wrappers.push (
            
              outerWrapperElement
              
              );
              
            },
            
        categoryUrlSlug = location
        
          .pathname
          
          .replace (
          
            url,
            
            ''
            
            ),
            
        wrap =
        
          ( target, wrapper = '<div>' ) => {
          
            const
            
              elements =
              
                typeof target === 'string'
                
                ?
                
                document
                
                  .querySelectorAll ( target )
                  
                :
                
                target instanceof NodeList
                
                ?
                
                target
                
                :
                
                [ target ];
                
            let wrappers = [ ];
              
            elements.forEach (
            
              e => wrapForeachCallback (
              
                e,
                
                wrapper,
                
                wrappers
                
                )
              
              );
              
            wrappers =
            
              wrappers.length === 1
              
              ?
              
              wrappers [ 0 ]
              
              :
              
              wrappers;
              
            return wrappers;
            
            },
            
        categoryForeachCallback =
        
          ( category, ulElement ) => {
          
            const hasChildren =
            
              category
              
                .children
                
                .length;
              
            let liElement = document
            
              .createElement (
              
                'template'
                
                );
                
            liElement.innerHTML = `
            
              <li class="children nested-category-breadcrumb-list-item">
              
                <a class="nested-category-breadcrumb-link" href="${
                
                  url
                  
                  }${
                  
                    category.fullSlug
                    
                    }">
                    
                  ${ category.displayName }
                  
                  </a>
                  
                <span class="breadcrumb-separator" aria-hidden="true">
                
                  |
                  
                  </span>
                  
                </li>
                
              `;
              
            liElement = liElement
            
              .content
              
              .firstElementChild;
              
            let element;
            
            if ( hasChildren ) {
            
              element = wrap (
              
                liElement
                
                  .querySelector (
                  
                    '.nested-category-breadcrumb-link'
                    
                    ),
                    
                `
                
                  <details open>
                  
                    <summary>
                    
                      </summary>
                      
                    </details>
                    
                  `
                  
                );
                
              if (
              
                ! options
                
                  .categoriesExpandedOnLoad
                  
                )
                
                element.removeAttribute (
                
                  'open'
                  
                  );
                  
              } else {
              
                liElement
                
                  .classList
                  
                  .remove ( 'children' );
                  
                element = liElement;
                
                }
                
            ulElement.append (
            
              liElement
              
              );
              
            // continue
            
            if ( ! hasChildren ) return;
            
            const childrenUlElement =
            
              document.createElement (
              
                'ul'
                
                );
                
            element.append (
            
              childrenUlElement
              
              );
              
            traverse (
            
              category.children,
              
              childrenUlElement
              
              );
              
            },
            
        traverse =
        
          ( categories, ulElement ) => {
          
            categories.forEach (
            
              e =>
              
                categoryForeachCallback (
                
                  e,
                  
                  ulElement
                  
                  )
              
              );
              
            };
            
      let
      
        element,
        
        selector;
        
      ulElement
      
        .classList
        
        .add ( codeKey );
        
      if ( options.hideIcon )
      
        ulElement.setAttribute (
        
          `data-${ codeKey }-hide-icon`,
          
          ''
          
          );
          
      categories
      
        .all
        
        .children
        
        =
        
        categories.categories;
        
      traverse (
      
        [ categories.all ],
        
        ulElement
        
        );
        
      // set initial active and open
      
      {
      
        selector = `[ href = "${
        
          url
          
          }${
          
            categoryUrlSlug
            
            }" ]`;
            
        element = ulElement
        
          .querySelector ( selector );
          
        element
        
          .classList
          
          .add ( 'active' );
          
        getParents ( element, 'details' )
        
          .forEach (
          
            e => e.setAttribute (
            
              'open',
              
              ''
              
              )
              
            );
            
        }
        
      // add categories mega
      
      {
      
        document
        
          .body
          
          .querySelector (
          
            [
            
              '.nested-category-children',
              
              '.nested-category-tree-wrapper'
              
              ]
              
              .join ( ', ' )
              
            )
            
          .after (
          
            document
            
              .importNode (
              
                ulElement,
                
                true
                
                )
                
            );
            
        }
        
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.pcc.callbacks || [ ] );
    
  } ) ( );
