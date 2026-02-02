# Cart Page Prices Change

### [License][1]

### Synopsis

Changes prices on the Cart page.

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Cart Page Observe Changes][4]

---

## Install

* Install **[Cart Page Observe Changes][5]**. After you install the code be
  sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add code from file **[cart page prices change options.html][8]** to
          Page Settings > Advanced > Page Header Code Injection for the Page.
          Read the code for any instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Cart Page Prices Change -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@19a08f9413e032104ef637ae1f5a490ebc7227d8/Page/Cart/Cart%20Page%20Prices%20Change/cart%20page%20prices%20change.min.js" type="module"></script>
            
            <!-- end TWC Cart Page Prices Change -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
      * v7.1
      
        * Add code from file **[cart page prices change options.html][8]** to
          Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
          for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Cart Page Prices Change -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@19a08f9413e032104ef637ae1f5a490ebc7227d8/Page/Cart/Cart%20Page%20Prices%20Change/cart%20page%20prices%20change.min.js" type="module"></script>
            
            <!-- end TWC Cart Page Prices Change -->
            
          ```
          
      * v7.0
      
        * Add code from file **[cart page prices change options.html][8]** to
          Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Cart Page Prices Change -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@19a08f9413e032104ef637ae1f5a490ebc7227d8/Page/Cart/Cart%20Page%20Prices%20Change/cart%20page%20prices%20change.min.js" type="module"></script>
            
            <!-- end TWC Cart Page Prices Change -->
            
          ```
          
      * Refer to [Add code to code injection][10] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[cart page prices change options.html][8]** to
      Page Settings > Advanced > Page Header Code Injection for the Page. Read
      the code for any instructions within.
      
    * Add code from file **[cart page prices change.html][11]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][9] for details.
    
  * Site-wide
  
    * Use this option if you want to have this effect on all Pages.
      
    * v7.1
    
      * Add code from file **[cart page prices change options.html][8]** to
        Page Settings > Advanced > Page Header Code Injection for the Page. Read
        the code for any instructions within.
        
      * Add code from file **[cart page prices change.html][11]** to Website >
        Pages > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[cart page prices change options.html][8]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        Read the code for any instructions within.
        
      * Add code from file **[cart page prices change.html][11]** to Website >
        Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][10] for details.

## searchReplaceText Example Lines

```javascript
      '$' : '', // remove dollar sign
  ```

```javascript
      '/.*?\\d+(?:,\\d{3})*(?:\\.\\d{2})?/' : 'x828dc1d3', // replacement text function name
  ```

## Callback Example

You can create [callback][12] functions to customize the processing of the cart
page.

Your callbacks must accept a node, stop and start observer parameters and return
replacement text or false. If a callback returns false the rest of the callbacks
won't be called.

```html
<script>

  // initialize twc module
  
  window.twc =
  
    ( ( self ) => self ) ( window.twc || { } );
    
  // initialize twc cppc sub-module
  
  twc.cppc =
  
    ( ( self ) => self ) ( twc.cppc || { } );
    
  // initialize twc cppc callbacks sub-module
  
  twc.cppc.callbacks =
  
    ( ( self ) => {
    
      self.log = ( node, stopObserver, startObserver ) => {
      
        console.log ( 'twc cppc log : ', node );
        
        return 'log';
        
        };
        
      return self;
      
      } )
      
    ( twc.cppc.callbacks || { } );
    
  </script>
```

## Note

Changing prices on the cart page does not effect the Store Pages, checkout, or
other Squarespace pages/backend storage. This is purely a cosmetic change. No
code can change the Checkout Page. It is an Squarespace security feature.

## Make a Donation

Please consider [making a donation][13].

## Changes

* **2026-01-14**

  * moved options out of main code
  * reworked code to use JavaScript Module Patterns for callbacks
  * updated to work with Cart Page Observe Changes v0.4.0
  * removed dependency on jQuery
  * bumped version to 0.4.0
  
* **2022-06-21**

  * fixed regression for quantity changes
  * bumped version to 0.3.1
  
* **2022-06-21**

  * use cart page observe changes
  * bumped version to 0.3.0
  
* **2022-03-29**

  * twcsl 0.2d0 reformat
  * updated classes because of SS changes
  * bumped version to 0.2d1
  
* **2021-09-21**

  * use mutation observer to watch price elements instead of events on quantity
  * bumped version to 0.2d0
  
* **2021-09-04**

  * when quantity is changed run search replace for changed item and subtotal
  * bumped version to 0.1d2
  
* **2021-08-29**

  * added missing is cart page check
  * bumped version to 0.1d1
  
* **2021-08-27**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: cart%20page%20prices%20change%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: cart%20page%20prices%20change.html#L1
[12]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
