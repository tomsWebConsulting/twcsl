# Store Page List Tag Date Hide

### [License][1]

### Synopsis

Hide products on product list pages using tags with dates.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
---

## Quick Install

* Options

  * Page Specific
  
    Use this option when you want only one Page to have this effect.
    
    * Add code from file **[store page list tag date hide.html][4]** to Store
      Settings > Advanced > Page Header Code Injection for the Store Page.
      Refer to [Per-page code injection][5] for details.
      
  * Site-wide
  
    Use this option when you want multiple Pages to have this effect.
    
    * Add code from file **[store page list tag date hide.html][4]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][6] for details.

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

This effect is not active in SS Preview to test it use [private browsing][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-07-11**

  * updated to work with v7.1 Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2024-04-11**

  * fix for 1970 date check
  * bumped version to 0.1.1
  
* **2024-03-24**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20list%20tag%20date%20hide.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
