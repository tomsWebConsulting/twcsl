# Modal Lightbox Observe Changes

### [License][1]

### Synopsis

Observe changes to the modal lightbox and call custom callbacks as nodes are
added to the [DOM][2].

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][5], a [CDN][6])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the page.
        
        ```html
        <!-- begin TWC Modal Lightbox Observe Changes -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@977a4f3e104fc6e2269b47455492ebc7b3415ad8/Element/Modal%20Lightbox%20Observe%20Changes/modal%20lightbox%20observe%20changes.min.js" type="module"></script>
          
          <!-- end TWC Modal Lightbox Observe Changes -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all pages.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Modal Lightbox Observe Changes -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@977a4f3e104fc6e2269b47455492ebc7b3415ad8/Element/Modal%20Lightbox%20Observe%20Changes/modal%20lightbox%20observe%20changes.min.js" type="module"></script>
          
          <!-- end TWC Modal Lightbox Observe Changes -->
          
        ```
        
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on
  your site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[modal lightbox observe changes.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the page.
      
    * Refer to [per-page code injection][7] for details.
    
  * Site-wide
  
    * Use this option if you want to have this effect on all Pages.
      
    * Add code from file **[modal lightbox observe changes.html][9]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][8] for details.

## Callback Example

You can create [callback][10] functions to customize the processing of the modal
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
  
    const callback = ( node ) => {
    
      console.log ( 'twc mloc log : ', node );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.mloc.callbacks || [ ] );
    
  </script>
```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-01-01**

  * updated to use module pattern for adding callbacks
  * updated to work with upcoming Squarespace Product Form Markup Changes
  * bumped version to 0.2.0
  
* **2024-05-23**

  * minor tweaks, no functional changes
  * bumped version to 0.1.1
  
* **2024-05-01**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://www.jsdelivr.com/
[6]: https://en.wikipedia.org/wiki/Content_delivery_network
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: modal%20lightbox%20observe%20changes.html#L1
[10]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
