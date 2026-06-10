# Store Product Detail Add to Cart Button Url Redirect

### [License][1]

### Synopsis

Redirect store product detail Add to Cart buttons to URLs of your choice.

### Version

  * 0.8.1

#### SS Versions

  * 7.1
  
  * 7.0 ([Avenue][2], [Bedford template family][3], [Brine template family][4], [Pacific template family][5])

#### Dependencies

  * [Squarespace plan][6] that supports [JavaScript][7].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][8], a [CDN][9])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add code from file **[store product detail add to cart button url
        redirect options.html][10]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for instructions
        within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Store Product Detail Add to Cart Button Url Redirect -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@1c92702529674ec55d24c4897dc179b3c1fe6aa1/Page/Store/Detail/Store%20Product%20Detail%20Add%20to%20Cart%20Button%20Url%20Redirect/store%20product%20detail%20add%20to%20cart%20button%20url%20redirect.min.js" type="module"></script>
          
          <!-- end TWC Store Product Detail Add to Cart Button Url Redirect -->
          
        ```
        
      * Refer to [per-page code injection][11] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Store pages.
      
      * v7.1
      
        * Add code from file **[store product detail add to cart button url
          redirect options.html][10]** to Website > Pages > Custom Code >
          Code Injection > FOOTER. Read the code for instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Product Detail Add to Cart Button Url Redirect -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@1c92702529674ec55d24c4897dc179b3c1fe6aa1/Page/Store/Detail/Store%20Product%20Detail%20Add%20to%20Cart%20Button%20Url%20Redirect/store%20product%20detail%20add%20to%20cart%20button%20url%20redirect.min.js" type="module"></script>
            
            <!-- end TWC Store Product Detail Add to Cart Button Url Redirect -->
            
          ```
          
      * v7.0
      
        * Add code from file **[store product detail add to cart button url
          redirect options.html][10]** to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER. Read the code for instructions
          within.
          
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Product Detail Add to Cart Button Url Redirect -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@1c92702529674ec55d24c4897dc179b3c1fe6aa1/Page/Store/Detail/Store%20Product%20Detail%20Add%20to%20Cart%20Button%20Url%20Redirect/store%20product%20detail%20add%20to%20cart%20button%20url%20redirect.min.js" type="module"></script>
            
            <!-- end TWC Store Product Detail Add to Cart Button Url Redirect -->
            
          ```
          
      * Refer to [Add code to code injection][12] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[store product detail add to cart button url redirect
      options.html][10]** to Page Settings > Advanced >
      Page Header Code Injection for the Page. Read the code for instructions
      within.
      
    * Add code from file **[store product detail add to cart button url
      redirect.html][13]** to Page Settings > Advanced >
      Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][11] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * v7.1
    
      * Add code from file **[store product detail add to cart button url
        redirect options.html][10]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for instructions
        within.
        
      * Add code from file **[store product detail add to cart button url
        redirect.html][13]** to Website > Pages > Custom Code > Code Injection >
        FOOTER.
        
    * v7.0
    
      * Add code from file **[store product detail add to cart button url
        redirect options.html][10]** to Website > Pages > Website Tools >
        Custom Code > Code Injection > FOOTER. Read the code for instructions
        within.
        
      * Add code from file **[store product detail add to cart button url
        redirect.html][13]** to Website > Pages > Website Tools > Custom Code >
        Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][12] for details.
    
* Redirect Options

  * Some Add to Cart buttons redirect to any URL(s).
  
    * Edit a product.
    
    * Add the following to a code block in [Additional Info][12].
      
      ```html
      <script>
      
        // initialize twc module
        
        window.twc = window.twc || { };
        
        // initialize twc spdatcbur sub-module
        
        window.twc.spdatcbur =
        
          window.twc.spdatcbur || { };
          
        // initialize twc spdatcbur idUrlMap
        
        twc.spdatcbur.idUrlMap = {
        
          /*
          
            the format of each line is a product id or sku and a URL
            
            copy and repeat the line below for each product id or sku, remove
            the "// " at the beginning of the line and enter the appropriate
            data. this has been done once initially
            
            */
            
          // '[ enter product id or sku here between single quotes replacing square brackets ]' : '[ enter url here between single quotes replacing square brackets ]',
          
          '[ enter product id or sku here between single quotes replacing square brackets ]' : '[ enter url here between single quotes replacing square brackets ]',
          
          };
          
        </script>

      ```
      
  * All Add to Cart buttons redirect to a single URL. In options code:
  
    * Set **bailIfNoIdsInMap** to **false**.
    
    * Set **url** to a URL.
    
## Make a Donation

Please consider [making a donation][14].

## Changes

* **2026-06-09**

  * fixed issue with idUrlMap code block code
  * bumped version to 0.8.1
  
* **2025-07-07**

  * moved options out of main code
  * updated to work with v7.1 Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.8.0
  
* **2024-03-26**

  * checked for v7.0 Avenue template compatibility
  * bumped version to 0.7.0
  
* **2023-09-07**

  * fix for Bedford template family both adding to cart and redirecting
  * bumped version to 0.6.1
  
* **2023-02-01**

  * support v7.0 Bedford template family
  * bumped version to 0.6.0
  
* **2022-11-02**

  * add class to atc button
  * bumped version to 0.5.0
  
* **2022-10-19**

  * fix sku not working for products with no variants
  * bumped version to 0.4.2
  
* **2022-08-21**

  * fix for atc button adding product to the cart
  * bumped version to 0.4.1
  
* **2022-07-24**

  * add support for using products ids
  * bumped version to 0.4.0
  
* **2022-07-11**

  * add v7.0 Ajax support
  * bumped version to 0.3.0
  
* **2022-03-10**

  * fix for $this undefined
  * bumped version to 0.2d1
  
* **2022-02-28**

  * checked for v7.0 Brine template family compatibility
  * updated to work with v7.1 product detail layouts
  * bumped version to 0.2d0
  
* **2021-12-17**

  * added bailIfNoSkusInMap flag to control if that check is done or not
  * restrict button selector to product detail area
  * bumped version to 0.1d6
  
* **2021-12-10**

  * freshen read me and other minor tweaks, no functional changes
  * tested v7.0 Pacific template family compatibility
  * bumped version to 0.1d5
  
* **2021-06-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205815498-Avenue-template
[3]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[4]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[5]: https://support.squarespace.com/hc/en-us/articles/206545347
[6]: https://www.squarespace.com/pricing
[7]: https://en.wikipedia.org/wiki/JavaScript
[8]: https://www.jsdelivr.com/
[9]: https://en.wikipedia.org/wiki/Content_delivery_network
[10]: store%20product%20detail%20add%20to%20cart%20button%20url%20redirect%20options.html#L1
[11]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[12]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[13]: store%20product%20detail%20add%20to%20cart%20button%20url%20redirect.html#L1
[14]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
