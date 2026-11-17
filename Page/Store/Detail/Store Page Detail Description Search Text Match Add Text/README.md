# Store Product Detail Add Text After Description Matched Text Per Tag

### [License][1]

### Synopsis

Search for text in the product description and add text after it based on tags.

### Version

  * 0.2.0

#### Squarespace Versions

  * 7.1

  * 7.0 ([Brine template family][2])
  
#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install

* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Store
    Page.
    
    * Add code from file **[store page detail description search text match add
      text options.html][5]** to Store Page Settings > Advanced >
      Page Header Code Injection for the Page. Read the code for any
      instructions within.
      
    * Add code from file **[store page detail description search text match add
      text.html][6]** to Store Page Settings > Advanced > Page Header Code
      Injection for the Page.
      
    * Refer to [Inject code to a specific page][7] for details.
    
  * Site-wide
  
    Use this option when you want to have this effect on all Store Pages.
    
    * v7.1
    
      * Add code from file **[store page detail description search text match
        add text options.html][5]** to Website > Pages > Custom Code >
        Code Injection > FOOTER. Read the code for any instructions within.
        
      * Add code from file **[store page detail description search text match
        add text.html][6]** to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[store page detail description search text match
        add text options.html][5]** to Website > Pages > Website Tools >
        Custom Code > Code Injection > FOOTER. Read the code for any
        instructions within.
        
      * Add code from file **[store page detail description search text match
        add text.html][6]** to Website > Pages > Website Tools > Custom Code >
        Code Injection > FOOTER.
        
    * Refer to [Add code to the header and footer][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-04-08**

  * moved options out of main code
  * updated to work with v7.1 Products V2
  * remove dependency on twcsl
  * remove dependency on jQuery
  * bumped version to 0.3.0
  
* **2022-01-06**

  * fixes for SS Dec. 20th 2021 structure/CSS changes
  * bumped version to 0.1d1
  
* **2021-06-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: store%20page%20detail%20description%20search%20text%20match%20add%20text%20options.html#L1
[6]: store%20page%20detail%20description%20search%20text%20match%20add%20text.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
