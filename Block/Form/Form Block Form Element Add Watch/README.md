# Form Block Form Element Add Watch

### [License][1]

### Synopsis

Watch for Form block form elements to be added to the [DOM][2].

### Version

  * 0.6.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][5], a [CDN][6])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Form Block Form Element Add Watch -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch/form%20block%20form%20element%20add%20watch.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch/form%20block%20form%20element%20add%20watch.min.js" type="module"></script>
          
          <!-- end TWC Form Block Form Element Add Watch -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * v7.1
      
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Form Block Form Element Add Watch -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch/form%20block%20form%20element%20add%20watch.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch/form%20block%20form%20element%20add%20watch.min.js" type="module"></script>
            
            <!-- end TWC Form Block Form Element Add Watch -->
            
          ```
          
      * v7.0
      
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Form Block Form Element Add Watch -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch/form%20block%20form%20element%20add%20watch.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@b639e8d6c2398c49125c1b92b9a6d341a5bae757/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch/form%20block%20form%20element%20add%20watch.min.js" type="module"></script>
            
            <!-- end TWC Form Block Form Element Add Watch -->
            
          ```
          
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[form block form element add watch.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][7] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * v7.1
    
      * Add code from file **[form block form element add watch.html][9]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[form block form element add watch.html][9]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][8].

## Notes

* This code is a base for other effects.

* Support for removed callbacks has been removed but the old callbacks data
  structure is still supported. However the removed callbacks won't be called.
  For your new or updated code you will want to follow the new data structure.

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2026-02-13**

  * added support for the lightbox design setting
  * bumped version to 0.6.0
  
* **2025-11-09**

  * removed support for removed callbacks
  * fixed issue with code not working when a site visitor views the site
  * bumped version to 0.5.0
  
* **2025-03-01**

  * restructure how user callbacks are added
  * code is active in Preview
  * remove jQuery dependency
  * bumped version to 0.4.0
  
* **2024-04-27**

  * restructured the code
  * fix for user callbacks not running
  * bumped version to 0.3.0
  
* **2023-10-09**

  * remove some guard checks that prevented some nodes being passed to callbacks
  * bumped version to 0.2.1
  
* **2023-07-28**

  * support calling multiple callbacks
  * bumped version to 0.2.0
  
* **2023-07-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://www.jsdelivr.com/
[6]: https://en.wikipedia.org/wiki/Content_delivery_network
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: form%20block%20form%20element%20add%20watch.html#L1
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
