# Store Page List Categories Cache

### [License][1]

### Synopsis

Cache store page categories in sessionStorage.

### Version

  * 0.4.1

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes
  
#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page list categories cache options.html][4]**
      to Store Settings > Advanced > Page Header Code Injection for the store
      page. Refer to [Per-page code injection][6] for details. Read the code for
      any instructions within.
      
    * Add code from file **[store page list categories cache.html][5]** to
      Store Settings > Advanced > Page Header Code Injection for the store
      page. Refer to [Per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page list categories cache options.html][4]**
      to Website > Pages > Custom Code > Code Injection > HEADER. Refer to [Add
      code to code injection][7] for details. Read the code for any instructions
      within.
      
    * Add code from file **[store page list categories cache.html][5]** to
      Website > Pages > Custom Code > Code Injection > HEADER. Refer to [Add
      code to code injection][7] for details.

## Callback Example

You can create [callback][8] functions to customize the processing of the
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

Please consider [making a donation][9].

## Changes

* **2025-11-03**

  * fixed is list guard check
  * bumped version to 0.4.1
  
* **2025-10-31**

  * added tag page guard check
  * reworked code to be a bit more efficient
  * bumped version to 0.4.0
  
* **2025-07-22**

  * moved options out of main code
  * checked v7.1 Products V2 compatibility
  * bumped version to 0.3.0
  
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
[4]: store%20page%20list%20categories%20cache%20options.html#L1
[5]: store%20page%20list%20categories%20cache.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[10]: https://github.com/tomsWebConsulting/twcsl
[11]: https://github.com/tomsWebConsulting/twcsl#install-options
