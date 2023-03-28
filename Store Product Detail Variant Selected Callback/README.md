# Store Product Detail Variant Selected Callback

### [License][1]

### Version 0.1.0

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatibility : Not Applicable

---

## Install

* Install [twcsl][2]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store product detail variant selected
  callback.html][3]** to Store Settings > Advanced > Page Header Code Injection
  for the store page. Read the code for any instructions within.

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

Please consider [making a donation][4].

## Changes

<!-- * **2021-12-10**

  * freshen read me and other minor tweaks, no functional changes
  * tested v7.0 Pacific template family compatibility
  * bumped version to 0.1d5
  -->
* **2023-02-10**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl#install-options
[3]: store%20product%20detail%20variant%20selected%20callback.html#L1
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
