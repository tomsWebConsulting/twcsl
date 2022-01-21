const twcsl = ( ( $ ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Version         : 0.1d18
  
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
  
  Dependancies    : jQuery
  
  By              : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  // begin private properties
  
    // begin first order
    
      const _blogPage = {
      
        categories : [ ],
        
        category : '',
        
        categoryUrlSlug : '',
        
        categoryUrlSlugs : [ ],
        
        hasCategory : false,
        
        hasTag : false,
        
        isBlogPage : false,
        
        isList : false,
        
        isPost : false,
        
        tag : '',
        
        tags : [ ],
        
        tagUrlSlug : '',
        
        tagUrlSlugs : [ ],
        
        urlSlug : '',
        
        };
        
      const _eventsPage = {
      
        categories : [ ],
        
        category : '',
        
        categoryUrlSlug : '',
        
        categoryUrlSlugs : [ ],
        
        hasCategory : false,
        
        hasTag : false,
        
        isEvent : false,
        
        isEventsPage : false,
        
        tag : '',
        
        tags : [ ],
        
        tagUrlSlug : '',
        
        tagUrlSlugs : [ ],
        
        urlSlug : '',
        
        };
        
      const _isCart = location.pathname == '/cart';
      
      const _isSearch = location.pathname == '/search';
      
      const _navigator = {
      
        hasTouchScreen : false,
        
        };
        
      const _ssVersion = Static.SQUARESPACE_CONTEXT.templateVersion;
      
      const _storePage = {
      
        category : '',
        
        categoryUrlSlug : '',
        
        classCategories : [ ], // 7.0
        
        classTags : [ ],
        
        hasCategory : false,
        
        hasTag : false,
        
        isDetail : false,
        
        isStorePage : false,
        
        tag : '',
        
        tagUrlSlug : '',
        
        urlSlug : '',
        
        };
        
      // begin _urlSlug
      
        let _urlSlug = '';
        
        try {
        
          _urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
          
          } catch ( e ) { }
          
        // end _urlSlug
        
      // end first order
      
    // begin second order
    
      const _is70 = _ssVersion == '7';
      
      const _is71 = _ssVersion == '7.1';
      
      // end second order
      
    // end private properties
    
  // begin private methods
  
    // begin first order
    
      const _getClassEventlistFilterText = ( ) => {
      
        const text = $( '.eventlist-filter' )
        
          .text ( )
          
          .split ( ': ' ) [ 1 ]
          
          .replace ( /(?:“)(.+)(?:”)/, '$1' )
          
          .trim ( );
          
        return text;
        
        }
        
      const _getHrefQueryStringParameterKeyValuePairs = p => {
      
        const keyValuePairs = $( '[href*="?' + p + '="]' )
        
          .map ( function ( ) {
          
            const keyValuePair = $( this )
            
              .attr ( 'href' )
              
              .split ( '?' ) [ 1 ];
              
            return keyValuePair;
            
            } )
            
          .toArray ( );
          
        return keyValuePairs;
        
        };
        
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
        
      const _isCollectionItemPage = ( ) => {
      
        return $( 'body[id^="item-"]' ).length != 0;
        
        };
        
      // end first order
      
    // begin second order
    
      const _getPageCategory = ( ) => {
      
        return _getPageSearchParameter ( 'category' );
        
        };
        
      const _getPageFilterSlug = ( filter ) => {
      
        let value = _getPageSearchParameter ( filter );
        
        if ( ! value ) return ''; // bail if empty
        
        value = encodeURIComponent ( value )
        
          .replaceAll ( '%20', '+' );
          
        const slug = value ? `${ filter }=${ value }` : '';
        
        return slug;
        
        };
        
      // end second order
      
    // begin third order
    
      const _initializeBlogPage = ( ) => { // initialize blogPage
      
        // begin first order
        
          const o = _blogPage;
          
          const selector = [
          
            'body[class~="collection-type-blog"]',
            
            'body[class*="collection-type-blog-"]',
            
            ]
            
            .join ( ', ' );
            
          o.isBlogPage = Boolean ( $( selector ).length );
          
          if ( ! o.isBlogPage ) return; // bail if not blog page
          
          // end first order
          
        // begin second order
        
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
            
          o.isPost = _isCollectionItemPage ( );
          
          o.urlSlug = _urlSlug;
          
          // end second order
          
        // begin third order
        
          const getPageFilterSlug = ( filter ) => {
          
            if ( o.isPost ) return ''; // bail if post
            
            const pathnameParts = location
            
              .pathname
              
              .split ( '/' );
              
            const pathnamePartFilter = pathnameParts
              
              .slice ( -2, -1 ) [ 0 ]; // position of filter
              
            // bail if not filter of interest
            
            if ( filter != pathnamePartFilter ) return '';
            
            let slug = '/' +
            
              pathnameParts
              
              .slice ( -1 ) [ 0 ];
              
            return slug;
            
            }; // end getPageFilterSlug
            
          o.categoryUrlSlug = ( ( ) => {
          
            const slug = getPageFilterSlug ( 'category' );
            
            return slug;
            
            } ) ( );
            
          o.isList = ! o.isPost;
          
          o.tagUrlSlug = ( ( ) => {
          
            const slug = getPageFilterSlug ( 'tag' );
            
            return slug;
            
            } ) ( );
            
          // end third order
          
        // begin forth order
        
          o.categories = ( ( ) => {
          
            if ( o.isList ) return [ ]; // bail if list
            
            const categories = $( categorySelector )
            
              .map ( function ( ) {
              
                const category = $( this )
                
                  .text ( )
                  
                  .trim ( );
                  
                return category;
                
                } )
                
              .toArray ( );
              
            return categories;
            
            } ) ( ); // end categories
            
          o.categoryUrlSlugs = ( ( ) => {
          
            if ( o.isList ) return [ ]; // bail if list
            
            const urlSlugs = $( categorySelector )
            
              .map ( function ( ) {
              
                const urlSlug = $( this )
                
                  .attr ( 'href' )
                  
                  .replace ( o.urlSlug + '/category', '' );
                  
                return urlSlug;
                
                } )
                
              .toArray ( );
              
            return urlSlugs;
            
            } ) ( ); // end categoryUrlSlugs
            
          o.hasCategory = Boolean ( o.categoryUrlSlug );
          
          o.hasTag = Boolean ( o.tagUrlSlug );
          
          o.tags = ( ( ) => {
          
            if ( o.isList ) return [ ]; // bail if list
            
            const tags = $( tagsSelector )
            
              .map ( function ( ) {
              
                const tag = $( this )
                
                  .text ( )
                  
                  .trim ( );
                  
                return tag;
                
                } )
                
              .toArray ( );
              
            return tags;
            
            } ) ( ); // end tags
            
          o.tagUrlSlugs = ( ( ) => {
          
            if ( o.isList ) return [ ]; // bail if list
            
            const urlSlugs = $( tagsSelector )
            
              .map ( function ( ) {
              
                const urlSlug = $( this )
                
                  .attr ( 'href' )
                  
                  .replace ( o.urlSlug + '/tag', '' );
                  
                return urlSlug;
                
                } )
                
              .toArray ( );
              
            return urlSlugs;
            
            } ) ( ); // tagUrlSlugs
            
          // end forth order
          
        // begin fifth order
        
          o.category = ( ( ) => {
          
            if ( ! o.hasCategory ) return ''; // bail if not category
            
            let category = $( 'title' )
            
              .text ( )
              
              .split ( ' — ' ) [ 0 ];
              
            return category;
            
            } ) ( ); // end category
            
          o.tag = ( ( ) => {
          
            if ( ! o.hasTag ) return ''; // bail if not tag
            
            let tag = $( 'title' )
            
              .text ( )
              
              .split ( ' — ' ) [ 0 ];
              
            return tag;
            
            } ) ( ); // end tag
            
          // end fifth order
          
        }; // end initialize blogPage
        
      const _initializeEventsPage = ( ) => { // initialize eventsPage
      
        const o = _eventsPage;
        
        const selector =
        
          'body[class~="collection-type-events"], ' +
          
          'body[class*="collection-type-events-"]';
          
        o.isEventsPage = Boolean ( $( selector ).length );
        
        if ( ! o.isEventsPage ) return; // bail if not event page
        
        // begin first order
        
          o.isEvent = _isCollectionItemPage ( );
          
          o.urlSlug = _urlSlug;
          
          // end first order
          
        // begin second order
        
          o.categories = ( ( ) => {
          
            if ( ! o.isEvent ) return [ ]; // bail if not detail
            
            const categories = $( '.eventitem-meta-cats a' )
            
              .map ( function ( ) {
              
                const category = $( this )
                
                  .text ( )
                  
                  .trim ( );
                  
                return category;
                
                } )
                
              .toArray ( );
              
            return categories;
            
            } ) ( );
            
          o.categoryUrlSlug = ( ( ) => {
          
            if ( o.isEvent ) return ''; // bail if detail
            
            const slug = _getPageFilterSlug ( 'category' );
            
            return slug;
            
            } ) ( );
            
          o.categoryUrlSlugs = ( ( ) => {
          
            if ( ! o.isEvent ) return [ ]; // bail if not detail
            
            return _getHrefQueryStringParameterKeyValuePairs ( 'category' );
            
            } ) ( );
            
          o.tags = ( ( ) => {
          
            if ( ! o.isEvent ) return [ ]; // bail if not detail
            
            const tags = $( '.eventitem-meta-tags a' )
            
              .map ( function ( ) {
              
                const tag = $( this )
                
                  .text ( )
                  
                  .trim ( );
                  
                return tag;
                
                } )
                
              .toArray ( );
              
            return tags;
            
            } ) ( );
            
          o.tagUrlSlug = ( ( ) => {
          
            if ( o.isEvent ) return ''; // bail if detail
            
            const slug = _getPageFilterSlug ( 'tag' );
            
            return slug;
            
            } ) ( );
            
          o.tagUrlSlugs = ( ( ) => {
          
            if ( ! o.isEvent ) return [ ]; // bail if not detail
            
            return _getHrefQueryStringParameterKeyValuePairs ( 'tag' );
            
            } ) ( );
            
          // end second order
          
        // begin third order
        
          o.hasCategory = Boolean ( o.categoryUrlSlug );
          
          o.hasTag = Boolean ( o.tagUrlSlug );
          
          // end third order
          
        // begin forth order
        
          o.category = ( ( ) => {
          
            if ( ! o.hasCategory ) return ''; // bail if not category
            
            return _getClassEventlistFilterText ( );
            
            } ) ( );
            
          o.tag = ( ( ) => {
          
            if ( ! o.hasTag ) return ''; // bail if not tag
            
            return _getClassEventlistFilterText ( );;
            
            } ) ( );
            
          // end forth order
          
        }; // end initialize eventsPage
        
      const _initializeStorePage = ( ) => { // initialize _storePage
      
        const o = _storePage;
        
        o.isStorePage = $( 'body' ).hasClass ( 'collection-type-products' );
        
        if ( ! o.isStorePage ) return; // bail if not store page
        
        // begin first order
        
          o.isDetail = _isCollectionItemPage ( );
          
          o.urlSlug = _urlSlug;
          
          // end first order
          
        // begin second order
        
          o.categoryUrlSlug = ( ( ) => {
          
            if ( o.isDetail ) return ''; // bail if detail
            
            let slug = '';
            
            switch ( true ) {
            
              case _is70 :
              
                slug = _getPageFilterSlug ( 'category' );
                
                break;
                
              case _is71 :
              
                slug = '/' + location.pathname
                
                  .split ( '/' )
                  
                  .slice ( -1 ) [ 0 ];
                  
                break;
                
              }
              
            return slug;
            
            } ) ( );
            
          o.classCategories = ( ( ) => {
          
            if ( ! o.isDetail ) return [ ]; // bail if not detail
            
            if ( _is71 ) return [ ]; // bail if 7.1
            
            const selector = [
            
              // 7.0
              
              '.ProductItem', // Brine
              
              '.productWrapper', // ?
              
              '#productWrapper', // ?
              
              ]
              
              .join ( ', ' );
              
            let categories = $( selector )
            
              .attr ( 'class' )
              
              .split ( ' ' )
              
              .filter ( clss => clss.startsWith ( 'category-' ) )
              
              .map ( ( category ) => {
              
                return category.slice ( 9 );
                
                } );
                
            return categories;
            
            } ) ( );
            
          o.classTags = ( ( ) => {
          
            if ( ! o.isDetail ) return [ ]; // bail if not detail
            
            const selector = [
            
              '.pdp-layout', // 7.1
              
              '.ProductItem', // 7.1, 7.0 ( Brine )
              
              // 7.0
              
              '.productWrapper', // ?
              
              '#productWrapper', // ?
              
              ]
              
              .join ( ', ' );
              
            let tags = $( selector )
            
              .attr ( 'class' )
              
              .split ( ' ' )
              
              .filter ( clss => clss.startsWith ( 'tag-' ) )
              
              .map ( ( tag ) => {
              
                return tag.slice ( 4 );
                
                } );
                
            return tags;
            
            } ) ( );
            
          o.tagUrlSlug = ( ( ) => {
          
            if ( o.isDetail ) return ''; // bail if detail
            
            const slug = _getPageFilterSlug ( 'tag' );
            
            return slug;
            
            } ) ( );
            
          // end second order
          
        // begin third order
        
          o.hasCategory = Boolean ( o.categoryUrlSlug );
          
          o.hasTag = Boolean ( o.tagUrlSlug );
          
          // end third order
          
        // begin forth order
        
          o.category = ( ( ) => {
          
            if ( ! o.hasCategory ) return ''; // bail if not category
            
            const selector =
            
              // begin first order
              
                '.filter-by-category, ' + // Bedford
                
                '.nested-category-title, ' + // 7.1
                
                // end first order
                
              // begin second order
              
                '#categoryNav ul li.active-link:not(.all) a, ' + // Avenue
                
                '.ProductList-filter-list-item--active'; // Brine
                
                // end second order
                
            const category = $( selector )
            
              .eq ( 0 )
              
              .text ( )
              
              .trim ( );
              
            return category;
            
            } ) ( );
            
          o.tag = ( ( ) => {
          
            if ( ! o.hasTag ) return ''; // bail if not tag
            
            if ( ! _is70 ) return ''; // bail if not 7.0
            
            const $tag = $( '.filter-by-tag' );
            
            const tag = $tag
            
              .text ( )
              
              .trim ( );
              
            return tag;
            
            } ) ( );
            
          // end forth order
          
        }; // end initialize _storePage
        
      // end third order
      
    // end private methods
    
  // begin public properties
  
    const version = '0.1d18';
    
    // end public properties
    
  // begin public methods
  
    // begin get first page section
    
      const getFirstPageSection = ( ) => {
      
        let $element = $( 'x-twc-empty' );
        
        if ( _is71 )
        
          $element = $( ':not( #footer-sections ) > .page-section:first' );
          
        return $element;
        
        };
        
      // end get first page section
      
    // begin get form field label
    
      const getFormFieldLabel = $field => {
      
        const title = $( '.title', $field )
        
          .clone ( )
          
          .children ( )
          
          .remove ( )
          
          .end ( )
          
          .text ( )
          
          .trim ( );
          
        return title;
        
        }
        
      // end get form field label
      
    // begin get form nth
    
      const getFormNth = ( nth = 1 ) => {
      
        // n is 1 based for the user but we need zero based
        
        const $form = $( '.sqs-block-form:eq( ' + --nth + ' )' );
        
        if ( ! $form.length ) return undefined;
        
        return $( 'form', $form );
        
        }
        
      // end get form nth
      
    // begin get url parser
    
      const getUrlParser = url => {
      
        const parser = document.createElement ( 'a' );
        
        parser.href = url;
        
        return parser;
        
        }
        
      // end get url parser
      
    // begin is element in viewport
    
      const isElementInViewport = $element => {
      
        const { top, bottom } = $element
        
          .get ( 0 )
          
          .getBoundingClientRect ( );
          
        const b = top >= 0 && bottom <= window.innerHeight;
        
        return b;
        
        }
        
      // end is element in viewport
      
    // begin scroll effect
    
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
        
        // end scroll effect
        
    // end public methods
    
  Squarespace.onInitialize ( Y, ( ) => { // initialize
  
    _initializeBlogPage ( );
    
    _initializeEventsPage ( );
    
    _initializeNavigator ( );
    
    _initializeStorePage ( );
    
    } );
    
  return {
  
    // begin methods
    
      getFirstPageSection : getFirstPageSection,
      
      getFormFieldLabel   : getFormFieldLabel,
      
      getFormNth          : getFormNth,
      
      getUrlParser        : getUrlParser,
      
      isElementInViewport : isElementInViewport,
      
      scrollEffect        : scrollEffect,
      
      // end methods
      
    // begin properties
    
      blogPage          : _blogPage,
      
      eventsPage        : _eventsPage,
      
      is70              : _is70,
      
      is71              : _is71,
      
      isCart            : _isCart,
      
      isSearch          : _isSearch,
      
      navigator         : _navigator,
      
      ssVersion         : _ssVersion,
      
      storePage         : _storePage,
      
      version           : version,
      
      // end properties
      
    };
    
  } ) ( jQuery );
