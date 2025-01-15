# Store Page List Categories Cache

### [License][1]

### Synopsis

Cache store page categories in sessionStorage.

### Version

  * 0.2.1

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store page list categories cache.html][4]** to
      Store Settings > Advanced > Page Header Code Injection for the store
      page. Please see [Per-page code injection][5]. Read the code for any
      instructions within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page list categories cache.html][4]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][6]. Read the code for any instructions within.

## Callback Example

You can create [callback][7] functions to customize the processing of the
categories or use them.

Your callback must accept an object parameter.

```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc splcc sub-module
  
  twc.splcc = ( ( self ) => self ) ( twc.splcc || { } );
  
  // initialize twc splcc callbacks sub-module
  
  twc.splcc.callbacks = ( ( self ) => {
  
    const callback = ( categories ) => {
    
      console.log ( 'splcc log : ', categories );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.splcc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-01-14**

  * fix for JSON being returned for non-cached categories
  * bumped version to 0.2.1
  
* **2025-01-14**

  * use module pattern for settings
  * bumped version to 0.2.0
  
* **2023-06-30**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20list%20categories%20cache.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[9]: https://github.com/tomsWebConsulting/twcsl
[10]: https://github.com/tomsWebConsulting/twcsl#install-options
