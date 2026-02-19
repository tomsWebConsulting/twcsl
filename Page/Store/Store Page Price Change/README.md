# Store Page Price Change

### [License][1]

### Synopsis

Change store page prices.

### Version

  * 0.9.0

#### SS Version

  * 7.1
  
  * 7.0 ([Brine template family][2], [Five][3], [Montauk template family][4])

#### v7.1 Products V2 Compatible

  * Yes

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][5] that supports [JavaScript][6].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][7], a [CDN][8])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Store page.
      
      * Add code from file **[store page price change options.html][9]** to
        Page Settings > Advanced > Page Header Code Injection for the Store
        Page. Read the code for any instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Store Page.
        
        ```html
        <!-- begin TWC Store Page Price Change -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Page/Store/Store%20Page%20Price%20Change/store%20page%20price%20change.min.js" type="module"></script>
          
          <!-- end TWC Store Page Price Change -->
          
        ```
        
      * Refer to [per-page code injection][10] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add code from file **[store page price change options.html][9]** to
        Website > Pages > Custom Code > Code Injection > FOOTER for the Store
        Page. Read the code for any instructions within.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Store Page Price Change -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Page/Store/Store%20Page%20Price%20Change/store%20page%20price%20change.min.js" type="module"></script>
          
          <!-- end TWC Store Page Price Change -->
          
        ```
        
      * Refer to [Add code to code injection][11] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on
  your site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Store Page.
    
    * Add code from file **[store page price change options.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the Store Page.
      Read the code for any instructions within.
      
    * Add code from file **[store page price change.html][12]** to
      Page Settings > Advanced > Page Header Code Injection for the Store Page.
      
    * Refer to [per-page code injection][10] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Store pages.
    
    * Add code from file **[store page price change options.html][9]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Read the code for
      any instructions within.
      
    * Add code from file **[store page price change.html][12]** to Website >
      Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][11] for details.

## searchReplaceText Example Lines

```JavaScript
          // remove word from
          
          "from" : "",
          
  ```

```JavaScript
          // change language of word from, from english to swedish
          
          "from" : "fra",
          
  ```

```JavaScript
          // remove zero decimal from price
          
          ".00" : "",
          
  ```

```JavaScript
          /*
          
            remove decimal from price, using regular expression, backslash must
            be escaped with \, the replacement text uses special replacement
            patterns
            
            */
            
          "/(\\d+(?:,\\d{3})*)(?:\\.\\d{2})?/" : "$1",
          
  ```

```JavaScript
          // add thousands separator
          
          "/\\d(?=(?:\\d{3})+(?!\\d))/g" : "$&,",
          
  ```

```JavaScript
          // replacement text callback name
          
          "log" : "twcSppcl",
          
  ```

## Callbacks

For an example of how to write a callback please see [Store Page Price Change
Log][13]. If a callback returns false the rest of the callbacks won't be called.

## Notes

Changing prices on a Store Page does not affect the cart, checkout, or other
Squarespace Pages/backend storage. This is purely a cosmetic change. No code can
change the Checkout Page or SS backend. It is an SS security feature.

The watch option controls if this code watches for price changes.

## Make a Donation

Please consider [making a donation][14].

## Changes

* **2026-02-18**

  * added watch option
  * bumped version to 0.8.0
  
* **2025-07-12**

  * fixed bug were MutationObserver was not watching prices
  * bumped version to 0.8.0
  
* **2025-06-26**

  * updated to work with v7.1 Products V2
  * bumped version to 0.7.2
  
* **2025-05-09**

  * fixed check for tweak-products-add-to-cart-button class name after
    Squarespace made changes
  * bumped version to 0.7.1
  
* **2025-02-07**

  * support add to cart buttons feature on list page
  * restructure code
  * remove dependency on jQuery
  * remove dependency on twcsl
  * bumped version to 0.7.0
  
* **2024-10-04**

  * rework code to use JSON for settings via a script tag
  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks. makes the initialization code a bit more dense but
    removes the need for the user to dive into this code to set callbacks. they
    just need to add a callback per that codes instructions
  * bumped version to 0.6.0
  
* **2022-09-02**

  * add option to change afterpay price
  * bumped version to 0.5.0
  
* **2022-08-13**

  * remove an errant line of code, no functional change
  * bumped version to 0.4.1
  
* **2022-04-20**

  * add support for store detail layouts
  * fix for 0.3d8 regression on being able to change store list prices
  * bumped version to 0.4.0
  
* **2022-02-03**

  * wrap some code in a Immediately-Invoked Function Expression to isolate
    initialize function
  * bumped version to 0.3d9
  
* **2022-01-31**

  * rework how code responds to function results, it is now possible to stop
    further processing of remaining search/replace pairs
  * bumped version to 0.3d8
  
* **2022-01-29**

  * fix for initialization code break for v7.1
  * bumped version to 0.3d7
  
* **2022-01-21**

  * make ajax compatible for v7.0
  * bumped version to 0.3d6
  
* **2022-01-20**

  * fix variable without const keyword
  * bumped version to 0.3d5
  
* **2021-09-30**

  * pass more parameters to functions so they can do more
  * bumped version to 0.3d4
  
* **2021-09-28**

  * change where searchReplaceText is stored to reduce varible already defined
    error
  * functions now always run instead of just for variant changes
  * use class to show price instead of setting style on elements
  * bumped version to 0.3d3
  
* **2021-08-29**

  * changed name from Change Store Product Detail Price Text to Store Price
    Change, previous name was a misnomer
  * bumped version to 0.3d2
  
* **2021-08-20**

  * disconnect observer before text changes and "reconnect" after changes,
    more efficient
  * bumped version to 0.3d1
  
* **2021-08-19**

  * changed name from Change Text of Prices on Store Pages to Change Store
    Product Detail Price Text
  * added ability to call replacment text function
  * use twcsl
  * bumped version to 0.3d0
  
* **2021-07-31**

  * added missing quick install text
  * bumped version to 0.2d1
  
* **2021-05-15**

  * changed name from Remove Word From, from Prices on Store Pages to Change
    Text of Prices on Store Pages
  * changed code to be a text changer instead of simply removing the word from
  * bumped version to 0.2d0
  
* **2021-05-14**

  * add support for Five template and Montauk template family
  * bumped version to 0.1d4
  
* **2021-05-13**

  * fix MutationObserver guard
  * bumped version to 0.1d3
  
* **2021-05-08**

  * verified code works on v7.0 using Brine template family
  * bumped version to 0.1d2
  
* **2021-04-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/206544937-Five-template
[4]: https://support.squarespace.com/hc/en-us/articles/205815568-Montauk-template-family
[5]: https://www.squarespace.com/pricing
[6]: https://en.wikipedia.org/wiki/JavaScript
[7]: https://www.jsdelivr.com/
[8]: https://en.wikipedia.org/wiki/Content_delivery_network
[9]: store%20page%20price%20change%20options.html#L1
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[11]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[12]: store%20page%20price%20change.html#L1
[13]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change%20Log#store-page-price-change-log
[14]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
