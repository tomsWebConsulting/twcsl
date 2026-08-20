# Page Section First CSS Variable Padding-Top Add

### [License][1]

### Synopsis

Add a CSS variable to :root that tracks the first page section CSS padding-top
property.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Page Section First CSS Variable Padding-Top Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@9cf7e86e8ecede17bad2bdc09eb6921aefc67775/v7.1/Sections/Page%20Section%20First%20CSS%20Variable%20Padding-Top%20Add/page%20section%20first%20css%20variable%20padding-top%20add.min.js" type="module"></script>
          
          <!-- end TWC Page Section First CSS Variable Padding-Top Add -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Page Section First CSS Variable Padding-Top Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@9cf7e86e8ecede17bad2bdc09eb6921aefc67775/v7.1/Sections/Page%20Section%20First%20CSS%20Variable%20Padding-Top%20Add/page%20section%20first%20css%20variable%20padding-top%20add.min.js" type="module"></script>
          
          <!-- end TWC Page Section First CSS Variable Padding-Top Add -->
          
        ```
        
      * Refer to [Add code to code injection][7] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[page section first css variable padding-top
      add.html][8]** to Page Settings > Advanced > Page Header Code Injection
      for the Page.
      
    * Refer to [per-page code injection][6] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * Add code from file **[page section first css variable padding-top
      add.html][8]** to Website > Pages > Custom Code > Code Injection >
      FOOTER.
      
    * Refer to [Add code to code injection][7].

## Note

This effect meant as a base for other effects. Use the CSS variable
**--twc-psfcvpta** for your CSS. The variable is available on the **:root**
element.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2026-08-20**

  * removed jQuery dependency
  * updated to work with recent Squarespace changes
  * bumped version to 0.3.0 (commit 9cf7e86e8ecede17bad2bdc09eb6921aefc67775)
  
* **2023-12-30**

  * store css variable in :root
  * bumped version to 0.2.0
  
* **2022-09-19**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: page%20section%20first%20css%20variable%20padding-top%20add.html#L1
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
