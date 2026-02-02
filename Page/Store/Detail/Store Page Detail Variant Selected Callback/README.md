# Store Page Detail Variant Selected Callback

### [License][1]

### Synopsis

Create effects when a variant is selected.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store page detail variant selected callback.html][6]**
  to Store Settings > Advanced > Page Header Code Injection for the Store Page.
  Refer to [Per-page code injection][7] for details.
  
* Read the code for any instructions within.

## Callback Example

You can create a [callback][8] function to customize the processing of the
product variant selected.

Your callback must accept three parameters :

  * sku ( string )
  
  * selectedVariant ( JavaScript object, the selected variant data )
  
  * element ( DOM element )
  
```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self  ) ( window.twc || { } );
  
  // initialize twc spdvsc sub-module
  
  twc.spdvsc = ( ( self ) =>  self ) ( twc.spdvsc || { } );
  
  // initialize twc spdvsc callbacks sub-module
  
  twc.spdvsc.callbacks = ( ( self ) => {
  
    const callback = ( sku, selectedVariant, element ) => {
    
      console.log ( 'spdvsc log sku : ', sku );
      
      console.log ( 'spdvsc log selectedVariant : ', selectedVariant );
      
      console.log ( 'spdvsc log element : ', element );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.spdvsc.callbacks || [ ] );
    
  </script>

```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][9].

## Changes

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
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20detail%20variant%20selected%20callback.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
