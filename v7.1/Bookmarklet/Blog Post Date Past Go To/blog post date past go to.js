( function ( ) {

  /*
  
    blog post date past go to
    
    License     : < https://bit.ly/3F8sn8W >
    
    Version     : 0.1.0
    
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
  
  const selector = '.vzz2ym99upYZOvj_GZAI'; // calendar
  
  let element = document.body.querySelector ( selector );
  
  if ( element == null ) return; // bail if no calendar
  
  const prefix = 'twc-bpdpgt';
  
  element = element.parentElement;
    
  b = element.querySelector ( `#${ prefix }` ) != null;
  
  if ( b ) return; // bail if already installed
  
  const goTo = ( event ) => {
  
    event.preventDefault ( );
    
    const button =
    
      document.querySelector ( '[data-test="month-nav-previous"]' );
      
    const day = document
    
      .querySelector ( `#${ prefix } .day` )
      
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
    
      .querySelector ( `#${ prefix } .year` )
      
      .value;
      
    let element = document.querySelector ( '[data-test="nav-text"]' );
    
    let i = 0;
    
    let month = document
    
      .querySelector ( `#${ prefix } .month` )
      
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
        
          .querySelector ( `[data-value="${ seconds }"]` )
          
          .click ( );
          
        return;
        
        };
        
      button.click ( );
      
      setTimeout ( click, 10 );
      
      };
      
    click ( );
    
    };
    
  const html = `
  
    <div>
    
      <label class="css-jqwt0d" id="${ prefix }-label">
      
        Target Date
        
        </label>
        
      </div>
      
    <form class="css-roynbj" id="${ prefix }">
    
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
      
    `;
    
  const style = `
  
    <style>
    
      #${ prefix } .date-inputs {

        border : none;
        display : flex;
        gap : 1em;
        margin-left : 22px;
        margin-top : 0.5em;
        padding-block : unset;
        padding-inline : unset;
        
        }
        
      #${ prefix } .date-inputs input {
      
        background-color : #f5f5f5;
        padding : 5px 10px;
        width : 3em;
        
        }
        
      #${ prefix } .date-inputs label {

        display : block;
        padding-left : 10px;
        
        }
        
      #${ prefix } .date-inputs input:first-child {
      
        width : 4em;
        
        }
        
      #${ prefix } .date-inputs input[type="submit"] {
      
        border-radius : 10px;
        width : 5em;
        
        }
        
      #${ prefix } .date-inputs button:hover {
      
        background-color : #f5f5f5;
        
        }
        
      #${ prefix } .date-inputs button:active {
      
        background-color : #e1e1e1;
        
        }
        
      </style>
      
    `;
    
  document
  
    .head
    
    .insertAdjacentHTML ( 'beforeend', style );
    
  element.insertAdjacentHTML ( 'beforeend', html );
  
  element
  
    .querySelector ( `#${ prefix }` )
    
    .addEventListener ( 'submit', goTo );
    
  element.scrollTo ( 0, element.scrollHeight );
  
  } ( ) );
