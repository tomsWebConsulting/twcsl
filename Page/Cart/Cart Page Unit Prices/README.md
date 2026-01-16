# Cart Page Unit Prices

### [License][1]

### Synopsis

Changes prices on the Cart page.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Cart Page Observe Changes][4]

---

## Install

* Install **[Cart Page Observe Changes][5]**. After you install the code be
  sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the page.
          
          ```html
          <!-- begin TWC Cart Page Unit Prices -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4cdc620b3adfc59bc03a04f7a32cec40e5a91188/Page/Cart/Cart%20Page%20Unit%20Prices/cart%20page%20unit%20prices.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4cdc620b3adfc59bc03a04f7a32cec40e5a91188/Page/Cart/Cart%20Page%20Unit%20Prices/cart%20page%20unit%20prices.min.js" type="module"></script>
            
            <!-- end TWC Cart Page Unit Prices -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
      * v7.1
      
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Cart Page Unit Prices -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4cdc620b3adfc59bc03a04f7a32cec40e5a91188/Page/Cart/Cart%20Page%20Unit%20Prices/cart%20page%20unit%20prices.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4cdc620b3adfc59bc03a04f7a32cec40e5a91188/Page/Cart/Cart%20Page%20Unit%20Prices/cart%20page%20unit%20prices.min.js" type="module"></script>
            
            <!-- end TWC Cart Page Unit Prices -->
            
          ```
          
      * v7.0
      
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Cart Page Unit Prices -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4cdc620b3adfc59bc03a04f7a32cec40e5a91188/Page/Cart/Cart%20Page%20Unit%20Prices/cart%20page%20unit%20prices.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4cdc620b3adfc59bc03a04f7a32cec40e5a91188/Page/Cart/Cart%20Page%20Unit%20Prices/cart%20page%20unit%20prices.min.js" type="module"></script>
            
            <!-- end TWC Cart Page Unit Prices -->
            
          ```
          
      * Refer to [Add code to code injection][9] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[cart page unit prices.html][10]** to Page Settings >
      Advanced > Page Header Code Injection for the page.
      
    * Refer to [per-page code injection][8] for details.
    
  * Site-wide
  
    * Use this option if you want to have this effect on all Pages.
      
    * v7.1
    
      * Add code from file **[cart page unit prices.html][10]** to Website >
        Pages > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[cart page unit prices.html][10]** to Website >
        Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][9] for details.

## Note

Adding unit proces on the cart page does not effect the store pages, checkout,
or other Squarespace pages/backend storage. This is purely a cosmetic change. No
code can change the checkout page. It is an Squarespace security feature.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-01-15**

  * updated to work with Cart Page Observe Changes v0.4.0
  * removed dependency on jQuery
  * removed twcsl dependency
  * bumped version to 0.2.0
  
* **2021-09-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: cart%20page%20unit%20prices.html#L1
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
