# Store Page List Empty HTML Add

### Synopsis

When there are no list products add html to the page.

### [License][1]

### Version

  * 0.3.0

#### SS Versions

  * 7.1

  * 7.0 ([Brine template family][2])

#### v7.1 Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][5], a [CDN][6])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one Store page.
        
      * Add code from file **[store page list empty html add options.html][7]**
        to Store Page Settings > Advanced > Page Header Code Injection for the
        page. Read the code for any instructions within.
        
      * Add the following code to Store Page Settings > Advanced >
        Page Header Code Injection for the page.
        
        ```html
        <!-- begin Store Page List Empty HTML Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@811a4807851e00aa96f517221de4c7c3055394b3/Page/Store/List/Store%20Page%20List%20Empty%20HTML%20Add/store%20page%20list%20empty%20html%20add.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@811a4807851e00aa96f517221de4c7c3055394b3/Page/Store/List/Store%20Page%20List%20Empty%20HTML%20Add/store%20page%20list%20empty%20html%20add.min.js" type="module"></script>
          
          <!-- end TWC Store Page List Empty HTML Add -->
          
        ```
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * v7.1
      
        * Add code from file **[store page list empty html add
          options.html][7]** to Website > Pages > Custom Code > Code Injection >
          FOOTER.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page List Empty HTML Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@811a4807851e00aa96f517221de4c7c3055394b3/Page/Store/Detail/Store%20Page%20List%20Empty%20HTML%20Add/store%20page%20list%20empty%20html%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@811a4807851e00aa96f517221de4c7c3055394b3/Page/Store/Detail/Store%20Page%20List%20Empty%20HTML%20Add/store%20page%20list%20empty%20html%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Empty HTML Add -->
            
          ```
          
      * v7.0
      
        * Add code from file **[store page list empty html add
          options.html][7]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER.
          
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page List Empty HTML Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@811a4807851e00aa96f517221de4c7c3055394b3/Page/Store/Detail/Store%20Page%20List%20Empty%20HTML%20Add/store%20page%20list%20empty%20html%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@811a4807851e00aa96f517221de4c7c3055394b3/Page/Store/Detail/Store%20Page%20List%20Empty%20HTML%20Add/store%20page%20list%20empty%20html%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Empty HTML Add -->
            
          ```
          
      * Refer to [Add code to code injection][9] for details.

* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Store page.
      
    * Add code from files **[store page list empty html add options.html][7]**
      and **[store page list empty html add.html][10]** to
      Store Page Settings > Advanced > Page Header Code Injection for the page.
      
    * Refer to [per-page code injection][8] for details.
      
  * Site-wide
  
    * Use this option if you want to have this effect on all Store pages.
      
    * v7.1
    
      * Add code from files **[store page list empty html add options.html][7]**
        and **[store page list empty html add.html][10]** to Website > Pages >
        Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from files **[store page list empty html add options.html][7]**
        and **[store page list empty html add.html][10]** to Website > Pages >
        Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][9] for details.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-11-22**

  * moved options out of main code
  * updated to work with v7.1 Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.3.0
  
* **2022-02-03**

  * wrap code in a Immediately-Invoked Function Expression to isolate initialize
    function
  * bumped version to 0.2d3
  
* **2022-02-02**

  * fix for initialization code break for v7.1
  * bumped version to 0.2d2
  
* **2022-01-12**

  * make ajax compatible for v7.0
  * bumped version to 0.2d1
  
* **2022-01-11**

  * added support for v7.0 (Brine)
  * use twcsl
  * bumped version to 0.2d0
  
* **2021-04-01**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://www.jsdelivr.com/
[6]: https://en.wikipedia.org/wiki/Content_delivery_network
[7]: store%20page%20list%20empty%20html%20add%20options.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: store%20page%20list%20empty%20html%20add.html#L1
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
