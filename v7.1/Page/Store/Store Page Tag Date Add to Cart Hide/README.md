# Store Page Tag Date Add to Cart Hide

### [License][1]

### Version

  * 0.2.1

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
  
    * Use this option if you have only a single store page you want to have this
      effect.
      
    * Add code from file **[store page tag date add to cart hide.html][4]** to
      Store Settings > Advanced > Page Header Code Injection for the page. Refer
      to [Per-page code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple store pages where you want to have
      this effect.
      
    * Add code from file **[store page tag date add to cart hide.html][4]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][6] for details.

## How To Use

Edit a product and add a tag of **twc-sptdatch 2025-11-03 00:00:00 AM 2025-11-05 00:00:00 AM**.
The twc-sptdatch indicates to the code that this is a product to be hidden based
on the date/time entered. The first date/time is when to begin hiding the
product, the optional second date/time when hiding ends.

  * Tag Syntax
  
    * twc-sptdatch
    
    * start date/time ( YYYY-MM-DD HH:MM:SS AM )
    
    * stop date/time ( optional, YYYY-MM-DD HH:MM:SS AM )
    
    ```text
    twc-sptdatch [ enter start date/time here replacing square brackets ] [ optional, enter stop date/time here replacing square brackets ]
    ```
    
    **Using the year 1970 tells the code to replace the year with the current 
    one.**
    
    **Extra spaces or not following the format described will cause a product
    not to be hidden.**
    
  * Examples
  
    * Hide a product beginning on date/time.
    
      ```text
      twc-sptdatch 2025-11-03 00:00:00 AM
      ```
      
    * Hide a product for a date/time range.
    
      ```text
      twc-sptdatch 2025-11-03 00:00:00 AM 2025-11-05 00:00:00 AM
      ```
      
    * Hide a product annually for a date range.
    
      ```text
      twc-sptdatch 1970-11-03 00:00:00 AM 1970-11-05 00:00:00 AM
      ```

## Notes

This effect is not active in Squarespace Preview to test it use private
[browsing][7].
                      
This effect is not time zone aware and therefore useful for local sales only.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-11-03**

  * added how to to read me
  * fixed code key
  * bumped version to 0.2.1
  
* **2025-11-03**

  * added support for list pages
  * updated to work with v7.1 Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2023-02-24**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20tag%20date%20add%20to%20cart%20hide.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://tinyurl.com/ynessvsf
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
