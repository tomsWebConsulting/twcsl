# Store Page Detail Sku Add

### [License][1]

### Synopsis

Add sku to the description of store detail pages.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Install [Store Page Detail Variant Selected Callback][4]. After you install
  the code be sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][5], a [CDN][6])
    
    * Options
    
      * Page Specific
      
        Use this option if you want to have this effect on only one Store Page.
        
        * Add code from file **[store page detail sku add options.html][7]** to
          Page Settings > Advanced > Page Header Code Injection for the Store
          Page. Read the code for any instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Store Page.
          
          ```html
          <!-- begin TWC Store Page Detail Sku Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5d7a7b6c65fc95268c40dfea8178bbb10aaa01ec/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Sku%20Add/store%20page%20detail%20sku%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5d7a7b6c65fc95268c40dfea8178bbb10aaa01ec/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Sku%20Add/store%20page%20detail%20sku%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page Detail Sku Add -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        * Add code from file **[store page detail sku add options.html][7]** to
          Website > Pages > Custom Code > Code Injection > FOOTER. Read the
          code for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page Detail Sku Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5d7a7b6c65fc95268c40dfea8178bbb10aaa01ec/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Sku%20Add/store%20page%20detail%20sku%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5d7a7b6c65fc95268c40dfea8178bbb10aaa01ec/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Sku%20Add/store%20page%20detail%20sku%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page Detail Sku Add -->
            
          ```
          
        * Refer to [Add code to code injection][9] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Store Page.
      
      * Add code from files **[store page detail sku add options.html][7]** to
        Page Settings > Advanced > Page Header Code Injection for the Store
        Page. Read the code for any instructions within.
        
      * Add code from file **[store page detail sku add.html][10]** to
        Page Settings > Advanced > Page Header Code Injection for the Store
        Page.
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add code from files **[store page detail sku add options.html][7]** to
        Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
        for any instructions within.
        
      * Add code from file **[store page detail sku add.html][10]** to Website >
        Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][9] for details.
      
## How to Use

In each of your product descriptions add the following text where you want the
sku to appear.

```text
[ twc-spdsa ]
```

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-05-24**

  * updated to work with store page detail variant selected callback v0.4.0
  * bumped version to 0.3.0
  
* **2024-09-15**

  * make compatible with store page detail variant selected callback v0.3.0
  * bumped version to 0.2.1
  
* **2024-05-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Variant%20Selected%20Callback#store-page-detail-variant-selected-callback
[5]: https://www.jsdelivr.com/
[6]: https://en.wikipedia.org/wiki/Content_delivery_network
[7]: store%20page%20detail%20sku%20add%20options.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: store%20page%20detail%20sku%20add.html#L1
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
