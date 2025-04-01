# Form Block Zip Code Url Redirect

### [License][1]

### Synopsis

Redirect a form block with a single Text field labeled Zip Code to a URL.

### Version 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Form Block Wrapper Observe Changes][4]

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Install **[Form Block Wrapper Observe Changes][5]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[form block zip code url redirect.html][6]** to Page
      Settings > Advanced > Page Header Code Injection for the page. Refer to
      [per-page code injection][7] for details. Read the code for any
      instructions within.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[form block zip code url redirect.html][6]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Refer to [Add
      code to code injection][8]. Read the code for any instructions within.
      
* Add or edit a form block.

* In the **Form Block Wrapper Observe Changes** code add **twcFbzcur** to
  **added** per the **Form Block Wrapper Observe Changes** code install steps.
  
* In addition to Label field as described in the **Form Block Wrapper Observe
  Changes** code, add a Text field with a label of Zip Code.

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2024-04-27**

  * update to work with Form Block Wrapper Observe Changes v0.3.0
  * bumped version to 0.1.1
  -->
* **2025-03-17**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[6]: form%20block%20zip%20code%20url%20redirect.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
