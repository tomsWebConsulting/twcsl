# Form Inner Wrapper Observe Changes

### [License][1]

### Synopsis

Observe changes to the form inner wrapper element and call custom callbacks as
nodes are added to the [DOM][2].

### Version

  * 0.1.1

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][3])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][4] that supports [JavaScript][5].
  
  * [Modal Lightbox Observe Changes][6]

---

## Install

* Install [Modal Lightbox Observe Changes][7]. After you install the code be
  sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][8], a [CDN][9])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Form Inner Wrapper Observe Changes -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@0df5bc3bbd377506040c93d86186fa88c0ece7bb/Element/Form%20Inner%20Wrapper%20Observe%20Changes/form%20inner%20wrapper%20observe%20changes.min.js" type="module"></script>
            
            <!-- end TWC Form Inner Wrapper Observe Changes -->
            
          ```
          
        * Refer to [per-page code injection][10] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Pages.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Form Inner Wrapper Observe Changes -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@0df5bc3bbd377506040c93d86186fa88c0ece7bb/Element/Form%20Inner%20Wrapper%20Observe%20Changes/form%20inner%20wrapper%20observe%20changes.min.js" type="module"></script>
            
            <!-- end TWC Form Inner Wrapper Observe Changes -->
            
          ```
          
        * Refer to [Add code to code injection][11] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[form inner wrapper observe changes.html][12]** to
        Page Settings > Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][10] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * Add code from file **[form inner wrapper observe changes.html][12]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][11] for details.

## Callback Example

You can create [callback][13] functions to customize the processing of the modal
lightbox element.

Your callbacks must accept an element as a parameter.

```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc fiwoc sub-module
  
  twc.fiwoc = ( ( self ) => self ) ( twc.fiwoc || { } );
  
  // initialize twc fiwoc callbacks sub-module
  
  twc.fiwoc.callbacks = ( ( self ) => {
  
    const callback = ( element ) => {
    
      console.log ( 'twc fiwoc log : ', element );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.fiwoc.callbacks || [ ] );
    
  </script>
```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][14].

## Changes

* **2026-01-03**

  * moved comments deeper in the code
  * bumped version to 0.1.1
  
* **2026-01-02**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[4]: https://www.squarespace.com/pricing
[5]: https://en.wikipedia.org/wiki/JavaScript
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Modal%20Lightbox%20Observe%20Changes
[7]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Modal%20Lightbox%20Observe%20Changes#modal-lightbox-observe-changes
[8]: https://www.jsdelivr.com/
[9]: https://en.wikipedia.org/wiki/Content_delivery_network
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[11]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[12]: form%20inner%20wrapper%20observe%20changes.html#L1
[13]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[14]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
