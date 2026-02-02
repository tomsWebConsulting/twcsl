# Store Page Detail Elements Tagged Hide

### [License][1]

### Synopsis

Hide tagged commerce elements on a Store page.

### Version

  * 2.3.0

#### SS Version

  * 7.0 ([Adirondack][2], [Brine template family][3], [York template family][4])

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single store page you want to have this
      effect.
      
    * Add code from file **[store page detail elements tagged hide.html][5]** to
      Store Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple store pages where you want to have
      this effect.
      
    * Add code from file **[store page detail add to cart button added
      callbacks.html][5]** to Website > Pages > Website Tools > Custom Code >
      Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][7].

* Add "twc hide atc", "twc hide mark", "twc hide price", "twc hide quantity"
  and/or "twc hide variants" tags, without the quotes, to each product where you
  want to hide the Add To Cart button, mark, price and/or quantity elements.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-11-16**

  * removed support for Squarespace version 7.1
  * bumped version to 2.3.0
  
* **2022-06-14**

  * add selector for product mark
  * bumped version to 2.2
  
* **2022-03-12**

  * added support for hiding price
  * bumped version to 2.1
  
* **2022-01-25**

  * added support for v7.0 York template family
  * added support for hiding quantity
  * bumped version to 2.0
  
* **2022-01-06**

  * fixes for SS Dec. 20th 2021 structure/CSS changes
  * bumped version to 1.1.1
  
* **2021-08-03**

  * added support for v7.0 Brine template family and Adirondack template
  * bumped version to 1.1
  
* **2021-07-26**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/206545397-Adirondack-template
[3]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[4]: https://support.squarespace.com/hc/en-us/articles/218211197-York-template-family
[5]: store%20page%20detail%20elements%20tagged%20hide.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
