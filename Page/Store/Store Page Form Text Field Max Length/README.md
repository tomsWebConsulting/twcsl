# Store Page Form Text Field Max Length

### [License][1]

### Synopsis

Limit store page form text and text area field lengths.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Tom's Web Consulting Squarespace Library][5]
  
  * [Cart Page Observe Changes][6]

---

## Install

* Install [twcsl][7]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Install [Cart Page Observe Changes][6]. After you install Cart Page Observe
  Changes be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store page form text field max length.html][8]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Please
      see [Per-page code injection][9]. Read the code for any instructions
      within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page form text field max length.html][8]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][10]. Read the code for any instructions within.
      
* Edit a Store page product and add a Custom Form.

* For each form field you want to limit the number of characters do the
  following.

  * In the PLACEHOLDER field add one of the following examples.
    
    Limit all products that use the custom form to a number.
    
    ```text
    ftfml : { 10 }
    ```
    
    Limit a specific product that uses the custom form to a number. Replace
    **skuOrProductId** with the SKU or product id of your product. Use SKUs for
    products with variants. Use product ids for products with no variants.
    Squarespace does not provide access to SKUs across the board which this
    code can access, hence the having to use SKUs and products ids.
    
    ```text
    ftfml : { skuOrProductId : 10 }
    ```
    
    Limit specific products that use the custom form to a number. 
    
    ```text
    ftfml : { skuOrProductId1 : 10, skuOrProductId2 : 5, skuOrProductId3 : 15 }
    ```
    
    Limit a specific product that uses the custom form to a number and another
    number for all other products. 
    
    ```
    ftfml : { skuOrProductId1 : 20, default : 10 }
    ```
    
    Henceforth I'll refer to SKUs and product ids collectively as id or ids. The
    ids and default can be in any order. As long as you follow the general
    format id colon number comma for each id/number pair.
    
    You can find a product with no variants id by using Heather Tovey's
    [Squarespace ID Finder][11]. Alternately you can export your inventory and
    grab the id from the CSV file.
    
    To use SIF go to your product detail page and use SIF. You will see something
    like the following.
    
    ![squarespace id finder example](read%20me%20assets/product%20id.png)
    
    You only need the number after **#item-**.

## Notes

This effect is not active in SS Preview to test it use [private browsing][12].

This code does not work on the checkout page. It is a Squarespace security
feature that no code can alter the checkout page.

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

## Make a Donation

Please consider [making a donation][13].

## Changes

<!-- * **2021-07-28**

  * generalized a bit to handle text and text area fields
  * bumped version to 0.2d0
  -->
* **2024-05-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[5]: https://github.com/tomsWebConsulting/twcsl
[7]: https://github.com/tomsWebConsulting/twcsl#install-options
[8]: store%20page%20form%20text%20field%20max%20length.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[11]: https://www.heathertovey.com/squarespace-id-finder/
[12]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
