const twcsl = ( ( $ ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Version         : 0.3.2
  
  SS Versions     : 7.1, 7.0
  
  v7.0 Templates  : Avenue
                    
                    Bedford ( Anya, Bryant, Hayden )
                    
                    Brine ( Aria, Blend, Burke, Cacao, Clay, Fairfield, Feed,
                    Foster, Greenwich, Hatch, Heights, Hunter, Hyde, Impact,
                    Jaunt, Juke, Keene, Kin, Lincoln, Maple, Margot, Marta,
                    Mentor, Mercer, Miller, Mojave, Moksha, Motto, Nueva, Pedro,
                    Pursuit, Rally, Rover, Royce, Sofia, Sonora, Stella, Thorne,
                    Vow, Wav, West )
                    
                    Five
                    
                    Montauk ( Julia, Kent, Om )
                    
                    your template is not listed? then it is not currently
                    supported
  
  Dependencies    : jQuery
  
  By              : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  // begin private properties
  
    // first order
    
    const _navigator = {
    
      hasTouchScreen : false,
      
      };
      
    const _ssVersion = Static.SQUARESPACE_CONTEXT.templateVersion;
    
    // begin _urlSlug
    
      let _urlSlug = '';
      
      try {
      
        _urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
        
        } catch ( e ) { }
        
      // end _urlSlug
      
    // second order
    
    const _is70 = _ssVersion == '7';
    
    const _is71 = _ssVersion == '7.1';
    
    // end private properties
    
  // begin private methods
  
    // first order
    
    const _getPageSearchParameter = p => {
    
      let value = new URLSearchParams ( location.search )
      
        .get ( p );
        
      if ( value === null ) value = '';
      
      return value;
      
      };
      
    const _initializeNavigator = ( ) => { // initialize _navigator
    
      const o = _navigator;
      
      // begin has touch screen
      
        // based on code from MDN < https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent >
        
        switch ( true ) {
        
          case 'maxTouchPoints' in navigator :
          
            o.hasTouchScreen = navigator.maxTouchPoints > 0;
            
            break;
            
          case 'msMaxTouchPoints' in navigator :
          
            o.hasTouchScreen = navigator.msMaxTouchPoints > 0;
            
            break;
            
          default :
          
            const mQ = window.matchMedia && matchMedia ( '(pointer:coarse)' );
            
            switch ( true ) {
            
              case mQ && mQ.media === '(pointer:coarse)' :
              
                o.hasTouchScreen = !! mQ.matches;
                
                break;
                
              case 'orientation' in window :
              
                o.hasTouchScreen = true; // deprecated, but good fallback
                
                break;
                
              default :
              
                // Only as a last resort, fall back to user agent sniffing
                
                const UA = navigator.userAgent;
                
                o.hasTouchScreen = (
                
                  /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test ( UA ) ||
                  
                  /\b(Android|Windows Phone|iPad|iPod)\b/i.test ( UA )
                  
                  );
                  
              } // end switch
              
          } // end switch
          
        // end has touch screen
        
      }; // end initialize _navigator
      
    const _isPageCollectionItem = ( ) => {
    
      const is = $( 'body[id^="item-"]' ).length != 0;
      
      return is;
      
      };
      
    const _isPageCollectionList = ( ) => {
    
      const is = $( 'body[id^="collection-"]' ).length != 0;
      
      return is;
      
      };
      
    const _pageAlbumInitialize = ( ) => { // _page.album initialize
    
      if ( _is71 ) return; // bail if 7.1
      
      const p = _page.album;
      
      p.is = $( 'body' ).hasClass ( 'collection-type-album' );
      
      if ( ! p.is ) return; // bail if not album
      
      p.urlSlug = _urlSlug;
      
      };
      
    const _pageCoverInitialize = ( ) => { // _page.cover initialize
    
      if ( _is71 ) return; // bail if 7.1
      
      const selector = '.sqs-slide-wrapper[data-slide-type="cover-page"]';
      
      if ( ! $( selector ).length ) return; // bail if not cover
      
      const p = _page.cover;
      
      p.is = true;
      
      p.urlSlug = _urlSlug;
      
      };
      
    const _pageGalleryInitialize = ( ) => { // _page.gallery initialize
    
      if ( _is71 ) return; // bail if 7.1
      
      // bail if not gallery
      
      if ( ! $( 'body.collection-type-gallery' ).length ) return;
      
      const p = _page.gallery;
      
      p.is = true;
      
      p.urlSlug = _urlSlug;
      
      };
      
    const _pageIndexInitialize = ( ) => { // _page.index initialize
    
      if ( _is71 ) return; // bail if 7.1
      
      // bail if not index
      
      if ( ! $( 'body.collection-type-index' ).length ) return;
      
      const p = _page.index;
      
      p.is = true;
      
      p.urlSlug = _urlSlug;
      
      };
      
    const _pagePortfolioInitialize = ( ) => { // _page.portfolio initialize
    
      if ( _is70 ) return; // bail if 7.0
      
      // begin is list
      
        let selector = '.page-section[class*="collection-type-portfolio-"]';
        
        let isList = $( selector );
        
        isList = Boolean ( isList.length );
        
        // end is list
        
      // begin is sub-page
      
        selector = '.item-pagination[data-collection-type^="portfolio"]';
        
        let isSubPage = $( selector );
        
        isSubPage = Boolean ( isSubPage.length );
        
        // end is sub-page
        
      if ( ! isList && ! isSubPage ) return; // bail if not portfolio
      
      const p = _page.portfolio;
      
      p.is = true;
      
      p.list.is = isList;
      
      p.subPage.is = isSubPage;
      
      p.urlSlug = _urlSlug;
      
      };
      
    const _pageVideosInitialize = ( ) => { // _page.videos initialize
    
      if ( _is70 ) return; // bail if 7.0
      
      let is = $( '.lessons-list-section' ).length;
      
      is = Boolean ( is );
      
      if ( ! is ) return; // bail if not videos
      
      const p = _page.videos;
      
      p.is = is;
      
      p.urlSlug = _urlSlug;
      
      };
      
    // second order
    
    const _getPageCategory = ( ) => {
    
      const v = _getPageSearchParameter ( 'category' );
      
      return v;
      
      };
      
    const _getPageFilterSlug = ( filter ) => {
    
      let s;
      
      switch ( true ) {
      
        case _is70 :
        
          let v = _getPageSearchParameter ( filter );
          
          if ( ! v ) return ''; // bail if empty
          
          v = encodeURIComponent ( v )
          
            .replaceAll ( '%20', '+' );
            
          s = v ? `${ filter }=${ v }` : '';
          
          break;
          
        case _is71 :
        
          s = location
          
            .pathname
            
            .split ( '/' )
            
            .slice ( -2 );
            
          if ( s [ 0 ] != filter ) return ''; // bail if no filter match
            
          s = s.join ( '/' );
          
          break;
          
        }
        
      return s;
      
      };
      
    const _getPageSearchParameterTag = ( ) => {
    
      const t = _getPageSearchParameter ( 'tag' );
      
      return t;
      
      };
      
    // third order
    
    const _pageBlogInitialize = ( ) => { // _page.blog initialize
    
      const p = _page.blog;
      
      const selector = [
      
        'body[class~="collection-type-blog"]',
        
        'body[class*="collection-type-blog-"]',
        
        ]
        
        .join ( ', ' );
        
      p.is = Boolean ( $( selector ).length );
      
      if ( ! p.is ) return; // bail if not page blog
      
      p.urlSlug = _urlSlug;
      
      const listInitialize = ( ) => { // list initialize
      
        const l = p.list;
        
        l.is = _isPageCollectionList ( );
        
        if ( ! l.is ) return; // bail if not list
        
        const setCategory = ( ) => {
        
          if ( ! l.hasCategory ) return; // bail if not category
          
          const c = $( 'title' )
          
            .text ( )
            
            .split ( ' — ' ) [ 0 ];
            
          l.category = c;
          
          };
          
        const setCategoryUrlSlug = ( ) => {
        
          const s = _getPageFilterSlug ( 'category' );
          
          l.categoryUrlSlug = s;
          
          };
          
        const setTag = ( ) => {
        
          if ( ! l.hasTag ) return; // bail if not tag
          
          let t = $( 'link[ rel="canonical" ]' )
          
            .attr ( 'href' )
            
            .split ( '/' )
            
            .splice ( -1 );
            
          t = decodeURIComponent ( t )
          
            .replaceAll ( '+', ' ' );
            
          l.tag = t;
          
          };
          
        const setTagUrlSlug = ( ) => {
        
          const s = _getPageFilterSlug ( 'tag' );
          
          l.tagUrlSlug = s;
          
          };
          
        setCategoryUrlSlug ( );
        
        l.hasCategory = Boolean ( l.categoryUrlSlug );
        
        setCategory ( );
        
        setTagUrlSlug ( );
        
        l.hasTag = Boolean ( l.tagUrlSlug );
        
        setTag ( );
        
        };
        
      const postInitialize = ( ) => { // post initialize
      
        const post = p.post;
        
        post.is = _isPageCollectionItem ( );
        
        if ( ! post.is ) return; // bail if not detail
        
        const categorySelector = [
        
          '.blog-item-category', // 7.1
          
          // 7.0
          
          '.Blog-meta-item-category', // Brine
          
          '.categories a', // Avenue, Five, Montauk
          
          '.meta-above-title .entry-category a', // Bedford
          
          ]
          
          .join ( ', ' );
          
        const tagsSelector = [
        
          '.blog-item-tag', // 7.1
          
          // 7.0
          
          '.Blog-meta-item-tag', // Brine
          
          '.tags a', // Avenue, Five, Montauk
          
          '.entry-tags a', // Bedford
          
          ]
          
          .join ( ', ' );
          
        const setCategories = ( ) => {
        
          const c = $( categorySelector )
          
            .map ( function ( ) {
            
              const c = $( this )
              
                .text ( )
                
                .trim ( );
                
              return c;
              
              } )
              
            .toArray ( );
            
          post.categories = c;
          
          };
          
        const setCategoryUrlSlugs = ( ) => {
        
          const us = $( categorySelector )
          
            .map ( function ( ) {
            
              const us = $( this )
              
                .attr ( 'href' )
                
                .replace ( post.urlSlug + '/category', '' );
                
              return us;
              
              } )
              
            .toArray ( );
            
          post.categoryUrlSlugs = us;
          
          };
          
        const setTags = ( ) => {
        
          const t = $( tagsSelector )
          
            .map ( function ( ) {
            
              const t = $( this )
              
                .text ( )
                
                .trim ( );
                
              return t;
              
              } )
              
            .toArray ( );
            
          post.tags = t;
          
          };
          
        const setTagUrlSlugs = ( ) => {
        
          const us = $( tagsSelector )
          
            .map ( function ( ) {
            
              const us = $( this )
              
                .attr ( 'href' )
                
                .replace ( post.urlSlug + '/tag', '' );
                
              return us;
              
              } )
              
            .toArray ( );
            
          post.tagUrlSlugs = us;
          
          };
          
        setCategories ( );
        
        setCategoryUrlSlugs ( );
        
        setTags ( );
        
        setTagUrlSlugs ( );
        
        };
        
      listInitialize ( );
      
      postInitialize ( );
      
      };
      
    const _pageEventsInitialize = ( ) => { // _page.events initialize
    
      const p = _page.events;
      
      const selector =
      
        'body[class~="collection-type-events"], ' +
        
        'body[class*="collection-type-events-"]';
        
      p.is = Boolean ( $( selector ).length );
      
      if ( ! p.is ) return; // bail if not page events
      
      p.urlSlug = _urlSlug;
      
      const eventInitialize = ( ) => { // event initialize
      
        const e = p.event;
        
        e.is = _isPageCollectionItem ( );
        
        if ( ! e.is ) return; // bail if not event
        
        const setCategories = ( ) => {
        
          const c = $( '.eventitem-meta-cats a' )
          
            .map ( function ( ) {
            
              const c = $( this )
              
                .text ( )
                
                .trim ( );
                
              return c;
              
              } )
              
            .toArray ( );
            
          e.categories = c;
          
          };
          
        const setTags = ( ) => {
        
          const t = $( '.eventitem-meta-tags a' )
          
            .map ( function ( ) {
            
              const t = $( this )
              
                .text ( )
                
                .trim ( );
                
              return t;
              
              } )
              
            .toArray ( );
            
          e.tags = t;
          
          };
          
        setCategories ( );
        
        setTags ( );
        
        };
        
      const listInitialize = ( ) => { // list initialize
      
        const l = p.list;
        
        l.is = _isPageCollectionList ( );
        
        if ( ! l.is ) return; // bail if not list
        
        const getClassEventlistFilterText = ( ) => {
        
          const t = $( '.eventlist-filter' )
          
            .text ( )
            
            .split ( ': ' ) [ 1 ]
            
            .replace ( /(?:“)(.+)(?:”)/, '$1' )
            
            .trim ( );
            
          return t;
          
          };
          
        const setCategory = ( ) => {
        
          if ( ! l.hasCategory ) return; // bail if no category
          
          const c = getClassEventlistFilterText ( );
            
          l.category = c;
          
          };
          
        const setCategoryUrlSlug = ( ) => {
        
          const s = _getPageFilterSlug ( 'category' );
          
          l.categoryUrlSlug = s;
          
          };
          
        const setTag = ( ) => {
        
          if ( ! l.hasTag ) return; // bail if no tag
          
          const t = getClassEventlistFilterText ( );
          
          l.tag = t;
          
          };
          
        const setTagUrlSlug = ( ) => {
        
          const s = _getPageFilterSlug ( 'tag' );
          
          l.tagUrlSlug = s;
          
          };
          
        setCategoryUrlSlug ( );
        
        l.hasCategory = Boolean ( l.categoryUrlSlug );
        
        setCategory ( );
        
        setTagUrlSlug ( );
        
        l.hasTag = Boolean ( l.tagUrlSlug );
        
        setTag ( );
        
        };
        
      eventInitialize ( );
      
      listInitialize ( );
      
      };
      
    const _pageStoreInitialize = ( ) => { // _page.store initialize
    
      const p = _page.store;
      
      p.is = $( 'body' ).hasClass ( 'collection-type-products' );
      
      if ( ! p.is ) return; // bail if not page store
      
      p.urlSlug = _urlSlug;
      
      const detailInitialize = ( ) => { // detail initialize
      
        const d = p.detail;
        
        d.is = _isPageCollectionItem ( );
        
        if ( ! d.is ) return; // bail if not detail
        
        const getStockQuantity = ( ) => {
        
          const variants = Static.SQUARESPACE_CONTEXT.product.variants;
          
          let q;
          
          let variant;
          
          if ( variants.length == 1 ) {
          
            variant = variants [ 0 ];
            
            } else {
            
              variant = $( '.product-variants:visible' )
              
                .attr ( 'data-selected-variant' );
                
              // bail if no selected variant
              
              if ( variant === undefined ) return undefined;
              
              variant = JSON.parse ( variant );
              
              variant = variant.id;
              
              variant = variants.filter ( o => o.id == variant ) [ 0 ];
              
              }
              
          q = variant.stock;
          
          if ( q.unlimited ) {
          
            q = Infinity;
            
            } else {
            
              q = q.quantity;
              
              }
              
          return q;
          
          };
          
        const setClassCategories = ( ) => {
        
          if ( _is71 ) return; // bail if 7.1
          
          const selector = [
          
            // 7.0
            
            '.ProductItem', // Brine
            
            '.productWrapper', // ?
            
            '#productWrapper', // ?
            
            ]
            
            .join ( ', ' );
            
          const categories = $( selector )
          
            .attr ( 'class' )
            
            .split ( ' ' )
            
            .filter ( clss => clss.startsWith ( 'category-' ) )
            
            .map ( ( category ) => {
            
              category = category.slice ( 9 );
              
              return category;
              
              } );
              
          d.classCategories = categories;
          
          };
          
        const setClassTags = ( ) => {
        
          const selector = [
          
            '.pdp-layout', // 7.1
            
            '.ProductItem', // 7.1, 7.0 ( Brine )
            
            // 7.0
            
            '.productWrapper', // ?
            
            '#productWrapper', // ?
            
            ]
            
            .join ( ', ' );
            
          const tags = $( selector )
          
            .attr ( 'class' )
            
            .split ( ' ' )
            
            .filter ( clss => clss.startsWith ( 'tag-' ) )
            
            .map ( ( tag ) => {
            
              return tag.slice ( 4 );
              
              } );
              
          d.classTags = tags;
          
          };
        
        const setMethodsGet = ( ) => {
        
          const g = d [ 'get' ];
          
          g.stockQuantity = getStockQuantity;
          
          };
          
        // begin first order
        
          setClassCategories ( );
          
          setClassTags ( );
          
          // end first order
          
        // begin second order
        
          setMethodsGet ( );
          
          // end second order
          
        };
        
      const listInitialize = ( ) => { // list initialize
      
        const l = p.list;
        
        l.is = _isPageCollectionList ( );
        
        if ( ! l.is ) return; // bail if not list
        
        const tag = _getPageSearchParameterTag ( );
          
        let category = '';
        
        const setCategories = ( ) => {
        
          if ( _is70 ) return; // bail if 7.0
          
          const selector = '.category-link.activeParent, .category-link.active';
          
          const categories = $( selector ).map ( function ( ) {
          
            const category = $( this ).text ( );
            
            return category;
            
            } )
            
            .toArray ( )
            
            .join ( ' > ' );
            
          l.categories = categories;
          
          };
          
        const setCategory = ( ) => {
        
          if ( ! category ) return; // bail if not category
          
          const selector = [
          
            '.filter-by-category', // 7.0 ( Bedford )
            
            '.nested-category-title', // 7.1
            
            // 7.0
            
            '#categoryNav ul li.active-link:not(.all) a', // Avenue
            
            '.ProductList-filter-list-item--active', // Brine
            
            ]
            
            .join ( ', ' );
            
          const c = $( selector )
          
            .eq ( 0 )
            
            .text ( )
            
            .trim ( );
            
          l.category = c;
          
          };
          
        const setCategoryLocal = ( ) => {
        
          switch ( true ) {
          
            case _is70 :
            
              category = _getPageCategory ( );
              
              break;
              
            case _is71 :
            
              const index = p.urlSlug.length + 1;
              
              category = location
              
                .pathname
                
                .slice ( index );
                
              break;
              
            }
            
          };
          
        const setCategoryUrlSlug = ( ) => {
        
          if ( ! category ) return; // bail if no category
          
          let slug = '';
          
          switch ( true ) {
          
            case _is70 :
            
              slug = _getPageFilterSlug ( 'category' );
              
              break;
              
            case _is71 :
            
              slug = location
              
                .pathname
                
                .replace ( twcsl.page.store.urlSlug, '' );
                
              break;
              
            }
            
          l.categoryUrlSlug = slug;
          
          };
          
        const setTag = ( ) => {
        
          if ( ! tag ) return; // bail if not tag
          
          const t = decodeURIComponent ( tag );
          
          l.tag = t;
          
          };
          
        const setTagUrlSlug = ( ) => {
        
          if ( ! tag ) return; // bail if not tag
          
          const slug = _getPageFilterSlug ( 'tag' );
          
          l.tagUrlSlug = slug;
          
          };
          
        //
        
        l.hasTag = Boolean ( tag );
        
        setCategories ( );
        
        setCategoryLocal ( );
        
        //
        
        l.hasCategory = Boolean ( category );
        
        setCategory ( );
        
        setCategoryUrlSlug ( );
        
        setTag ( );
        
        setTagUrlSlug ( );
        
        };
        
      detailInitialize ( );
      
      listInitialize ( );
      
      };
      
    // end private methods
    
  // begin private objects
  
    const _page = {
    
      album : { // 7.0
      
        is : false,
        
        urlSlug : '',
        
        },
        
      blog : {
      
        is : false,
        
        list : {
        
          category : '',
          
          categoryUrlSlug : '',
          
          hasCategory : false,
          
          hasTag : false,
          
          is : false,
          
          tag : '',
          
          tagUrlSlug : '',
          
          },
          
        post : {
        
          categories : [ ],
          
          categoryUrlSlugs : [ ],
          
          tags : [ ],
          
          tagUrlSlugs : [ ],
          
          is : false,
          
          },
          
        urlSlug : '',
        
        },
        
      cart : {
      
        is : location.pathname == '/cart',
        
        },
        
      cover : { // 7.0
      
        is : false,
        
        urlSlug : '',
        
        },
        
      events : {
      
        event : {
        
          categories : [ ],
          
          is : false,
          
          tags : [ ],
          
          },
          
        is : false,
        
        list : {
        
          category : '',
          
          categoryUrlSlug : '',
          
          hasCategory : false,
          
          hasTag : false,
          
          is : false,
          
          tag : '',
          
          tagUrlSlug : '',
          
          },
          
        urlSlug : '',
        
        },
        
      gallery : { // 7.0
      
        is : false,
        
        urlSlug : '',
        
        },
        
      index : { // 7.0
      
        is : false,
        
        urlSlug : '',
        
        },
        
      portfolio : {
      
        is : false,
        
        list : {
        
          is : false
          
          },
          
        subPage : {
        
          is : false
          
          },
          
        urlSlug : '',
        
        },
        
      /* scheduling : { // 7.1
      
        is : false,
        
        }, */
        
      search : {
      
        is : location.pathname == '/search',
        
        },
        
      store : {
      
        detail : {
        
          classCategories : [ ], // 7.0 only
          
          classTags : [ ],
          
          'get' : { },
          
          is : false,
          
          },
          
        is : false,
        
        list : {
        
          categories : '',
          
          category : '',
          
          categoryUrlSlug : '',
          
          hasCategory : false,
          
          hasTag : false,
          
          is : false,
          
          tag : '',
          
          tagUrlSlug : '',
          
          },
          
        urlSlug : '',
        
        },
        
      videos : { // 7.1
      
        is : false,
        
        urlSlug : '',
        
        },
        
      };
      
    const _ss = {
    
      is70    : _is70,
      
      is71    : _is71,
      
      version : _ssVersion,
      
      };
      
    // end private objects
    
  // begin public properties
  
    const version = '0.3.2';
    
    // end public properties
    
  // begin public methods
  
    const getFormFieldLabel = $field => {
    
      const title = $( '.title', $field )
      
        .clone ( )
        
        .children ( )
        
        .remove ( )
        
        .end ( )
        
        .text ( )
        
        .trim ( );
        
      return title;
      
      };
      
    const getFormNth = ( nth = 1 ) => {
    
      // n is 1 based for the user but we need zero based
      
      const $form = $( `.sqs-block-form:eq( ${ --nth } )` );
      
      if ( ! $form.length ) return undefined;
      
      return $( 'form', $form );
      
      };
      
    const getPageSectionNth = ( nth = 1 ) => {
    
      let $e = $( 'x-twc-empty' );
      
      if ( _is71 && nth ) {
      
        $e = $( ':not( #footer-sections ) > .page-section' );
        
        if ( nth > 0 )
        
          nth -= 1;
          
        $e = $e.eq ( nth );
        
        }
        
      if ( ! $e.length )
      
        $e = undefined;
        
      return $e;
      
      };
      
    const getUrlParser = url => {
    
      const parser = document.createElement ( 'a' );
      
      parser.href = url;
      
      return parser;
      
      };
      
    const go = callback => {
    
      switch ( true ) {
      
        case _is71 :
        
          $( callback );
          
          break;
          
        case _is70 :
        
          Squarespace.onInitialize ( Y, callback );
          
          break;
          
        }
        
      };
      
    const isElementInPage = $element => {
    
      const elementHeight = $element.outerHeight ( );
      
      const pageTop = $( '#header' ).outerHeight ( );
      
      const pageHeight = $( window ).height ( ) - pageTop;
      
      const { top, bottom } = $element
      
        .get ( 0 )
        
        .getBoundingClientRect ( );
        
      const b = ( top >= pageTop && bottom <= window.innerHeight ) ||
      
        ( elementHeight > pageHeight && top <= pageTop );
        
      return b;
      
      };
      
    const isElementInViewport = $element => {
    
      const { top, bottom } = $element
      
        .get ( 0 )
        
        .getBoundingClientRect ( );
        
      const b = top >= 0 && bottom <= window.innerHeight;
      
      return b;
      
      };
      
    const scrollEffect = ( callback, easingFunction = 'linear', invertScale =
    
      false ) => {
      
      if ( typeof callback != 'function' ) return; // bail if no callback
      
      const calculateRatio = ( n, whole, easingFunction, invertScale) => {
      
        let ratio = n / whole;  // 0 to 1
        
        switch ( easingFunction ) {
        
          case 'inCircle' :
          
            // < https://easings.net/#easeInCirc >
            
            ratio = 1 - Math.sqrt ( 1 - Math.pow ( ratio, 2 ) );
            
            break;
            
          case 'inOutQuadratic' :
          
            // < https://easings.net/#easeInOutQuad >
            
            ratio = ratio < 0.5 ? 2 * ratio * ratio :
            
              1 - Math.pow ( -2 * ratio + 2, 2 ) / 2;
              
            break;
            
          case 'outCircle' :
          
            // < https://easings.net/#easeOutCirc >
            
            ratio = Math.sqrt ( 1 - Math.pow ( ratio - 1, 2 ) );
            
            break;
            
          }
          
        if ( invertScale ) ratio = 1 - ratio; // 1 to 0
        
        return ratio;
        
        } // end calculateRatio
        
      let maxScrollTop;
      
      $( window )
      
        .resize ( function ( ) {
        
          maxScrollTop = $( document ).height ( ) - $( window ).height ( );
          
          } )
          
        .resize ( )
        
        .scroll ( function ( ) {
        
          const ratio = calculateRatio ( $( window ).scrollTop ( ),
          
            maxScrollTop, easingFunction, invertScale );
            
          callback ( ratio );
          
          } );
          
      };
      
    const urlToCssClassName = url => {
    
      url = getUrlParser ( url );
      
      url = url.pathname;
      
      const className = url
      
        .split ( '/' )
        
        .slice ( -1 )
        
        [ 0 ]
        
        .replace ( /^([\d-_]{1})/, 'x-$1' );
        
      return className;
      
      };
      
    // end public methods
    
  ( ( ) => { // initialize
  
    const initialize = ( ) => {
    
      _pageAlbumInitialize ( );
      
      _pageBlogInitialize ( );
      
      _pageCoverInitialize ( );
      
      _pageEventsInitialize ( );
      
      _pageGalleryInitialize ( );
      
      _pageIndexInitialize ( );
      
      _pagePortfolioInitialize ( );
      
      _pageStoreInitialize ( );
      
      _pageVideosInitialize ( );
      
      };
      
    go ( initialize );
    
    } ) ( );
    
  return {
  
    // begin properties
    
      version : version,
      
      // end properties
      
    // begin methods
    
      getFormFieldLabel   : getFormFieldLabel,
      
      getFormNth          : getFormNth,
      
      getPageSectionNth   : getPageSectionNth,
      
      getUrlParser        : getUrlParser,
      
      go                  : go,
      
      isElementInPage     : isElementInPage,
      
      isElementInViewport : isElementInViewport,
      
      scrollEffect        : scrollEffect,
      
      urlToCssClassName   : urlToCssClassName,
      
      // end methods
      
    // begin objects
    
      navigator : _navigator,
      
      page      : _page,
      
      ss        : _ss,
      
      // end objects
      
    };
    
  } ) ( jQuery );
