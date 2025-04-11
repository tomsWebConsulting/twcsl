# Store Page Detail Add to Cart Button Text Change

### [License][1]

### Synopsis

Change the add, adding, added, and added post status text of the add to cart
button.

### Version

  * 0.6.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page detail add to cart button text
      change.html][5]** to Page Settings > Advanced > Page Header Code Injection
      for the store page. Refer to [Per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page detail add to cart button text
      change.html][5]** to Website > Pages > Website Tools > Code Injection >
      FOOTER. Refer to [Add code to code injection][7] for details.
      
* Read the code for any instructions within.

## Guard Callbacks (Optional)

A guard callback is code that will stop the effect from being applied. Following
is a very generalized example of a callback.

```html
<script>

  ( ( ) => {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc spdatcbtc sub-module
    
    twc.fbwoc = ( ( self ) => self ) ( twc.fbwoc || { } );
    
    // initialize twc spdatcbtc callbacks sub-module
    
    twc.spdatcbtc.callbacks = ( ( self ) => {
    
      self
      
        [ 'twcSpdatcbtcLog' ]
        
        =
        
        ( ) => {
        
          console.log ( 'twcSpdatcbtcLog' );
          
          return false; // stops callbacks from running
          
          };
          
      return self;
      
      } ) ( twc.spdatcbtc.callbacks || { } );
      
    } ) ( );
    
  </script>
```

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-04-08**

  * added slovak language
  * added support for multiple guard callbacks
  * remove dependency on twcsl
  * remove dependency on jQuery
  * bumped version to 0.6.0
  
* **2025-01-09**

  * fix with code not working as expected and a restructuring
  * bumped version to 0.5.0
  
* **2024-10-09**

  * added several spanish languages
  * now works with layouts that more than one button
  * fix for new add on atc buttons getting munged
  * fix erroneous this references causing code not to work
  * bumped version to 0.4.0
  
* **2023-09-21**

  * added guardCallback
  * added support for v7.0 Ajax Loading
  * bumped version to 0.3.0
  
* **2022-01-05**

  * added English (Canada) language
  * bumped version to 0.2d1
  
* **2022-01-05**

  * folded in code from change add to cart button original label
  * folded in code from Change Add to Cart Adding Added Button Text effect
  * altered code to support predefined languages, only a few now
  * bumped version to 0.2d0
  
* **2021-11-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: store%20page%20detail%20add%20to%20cart%20button%20text%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-add-to-cart-button-text-change/p/earth-sky-planter?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
