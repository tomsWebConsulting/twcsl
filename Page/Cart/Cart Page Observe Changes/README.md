# Cart Page Observe Changes

### [License][1]

### Synopsis

Observe changes to the cart page and call custom callbacks as nodes are
added or removed from the [DOM][2].

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][5], a [CDN][6])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the page.
        
        ```html
        <!-- begin TWC Cart Page Observe Changes -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c002830e7ae685fd1401c562383f90077b89289c/Page/Cart/Cart%20Page%20Observe%20Changes/cart%20page%20observe%20changes.min.js" type="module"></script>
          
          <!-- end TWC Cart Page Observe Changes -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Cart Page Observe Changes -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c002830e7ae685fd1401c562383f90077b89289c/Page/Cart/Cart%20Page%20Observe%20Changes/cart%20page%20observe%20changes.min.js" type="module"></script>
          
          <!-- end TWC Cart Page Observe Changes -->
          
        ```
        
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on
  your site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[cart page observe changes.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the page.
      
    * Refer to [per-page code injection][7] for details.
    
  * Site-wide
  
    * Use this option if you want to have this effect on all Pages.
      
    * Add code from file **[cart page observe changes.html][9]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][8] for details.

## Callback Example

You can create [callback][10] functions to customize the processing of the cart
page.

Your callbacks must accept an node as a parameter.

```html
<script>

  // initialize twc module
  
  window.twc =
  
    ( ( self ) => self ) ( window.twc || { } );
    
  // initialize twc cpoc sub-module
  
  twc.cpoc =
  
    ( ( self ) => self ) ( twc.cpoc || { } );
    
  // initialize twc cpoc callbacks sub-module
  
  twc.cpoc.callbacks =
  
    ( ( self ) => self )
    
    ( twc.cpoc.callbacks || { } );
    
  // initialize twc cpoc callbacks added sub-module
  
  twc.cpoc.callbacks.added =
  
    ( ( self ) => {
    
      const callback = ( node, stopObserver, startObserver ) => {
      
        console.log ( 'twc cpoc added log : ', node );
        
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cpoc.callbacks.added || [ ] );
      
  </script>
```

```html
<script>

  // initialize twc module
  
  window.twc =
  
    ( ( self ) => self ) ( window.twc || { } );
    
  // initialize twc cpoc sub-module
  
  twc.cpoc =
  
    ( ( self ) => self ) ( twc.cpoc || { } );
    
  // initialize twc cpoc callbacks sub-module
  
  twc.cpoc.callbacks =
  
    ( ( self ) => self )
    
    ( twc.cpoc.callbacks || { } );
    
  // initialize twc cpoc callbacks removed sub-module
  
  twc.cpoc.callbacks.removed =
  
    ( ( self ) => {
    
      const callback = ( node, stopObserver, startObserver ) => {
      
        console.log ( 'twc cpoc removed log : ', node );
        
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.cpoc.callbacks.removed || [ ] );
      
  </script>
```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-01-14**

  * updated to pass stopObserver and startObserver parameters to callbacks
  * bumped version to 0.4.0
  
* **2026-01-03**

  * updated to use module pattern for adding callbacks
  * bumped version to 0.3.0
  
* **2024-05-01**

  * improve error reporting
  * bumped version to 0.2.2
  
* **2024-04-29**

  * define callbacks as strings
  * bumped version to 0.2.1
  
* **2024-04-28**

  * improved handling of nodes
  * removed dependency on jQuery
  * bumped version to 0.2.0
  
* **2022-02-25**

  * changed a const name, no functional changes
  * added example callback to read me
  * bumped version to 0.1d1
  
* **2022-01-16**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://www.jsdelivr.com/
[6]: https://en.wikipedia.org/wiki/Content_delivery_network
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: cart%20page%20observe%20changes.html#L1
[10]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
