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
  
    /* enter window context here */
    
    );
