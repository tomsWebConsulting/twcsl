# Store Page Detail Tag Based Image Add Before Additional Info

### [License][1]

### Synopsis

Add images to product detail based on tags before Additional Info.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### v7.1 Products V2 Compatible

  * Not Applicable
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Page Tags Cache][5].

---

## Install

* Install **[Page Tags Cache][6]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options
  
  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][7], a [CDN][8])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add code from file **[store page detail tag based image add before
          additional info options.html][9]** to Page Settings > Advanced >
          Page Header Code Injection for the page. Read the code for any
          instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Page Tags Cache -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@71bb4218b4abff9b3bbfdb04f384ed33c7be432c/Page/Store/Detail/Store%20Page%20Detail%20Tag%20Based%20Image%20Add%20Before%20Additional%20Info/store%20page%20detail%20tag%20based%20image%20add%20before%20additional%20info.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@9c3f075a7ae97f0203a89710358f9b0ee2972c15/Page/Store/Detail/Store%20Page%20Detail%20Tag%20Based%20Image%20Add%20Before%20Additional%20Info/store%20page%20detail%20tag%20based%20image%20add%20before%20additional%20info.min.js" type="module"></script>
            
            <!-- end TWC Page Tags Cache -->
            
          ```
          
        * Refer to [per-page code injection][10] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Pages.
          
        * v7.1
        
          * Add code from file **[store page detail tag based image add before
            additional info options.html][9]** to Website > Pages >
            Custom Code > Code Injection > FOOTER. Read the code for any
            instructions within.
            
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Page Tags Cache -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@71bb4218b4abff9b3bbfdb04f384ed33c7be432c/Page/Store/Detail/Store%20Page%20Detail%20Tag%20Based%20Image%20Add%20Before%20Additional%20Info/store%20page%20detail%20tag%20based%20image%20add%20before%20additional%20info.min.css" rel="stylesheet" type="text/css">
            
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@9c3f075a7ae97f0203a89710358f9b0ee2972c15/Page/Store/Detail/Store%20Page%20Detail%20Tag%20Based%20Image%20Add%20Before%20Additional%20Info/store%20page%20detail%20tag%20based%20image%20add%20before%20additional%20info.min.js" type="module"></script>
              
              <!-- end TWC Page Tags Cache -->
              
            ```
            
        * v7.0
        
          * Add code from file **[store page detail tag based image add before
            additional info options.html][9]** to Website > Pages >
            Website Tools > Custom Code > Code Injection > FOOTER. Read the code
            for any instructions within.
            
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Page Tags Cache -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@9c3f075a7ae97f0203a89710358f9b0ee2972c15/Page/Store/Detail/Store%20Page%20Detail%20Tag%20Based%20Image%20Add%20Before%20Additional%20Info/store%20page%20detail%20tag%20based%20image%20add%20before%20additional%20info.min.js" type="module"></script>
              
              <!-- end TWC Page Tags Cache -->
              
            ```
            
        * Refer to [Add code to code injection][11] for details.
  
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[store page detail tag based image add before
        additional info options.html][9]** to Page Settings > Advanced >
        Page Header Code Injection for the page. Read the code for any
        instructions within.
        
      * Add code from file **[page tags cache.html][12]** to Page Settings >
        Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][10] for details.
        
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * v7.1
      
        * Add code from file **[store page detail tag based image add before
          additional info options.html][9]** to Website > Pages > Custom Code >
          Code Injection > FOOTER. Read the code for any instructions within.
          
        * Add code from file **[page tags cache.html][12]** to Website > Pages >
          Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[store page detail tag based image add before
          additional info options.html][9]** to Website > Pages >
          Website Tools > Custom Code > Code Injection > FOOTER. Read the code
          for any instructions within.
          
        * Add code from file **[page tags cache.html][12]** to Website > Pages >
          Website Tools > Custom Code > Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][11] for details.

## Make a Donation

Please consider [making a donation][13].

## Changes

* **2025-12-19**

  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.2.0
  
* **2021-04-09**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache#page-tags-cache
[7]: https://www.jsdelivr.com/
[8]: https://en.wikipedia.org/wiki/Content_delivery_network
[9]: store%20page%20detail%20tag%20based%20image%20add%20before%20additional%20info%20options.html#L1
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[11]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[12]: store%20page%20detail%20tag%20based%20image%20add%20before%20additional%20info.html#L1
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
