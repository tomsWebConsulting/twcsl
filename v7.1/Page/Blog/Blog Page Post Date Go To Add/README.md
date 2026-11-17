# Blog Page Post Date Go To Add

### [License][1]

### Synopsis

Add date go to feature to Publish and Scheduled calendars.

### Version

  * 0.4.2

#### Squarespace Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Blog Page.
    
    * Add code from file **[blog page post date go to add.html][4]** to Page
      Settings > Advanced > Page Header Code Injection for the Page. Refer to
      [Inject code to a specific page][5] for details.
      
  * Site-wide
  
    Use this option when you want to have this effect on all Blog Pages.
    
    * Add code from file **[blog page post date go to add.html][4]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to the header and footer][6] for details.

## Note

The code does not handle all error conditions when dealing with date checking.
I've covered a couple of the most obvious error situations. Others may be
lurking so be careful when entering your dates.

## Make a Donation

Please consider [making a donation][7].

## Changes


* **2025-05-15**

  * fixed Firefox Uncaught DOMException: Node cannot be used in a document other
    than the one in which it was created
  * bumped version to 0.4.2
  
* **2025-05-15**

  * fixed error when site time zone is not pacific time and go to date is
    1970 01 01 begin report as less than 1970 01 01
  * bumped version to 0.4.1
  
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
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
