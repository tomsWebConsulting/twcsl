# Form Text Field Max Length

### [License][1]

### Version 0.4d1

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatible : Unknown

---

## Install

* Add code from file **[form text field max length.less][2]** to Design >
  Custom CSS.
  
* Install [twcsl][3]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[form text field max length.html][4]** to Settings >
  Developer Tools > Code Injection > FOOTER.
  
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
  enter it after the ftfml directive. An example.
  
  ```
  ftfml : { 10 } My placeholder text that helps the user.
  ```

## Store Products

Let's say you are selling engraved, decorated, or monogrammed products and those
products need max length limits. You proceed as above, of course creating a form
for your product instead of on a page. Instead of the **ftfml : { 10 }** format
used in the PLACEHOLDER as above you can use the following.

```
ftfml : { skuOrProductId : 10 }
```

You would of course replace **skuOrProductId** with the SKU or product id of
your product. Use SKUs for products with variants. Use product ids for products
with no variants. SS does not provide access to SKUs across the board which this
code can access, hence the having to use SKUs and products ids. I'll refer to
SKUs and product ids collectively as id or ids.

For multiple ids separate them with commas as in the following.

```
ftfml : { skuOrProductId1 : 10, skuOrProductId2 : 5, skuOrProductId3 : 15 }
```

And to have a default if there are no matching ids it would look like the
following.

```
ftfml : { skuOrProductId1 : 20, default : 10 }
```

The ids and default can be in any order. As long as you follow the general
format id colon number comma for each id/number pair.

You can find a no variants product id by using Heather Tovey's [Squarespace ID
Finder][5]. Alternately you can export your inventory and grab the id from the
CSV file.

To use SIF go to your product detail page and use SIF. You will see something
like the following.

![squarespace id finder example](read%20me%20assets/product%20id.png)

You only need the number after **#item-**.

```
ftfml : { productId : 10 }
```

You can mix SKUs and product ids.

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

This effect is not active in SS Preview to test it use [private browsing][6].

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2023-03-29**

  * twcsl 0.2d0 reformat
  * update classes because of SS changes
  * bumped version to 0.4d1
  
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

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: form%20text%20field%20max%20length.less#L1
[3]: https://github.com/tomsWebConsulting/twcsl#install-options
[4]: form%20text%20field%20max%20length.html#L1
[5]: https://www.heathertovey.com/squarespace-id-finder/
[6]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
