( ( ) => {

  // debugger;
  
  /*!
  
    blog page list meta add
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Versions       : 7.1, 7.0
    
    Notes             : the code is comprised of a style and script tag. both
                        are needed for the full effect to work
                        
                        this code makes calls to the json version of products
                        for information that is not normally available
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Blog Page List Meta Add',
    
    version = '0.1.0',
    
    s = `
    
      ${ title } v${ version }
      
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >
      
      `
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    context = Static.SQUARESPACE_CONTEXT,
    
    isList = ! context.item?.id;
    
  // bail if not list page
  
  if ( ! isList ) return;
  
  const domContentLoadedCallback =
  
    async ( ) => {
    
      const isBlogPage =
      
        !!
        
        document
        
          .querySelectorAll (
          
            [
            
              'body[ class *= "collection-type-blog-" ]',
              
              'body[ class ~= "collection-type-blog" ]'
              
              ]
              
              .join ( ', ' )
              
            )
            
          .length;
          
      // bail if not blog page
      
      if ( ! isBlogPage ) return;
      
      // globals
      
      {
      
        // initialize twc module
        
        window.twc = window.twc || { };
        
        // initialize twc bplma sub-module
        
        twc.bplma = twc.bplma || { };
        
        }
        
      const searchParams =
      
        new URLSearchParams (
        
          location.search
          
          );
          
      searchParams.set (
      
        'format',
        
        'json'
        
        );
        
      const
      
        codeKey = 'twc-bplma',
        
        url = `${
        
          location.protocol
          
          }//${
          
            location.host
            
            }${
            
              location.pathname
              
              }?${
              
                searchParams.toString ( )
                
                }`;
                
      let items;
      
      try {
      
        const response =
        
          await fetch ( url );
          
        if ( ! response.ok ) {
        
          const s = `
          
            ${ codeKey } network response was
            
            not ok ${ response.statusText }
            
            `
            
            .trim ( )
            
            .replace ( /\s+/gm, ' ' );
            
          throw new Error ( s );
          
          }
          
        items = await response.json ( );
        
        items = items.items;
        
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
          
      const
      
        categoryCallback =
        
          ( category ) => {
          
            const html = `
            
              <a class="blog-categories" href="${
              
                context
                
                  .collection
                  
                  .fullUrl
                
                }/category/${
                
                  encodeURIComponent (
                  
                    category
                    
                    )
                    
                    .replaceAll (
                    
                      '%20',
                      
                      '+'
                      
                      )
                      
                  }">
              
                ${
                
                  category
                  
                  }</a>
                
              `;
              
            return html;
            
            },
            
        dateFormatRootMap = {
        
          'dmy-nn2d' : {
          
            day : 'numeric',
            
            month : 'numeric',
            
            year : '2-digit'
            
            },
            
          },
          
        language = context
        
          .website
          
          .language,
          
        options = codeKey
        
          .split ( '-' )
          
          .reduce (
          
            ( obj, key ) =>
            
              obj?.[ key ],
              
            window
            
            ),
            
        tagCallback = ( tag ) => {
        
          const html = `
          
            <a href="${
            
              context
               
                .collection
                
                .fullUrl
              
              }/tag/${
              
                tag.replaceAll (
                
                  ' ',
                  
                  '+'
                  
                  )
                  
                }">
            
              ${
              
                tag
                
                }</a>
              
            `;
            
          return html;
          
          },
          
        dateFormatMap = {
        
          'en-GB' : dateFormatRootMap [
          
            'dmy-nn2d'
            
            ],
            
          'es-MX' : dateFormatRootMap [
          
            'dmy-nn2d'
            
            ],
          
          'en-US' : dateFormatRootMap [
          
            'dmy-nn2d'
            
            ],
          
          default : { }
          
          },
          
        entryCallback = (
        
          order, meta, item, element
          
          ) => {
          
            const isEnabled =
            
              meta [ 0 ]
              
              !==
              
              '['
              
              &&
              
              meta
              
              !==
              
              '';
              
            // continue
            
            if ( ! isEnabled )
            
              return true;
              
            const
            
              datePublishOn = new Date (
              
                item.publishOn
                
                ),
                
              dateUpdatedOn = new Date (
              
                item.updatedOn
                
                ),
                
              l =
              
                language
                
                in
                
                dateFormatMap
                
                ?
                
                language
                
                :
                
                'default',
                
              timeZoneOption = {
              
                timeZone : context
                  
                  .website
                  
                  .timeZone
                  
                },
                
              options = {
              
                timeZone : timeZoneOption
                
                  .timeZone
                  
                };
                
            let html;
            
            Object.assign (
            
              options,
              
              dateFormatMap [ l ]
                
              );
              
            switch ( meta ) {
            
              case 'categories' :
              
                // continue
                
                if ( ! item.categories )
                
                  break;
                  
                html = item
                
                  .categories
                  
                  .map (
                  
                    categoryCallback
                    
                    )
                    
                  .join ( '' )
                  
                  .replace (
                  
                    /,(\s+)$/,
                    
                    '$1'
                    
                    );
                    
                html = `
                
                  <span class="blog-categories-list">
                  
                    ${ html }
                    
                    </span>
                    
                  `;
                
                break;
                
              case 'date' :
              
                html = `
                
                  <time class="blog-date" pubdate data-animation-role="date">
                  
                    ${
                    
                      datePublishOn
                      
                        .toLocaleDateString (
                        
                          language,
                          
                          options
                          
                          )
                          
                      }
                      
                    </time>
                    
                  `;
                  
                break;
                
              case 'date dow' : {
              
                const dowOptions = {
                  
                    weekday : 'long'
                    
                    };
                    
                html = `
                
                  <time class="blog-date" pubdowdate data-animation-role="date">
                  
                    ${
                    
                      new Intl
                      
                        .DateTimeFormat (
                        
                          language,
                          
                          dowOptions
                          
                          )
                          
                        .format (
                        
                          datePublishOn
                          
                          )
                          
                      }
                      
                    </time>
                    
                  `;
                  
                break;
                
                }
                
              case 'date time' :
              
                html = `
                
                  <time class="blog-date" pubdate data-animation-role="date">
                  
                    ${
                    
                      datePublishOn
                      
                        .toLocaleDateString (
                        
                          language,
                          
                          options
                          
                          )
                          
                      }
                      
                    </time>
                    
                  <time class="blog-time" pubdate data-animation-role="date">
                  
                    ${
                    
                      datePublishOn
                      
                        .toLocaleTimeString (
                        
                          language,
                          
                          timeZoneOption
                          
                          )
                          
                        .replace (
                        
                          /:\d+ /, ' '
                          
                          )
                          
                      }
                      
                    </time>
                    
                  `;
                  
                break;
                
              case 'date time updated' :
              
                html = `
                
                  <time class="blog-date" updatedate data-animation-role="date">
                  
                    ${
                    
                      dateUpdatedOn
                      
                        .toLocaleDateString (
                        
                          language,
                          
                          options
                          
                          )
                          
                      }
                      
                    </time>
                    
                  <time class="blog-time" updatedate data-animation-role="date">
                  
                    ${
                    
                      datePublishOn
                      
                        .toLocaleTimeString (
                        
                          language,
                          
                          timeZoneOption
                          
                          )
                          
                        .replace (
                        
                          /:\d+ /, ' '
                          
                          )
                          
                      }
                      
                    </time>
                    
                  `;
                  
                break;
                
              case 'date updated' :
              
                html = `
                
                  <time class="blog-date" updatedate data-animation-role="date">
                  
                    ${
                    
                      dateUpdatedOn
                      
                        .toLocaleDateString (
                        
                          language,
                          
                          options
                          
                          )
                          
                      }
                      
                    </time>
                    
                  `;
                  
                break;
                
              case 'location' : {
              
                const
                
                  location = item
                  
                    .location,
                    
                  address = [
                  
                    location.addressTitle,
                    
                    location.addressLine1,
                    
                    location.addressLine2,
                    
                    location.addressCountry
                    
                    ]
                    
                    .filter (
                    
                      a => a !== ''
                      
                      )
                      
                    .join ( ', ' ),
                    
                  text = location
                  
                    .addressTitle
                    
                    ?
                    
                    location.addressTitle
                    
                    :
                    
                    address;
                    
                html = `
                
                  <a href="http://maps.google.com?${
                  
                    address
                    
                    }" class="blog-address-maplink" target="_blank">
                  
                    ${
                    
                      text
                      
                      }
                      
                    </a>
                    
                  `;
                  
                break;
                
                }
                
              case 'tags' :
              
                // continue
                
                if ( ! item.tags ) break;
                
                html = item
                
                  .tags
                  
                  .map (
                  
                    tagCallback
                    
                    )
                    
                  .join ( '' )
                  
                  .replace (
                  
                    /,(\s+)$/,
                    
                    '$1'
                    
                    );
                    
                html = `
                
                  <span class="blog-tags-list">
                  
                    ${ html }
                    
                    </span>
                    
                  `;
                
                break;
                
              case 'time' :
              
                html = `
                
                  <time class="blog-time" pubdate data-animation-role="date">
                  
                    ${
                    
                      datePublishOn
                      
                        .toLocaleTimeString (
                        
                          language,
                          
                          timeZoneOption
                          
                          )
                          
                        .replace (
                        
                          /:\d+ /, ' '
                          
                          )
                          
                      }
                      
                    </time>
                    
                  `;
                  
                break;
                
              case 'time updated' :
              
                html = `
                
                  <time class="blog-time" updatedate data-animation-role="date">
                  
                    ${
                    
                      dateUpdatedOn
                      
                        .toLocaleTimeString (
                        
                          language,
                          
                          timeZoneOption
                          
                          )
                          
                        .replace (
                        
                          /:\d+ /, ' '
                          
                          )
                          
                      }
                      
                    </time>
                    
                  `;
                  
                break;
                
              }
              
            // continue
            
            if ( ! html ) return;
            
            element.insertAdjacentHTML (
            
              'beforeend',
              
              `
              
                <span class="blog-meta-delimiter">
                
                  </span>
                  
                <span class="${
                
                  codeKey
                  
                  } blog-meta-${
                  
                    order
                    
                    }">
                  
                  ${ html }
                  
                  </span>
                  
                `
                
              );
              
            },
            
        itemCallback = ( item ) => {
        
          const
          
            element = document
            
              .body
              
              .querySelector (
              
                `.blog-title a[ href = "${
                
                  item.sourceUrl
                  
                  ??
                  
                  item.fullUrl
                  
                  }" ]`
                  
                )
                
              .parentElement
              
              .previousElementSibling,
              
            entries = Object.entries (
            
              options.metaAdd
              
              );
              
        for (
        
          const [
          
            order,
            
            meta
            
            ]
            
            of
            
            entries
            
          )
          
          entryCallback (
          
            order,
            
            meta,
            
            item,
            
            element
            
            );
            
          };
          
      items.forEach ( itemCallback );
      
      };
      
  // domContentLoadedCallback ( );
  
  //
  
  document.addEventListener (
  
    'DOMContentLoaded',
    
    domContentLoadedCallback
    
    );
    
  //
  
  } ) ( );
