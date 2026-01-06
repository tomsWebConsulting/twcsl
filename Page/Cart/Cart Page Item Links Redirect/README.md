# Cart Page Item Links Redirect

### [License][1]

### Synopsis

Redirect cart page product item links.

### Version

  * 0.3.1

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Not Applicable
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Cart Page Observe Changes][4]

---

## Install

* Install [Cart Page Observe Changes][5]. After you install Cart Page Observe
  Changes be sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add code from file **[cart page item links redirect options.html][8]**
          to Page Settings > Advanced > Page Header Code Injection for the page.
          Read the code for any instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Cart Page Item Links Redirect -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4fbc670dcf2724d4ca6efaea498c9876c1f63fc0/Page/Cart/Cart%20Page%20Item%20Links%20Redirect/cart%20page%20item%20links%20redirect.min.js" type="module"></script>
            
            <!-- end TWC Cart Page Item Links Redirect -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Store pages.
          
        * v7.1
        
          * Add code from file **[cart page item links redirect
            options.html][8]** to Website > Pages > Custom Code >
            Code Injection > FOOTER. Read the code for any instructions within.
            
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Cart Page Item Links Redirect -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4fbc670dcf2724d4ca6efaea498c9876c1f63fc0/Page/Cart/Cart%20Page%20Item%20Links%20Redirect/cart%20page%20item%20links%20redirect.min.js" type="module"></script>
              
              <!-- end TWC Cart Page Item Links Redirect -->
              
            ```
            
        * v7.0
        
          * Add code from file **[cart page item links redirect
            options.html][8]** to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER. Read the code for any
            instructions within.
            
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Cart Page Item Links Redirect -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4fbc670dcf2724d4ca6efaea498c9876c1f63fc0/Page/Cart/Cart%20Page%20Item%20Links%20Redirect/cart%20page%20item%20links%20redirect.min.js" type="module"></script>
              
              <!-- end TWC Cart Page Item Links Redirect -->
              
            ```
            
        * Refer to [Add code to code injection][10] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[cart page item links redirect options.html][8]**
        to Page Settings > Advanced > Page Header Code Injection for the page.
        Read the code for any instructions within.
        
      * Add code from file **[cart page item links redirect.html][11]** to
        Page Settings > Advanced > Page Header Code Injection for the page.
        
      * Refer to [per-page code injection][9] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * v7.1
      
        * Add code from file **[cart page item links redirect options.html][8]**
          to Page Settings > Advanced > Page Header Code Injection for the page.
          Read the code for any instructions within.
          
        * Add code from file **[cart page item links redirect.html][11]** to
          Website > Pages > Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[cart page item links redirect options.html][8]**
          to Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add code from file **[cart page item links redirect.html][11]** to
          Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER.
          
      * Refer to [Add code to code injection][10] for details.

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2026-01-05**

  * updated to work with Cart Page Observe Changes v0.3.0
  * bumped version to 0.3.1
  
* **2025-11-11**

  * updated to work with Cart Page Observe Changes v0.2.2
  * bumped version to 0.3.0
  
* **2022-09-23**

  * adapted for Cart Page Observe Changes
  * bumped version to 0.2.0
  
* **2020-11-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: cart%20page%20item%20links%20redirect%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: cart%20page%20item%20links%20redirect.html#L1
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
