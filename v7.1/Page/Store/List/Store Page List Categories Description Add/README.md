# Store Page List Categories Description Add

### [License][1]

### Synopsis

Add simple category descriptions to store category pages.

### Version

  * 0.11.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page list categories description add
      options.html][4]** to Page Settings > Advanced > Page Header Code
      Injection for the page. Read the code for any instructions within.
      
    * Add code from file **[store page list categories description
      add.html][5]** to Page Settings > Advanced > Page Header Code Injection
      for the page.
      
    * Refer to [per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page list categories description add
      options.html][4]** to Website > Pages > Custom Code > Code Injection >
      FOOTER. Read the code for any instructions within.
      
    * Add code from file **[store page list categories description
      add.html][5]** to Website > Pages > Custom Code > Code Injection >
      FOOTER.
      
    * Refer to [Add code to code injection][7] for details.
      
## Notes

The code contains default settings to place the description on the top of the
page. If you want to place the description in another location you will need to
use the optional destination selector to do so.

If you use the page style HTML you will need to create your own CSS to style it.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-07-10**

  * updated to work with Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.11.0
  
* **2025-03-10**

  * fix for flexbox issue, remove from twc-splcda-description element
  * bumped version to 0.10.1
  
* **2025-03-09**

  * add HTML format option
  * bumped version to 0.10.0
  
* **2024-11-27**

  * fix for last page section not being hidden for site visitors
  * bumped version to 0.9.1
  
* **2024-11-27**

  * hide last page section while not in edit mode
  * bumped version to 0.9.0
  
* **2024-06-16**

  * potential fix for script ld+json consumers syntax error
  * bumped version to 0.8.0
  
* **2023-11-17**

  * second fix for description html not coming through
  * bumped version to 0.7.4
  
* **2023-08-28**

  * fix parsing errors including description html not coming through
  * bumped version to 0.7.3
  
* **2023-08-25**

  * fix for code hiding product detail page contents
  * bumped version to 0.7.2
  
* **2023-08-24**

  * reworked the parsing code to be a bit more flexible
  * fix disparity between how the read me said to configure category list and
    how the code works
  * bumped version to 0.7.1
  
* **2023-08-13**

  * move configuration out of code and into code block
  * bumped version to 0.7.0
  
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
[4]: store%20page%20list%20categories%20description%20add%20options.html#L1
[5]: store%20page%20list%20categories%20description%20add.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/store-page-list-categories-description-add?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
