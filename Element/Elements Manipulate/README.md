# Elements Manipulate

### [License][1]

### Synopsis

Move or copy a source element to a destination element with the action of after,
append, before, prepend, or replace and other settings.

### Version

  * 0.11.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* CSS

  * v7.1
  
    * Add code from file **[elements manipulate.less][4]** to Website > Pages >
      Custom Code > Custom CSS.
      
  * v7.0
  
    * Add code from file **[elements manipulate.less][4]** to Website > Pages >
      Website Tools > Custom Code > Custom CSS.
      
  * Refer to [Using the CSS Editor][5] for details.
    
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one page.
          
        * Add code from file **[elements manipulate options.html][8]** to Page
          Settings > Advanced > Page Header Code Injection for the page. Read
          the code for any instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Elements Manipulate -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@80dd6cf7e9564e8dd95cba3fc0c9e85561751345/Element/Elements%20Manipulate/elements%20manipulate.min.js" type="module"></script>
            
            <!-- end TWC Elements Manipulate -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Store pages.
          
        * v7.1
        
          * Add code from file **[elements manipulate options.html][8]** to
            Website > Pages > Custom Code > Code Injection > FOOTER. Read the
            code for any instructions within.
            
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Elements Manipulate -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@80dd6cf7e9564e8dd95cba3fc0c9e85561751345/Element/Elements%20Manipulate/elements%20manipulate.min.js" type="module"></script>
              
              <!-- end TWC Elements Manipulate -->
              
            ```
            
        * v7.0
        
          * Add code from file **[elements manipulate options.html][8]** to
            Website > Pages > Website Tools > Custom Code > Code Injection >
            FOOTER. Read the code for any instructions within.
            
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Elements Manipulate -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@80dd6cf7e9564e8dd95cba3fc0c9e85561751345/Element/Elements%20Manipulate/elements%20manipulate.min.js" type="module"></script>
              
              <!-- end TWC Elements Manipulate -->
              
            ```
            
        * Refer to [Add code to code injection][10] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on your
    site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one page.
        
      * Add code from file **[elements manipulate options.html][8]** to Page
        Settings > Advanced > Page Header Code Injection for the page. Read
        the code for any instructions within.
        
      * Add code from file **[elements manipulate.html][11]** to Page Settings >
        Advanced > Page Header Code Injection for the page.
        
      * Refer to [per-page code injection][9] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all pages.
        
      * v7.1
      
        * Add code from file **[elements manipulate options.html][8]** to Page
          Settings > Advanced > Page Header Code Injection for the page. Read
          the code for any instructions within.
          
        * Add code from file **[elements manipulate.html][11]** to Website >
          Pages > Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[elements manipulate options.html][8]** to
          Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add code from file **[elements manipulate.html][11]** to Website >
          Pages > Website Tools > Custom Code > Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][10] for details.
      
## Options Data Structure Templates

* v7.1

  * [Product Additional Info First N Blocks to End Of Product Meta][12]
  
  * [Product Additional Info First Row Video Block Before Quantity][13]
  
  * [Product Additional Info Specific Video Block Before Quantity][14]

## Effects Dependent on Elements Manipulate

* v7.1

  * [Blog Page Post Excerpt Element][15]
  
  * [Footer Sections Append to Page Observe][16]
  
  * [Store Page Detail Additional Info Footer Section Append][17]

## Callbacks

You can optionally add [callback][18] functions to further customize the
processing of the source element. Your callbacks must accept and return a node.
Add your callbacks to Website > Pages > Custom Code > Code Injection > FOOTER.
Refer to [Add code to code injection][10]. Order is not important.

