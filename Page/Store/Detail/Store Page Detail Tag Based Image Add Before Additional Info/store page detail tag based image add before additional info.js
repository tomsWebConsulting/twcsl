( ( ) => {

  /*!
  
    store page detail tag based image add before additional info
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.2.0
    
    SS Versions     : 7.1, 7.0
    
    v7.1
    Products V2
    Compatible      : Yes
    
    v7.1
    Fluid
    Engine
    Compatible      : Yes
    
    v7.0
    Templates       : Brine ( Aria, Blend, Burke, Cacao, Clay, Fairfield, Feed,
                      Foster, Greenwich, Hatch, Heights, Hunter, Hyde, Impact,
                      Jaunt, Juke, Keene, Kin, Lincoln, Maple, Margot, Marta,
                      Mentor, Mercer, Miller, Mojave, Moksha, Motto, Nueva,
                      Pedro, Pursuit, Rally, Rover, Royce, Sofia, Sonora,
                      Stella, Thorne, Vow, Wav, West )
                      
                      your template is not listed? then it is not currently
                      supported
    
    Dependencies    : Page Tags Cache < https://tinyurl.com/4frfus4a >
    
    Note            : the images are added before the Additional Info area of
                      the product detail page
    
    Copyright       : 2021-2025 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title =
    
      'Store Page Detail Tag Based Image Add Before Additional Info',
    
    version = '0.2.0',
    
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2021-2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc ptc sub-module
  
  twc.ptc = ( ( self ) => self ) ( twc.ptc || { } );
  
  // initialize twc ptc callbacks sub-module
  
  twc.ptc.callbacks = ( ( self ) => {
  
    const callback = ( tags ) => {
    
      const isStorePage = Static
      
        .SQUARESPACE_CONTEXT
        
        .collection
        
        ?.type
        
        ===
        
        13;
        
      if ( ! isStorePage ) return; // bail if not store page
      
      const isDetail
      
        =
        
        !!
        
        Static
        
          .SQUARESPACE_CONTEXT
          
          .item;
          
      if ( ! isDetail ) return; // bail if not detail
      
      const
      
        classNameImageUrlMap = { },
        
        codeKey = 'twc-spdtbiabai',
        
        options = codeKey
        
          .split ( '-' )
          
          .reduce ( ( obj, key ) => obj?.[ key ], window ),
          
        columns = options.columns;
          
      let classNames = [
      
        ...
        
        document
        
          .body
          
          .querySelector ( '.product-detail' )
          
          .classList
          
        ];
        
      for ( const tag of tags ) {
      
        const url = options
        
          .tagNameImageUrlMap
          
          [ tag.name ];
          
        if ( ! url ) continue;
        
        classNameImageUrlMap
        
          [ tag.className ]
          
          =
          
          url;
          
        }
        
      classNames = classNames
      
        .filter ( c => c in classNameImageUrlMap );
        
      const
      
        rows = Math.ceil (
        
          classNames.length / columns
          
          ),
          
        span = 12 / columns;
        
      let
      
        count = 1;
        
        template = document
        
          .createElement ( 'template' );
          
      template.innerHTML = `
      
        <section id="${ codeKey }">
        
          <div class="sqs-layout sqs-grid-12 columns-12">
          
            </div> <!-- end grid -->
            
          </section>
          
        `;
        
      const
      
        sectionElement = template
        
          .content
          
          .firstElementChild,
          
        gridElement = sectionElement
        
          .firstElementChild;
          
      for ( r = 0; r < rows; r++ ) {
      
        template.innerHTML = `
        
          <div class="row sqs-row">
          
            </div>
            
          `;
          
        const rowElement = template
        
          .content
          
          .firstElementChild;
          
        for ( c = 0; c < columns; c++ ) {
        
          const url = classNameImageUrlMap [
          
            classNames [ count - 1 ]
            
            ];
            
          rowElement.insertAdjacentHTML (
          
            'beforeend',
            
            `
            
            <div class="col sqs-col-${ span } span-${ span }">
            
              <div class="sqs-block">
              
                <img src="${ url }" style="height : 100%; width : 100%;">
                
                </div>
                
              </div>
              
              `
              
            );
            
          if ( count === classNames.length ) break;
          
          count++;
          
          }
          
        gridElement.append ( rowElement );
        
        }
        
      document
      
        .body
        
        .querySelector ( '.ProductItem-additional' )
        
        .before ( sectionElement );
        
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.ptc.callbacks || [ ] );
    
  } ) ( );
