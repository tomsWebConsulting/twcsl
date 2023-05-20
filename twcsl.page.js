// debugger;

twcsl.page = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Submodule     : page
  
  Version       : 0.1.0
  
  SS Versions   : 7.1, 7.0
  
  Note          : this sub-module is a stub for page types. other sub-modules
                  will need be added to fill in page object
  
  Dependencies  : twcsl
                  
                  jQuery
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .submodule
    
    .page
    
    =
    
    '0.1.0';
    
  const m = self // method
  
    ._
    
    .page
    
    =
    
    { };
    
  const $ = jQuery;
  
  // begin private methods
  
    m.isCollectionItem = ( ) => {
    
      const selector = 'body[id^="item-"]';
      
      const is = $( selector ).length != 0;
      
      return is;
      
      };
      
    m.isCollectionList = ( ) => {
    
      const selector = 'body[id^="collection-"]';
      
      const is = $( selector ).length != 0;
      
      return is;
      
      };
      
    m.getCategory = ( ) => {
    
      const v = m.getSearchParameter ( 'category' );
      
      return v;
      
      };
      
    m.getFilterSlug = ( filter ) => {
    
      let s;
      
      switch ( true ) {
      
        case self.ss.is70 :
        
          let v = m.getSearchParameter ( filter );
          
          if ( ! v ) return ''; // bail if empty
          
          v = encodeURIComponent ( v )
          
            .replaceAll ( '%20', '+' );
            
          s = v ? `${ filter }=${ v }` : '';
          
          break;
          
        case self.ss.is71 :
        
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
      
    m.getSearchParameter = p => {
    
      let value = new URLSearchParams ( location.search )
      
        .get ( p );
        
      if ( value === null ) value = '';
      
      return value;
      
      };
      
    m.getSearchParameterTag = ( ) => {
    
      const t = m.getSearchParameter ( 'tag' );
      
      return t;
      
      };
      
    // end private methods
    
  // public object
  
  const page = {
  
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
    
  return page;
  
  } ) ( twcsl );
