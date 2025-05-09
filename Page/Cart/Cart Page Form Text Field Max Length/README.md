# Cart Page Form Text Field Max Length

### [License][1]

### Synopsis

Limit cart product edit detail form text and text area fields lengths.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Cart Page Observe Changes][4]

---

## Install

* Install [Cart Page Observe Changes][4]. After you install Cart Page Observe
  Changes be sure to continue on with the rest of the steps.
  
* Add code from file **[cart page form text field max length.html][5]** to
  Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code
  to code injection][6] for details.
  
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
    [Squarespace ID Finder][7]. Alternately you can export your inventory and
    grab the id from the CSV file.
    
    To use SIF go to your product detail page and use SIF. You will see something
    like the following.
    
    ![squarespace id finder example](read%20me%20assets/product%20id.png)
    
    You only need the number after **#item-**.

## Notes

This effect is not active in SS Preview to test it use [private browsing][8].

This code does not work on the checkout page. It is a Squarespace security
feature that no code can alter the checkout page.

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2024-05-27**

  * run in editor
  * bumped version to 0.1.1
  
* **2024-04-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[5]: cart%20page%20form%20text%20field%20max%20length.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://www.heathertovey.com/squarespace-id-finder/
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
