# Calendar Block Observe Changes

### [License][1]

### Synopsis

Observe changes to calendar block and call custom callbacks.

### Version

  * 0.5.0

#### SS Versions

  * 7.1
  
  * 7.0

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
      
      * Add code from file **[calendar block observe changes options.html][6]**
        to Page Settings > Advanced > Page Header Code Injection for the Page.
        Read the code for any instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Calendar Block Observe Changes -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a16f766c16ae63a1e477681b9d6f010baadc7c16/Block/Calendar/Calendar%20Block%20Observe%20Changes/calendar%20block%20observe%20changes.min.js" type="module"></script>
          
          <!-- end TWC Calendar Block Observe Changes -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Store pages.
      
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
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[calendar block observe changes options.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the Page. Read
      the code for any instructions within.
      
    * Add code from file **[calendar block observe changes.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][7] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * v7.1
    
      * Add code from file **[calendar block observe changes options.html][6]**
        to Page Settings > Advanced > Page Header Code Injection for the Page.
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

You can create [callback][6] functions to customize Calendar Block Events.

Your callbacks must accept an element and a type. Type value is a string of day,
event, flyout, item, marker, or undefined type. Type values day and event
represent the same element in two different states.

```html
<!-- begin TWC CBOC Log -->

  <script>
  
    ( ( ) => {
    
      /*
      
        twc cboc log
        
        License           : < https://tinyurl.com/s872fb68 >
        
        Version           : 0.5.0
        
        SS Versions       : 7.1, 7.0
        
        Copyright         : 2022-2026 Thomas Creedon
                            
                            Tom's Web Consulting
                            
                            < http://www.tomsWeb.consulting/ >
        
        no user serviceable parts below
        
        */
        
      // initialize twc module
      
      window.twc = window.twc || { };
      
      // initialize twc cboc sub-module
      
      twc.cboc = twc.cboc || { };
      
      // initialize twc cboc callbacks sub-module
      
      twc.cboc.callbacks = ( ( self ) => {
      
        const callback = ( element, type ) => {
        
          // debugger;
          
          console.log (
          
            'twc cboc log element :',
            
            element
            
            );
            
          console.log (
          
            'twc cboc log type :',
            
            type
            
            );
            
          };
          
        self.push ( callback );
        
        return self;
        
        } ) ( twc.cboc.callbacks || [ ] );
        
      } ) ( );
      
    </script>
    
  <!-- end TWC CBOC Log -->
```

## Note

This code is meant as a base for other effects.

## Make a Donation

Please consider [making a donation][5].

## Changes

* **2026-10-23**

  * reworked so that all elements of each Calendar Block are observed
  * bumped version to 0.5.0
  
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
