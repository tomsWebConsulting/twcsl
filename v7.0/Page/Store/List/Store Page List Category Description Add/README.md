# Store Page List Category Description Add

### [License][1]

### Synopsis

Add a category description to Store category pages.

### Version

  * 0.6.1

#### SS Version

  * 7.0 ([Avenue template][2], [Bedford template family][3], [Brine template family][4], [Skye template family][5], [Wells][6])

#### Dependencies

  * [Squarespace plan][7] that supports [JavaScript][8].
  
  * [Tom's Web Consulting Squarespace Library][9]

---

## Install

* Install [twcsl][10]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store page list category description add.css][11]** to
  Website > Pages > Website Tools > Custom CSS.
  
* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single Store page you want to have this effect.
      
    * Add code from file **[store page list category description add.html][12]**
      to Store Settings > Advanced > Page Header Code Injection for the store
      page. Please see [Per-page code injection][13]. Read the code for any
      instructions within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page list category description add.html][12]**
      to Settings > Developer Tools > FOOTER. Please see [Add code to code
      injection][14]. Read the code for any instructions within.

## Make a Donation

Please consider [making a donation][15].

## Changes

* **2024-07-10**

  * fix for description floating after grid
  * bumped version to 0.6.1
  
* **2023-10-01**

  * add support for Wells template
  * bumped version to 0.6.0
  
* **2023-07-11**

  * make ajax compatible
  * add support for Skye template family
  * bumped version to 0.5.0
  
* **2022-05-04**

  * update code for twc global, multiple effect can coexist
  * add user selector option
  * break CSS out into separate file
  * bumped version to 0.4.0
  
* **2021-11-15**

  * fix for description layout issue when categories are set to side for Brine
  * bumped version to 0.3d0
  
* **2021-07-25**

  * use twcsl
  * bumped version to 0.2d0
  
* **2021-03-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205815498-Avenue-template
[3]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[4]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[5]: https://support.squarespace.com/hc/en-us/articles/217383407-Skye-template-family
[6]: https://support.squarespace.com/hc/en-us/articles/206545647-Wells-template
[7]: https://www.squarespace.com/pricing
[8]: https://en.wikipedia.org/wiki/JavaScript
[9]: https://github.com/tomsWebConsulting/twcsl
[10]: https://github.com/tomsWebConsulting/twcsl#install-options
[11]: store%20page%20list%20category%20description%20add.css#L1
[12]: store%20page%20list%20category%20description%20add.html#L1
[13]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[14]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[15]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
