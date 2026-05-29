# Store Page List Category Description Add

### [License][1]

### Synopsis

Add a category description to Store category pages.

### Version

  * 0.7.1

#### SS Version

  * 7.0 ([Avenue template][2], [Bedford template family][3], [Brine template family][4], [Skye template family][5], [Wells][6])

#### Dependencies

  * [Squarespace plan][7] that supports [JavaScript][8].
  
  * [Page Categories to Module][9]

---

## Install

* Install **[Page Categories to Module][10]**. After you install and use the code
  be sure to continue on with the rest of the steps.
  
* Options
 
  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][11], a [CDN][12])
    
    * Options
    
      * Page Specific
      
        Use this option if you want to have this effect on only one Store Page.
        
        * Add code from file **[store page list category description add
          options.html][13]** to Page Settings > Advanced >
          Page Header Code Injection for the Page. Read the code for any
          instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Store Page. Refer to [per-page code
          injection][14] for details.
          
          ```html
          <!-- begin TWC Store Page List Category Description Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@765644b389da987c519515eb20fa6744e9467936/v7.0/Page/Store/List/Store%20Page%20List%20Category%20Description%20Add/store%20page%20list%20category%20description%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Category Description Add -->
            
          ```
      
      * Site-wide
      
        Use this option if you want to have this effect on all Store Pages.
        
        * Add code from file **[store page list category description add
          options.html][13]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page List Category Description Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@977a4f3e104fc6e2269b47455492ebc7b3415ad8/v7.0/Page/Store/List/Store%20Page%20List%20Category%20Description%20Add/store%20page%20list%20category%20description%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@765644b389da987c519515eb20fa6744e9467936/v7.0/Page/Store/List/Store%20Page%20List%20Category%20Description%20Add/store%20page%20list%20category%20description%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Category Description Add -->
            
          ```
          
          Refer to [Add code to code injection][15] for details.
          
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Store Page.
      
      * Add code from file **[store page list category description add
        options.html][13]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for any
        instructions within.
        
      * Add code from file **[store page list category description
        add.html][16]** to Page Settings > Advanced > Page Header Code Injection
        for the Page. Refer to [per-page code injection][14] for details.
        
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add code from file **[store page list category description add
        options.html][13]** to Website > Pages > Website Tools > Custom Code >
        Code Injection > FOOTER. Read the code for any instructions within.
        
      * Add code from file **[store page list category description
        add.html][16]** to Website > Pages > Website Tools > Custom Code >
        Code Injection > FOOTER. Refer to [Add code to code injection][16] for
        details.

## How to Use

Create a new Dropdown Page. Set Title to **TWC Store Page List Categories
Add** and URL Slug to **twc-splcda**.

In the Dropdown Page create Blank Pages, one for each Store Page Category where
you want to add a description. Note the URL Slug for use in the options
code. While the Blank Pages you create can be free form in regards to the
Settings, you may want to use URL Slugs of the form **twc-splcda/red** to keep
things organized and to remind you that the Page is being used by this code.

## Make a Donation

Please consider [making a donation][17].

## Changes

* **2026-05-29**

  * reworked code to be more flexible where page categories to modules code is
    placed
  * bumped version to 0.7.1
  
* **2026-05-29**

  * updated to use Blank Pages as source for description
  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.7.0
  
* **2024-08-16**

  * fixed category not working for all category
  * bumped version to 0.6.3
  
* **2024-07-25**

  * fixed LESS calc error
  * bumped version to 0.6.2
  
* **2024-07-10**

  * fixed description floating after grid
  * bumped version to 0.6.1
  
* **2023-10-01**

  * added support for Wells template
  * bumped version to 0.6.0
  
* **2023-07-11**

  * made ajax compatible
  * added support for Skye template family
  * bumped version to 0.5.0
  
* **2022-05-04**

  * update code for twc global, multiple effect can coexist
  * added user selector option
  * break CSS out into separate file
  * bumped version to 0.4.0
  
* **2021-11-15**

  * fixed description layout issue when categories are set to side for Brine
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
[9]: https://github.com/tomsWebConsulting/twcsl/tree/main/Bookmarklet/Page/Page%20Categories%20to%20Module
[10]: https://github.com/tomsWebConsulting/twcsl/tree/main/Bookmarklet/Page/Page%20Categories%20to%20Module#page-categories-to-module
[11]: https://www.jsdelivr.com/
[12]: https://en.wikipedia.org/wiki/Content_delivery_network
[13]: store%20page%20list%20category%20description%20add%20options.html#L1
[14]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[15]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[16]: store%20page%20list%20category%20description%20add.html#L1
[17]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
