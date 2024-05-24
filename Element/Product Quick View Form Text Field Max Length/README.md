# Product Quick View Form Text Field Max Length

### [License][1]

### Synopsis

Limit product quick text and text area field lengths.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Product Quick View Observe Changes][5]

---

## Install

* Install [Product Quick View Observe Changes][5]. After you install the code be
  sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add code from file **[product quick view form text field max
      length.html][7]** to Page Settings > Advanced > Page Header Code Injection
      for the page, **before** the product quick view observe changes code.
      Please see [Per-page code injection][8].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple elements such
      as a store page and product blocks where you want to have this effect.
      
    * Add code from file **[product quick view form text field max
      length.html][7]** to Website > Pages > Website Tools > Code Injection >
      FOOTER, **before** the product quick view observe changes code. Please see
      [Add code to code injection][9].
      
* Add the **twcPqvftfml** callback name to the product quick view observe
  changes code per that codes install instructions.
  
* If you need installation help or customization please [contact me for paid
  consulting][11].

## Notes

This code does not work on the checkout page. It is a Squarespace security
feature that no code can alter the checkout page.

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

## Make a Donation

Please consider [making a donation][12].

## Changes

<!-- * **2024-05-18**

  * support quick view
  * bumped version to 0.2.0
  -->
* **2024-05-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Product%20Quick%20View%20Observe%20Changes#product-quick-view-observe-changes
[7]: product%20quick%20view%20form%20text%20field%20max%20length.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://www.heathertovey.com/squarespace-id-finder/
[11]: https://github.com/tomsWebConsulting/twcsl#need-help-installing-or-customizing-the-code
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
