# Store Page Detail Add To Cart Button Added Callbacks

### [License][1]

### Synopsis

Call callbacks after clicking the Add to Cart button and Squarespace indicates
the product has been added to the cart.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single store page you want to have this
      effect.
      
    * Add code from file **[store page detail add to cart button added
      callbacks.html][4]** to Store Page Settings > Advanced >
      Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple store pages where you want to have
      this effect.
      
    * v7.1
    
      * Add code from file **[store page detail add to cart button added
        callbacks.html][4]** to Website > Pages > Custom Code > Code Injection >
        FOOTER.
        
    * v7.0
    
      * Add code from file **[store page detail add to cart button added
        callbacks.html][4]** to Website > Pages > Website Tools > Custom Code >
        Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][6].

## Callbacks

You can create [callback][7] functions to customize the user experience.

Following is a very generalized example of a callback.

```html
<script>

  ( ( ) => {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc spdatcbac sub-module
    
    twc.spdatcbac = ( ( self ) => self ) ( twc.spdatcbac || { } );
    
    // initialize twc spdatcbac callbacks sub-module
    
    twc.spdatcbac.callbacks = ( ( self ) => {
    
      const callback = ( ) => {
      
        console.log ( 'twc spdatcbac log' );
        
        };
        
      self.push ( callback );
      
      return self;
      
      } ) ( twc.spdatcbac.callbacks || [ ] );
      
    } ) ( );
    
  </script>
```

## Note

This code is meant as a base for other effects. The code alone shouldn't produce
any visible change.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-11-15**

  * updated to work with changes made by Squarespace for how the add to cart
    changes the status messages
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2023-02-18**

  * remove jQuery document ready at top level for 7.1/7.0 code
  * bumped version to 0.1.2
  
* **2023-02-17**

  * it helps if the 7.1/7.0 initialization code is in place
  * bumped version to 0.1.1
  
* **2023-01-27**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20detail%20add%20to%20cart%20button%20added%20callbacks.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
