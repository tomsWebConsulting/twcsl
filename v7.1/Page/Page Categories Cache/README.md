# Page Categories Cache

### [License][1]

### Synopsis

Cache Page categories in sessionStorage.

### Version

  * 0.2.1

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Not Applicable
  
#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add code from file **[page categories cache options.html][6]** to
        Page Settings > Advanced > Page Header Code Injection for the Page. Read
        the code for any instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Page Categories Cache -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@1341dd8e08957ba20da65284d9e171d71bc03c65/v7.1/Page/Page%20Categories%20Cache/page%20categories%20cache.min.js" type="module"></script>
          
          <!-- end TWC Page Categories Cache -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * Add code from file **[page categories cache options.html][6]** to
        Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
        for any instructions within.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Page Categories Cache -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@1341dd8e08957ba20da65284d9e171d71bc03c65/v7.1/Page/Page%20Categories%20Cache/page%20categories%20cache.min.js" type="module"></script>
          
          <!-- end TWC Page Categories Cache -->
          
        ```
        
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[page categories cache options.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the Page. Read
      the code for any instructions within.
      
    * Add code from file **[page categories cache.html][9]** to Page Settings >
      Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][7] for details.
      
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * Add code from file **[page categories cache options.html][6]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
      for any instructions within.
      
    * Add code from file **[page categories cache.html][9]** to Website >
      Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][8] for details.

## Callback Example

You can create [callback][10] functions to customize the processing of the
categories or use them.

Your callback must accept an array parameter.

```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc pcc sub-module
  
  twc.pcc = ( ( self ) => self ) ( twc.pcc || { } );
  
  // initialize twc pcc callbacks sub-module
  
  twc.pcc.callbacks = ( ( self ) => {
  
    const callback = ( categories ) => {
    
      console.log ( 'twc pcc log : ', categories );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.pcc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-02-25**

  * restored JSON to object conversion
  * bumped version to 0.2.1
  
* **2026-02-25**

  * removed support for Squarespace v7.0
  * replaced undocumented API call with format=json
  * bumped version to 0.2.0
  
* **2026-01-05**

  * moved has callbacks check into dlcCallback
  * bumped version to 0.1.1
  
* **2026-01-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: page%20categories%20cache%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: page%20categories%20cache.html#L1
[10]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
