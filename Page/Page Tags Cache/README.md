# Page Tags Cache

### [License][1]

### Synopsis

Cache Page tags in sessionStorage.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Not Applicable
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

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
        <!-- begin TWC Page Tags Cache -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@278d053ce4f3a76b9b294e5258514ba7305e5e27/Page/Page%20Tags%20Cache/page%20tags%20cache.min.js" type="module"></script>
          
          <!-- end TWC Page Tags Cache -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * v7.1
      
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Page Tags Cache -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@278d053ce4f3a76b9b294e5258514ba7305e5e27/Page/Page%20Tags%20Cache/page%20tags%20cache.min.js" type="module"></script>
            
            <!-- end TWC Page Tags Cache -->
            
          ```
          
      * v7.0
      
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Page Tags Cache -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@278d053ce4f3a76b9b294e5258514ba7305e5e27/Page/Page%20Tags%20Cache/page%20tags%20cache.min.js" type="module"></script>
            
            <!-- end TWC Page Tags Cache -->
            
          ```
          
      * Refer to [Add code to code injection][7] for details.

* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[page tags cache.html][8]** to Page Settings >
      Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you want to have this effect on all Pages.
      
    * v7.1
    
      * Add code from file **[page tags cache.html][8]** to Website >
        Pages > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[page tags cache.html][8]** to Website > Pages >
        Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][7] for details.

## Callback Example

You can create [callback][9] functions to customize the processing of the tags
or use them.

Your callback must accept an array parameter.

```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc ptc sub-module
  
  twc.ptc = ( ( self ) => self ) ( twc.ptc || { } );
  
  // initialize twc ptc callbacks sub-module
  
  twc.ptc.callbacks = ( ( self ) => {
  
    const callback = ( tags ) => {
    
      console.log ( 'ptc log : ', tags );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.ptc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2025-11-27**

  * added queryValue to tag data
  * bumped version to 0.2.0
  
* **2025-11-24**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: page%20tags%20cache.html#L1
[9]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
