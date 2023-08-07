( function ( ) {

  /*
  
    blog post date past go to
    
    License     : < https://bit.ly/3F8sn8W >
    
    Version     : 0.2.0
    
    SS Version  : 7.1
    
    Fluid
    Engine
    Compatible  : Not Applicable
    
    Note        : this effect is only active in SS Preview
    
    By          : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    License     : < https://bit.ly/3Ob7JsO >
    
    no user serviceable parts below
    
    */
    
  const documentElement = document.documentElement; // html element
  
  let b = documentElement
    
    .classList
    
    .contains ( 'squarespace-damask' );
    
  if ( ! b ) return; // bail not squarespace site
  
  const codeKey = 'twc-bpdpgt';
  
  b = document.body.querySelector ( `#${ codeKey }` ) != null;
  
  if ( b ) return; // bail if already installed
  
  const goTo = ( event ) => {
  
    event.preventDefault ( );
    
    const button = document
    
      .body
      
      .querySelector ( '[data-test="month-nav-previous"]' );
      
    if ( button == null ) {
    
      alert ( 'Please select the Published or Scheduled option.' );
      
      return; // bail if not published or scheduled selected
      
      }
      
    const day = document
    
      .body
      
      .querySelector ( `#${ codeKey } .day` )
      
      .value;
      
    const monthDiff = ( dateFrom, dateTo ) => {
    
      dateFrom = new Date ( dateFrom );
      
      dateTo = new Date ( dateTo );
      
      const m = dateTo.getMonth ( )
      
        -
        
        dateFrom.getMonth ( )
        
        +
        
        (
        
          12
          
          *
          
          (
          
            dateTo.getFullYear ( )
            
            -
            
            dateFrom.getFullYear ( )
            
            )
            
          );
          
      return m;
      
      };
      
    const year = document
    
      .body
      
      .querySelector ( `#${ codeKey } .year` )
      
      .value;
      
    let element = document.querySelector ( '[data-test="nav-text"]' );
    
    let i = 0;
    
    let month = document
    
      .body
      
      .querySelector ( `#${ codeKey } .month` )
      
      .value;
      
    const b = ! month || ! year;
    
    if ( b ) return; // bail if bad date
    
    let months = [
    
      'January',
      
      'February',
      
      'March',
      
      'April',
      
      'May',
      
      'June',
      
      'July',
      
      'August',
      
      'September',
      
      'October',
      
      'November',
      
      'December'
      
      ];
      
    month = months [ --month ];
    
    let dateTarget = `${ month } ${ year }`;
    
    months = monthDiff ( dateTarget, element.textContent );
    
    if ( months < 0 ) {
    
      alert ( 'Blog Post Date Past Go To only goes to a past month year.' );
      
      return; // bail if date target is in future
      
      }
      
    const click = ( ) => {
    
      if ( i++ == months ) {
      
        let seconds = dateTarget.replace ( ' ', ` ${ day } ` );
        
        seconds = + new Date ( seconds );
        
        document
        
          .body
          
          .querySelector ( `[data-value="${ seconds }"]` )
          
          .click ( );
          
        return;
        
        };
        
      button.click ( );
      
      setTimeout ( click, 10 );
      
      };
      
    click ( );
    
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
          
            <input class="year" name="year" placeholder="YYYY" type="number">
            
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
    
      #twc-bpdpgt .date-inputs {

        border : none;
        display : flex;
        gap : 1em;
        margin-top : 0.5em;
        padding-block : unset;
        padding-inline : unset;
        
        }
        
      #twc-bpdpgt .date-inputs input {
      
        background-color : #f5f5f5;
        padding : 5px 10px;
        width : 3em;
        
        }
        
      #twc-bpdpgt .date-inputs label {

        display : block;
        padding-left : 10px;
        
        }
        
      #twc-bpdpgt .date-inputs input:first-child {
      
        width : 4em;
        
        }
        
      #twc-bpdpgt .date-inputs input[type="submit"] {

        border : 1px solid;
        border-radius : 10px;
        width : 5em;
        
        }
        
      #twc-bpdpgt .date-inputs button:hover {
      
        background-color : #f5f5f5;
        
        }
        
      #twc-bpdpgt .date-inputs button:active {
      
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
    
  } ( ) );
