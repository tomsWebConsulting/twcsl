( ( ) => {

  /*
  
    store page category all reorder
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'TWC Store Page Category All Reorder',
    
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  try {
  
    Static.SQUARESPACE_CONTEXT.templateVersion;
    
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
      
  if ( dcmnt === undefined ) {
  
    const s = `${ title }\n\nPlease log in to your Squarespace site.`;
    
    alert ( s );
    
    return; // bail if not logged in
    
    }
    
  const isStorePage = dcmnt
  
    .querySelector ( 'body.collection-type-products' )
    
    !==
    
    null;
    
  if ( ! isStorePage ) {
  
    const s = `${ title }\n\nThis is not a Store page.`;
    
    alert ( s );
    
    return; // bail if not store page
    
    }
    
  const
  
    codeKey = 'twc-spcar',
    
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
            max-width : 50%;
            min-width : 640px;
            padding : var( --${ codeKey }-space );
            position : relative;
            
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
            margin-bottom : var( --${ codeKey }-space );
            padding : var( --${ codeKey }-space );
            text-align : center;
            
            }
            
          #${ codeKey }-table_wrapper {
          
            width : 100%;
            
            }
            
          #${ codeKey }-table_wrapper .dt-layout-table {
          
            height : 400px;
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
        
          rel : 'stylesheet',
          
          src : 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
          
          type : 'text/javascript'
          
          }
          
        },
        
      {
      
        tag : 'script',
        
        attributes : {
        
          rel : 'stylesheet',
          
          src : '//cdn.datatables.net/2.2.2/js/dataTables.min.js',
          
          type : 'text/javascript'
          
          }
          
        },
        
      {
      
        tag : 'script',
        
        attributes : {
        
          rel : 'stylesheet',
          
          src : '//cdn.datatables.net/buttons/3.2.2/js/dataTables.buttons.min.js',
          
          type : 'text/javascript'
          
          }
          
        }
        
      ],
      
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
      
    getJson = async ( url ) => {
    
      const options = {
      
        headers : {
        
          Accept: 'application/json, text/plain, */*'
          
          }
          
        };
        
      try {
      
        const response = await fetch ( url, options );
        
        if ( ! response.ok ) {
        
          const s = `
          
            ${ codeKey } network response was not ok ${ response.statusText }
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          throw new Error ( s );
          
          }
          
        const json = await response.text ( );
        
        return json;
        
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
    
      const
      
        callback = ( item ) => {
        
          const
          
            callback = ( tag ) => {
            
              const i = tagsAll.indexOf ( tag );
              
              tags [ i ] = 'true';
              
              },
              
            tags = new Array ( tagsAll.length )
            
              .fill ( 'false' );
              
          let sku = item?.variants;
          
          if ( item.tags !== undefined )
          
            item
            
              .tags
              
              .forEach ( callback );
              
          if ( sku !== undefined && sku.length === 1 )
          
            sku = sku [ 0 ].sku;
            
            else
            
              sku = '';
              
          const array = [
          
            ...
            
            [
              
              item.id, // 0
              
              item.title, // 1
              
              sku, // 2
              
              new Date ( item.publishOn ) // 3
              
                .toISOString ( )
                
                .replace ( 'T', ' ' )
                
                .split ( '.' )
                
                [ 0 ],
                
              new Date ( item.updatedOn ) // 4
              
                .toISOString ( )
                
                .replace ( 'T', ' ' )
                
                .split ( '.' )
                
                [ 0 ],
                
              new Date ( item.addedOn ) // 5
              
                .toISOString ( )
                
                .replace ( 'T', ' ' )
                
                .split ( '.' )
                
                [ 0 ],
                
              String ( item.starred ) // 6, featured
              
              ],
              
            ... tags
            
            ];
            
          return array;
          
          },
          
        obj = JSON
        
          .parse (
          
            await getJson ( url )
            
            );
            
      products
      
        .push (
        
          ...
          
          obj
          
            .items
            
            .map ( callback )
            
          );
          
      $messageElement
      
        .text ( `Processed ${ products.length } products.` );
        
      if ( obj?.pagination?.nextPageUrl !== undefined ) {
      
        const
        
          url = `${
          
            obj
            
              .pagination
              
              .nextPageUrl
              
            }&${ urlSuffix }`,
            
          promise = getProductsPage ( url, products );
          
        return promise;
        
        }
        
      categoryAllId = obj
      
        .nestedCategories
        
        .all
        
        .id;
        
      $messageElement
      
        .html (
        
          `
          
            Sort the products as desired, then click the
            
            <strong>
            
              Reorder Products
              
              </strong>
              
            button. This action will reorder the products in the
            
            <strong>
            
              All
              
              </strong>
              
            category on the Store page, and your site will reload.
            
            `
            
          );
          
      return products;
      
      },
      
    getProductPages = async ( url ) => {
    
      const promise = await getProductsPage ( url );
      
      return promise;
      
      },
      
    iframeSquarespaceContext = iframeElement
    
      .contentWindow
      
      .Static
    
      .SQUARESPACE_CONTEXT,
      
    loadElement = ( e ) => {
    
      const
      
        callback = ( resolve, reject ) => {
        
          const element = document
          
            .createElement ( e.tag );
            
          element
          
            .setAttribute ( `data-${ codeKey }`, '' );
            
          if ( e.attributes !== undefined )
          
            for ( const attribute in e.attributes ) {
            
              element
              
                .setAttribute (
                
                  attribute,
                  
                  e
                  
                    .attributes
                    
                    [ attribute ]
                    
                  );
                  
              }
              
          if ( e.text !== undefined )
          
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
    
    sendJsonInChunks = async ( productIds, setJsonOptions ) => {
    
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
        
          let s = `Sending reorder data ${ i + 1 } of ${ totalChunks }.`;
          
          $messageElement.text ( s );
          
          const responseData = await setJson ( setJsonOptions );
          
          s = `Successfully sent reorder data ${ i + 1 } of ${ totalChunks }.`;
          
          $messageElement.text ( s );
          
          } catch ( error ) {
          
            const s = `${ codeKey } error sending chunk ${ i + 1 } : `
            
              +
              
              `${ error }`;
              
            console.error ( s );
            
            // Handle error (e.g., retry logic or breaking the loop)
            
            break;
            
            }
            
        }
        
      },
      
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
            
              ${ codeKey } network response was not ok
              
              ${ response.statusText }
              
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
            throw new Error ( s );
            
            }
            
          const obj = await response.json ( );
          
          return obj;
          
          } catch ( error ) {
          
            const s = `
            
              ${ codeKey } there has been a problem with your fetch
              
              operation, ${ error }
              
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
              console.error ( s );
              
              throw error;
              
            }
            
      },
      
    urlSuffix = 'format=json',
    
    collectionId = iframeSquarespaceContext
    
      .collectionId,
      
    crumb = getCookieValue ( 'crumb' ),
    
    getCollectionTagsUrl =
    
      `/api/commondata/GetCollectionTags?collectionId=${ collectionId }`,
      
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
          
            Click the Load Products button to load products into the table.
            
            </h2>
            
          <table id="${ codeKey }-table" class="display" style="width : 100%;">
          
            <thead>
            
                <th>
                
                  Product ID
                  
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
      
    url = iframeSquarespaceContext
    
      .collection
      
      .fullUrl
      
      +
      
      `?${ urlSuffix }`;
      
  let
  
    categoryAllId,
    
    isProductsLoaded = false,
    
    tagsAll,
    
    $messageElement,
    
    $reorderProductsElement;
    
  loadElementsSequentially ( elementsToLoad )
  
    .then ( ( ) => {
    
      const s = `${ codeKey } all elements loaded.`;
      
      console.log ( s );
      
      } )
      
    .then ( ( ) => {
    
      let
      
        callback = ( ) => {
        
          document
          
            .querySelectorAll ( `[ data-${ codeKey } ]` )
            
            .forEach ( e => e.remove ( ) );
            
          },
          
        table;
        
      document
      
        .body
        
        .insertAdjacentHTML ( 'beforeend', html );
        
      document
      
        .getElementById ( `${ codeKey }-cancel-button` )
        
        .addEventListener ( 'click', callback );
        
      getJson ( getCollectionTagsUrl )
      
        .then ( ( json ) => {
        
          const
          
            callback = ( tag ) => {
            
              $( `#${ codeKey }-table thead tr` )
              
                .append ( `
                
                  <th>
                  
                    ${ tag } (tag)
                    
                    </th>
                    
                  ` );
                  
              };
              
          tagsAll = JSON
          
            .parse ( json )
            
            .map ( o => o.name )
            
            .sort ( );
            
          tagsAll.forEach ( callback );
          
          const
          
            table = $( `#${ codeKey }-table` )
            
              .DataTable (
              
                {
                
                  buttons : [
                  
                    {
                    
                      text : 'Load Products',
                      
                      action : ( e, dt, node, config ) => {
                      
                        $messageElement
                        
                          .text ( `Processing products...` );
                          
                        getProductPages ( url )
                        
                          .then ( ( data ) => {
                          
                            table
                            
                              .clear ( )
                              
                              .rows
                              
                              .add ( data )
                              
                              .draw ( );
                              
                            $( node )
                            
                              .prop ( 'disabled', true );
                              
                            isProductsLoaded = true;
                            
                            } );
                            
                        }
                        
                      },
                      
                    {
                    
                      text : 'Reorder Products',
                      
                      action : ( e, dt, node, config ) => {
                      
                        const
                        
                          collectionId = iframeSquarespaceContext
                          
                            .collectionId,
                            
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
                              
                              `categories/${ categoryAllId }/reorder-items`
                              
                            };
                            
                        sendJsonInChunks ( productIds, setJsonOptions )
                        
                          .then ( ( ) => {
                          
                            $messageElement
                            
                              .text ( 'Reloading site...' );
                              
                            location.reload ( );
                            
                            } );
                            
                        }
                        
                      }
                      
                    ],
                    
                  columnDefs : [
                  
                    {
                    
                      targets : 0,
                      
                      visible : false
                      
                      },
                      
                    {
                    
                      targets : Array
                      
                        .from (
                        
                          { length : tagsAll.length + 1 },
                          
                          ( _, i ) => 6 + i
                          
                          ),
                          
                      searchable : false,
                      
                      render : ( data, type, row ) => {
                      
                        if ( type === 'display' ) {
                        
                          const html =  '<input' +
                          
                            ( data === 'true' ? ' checked' : '' ) +
                            
                            ' type="checkbox" />';
                            
                          return html
                          
                          }
                          
                        return data;
                        
                        }
                        
                      }
                      
                    ],
                    
                  initComplete : ( ) => {
                  
                    const selector = '.dt-button:contains("Reorder Products")';
                    
                    $reorderProductsElement = $( selector );
                    
                    $reorderProductsElement
                    
                      .prop ( 'disabled', true );
                      
                    },
                    
                  layout : {
                  
                    topStart : 'buttons'
                    
                    },
                    
                  order : [ ],
                  
                  pageLength : 200
                  
                  }
                  
                );
                
          $messageElement = $( `#${ messageElementId }` );
          
          // enable reorder products element
          
          {
          
            const callback = ( ) => {
            
              if ( ! isProductsLoaded ) return; // bail if not products loaded
              
              $reorderProductsElement
              
                .prop ( 'disabled', false );
                
              };
              
            table
            
              .on ( 'order.dt', callback );
              
            }
            
          } );
          
      } )
      
    .catch ( ( error ) => {
    
      const s = `${ codeKey } error loading elements : `;
      
      console.error ( s, error );
      
      } );
      
  } ) ( );
