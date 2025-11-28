( async ( ) => {

  /*
  
    store page category reorder
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.4.0
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'TWC Store Page Category Reorder',
    
    version = '0.4.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const isSiteReload = true;
  
  try {
  
    Static
    
      .SQUARESPACE_CONTEXT
      
      .templateVersion;
      
    }
    
    catch {
    
      const s = `${ title }\n\nThis appears not to be a Squarepace site.`;
      
      alert ( s );
      
      return;
      
      }
      
  const isEditor = document
  
    .documentElement
    
    .classList
    
    .contains ( 'squarespace-damask' );
    
  const
  
    iframeElement = document
    
      .body
      
      .querySelector ( 'iframe#sqs-site-frame' );
      
    dcmnt = iframeElement
    
      ?.contentDocument;
      
  if ( ! dcmnt ) {
  
    const s = `${ title }\n\nPlease log in to your Squarespace site.`;
    
    alert ( s );
    
    return; // bail if not logged in
    
    }
    
  const
  
    iframeSquarespaceContext = iframeElement
    
      .contentWindow
      
      .Static
      
      .SQUARESPACE_CONTEXT,
      
    collection = iframeSquarespaceContext
    
      .collection;
      
    isStorePage = collection
    
      ?.type
      
      ===
      
      13;
      
  if ( ! isStorePage ) {
  
    const s = `${ title }\n\nThis is not a Store page.`;
    
    alert ( s );
    
    return; // bail if not store page
    
    }
    
  const isTagPage = ( ( ) => {
  
    const
    
      p = new URLSearchParams ( location.search ),
      
      is = p.has ( 'tag' );
      
    return is;
    
    } ) ( );
    
  // bail if tag page
  
  if ( isTagPage ) {
  
    const s = `${ title }\n\nThis is a Store tag page, not a category page`;
    
    alert ( s );
    
    return;
    
    }
    
  const
  
    codeKey = 'twc-spcr',
    
    collectionId = iframeSquarespaceContext
    
      .collectionId,
      
    elementsToLoad = [
    
      {
      
        tag : 'link',
        
        attributes : {
        
          href : '//cdn.datatables.net/2.2.2/css/dataTables.dataTables.min.css',
          
          rel : 'stylesheet',
          
          type : 'text/css'
          
          }
          
        },
        
      {
      
        tag : 'link',
        
        attributes : {
        
          href : '//cdn.datatables.net/buttons/3.2.2/css/buttons.dataTables.min.css',
          
          rel : 'stylesheet',
          
          type : 'text/css'
          
          }
          
        },
        
      {
      
        tag : 'style',
        
        text : `
        
          #${ codeKey }-overlay {
          
            --${ codeKey }-space : 30px;
            
            }
            
          #${ codeKey }-overlay,
          #${ codeKey }-wrapper
          
            {
            
              align-items : center;
              display : flex;
              flex-direction : column;
              
              }
              
          #${ codeKey }-overlay {
          
            background-color : rgba( 0, 0, 0, 0.5 );
            height : 100%;
            justify-content : center;
            left : 0;
            position : fixed;
            top : 0;
            width : 100%;
            z-index : 9999;
            
            }
            
          #${ codeKey }-wrapper {
          
            background-color : white;
            height : 75%;
            min-height : 480px;
            min-width : 640px;
            padding : var( --${ codeKey }-space );
            position : relative;
            width : 75%;
            
            }
            
          #${ codeKey }-wrapper > #${ codeKey }-table {
          
            display : none;
            
            }
            
          #${ codeKey }-cancel-button {
          
            border-bottom : 1px solid black;
            border-left : 1px solid black;
            cursor : pointer;
            font-size : 24px;
            height : calc( var( --twc-spcar-space ) + 0.5em );
            padding : 0.5em;
            position : absolute;
            right : 0;
            top : 0;
            transition : transform 0.2s, background-color 0.2s;
            width : calc( var( --twc-spcar-space ) + 0.5em );
            
            }
            
          #twc-spcar-cancel-button:hover {
          
            color : red;
            transform : scale( 1.1 ) translate( -2px, 2px );
            
            }
            
          #twc-spcar-cancel-button:active {
          
            background-color : rgba( 0, 0, 0, 0.1 );
            transform : scale( 0.9 ) translate( 2px, -3px );
            
            }
            
          #${ codeKey }-title {
          
            font-size : xx-large;
            margin-bottom : var( --${ codeKey }-space );
            
            }
            
          #${ codeKey }-message {
          
            box-shadow : inset 0 0 0 9999px rgba( var( --dt-row-stripe ),
                         var( --dt-row-stripe-alpha ) );
            font-size : x-large;
            line-height : normal;
            margin : var( --twc-spcr-space );
            margin-top : 0;
            padding : var( --${ codeKey }-space );
            text-align : center;
            width : calc( 100% - var( --twc-spcr-space ) * 2 );
            
            }
            
          #${ codeKey }-table_wrapper {
          
            display : flex;
            flex-direction : column;
            flex : 1 1 auto;
            min-height : 0;
            width : 100%;
            
            }
            
          #${ codeKey }-table_wrapper .dt-layout-table {
          
            overflow-y : scroll;
            
            }
            
          #${ codeKey }-table_wrapper .dt-layout-full {
          
            height : 100%;
            
            }
            
          #${ codeKey }-table_wrapper table tr {
          
            white-space : nowrap ;
               
            }
            
          #${ codeKey }-table_wrapper .dt-button[ disabled ] {
          
            opacity : 0.5;
            pointer-events : none;
               
            }
            
          #${ codeKey }-table_wrapper table.dataTable td.dt-empty {
          
            text-align : unset;
            
            }
            
          #${ codeKey }-table_wrapper input[ type="checkbox" ] {
          
            cursor : default;
            pointer-events : none;
            
            }
            
          `
          
        },
        
      {
      
        isAsync : false,
        
        tag : 'script',
        
        attributes : {
        
          src : 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
          
          type : 'text/javascript'
          
          }
          
        },
        
      {
      
        tag : 'script',
        
        attributes : {
        
          src : '//cdn.datatables.net/2.2.2/js/dataTables.min.js',
          
          type : 'text/javascript'
          
          }
          
        },
        
      {
      
        tag : 'script',
        
        attributes : {
        
          src : '//cdn.datatables.net/buttons/3.2.2/js/dataTables.buttons.min.js',
          
          type : 'text/javascript'
          
          }
          
        }
        
      ],
      
    getCollectionCategoriesUrl
    
      =
      
      `/api/product-content-service/products/${
      
        collectionId
        
        }/categories/tree`,
        
    getCollectionTagsUrl =
    
      `/api/commondata/GetCollectionTags?collectionId=${ collectionId }`,
      
    getCookieValue = ( key ) => {
    
      let v = '';
      
      try {
      
        v = document.cookie
        
        .split ( '; ' )
        
        .find ( row => row.startsWith ( `${ key }=` ) )
        
        .split ( '=' ) [ 1 ];
        
        } catch ( error ) { }
        
      return v;
      
      },
      
    getJsonObject = async ( url ) => {
    
      try {
      
        const response = await fetch ( url );
        
        if ( ! response.ok ) {
        
          const s = `
          
            ${ codeKey } network response was not ok ${ response.statusText }
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          throw new Error ( s );
          
          }
          
        const obj = await response.json ( );
        
        return obj;
        
        } catch ( error ) {
        
          const s = `
          
            ${ codeKey } there has been a problem with your fetch get operation,
            
            ${ error }.
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          console.error ( s );
          
          }
          
      },
      
    getProductsPage = async ( url, products = [ ] ) => {
    
      const obj = await getJsonObject ( url );
      
      products.push ( ... obj.items );
      
      $messageElement
      
        .text ( `Loaded ${ products.length } products...` );
        
      if ( obj?.pagination?.nextPageUrl ) {
      
        const
        
          url = `${
          
            obj
            
              .pagination
              
              .nextPageUrl
              
            }&${ urlSuffix }`,
            
          promise = getProductsPage ( url, products );
          
        return promise;
        
        }
        
      return products;
      
      },
      
    getProductPages = async ( url ) => {
    
      const promise = await getProductsPage ( url );
      
      return promise;
      
      },
      
    loadElement = ( e ) => {
    
      const
      
        callback = ( resolve, reject ) => {
        
          const element = document
          
            .createElement ( e.tag );
            
          element
          
            .setAttribute ( `data-${ codeKey }`, '' );
            
          if ( e.attributes )
          
            for ( const attribute in e.attributes ) {
            
              element
              
                .setAttribute (
                
                  attribute,
                  
                  e
                  
                    .attributes
                    
                    [ attribute ]
                    
                  );
                  
              }
              
          if ( e.text )
          
            element.innerHTML = e.text;
            
          if ( e.tag === 'script' && ! e.isAsync ) {
          
            element.onerror = reject;
            
            element.onload = resolve;
            
            } else
            
              resolve ( );
              
          document
          
            .head
            
            .appendChild ( element );
            
          },
          
        promise = new Promise ( callback );
        
      return promise;
      
      },
      
    loadElementsSequentially = async ( elements ) => {
    
      for ( const element of elements ) {
      
        await loadElement ( element );
        
        }
        
      },
    
    messageElementId = `${ codeKey }-message`,
    
    pathname = dcmnt
    
      .location
      
      .pathname,
      
    setJson = async ( setJsonOptions ) => {
    
      const
      
        options = {
        
          body : setJsonOptions.body,
          
          headers : {
          
            Accept : 'application/json, text/plain, */*',
            
            'Content-Type' : setJsonOptions.contentType,
            
            'X-Csrf-Token' : crumb
            
            },
            
          method : setJsonOptions.method
          
          };
          
        try {
        
          const response = await fetch ( setJsonOptions.url, options );
          
          if ( ! response.ok ) {
          
            const s = `
            
              ${ codeKey } network response was not ok ${ response.statusText }
              
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
            throw new Error ( s );
            
            }
            
          const obj = await response.json ( );
          
          return obj;
          
          } catch ( error ) {
          
            const s = `
            
              ${ codeKey } there has been a problem with your fetch operation,
              
              ${ error }
              
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
              console.error ( s );
              
              throw error;
              
            }
            
      },
      
    setJsonInChunks = async ( productIds, setJsonOptions ) => {
    
      const
      
        chunkArray = ( array, size ) => {
        
          const chunks = [ ];
          
          for ( let i = 0; i < array.length; i += size )
          
            chunks
            
              .push (
              
                array
                
                  .slice ( i, i + size )
                  
                );
                
          return chunks;
          
          },
          
        chunkSize = 500,
        
        totalChunks = Math
        
          .ceil ( productIds.length / chunkSize ),
          
        chunks = chunkArray ( productIds, chunkSize )
        
          .reverse ( );
          
      for ( let i = 0; i < chunks.length; i++ ) {
      
        setJsonOptions
        
          .body
          
          =
          
          JSON
          
            .stringify (
            
              {
              
                itemIds : chunks [ i ],
                
                insertAtIndex : 0
                
                }
                
              );
              
        try {
        
          let s = `Saving reorder data ${ i + 1 } of ${ totalChunks }.`;
          
          $messageElement.text ( s );
          
          const responseData = await setJson ( setJsonOptions );
          
          s = `Successfully saved reorder data ${ i + 1 } of ${ totalChunks }.`;
          
          $messageElement.text ( s );
          
          } catch ( error ) {
          
            const s = `${ codeKey } error saving chunk ${ i + 1 } : `
            
              +
              
              `${ error }`;
              
            console.error ( s );
            
            // Handle error (e.g., retry logic or breaking the loop)
            
            break;
            
            }
            
        }
        
      },
      
    urlSuffix = 'format=json',
    
    crumb = getCookieValue ( 'crumb' ),
    
    html = `
    
      <div data-${ codeKey } id="${ codeKey }-overlay">
      
        <div id="${ codeKey }-wrapper">
        
          <button data-close="${ codeKey }-overlay" id="${ codeKey }-cancel-button">
          
            &times;
            
            </button>
            
          <h1 id="${ codeKey }-title">
          
            ${ title }
            
            </h1>
            
          <h2 id="${ messageElementId }">
          
            Initializing...
            
            </h2>
            
          <table id="${ codeKey }-table" class="display" style="width : 100%;">
          
            <thead>
            
                <th>
                
                  Product ID
                  
                  </th>
                  
                <th>
                
                  Natural Sort
                  
                  </th>
                  
                <th>
                
                  Product Name
                  
                  </th>
                  
                <th>
                
                  SKU
                  
                  </th>
                  
                <th>
                
                  Published On
                  
                  </th>
                  
                <th>
                
                  Updated On
                  
                  </th>
                  
                <th>
                
                  Added On
                  
                  </th>
                  
                <th>
                
                  Featured
                  
                  </th>
                  
                </tr>
                
              </thead>
              
            <tbody>
            
              </tbody>
              
            </table>
            
          </div>
          
        </div>
        
      `,
      
    url = pathname
    
      +
      
      `?${ urlSuffix }`;
      
  await loadElementsSequentially ( elementsToLoad );
  
  let $messageElement;
  
  // set up overlay element initial
  
  {
  
    document
    
      .body
      
      .insertAdjacentHTML ( 'beforeend', html );
      
    $messageElement = $( `#${ messageElementId }` );
    
    $messageElement.text ( 'All elements loaded.' );
    
    document
    
      .getElementById ( `${ codeKey }-cancel-button` )
      
      .addEventListener (
      
        'click',
        
        ( ) => {
        
          document
          
            .querySelectorAll ( `[ data-${ codeKey } ]` )
            
            .forEach ( e => e.remove ( ) );
            
          }
          
        );
        
    }
    
  Promise
  
    .all (
    
      [
      
        getJsonObject ( getCollectionCategoriesUrl ),
        
        getJsonObject ( getCollectionTagsUrl ),
        
        getProductPages ( url ),
        
        ]
        
      )
      
    .then ( ( [ categories, tagsAll, products ] ) => {
    
      const
      
        randomizeSortButtonTitle = 'Randomize Sort',
        
        saveButtonTitle = 'Save My Sort';
        
      let
      
        categoryDisplayName,
        
        categoryId,
        
        userSorted = false,
        
        $randomizeSortElement,
        
        $saveSortElement;
        
      // set categories
      
      categories = categories
      
        .categoryTree;
        
      // category meta information
      
      {
      
        const
        
          slug = pathname
          
            .replace (
            
              collection
              
                .fullUrl,
                
              ''
              
              ),
              
          category = categories
          
            .find ( e => e.fullSlug === slug );
            
        categoryDisplayName = category.displayName;
        
        categoryId = category.id;
        
        }
        
      // process tags all
      
      tagsAll = tagsAll
      
        .map ( o => o.name )
        
        .sort ( );
        
      const instructionsHtml = `
      
        Sort the products as desired, then click the
        
        <strong>
        
          ${ saveButtonTitle }
          
          </strong>
          
        button. Your sort order will be saved to the
        
        <strong>
        
          ${ categoryDisplayName }
          
          </strong>
          
        category of this Store page, and the site will reload.
        
        `;
        
      // add tag columns to overlay element
      
      {
      
        const callback = ( tag ) => {
        
          $( `#${ codeKey }-table thead tr` )
          
            .append ( `
            
              <th>
              
                ${ tag } (tag)
                
                </th>
                
              ` );
              
          };
          
        tagsAll.forEach ( callback );
        
        }
        
      // restructure products
      
      {
      
        const callback = ( item ) => {
        
          const
          
            callback = ( tag ) => {
            
              const i = tagsAll.indexOf ( tag );
              
              tags [ i ] = 'true';
              
              },
              
            tags = new Array ( tagsAll.length )
            
              .fill ( 'false' );
              
          let sku = item?.variants;
          
          if ( item.tags )
          
            item
            
              .tags
              
              .forEach ( callback );
              
          if ( sku && sku.length === 1 )
          
            sku = sku [ 0 ].sku;
            
            else
            
              sku = '';
              
          const array = [
          
            ...
            
            [
              
              item.id, // 0
              
              naturalSort++, // 1
              
              item.title, // 2
              
              sku, // 3
              
              new Date ( item.publishOn ) // 4
              
                .toISOString ( )
                
                .replace ( 'T', ' ' )
                
                .split ( '.' )
                
                [ 0 ],
                
              new Date ( item.updatedOn ) // 5
              
                .toISOString ( )
                
                .replace ( 'T', ' ' )
                
                .split ( '.' )
                
                [ 0 ],
                
              new Date ( item.addedOn ) // 6
              
                .toISOString ( )
                
                .replace ( 'T', ' ' )
                
                .split ( '.' )
                
                [ 0 ],
                
              String ( item.starred ) // 7, featured
              
              ],
              
            ... tags
            
            ];
            
          return array;
          
          };
          
        let naturalSort = 0;
        
        products = products.map ( callback );
        
        }
        
      // set up table
      
      {
      
        const table = $( `#${ codeKey }-table` )
        
          .DataTable (
          
            {
            
              buttons : [
              
                {
                
                  text : saveButtonTitle,
                  
                  action : ( e, dt, node, config ) => {
                  
                    const
                    
                      contentType = 'application/json',
                      
                      productIds = table
                        
                        .rows ( { search : 'applied' } )
                        
                        .data ( )
                        
                        .toArray ( )
                        
                        .map ( r => r [ 0 ] ),
                        
                      websiteId = Static
                      
                        .SQUARESPACE_CONTEXT
                        
                        .website
                        
                        .id,
                        
                      setJsonOptions = {
                      
                        body : null,
                         
                        contentType : 'application/json',
                        
                        insertAtIndex : 0,
                        
                        method : 'POST',
                        
                        url : '/api/content-service/product/1.1/websites/' +
                        
                          `${ websiteId }/products/${ collectionId }/` +
                          
                          `categories/${ categoryId }/reorder-items`
                          
                        };
                        
                    setJsonInChunks ( productIds, setJsonOptions )
                    
                      .then ( ( ) => {
                      
                        $messageElement
                        
                          .text ( 'Reloading site...' );
                          
                        if ( isSiteReload )
                        
                          location.reload ( );
                          
                        } );
                        
                    }
                    
                  },
                  
                {
                
                  extend : 'spacer'
                  
                  },
                  
                {
                
                  text : randomizeSortButtonTitle,
                  
                  action : ( e, dt, node, config ) => {
                  
                    $messageElement
                    
                      .text ( `Randomizing sort...` );
                      
                    const data = table
                    
                      .rows ( )
                      
                      .data ( )
                      
                      .toArray ( )
                      
                      .sort ( ( ) => Math.random ( ) - 0.5 );
                      
                    table
                    
                      .clear ( )
                      
                      .rows
                      
                      .add ( data )
                      
                      .draw ( );
                      
                    $messageElement.html ( instructionsHtml );
                    
                    }
                    
                  },
                  
                ],
                
              columnDefs : [
              
                {
                
                  targets : 0,
                  
                  visible : false
                  
                  },
                  
                {
                
                  targets : 1,
                  
                  visible : false,
                  
                  searchable : false
                  
                  },
                  
                {
                
                  targets : Array
                  
                    .from (
                    
                      { length : tagsAll.length + 1 },
                      
                      ( _, i ) => 7 + i
                      
                      ),
                      
                  searchable : false,
                  
                  render : ( data, type, row ) => {
                  
                    if ( type === 'display' ) {
                    
                      const html =  '<input' +
                      
                        ( data === 'true' ? ' checked' : '' ) +
                        
                        ' type="checkbox" />';
                        
                      return html
                      
                      }
                      
                    if ( type === 'sort' )
                    
                      data ? 1 : 0;
                      
                    return data;
                    
                    }
                    
                  }
                  
                ],
                
              initComplete : function ( ) {
              
                let selector =
                
                  `.dt-button:contains('${ randomizeSortButtonTitle }')`;
                  
                $randomizeSortElement = $( selector );
                
                $randomizeSortElement
                
                  .prop ( 'disabled', true );
                  
                selector = `.dt-button:contains('${ saveButtonTitle }')`;
                
                $saveSortElement = $( selector );
                
                $saveSortElement
                
                  .prop ( 'disabled', true );
                  
                },
                
              layout : {
              
                topStart : 'buttons'
                
                },
                
              order : [ ],
              
              pageLength : 200
              
              }
              
            );
            
        table
        
          .rows
          
          .add ( products )
          
          .draw ( );
          
        table
        
          .table ( )
          
          .header ( )
          
          .addEventListener (
          
            'click',
            
            ( ) => userSorted = true
            
            );
            
        // table on draw
        
        table.on (
        
          'draw.dt',
          
          ( ) => {
          
            const
            
              currentOrder = table.order ( ),
              
              hasNatural = currentOrder
              
                .some ( ( [ c ] ) => c === 1 );
                
            if ( userSorted && ! hasNatural ) {
            
              table
              
                .order ( [ ... currentOrder, [ 1, 'asc' ] ] )
                
                .draw ( false );
                
              userSorted = false;
              
              }
              
            }
            
          );
          
        }
        
      // set up overlay element, buttons and message
      
      {
      
        $saveSortElement
        
          .prop ( 'disabled', false );
          
        $randomizeSortElement
        
          .prop ( 'disabled', false );
          
        $messageElement.html ( instructionsHtml );
        
        }
        
      } )
      
  } ) ( );
