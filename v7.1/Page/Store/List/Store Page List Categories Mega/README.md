# Store Page List Categories Mega

### [License][1]

### Synopsis

Store page list categories mega menu.

### Version

  * 0.6.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Page Categories to Module][4]

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
      
      Use this option if you want to have this effect on only one Store Page.
      
      * Add code from file **[store page list categories mega
        options.html][6]** to Page Settings > Advanced > Page Header Code
        Injection for the Store Page. Read the code for any instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Store Page.
        
        ```html
        <!-- begin TWC Store Page List Categories Mega -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a89156db92c0d9c59e74bd78e1f75c230905bb74/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Mega/store%20page%20list%20categories%20mega.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a89156db92c0d9c59e74bd78e1f75c230905bb74/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Mega/store%20page%20list%20categories%20mega.min.js" type="module"></script>
          
          <!-- end TWC Store Page List Categories Mega -->
          
        ```
        
      *  Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add code from file **[store page list categories mega options.html][6]**
        to Website > Pages > Custom Code > Code Injection > FOOTER. Read the
        code for any instructions within.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Store Page List Categories Mega -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a89156db92c0d9c59e74bd78e1f75c230905bb74/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Mega/store%20page%20list%20categories%20mega.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@a89156db92c0d9c59e74bd78e1f75c230905bb74/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Mega/store%20page%20list%20categories%20mega.min.js" type="module"></script>
          
          <!-- end TWC Store Page List Categories Mega -->
          
        ```
        
      *  Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
    
    Use this option if you want to have this effect on only one Store Page.
    
    * Add code from file **[store page list categories mega options.html][6]**
      to Page Settings > Advanced > Page Header Code Injection for the Store
      Page. Read the code for any instructions within.
      
    * Add code from file **[store page list categories mega.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the Store Page.
      
    * Refer to [per-page code injection][7] for details.
      
  * Site-wide
    
    Use this option if you want to have this effect on all Store Pages.
    
    * Add code from file **[store page list categories mega options.html][6]**
      to Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
      for any instructions within.
      
    * Add code from file **[store page list categories mega.html][9]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][8] for details.

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2026-02-24**

  * updated to work with Store Filter beta
  * updated to use Page Categories to Module
  * bumped version to 0.6.0
  
* **2025-11-02**

  * fixed issues after post Products V2 Squarespace changes
  * removed redundant guard checks
  * bumped version to 0.5.3
  
* **2025-08-12**

  * added checks for is store and list page
  * bumped version to 0.5.2
  
* **2025-08-11**

  * fixed some issues with desktop vs mobile layouts
  * bumped version to 0.5.1
  
* **2025-08-11**

  * made code less heavy handed when removing Squarespace UI elements, user
    decides with settings
  * moved options out of main code
  * updated to work with Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.5.0
  
* **2025-01-14**

  * update to work with Store Page List Categories Cache v0.2.0
  * bumped version to 0.4.0
  
* **2024-12-22**

  * more minor tweaks to spacing
  * bumped version to 0.3.2
  
* **2024-04-30**

  * fix for hide icons spacing issue
  * bumped version to 0.3.1
  
* **2024-04-30**

  * add option to hide icons
  * add option to expand all categories on page load
  * bumped version to 0.3.0
  
* **2023-07-31**

  * fix for levels that have no children not lining up with those that do for
    type top
  * fix for mega not not being added at farthest branches of tree
  * add CSS to hide more elements not needed for effect
  * bumped version to 0.2.1
  
* **2023-07-31**

  * support for mobile
  * bumped version to 0.2.0
  
* **2023-07-03**

  * make font and markers larger on mobile
  * fix some spacing issues on mobile
  * bumped version to 0.1.1
  
* **2023-06-30**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: store%20page%20list%20categories%20mega%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: store%20page%20list%20categories%20mega.html#L1
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
