( ( ) => {

  /*
  
    analytics traffic geography visits by country remove
    
    License     : < https://tinyurl.com/s872fb68 >
    
    Version     : 0.3.0
    
    Copyright   : 2026 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const
  
    title = 'Analytics Traffic Geography Visits By Country Remove',
    
    version = '0.3.0',
  
    s = `${ title } v${ version }
    
      License < https://tinyurl.com/s872fb68 >
      
      © 2026 Thomas Creedon
      
      Tom's Web Consulting < http://www.tomsWeb.consulting >`
      
      .replace ( /^\s+/gm, '' );
      
  console.log ( s );
  
  const
  
    chartsTitle = 'Visits by Country',
    
    l = location,
    
    screenBodyElement =
    
      document
      
        .body
        
        .querySelector (
        
          'div[ data-test = "screen-body" ]'
          
          ),
          
    titleElement = screenBodyElement
    
      .querySelector (
      
        '.react-charts-title-label'
        
        ),
        
    xPathEvaluate = (
    
      xPathExpression,
      
      contextNode
      
      ) => {
      
        const xPathResults = document
        
          .evaluate (
          
            xPathExpression,
            
            contextNode,
            
            null,
            
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            
            null
            
            );
            
        return xPathResults;
        
      },
      
    isPanel =
    
      l.pathname + l.hash
      
      ===
      
      '/config/analytics#geography'
      
      &&
      
      titleElement
      
        .textContent
        
        .trim ( )
        
      ===
      
      chartsTitle;
      
  if ( ! isPanel ) {
  
    alert (
    
      `TWC ${ title }\n\nNo ${ title } panel.`
      
      );
      
    return;
    
    }
    
  const
  
    codeKey = 'twc-atgvbcr',
    
    message = `TWC ${ title }\n\nEnter a `
    
      +
      
      'comma separated list of countries '
      
      +
      
      'to remove them from the data.\n\n';
      
  let countries = localStorage
  
    .getItem ( codeKey );
    
  countries = prompt (
  
    message,
    
    countries ? countries : ''
    
    );
    
  // bail if cancel
  
  if ( ! countries ) return;
  
  let
  
    countryElementMap,
    
    legendElement,
    
    pathElements,
    
    popupElement,
    
    total;
    
  const
  
    chartWrapperElement =
    
      screenBodyElement.querySelector (
      
        ':scope > div:first-child > '
        
        +
        
        'div:last-child > div'
        
        ),
        
    chartWrapperMutationCallback =
    
      ( mutation ) => {
      
        for ( const n of mutation.addedNodes )
        
          chartWrapperNodeCallback ( n );
          
        },
        
    chartWrapperMutationsCallback =
    
      ( mutations ) => {
      
        for ( const m of mutations )
        
          chartWrapperMutationCallback ( m );
          
        },
        
    chartWrapperNodeCallback = ( node ) => {
    
      const isTitle = titleElement
      
        .textContent
        
        .trim ( )
        
        ===
        
        chartsTitle;
        
      // bail if not title
      
      if ( ! isTitle ) {
      
        popupObserver.disconnect ( );
        
        return;
        
        }
        
      const hasSvg = node
      
        .querySelector ( 'svg' );
        
      // bail if no svg
      
      if ( ! hasSvg ) return;
      
      console.log ( node );
      
      const countryRemovedSet =
      
        screenBodyElement._countryRemovedSet;
        
      pathElements = node
      
        .querySelectorAll ( 'svg g path' );
        
      populateCountryElementMap ( );
      
      for ( const c of countryRemovedSet )
      
        removeChartCountry ( c );
        
      overridePathElementFills ( );
      
      setLegendElement ( );
      
      updateChartLegend ( );
      
      setPopupElement ( );
      
      startPopupObserver ( );
      
      },
      
    chartWrapperObserver =
    
      new MutationObserver (
      
        chartWrapperMutationsCallback
        
        ),
        
    crc32 = ( s ) => {
    
      let crc = ~ 0;
      
      for ( let i = 0; i < s.length; i++ ) {
      
        let c = s.charCodeAt ( i );
        
        crc ^= c;
        
        for ( let k = 0; k < 8; k++ )
        
          crc = ( crc >>> 1 ) ^ ( 0xEDB88320 & - ( crc & 1 ) );
          
        }
        
      crc = ( ~ crc >>> 0 ).toString ( 16 );
      
      return crc;
      
      },
      
    deepDivNumericNodeXpathExpression = `
    
      .//div[
      
        normalize-space ( )
        
        and
        
        not ( * )
        
        and
        
        translate (
        
          normalize-space (),
          
          '0123456789,',
          
          ''
          
          )
          
        =
        
        ''
        
        ]
        
      `,
    
    fillClassNamePrefix = `${ codeKey }-fill-`,
    
    getAncestor = ( element, levels ) => {
    
      if ( ! element ) return null; // bail if no element
      
      while ( element && levels > 0 ) {
      
        element = element
        
          .parentElement;
          
        levels--;
        
        }
        
      return element;
      
      },
      
    getCountry = ( element ) => {
    
      const country = element
      
        .querySelector (
        
          ':scope > div > '
          
          +
          
          'div:first-child > div:last-child'
          
          )
          
        .textContent
        
        .trim ( );
        
      return country;
      
      },
      
    getVisits = ( element ) => {
    
      const visits = Number (
      
        xPathEvaluate (
        
          deepDivNumericNodeXpathExpression,
          
          element
          
          )
          
          .snapshotItem ( 0 )
          
          .textContent
          
          .replace ( /[^0-9.-]/g, '' )
          
        );
        
      return visits;
      
      },
      
    hashCountryMap = {
    
      'b110fc2' : 'Afghanistan',
      '53f14efb' : 'Albania',
      '1ca9a16b' : 'Algeria',
      '97afcfba' : 'Argentina',
      'adc22163' : 'Armenia',
      '2003fe40' : 'Australia',
      '6a83d4db' : 'Austria',
      '89b4ad6b' : 'Azerbaijan',
      '6f612df3' : 'Bahamas',
      'c28c7dc6' : 'Bangladesh',
      '2542d52b' : 'Bhutan',
      '48201993' : 'Belize',
      'ece7231a' : 'Belarus',
      '1e832881' : 'Belgium',
      '3ff2c64f' : 'Benin',
      'ecb6176f' : 'Bolivia',
      '8753ec41' : 'Bosnia and Herzegovina',
      'baa10f16' : 'Botswana',
      '3c3c8221' : 'Brazil',
      'a1187071' : 'Brunei',
      '66a73239' : 'Burkina Faso',
      'c7efd1d6' : 'Burundi',
      'bf746f7d' : 'Cambodia',
      '45bbe42' : 'Cameroon',
      '70a84cf1' : 'Canada',
      'de87b218' : 'Central African Republic',
      '5bad911b' : 'Chile',
      '82722eaf' : 'China',
      'ef89831d' : 'Chad',
      '76e21f28' : 'Colombia',
      'b22ae7b2' : 'Congo',
      '723d68ae' : 'Costa Rica',
      'dcd4f3ac' : 'Croatia',
      'eeaf8e89' : 'Cuba',
      // '81284c97' : 'Karpas Peninsula', // unrecognized "country"
      'fd163cdc' : 'Cyprus',
      'fc3f8c77' : 'Czechia',
      '7f6cf6b9' : 'Denmark',
      'f3790000' : 'Djibouti',
      'ee8588b3' : 'Dominican Republic',
      'eaabc98f' : 'El Salvador',
      '93af25b6' : 'Ecuador',
      '97f163fc' : 'Egypt',
      'd7f494d' : 'Eritrea',
      'c2f1d897' : 'Equatorial Guinea',
      'c45cdf71' : 'Estonia',
      'e563700f' : 'Ethiopia',
      '7e667666' : 'Falkland Islands',
      'b500a7b2' : 'Fiji',
      '4e3239c0' : 'Finland',
      '2cd9118d' : 'France',
      'f7e9e0c9' : 'French Southern Territories',
      '2912fd32' : 'Gabon',
      '4593c7b' : 'Gambia',
      '3fdae383' : 'Georgia',
      '78e8a400' : 'Greece',
      '6ec19655' : 'Greenland',
      '9b43d628' : 'Guatemala',
      '442acf8d' : 'Guyana',
      'bb020ba7' : 'Haiti',
      'a80731b5' : 'Honduras',
      '9328909f' : 'Hungary',
      '1ae5722c' : 'Iceland',
      'a307b36b' : 'India',
      'e0de6ec2' : 'Indonesia',
      '4b01b128' : 'Iran',
      'd8054140' : 'Iraq',
      'f1bc3213' : 'Israel',
      'b4039f33' : 'Italy',
      'e3028b27' : 'Jamaica',
      'db30cf6d' : 'Japan',
      '1520688e' : 'Hashemite Kingdom of Jordan',
      '9df118cf' : 'Kazakhstan',
      '678c6046' : 'Kenya',
      '398b8d9b' : 'Kyrgyzstan',
      'a3839b76' : 'Kuwait',
      'dd07b1e4' : 'Laos',
      '83ad18e9' : 'Latvia',
      '74e9e8c2' : 'Lebanon',
      'f586a670' : 'Lesotho',
      '7f85189b' : 'Liberia',
      '6d0d6658' : 'Libya',
      '5ccfa11b' : 'Republic of Lithuania',
      '2d0f8705' : 'Luxembourg',
      '1868db58' : 'Madagascar',
      '28ae1d3a' : 'Malawi',
      '32b43749' : 'Malaysia',
      '211614be' : 'Mali',
      '1bb57d' : 'Macedonia',
      '1b60e23' : 'Myanmar [Burma]',
      'fb1a463c' : 'Mauritania',
      '271ab835' : 'Mexico',
      '7f114418' : 'Montenegro',
      '34eee187' : 'Mongolia',
      '90b0b94f' : 'Mozambique',
      'ffbac294' : 'Nicaragua',
      'e871c589' : 'Netherlands',
      '249182e0' : 'Nepal',
      '2e7ee99f' : 'Namibia',
      'e22cf1ae' : 'New Zealand',
      '7dbeee3c' : 'New Caledonia',
      '2d6d3707' : 'Niger',
      '58fc5670' : 'Nigeria',
      'a780f0ee' : 'North Korea',
      'a3cc74e0' : 'Norway',
      '7dd262d0' : 'Oman',
      '43c6956b' : 'Pakistan',
      'bec61ea9' : 'Panama',
      'a03b34fc' : 'Paraguay',
      'd678e633' : 'Papua New Guinea',
      'c0d0f2d' : 'Philippines',
      'deeace94' : 'Poland',
      '3450185f' : 'Portugal',
      'e11dfc66' : 'Puerto Rico',
      '169d0640' : 'Palestine',
      '1aa1a3ab' : 'Qatar',
      '43e037f7' : 'Romania',
      '97781c29' : 'Russia',
      'fa2d6cdd' : 'Rwanda',
      'f5ce7316' : 'Saudi Arabia',
      'f9b9d1f1' : 'Serbia',
      '8a15fcc9' : 'Senegal',
      '1243cbb9' : 'Solomon Islands',
      '1c5de365' : 'Somalia',
      // '63244aad' : 'Somaliland', // unrecognized "country"
      'c387421b' : 'Sudan',
      '6ee6f3c3' : 'South Sudan',
      'fd5882b6' : 'South Africa',
      '57e9797' : 'Sierra Leone',
      'fbca975a' : 'Slovak Republic',
      '60d54255' : 'Slovenia',
      '42ec5c1c' : 'Sri Lanka',
      '5e931bcb' : 'United Kingdom',
      '72290fe4' : 'Sweden',
      '2e39b9f' : 'Switzerland',
      'c9060979' : 'Syria',
      '94d4f6f2' : 'Taiwan',
      'eaa5334d' : 'Tajikistan',
      'f766f176' : 'Tanzania',
      '39ca86d8' : 'Thailand',
      'ad1a4a67' : 'East Timor',
      '60a835c6' : 'Trinidad and Tobago',
      '12659fb9' : 'Tunisia',
      '5a769258' : 'Turkey',
      'fdd19662' : 'Turkmenistan',
      '32496057' : 'Ukraine',
      '31e469d2' : 'United States',
      '323c84b8' : 'Uzbekistan',
      '77ca4a6a' : 'Vanuatu',
      'dea3159a' : 'Venezuela',
      'fa7c7de7' : 'Vietnam',
      'a0c15ca0' : 'Western Sahara',
      '9241600c' : 'Yemen',
      '324b4354' : 'Zambia',
      '70717981' : 'Zimbabwe',
      // '3206fae6' : '', // garbage data
    
      },
      
    hasChartMutationObserver =
    
      screenBodyElement
      
        ._hasChartMutationObserver,
        
    hasFillBinsCountriesMap =
    
      screenBodyElement
      
        ._fillBinsCountriesMap,
        
    hasPopupObserver =
    
      screenBodyElement
      
        ._hasPopupObserver,
        
    isStyleAdded = document
    
      .getElementById ( codeKey ),
      
    overridePathElementFills = ( ) => {
    
      const 
      
        entries = Object.entries (
        
          screenBodyElement
        
            ._fillBinsCountries
            
            .map
            
          );
          
      for (
      
        const [ bin, countries ] of entries
        
        ) {
        
          for ( const c of countries ) {
          
            const elements =
            
              countryElementMap [ c ];
              
            // continue if no element
            
            if ( ! elements ) continue;
            
            for ( const e of elements ) {
            
              e.className.baseVal =
              
                `${ fillClassNamePrefix }${ bin }`;
                
              }
              
            }
            
        }
        
      },
      
    populateCountryElementMap = ( ) => {
    
      countryElementMap = { };
      
      for ( const e of pathElements ) {
      
        const name = hashCountryMap [
        
          crc32 ( e.getAttribute ( 'd' ) )
          
          ];
          
        // if no name continue
        
        if ( ! name ) continue;
        
        const hasName = countryElementMap [ name ];
        
        if ( ! hasName )
        
          countryElementMap [ name ] = [ ];
          
        countryElementMap [ name ].push ( e );
        
        }
        
      },
      
    popupMutationCallback = ( mutation ) => {
    
      for ( const n of mutation.addedNodes )
      
        popupNodeCallback ( n );
        
      },
      
    popupMutationsCallback = ( mutations ) => {
    
      for ( const m of mutations )
      
        popupMutationCallback ( m );
        
      },
      
    popupNodeCallback = ( node ) => {
    
      const isCountry = screenBodyElement
      
        ._countryRemovedSet
      
        .has (
        
          node.textContent.trim ( )
          
          );
          
      // bail if no country
      
      if ( ! isCountry ) return;
      
      node
      
        .parentElement
        
        .nextElementSibling
        
        .textContent
        
        =
        
        0;
        
      },
      
    popupObserver = new MutationObserver (
    
      popupMutationsCallback
      
      ),
      
    removeChartCountry = ( c ) => {
    
      const element = countryElementMap [ c ];
      
      // bail if no element;
      
      if ( ! element ) return;
      
      for ( const e of element ) {
      
        e.classList.add ( `${ codeKey }-removed` );
        
        e.addEventListener (
        
          'click',
          
          e => {
          
            e.stopImmediatePropagation ( );
            
            e.preventDefault ( );
            
            },
            
          true
          
          );
          
        }
        
      },
      
    setLegendElement = ( ) => {
    
      legendElement = chartWrapperElement
      
        .querySelector (
        
          ':scope > div > *:nth-child( 2 )'
          
          );
          
      },
      
    setPopupElement = ( ) => {
    
      popupElement =
      
        chartWrapperElement.querySelector (
        
          'div > *:last-child > p:first-child'
          
          );
          
      },
      
    startPopupObserver = ( ) => {
    
      // start listening for changes in element
      
      popupObserver.observe (
      
        popupElement,
        
        { childList : true }
        
        );
        
      },
      
    tableDataWrapperElement =
    
      screenBodyElement
      
        .querySelector (
        
          ':scope > div:last-child > '
          
          +
          
          'div > div:last-child'
          
          ),
          
    totalNode = screenBodyElement
    
      .querySelector (
      
        '.react-charts-title-total'
        
        )
        
      .firstChild,
      
    updateChartLegend = ( ) => {
    
      const fillBinsCountries =
      
        screenBodyElement
        
          ._fillBinsCountries;
          
      legendElement.querySelector (
      
        ':scope > *:first-child'
        
        )
        
        .textContent
        
        =
        
        fillBinsCountries
        
          .min;
          
      legendElement.querySelector (
      
        ':scope > *:last-child'
        
        )
        
        .textContent
        
        =
        
        fillBinsCountries
        
          .max;
          
      };
      
  localStorage
  
    .setItem ( codeKey, countries );
    
  countries =
  
    countries.split ( /\s*,\s*/ );
    
  pathElements = chartWrapperElement
  
    .querySelectorAll ( 'svg g path' );
    
  total = Number (
  
    totalNode
    
      .textContent
      
      .replace ( /[^0-9.-]/g, '' )
      
    );
    
  setLegendElement ( );
  
  if ( ! isStyleAdded )
  
    document.head.insertAdjacentHTML (
    
      'beforeend',
      
      `
      
        <style id="${ codeKey }">
        
          .${ fillClassNamePrefix }1 {
          
            fill : rgb( 208, 208, 208 ) !important;
            
            }
            
          .${ fillClassNamePrefix }2 {
          
            fill : rgb( 161, 161, 161 ) !important;
            
            }
            
          .${ fillClassNamePrefix }3 {
          
            fill : rgb( 121, 121, 121 ) !important;
            
            }
            
          .${ fillClassNamePrefix }4 {
          
            fill : rgb( 98, 98, 98 ) !important;
            
            }
            
          .${ fillClassNamePrefix }5 {
          
            fill : rgb( 62, 62, 62 ) !important;
            
            }
            
          .${ codeKey }-removed {
          
            fill : red !important;
            
            }
            
          </style>
          
        `
        
      );
      
  // country set
  
  {
  
    if ( ! screenBodyElement._countryRemovedSet )
    
      screenBodyElement
      
        ._countryRemovedSet
        
        =
        
        new Set ( );
        
    for ( const c of countries )
    
      screenBodyElement
      
        ._countryRemovedSet
        
        .add ( c );
        
    }
    
  populateCountryElementMap ( );
  
  // countries filter
  
  for ( const c of countries ) {
  
    const element = getAncestor (
    
      xPathEvaluate (
      
        `
        
          .//div[
          
            normalize-space ( ) = '${ c }'
            
            and
            
            not (
            
              .//div[
              
                normalize-space ( ) = '${ c }'
                
                ]
                
              )
              
            ]
            
          `,
          
        screenBodyElement
        
        )
        
        .snapshotItem ( 0 ),
        
      5
      
      );
      
    // continue if no element
    
    if ( ! element ) continue;
    
    const visits = getVisits (
    
      element
      
      );
      
    total -= visits;
    
    removeChartCountry ( c );
    
    element.remove ( );
    
    }
    
  // new total
  
  totalNode.textContent = total
  
    .toLocaleString (
    
      'en-US',
      
      { maximumFractionDigits : 0 }
      
      );
      
  // percentages
  
  {
  
    const elements =
    
      tableDataWrapperElement
        
        .children;
        
    for ( const e of elements ) {
    
      const percentage =
      
        ( getVisits ( e ) / total )
        
        .toLocaleString (
        
          'en-US',
          
          {
                
            style : 'percent',
            
            minimumFractionDigits : 0,
            
            maximumFractionDigits: 2
            
            }
            
          );
          
      xPathEvaluate (
      
        `
        
          .//div[
          
            not ( * )
            
            ]/text ( )[
            
              contains ( ., '%' )
              
              ]
    
          `,
          
        e
        
        )
        
        .snapshotItem ( 0 )
        
        .textContent
        
        =
        
        percentage;
        
      }
      
    }
    
  // fill bins countries
  
  {
  
    screenBodyElement
    
      ._fillBinsCountries = {
      
        map : {
        
          1 : [ ],
          
          2 : [ ],
          
          3 : [ ],
          
          4 : [ ],
          
          5 : [ ]
          
          },
          
        max : undefined,
        
        min : undefined
        
        };
        
    const
    
      bins = 5,
      
      conceptualMin = 0,
      
      elements = tableDataWrapperElement
      
        .children,
        
      fillBinsCountries =
      
        screenBodyElement
        
          ._fillBinsCountries,
          
      map = { };
      
    for ( const e of elements ) {
    
      const country = getCountry ( e );
      
      map [ country ] = getVisits ( e );
      
      }
      
    const
    
      entries = Object.entries ( map ),
      
      values = Object.values ( map ),
      
      max = Math.max ( ... values ),
      
      min = Math.min ( ... values ),
      
      step =
      
        ( max - conceptualMin )
        
        /
        
        bins,
        
      getBucket = ( v ) => {
      
        /*
        
          zero is a real choropleth value,
          but we don't recolor it, continue
          
          */
          
        if ( v === 0 ) return 0;
      
        let rawBucket =
        
          Math.floor ( v / step ) + 1;
          
        // clamp into 1 – 5
        
        rawBucket =
        
          Math.max ( 1, rawBucket );
          
        rawBucket =
        
          Math.min ( bins, rawBucket );
          
        return rawBucket;
        
        };
        
    fillBinsCountries.max = max;
    
    fillBinsCountries.min = min;
    
    for ( const [ k, v ] of entries ) {
    
      fillBinsCountries.map [
      
        `${ getBucket ( v ) }`
        
        ]
        
        .push ( k );
        
      }
      
    }
    
  overridePathElementFills ( );
  
  updateChartLegend ( );
  
  if ( ! hasChartMutationObserver ) {
  
    // start listening for changes in map wrapper
    
    chartWrapperObserver.observe (
    
      chartWrapperElement,
      
      { childList : true }
      
      );
      
    screenBodyElement
    
      ._hasChartMutationObserver
      
      =
      
      true;
      
    }
    
  if ( ! hasPopupObserver ) {
  
    setPopupElement ( );
    
    startPopupObserver ( );
    
    screenBodyElement
    
      ._hasPopupObserver
      
      =
      
      true;
      
    }
    
  } ) ( );
