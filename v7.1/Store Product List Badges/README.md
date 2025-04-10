# Store Product List Badges

### [License][1]

### Synopsis

Replace Squarespace v7.1 native badge with an old style badge from some of the
v7.0 templates.

### Version

  * 0.1.1

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store product list badges.html][6]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Refer to [Per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store product list badges.html][6]** to Website >
      Pages > Website Tools > Code Injection > FOOTER. Refer to [Add code to
      code injection][17] for details.
      
* Read the code for any instructions within.

## Custom Badges

In addition to the SS built-in badges this code lets you add your own custom
badges to products. For example lets say you want to add a **pre-order badge**
to a product. Edit the product. Add a tag with the text **twc splb pre-order**.
You will now see a pre-order badge on the product list page.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2024-07-17**

  * fix for duplicate twc-splb-item elements per product
  * bumped version to 0.1.1
  
* **2023-05-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20product%20list%20badges.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[17]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/store-product-list-badges?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
