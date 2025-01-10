# Store Page Detail Add Button After Add to Cart Button

### [License][1]

### Synopsis

Add an Add to Cart style button after the Add to Cart button with text and URL
of your choice.

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [jQuery][5]

---

## Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store page detail add button after add to cart
      button.html][6]** to Store Settings > Advanced > Page Header Code
      Injection for the store page. Please see [Per-page code injection][7].
      Read the code for any instructions within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page detail add button after add to cart
      button.html][6]** to Website > Pages > Website Tools > Code Injection >
      FOOTER. Please see [Add code to code injection][8]. Read the code for any
      instructions within.

## How to Use

* Options

  * Add a single button to all products with the same text and URL.
  
    * In the code set the text, url and other desired settings.
    
  * Add a unique button to each product with the same text and unique URL.
    
    * In the code set the text setting.
    
    * For each product enter your URL adding **#twc-spdabaatcb** to the end on a
      line by itself in the Description field. The **#twc-spdabaatcb** will be
      removed when the button is added and the link from Description will be
      removed. I suggest preparing your URL outside of SS as the link editor is
      temperamental when pasting extra text at the end of the URL.
      
  * Mix and match.
    
    * Set the settings as for the first option.
    
    * On some products add a URL per the second option.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2025-01-10**

  * add support setting URLs per product
  * bumped version to 0.4.0
  
* **2022-04-11**

  * fix for product detail layouts that have two detail areas
  * bumped version to 0.3.0
  
* **2022-03-30**

  * fix for button not showing, no longer add css to cloned button
  * bumped version to 0.2d1
  
* **2021-05-12**

  * add support for guard processor
  * bumped version to 0.2d0
  
* **2021-04-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://jquery.com/
[6]: store%20page%20detail%20add%20button%20after%20add%20to%20cart%20button.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-add-button-after-add-to-cart-button/p/earth-sky-planter?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
