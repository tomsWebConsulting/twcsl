# Cart Page Summary HTML Add

### [License][1]

### Synopsis

Add HTML to the cart page summary.

### Version

  * 0.3.0

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

* Install [Cart Page Observe Changes][5]. After you install Cart Page Observe
  Changes be sure to continue on with the rest of the steps.
  
* Add code from file **[cart page summary html add options.html][6]** to
  Website > Pages > Custom Code > Code Injection > FOOTER **before** the **cart
  page observe changes** code. Refer to [Add code to code injection][7] for
  details. Read the code for any instructions within.
  
* Add code from file **[cart page summary html add.html][8]** to Website >
  Pages > Custom Code > Code Injection > FOOTER **before** the **cart page
  observe changes** code.
  
* In the **cart page observe changes** code add **twcCartPageSummaryHtmlAdd** to
  callbacks added.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-08-13**

  * moved options out of main code
  * added check to not add the html multiple times
  * added missing class for v7.0 summary element
  * bumped version to 0.3.0
  
* **2024-04-29**

  * make code running message appear once in console
  * bumped version to 0.2.1
  
* **2024-04-28**

  * removed dependency on jQuery
  * make compatible with cart page observe changes v0.2.0
  * bumped version to 0.2.0
  
* **2022-12-09**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[6]: cart%20page%20summary%20html%20add%20options.html
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: cart%20page%20summary%20html%20add.html
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
