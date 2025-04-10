# Blog Page Post Date Go To Add

### [License][1]

### Synopsis

Add date go to feature to Publish and Scheduled calendars.

### Version

  * 0.4.0

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
      
    * Add code from file **[blog page post date go to add.html][4]** to Page
      Settings > Advanced > Page Header Code Injection for the page. Refer to
      [Per-page code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[blog page post date go to add.html][4]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Refer to [Add
      code to code injection][6] for details.

## Note

The code does not handle all error conditions when dealing with date checking.
I've covered a couple of the most obvious error situations. Others may be
lurking so be careful when entering your dates.

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2024-09-26**

  * convert from bookmarlet to site installed code
  * bumped version to 0.4.0
  
* **2024-09-26**

  * go directly to date instead of clicking to it
  * date no longer restricted to the past
  * bumped version to 0.3.0
  
* **2024-09-16**

  * fix for Safari not parsing dates
  * bumped version to 0.2.1
  
* **2023-08-06**

  * try to use the structure of options instead of dynamic CSS names
  * bumped version to 0.2.0
  
* **2023-07-09**

  * update dynamic calendar class
  * bumped version to 0.1.1
  
* **2022-11-15**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: blog%20page%20post%20date%20go%20to%20add.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
