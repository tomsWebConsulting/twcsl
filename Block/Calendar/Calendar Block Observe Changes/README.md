# Calendar Block Observe Changes

### [License][1]

### Synopsis

Observe changes to calendar block and call custom callbacks.

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one page.
        
      * Add code from file **[calendar block observe changes options.html][6]**
        to Page Settings > Advanced > Page Header Code Injection for the page.
        Read the code for any instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the page.
        
        ```html
        <!-- begin TWC Calendar Block Observe Changes -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a16f766c16ae63a1e477681b9d6f010baadc7c16/Block/Calendar/Calendar%20Block%20Observe%20Changes/calendar%20block%20observe%20changes.min.js" type="module"></script>
          
          <!-- end TWC Calendar Block Observe Changes -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * v7.1
      
        * Add code from file **[calendar block observe changes
          options.html][6]** to Website > Pages > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Calendar Block Observe Changes -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a16f766c16ae63a1e477681b9d6f010baadc7c16/Block/Calendar/Calendar%20Block%20Observe%20Changes/calendar%20block%20observe%20changes.min.js" type="module"></script>
            
            <!-- end TWC Calendar Block Observe Changes -->
            
          ```
          
      * v7.0
      
        * Add code from file **[calendar block observe changes
          options.html][6]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Calendar Block Observe Changes -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a16f766c16ae63a1e477681b9d6f010baadc7c16/Block/Calendar/Calendar%20Block%20Observe%20Changes/calendar%20block%20observe%20changes.min.js" type="module"></script>
            
            <!-- end TWC Calendar Block Observe Changes -->
            
          ```
          
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one page.
      
    * Add code from file **[calendar block observe changes options.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Read
      the code for any instructions within.
      
    * Add code from file **[calendar block observe changes.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the page.
      
    * Refer to [per-page code injection][7] for details.
    
  * Site-wide
  
    * Use this option if you want to have this effect on all pages.
      
    * v7.1
    
      * Add code from file **[calendar block observe changes options.html][6]**
        to Page Settings > Advanced > Page Header Code Injection for the page.
        Read the code for any instructions within.
        
      * Add code from file **[calendar block observe changes.html][9]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[calendar block observe changes options.html][6]**
        to Website > Pages > Website Tools > Custom Code > Code Injection >
        FOOTER. Read the code for any instructions within.
        
      * Add code from file **[calendar block observe changes.html][9]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][8] for details.

## Callback Examples

You can create [callback][6] functions to customize calendar block events.

Your callbacks must accept an element.

```html
<script>

  ( ( ) => {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc cboc sub-module
    
    twc.cboc = ( ( self ) => self ) ( twc.cboc || { } );
    
    // initialize twc cboc callbacks sub-module
    
    twc.cboc.callbacks = ( ( self ) => self ) ( twc.cboc.callbacks || { } );
      
    // initialize twc cboc callbacks item sub-module
    
    twc.cboc.callbacks.item = ( ( self ) => {
    
      const callback = ( element ) => {
      
        console.log ( 'cboc item log element : ', element );
        
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cboc.callbacks.item || [ ] );
      
    } ) ( );
    
  </script>
```

```html
<script>

  ( ( ) => {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc cboc sub-module
    
    twc.cboc = ( ( self ) => self ) ( twc.cboc || { } );
    
    // initialize twc cboc callbacks sub-module
    
    twc.cboc.callbacks = ( ( self ) => self ) ( twc.cboc.callbacks || { } );
      
    // initialize twc cboc callbacks flyOutItem sub-module
    
    twc.cboc.callbacks.flyOutItem = ( ( self ) => {
    
      const callback = ( element ) => {
      
        console.log ( 'cboc flyOutItem log element : ', element );
        
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cboc.callbacks.flyOutItem || [ ] );
      
    } ) ( );
    
  </script>
```

## Note

This code is meant as a base for other effects.

## Make a Donation

Please consider [making a donation][5].

## Changes

* **2025-12-30**

  * moved options out of main code
  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.4.0
  
* **2023-02-09**

  * added v7.0 Brine template family Event page view calendar
  * added v7.0 Brine template family calendar block support
  * bumped version to 0.3.0
  
* **2022-08-09**

  * added ability to call multiple functions
  * bumped version to 0.2.0
  
* **2022-04-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: calendar%20block%20observe%20changes%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: calendar%20block%20observe%20changes.html#L1
[10]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
