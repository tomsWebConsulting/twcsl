# Store Page List Category Description Add

### [License][1]

### Synopsis

Add descriptions to product category pages. 

### Version

  * 0.1.0

#### Squarespace Version

  * 7.0 ([Bedford template family][2])

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Tom's Web Consulting Squarespace Library][5]

---

## Install

* Install [twcsl][6]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Store Page.
    
    * Add code from file **[store page list category description add.html][7]**
      to Store Settings > Advanced > Page Header Code Injection for the store
      page. Refer to [Inject code to a specific page][8] for details.
      
  * Site-wide
  
    Use this option if you have multiple elements such as a store page and
    product blocks where you want to have this effect.
    
    * Add code from file **[store page list category description add.html][7]**
      to Website > Pages > Custom Code > Code Injection > FOOTER. Refer to
      [Add code to the header and footer][9] for details.
      
* Create a Dropdown page in Pages with the following settings.

  ![dropdown settings][10]
  
* Add a Blank page to the TWC SPLCDA dropdown page for each Store Page category
  you want to have a description. Set the PAGE TITLE and NAVIGATION TITLE fields
  to a Store Page Category title. Set the URL SLUG field to the specific
  following format.
  
  ```text
  twc-splcda/[enter url slug of store page here replacing square brakets]/[enter encoded category url slug here replacing square brakets]
  ```
  
  Page URL Slug fields accept a very limited set of characters, lower case only,
  characters a - z, 0 - 9, and - (dash). Store Page category titles accept a
  larger set of characters and so we need to encode category titles so that we
  can add them as part of Page URL Slug. Any character outside the previously
  mentioned set are converted to - characters.
  
  
## Make a Donation

Please consider [making a donation][11].

## Changes

<!-- * **2023-05-31**

  * add ability to append and prepend to selector destination
  * bumped version to 0.2.0
  -->
* **2024-05-24**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl
[6]: https://github.com/tomsWebConsulting/twcsl#install-options
[7]: store%20page%20list%20category%20description%20add.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[10]: read%20me%20assets/dropdown%20settings.png
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
