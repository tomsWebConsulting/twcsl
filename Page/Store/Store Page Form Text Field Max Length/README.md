# Store Page Form Text Field Max Length

### [License][1]

### Synopsis

Limit store page form text and text area field lengths.

### Version

  * 0.3.4

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Product Custom Form Text Field Max Length][5]

---

## Install

* Install [Product Custom Form Text Field Max Length][6]. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][7], a [CDN][8])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Store
          page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Store Page Form Text Field Max Length -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@eaa0594217a4e92f3bc1e80f01c26583d7a70404/Page/Store/Store%20Page%20Form%20Text%20Field%20Max%20Length/store%20page%20form%20text%20field%20max%20length.min.js" type="module"></script>
            
            <!-- end TWC Store Page Form Text Field Max Length -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Store pages.
          
        * v7.1
        
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page Form Text Field Max Length -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@eaa0594217a4e92f3bc1e80f01c26583d7a70404/Page/Store/Store%20Page%20Form%20Text%20Field%20Max%20Length/store%20page%20form%20text%20field%20max%20length.min.js" type="module"></script>
              
              <!-- end TWC Store Page Form Text Field Max Length -->
              
            ```
            
        * v7.0
        
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page Form Text Field Max Length -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@eaa0594217a4e92f3bc1e80f01c26583d7a70404/Page/Store/Store%20Page%20Form%20Text%20Field%20Max%20Length/store%20page%20form%20text%20field%20max%20length.min.js" type="module"></script>
              
              <!-- end TWC Store Page Form Text Field Max Length -->
              
            ```
            
        * Refer to [Add code to code injection][10] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Store page.
        
      * Add code from file **[store page form text field max length.html][11]**
        to Page Settings > Advanced > Page Header Code Injection for the page.
        
      * Refer to [per-page code injection][9] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * v7.1
      
        * Add code from file **[store page form text field max
          length.html][11]** to Website > Pages > Custom Code > Code Injection >
          FOOTER.
          
      * v7.0
      
        * Add code from file **[store page form text field max
          length.html][11]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][10] for details.

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2025-12-31**

  * added missing v7.0 Brine template selector
  * bumped version to 0.3.4
  
* **2025-09-03**

  * updated for Products V2
  * bumped version to 0.3.3
  
* **2024-05-26**

  * fix for store page check
  * bumped version to 0.3.2
  
* **2024-05-23**

  * only run code on store pages
  * bumped version to 0.3.1
  
* **2024-05-23**

  * support Product Custom Form Text Field Max Length
  * bumped version to 0.3.0
  
* **2024-05-18**

  * support quick view
  * bumped version to 0.2.0
  
* **2024-05-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Product%20Custom%20Form%20Text%20Field%20Max%20Length
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Product%20Custom%20Form%20Text%20Field%20Max%20Length#product-custom-form-text-field-max-length
[7]: https://www.jsdelivr.com/
[8]: https://en.wikipedia.org/wiki/Content_delivery_network
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: store%20page%20form%20text%20field%20max%20length.html#L1
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
