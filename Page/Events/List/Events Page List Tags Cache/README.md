# Events Page List Tags Cache

### [License][1]

### Synopsis

Cache Events list page tags in sessionStorage.

### Version

  * 0.1.1

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[events page list tags cache.html][4]** to
      Store Settings > Advanced > Page Header Code Injection for the store
      page. Refer to [Per-page code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[events page list tags cache.html][4]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to code
      injection][6] for details.
      
* Read the code for any instructions within.

## Callback Example

You can create [callback][7] functions to customize the processing of the tags
or use them.

Your callback must accept an array parameter.

```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc epltc sub-module
  
  twc.epltc = ( ( self ) => self ) ( twc.epltc || { } );
  
  // initialize twc epltc callbacks sub-module
  
  twc.epltc.callbacks = ( ( self ) => {
  
    const callback = ( tags ) => {
    
      console.log ( 'epltc log : ', tags );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.epltc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-05-09**

  * added some missing code
  * bumped version to 0.1.1
  
* **2025-05-09**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: events%20page%20list%20tags%20cache.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
