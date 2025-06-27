# Store Page Product Add to Cart Button URL Redirect After Added to Cart

### [License][99]

### Synopsis

Redirect to URL after Add to Cart button clicked and product has been added to
cart.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Yes

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from files **[store page product add to cart button url redirect
      after added to cart options.html][11]** and **[store page product add to
      cart button url redirect after added to cart.html][1]** to Page Settings >
      Advanced > Page Header Code Injection for the store page. Refer to
      [Per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from files **[store page product add to cart button url redirect
      after added to cart options.html][11]** and **[store page product add to
      cart button url redirect after added to cart.html][1]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to code
      injection][7] for details.

## Make a Donation

Please consider [making a donation][2].

## Changes

* **2025-06-26**

  * checked v7.1 Products V2 compatibility
  * moved options out of main code into embedded JSON script tag
  * bumped version to 0.3.0
  
* **2025-04-28**

  * added support for v7.1 list add to cart buttons
  * remove dependency on twcsl
  * remove dependency on jQuery
  * bumped version to 0.2.0
  
* **2021-06-14**

  * reworked the autoClick part of the code to work in a wider variety of
    situations
  * code should now work on any page where there are atcb
  * bumped version to 0.1d2
  
* **2021-05-23**

  * initial version

[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[11]: store%20page%20product%20add%20to%20cart%20button%20url%20redirect%20after%20added%20to%20cart%20options.html#L1
[1]: store%20page%20product%20add%20to%20cart%20button%20url%20redirect%20after%20added%20to%20cart.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[2]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