* Log the source element.

  ```html
  <script>
  
    ( ( ) => {
    
      const
      
        version = '0.1.0',
        
        s = `
        
          TWC EM Log v${ version }
          
          License < https://tinyurl.com/s872fb68 >
          
          © 2022-2025 Thomas Creedon
          
          Tom's Web Consulting < http://www.tomsWeb.consulting >
          
          `
          
          .replace ( /^\s+/gm, '' );
          
      console.log ( s );
      
      // initialize twc module
      
      window.twc = ( ( self ) => self ) ( window.twc || { } );
      
      // initialize twc em sub-module
      
      twc.em = ( ( self ) => self ) ( twc.em || { } );
      
      // initialize twc em callbacks sub-module
      
      twc.em.callbacks = ( ( self ) => {
      
        const callback = ( element ) => {
        
          console.log ( 'twcEmLog element', element );
          
          return element;
          
          };
          
        self [ 'twcEmLog' ] = callback;
        
        return self;
        
        } ) ( twc.em.callbacks || { } );
        
      } ) ( );
      
    </script>
  ```

* Remove the id attribute from the element.

  ```html
  <script>
  
    ( ( ) => {
    
      const
      
        version = '0.1.0',
        
        s = `
        
          TWC EM Id Attribute Remove v${ version }
          
          License < https://tinyurl.com/s872fb68 >
          
          © 2022-2025 Thomas Creedon
          
          Tom's Web Consulting < http://www.tomsWeb.consulting >
          
          `
          
          .replace ( /^\s+/gm, '' );
          
      console.log ( s );
      
      // initialize twc module
      
      window.twc = ( ( self ) => self ) ( window.twc || { } );
      
      // initialize twc em sub-module
      
      twc.em = ( ( self ) => self ) ( twc.em || { } );
      
      // initialize twc em callbacks sub-module
      
      twc.em.callbacks = ( ( self ) => {
      
        self [ 'twcEmIdAttributeRemove' ] = ( $element ) => {
        
          $element.removeAttr ( 'id' );
          
          return $element;
          
          };
          
        return self;
        
        } ) ( twc.em.callbacks || { } );
        
      } ) ( );
      
    </script>
  ```

## Note

You can install **elements manipulate options** anywhere you can add an HTML
script tag.

## Make a Donation

Please consider [making a donation][19].

## Changes

* **2025-12-06**

  * added onEditModeRemove flag
  * bumped version to 0.11.0
  
* **2025-10-08**

  * fixed issue with not being able to work with head elements
  * bumped version to 0.10.1
  
* **2025-10-01**

  * added product additional info first n blocks to end of product meta template
  * added repeat option
  * bumped version to 0.10.0
  
* **2025-07-30**

  * changed options from json script tag to JavaScript object
  * removed dependency on jQuery
  * bumped version to 0.9.0
  
* **2024-10-29**

  * use module pattern for adding callbacks
  * fixed for missing codeKey variable
  * bumped version to 0.8.0
  
* **2024-10-28**

  * support for multiple callbacks
  * added source ancestor selector
  * bumped version to 0.7.0
  
* **2024-08-22**

  * use a custom mime type for script tag type attribute
  * bumped version to 0.6.1
  
* **2024-08-22**

  * support for callbacks
  * bumped version to 0.6.0
  
* **2024-05-10**

  * added after and before options
  * support Bedford template family
  * bumped version to 0.5.0
  
* **2023-06-10**

  * added source selector copy feature
  * bumped version to 0.4.0
  
* **2023-06-08**

  * fixed syntax errors
  * bumped version to 0.3.1
  
* **2023-06-06**

  * added a selector parent destination
  * bumped version to 0.3.0
  
* **2023-05-31**

  * added ability to append and prepend to selector destination
  * bumped version to 0.2.0
  
* **2022-05-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: elements%20manipulate.less#L1
[5]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: elements%20manipulate%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: elements%20manipulate.html#L1
[12]: options%20data%20structure%20templates/product%20additional%20info%20first%20n%20blocks%20to%20end%20of%20product%20meta.js
[13]: options%20data%20structure%20templates/product%20additional%20info%20first%20row%20video%20block%20before%20quantity.js
[14]: options%20data%20structure%20templates/product%20additional%20info%20specific%20video%20block%20before%20quantity.js
[15]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Blog/Post/Blog%20Page%20Post%20Excerpt%20Element#blog-page-post-excerpt-element
[16]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Section/Footer%20Sections%20Append%20to%20Page#footer-sections-append-to-page
[17]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Additional%20Info%20Footer%20Section%20Append#store-page-detail-additional-info-footer-section-append
[18]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[19]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
