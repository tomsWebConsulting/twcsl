# Store Page Form Text Field Max Length

### [License][1]

### Synopsis

Limit store page form text and text area field lengths.

### Version

  * 0.3.3

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

* Install [Product Custom Form Text Field Max Length][5]. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page form text field max length.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Refer
      to [Per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page form text field max length.html][6]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][8] for details.
      
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
    [Squarespace ID Finder][9]. Alternately you can export your inventory and
    grab the id from the CSV file.
    
    To use SIF go to your product detail page and use SIF. You will see
    something like the following.
    
    ![squarespace id finder example](read%20me%20assets/product%20id.png)
    
    You only need the number after **#item-**.

* If you need installation help or customization please [contact me for paid
  consulting][10].

## Notes

This code does not work on the checkout page. It is a Squarespace security
feature that no code can alter the checkout page.

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

## Make a Donation

Please consider [making a donation][11].

## Changes

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
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Product%20Custom%20Form%20Text%20Field%20Max%20Length#product-custom-form-text-field-max-length
[6]: store%20page%20form%20text%20field%20max%20length.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: https://www.heathertovey.com/squarespace-id-finder/
[10]: https://github.com/tomsWebConsulting/twcsl#need-help-installing-or-customizing-the-code
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
