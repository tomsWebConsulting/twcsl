# Store Page Detail Variant Selected Callback

### [License][1]

### Synopsis

Create effects when a variant is selected.

### Version

  * 0.4.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Store Page Detail Variant Selected Callback -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@1b4712c6e7182513b89e70e87a8fc4f7853f6fde/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Variant%20Selected%20Callback/store%20page%20detail%20variant%20selected%20callback.min.js" type="module"></script>
          
          <!-- end TWC Store Page Detail Variant Selected Callback -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      * Add code from file **[add to cart button active hours options.html][7]**
        to Website > Pages > Custom Code > Code Injection > FOOTER. Read the
        code for any instructions within.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Store Page Detail Variant Selected Callback -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@1b4712c6e7182513b89e70e87a8fc4f7853f6fde/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Variant%20Selected%20Callback/store%20page%20detail%20variant%20selected%20callback.min.js" type="module"></script>
          
          <!-- end TWC Store Page Detail Variant Selected Callback -->
          
        ```
        
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[store page detail variant selected
      callback.html][9]** to Page Settings > Advanced >
      Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][6] for details.
    
  * Site-wide
  
    * Add code from file **[store page detail variant selected
      callback.html][9]** to Website > Pages > Custom Code > Code Injection >
      FOOTER.
      
    * Refer to [Add code to code injection][8] for details.

## Callback Example

You can create a [callback][8] function to customize the processing of the
product variant selected.

Your callback must accept four parameters :

  * sku ( string )
  
  * selectedVariant ( JavaScript object, the selected variant data )
  
  * context  ( JavaScript object, context of of the variant )
  
  * element ( DOM element )
  
```html
<script>

    // initialize twc module
    
    window.twc = window.twc || { };
    
    // initialize twc spdvsc sub-module
    
    twc.spdvsc = twc.spdvsc || { };
    
  // initialize twc spdvsc callbacks sub-module
  
  twc.spdvsc.callbacks = ( ( self ) => {
  
    const callback = (
    
      sku,
      
      selectedVariant,
      
      context,
      
      element
      
      ) => {
      
        console.log (
        
          'spdvsc log sku : ',
          
          sku
          
          );
          
        console.log (
        
          'spdvsc log selectedVariant : ',
          
          selectedVariant
          
          );
          
        console.log (
        
          'spdvsc log context : ',
          
          context
          
          );
          
        console.log (
        
          'spdvsc log element : ',
          
          element
          
          );
          
        };
        
    self.push ( callback );
    
    return self;
    
    } ) ( twc.spdvsc.callbacks || [ ] );
    
  </script>

```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2026-05-24**

  * updated to better work with Products V2 changes
  * removed support for v7.0
  * bumped version to 0.4.0
  
* **2024-09-15**

  * rework code to use JavaScript Module Patterns for twc, twc.spdvsc, and
    twc.spdvsc.callbacks. makes the initialization code a bit more dense but
    removes the need for the user to dive into this code to set callbacks. they
    just need to add a callback per that codes instructions
  * bumped version to 0.3.0
  
* **2023-10-20**

  * set sku to empty string when no variant is selected
  * bumped version to 0.2.0
  
* **2023-02-10**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: store%20page%20detail%20variant%20selected%20callback.html#L1
[11]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
