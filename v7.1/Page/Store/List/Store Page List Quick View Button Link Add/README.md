# Store Page List Quick View Button Link Add

### [License][1]

### Synopsis

Add a button link to a URL.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Not Applicable

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Product Quick View Observe Changes][4]

---

## Install

* Install [Product Quick View Observe Changes][5]. After you install code be
  sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Store
          page.
          
        * Add code from file **[store page list quick view button link add
          options.html][8]** to Store Page Settings > Advanced >
          Page Header Code Injection for the page. Read the code for any
          instructions within.
          
        * Add the following code to Store Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Store Page List Quick View Button Link Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@324e0bd79d7730ef3122f6be28090dfd3da74f9f/v7.1/Page/Store/List/Store%20Page%20List%20Quick%20View%20Button%20Link%20Add/store%20page%20list%20quick%20view%20button%20link%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Quick View Button Link Add -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Store pages.
          
        * Add code from file **[store page list quick view button link add
          options.html][8]** to Website > Pages > Custom Code > Code Injection >
          FOOTER.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page List Quick View Button Link Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@324e0bd79d7730ef3122f6be28090dfd3da74f9f/v7.1/Page/Store/List/Store%20Page%20List%20Quick%20View%20Button%20Link%20Add/store%20page%20list%20quick%20view%20button%20link%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Quick View Button Link Add -->
            
          ```
          
        * Refer to [Add code to code injection][10] for details.
  
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Store page.
        
      * Add code from files **[store page list quick view button link add
        options.html][8]** and **[store page list quick view button link
        add.html][11]** to Store Page Settings > Advanced >
        Page Header Code Injection for the page.
        
      * Refer to [per-page code injection][9] for details.
        
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * Add code from files **[store page list quick view button link add
        options.html][8]** and **[store page detail title text to
        link.html][11]** to Website > Pages > Custom Code > Code Injection >
        FOOTER. Refer to [Add code to code injection][10] for details.

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2025-12-01**

  * moved options out of main code
  * updated to use product quick view observe changes
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2021-10-06**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Product%20Quick%20View%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Product%20Quick%20View%20Observe%20Changes#product-quick-view-observe-changes
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: store%20page%20list%20quick%20view%20button%20link%20add%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: store%20page%20list%20quick%20view%20button%20link%20add.html#L1
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
