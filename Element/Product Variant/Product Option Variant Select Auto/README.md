# Product Option Variant Select Auto

### [License][1]

### Synopsis

Auto select a variant of a product option.

### Version

  * 0.5.1

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from files **[product option variant select auto
      script.html][5]** and **[product option variant select auto.html][6]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Refer to [Per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[product option variant select auto
      script.html][5]** to Website > Pages > Custom Code > Code Injection >
      HEADER. Refer to [Add code to code injection][8] for details.
      
    * Add code from file **[product option variant select auto.html][6]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][8] for details.
      
* Read the code for any instructions within.

## Notes

This code currently does not support Product block Quick View.

If you have Size options defined for two products and they don't have the same
variants, and you set the code to select a variant that doesn't exist in one of
the products, nothing will happen. In other words the code is global in nature.
It doesn't understand all the options and variants for each product. The code is
useful for say a clothing seller where the Size menu is always the same. For
example. Small, Medium, and Large which would be the same across all products.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-05-12**

  * check for certain error conditions and do nothing
  * fixed syntax error
  * bumped version to 0.5.1
  
* **2025-05-12**

  * support for user selecting which variant is selected
  * fixed to work with recent structural changes Squarespace made to product
    blocks
  * remove dependency on twcsl
  * remove dependency on jQuery
  * bumped version to 0.5.0
  
* **2024-12-07**

  * move the user settings outside of the main code
  * fix for first items not being selected
  * bumped version to 0.4.0
  
* **2023-11-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: product%20option%20variant%20select%20auto%20script.html#L1
[6]: product%20option%20variant%20select%20auto.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
