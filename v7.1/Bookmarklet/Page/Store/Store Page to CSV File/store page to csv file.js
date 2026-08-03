/* begin TWC Store Page to CSV File */

  ( ( wndw ) => {
  
    // debugger;
    
    /*
    
      overlay modal dialog
      
      License         : < https://tinyurl.com/s872fb68 >
      
      Version         : 0.2.0
      
      SS Version      : 7.1
      
      Copyright       : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
      
      */
      
    const
    
      title = 'Overlay Modal Dialog',
      
      version = '0.2.0',
    
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
            height : fit-content;
            margin-top : 16vh;
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
    
      store page to csv file
      
      License         : < https://tinyurl.com/s872fb68 >
      
      Version         : 0.1.0
      
      Copyright       : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
      
      no user serviceable parts below
      
      */
      
    const
    
      title = 'TWC Store Page to CSV File',
      
      version = '0.1.0',
    
      s = `${ title } v${ version }
      
        License < https://tinyurl.com/s872fb68 >
        
        © 2026 Thomas Creedon
        
        Tom's Web Consulting < http://www.tomsWeb.consulting >`
        
        .replace ( /^\s+/gm, '' );
        
    console.log ( s );
    
    const windowTop = window.top;
    
    let dcmnt = windowTop.document;
    
    const isEditor = dcmnt
    
      .documentElement
      
      .classList
      
      .contains ( 'squarespace-damask' );
      
    if ( ! isEditor ) {
    
      const s = `TWC ${ title }
      
        Please log in to your Squarespace site.
        
        `
        
        .trim ( )
        
        .replace ( /^ +/gm, '' );
        
      alert ( s );
      
      return; // bail if not logged in
      
      }
      
    const
    
      siteFrameElement = dcmnt
      
        .querySelector (
        
          'iframe[ data-testid = "sqs-site-frame" ]'
          
          );
          
    dcmnt = siteFrameElement
    
      ?.contentDocument;
      
    if ( ! dcmnt ) {
    
      const s = `TWC ${ title }
      
        Error : can not find the site frame.
        
        `
        
        .trim ( )
        
        .replace ( /^ +/gm, '' );
        
      alert ( s );
      
      return; // bail if no site frame
      
      }
      
    const
    
      context = siteFrameElement
      
        .contentWindow
        
        .Static
        
        .SQUARESPACE_CONTEXT,
        
      isStorePage = context
      
        .collection
        
        ?.type
        
        ===
        
        13;
        
    if ( ! isStorePage ) {
    
      const s = `${ title }\n\nThis is not a Store Page.`;
      
      alert ( s );
      
      return; // bail if not store page
      
      }
      
    const
    
      atLeastOneDecimal = ( n ) => {
      
         n =
         
          Number.isInteger ( n )
          
          ?
          
          n.toFixed ( 1 )
          
          :
          
          n.toString ( );
          
        return n;
        
        },
        
      codeKey = 'twc-sptcf',
      
      collectionCategoriesUrl =
      
        `/api/product-content-service/products/${
        
          context.collectionId
          
          }/categories/tree`,
          
      csvArray = [
      
        [
        
          'Product ID [Non Editable]',
          
          'Variant ID [Non Editable]',
          
          'Product Type [Non Editable]',
          
          'Product Page',
          
          'Product URL',
          
          'Title',
          
          'Description',
          
          'SKU',
          
          'GTIN',
          
          'MPN',
          
          'Option Name 1',
          
          'Option Value 1',
          
          'Option Name 2',
          
          'Option Value 2',
          
          'Option Name 3',
          
          'Option Value 3',
          
          'Option Name 4',
          
          'Option Value 4',
          
          'Option Name 5',
          
          'Option Value 5',
          
          'Option Name 6',
          
          'Option Value 6',
          
          'Price',
          
          'Sale Price',
          
          'On Sale',
          
          'Stock',
          
          'Categories',
          
          'Tags',
          
          'Weight',
          
          'Length',
          
          'Width',
          
          'Height',
          
          'Visible',
          
          'Hosted Image URLs',
          
          'Categories Paths'
          
          ]
          
        ],
        
      getCategoryPath = ( id, tree ) => {
      
        const byId = new Map (
        
          tree.map ( c => [ c.id, c ] )
          
          );
          
        let
        
          path = [ ],
          
          current = byId.get ( id );
          
        while ( current ) {
        
          path.push ( current.displayName );
          
          current =
          
            current.parentCategoryId
            
            ?
            
            byId.get (
            
              current.parentCategoryId
              
              )
              
            :
            
            null;
            
          }
          
        path = path
        
          .reverse ( )
          
          .join ( ' > ' );
          
        return path;
        
        },
        
      getFileName = ( ) => {
      
        const
        
          d = new Date ( ),
          
          day = String ( d.getDate ( ) )
          
            .padStart ( 2, '0' ),
            
          month = d.toLocaleString ( 
          
            'en-US', { month : 'short' }
            
            ),
            
          time = d
          
            .toLocaleString (
            
              'en-US',
              
              {
              
                hour : '2-digit',
                
                hour12 : true,
                
                minute : '2-digit',
                
                second : '2-digit'
                
                }
                
              )
              
            .replace ( /:/g, '-' ),
            
          name = `products_${
          
            month
            
            }-${
            
              day
              
              }_${
              
                time
                
                }.csv`;
                
        return name;
        
        },
          
      getJsonObject = async ( url ) => {
      
        try {
        
          const response =
          
            await fetch ( url );
            
          if ( ! response.ok ) {
          
            const s = `
            
              ${
              
                codeKey
                
                } network response was not ok ${
                
                  response.statusText
                  
                  }
                  
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
            throw new Error ( s );
            
            }
            
          const obj =
          
            await response.json ( );
            
          return obj;
          
          } catch ( error ) {
          
            const s = `
            
              ${ codeKey } there has been a
              
              problem with your fetch get
              
              operation, ${ error }.
              
              `
              
              .trim ( )
              
              .replace ( /\s+/gm, ' ' );
              
            console.error ( s );
            
            }
            
        },
        
      getProductsPage =
      
        async ( url, products = [ ] ) => {
        
          const obj = await getJsonObject ( url );
          
          products.push ( ... obj.items );
          
          windowTop
          
            .twcOverlayModalDialog
            
            .setMessage (
            
              `Loaded ${
              
                products.length
                
                } products...`
                
              );
              
          if (
          
            obj?.pagination?.nextPageUrl
            
            ) {
            
              const
              
                url = `${
                
                  obj
                  
                    .pagination
                    
                    .nextPageUrl
                    
                  }&${ urlSuffix }`,
                  
                promise = getProductsPage (
                
                  url,
                  
                  products
                  
                  );
                  
              return promise;
              
              }
              
          return products;
          
          },
          
      getProductsPages = async ( url ) => {
      
        const promise =
        
          await getProductsPage ( url );
          
        return promise;
        
        };
        
      toCsv = ( rows ) => {
      
        const csv = rows
        
          .map ( row =>
          
            row
            
              .map ( v => {
              
                const
                
                  s = String ( v ?? '' ),
                  
                  escaped =
                  
                    s.replace ( /"/g, '""' ),
                    
                  hasMultipleUrls = (
                  
                    s.match (
                    
                      /https?:\/\//g
                      
                      )
                      
                    ||
                    
                    [ ]
                    
                    )
                    
                    .length
                    
                    >
                    
                    1,
                    
                  needsQuotes =
                  
                    /[",\n]/.test ( s );
                    
                v =
                
                  hasMultipleUrls
                  
                  ||
                  
                  needsQuotes
                  
                  ?
                  
                  `"${ escaped }"`
                  
                  :
                  
                  escaped;
                  
                return v;
                
                } )
                
              .join ( ',' )
              
            )
            
          .join ( '\n' );
          
        return  csv;
        
        },
        
      urlSuffix = 'format=json',
      
      url = context
      
        .collection
        
        .fullUrl
        
        +
        
        `?${ urlSuffix }`,
        
      writeFile = async ( name, csv ) => {
      
        try {
        
          const
          
            handle = await windowTop
            
              .showSaveFilePicker ( {
              
                suggestedName : name,
                
                types : [ {
                  
                  description : 'JSON',
                  
                  accept : {
                  
                    'ext/csv' : [ '.csv' ]
                    
                    }
                    
                  } ]
                  
                } );
                
            writable =
            
              await handle.createWritable ( );
              
          await writable.write ( csv );
          
          await writable.close ( );
          
          } catch ( error ) {
          
            const isAbort =
            
              error.name === 'AbortError';
              
            if ( isAbort ) {
            
              windowTop
              
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
            
            }
            
        },
        
      addCsvArrayRow =
      
        ( product, categories ) => {
        
          const productTypeMap = {
          
            1 : 'PHYSICAL',
            
            2 : 'DOWNLOAD',
            
            3 : 'SERVICE',
            
            4 : 'GIFT CARD',
            
            
            };
            
          let
          
            categoriesPaths = product
            
              .categoryIds
              
              .map (
                
                id => getCategoryPath (
                
                  id,
                  
                  categories.categoryTree
                  
                  )
                
                )
                
              .map (
              
                p => p.replace (
                
                  /All( > )*/g,
                  
                  ''
                  
                  )
                  
                )
                
              .join ( ',' ),
              
            categoryUrlSlugs =
            
              product
              
                .categoryIds
                
                .map (
                
                  id => categories
                  
                    .categoryTree
                  
                    .find (
                    
                      obj => obj.id === id
                      
                      )
                      
                    .fullSlug
                    
                  )
                  
                .join ( ', ' ),
                
            description,
            
            hostedImageUrls = product
            
              .items
              
              .map ( i => i.assetUrl )
              
              .join ( ' ' ),
              
            productId = product.id,
            
            productPage = context
            
              .collection
              
              .fullUrl
              
              .slice ( 1 ),
              
            productTitle = product.title,
            
            productType = productTypeMap [
            
              product.productType
              
              ],
              
            productUrl = product
            
              .fullUrl
              
              .split ( '/' )
              
              .slice ( -1 )
              
              [ 0 ],
              
            tags = product
            
              ?.tags
              
              ?.join ( ', ' )
              
              ??
              
              '',
              
            visible = 'Yes';
            
          product
          
            .variants
            
            .forEach (
            
              v => {
              
                const row = [
                
                  productId,
                  
                  v.id,
                  
                  productType,
                  
                  productPage,
                  
                  productUrl,
                  
                  productTitle,
                  
                  description,
                  
                  v.sku,
                  
                  v?.gtin ?? '',
                  
                  v?.mpn ?? '',
                  
                  product
                  
                    ?.variantOptionOrdering
                    
                    ?.[ 0 ]
                    
                    ??
                    
                    '',
                      
                  v
                  
                    ?.attributes
                    
                    ?.[ 
                    
                      product
                      
                        ?.variantOptionOrdering
                        
                        ?.[ 0 ]
                        
                      ]
                      
                    ??
                    
                    '',
                    
                  product
                  
                    ?.variantOptionOrdering
                    
                    ?.[ 1 ]
                    
                    ??
                    
                    '',
                    
                  v
                  
                    ?.attributes
                    
                    ?.[ 
                    
                      product
                      
                        ?.variantOptionOrdering
                        
                        ?.[ 1 ]
                        
                      ]
                      
                    ??
                    
                    '',
                    
                  product
                  
                    ?.variantOptionOrdering
                    
                    ?.[ 2 ]
                    
                    ??
                    
                    '',
                    
                  v
                  
                    ?.attributes
                    
                    ?.[ 
                    
                      product
                      
                        ?.variantOptionOrdering
                        
                        ?.[ 2 ]
                        
                      ]
                      
                    ??
                    
                    '',
                    
                  product
                  
                    ?.variantOptionOrdering
                    
                    ?.[ 3 ]
                    
                    ??
                    
                    '',
                    
                  v
                  
                    ?.attributes
                    
                    ?.[ 
                    
                      product
                      
                        ?.variantOptionOrdering
                        
                        ?.[ 3 ]
                        
                      ]
                      
                    ??
                    
                    '',
                    
                  product
                  
                    ?.variantOptionOrdering
                    
                    ?.[ 4 ]
                    
                    ??
                    
                    '',
                    
                  v
                  
                    ?.attributes
                    
                    ?.[ 
                    
                      product
                      
                        ?.variantOptionOrdering
                        
                        ?.[ 4 ]
                        
                      ]
                      
                    ??
                    
                    '',
                    
                  product
                  
                    ?.variantOptionOrdering
                    
                    ?.[ 5 ]
                    
                    ??
                    
                    '',
                    
                  v
                  
                    ?.attributes
                    
                    ?.[ 
                    
                      product
                      
                        ?.variantOptionOrdering
                        
                        ?.[ 5 ]
                        
                      ]
                      
                    ??
                    
                    '',
                    
                  v.priceMoney.value
                  
                  ??
                  
                  '',
                  
                  v.salePriceMoney.value
                  
                  ??
                  
                  '',
                  
                  v.onSale
                  
                  ?
                  
                  'Yes'
                  
                  :
                  
                  'No',
                  
                  v.unlimited
                  
                  ?
                  
                  'Unlimited'
                  
                  :
                  
                  v.qtyInStock,
                  
                  categoryUrlSlugs,
                  
                  tags,
                  
                  atLeastOneDecimal (
                  
                    v.weight
                    
                    ),
                    
                  atLeastOneDecimal ( v.len ),
                  
                  atLeastOneDecimal (
                  
                    v.width
                    
                    ),
                    
                  atLeastOneDecimal (
                  
                    v.height
                    
                    ),
                    
                  visible,
                  
                  hostedImageUrls,
                  
                  categoriesPaths
                  
                  ];
                  
                csv.push ( row );
                
                categoriesPaths
                
                =
                
                categoryUrlSlugs
                
                =
                
                description
                
                =
                
                hostedImageUrls
                
                =
                
                
                productId
                
                =
                
                productPage
                
                =
                
                productTitle
                
                =
                
                productType
                
                =
                
                productUrl
                
                =
                
                tags
                
                =
                
                visible
                
                =
                
                '';
                
                }
                
              );
              
          };
         
    windowTop
    
      .twcOverlayModalDialog
      
      .setTitle ( title );
      
    windowTop
    
      .twcOverlayModalDialog
      
      .showMessage ( 'Loading...' );
      
    await Promise
    
      .all (
      
        [
        
          getJsonObject (
          
            collectionCategoriesUrl
            
            ),
            
          getProductsPages ( url )
          
          ]
          
        )
        
      .then ( ( [ categories, products ] ) => {
      
        products.forEach (
        
          p => addCsvArrayRow (
          
            p,
            
            categories
            
            )
            
          );
          
        writeFile (
        
          getFileName ( ),
          
          toCsv ( csvArray )
          
          );
          
        } );
        
    windowTop
    
      .twcOverlayModalDialog
      
      .close ( );
      
    } ) ( );
    
  /* end TWC Store Page to CSV File */
