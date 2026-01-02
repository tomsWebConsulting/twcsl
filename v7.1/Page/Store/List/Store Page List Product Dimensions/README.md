# Store Page List Product Dimensions

### [License][1]

### Synopsis

Add product dimensions to some products of list pages.

### Version

  * 0.2.0

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
    externally on the [jsDelivr][5], a [CDN][6])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Store
          page.
          
        * Add code from file **[store page list product dimensions
          options.html][7]** to Page Settings > Advanced >
          Page Header Code Injection for the page. Read the code for any
          instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Store Page List Product Dimensions -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c10bbb78a3161f05e981d8cb3e717a552fd30641/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Dimensions/store%20page%20list%20product%20dimensions.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c10bbb78a3161f05e981d8cb3e717a552fd30641/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Dimensions/store%20page%20list%20product%20dimensions.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Product Dimensions -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Store pages.
          
        * Add code from file **[store page list product dimensions
          options.html][7]** to Website > Pages > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page List Product Dimensions -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c10bbb78a3161f05e981d8cb3e717a552fd30641/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Dimensions/store%20page%20list%20product%20dimensions.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c10bbb78a3161f05e981d8cb3e717a552fd30641/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Dimensions/store%20page%20list%20product%20dimensions.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Product Dimensions -->
            
          ```
          
        * Refer to [Add code to code injection][9] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on your
    site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Store page.
        
      * Add code from file **[store page list product dimensions
        options.html][7]** to Page Settings > Advanced >
        Page Header Code Injection for the page. Read the code for any
        instructions within.
        
      * Add code from file **[store page list product dimensions.html][10]** to
        Page Settings > Advanced > Page Header Code Injection for the page.
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * Add code from file **[store page list product dimensions
        options.html][7]** to Page Settings > Advanced >
        Page Header Code Injection for the page. Read the code for any
        instructions within.
        
      * Add code from file **[store page list product dimensions.html][10]**
        to Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][9] for details.

## Note

The dimensions entered in the Squarespace editor are shipping dimensions, not
product dimensions. If you don't need to use shipping dimensions for shipping
you can use it for physical dimensions.

## Demo

You can see a [demo of this effect here][11].

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2025-10-17**

  * added support for using both shipping and physical dimensions
  * bumped version to 0.2.0
  
* **2025-10-13**

  * fixed issue with showing dimensions when select menu doesn't have
    unselected option
  * bumped version to 0.1.1
  
* **2025-10-12**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Product%20Dimensions#store-page-detail-product-dimensions
[5]: https://www.jsdelivr.com/
[6]: https://en.wikipedia.org/wiki/Content_delivery_network
[7]: store%20page%20list%20product%20dimensions%20options.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: store%20page%20list%20product%20dimensions.html#L1
[11]: https://toms-web-consulting-demos.squarespace.com/store-page-list-product-dimensions?password=twcdemos
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
