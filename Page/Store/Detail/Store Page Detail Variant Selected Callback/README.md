# Store Page Detail Variant Selected Callback

### [License][1]

### Synopsis

Create effects when a variant is selected.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatibility

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store page detail variant selected callback.html][6]**
  to Store Settings > Advanced > Page Header Code Injection for the store page.
  Please see [per-page code injection][7]. Read the code for any instructions
  within.

## Callback Example Code

The following code simply logs the parameters to the console.

```html
<script>

  const spdvscce = ( sku, selectedVariant, $element ) => {
  
    /*
    
      store product detail variant selected callback callback example
      
      License       : < https://bit.ly/3F8sn8W >
      
      Version       : 0.1.0
      
      SS Versions   : 7.1, 7.0
      
      Dependencies  : store product detail variant selected callback
      
      By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
      
      */
      
    console.log ( 'sku : ', sku );
    
    console.log ( 'selectedVariant : ', selectedVariant );
    
    console.log ( '$element : ', $element );
    
    };
    
  </script>
```

## Note

This is meant as a base for other effects.

## Make a Donation

Please consider [making a donation][8].

## Changes

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
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
