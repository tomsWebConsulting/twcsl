/*!

  store page list product marks to badges
  
  License         : < https://tinyurl.com/s872fb68 >
  
  Version         : 0.3.0
  
  SS Version      : 7.1
  
  Products V2
  Compatible      : Yes
  
  Fluid
  Engine
  Compatible      : Not Applicable
  
  Dependencies    : Page Tags Cache < https://tinyurl.com/4frfus4a >
  
  Note            : this code is comprised of a style and script tag. both are
                    needed for the full effect to work
  
  Copyright       : 2023-2025 Thomas Creedon
                    
                    Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  */
  
( ( ) => {

  const
  
    version = '0.3.0',
    
    s = `
    
      Store Page List Product Marks To Badges v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2023-2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  } ) ( );
  
// initialize twc module

window.twc = ( ( self ) => self ) ( window.twc || { } );

// initialize twc ptc sub-module

twc.ptc = ( ( self ) => self ) ( twc.ptc || { } );

// initialize twc ptc callbacks sub-module

twc.ptc.callbacks = ( ( self ) => {

  const callback = ( tags ) => {
  
    const isList
    
      =
      
      !
      
      Static
      
        .SQUARESPACE_CONTEXT
        
        .item
        
        ?.id;
        
    if ( ! isList ) return; // bail if not list
    
    let
    
      match,
      
      selector = '.product-list .product-list-container';
      
    const
    
      codeKey = 'twc-splpmtb',
      
      cssVariablePrefix = `--${ codeKey }-`,
      
      forEachCallback = ( element ) => {
        
        const
        
          productMarkBadgeAdd = ( element ) => {
          
            const
            
              text = element
              
                .textContent
                
                .trim ( ),
                
              hasMatch = !! match.length,
              
              isMatch = hasMatch && match.includes ( text );
              
            if ( hasMatch && ! isMatch ) return; // bail if not match
            
            element
            
              .classList
              
              .add ( `${ codeKey }-hide` );
              
            ulElement
            
              .insertAdjacentHTML (
              
                'beforeend',
                
                `
                
                  <li>
                  
                    ${ text }
                    
                    </li>
                    
                  `
                  
                );
              
            },
            
          selector = `.${ codeKey }-item`;
          
        let ulElement = element
          
          .querySelector ( selector );
        
        if ( ulElement ) return; // continue
        
        ulElement = document
        
          .createElement ( 'div' );
          
        ulElement
        
          .innerHTML
          
          =
          
          `
          
            <ul class="${ codeKey }-item">
            
              </ul>
              
            `;
          
        ulElement = ulElement
        
          .firstElementChild;
          
        element
        
          .querySelectorAll ( '.product-mark' )
          
          .forEach ( productMarkBadgeAdd );
          
        const hasChildren = ulElement
        
          .childElementCount;
          
        if ( ! hasChildren ) return; // continue
        
        element
          
          .querySelector ( '.product-list-image-wrapper' )
          
            .append ( ulElement );
            
        },
        
      getCSSVariable = ( element, variableName ) => {
      
        const value
        
          =
          
          getComputedStyle ( element )
          
            .getPropertyValue ( variableName );
            
        return value;
        
        },
        
      listContainerElement = document
      
        .body
        
        .querySelector ( selector ),
        
      listContainerElementStyle = listContainerElement
      
        .style,
        
      mapCallback = ( element ) => {
        
        const
        
          selector = '.product-list .product-list-item',
          
          listItemElement = element
          
            .closest ( selector );
            
        if ( listItemElement )
        
          element = listItemElement;
          
        return element;
        
        },
        
      setProperties = ( elementStyle, map ) => {
      
        Object
        
          .entries ( map )
          
          .forEach (
          
            ( [ key, value ] ) => elementStyle.setProperty ( key, value )
            
            );
            
        },
        
      uniqueSort = ( elements ) => {
      
        elements = [
        
          ...
          
          new Set ( elements )
          
          ]
          
          .sort (
          
            ( a, b ) => a.compareDocumentPosition ( b ) & 2 ? 1 : -1
            
            );
            
        return elements;
        
        };
        
    selector = [
    
      '.product-list .product-list-item .product-mark',
      
      `.product-list .product-list-item[ class*="tag-${ codeKey }-" ]`
      
      ]
      
      .join ( ', ' );
      
    // design
    
    {
    
      const
      
        position = getCSSVariable (
        
          listContainerElement,
          
          `${ cssVariablePrefix }position`,
          
          ),
          
        shape = getCSSVariable (
        
          listContainerElement,
          
          `${ cssVariablePrefix }shape`,
          
          ),
          
        shapeSize = getCSSVariable (
        
          listContainerElement,
          
          `${ cssVariablePrefix }shape-size`,
          
          ),
          
        inset = getCSSVariable (
        
          listContainerElement,
          
          `${ cssVariablePrefix }inset`,
          
          ),
          
        insetSpace = getCSSVariable (
        
          listContainerElement,
          
          `${ cssVariablePrefix }inset-space`,
          
          );
          
      let [
      
        bottom,
        
        left,
        
        right,
        
        top
        
        ]
        
        =
        
        Array ( 4 )
        
          .fill ( 0 );
          
      switch ( inset ) {
      
        case 'dock-horizontally' :
        
          bottom = top = insetSpace;
          
          break;
          
        case 'dock-vertically' :
        
          left = right = insetSpace;
            
          break;
          
        case 'floating' :
        
          bottom = left = right = top = insetSpace;
          
          break;
          
        }
        
      switch ( position ) {
      
        case 'bottom-center' :
        case 'bottom-left' :
        case 'bottom-right' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }bottom`, bottom );
            
          break;
          
        case 'center-left' :
        case 'center-right' :
        
          setProperties (
          
            listContainerElementStyle,
            
            {
            
              [ `${ cssVariablePrefix }top` ] : '50%',
              
              [ `${ cssVariablePrefix }y` ] : '-50%'
              
              }
              
            );
          
          break;
          
        case 'top-center' :
        case 'top-left' :
        case 'top-right' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }top`, top );
            
          break;
          
        }
        
      switch ( position ) {
      
        case 'bottom-center' :
        
          setProperties (
          
            listContainerElementStyle,
            
            {
            
              [ `${ cssVariablePrefix }left` ] : '50%',
              
              [ `${ cssVariablePrefix }x` ] : '-50%'
              
              }
              
            );
          
          break;
          
        case 'bottom-left' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }left`, left );
            
          break;
          
        case 'bottom-right' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }right`, right );
            
          break;
          
        case 'center' :
        
          setProperties (
          
            listContainerElementStyle,
            
            {
            
              [ `${ cssVariablePrefix }left` ] : '50%',
              
              [ `${ cssVariablePrefix }top` ] : '50%',
              
              [ `${ cssVariablePrefix }x` ] : '-50%',
              
              [ `${ cssVariablePrefix }y` ] : '-50%'
              
              }
              
            );
          
          break;
          
        case 'center-left' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }left`, left );
            
          break;
          
        case 'center-right' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }right`, right );
            
          break;
          
        case 'top-center' :
        
          setProperties (
          
            listContainerElementStyle,
            
            {
            
              [ `${ cssVariablePrefix }left` ] : '50%',
              
              [ `${ cssVariablePrefix }top` ] : 0,
              
              [ `${ cssVariablePrefix }x` ] : '-50%',
              
              [ `${ cssVariablePrefix }y` ] : 0
              
              }
              
            );
          
        case 'top-left' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }left`, left );
              
          break;
          
        case 'top-right' :
        
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }right`, right );
            
          break;
          
        }
        
      // shape
      
      {
      
        let hasShape = [
        
          'circle',
          
          'square'
          
          ]
          
          .includes ( shape );
          
        if ( hasShape ) {
        
          setProperties (
          
            listContainerElementStyle,
            
            {
            
              [ `${ cssVariablePrefix }height` ] : shapeSize,
              
              [ `${ cssVariablePrefix }width` ] : shapeSize
              
              }
              
            );
            
          listContainerElementStyle
          
            .setProperty ( `${ cssVariablePrefix }border-radius`, '100%' );
            
          }
          
        }
        
      }
      
    // match
    
    {
    
      match = getCSSVariable (
      
        listContainerElement,
        
        `${ cssVariablePrefix }tag-match`,
        
        );
        
      match =
      
        match
        
        [ 0 ]
        
        !==
        
        '['
        
        ?
        
        match
        
          .trim ( )
          
          .split ( / *, */ )
          
        :
        
        [ ];
        
      }
      
    uniqueSort (
    
      [
      
        ...
        
        document
        
          .body
          
          .querySelectorAll ( selector )
          
        ]
        
        .map ( mapCallback )
        
      )
      
      .forEach ( forEachCallback );
      
    };
    
  self.push ( callback );
  
  return self;
  
  } ) ( twc.ptc.callbacks || [ ] );
