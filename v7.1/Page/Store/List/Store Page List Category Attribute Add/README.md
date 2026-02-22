# Store Page List Category Attribute Add

### [License][1]

### Synopsis

Add category attribute to Category Pages.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

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
    
      Use this option if you want to have this effect on only one Portfolio
      page.
      
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Store Page.
        
        ```html
        <!-- begin TWC Store Page List Category Attribute Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@090537fa8d837dfe1f20fbf19acab7cd31cfe909/v7.1/Page/Store/List/Store%20Page%20List%20Category%20Attribute%20Add/store%20page%20list%20category%20attribute%20add.min.js" type="module"></script>
          
          <!-- end TWC Store Page List Category Attribute Add -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Store Page List Category Attribute Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@090537fa8d837dfe1f20fbf19acab7cd31cfe909/v7.1/Page/Store/List/Store%20Page%20List%20Category%20Attribute%20Add/store%20page%20list%20category%20attribute%20add.min.js" type="module"></script>
          
          <!-- end TWC Store Page List Category Attribute Add -->
          
        ```
        
      * Refer to [Add code to code injection][7] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on
  your site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Portfolio age.
    
    * Add code from file **[store page list category attribute add.html][8]** to
      Page Settings > Advanced > Page Header Code Injection for the Store Page.
      
    * Refer to [per-page code injection][6] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Portfolio pages.
    
    * Add code from file **[store page list category attribute add.html][8]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][7] for details.

## Note

* This code adds a data-twc-splcaa-store-category attribute to the body tag with
  the value set to a Category Name. For the All Category there no attribute is
  added.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2026-02-21**

  * removed v7.0 parts of code
  * reworked code to use a more reliable way to get at the category name
  * bumped version to 0.3.0
  
* **2025-07-10**

  * fixed bug where all category was getting the attribute
  * bumped version to 0.2.1
  
* **2025-07-10**

  * updated to work with v7.1 Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2021-06-15**

  * changed code to work on v7.1 and v7.0 (Brine)
  * use twcsl
  * bumped version to 0.1d2
  
* **2021-05-10**

  * changed user warning
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: store%20page%20list%20category%20attribute%20add.html#L1
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
