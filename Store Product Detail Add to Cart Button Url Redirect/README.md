# Store Product Detail Add to Cart Button Url Redirect

### Version 0.4.1

#### SS Versions 7.1, 7.0 ([Brine template family][1], [Pacific template family][2])

#### v7.1 Fluid Engine Compatibility Unknown

---

## Install

* Install [twcsl][3].
  
* Add code from file **[store product detail add to cart button url
  redirect.html][4]** to Store Settings > Advanced > Page Header Code Injection
  for the store page. Read the code for any instructions within.
  
* Options

  * Some Add to Cart buttons redirect to any URL(s).
  
    * Edit a product.
    
    * Add the following to a code block in [Additional Info][5].
      
      ```html
      <script>
      
        twc.spdatcbur.idUrlMap = {
        
          /*
          
            the format of each line is a product id or sku and a URL
            
            copy and repeat the line below for each product id or sku, remove the
            "// " at the beginning of the line and enter the appropriate data. this
            has been done once initially
            
            */
            
          // '[enter product id or sku here between single quotes replacing square brackets]' : '[enter url here between single quotes replacing square brackets]',
          
          '[enter product id or sku here between single quotes replacing square brackets]' : '[enter url here between single quotes replacing square brackets]',
          
          };
          
        </script>
      ```
      
  * All Add to Cart buttons redirect to a single URL.
  
    * Set **bailIfNoSkusInMap** to **false**.
    
    * Set **url** to a URL.
    
## Make a Donation

Please consider [making a donation][6].

## Changes

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

[1]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[2]: https://support.squarespace.com/hc/en-us/articles/206545347
[3]: https://github.com/tomsWebConsulting/twcsl#install-options
[4]: store%20product%20detail%20add%20to%20cart%20button%20url%20redirect.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/206541037-Adding-additional-information-to-products
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
