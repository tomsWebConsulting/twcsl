# Form Text Field Max Length

### Version 0.4d0

#### SS Versions 7.1, 7.0

---

## Quick Install

* Add code from file
**[form text field max length.less](form%20text%20field%20max%20length.less#L1)**
to Design > Custom CSS.

* Add the following to Settings > Advanced > Code Injection > HEADER.

  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://d1j8mu9lowy9zf.cloudfront.net/twcsl/0.1d15/twcsl.js"></script>
  ```
  
* Add code from file
**[form text field max length.html](form%20text%20field%20max%20length.html#L1)**
to Settings > Advanced > Code Injection > FOOTER.

* Add a form block to your page and set up as desired.

  For each text or text area field where you want a max character limit do the
  following :
  
  Edit the field.
  
  At the beginning of the PLACEHOLDER field enter
  **ftfml : { [enter max length number here between curly brackets] }**.
  Here is an example.
  
  ```
  ftfml : { 10 }
  ```
  
  If you want to have placeholder text for the field that the user will see
  enter if after the ftfml directive. An example.
  
  ```
  ftfml : { 10 } My placeholder text that helps the user.
  ```

## Products

### Store Products

Let's say you are selling engraved, decorated, or monogrammed products and those
products need max length limits. You proceed as above, of course creating a form
for your product instead of on a page. Instead of the **ftfml : { 10 }** format
used in the PLACEHOLDER as above you can use the following.

```
ftfml : { sku : 10 }
```

You would of course replace **sku** with the SKU of your product.

For multiple SKUs separate them with commas as in the following.

```
ftfml : { sku1 : 10, sku2 : 5, sku3 : 15 }
```

And to have a default if there are no matching SKUs it would look like the
following.

```
ftfml : { sku1 : 20, default : 10 }
```

The SKUs and default can be in any order. As long as you follow the general
format sku colon number comma for each sku/number pair.

### Product With No Variants

For products with no variants you need to use product ids instead of SKUs. Its
a limitation of what SS provides on pages that this code can access.

You can find a no variants product id by using Check out Heather Tovey's
[Squarespace ID Finder](https://www.heathertovey.com/squarespace-id-finder/).
Alternately you can export your inventory and grab the id from the CSV file.

To use SIF go to your product detail page and use SIF. You will see something
like to following.

![squarespace id finder example](read%20me%20assets/product%20id.png)

You only need the number after **#item-**.

The format for product block form field max lengths follow the same pattern as
store product details. Using product ids instead of SKUs.

```
ftfml : { productId : 10 }
```

You can mix SKUs and product ids. This way you can have a product detail page
and any products linked to it via product blocks and etc. can have form field
max lengths.

```
ftfml : { sku : 10, productId : 10 }
```

## Notes

This code does not work on the checkout page. It is a SS security feature that
no code can alter the checkout page.

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

This effect is not active in SS Preview to test it use
[private browsing](https://bit.ly/3f6lhq2).

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-09-27**

  * use placeholder field instead of description for ftfml directive
  * deepen code to work more places where forms appear
  * added ability to set max length based on product SKU or id for product forms
  * bumped version to 0.4d0
  
* **2021-09-24**

  * fix invalid left hand assignment
  * add m flag to regular expression
  * bumped version to 0.3d1
  
* **2021-09-23**

  * reworked the code to be much more generalized
  * changed name from Set Store Product Detail Named Form Labeled Text Field
    Character Max Length to Form Text Field Max Length
  * bumped version to 0.3d0
  
* **2021-07-30**

  * added missing quick install text
  * bumped version to 0.2d1
  
* **2021-07-28**

  * generalized a bit to handle text and text area fields
  * bumped version to 0.2d0
  
* **2020-11-21**

  * initial version
