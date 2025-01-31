( ( ) => {

  /*
  
    url reroute code generator for brad good's multi-language technique
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.1.0
    
    Copyright   : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title =
    
      'URL Reroute Code Generator for Brad Good\'s Multi-language Technique',
      
    version = '0.1.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2025 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    codeKey = 'twc-urcgfbgmt',
    
    myWindow = window.open ( '', codeKey ),
    
    dcmnt = myWindow.document,
    
    isWindowNew = dcmnt
    
      .head
      
      .querySelector ( 'title' )
      
      ===
      
      null;
      
  if ( isWindowNew ) {
  
    const
    
      copyCallback = ( element ) => {
      
        const callback = ( event ) => {
        
          const
          
            element = event
            
              .target,
              
            textareaElement = element
            
              .closest ( 'section' )
              
              .querySelector ( 'textarea' );
              
          textareaElement.select ( );
          
          dcmnt.execCommand ( 'copy' );
      
          };
          
        element
        
          .addEventListener ( 'click', callback );
          
        },
        
      generateCallback = ( event ) => {
      
        const
        
          errorElement = dcmnt
          
            .querySelector ( '#error' );
            
        let map;
        
        errorElement
        
          .innerHTML = '';
          
        errorElement
        
          .classList
          
          .remove ( 'active' );
          
        try {
        
          const json = jsonTextAreaElement
              
            .value
            
          map = JSON
          
            .parse ( json );
            
          } catch ( e ) {
          
            errorElement
            
              .innerHTML = e;
              
            errorElement
            
              .classList
              
              .add ( 'active' );
              
            map = null;
            
            }
            
        if ( map === null ) return; // bail no map
        
        let html = `
        
          <script>
          
            $( ( ) => {
            
              /* SETUP URL REROUTE FOR MATCHING LANGUAGE PAGE */
              
              switch ( window.location.pathname ) {
              
          `;
          
        errorElement
        
          .innerHTML = '';
          
        for ( const [ key, urls ] of Object.entries ( map ) ) {
        
          const
          
            keyBeginHtml = `///
              ///
                /* begin ${ key } pages */
                
              `,
              
            keyEndHtml = `///
              ///
                  /* end ${ key } pages */
                  
              `;
              
          html += keyBeginHtml;
          
          for ( const c of urls ) {
          
            console.log ( 'case : ', c );
            
            const
            
              caseBeginHtml = `///
                ///
                  case '/${ c }' :
                  
                `,
                
              caseEndHtml = `///
                ///
                    break;
                    
                `;
                
            html += caseBeginHtml;
            
            for ( const url of urls ) {
            
              if ( c === url ) continue;
              
              if ( url [ 0 ] === '/' )
              
                url = url.slice ( 1 );
                
              const urlHtml = `///
                ///
                    \$( ".language a.lang-${ url.split ( '/' ) [ 0 ] }" )
                    
                      .attr ( "href", "/${ url }" );
                      
                `;
                
              html += urlHtml;
              
              }
              
            html += caseEndHtml;
            
            }
            
          html += keyEndHtml;
          
          }
        
        html += `///
          ///
                }
                
              } );
              
            </script>
            
          `;
        
        html = html
        
          .replace ( /^ +\/\/\/|^\/\/\/$/gm, '' )
          
          .replace ( /\n+/gm, '\n' )
          
          .replace ( /^          /gm, '' )
          
          .trim ( )
          
          +
          
          '\n';
          
        codeTextAreaElement
        
          .value = html;
          
        },
        
      html = `
      
        <h1>
        
          TWC ${ title }
          
          </h1>
          
        <div id="sectionsWrapper">
        
          <section id="json">
          
            <div class="section-header">
            
              <h2>
              
                JSON
                
                </h2>
                
              <button class="copy" type="submit">
              
                Copy JSON
                
                </button>
                
              </div>
              
            <p>
            
              The structure of the JSON consists of a key and an array of URL
              SLUGs. This pattern can be repeated for as many reroutes as
              needed. The key serves as a label in the generated code. The URL
              SLUGS are precisely what can be copied from the
              
              <strong>
              
                URL SLUG
                
                </strong>
                
              field in Page Settings.
              
              </p>
            
            <p id="error">
            
              </p>
            
            <textarea></textarea>
            
            </section>
            
          <section id="code">
          
            <div class="section-header">
            
              <h2>
              
                Code
                
                </h2>
                
              <button id="generate" type="submit">
              
                Generate Code
                
                </button>
                
              <button class="copy" type="submit">
              
                Copy Code
                
                </button>
                
              </div>
              
            <textarea></textarea>
            
            </section>
            
          </div>
          
        `,
        
      json = `
      
        {
        
          "home" : [
          
            "en/home",
            
            "fi/koti",
            
            "sv/hem"
          
            ],
            
          "services" : [
          
            "en/services",
            
            "fi/palvelut",
            
            "sv/tjanster"
          
            ]
            
          }
          
        `
        
        .replace ( /^        /gm, '' )
        
        .trim ( ),
        
      styleHtml = `
      
        <style type="text/css">
        
          html,
          body
          
            {
            
              height : 99%;
              
              }
              
          body {
          
            display : flex;
            flex-direction : column;
            
            }
            
          button {
          
            cursor : pointer;
            margin : auto;
            white-space : nowrap;
            
            }
          
          h1,
          section p
          
            {
            
              flex : 0 1 auto;
              
              }
              
          h1 {
          
            text-align : center;
            
            }
            
          h2 {
          
            flex : 1 1 auto;
            margin : 0;
            
            }
            
          section {
          
            display : flex;
            flex-direction : column;
            gap : 20px;
            width : 50%;
            
            }
            
          section p {
          
            margin : 0;
            
            }
            
          textarea,
          #sectionsWrapper
          
            {
            
              flex : 1 1 auto;
              
              }
              
          textarea {
          
            white-space : nowrap;
            
            }
            
          #error {
          
            color : red;
            display : none;
            
            }
            
          #error.active {
          
            display : unset;
            
            }
            
          #sectionsWrapper {
          
            display : flex;
            gap : 20px;
            
            }
            
          .section-header {
          
            align-items : center;
            display : flex;
            gap : 20px;
            
            }
            
          </style>
          
        `,
        
      titleHtml = `
      
        <title>
        
          ${
          
            codeKey
            
              .replace ( '-', ' ' )
              
              .toUpperCase ( )
              
            }
          
          </title>
          
        `;
        
    dcmnt
    
      .head
      
      .insertAdjacentHTML ( 'beforeend', styleHtml );
      
    dcmnt
    
      .head
      
      .insertAdjacentHTML ( 'beforeend', titleHtml );
      
    dcmnt
    
      .body
      
      .innerHTML = html;
      
    if ( json === null )
    
      json = jsonTemplate;
      
    const
    
      codeTextAreaElement = dcmnt
      
        .querySelector ( '#code textarea' ),
        
      generateButtonElement = dcmnt
      
        .querySelector ( '#generate' ),
        
      jsonTextAreaElement = dcmnt
      
        .querySelector ( '#json textarea' );
        
    generateButtonElement
    
      .addEventListener ( 'click', generateCallback );
      
    jsonTextAreaElement
    
      .value = json;
      
    generateButtonElement
    
      .click ( );
      
    dcmnt
    
      .querySelectorAll ( '.copy' )
      
      .forEach ( copyCallback );
      
    }
    
  } ) ( );
