# Store Page List Categories Description Add

### [License][1]

### Synopsis

Add simple category descriptions to store category pages.

### Version

  * 0.6.0

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

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store page list categories description
      add.html][6]** to Store Settings > Advanced > Page Header Code Injection
      for the store page. Please see [Per-page code injection][7]. Read the code
      for any instructions within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page list categories description
      add.html][6]** to Settings > Developer Tools > Code Injection > FOOTER.
      Please see [Add code to code injection][8]. Read the code for any
      instructions within.

## Note

The code contains default settings to place the description on the top of the
page. If you want to place the description in another location you will need to
create your own settings to do so.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2023-08-08**

  * support nested categories
  * bumped version to 0.6.0
  
* **2023-06-16**

  * make code more flexible in where the description can be placed
  * bumped version to 0.5.0
  
* **2023-05-31**

  * make code for urlSlugs work the way the text describes to enter them. also
    be flexible with either starting with a forward slash or not
  * bumped version to 0.4.1
  
* **2023-02-16**

  * revert back to using category slugs instead of name, better support for
    nested categories
  * bumped version to 0.4.0
  
* **2021-08-12**

  * support for HTML in descriptions
  * use category instead of category slugs
  * bumped version to 0.3d0
  
* **2021-06-27**

  * added window.twc
  * remove debugger statement
  * bumped version to 0.2d3
  
* **2021-06-15**

  * fix issue with not being able to add category description to store page
    grid/listing
  * bumped version to 0.2d2
  
* **2021-06-11**

  * use twcsl
  * bumped version to 0.2d1
  
* **2021-05-19**

  * added a choice of paragraph styles
  * user can set store url slug
  * bumped version to 0.2d0
  
* **2021-01-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20list%20categories%20description%20add.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
