# Store Page List Tag Date Hide

### [License][1]
    
### Synopsis

Hide products on product list pages using tags with dates.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]
  
---

## Install

* Install [twcsl][4]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store page list tag date hide.html][5]** to Store
      Settings > Advanced > Page Header Code Injection for the store page.
      Please see [Per-page code injection][6].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page list tag date hide.html][5]** to
      Website > Website Tools > Code Injection > FOOTER. Please see [Add code to
      code injection][7].

## How To Use

Edit a product and add a tag of **twc-spltdh 2024-03-23 2024-03-25**. The
twc-spltdh indicates to the code that this is a product to be hidden based on
the dates entered. The first date is the date to begin hiding the product, the
second (optional) when the hiding ends.

## Tag Syntax

  * twc-spltdh
  
  * start date ( YYYY-MM-DD )
  
  * stop date ( optional, YYYY-MM-DD )

```text
twc-spltdh [ enter start date here replacing square brackets ] [ enter optional stop date here replacing square brackets ]
```

#### Examples

Hide a product beginning on date.

```text
twc-spltdh 2024-03-24
```

Hide a product for a date range.

```text
twc-spltdh 2024-03-23 2024-03-25
```

Hide a product annually for a date range.

```text
twc-spltdh 1970-03-23 1970-03-25
```

**Using the year 1970 tells the code to replace the year with the current 
one.**

**Extra spaces or not following the format described will cause a product not
to be hidden.**

## Note

This effect is not active in SS Preview to test it use [private browsing][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2023-05-30**

  * remove errants break statement, no functional changes
  * bumped version to 0.1.1
  -->
* **2024-03-24**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl#install-options
[5]: store%20page%20list%20tag%20date%20hide.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
