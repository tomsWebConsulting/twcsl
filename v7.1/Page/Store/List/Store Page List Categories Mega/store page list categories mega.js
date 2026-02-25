/*!

  store page list categories mega
  
  License           : < https://tinyurl.com/s872fb68 >
  
  Version           : 0.6.0
  
  SS Version        : 7.1
  
  Products V2
  Compatible        : Yes
  
  Fluid
  Engine
  Compatible        : Not Applicable
  
  Dependencies      : page categories to module
                      
                      < https://tinyurl.com/yc8cp3bn >
  
  Notes             : this code is not active when Categories Style is set to
                      DROPDOWN
                      
                      in the editor when you change the Menu Placement
                      (SIDE/TOP) you will see Squarespace's default style of
                      categories until you save the Store Page. if for some
                      reason the categories don't update after saving the
                      Store Page, refresh the Store Page
  
  Copyright         : 2023-2026 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  no user serviceable parts below
  
  */
  
( ( ) => {

  const
  
    version = '0.6.0',
    
    s = `
    
      Store Page List Categories Mega v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2023-2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^ +/gm, '' );
      
  console.log ( s );
  
  const isStorePage = Static
  
    .SQUARESPACE_CONTEXT
    
    .collection
    
    ?.type
    
    ===
    
    13;
    
  // bail if not store page
  
  if ( ! isStorePage ) return;
  
  const isList
  
    =
    
    !
    
    Static
    
      .SQUARESPACE_CONTEXT
      
      .item
      
      ?.id;
      
  // bail if not list page
  
  if ( ! isList ) return;
  
  // initialize twc module
  
  window.twc =
  
    ( ( self ) => self )
    
    ( window.twc || { } );
    
  // initialize twc pctm sub-module
  
  twc.pctm =
  
    ( ( self ) => self )
    
    ( twc.pctm || { } );
    
  const categories = twc
  
    .pctm
    
    [
    
      Static
      
        .SQUARESPACE_CONTEXT
        
        .collection
        
        .id
        
      ];
      
  // bail if no categories
  
  if ( ! categories ) return;
  
  // globals
  
  {
  
    // initialize twc splcc sub-module
    
    twc.splcc =
    
      ( ( self ) => self )
      
      ( twc.splcc || { } );
      
    }
    
  const dclCallback = ( ) => {
  
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
      
      selectorKey = '.product-list';
      
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
        
      if ( twc.data.hideShow [ selectorKey ] === undefined )
      
        twc
        
          .data
          
          .hideShow
          
          [ selectorKey ]
          
          =
          
          [ ];
          
      twc
      
        .data
        
        .hideShow
        
        [ selectorKey ]
        
        .push ( `--${ codeKey }` );
        
      }
      
    {
    
      const
      
        getCategoryTree =
        
          ( categoriesFlatPreorderList ) => {
          
            const
            
              idCategoryMap =
              
                Object.create ( null ),
                
              categories = [ ];
              
            categoriesFlatPreorderList
            
              .forEach (
              
                c =>
                
                  idCategoryMap [ c.id ] =
                  
                    { ... c, children : [ ] }
                    
                );
                
            categoriesFlatPreorderList
            
              .forEach (
              
                c => {
                
                  if ( c.parentCategoryId )
                  
                    idCategoryMap
                    
                      [ c.parentCategoryId ]
                      
                      .children
                      
                      .push (
                      
                        idCategoryMap [ c.id ]
                        
                        );
                        
                    else
                    
                      categories.push (
                      
                        idCategoryMap [ c.id ]
                        
                        );
                        
                  }
                  
                );
                
            return categories;
            
            },
            
        getCategoryUrlSlug = ( ) => {
        
          const slug = location
          
            .pathname
            
            .replace (
            
              url,
              
              ''
              
              );
              
          return slug;
          
          },
          
        getParents = ( element, selector ) => {
        
          const parents = [ ];
          
          let current = element
          
            .parentElement;
            
          while ( current ) {
          
            if ( ! selector || current.matches ( selector ) )
            
              parents.push ( current );
              
            current = current.parentElement;
            
            }
            
          return parents;
          
          },
          
        options = codeKey
        
          .split ( '-' )
          
          .reduce (
          
            ( obj, key ) => obj?.[ key ],
            
            window ),
            
        traverse = ( categories, ulElement ) => {
        
          const callback = ( category ) => {
          
            const hasChildren = category
            
              .children
              
              .length;
            
            let liElement = document
            
              .createElement ( 'template' );
              
            liElement.innerHTML = `
            
              <li class="children nested-category-breadcrumb-list-item">
              
                <a class="nested-category-breadcrumb-link" href="${ url }${ category.fullSlug }">
                
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
                
              if ( ! options.categoriesExpandedOnLoad )
              
                element
                
                  .removeAttribute ( 'open' );
                  
              } else {
              
                liElement
                
                  .classList
                  
                  .remove ( 'children' );
                  
                element = liElement;
                
                }
                
            ulElement
            
              .append ( liElement );
              
            if ( ! hasChildren ) return; // continue
            
            const childrenUlElement = document
            
              .createElement ( 'ul' )
              
            element.append ( childrenUlElement );
            
            traverse ( category.children, childrenUlElement );
            
            }
            
          categories
          
            .forEach ( callback );
            
          },
          
        ulElement = document
        
          .createElement ( 'ul' ),
          
        url = Static
           
          .SQUARESPACE_CONTEXT
          
          .collection
          
          .fullUrl,
          
        windowWidth = document
        
          .documentElement
          
          .clientWidth,
          
        wrap = ( target, wrapper = '<div>' ) => {
        
          const
          
            callback = ( element ) => {
            
              let
              
                deepestElement,
          
                outerWrapperElement;
                
              if ( typeof wrapper === 'string' ) {
              
                // parse html string into dom
                
                {
                
                  const element = document
                  
                    .createElement ( 'template' );
                    
                  element.innerHTML = wrapper
                  
                    .trim ( );
                    
                  outerWrapperElement = element
                  
                    .content
                    
                    .firstElementChild;
                    
                  // bail if no outer wrapper element
                  
                  if ( ! outerWrapperElement ) return;
                  
                  }
                  
                // deepest element
                
                {
                
                  deepestElement = outerWrapperElement;
                  
                  while ( deepestElement.firstElementChild )
                  
                    deepestElement = deepestElement.firstElementChild;
                    
                  }
                  
                } else if ( wrapper instanceof Element ) {
                
                  // clone dom element to avoid reuse
                  
                  outerWrapperElement = wrapper
                  
                    .cloneNode ( false );
                    
                  deepestElement = outerWrapperElement;
                  
                  } else {
                  
                    const s = 'Invalid wrapper type: must be HTML '
                    
                      +
                      
                      'string or DOM element';
                      
                    throw new Error ( s );
                    
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
                
              wrappers
              
                .push ( outerWrapperElement );
                
              },
              
            elements
            
              =
              
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
            
          elements.forEach ( callback );
          
          wrappers = wrappers
          
            .length
            
            ===
            
            1
            
            ?
            
            wrappers [ 0 ]
            
            :
            
            wrappers;
            
          return wrappers;
          
          },
          
        categoryUrlSlug = getCategoryUrlSlug ( );
        
      let
      
        element,
        
        selector;
        
      ulElement
      
        .classList
        
        .add ( codeKey );
        
      if ( options.hideIcon )
      
        ulElement
        
          .setAttribute ( `data-${ codeKey }-hide-icon`, '' );
          
      traverse (
      
        getCategoryTree ( categories ),
        
        ulElement
        
        );
        
      // set initial active and open
      
      {
      
        selector = `[ href="${ url }${ categoryUrlSlug }" ]`;
        
        element = ulElement
        
          .querySelector ( selector );
          
        element
        
          .classList
          
          .add ( 'active' );
          
        getParents ( element, 'details' )
        
          .forEach ( e => e.setAttribute ( 'open', '' ) );
          
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
            
          .after ( ulElement );
          
        }
        
      }
      
    // hide show unregister
    
    {
    
      twc
      
        .data
        
        .hideShow
        
        [ selectorKey ]
        
        .pop ( `--${ codeKey }` );
        
      const
      
        l = twc
        
          .data
          
          .hideShow
          
          [ selectorKey ]
          
          .length,
          
        productListElement = document
        
          .querySelector ( '.product-list' );
          
      if ( ! l )
      
        productListElement
        
          .style
          
          .setProperty ( '--twc-product-list-visibility', 'visible' );
          
      }
      
    };
    
  document.addEventListener (
  
    'DOMContentLoaded',
    
    dclCallback
    
    );
    
  } ) ( );
