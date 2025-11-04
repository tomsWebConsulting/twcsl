# Store Page Title to Lines

### [License][1]

### Synopsis

Split title into lines.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page title to lines options.html][4]** and
      **[summary block title to lines.html][5]** to Store Settings > Advanced >
      Page Header Code Injection for the page. Refer to [Per-page code
      injection][6] for details. Read the code for any instructions within.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from files **[store page title to lines options.html][4]** and
      **[summary block title to lines.html][5]** to Website > Pages >
      Custom Code > Code Injection > FOOTER. Refer to [Add code to code
      injection][7] for details.

## Notes

Entering HTML in the product title field will put that HTML into the backend.
Your site visitors will see that HTML in their cart, checkout and etc. It looks
ugly and make things confusing.

With this effect you can type in almost anything you want for the separator in
the options. If you use a non-breaking space (option-space on macOS, Alt+0160 on
Windows) it shouldn't cause issues on the backend. Squarespace will turn the
non-breaking space into the **&amp;nbsp;** HTML entity, use it for the
separator.

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2021-05-08**

  * verified code works on v7.0 using Brine template family
  * bumped version to 0.1d2
  -->
* **2025-10-13**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20title%20to%20lines%20options.html#L1
[5]: store%20page%20title%20to%20lines.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
