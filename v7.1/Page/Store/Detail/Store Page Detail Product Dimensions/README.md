# Store Page Detail Product Dimensions

### [License][1]

### Synopsis

Add product dimensions to product description and additional info of detail
pages.

### Version

  * 0.8.0

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

* Optional Install

  Use this optional install if you want to use both shipping and physical
  dimensions.
  
  * Install **[Store Page Product Dimensions][4]**. After you install the
    code be sure to continue on with the rest of the steps.
    
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][4], a [CDN][5])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one page.
          
        * Add code from file **[store page detail product dimensions
          options.html][6]** to Page Settings > Advanced >
          Page Header Code Injection for the page. Read the code for any
          instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Store Page List Product Dimensions -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@3b29f23eb9c4191bc3f750ad346284e475035374/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Product%20Dimensions/store%20page%20detail%20product%20dimensions.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@3b29f23eb9c4191bc3f750ad346284e475035374/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Product%20Dimensions/store%20page%20detail%20product%20dimensions.min.js" type="module"></script>
            
            <!-- end TWC Store Page Detail Product Dimensions -->
            
          ```
          
        * Refer to [per-page code injection][7] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Store pages.
          
        * Add code from file **[store page detail product dimensions
          options.html][6]** to Website > Pages > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page Detail Product Dimensions -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@3b29f23eb9c4191bc3f750ad346284e475035374/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Product%20Dimensions/store%20page%20detail%20product%20dimensions.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@3b29f23eb9c4191bc3f750ad346284e475035374/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Product%20Dimensions/store%20page%20detail%20product%20dimensions.min.js" type="module"></script>
            
            <!-- end TWC Store Page Detail Product Dimensions -->
            
          ```
          
        * Refer to [Add code to code injection][8] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one page.
        
      * Add code from file **[store page detail product dimensions
        options.html][6]** to Page Settings > Advanced >
        Page Header Code Injection for the page. Read the code for any
        instructions within.
        
      * Add code from file **[store page detail product dimensions.html][9]** to
        Page Settings > Advanced > Page Header Code Injection for the page.
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all pages.
        
      * Add code from file **[store page detail product dimensions
        options.html][6]** to Page Settings > Advanced >
        Page Header Code Injection for the page. Read the code for any
        instructions within.
        
      * Add code from file **[store page detail product dimensions.html][9]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][8] for details.
      
  * Add **[ twc-spdpd ]** to the product description and/or text blocks in
    additional info. **[ twc-spdpd ]** will be replaced with the product
    dimensions. You can use **[ twc-spdpd ]** in multiple places.

## Note

The dimensions entered in the Squarespace editor are shipping dimensions, not
product dimensions. If you don't need to use shipping dimensions for shipping
you can use it for product dimensions.

## Demo

You can see a [demo of this effect here][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-10-17**

  * updated to use store page product dimensions for physical dimensions
  * bumped version to 0.8.0

* **2025-12-15**

  * added support for Variant Display Button
  * restored head meta and script element text clean up
  * bumped version to 0.7.0
  
* **2025-12-14**

  * added full support for variants
  * bumped version to 0.6.0
  
* **2025-08-03**

  * fixed issue with twc.spdpd dimensions and format not merging
  * bumped version to 0.5.1
  
* **2025-07-31**

  * moved options out of main code
  * updated to work with Products V2
  * remove dependency on jQuery
  * bumped version to 0.5.0
  
* **2025-02-01**

  * less processing on format string for better support of entering HTML
  * remove dependency on twcsl
  * bumped version to 0.4.0
  
* **2024-09-07**

  * support being able to use shipping dimension for shipping and product
    dimensions
  * add weight to format
  * remove trigger text from meta description and
    script[type="application/ld+json"] elements
  * use TreeWalker in search for trigger text and replace
  * bumped version to 0.3.0
  
* **2024-08-21**

  * fix for text blocks being hidden on category pages ( all and etc. )
  * bumped version to 0.2.2
  
* **2024-08-19**

  * fix for text blocks being hidden in footer
  * bumped version to 0.2.1
  
* **2024-08-16**

  * control decimal places in format instead of a single setting
  * use site measurement standard setting for conversions
  * bumped version to 0.2.0
  
* **2022-05-12**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: store%20page%20detail%20product%20dimensions%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: store%20page%20detail%20product%20dimensions.html#L1
[10]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-product-dimensions/p/milk-dip-cup?password=twcdemos
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
