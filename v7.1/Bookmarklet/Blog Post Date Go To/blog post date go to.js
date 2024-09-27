( ( ) => {

  /*
  
    blog post date go to
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.3.0
    
    SS Version  : 7.1
    
    Fluid
    Engine
    Compatible  : Not Applicable
    
    Note        : this effect is only active in SS Preview
    
    Copyright   : 2022-2024 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  let b = document
  
    .documentElement
    
    .classList
    
    .contains ( 'squarespace-damask' );
    
  if ( ! b ) return; // bail not squarespace site
  
  const codeKey = 'twc-bpdgt';
  
  b = document
  
    .body
    
    .querySelector ( `#${ codeKey }` )
    
    !=
    
    null;
    
  if ( b ) return; // bail if already installed
  
  const goTo = ( event ) => {
  
    event.preventDefault ( );
    
    let
    
      selector = '[data-test="month-nav-previous"]',
      
      element = document
      
        .body
        
        .querySelector ( selector );
        
    if ( element === null ) {
    
      alert ( 'Please select the Published or Scheduled option.' );
      
      return; // bail if not published or scheduled selected
      
      }
      
    selector = `#${ codeKey }`;
    
    element = document
    
      .body
      
      .querySelector ( selector );
      
    const
    
      timeZone = Static
      
        .SQUARESPACE_CONTEXT
        
        .website
        
        .timeZone,
        
      day = element
      
        .querySelector ( '.day' )
        
        .value
        
        .padStart ( 2, '0' ),
        
      longOffsetFormatter = new Intl
      
        .DateTimeFormat (
        
          'en-US',
          
          {
          
            timeZone : timeZone, 
            
            timeZoneName : 'longOffset'
            
            }
            
          ),
          
      month = element
      
        .querySelector ( '.month' )
        
        .value
        
        .padStart ( 2, '0' ),
        
      year = element
      
        .querySelector ( '.year' )
        
        .value;
        
    let value = `${ year }-${ month }-${ day }T00:00:00`;
    
    const
    
      longOffsetString = longOffsetFormatter
      
        .format (
        
          new Date ( value )
          
          ),
          
      gmtOffset = longOffsetString
      
        .split ( 'GMT' )
        
        [ 1 ];
        
    value = new Date (
    
      `${ value }${ gmtOffset }`
      
      )
      
      .valueOf ( );
      
    selector = '[ data-value ][ role = "button" ]:last-child';
    
    element = document
    
      .body
      
      .querySelector ( selector );
      
    element
      
      .setAttribute ( 'data-value', value );
      
    element
    
      .click ( );
      
    };
    
  const selector = 'label'; // calendar
  
  const elementLabels = [
  
    ...
    
    document
  
    .body
    
    .querySelectorAll ( selector )
    
    ];
    
  let elementOptions = elementLabels
  
    .filter ( l => l.textContent.includes ( 'Options' ) )
    
    [ 0 ];
    
  const labelClasses = elementOptions
  
    .classList
    
    .toString ( );
    
  const optionClasses = elementOptions
  
    .nextElementSibling
    
    .classList
    
    .toString ( );
    
  const html = `
  
    <div id="${ codeKey }">
    
      <label class="${ labelClasses }">
      
        Target Date
        
        </label>
        
      <form class="${ optionClasses }">
      
        <fieldset class="date-inputs">
        
          <div>
          
            <input class="year" min="1970" name="year" placeholder="YYYY" type="number">
            
            <label class="label" for="year">
            
              YYYY
              
              </label>
              
            </div>
            
          <div>
          
            <input class="month" min="1" max="12" placeholder="MM" name="month" type="number">
            
            <label class="label" for="month">
            
              MM
              
              </label>
              
            </div>
            
          <div>
          
            <input class="day" min="1" max="31" placeholder="DD" name="day" type="number">
            
            <label class="label" for="day">
            
              DD
              
              </label>
              
            </div>
            
          <div>
          
            <div>
            
              <input type="submit" value="Go To" />
              
              <div>
              
                </div>
                
              </div>
              
          </fieldset>
          
        </form>
      
      </div>
      
    `;
    
  const style = `
  
    <style>
    
      #twc-bpdgt .date-inputs {

        border : none;
        display : flex;
        gap : 1em;
        margin-top : 0.5em;
        padding-block : unset;
        padding-inline : unset;
        
        }
        
      #twc-bpdgt .date-inputs input {
      
        background-color : #f5f5f5;
        padding : 5px 10px;
        width : 3em;
        
        }
        
      #twc-bpdgt .date-inputs label {

        display : block;
        padding-left : 10px;
        
        }
        
      #twc-bpdgt .date-inputs input:first-child {
      
        width : 4em;
        
        }
        
      #twc-bpdgt .date-inputs input[type="submit"] {

        border : 1px solid;
        border-radius : 10px;
        width : 5em;
        
        }
        
      #twc-bpdgt .date-inputs button:hover {
      
        background-color : #f5f5f5;
        
        }
        
      #twc-bpdgt .date-inputs button:active {
      
        background-color : #e1e1e1;
        
        }
        
      </style>
      
    `;
    
  elementOptions = elementOptions
  
    .parentElement;
    
  document
  
    .head
    
    .insertAdjacentHTML ( 'beforeend', style );
    
  elementOptions
  
    .insertAdjacentHTML ( 'afterend', html );
    
  document
  
    .body
    
    .querySelector ( `#${ codeKey }` )
    
    .addEventListener ( 'submit', goTo );
    
  } ) ( );
