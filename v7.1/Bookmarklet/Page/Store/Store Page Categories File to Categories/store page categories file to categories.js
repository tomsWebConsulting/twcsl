/* begin TWC Store Page Categories File to Categories */

  ( ( wndw ) => {
  
    // debugger;
    
    /*
    
      overlay modal dialog
      
      License         : < https://tinyurl.com/s872fb68 >
      
      Version         : 0.1.1
      
      SS Version      : 7.1
      
      Copyright       : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
      
      */
      
    const
    
      title = 'Overlay Modal Dialog',
      
      version = '0.1.1',
    
      s = `
      
        ${ title } v${ version }
        
        License < https://tinyurl.com/s872fb68 >
        
        © 2026 Thomas Creedon
        
        Tom's Web Consulting < http://www.tomsWeb.consulting >
        
        `
        
        .trim ( )
        
        .replace ( /^\s+/gm, '' );
        
    console.log ( s );
    
    wndw.twcOverlayModalDialog = ( ( ) => {
    
      const
      
        codeKey = 'twc-omd',
        
        dcmnt = wndw.document,
        
        overlayElement =
        
          dcmnt.createElement ( 'div' );
          
      overlayElement.id = codeKey;
    
      overlayElement.innerHTML = `
      
        <style>
        
          #${ codeKey } {
          
            align-items : center;
            background-color : rgb( 231, 231, 231, 0.6 );
            box-sizing : border-box;
            display : none;
            inset : 0px;
            justify-content : center;
            position : fixed;
            transition-duration : 230ms;
            z-index : 999999;
            
            }
            
          #${ codeKey } * {
          
            box-sizing : border-box;
            
            }
            
          #${ codeKey } .${ codeKey }-dialog {
          
            background-color : white;
            box-shadow :
              rgba( 0, 0, 0, 0.12 ) 0px 16px 64px 0px,
              rgba( 0, 0, 0, 0.08 ) 0px 0px 1px 0px;
            color : rgb( 14, 14, 14 );
            font-family : Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif;
            max-height : 100vh;
            max-width : 100vw;
            overflow : auto;
            
            text-rendering : optimizelegibility;
            -webkit-font-smoothing : antialiased;
            
            transition-duration : 230ms;
            
            max-height : 600px;
            
            }
            
          #${ codeKey } .${ codeKey }-title {
          
            font-size : 22px;
            font-weight : 600;
            line-height : 28px;
            margin : 33px;
            
            
            }
            
          #${ codeKey } .${ codeKey }-dialog-body {
          
            display : flex;
            flex-direction : column;
            gap : 4px;
            margin : 22px;
            
            }
            
          #${ codeKey } .${ codeKey }-message {
          
            display : block;
            font-size : 14px;
            font-weight : 400;
            line-height : 22px;
            
            }
            
          #${ codeKey } .${ codeKey }-progress {
          
            background : #eee;
            border-radius : 3px;
            display : none;
            height : 6px;
            margin-top : 10px;
            overflow : hidden;
            
            }
            
          #${ codeKey } .${ codeKey }-progress div {
          
            background : #3b82f6;
            height : 100%;
            transition : width 0.2s;
            width : 0%;
            
            }
            
          </style>
          
        <div class="${ codeKey }-dialog" role="dialog">
        
          <h1 class="${ codeKey }-title">
          
            </h1>
            
          <div class="${ codeKey }-dialog-body">
          
            <div class="${ codeKey }-message">
            
              </div>
              
            <div class="${ codeKey }-progress">
            
              <div>
              
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        `;
        
      dcmnt
      
        .body
        
        .appendChild (  overlayElement );
        
      const
      
        messageElement = overlayElement
        
          .querySelector (
          
            `.${ codeKey }-message `
            
            ),
            
        progressElement = overlayElement
        
          .querySelector (
          
            `.${ codeKey }-progress div`
            
            ),
            
        titleElement = overlayElement
        
          .querySelector (
          
            `.${ codeKey }-title`
            
            );
            
      return {
      
        close ( ) {
        
          overlayElement.remove ( );
          
          },
          
        setMessage ( message ) {
        
          messageElement.textContent = message;
          
          },
          
        setTitle ( text ) {
        
          titleElement.textContent = text;
          
          },
          
        showMessage ( message ) {
        
          overlayElement
          
            .style
            
            .display
            
            =
            
            'flex';
            
          messageElement.textContent = message;
          
          },
          
        showProgress ( percent ) {
        
          progressElement
          
            .style
            
            .display
            
            =
            
            'block';
            
          progressElement
          
            .style
            
            .width
            
            =
            
            percent
            
            +
            
            '%';
            
          },
          
        };
        
      } ) ( );
      
    } ) (
    
      window.top
      
      );
      
  ( async ( ) => {
  
    // debugger;
    
    /*
    
      store page categories file to categories
      
      License         : < https://tinyurl.com/s872fb68 >
      
      Version         : 0.1.0
      
      SS Version      : 7.1
      
      Note            : this code makes a calls to unofficial Squarespace APIs to
                        add categories to a store page
      
      Copyright       : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
      
      no user serviceable parts below
      
      */
      
    const
    
      title = 'Store Page Categories File to Categories',
      
      version = '0.1.0',
    
      s = `
      
        ${ title } v${ version }
        
        License < https://tinyurl.com/s872fb68 >
        
        © 2026 Thomas Creedon
        
        Tom's Web Consulting < http://www.tomsWeb.consulting >
        
        `
        
        .trim ( )
        
        .replace ( /^\s+/gm, '' );
        
    console.log ( s );
    
    const topWindow = window.top;
    
    let dcmnt = topWindow.document;
    
    const isEditor = dcmnt
    
      .documentElement
      
      .classList
      
      .contains ( 'squarespace-damask' );
      
    if ( ! isEditor ) {
    
      const s = `
      
        TWC ${ title }
        
        Please log in to your Squarespace site.
        
        `
        
        .trim ( )
        
        .replace ( /^ +/gm, '' );
        
      alert ( s );
      
      return; // bail if not logged in
      
      }
      
    const siteFrameElement = dcmnt
    
      .querySelector (
      
        'iframe[ data-testid = "sqs-site-frame" ]'
        
        );
        
    dcmnt = siteFrameElement
    
      ?.contentDocument;
      
    if ( ! dcmnt ) {
    
      const s = `
      
        TWC ${ title }
        
        Error : can not find the site frame.
        
        `
        
        .trim ( )
        
        .replace ( /^ +/gm, '' );
        
      alert ( s );
      
      return; // bail if no site frame
      
      }
      
    const
    
      wndw = siteFrameElement
      
        .contentWindow,
        
      context = wndw
      
        .Static
        
        .SQUARESPACE_CONTEXT,
        
      isStorePage = context
      
        .collection
        
        ?.type
        
        ===
        
        13;
        
    if ( ! isStorePage ) {
    
      const s = `
      
        ${ title }
        
        This is not a Store Page.
        
        `
        
        .trim ( )
        
        .replace ( /^ +/gm, '' );
        
      alert ( s );
      
      return; // bail if not store page
      
      }
      
    const
    
      codeKey = 'twc-spcftc',
      
      collectionId = context.collectionId,
      
      safeFetch =
      
        async ( url, options = { } ) => {
      
          const response =
          
            await fetch ( url, options );
            
          if ( ! response.ok ) {
          
            throw new Error (
            
              `${
              
                codeKey
                
                } network response was not ok ${
                
                  response.statusText
                  
                  }`
                  
              );
              
            }
            
          return response;
          
        };
        
    let
    
      categories,
      
      url = `/api/product-content-service/products/${
      
        collectionId
        
        }/categories/tree`;
        
    topWindow
    
      .twcOverlayModalDialog
      
      .setTitle (
      
        `TWC ${ title }`
        
        );
        
    try {
    
      try {
      
        topWindow
        
          .twcOverlayModalDialog
          
          .showMessage (
          
            'Loading Store Page categories...'
            
            );
            
        const response =
        
          await safeFetch ( url );
          
        categories = await response.json ( );
        
        topWindow
        
          .twcOverlayModalDialog
          
          .showMessage (
          
            'Store Page categories loaded.'
            
            );
            
        } catch ( error ) {
        
          const s = `
          
            ${
            
              codeKey
              
              }
              
            there has been a problem with your
            
            fetch get operation, ${
            
              error
              
              }.
              
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          console.error ( s );
          
          throw error;
          
          }
          
      const hasOnlyAllCategory =
      
        categories.numCategories === 1;
        
      if ( ! hasOnlyAllCategory ) {
      
        topWindow
        
          .twcOverlayModalDialog
          
          .close ( );
          
        const s = `
        
          ${ title }
          
          This code does not run on Store Pages that have user defined categories.
          
          `
          
          .trim ( )
          
          .replace ( /^ +/gm, '' );
          
        alert ( s );
        
        return; // bail if user categories
        
        }
        
      const
      
        allCategory = categories
        
          .categoryTree
          
          [ 0 ],
          
        allCategoryId = allCategory.id;
        
      try {
      
        const
        
          [ handle ] =
          
            await wndw.showOpenFilePicker ( ),
            
          file = await handle.getFile ( ),
          
          text = await file.text ( );
          
        categories = JSON
        
          .parse ( text )
          
          .categoryTree;
          
        } catch ( error ) {
        
          const isAbort =
          
            error.name === 'AbortError';
            
          if ( isAbort ) {
          
            topWindow
            
              .twcOverlayModalDialog
              
              .close ( );
              
            return;
            
            }
            
          const s = `
          
            ${
            
              codeKey
              
              } there was an error opening the
              
              file, ${
              
                error
                
                }.
                
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          console.error ( s );
          
          throw error;
          
          }
          
      const
      
        getCookieValue = ( key ) => {
        
          let v = '';
          
          try {
          
            v = dcmnt
            
              .cookie
              
              .split ( '; ' )
              
              .find (
              
                row =>
                
                  row.startsWith ( `${ key }=` )
                  
                )
                
              .split ( '=' ) [ 1 ];
              
            } catch ( error ) { }
            
          return v;
          
          },
          
        oldAllCategoryId = categories [ 0 ].id,
        
        websiteId = context.website.id,
        
        categoriesUrl = `/api/content-service/product/1.1/websites/${
        
          websiteId
          
          }/products/${
          
            collectionId
            
            }/categories`,
            
        crumb = getCookieValue ( 'crumb' ),
        
        addCategory = async ( category ) => {
        
          topWindow
          
            .twcOverlayModalDialog
            
            .setMessage (
            
              `Adding categories file ${
              
                category.displayName
                
                }
                
                category...`
                
              );
              
          const
          
            oldParentCategoryId =
            
              category.oldParentCategoryId,
              
            isParentAll =
            
              oldParentCategoryId
              
              ===
              
              oldAllCategoryId,
              
            json = JSON.stringify ( {
            
              displayName :
              
                category.displayName,
                
              parentCategoryId : isParentAll
              
                ?
                
                allCategoryId
                
                :
                
                categories
                
                  .filter ( c =>
                  
                    c.oldId
                    
                    ===
                    
                    oldParentCategoryId
                    
                    )
                    
                  [ 0 ]
                  
                  .id,
                  
              type : 'INTERIOR',
              
              pageRendering :
              
                'LIST_VIEW',
                
              displayIndex : isParentAll
              
                ?
                
                1
                
                :
                
                category.displayIndex
              
              } );
              
          try {
          
            const response = await safeFetch (
            
              categoriesUrl,
              
              {
              
                body : json,
                
                headers : {
                
                  Accept :
                  
                    'application/json, '
                    
                    +
                    
                    'text/plain, */*',
                    
                  'Content-Type' :
                  
                    'application/json',
                    
                  'X-Csrf-Token' : crumb
                  
                  },
                  
                method : 'POST'
                
                }
                
              );
            
            const c = await response.json ( );
            
            category.id = c.id;
            
            category.parentCategoryId =
            
              c.parentCategoryId;
              
            } catch ( error ) {
            
              const s = `
              
                ${
                
                  codeKey
                  
                  }
                  
                there has been a problem with
                
                your fetch post operation, ${
                
                  error
                  
                  }.
                  
                `
                
                .trim ( )
                
                .replace ( /\s+/gm, ' ' );
                
              console.error ( s );
              
              throw error;
              
              }
              
          },
        
        editCategory = async ( category ) => {
        
          topWindow
          
            .twcOverlayModalDialog
            
            .setMessage (
            
              `Editing category ${
              
                category.displayName
                
                }
                
                ...`
                
              );
              
          const
          
            json = JSON.stringify ( {
            
              childrenMenuHidden :
              
                category.childrenMenuHidden,
                
              displayIndex :
              
                category.displayIndex,
              
              displayName :
              
                category.displayName,
                
              menuHidden :
              
                category.menuHidden,
                
              orderedItemIds :
              
                category.orderedItemIds,
                
              pageRendering :
              
                category.pageRendering,
                
              parentCategoryId :
              
                category.parentCategoryId,
                
              shortSlug :
              
                category.shortSlug
                
              } ),
              
            url = `${
            
              categoriesUrl
              
              }/${
              
                category.id
                
                }`;
                
          try {
          
            const response = await safeFetch (
            
              url,
              
              {
              
                body : json,
                
                headers : {
                
                  Accept :
                  
                    'application/json, '
                    
                    +
                    
                    'text/plain, */*',
                    
                  'Content-Type' :
                  
                    'application/json',
                    
                  'X-Csrf-Token' : crumb
                  
                  },
                  
                method : 'PUT'
                
                }
                
              );
            
            } catch ( error ) {
            
              const s = `
              
                ${
                
                  codeKey
                  
                  }
                  
                there has been a problem with
                
                your fetch post operation, ${
                
                  error
                  
                  }.
                  
                `
                
                .trim ( )
                
                .replace ( /\s+/gm, ' ' );
                
              console.error ( s );
              
              throw error;
              
              }
              
          };
          
      categories = categories
      
        .filter ( c => c.type !== 'ROOT' )
        
        .map ( c => {
        
          c.oldId = c.id;
          
          c.oldParentCategoryId =
          
            c.parentCategoryId;
            
          return c;
          
          } );
          
      let addCategories = categories
      
        .filter ( c =>
        
          c.oldParentCategoryId
          
          ===
          
          oldAllCategoryId
          
          )
          
        .reverse ( );
        
      for ( c of addCategories )
      
        await addCategory ( c );
        
      addCategories = categories
      
        .filter ( c =>
        
          c.oldParentCategoryId
          
          !==
          
          oldAllCategoryId
          
          );
        
      for ( c of addCategories )
      
        await addCategory ( c );
        
      const editCategories = categories
      
        .filter ( c =>
        
          c.childrenMenuHidden
          
          ||
          
          c.menuHidden
          
          ||
          
          c.pageRendering === 'UNRESOLVABLE'
          
          );
        
      for ( c of editCategories )
      
        await editCategory ( c );
        
      topWindow
      
        .twcOverlayModalDialog
        
        .close ( );
        
      {
      
        const s = `
        
          TWC ${ title }
          
          The categories file categories have been added to this Store Page.
          
          `
          
          .trim ( )
          
          .replace ( /^ +/gm, '' );
          
        alert ( s );
        
        }
        
      } catch ( error ) {
      
        twcOverlayModalDialog.close ( );
        
        const s = `
        
          ${
          
            codeKey
            
            }
            
          an error occurred, ${
          
            error
            
            }.
            
          `
          
          .trim ( )
          
          .replace ( /\s+/gm, ' ' );
          
        console.error ( s );
        
      }
      
    } ) ( );
    
  /* end TWC Store Page Categories File to Categories */
