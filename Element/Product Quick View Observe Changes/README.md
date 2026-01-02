# Product Quick View Observe Changes

### [License][1]

### Synopsis

Observe changes to the modal lightbox product quick view and call custom
callbacks as nodes are added to the [DOM][2].

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Modal Lightbox Observe Changes][5]

---

## Install

* Install [Modal Lightbox Observe Changes][6]. After you install the code be
  sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][7], a [CDN][8])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Product Quick View Observe Changes -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ce0a4adc6c47139874d6d6614efc398332e1861c/Product%20Quick%20View%20Observe%20Changes/product%20quick%20view%20observe%20changes.min.js" type="module"></script>
            
            <!-- end TWC Product Quick View Observe Changes -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all pages.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Product Quick View Observe Changes -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ce0a4adc6c47139874d6d6614efc398332e1861c/Product%20Quick%20View%20Observe%20Changes/product%20quick%20view%20observe%20changes.min.js" type="module"></script>
            
            <!-- end TWC Product Quick View Observe Changes -->
            
          ```
          
        * Refer to [Add code to code injection][10] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[product quick view observe changes.html][11]** to
        Page Settings > Advanced > Page Header Code Injection for the page.
        
      * Refer to [per-page code injection][9] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * Add code from file **[product quick view observe changes.html][11]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][10] for details.

## Callback Example

You can create [callback][12] functions to customize the processing of the modal
lightbox element.

Your callbacks must accept an element as a parameter.

```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc mloc sub-module
  
  twc.mloc = ( ( self ) => self ) ( twc.mloc || { } );
  
  // initialize twc mloc callbacks sub-module
  
  twc.mloc.callbacks = ( ( self ) => {
  
    const callback = ( element ) => {
    
      console.log ( 'twc pqvoc log : ', element );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.mloc.callbacks || [ ] );
    
  </script>
```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][13].

## Changes

* **2026-01-01**

  * updated to work with Modal Lightbox Observe Changes v0.2.0
  * bumped version to 0.3.0
  
* **2025-08-25**

  * moved options out of main code
  * updated to work with v7.1 Products V2
  * bumped version to 0.2.0
  
* **2024-05-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Modal%20Lightbox%20Observe%20Changes
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Modal%20Lightbox%20Observe%20Changes#modal-lightbox-observe-changes
[7]: https://www.jsdelivr.com/
[8]: https://en.wikipedia.org/wiki/Content_delivery_network
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: product%20quick%20view%20observe%20changes.html#L1
[12]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
